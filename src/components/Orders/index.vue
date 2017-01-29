<template lang="pug">
  .orders-view
    page-heading.vui-m-bottom--medium(title='Order Reporting')
    p.vui-m-bottom--medium Order Reporting - The order information below reflects the data from your station's traffic system. Videa updates traffic information once each day; as a result, data may not be current.

    panel.vui-m-bottom--large(title='View Selection')
      form.vui-grid.vui-grid--vertical-align-end(action='')

        fieldset.vui-form-element
          label.vui-form-element__label Search
          .vui-form-element__control.vui-m-right--small
            input.vui-input(type='text', name='searchText', v-model='searchKey', ref='searchKey', placeholder='Advertiser or Agency', style='width: 24rem')

        fieldset.vui-form-element
          label.vui-form-element__label.vui-m-right--x-small(for='fromDate') Flight Start Date
          .vui-form-element__control.vui-m-right--small
            datepicker#fromDate(:value='fromDate', name='fromDate')

        fieldset.vui-form-element
          label.vui-form-element__label.vui-m-right--x-small(for='fromDate') Flight End Date
          .vui-form-element__control.vui-m-right--small
            datepicker#toDate(:value='toDate', name='toDate')

        fieldset.vui-form-element
          button.vui-button.vui-button--brand.vui-m-right--x-small(@click.prevent='') Search

    i.fa.fa-spinner.fa-spin(v-show='loading')
    .vui-scrollable--x(v-show='!loading')
      table.vui-table.vui-no-row-hover(border='0', cellpadding='0', cellspacing='0')
        thead
          tr
            th(v-for='column in gridColumns')
              a.vui-grid.vui-grid--align-spread(href='#', @click.prevent="sortBy(column.field)", :class='{active: sortKey == column.field}')
                span {{column.title}}
                icon.vui-icon--sort-arrow(name='sort-asc')
        tbody
          template(v-for='(order, index) in orders')
            tr
              td
                a(href='#', @click.prevent='toggleDetail(order)')
                  icon.vui-align-middle(:name="(order.expanded) ? 'caret-lower-right' : 'caret-right'")
                span {{ order.advertiser }}
              td {{ order.agency }}
              td {{ order.cpe }}
              td {{ order.flightStartDate }}
              td {{ order.flightEndDate }}
              td.vui-text-align--right {{ order.revenue | numberWithCommas | formatMoney }}
              //- td.vui-text-align--right {{ order.share | decimalToPercent }}
              td.vui-text-align--right {{ sharedState['share'+order.id] | decimalToPercent }}
              td {{ order.stationOrderNumber }}
              td Manage Schedule
              td {{ order.id }}
              td {{ order.id == 135001 ? orderDate : order.orderDate }}
            tr.animated(v-show='order.expanded')
              td.expanded(:colspan='gridColumns.length')
                .vui-box.vui-theme--shade.vui-grid.vui-grid--align-spread.vui-m-top--medium
                  span
                    b.vui-m-right--x-small Agency:
                    | {{ order.agency }}
                    br
                    b.vui-m-right--x-small Buyer:
                    | {{ order.buyer }}
                  div.vui-theme--shade.vui-grid.vui-grid--align-spread(v-for='entry in order.revenueBy')
                    .vui-grid--vertical.vui-grid--align-center
                      .vui-text-align--center
                        b {{ entry.month }}
                      .vui-text-align--center $ {{ entry.revenue | numberWithCommas }}
                  span
                    b.vui-m-right--x-small Dates:
                    | {{ order.flightStartDate }} - {{ order.flightEndDate }}
                    br
                    b.vui-m-right--x-small Demo:
                    | {{ order.demo }}
                table.vui-table.vui-no-row-hover.vui-m-bottom--large(style='background: white')
                  thead
                    tr
                      th Daypart
                      th.vui-text-align--right.u-width-small AUR
                      th.vui-text-align--right.u-width-small # of Spots
                      th.vui-text-align--right.u-width-medium Revenue
                      th.vui-text-align--right.u-width-small
                        | CPP
                        sup 1
                      th.vui-text-align--right.u-width-small
                        | Rating
                        sup 1
                      th.vui-text-align--right.u-width-small(style='padding-right: 1rem')
                        | GRPs
                        sup 1
                  tbody(v-for='daypart in order.dayparts')
                    tr
                      td {{ daypart.name }}
                      td.vui-text-align--right {{ daypart.aur | numberWithCommas | formatMoney }}
                      td.vui-text-align--right {{ daypart.spots }}
                      td.vui-text-align--right {{ daypart.revenue | numberWithCommas | formatMoney }}
                      td.vui-text-align--right {{ Math.round((daypart.aur / daypart.rating)) | numberWithCommas | formatMoney  }}
                      td.vui-text-align--right {{ daypart.rating | formatRating }}
                      td.vui-text-align--right {{ (daypart.spots * daypart.rating) | formatRating  }}
                  tfoot
                    tr
                      td(colspan='7')
                        .vui-grid.vui-grid--align-spread
                          .vui-align-middle
                            sup.vui-m-right--xx-small 1
                            span(style='font-weight: normal') Nielsen source or data derived from Nielsen

                          a.vui-align-middle(@click.prevent='showOrder(order.id)', href='#')
                            span.vui-align-middle.vui-m-right--xx-small View Detail
                            icon.vui-align-middle(name="arrow-circle-right")
</template>

<script>
  import $ from 'jquery'
  import moment from 'moment'
  import store from 'store'

  export default {
    props: {
      orderRoute: {
        type: String,
        default: 'sellers.order'
      }
    },

    watch: {
      disabled () {
        this.$refs.dp.getDateRange()
      },

      format (newV) {
        this.value = this.$refs.dp.stringify(new Date(this.value))
      }
    },

    data () {
      return {
        sharedState: store.state,
        state: store.state,
        activePage: 1,
        offset: 0,
        count: 2,
        loading: false,
        sortKey: '',
        sortOrder: 1,
        searchKey: '',
        eventMsg: null,
        fromDate: new Date('2016-12-26T12:24:00'),
        toDate: new Date('2017-03-26T12:24:00'),
        orderDate: moment().format('MM/DD/YY'),
        columns: [
          { name: 'advertiser' },
          { name: 'agency' },
          { name: 'campaign' },
          { name: 'start' },
          { name: 'end' },
          { name: 'revenue' },
          { name: 'share' },
          { name: 'orderId' },
          { name: 'orderDate' }
        ],
        gridColumns: [
          { field: 'advertiser', title: 'Advertiser' },
          { field: 'agency', title: 'Agency' },
          { field: 'cpe', title: 'CPE' },
          { field: 'flightStartDate', title: 'Start' },
          { field: 'flightEndDate', title: 'End' },
          { field: 'revenue', title: 'Revenue' },
          { field: 'share', title: 'Share' },
          { field: 'stationOrderNumber', title: 'Station Order #' },
          { field: 'manageSchedule', title: 'Manage Schedule' },
          { field: 'orderId', title: 'Videa Order #' },
          { field: 'orderDate', title: 'Order Date' }
        ],
        orders: []
      }
    },

    computed: {
      // sharedState () {
      //   return store.state
      // },

      // offset () {
      //   return this.activePage * this.count
      // }
    },

    methods: {
      fetchOrders () {
        this.loading = true
        this.$http.get(store.apiHost + '/orders').then(
          (response) => {
            this.orders = response.data
            this.loading = false
          },
          (response) => {}
        )
      },

      toggleDetail (order) {
        // NOTE: Do I really need to use jQuery here?
        var $element = $(event.target).closest('tr')
        order.expanded = !order.expanded

        // if (order.expanded) {
        //   $element.css({ 'backgroundColor': '#cee5eb'})
        // } else {
        //   $element.css({ 'backgroundColor': '#ffffff'})
        // }
      },

      showOrder (id, version = '') {
        let routeInfo = {
          name: this.orderRoute,
          params: {
            id: id
          }
        }

        if (version) {
          routeInfo.query = { version: version }
        }

        this.$router.push(routeInfo)
      },

      sortBy (sortKey) {
        this.sortOrder = (this.sortKey === sortKey) ? this.sortOrder * -1 : 1
        this.sortKey = sortKey
      }
    },

    events: {
      'page-exp' (page) {
        this.activePage = page
        this.offset = page * count
      }
    },

    created () {
      this.fetchOrders()
    }
  }
</script>

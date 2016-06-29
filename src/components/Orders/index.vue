<template lang="jade">
  .orders-view
    page-heading.vui-m-bottom--medium(title='Orders')
    panel.vui-m-bottom--large(title='View Selection')
      //- form.vui-form--inline(action='')
      //-   fieldset.vui-form--compound
      //-     //- legend.form-element__legend.vui-form-element__label Flight Date Range
      //-     .form-element__group
      //-       .vui-form-element__row
      //-         //- .vui-form-element.vui-size--1-of-4.vui-align-bottom
      //-         //-   label.vui-form-element__label(for='input-01') Search
      //-         //-   input#input-01.vui-input(type='text')
      //-         .vui-form-element.vui-size--1-of-4.vui-align-bottom
      //-           label.vui-form-element__label(for='input-02') Start Date
      //-           datepicker#fromDate(:value.sync='fromDate', name='fromDate')
      //-         .vui-form-element.vui-size--1-of-4.vui-align-bottom
      //-           label.vui-form-element__label(for='input-01') End Date
      //-           datepicker#toDate(:value.sync='toDate', name='toDate')
      //-         .vui-form-element.vui-size--1-of-4.vui-align-bottom
      //-           button.vui-button.vui-button--brand.vui-m-right--x-small  Go
      //-           //- button.vui-button.vui-button--neutral.vui-m-right--x-small  Clear
      form.vui-grid.vui-grid--vertical-align-end(action='')

        fieldset.vui-form-element
          label.vui-form-element__label Search
          .vui-form-element__control.vui-m-right--small
            input.vui-input(type='text', name='searchText', v-model='searchKey', debounce='500', v-el:search-key='', placeholder='Search', style='width: 24rem')

        //- fieldset.vui-form-element
        //-   .vui-form-element__control.vui-m-right--small
        //-     .vui-select_container
        //-       select.vui-select(id='')
        //-         option Advertiser
        //-         option Agency
        //-         option Campaign

        fieldset.vui-form-element
          label.vui-form-element__label.vui-m-right--x-small(for='fromDate') Flight Start Date
          .vui-form-element__control.vui-m-right--small
            datepicker#fromDate(:value.sync='fromDate', name='fromDate')

        fieldset.vui-form-element
          label.vui-form-element__label.vui-m-right--x-small(for='fromDate') Flight End Date
          .vui-form-element__control.vui-m-right--small
            datepicker#toDate(:value.sync='toDate', name='toDate')

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
          template(v-for='order in orders | orderBy sortKey sortOrder | filterBy searchKey')
            tr(:class='($index % 2 === 1) ? "vui-highlight" : ""')
              td
                a(href='#', @click.prevent='toggleDetail(order, $event)')
                  svg.vui-icon.vui-icon--small(style="width: 1rem; height: 1rem;")
                    use(xlink:href="/Content/assets/icons.svg#icon-{{ order.expanded ? 'caret-lower-right' : 'caret-right'}}", xmlns:xlink='http://www.w3.org/1999/xlink')
                a(@click.prevent='showOrder(order.id)', href='#') {{ order.id }}
              td  {{ order.advertiser }}
              td {{ order.agency }}
              td {{ order.cpe }}
              td {{ order.flightStartDate }}
              td {{ order.flightEndDate }}
              td.vui-text-align--right {{ order.revenue | numberWithCommas | formatMoney }}
              td.vui-text-align--right {{ order.share | decimalToPercent }}
              td {{ order.orderDate }}
            tr.animated(v-show='order.expanded')
              td.expanded(colspan='9')
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
                        b {{ entry.month | capitalize }}
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
      //- paging(:items='orders', :count='count', type='order')
</template>

<script>
  import $ from 'jquery'
  import store from '../../store'
  import Icon from '../Icon.vue'
  import Panel from '../Panel.vue'
  import PageHeading from '../PageHeading.vue'
  import Paging from '../Paging.vue'
  import Datepicker from '../Datepicker2.vue'

  export default {
    components: {
      Panel,
      PageHeading,
      Icon,
      Paging,
      Datepicker
    },

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
        fromDate: new Date('2016-09-26T12:24:00'),
        toDate: new Date('2016-12-25T12:24:00'),
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
          { field: 'orderId', title: 'Order #' },
          { field: 'advertiser', title: 'Advertiser' },
          { field: 'agency', title: 'Agency' },
          { field: 'cpe', title: 'CPE' },
          { field: 'flightStartDate', title: 'Start' },
          { field: 'flightEndDate', title: 'End' },
          { field: 'revenue', title: 'Revenue' },
          { field: 'share', title: 'Share' },
          { field: 'orderDate', title: 'Order Date' }
        ],
        orders: []
      }
    },

    computed: {
      sharedState () {
        return store.state
      },

      offset () {
        return this.activePage * this.count
      }
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

      toggleDetail (order, event) {
        // NOTE: Do I really need to use jQuery here?
        var $element = $(event.target).closest('tr')
        order.expanded = !order.expanded

        console.log(order.expanded)

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

        this.$route.router.go(routeInfo)
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
    },

    ready () {
      // this.$els.searchKey.focus()
    }
  }
</script>

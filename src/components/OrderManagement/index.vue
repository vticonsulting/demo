<template lang="jade">
  .order-management-view
    h1.vui-text-heading--large.vui-m-bottom--medium Accept/Reject Orders
    .vui-scrollable--x
      table.vui-table.vui-no-row-hover
        thead
          tr
            th.u-width-medium Order #
            th.u-width-medium Status
            th.u-width-medium Type
            th Advertiser
            th Agency
            th CPE
            th.u-width-medium Start
            th.u-width-medium End
            th.u-width-medium Currency
            th.u-width-large Revenue
            th.u-width-large Share
        tbody(v-for='order in orders')
          tr(:class='($index % 2 === 1) ? "vui-highlight" : ""')
            td
              a(v-if='order.versions.length !== 1', href='#', @click.prevent='toggleExpanded()')
                svg.vui-icon.vui-icon--x-small(style="width: 1rem; height: 1rem;margin-left: -1rem")
                  use(xlink:href="/assets/icons.svg#icon-{{ expanded ? 'caret-lower-right' : 'caret-right'}}", xmlns:xlink='http://www.w3.org/1999/xlink')
              a.vui-align-middle(@click.prevent='showDetail(order.id)', href='#') {{order.id}}
            td
              span.vui-badge.new(:class='order.status') {{order.status}}
            td {{order.type}}
            td {{order.advertiser}}
            td {{order.agency}}
            td {{order.cpe}}
            td {{order.flightStartDate}}
            td {{order.flightEndDate}}
            td {{order.currency}}
            td.vui-text-align--right {{ order.revenue | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ order.share | decimalToPercent }}
          tr(v-if='order.versions.length !== 1', v-show='expanded')
            td.expanded(colspan='11')
              .vui-box.vui-theme--shade.vui-grid.vui-grid--align-spread.vui-m-top--medium
                h3.vui-text-heading--small Version History
              table.vui-table.vui-no-row-hover.vui-m-bottom--large(style='background: white')
                thead
                  tr
                    th.vui-text-align--center.u-width-x-large Version
                    th.u-width-x-large Date Submitted
                    th.u-width-x-large Time Submitted
                    th Submitted By
                    th
                tbody
                  tr(v-for='version in order.versions | orderBy "id" -1')
                    td.vui-text-align--center {{ version.id }}
                    td {{ version.dateSubmitted }}
                    td {{ version.timeSubmitted }}
                    td {{ version.submittedBy }}
                    td: a(@click.prevent='showDetail(order.id, version.id)', href='#') View
                    //- td: a(v-link='{ name: route, params: { id: order.id }, query: { version: version.id } }') View
</template>

<script>
  import store from '../../store'
  import Icon from '../Icon.vue'

  export default {
    components: { Icon },

    props: {
      detailRoute: {
        type: String,
        default: 'sellers.order-management.order'
      }
    },

    data () {
      return {
        sharedState: store.state,
        expanded: false,
        columns: [
          { name: 'advertiser' },
          { name: 'agency' },
          { name: 'campaign' },
          { name: 'flightStartDate' },
          { name: 'flightEndDate' },
          { name: 'revenue' },
          { name: 'share' },
          { name: 'orderId' },
          { name: 'orderDate' }
        ],
        gridColumns: [
          { field: 'advertiser', title: 'Advertiser' },
          { field: 'agency', title: 'Agency' },
          { field: 'campaign', title: 'Campaign' },
          { field: 'flightStartDate', title: 'Flight Start Date' },
          { field: 'flightEndDate', title: 'Flight End Date' },
          { field: 'revenue', title: 'Revenue' },
          { field: 'share', title: 'Share' },
          { field: 'orderId', title: 'Order #' },
          { field: 'orderDate', title: 'Order Date' }
        ],
        orders: []
      }
    },

    computed: {
      sharedState () {
        return store.state
      }
    },

    methods: {
      fetchOrders () {
        this.$http.get(store.apiHost + '/orders')
          .then((response) => {
            this.orders = response.data
          }, (response) => {
            // error callback
          })
      },

      showDetail (id, version = '') {
        let routeInfo = {
          name: this.detailRoute,
          params: {
            id: id
          }
        }

        if (version) {
          routeInfo.query = { version: version }
        }

        this.$route.router.go(routeInfo)
      },

      toggleExpanded () {
        this.expanded = !this.expanded
      }
    },

    created () {
      this.fetchOrders()
    }
  }
</script>

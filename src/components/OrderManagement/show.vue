<template lang="jade">
  .order-management-show-view
    h2.vui-text-heading--large {{order.advertiser}} Details
    .vui-grid.vui-grid--align-spread.vui-m-bottom--large
      a(@click.prevent='showSummary()')
        icon.vui-align-middle(name='arrow-circle-left')
        span.vui-align-middle Back to Order Management

    .vui-box.vui-grid.vui-grid--align-spread.vui-m-bottom--large.vui-wrap.vui-theme--default

      fieldset.vui-form-element
        label.vui-form-element__label(for='status') Status
        .vui-form-element__control
          span.vui-badge.new(:class='order.status') {{order.status}}

      fieldset.vui-form-element
        label.vui-form-element__label Order #
        .vui-form-element__control
          span.vui-form-element__static {{ order.videaOrderNo }}

      fieldset.vui-form-element
        label.vui-form-element__label Advertiser
        .vui-form-element__control
          span.vui-form-element__static {{ order.advertiser }}

      fieldset.vui-form-element
        label.vui-form-element__label CPE
        .vui-form-element__control
          span.vui-form-element__static {{ order.cpe }}

      fieldset.vui-form-element
        label.vui-form-element__label Agency
        .vui-form-element__control
          span.vui-form-element__static {{ order.agency }}

      fieldset.vui-form-element
        label.vui-form-element__label Total Revenue
        .vui-form-element__control
          span.vui-form-element__static $ {{ order.revenue | numberWithCommas }}

      fieldset.vui-form-element
        label.vui-form-element__label Share
        .vui-form-element__control
          span.vui-form-element__static {{ order.share | decimalToPercent }}

      fieldset.vui-form-element
        label.vui-form-element__label Total Spots
        .vui-form-element__control
          span.vui-form-element__static {{order.spots}}

      fieldset.vui-form-element
        label.vui-form-element__label Start
        .vui-form-element__control
          span.vui-form-element__static {{order.flightStartDate}}

      fieldset.vui-form-element
        label.vui-form-element__label End
        .vui-form-element__control
          span.vui-form-element__static {{order.flightEndDate}}

      fieldset.vui-form-element
        label.vui-form-element__label Demo
        .vui-form-element__control
          span.vui-form-element__static {{order.demo}}

      .vui-form-element
        label.vui-form-element__label Sales Office
        .vui-form-element__control
          span.vui-form-element__static Videa

      fieldset.vui-form-element
        label.vui-form-element__label Location
        .vui-form-element__control
          span.vui-form-element__static {{order.salesOfficeLocation}}

      fieldset.vui-form-element
        label.vui-form-element__label Salesperson
        .vui-form-element__control
          span.vui-form-element__static {{order.salesPerson}}

    .vui-grid.vui-grid--align-end.vui-m-bottom--medium(v-if='sharedState.activeApp !== "reps"')
      .buttons
        button.vui-button--brand.vui-m-right--x-small(@click.prevent='showAcceptOrderModal = true') Accept
        button.vui-button--neutral(@click.prevent='showRejectOrderModal = true') Reject

    .vui-scrollable--x
      table.vui-table.vui-no-row-hover
        thead
          tr
            th Program
            th Time
            th Length
            th Start
            th End
            th Rate
            th Weekly Spots
            th Total Spots
            th Total Cost
            th Buyer Rating
            th Total Ratings
        tbody(v-for='version in order.versions')
          tr(v-for='(index, program) in version.programs', :class='(index % 2 === 0) ? "vui-highlight" : ""')
            td {{program.name}}
            td {{program.time}}
            td.vui-text-align--center {{program.length}}
            td {{program.flightStartDate}}
            td {{program.flightEndDate}}
            td.vui-text-align--right {{program.rate | numberWithCommas | formatMoney}}
            td.vui-text-align--right {{program.weeklySpots}}
            td.vui-text-align--right {{program.totalSpots}}
            td.vui-text-align--right {{program.totalCost | numberWithCommas | formatMoney}}
            td.vui-text-align--right {{program.buyerRating | formatRating}}
            td.vui-text-align--right {{program.totalRatings | formatRating}}
    accept-order-modal(:show.sync="showAcceptOrderModal")
    reject-order-modal(:show.sync="showRejectOrderModal")
</template>

<script>
  import store from '../../store'
  import Icon from '../../components/Icon.vue'
  import AcceptOrderModal from '../../components/AcceptOrderModal.vue'
  import RejectOrderModal from '../../components/RejectOrderModal.vue'

  export default {
    components: {
      Icon,
      AcceptOrderModal,
      RejectOrderModal
    },

    props: {
      summaryRoute: {
        type: String,
        default: 'sellers.order-management'
      },
      ordersRoute: {
        type: String,
        default: 'sellers.orders'
      }
    },

    data () {
      return {
        sharedState: store.state,
        showAcceptOrderModal: false,
        showRejectOrderModal: false,
        order: {},
        version: this.$route.params.id || 0
      }
    },

    methods: {
      fetchOrder (id) {
        this.$http.get(store.apiHost + '/orderManagement/' + id)
          .then((response) => {
            this.order = response.data
          }, (response) => {
            // error callback
          })
      },

      showSummary () {
        this.$route.router.go({
          name: this.summaryRoute
        })
      },

      showOrders () {
        this.$route.router.go({
          name: this.ordersRoute
        })
      }
    },

    created () {
      this.fetchOrder(this.$route.params.id)
    }
  }
</script>

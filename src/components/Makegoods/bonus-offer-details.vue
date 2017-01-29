<template lang="pug">
  .bonus-offer-details
    h1.vui-text-heading--medium Bonus Offer Details

    .vui-grid.vui-grid--align-spread
      fieldset.vui-form-element
        label.vui-form-element__label(for='') Advertiser
        .vui-form-element__control
          span.vui-form-element__static {{ offer.advertiser }}

      fieldset.vui-form-element
        label.vui-form-element__label(for='') Product
        .vui-form-element__control
          span.vui-form-element__static {{ offer.product }}

      fieldset.vui-form-element
        label.vui-form-element__label(for='') Flight Start
        .vui-form-element__control
          span.vui-form-element__static {{ offer.flightStartDate }}

      fieldset.vui-form-element
        label.vui-form-element__label(for='') Flight End
        .vui-form-element__control
          span.vui-form-element__static {{ offer.flightEndDate }}

      fieldset.vui-form-element
        label.vui-form-element__label(for='') Station Order #
        .vui-form-element__control
          span.vui-form-element__static {{ offer.stationOrderNumber }}

      fieldset.vui-form-element
        label.vui-form-element__label(for='') Videa Order #
        .vui-form-element__control
          span.vui-form-element__static {{ offer.videaOrderNumber }}

      fieldset.vui-form-element
        label.vui-form-element__label(for='') Estimate #
        .vui-form-element__control
          span.vui-form-element__static {{ offer.estimateNumber }}

      fieldset.vui-form-element
        label.vui-form-element__label(for='') Campaign
        .vui-form-element__control
          span.vui-form-element__static {{ offer.cpe }}

    table.vui-table
      thead
        tr
          th Line #
          th Program
          th Start Time
          th End Time
          th Days
          th Spot Length
          th Offered Spots
      tbody
        tr(v-for='makegood in makegoods')
          td.vui-text-align--center {{ makegood.buyLine }}
          td.vui-text-align--center {{ makegood.spotNumber }}
          td {{ makegood.programPlaced }}
          td {{ makegood.status }}
          td.vui-text-align--center {{ makegood.priority }}
          td {{ makegood.airDay }}
          td {{ makegood.airDate }}
          td {{ makegood.airTime }}
          td.vui-text-align--center {{ makegood.spotLength }}
          td.vui-text-align--center.vui-highlight
            input.vui-input.vui-text-align--center(type='text', style='width: 50px')
          td.vui-text-align--center.vui-highlight
            input.vui-input.vui-text-align--center(type='text', style='width: 50px')
          td.vui-text-align--center.vui-highlight
            input.vui-input.vui-text-align--center(type='text', style='width: 50px')
          td.vui-text-align--center.vui-highlight
            input.vui-input.vui-text-align--center(type='text', style='width: 50px')
          td.vui-text-align--center.vui-highlight
            input.vui-input.vui-text-align--center(type='text', style='width: 50px')
          td.vui-text-align--center.vui-highlight
            input.vui-input.vui-text-align--center(type='text', style='width: 50px')
          td.vui-text-align--center.vui-highlight
            input.vui-input.vui-text-align--center(type='text', style='width: 50px')
          td.vui-text-align--center.vui-highlight
            input.vui-input.vui-text-align--center(type='text', style='width: 50px')
          td.vui-text-align--center.vui-highlight
            input.vui-input.vui-text-align--center(type='text', style='width: 50px')
          td.vui-text-align--center.vui-highlight
            input.vui-input.vui-text-align--center(type='text', style='width: 50px')
          td.vui-text-align--center.vui-highlight
            input.vui-input.vui-text-align--center(type='text', style='width: 50px')
          td.vui-text-align--center.vui-highlight
            input.vui-input.vui-text-align--center(type='text', style='width: 50px')
          td.vui-text-align--right {{ makegood.buyerRate | numberWithCommas | formatMoney }}
          td.vui-text-align--right {{ makegood.buyerRating | formatRating }}
          td.vui-text-align--right {{ makegood.buyerCpp | numberWithCommas | formatMoney }}
          td
            //- textarea.vui-textarea(style='width: 300px', v-model='makegood.comment')
    fieldset.vui-form
    textarea.vui-textarea
</template>

<script>
  import store from 'store'
  import TransferOpenPremptsModal from 'components/TransferOpenPreemptsModal'

  export default {
    components: { TransferOpenPremptsModal },

    props: {
      ordersRoute: {
        type: String,
        default: 'sellers.orders'
      }
    },

    data () {
      return {
        sharedState: store.state,
        showTransferOpenPreemptsModal: false,
        offer: {},
        makegoods: [
          {
            buyLine: 57,
            spotNumber: 1,
            programPlaced: 'Early News',
            status: 'Preempted',
            priority: 1,
            airDay: 'Monday',
            airDate: '03/06/16',
            airTime: '05:44 PM',
            spotLength: ':30',
            buyerRate: 100,
            buyerRating: 1.0,
            buyerCpp: 100,
            comment: ''
          },
          {
            buyLine: 57,
            spotNumber: 1,
            programPlaced: 'Early News',
            status: 'Preempted',
            priority: 1,
            airDay: 'Monday',
            airDate: '03/06/16',
            airTime: '05:44 PM',
            spotLength: ':30',
            buyerRate: 100,
            buyerRating: 1.0,
            buyerCpp: 100,
            comment: ''
          },
          {
            buyLine: 57,
            spotNumber: 1,
            programPlaced: 'Early News',
            status: 'Preempted',
            priority: 1,
            airDay: 'Monday',
            airDate: '03/06/16',
            airTime: '05:44 PM',
            spotLength: ':30',
            buyerRate: 100,
            buyerRating: 1.0,
            buyerCpp: 100,
            comment: ''
          }
        ]
      }
    },

    methods: {
      fetchOffer (id) {
        this.$http.get(store.apiHost + '/offers/' + id)
          .then((response) => {
            this.offer = response.data
          }, (response) => console.log(response))
      },

      showOffers () {
        this.$route.router.push({
          name: this.offersRoute
        })
      }
    },

    created () {
      this.fetchOffer(this.$route.params.id)
      this.sharedState.activeApp = 'sellers'
    }
  }
</script>

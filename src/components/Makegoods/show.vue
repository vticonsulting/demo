<template lang="pug">
  .program-guide-view
    .vui-grid
      .vui-col.vui-align-middle
        h2.vui-text-heading--large Makegood Offer Details ( Show )
        .vui-grid.vui-grid--align-spread.vui-m-bottom--large
          router-link(:to='{ name: "sellers.makegoods" }')
            icon(name='arrow-circle-left')
            | Back to Makegoods Dashboard
      .vui-col.vui-align-middle
        fieldset.vui-form-element.vui-m-bottom--large.vui-text-align--right(v-if='sharedState.activeApp !== "reps"')
          button.vui-button.vui-button--neutral.vui-m-right--xx-small(@click.prevent='showRejectOfferModal = true') Reject Offer
          button.vui-button.vui-button--brand.vui-m-right--xx-small(@click.prevent='showAcceptOfferModal = true') Accept Offer

    .vui-box.vui-grid.vui-grid--align-spread.vui-m-bottom--large.vui-wrap.vui-theme--default

      fieldset.vui-form-element
        label.vui-form-element__label(for='') Offer Status
        .vui-form-element__control
          span.vui-show--inline-block.vui-m-top--x-small.vui-align-middle.vui-badge(:class='offer.offerStatus') {{ offer.offerStatus }}

      fieldset.vui-form-element
        label.vui-form-element__label(for='') Station Status
        .vui-form-element__control
          span.vui-show--inline-block.vui-m-top--x-small.vui-align-middle.vui-badge(:class='offer.acceptedByStation') {{ offer.acceptedByStation }}

      fieldset.vui-form-element
        label.vui-form-element__label(for='') Agency Status
        .vui-form-element__control
          span.vui-show--inline-block.vui-m-top--x-small.vui-align-middle.vui-badge(:class='offer.acceptedByAgency') {{ offer.acceptedByAgency }}

      fieldset.vui-form-element
        label.vui-form-element__label(for='') Offer Sent
        .vui-form-element__control
          span.vui-show--inline-block.vui-m-top--x-small.vui-align-middle {{ offer.makegoodNumber == 12676 ? dateMakegoodSent : offer.dateMakegoodSent }}

    .vui-grid.vui-m-bottom--large

    h2.vui-text-heading--medium.vui-m-bottom--small Pre-empt(s)
    .vui-scrollable--x.vui-m-bottom--large
      table.vui-table.vui-no-row-hover
        thead
          tr
            th(rowspan='2') Buy Line<br>Number
            th(rowspan='2') Spot<br>Number
            th(rowspan='2') Program<br>Placed
            th(rowspan='2') Priority
            th(rowspan='2') Air Day
            th(rowspan='2') Air Date
            th(rowspan='2') Air Time
            th(rowspan='2') Length
            th.vui-text-align--center.u-width-xx-large(colspan='4')
              .vui-grid.vui-grid--align-spread
                a.vui-align-middle(@click.prevent='', href='#')
                  icon(name='arrow-circle-left')
                span.vui-align-middle January
            th.vui-text-align--center.u-width-xx-large(colspan='4')
              span February
            th.vui-text-align--center.u-width-xx-large(colspan='4')
              .vui-grid.vui-grid--align-spread
                span.vui-align-middle March
                a.vui-align-middle(@click.prevent='', href='#')
                  icon(name='arrow-circle-right')
            th(rowspan='2') Spot<br>Rate
            th(rowspan='2') Buyer<br>Rating
            th(rowspan='2') Comment
          tr
            th.vui-text-align--center.u-width-xx-large(style='padding-left: 0.5rem') 02
            th.vui-text-align--center.u-width-xx-large 09
            th.vui-text-align--center.u-width-xx-large 16
            th.vui-text-align--center.u-width-xx-large 23
            th.vui-text-align--center.u-width-xx-large 30
            th.vui-text-align--center.u-width-xx-large 06
            th.vui-text-align--center.u-width-xx-large 13
            th.vui-text-align--center.u-width-xx-large 20
            th.vui-text-align--center.u-width-xx-large 27
            th.vui-text-align--center.u-width-xx-large 06
            th.vui-text-align--center.u-width-xx-large 13
            th.vui-text-align--center.u-width-xx-large 20

          tr(v-for='preempt in offer.preempts')
            td.vui-text-align--center {{ preempt.buyLine }}
            td.vui-text-align--center {{ preempt.spotNumber }}
            td {{ preempt.programPlaced }}
            td.vui-text-align--center {{ preempt.priority }}
            td {{ preempt.airDay }}
            td {{ preempt.airDate }}
            td {{ preempt.airTime }}
            td.vui-text-align--center {{ preempt.spotLength }}
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', :disabled='sharedState.activeApp == "reps"')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', value='1', :disabled='sharedState.activeApp == "reps"')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', :disabled='sharedState.activeApp == "reps"')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', :disabled='sharedState.activeApp == "reps"')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', :disabled='sharedState.activeApp == "reps"')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', :disabled='sharedState.activeApp == "reps"')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', :disabled='sharedState.activeApp == "reps"')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', :disabled='sharedState.activeApp == "reps"')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', :disabled='sharedState.activeApp == "reps"')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', :disabled='sharedState.activeApp == "reps"')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', :disabled='sharedState.activeApp == "reps"')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', :disabled='sharedState.activeApp == "reps"')
            td.vui-text-align--right {{ preempt.spotRate | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ preempt.buyerRating | formatRating}}
            td
              //- textarea.vui-textarea(style='width: 300px', v-model='makegood.comment')

    h2.vui-text-heading--medium.vui-m-bottom--small Makegood Spot(s) Offered
    .vui-scrollable--x.vui-m-bottom--large
      table.vui-table.vui-no-row-hover
        thead
          tr
            th(rowspan='2') Line<br>Number
            th(rowspan='2') Program
            th(rowspan='2') Start Time
            th(rowspan='2') End Time
            th(rowspan='2') Days
            th(rowspan='2') Length
            th(rowspan='2') Offered<br>Spots
            th.vui-text-align--center.u-width-xx-large(colspan='4')
              .vui-grid.vui-grid--align-spread
                a.vui-align-middle(@click.prevent='', href='#')
                  icon(name='arrow-circle-left')
                span.vui-align-middle January
            th.vui-text-align--center.u-width-xx-large(colspan='4')
              span February
            th.vui-text-align--center.u-width-xx-large(colspan='4')
              .vui-grid.vui-grid--align-spread
                span.vui-align-middle March
                a.vui-align-middle(@click.prevent='', href='#')
                  icon(name='arrow-circle-right')
            th(rowspan='2') Spot<br>Rate
            th(rowspan='2') Station<br>Rating
            th(rowspan='2') MG Comment
          tr
            th.vui-text-align--center.u-width-xx-large(style='padding-left: 0.5rem') 02
            th.vui-text-align--center.u-width-xx-large 09
            th.vui-text-align--center.u-width-xx-large 16
            th.vui-text-align--center.u-width-xx-large 23
            th.vui-text-align--center.u-width-xx-large 30
            th.vui-text-align--center.u-width-xx-large 06
            th.vui-text-align--center.u-width-xx-large 13
            th.vui-text-align--center.u-width-xx-large 20
            th.vui-text-align--center.u-width-xx-large 27
            th.vui-text-align--center.u-width-xx-large 06
            th.vui-text-align--center.u-width-xx-large 13
            th.vui-text-align--center.u-width-xx-large 20

          tr(v-for='makegood in offer.makegoods')
            td.vui-text-align--center {{ makegood.lineNumber }}
            td {{ makegood.program }}
            td {{ makegood.startTime }}
            td {{ makegood.endTime }}
            td.vui-text-align--center {{ makegood.days }}
            td.vui-text-align--center  {{ makegood.spotLength }}
            td.vui-text-align--center  {{ makegood.offeredSpots }}
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', :disabled='sharedState.activeApp == "reps"')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', :disabled='sharedState.activeApp == "reps"')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', :disabled='sharedState.activeApp == "reps"')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', :disabled='sharedState.activeApp == "reps"')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', value='1', :disabled='sharedState.activeApp == "reps"')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', value='1', :disabled='sharedState.activeApp == "reps"')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', :disabled='sharedState.activeApp == "reps"')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', :disabled='sharedState.activeApp == "reps"')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', :disabled='sharedState.activeApp == "reps"')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', :disabled='sharedState.activeApp == "reps"')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', :disabled='sharedState.activeApp == "reps"')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', :disabled='sharedState.activeApp == "reps"')
            td.vui-text-align--right {{ makegood.spotRate | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ makegood.stationRating }}
            td
              //- textarea.vui-textarea(style='width: 300px', v-model='makegood.comment')

    .vui-grid.vui-grid--align-spread.vui-m-bottom--large

    .vui-grid.vui-grid--pull-padded

      .vui-col--padded
        fieldset.vui-form-element
          label.vui-form-element__label Makegood Comments
          .vui-form-element__control
            div(v-if='!editing', style="box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.16);border: 1px solid #ccc; min-height: 11.5rem; background: rgba(250, 255, 189, 0.2);padding: 1rem") Offer STP -- Please Advise
            //- textarea.vui-textarea(style='height: 6rem')
            //-   | Offer STP -- Please Advise
            span.vui-form-element__help This field is read only
      .vui-col--padded
        table.vui-table.vui-no-row-hover(style='width: 350px; margin-top: 3.5rem')
          thead
            tr
              th Totals
              th.u-width-small.vui-text-align--center Spots
              th.u-width-small Dollars
              th.u-width-small GRPs
          tbody
            tr
              td Pre-empt
              td.vui-text-align--center 2
              td.vui-text-align--right $1,100
              td.vui-text-align--right 3.6
            tr
              td Makegood(s)
              td.vui-text-align--center 2
              td.vui-text-align--right $1,100
              td.vui-text-align--right 3.6

    fieldset.vui-form-element.vui-m-bottom--large.vui-text-align--right(v-if='sharedState.activeApp !== "reps"')
      button.vui-button.vui-button--neutral.vui-m-right--xx-small(@click.prevent='showRejectOfferModal = true') Reject Offer
      button.vui-button.vui-button--brand.vui-m-right--xx-small(@click.prevent='showAcceptOfferModal = true') Accept Offer
      //- button.vui-button.vui-button--secondary.vui-m-right--xx-small(@click.prevent='showTransferOpenPreemptsModal = true') Transfer Open Preempts

    accept-offer-modal(:show='showAcceptOfferModal')
    accept-offer-modal(:show='showAcceptOfferModal')
    //- transfer-open-prempts-modal(:show='showTransferOpenPreemptsModal')
</template>

<script>
  import moment from 'moment'
  import store from 'store'
  import AcceptOfferModal from 'components/AcceptOfferModal'
  import RejectOfferModal from 'components/RejectOfferModal'
  import TransferOpenPremptsModal from 'components/TransferOpenPreemptsModal'

  export default {
    components: { AcceptOfferModal, RejectOfferModal, TransferOpenPremptsModal },

    props: {
      ordersRoute: {
        type: String,
        default: 'sellers.orders'
      }
    },

    data () {
      return {
        dateMakegoodSent: moment().add(-3, 'days').format('MM/DD/YY'),
        sharedState: store.state,
        showRejectOfferModal: false,
        showAcceptOfferModal: false,
        showTransferOpenPreemptsModal: false,
        editing: false,
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
        this.$router.push({
          name: this.offersRoute
        })
      }
    },

    created () {
      this.fetchOffer(this.$route.params.id)
    }
  }
</script>

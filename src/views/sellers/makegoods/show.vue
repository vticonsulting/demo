<template lang="jade">
  .program-guide-view

    //- breadcrumbs
    .vui-grid
      .vui-col.vui-align-middle
        h2.vui-text-heading--large Makegood Offer Details
        .vui-grid.vui-grid--align-spread.vui-m-bottom--large
          a(v-link='{ name: "sellers.makegoods" }')
            svg.vui-icon.vui-icon--x-small.vui-align-middle.vui-m-right--xx-small
              use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='#icon-arrow-circle-left')
            | Back to Makegoods Dashboard
      .vui-col.vui-align-middle
        fieldset.vui-form-element.vui-m-bottom--large.vui-text-align--right
          button.vui-button.vui-button--neutral.vui-m-right--xx-small(@click.prevent='showRejectOfferModal = true') Reject Offer
          button.vui-button.vui-button--brand.vui-m-right--xx-small(@click.prevent='showAcceptOfferModal = true') Accept Offer

    .vui-box.vui-grid.vui-grid--align-spread.vui-m-bottom--large.vui-wrap.vui-theme--default

      //- fieldset.vui-form-element
      //-   label.vui-form-element__label(for='') Videa Order Number
      //-   .vui-form-element__control
      //-     span.vui-form-element__static {{offer.videaOrderNumber}}

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
          span.vui-show--inline-block.vui-m-top--x-small.vui-align-middle {{ offer.dateMakegoodSent }}

    .vui-grid.vui-m-bottom--large

    h2.vui-text-heading--medium.vui-m-bottom--small Preempts
    .vui-scrollable--x.vui-m-bottom--large
      table.vui-table.vui-no-row-hover
        thead
          tr
            th(rowspan='2') Buy Line<br>Number
            th(rowspan='2') Spot<br>Number
            th(rowspan='2') Program<br>Placed
            th(rowspan='2') Status
            th(rowspan='2') Priority
            th(rowspan='2') Air Day
            th(rowspan='2') Air Date
            th(rowspan='2') Air Time
            th(rowspan='2') Length
            th.vui-text-align--center.u-width-xx-large(colspan='4')
              .vui-grid.vui-grid--align-spread
                a.vui-align-middle(@click.prevent='', href='#')
                  icon(name='arrow-circle-left')
                span.vui-align-middle April
            th.vui-text-align--center.u-width-xx-large(colspan='4')
              span May
            th.vui-text-align--center.u-width-xx-large(colspan='4')
              .vui-grid.vui-grid--align-spread
                span.vui-align-middle June
                a.vui-align-middle(@click.prevent='', href='#')
                  icon(name='arrow-circle-right')
            th(rowspan='2') Spot<br>Rate
            th(rowspan='2') Buyer<br>Rating
            th(rowspan='2') Comment
          tr
            th.vui-text-align--center.u-width-xx-large 04
            th.vui-text-align--center.u-width-xx-large 11
            th.vui-text-align--center.u-width-xx-large 18
            th.vui-text-align--center.u-width-xx-large 25
            th.vui-text-align--center.u-width-xx-large 02
            th.vui-text-align--center.u-width-xx-large 09
            th.vui-text-align--center.u-width-xx-large 16
            th.vui-text-align--center.u-width-xx-large 23
            th.vui-text-align--center.u-width-xx-large 30
            th.vui-text-align--center.u-width-xx-large 06
            th.vui-text-align--center.u-width-xx-large 13
            th.vui-text-align--center.u-width-xx-large 20

          tr(v-for='preempt in offer.preempts')
            td.vui-text-align--center {{ preempt.buyLine }}
            td.vui-text-align--center {{ preempt.spotNumber }}
            td {{ preempt.programPlaced }}
            td
              span.vui-badge(:class='preempt.status') {{ preempt.status }}
            td.vui-text-align--center {{ preempt.priority }}
            td {{ preempt.airDay }}
            td {{ preempt.airDate }}
            td {{ preempt.airTime }}
            td.vui-text-align--center {{ preempt.spotLength }}
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', value='1')
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
            td.vui-text-align--right {{ preempt.spotRate | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ preempt.buyerRating | formatRating}}
            td
              //- textarea.vui-textarea(style='width: 300px', v-model='makegood.comment')

    h2.vui-text-heading--medium.vui-m-bottom--small Makegood Spots Offered
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
            th(rowspan='2') Offered Spots
            th.vui-text-align--center.u-width-xx-large(colspan='4')
              .vui-grid.vui-grid--align-spread
                a.vui-align-middle(@click.prevent='', href='#')
                  icon(name='arrow-circle-left')
                span.vui-align-middle April
            th.vui-text-align--center.u-width-xx-large(colspan='4')
              span May
            th.vui-text-align--center.u-width-xx-large(colspan='4')
              .vui-grid.vui-grid--align-spread
                span.vui-align-middle June
                a.vui-align-middle(@click.prevent='', href='#')
                  icon(name='arrow-circle-right')
            th(rowspan='2') Spot<br>Rate
            th(rowspan='2') Station<br>Rating
            th(rowspan='2') MG Comment
          tr
            th.vui-text-align--center.u-width-xx-large 04
            th.vui-text-align--center.u-width-xx-large 11
            th.vui-text-align--center.u-width-xx-large 18
            th.vui-text-align--center.u-width-xx-large 25
            th.vui-text-align--center.u-width-xx-large 02
            th.vui-text-align--center.u-width-xx-large 09
            th.vui-text-align--center.u-width-xx-large 16
            th.vui-text-align--center.u-width-xx-large 23
            th.vui-text-align--center.u-width-xx-large 30
            th.vui-text-align--center.u-width-xx-large 06
            th.vui-text-align--center.u-width-xx-large 13
            th.vui-text-align--center.u-width-xx-large 20

          tr(v-for='makegood in offer.makegoods')
            td.vui-text-align--center {{ makegood.lineNumber }}
            td {{ makegood.program }}
            td {{ makegood.startTime }}
            td {{ makegood.endTime }}
            td {{ makegood.days }}
            td {{ makegood.spotLength }}
            td {{ makegood.offeredSpots }}
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
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', value='1')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px', value='1')
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
            textarea.vui-textarea(style='height: 6rem')
              | Offer STP -- Please Advise

      .vui-col--padded
        table.vui-table.vui-no-row-hover(style='width: 350px')
          thead
            tr
              th Totals
              th.u-width-small.vui-text-align--center Spots
              th.u-width-small Dollars
              th.u-width-small GRPs
          tbody
            tr
              td Preempts
              td.vui-text-align--center 2
              td.vui-text-align--right $1,100
              td.vui-text-align--right 3.6
            tr
              td Makegoods
              td.vui-text-align--center 2
              td.vui-text-align--right $1,100
              td.vui-text-align--right 3.6

    fieldset.vui-form-element.vui-m-bottom--large.vui-text-align--right
      button.vui-button.vui-button--neutral.vui-m-right--xx-small(@click.prevent='showRejectOfferModal = true') Reject Offer
      button.vui-button.vui-button--brand.vui-m-right--xx-small(@click.prevent='showAcceptOfferModal = true') Accept Offer

    accept-offer-modal(:show.sync='showAcceptOfferModal')
    reject-offer-modal(:show.sync='showRejectOfferModal')
</template>

<script>
  import store from '../../../store'
  import Icon from '../../../components/Icon.vue'
  import AcceptOfferModal from '../../../components/AcceptOfferModal.vue'
  import RejectOfferModal from '../../../components/RejectOfferModal.vue'
  import Timeline from '../../../components/Timeline.vue'
  import Breadcrumbs from '../../../components/Breadcrumbs.vue'

  export default {
    components: { Icon, AcceptOfferModal, RejectOfferModal, Timeline, Breadcrumbs },

    props: {
      ordersRoute: {
        type: String,
        default: 'sellers.orders'
      }
    },

    data () {
      return {
        sharedState: store.state,
        showRejectOfferModal: false,
        showAcceptOfferModal: false,
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
        this.$route.router.go({
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

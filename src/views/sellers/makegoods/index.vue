<template lang="jade">
  .offer-dashboard

    //- breadcrumbs(:config='config.breadcrumbs')

    h1.vui-text-heading--large.vui-m-bottom--medium Makegoods Dashboard

    panel.vui-m-bottom--large(title='Search Pending Makegoods')
      form.vui-form--inline
        fieldset.vui-form-element
          label.vui-form-element__label(for='') Field
          .vui-form-element__control
            input.vui-input(type='text')

        fieldset.vui-form-element
          button.vui-button.vui-button--brand Search

    .vui-scrollable--x
      table.vui-table.vui-table--custom-1.vui-no-row-hover
        thead
          tr
            th(rowspan='2') Advertiser
            th(rowspan='2') Agency
            th(rowspan='2') CPE
            th(rowspan='2') Start
            th(rowspan='2') End
            th(colspan='6') Makegood
            th(colspan='2') Agency
            th(colspan='4') Station
            th(rowspan='2') Videa Order Number
          tr
            th Number
            th Status
            th Sent
            th Due
            th Total
            th Type

            th Status
            th Notes

            th Order
            th Status
            th Notes
            th Action

        tbody
          tr(v-for='(index, offer) in offers', :class='[(offer.overdue) ? "overdue" : ""]')
            td {{offer.advertiser}}
            td {{offer.agency}}
            td {{offer.cpe}}
            td {{offer.flightStartDate}}
            td {{offer.flightEndDate}}
            td
              a(@click.prevent='showOffer(offer.makegoodNumber)', href='#')
                icon(name='popout')
                span {{offer.makegoodNumber}}
            td
              span.vui-badge(:class='offer.offerStatus') {{offer.offerStatus}}
            td {{offer.dateMakegoodSent}}
            td {{offer.dateTimeOfferDue}}
            td.vui-text-align--right {{offer.makegoodTotal | numberWithCommas | formatMoney }}
            td {{offer.offerType}}

            td
              span.vui-badge(:class='offer.acceptedByAgency') {{offer.acceptedByAgency}}
            td.vui-text-align--center
              a(@click.prevent='', href='#')
                icon(name='pencil')
              //- {{offer.agencyNotes}}

            td {{offer.stationOrderNumber}}
            td
              span.vui-badge(:class='offer.acceptedByStation') {{offer.acceptedByStation}}
            td.vui-text-align--center
              //- {{offer.stationNotes}}
              a(@click.prevent='', href='#')
                icon(name='pencil')
            td.vui-text-align--center {{offer.stationAction}}



            td.vui-text-align--center
              a(v-link='{ name: "sellers.order", params: { id: offer.orderId }}') {{offer.orderId}}
</template>

<script>
  import store from '../../../store'
  import Panel from '../../../components/Panel.vue'
  import Icon from '../../../components/Icon.vue'
  import Breadcrumbs from '../../../components/Breadcrumbs.vue'

  export default {
    components: {Panel, Icon, Breadcrumbs},

    props: {
      offerRoute: {
        type: String,
        default: 'sellers.makegood'
      }
    },

    data () {
      return {
        sharedState: store.state,
        offers: [],
        config: {
          breadcrumbs: {
            homeText: 'dfd'
          }
        }
      }
    },

    methods: {
      fetchOffers () {
        this.loading = true
        this.$http.get(store.apiHost + '/offers').then(
          (response) => {
            this.offers = response.data
            this.loading = false
          },
          (response) => {}
        )
      },

      showOffer (id, version = '') {
        let routeInfo = {
          name: this.offerRoute,
          params: {
            id: id
          }
        }

        if (version) {
          routeInfo.query = { version: version }
        }

        this.$route.router.go(routeInfo)
      }
    },

    created () {
      this.sharedState.activeApp = 'sellers'
      this.fetchOffers()
    }
  }

</script>

<style lang="stylus">

  tr.overdue td
    background-color rgba(255, 221, 225, 0.5)

</style>

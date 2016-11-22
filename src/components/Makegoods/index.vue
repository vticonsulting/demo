<template lang="jade">
  .offer-dashboard

    h1.vui-text-heading--large.vui-m-bottom--medium Makegood Dashboard

    panel.vui-m-bottom--large(title='View Selection')
      form.vui-grid.vui-grid--vertical-align-end(action='')
        fieldset.vui-form-element
          label.vui-form-element__label Offer Status
          .vui-form-element__control.vui-m-right--small
            input.vui-input(type='text', name='offer-status', v-model='searchKey', debounce='500', v-el:search-key='', placeholder='Pending')

        fieldset.vui-form-element
          label.vui-form-element__label Offer Type
          .vui-form-element__control.vui-m-right--small
            input.vui-input(type='text', name='offer-status', v-model='searchKey', debounce='500', v-el:search-key='', placeholder='All Offer Types')

        fieldset.vui-form-element
          label.vui-form-element__label Agency
          .vui-form-element__control.vui-m-right--small
            input.vui-input(type='text', name='agency', v-model='searchKey', debounce='500', v-el:search-key='', placeholder='Agency')


        fieldset.vui-form-element
          label.vui-form-element__label Advertiser
          .vui-form-element__control.vui-m-right--small
            input.vui-input(type='text', name='advertiser', v-model='searchKey', debounce='500', v-el:search-key='', placeholder='Advertiser')

        fieldset.vui-form-element
          label.vui-form-element__label Campaign Name
          .vui-form-element__control.vui-m-right--small
            input.vui-input(type='text', name='campaign', v-model='searchKey', debounce='500', v-el:search-key='', placeholder='Campaign')

        fieldset.vui-form-element
          label.vui-form-element__label Agency Status
          .vui-form-element__control.vui-m-right--small
            input.vui-input(type='text', name='campaign', v-model='searchKey', debounce='500', v-el:search-key='', placeholder='All Agency Statuses')

        fieldset.vui-form-element
          label.vui-form-element__label Station Status
          .vui-form-element__control.vui-m-right--small
            input.vui-input(type='text', name='campaign', v-model='searchKey', debounce='500', v-el:search-key='', placeholder='All Station Statuses')

        fieldset.vui-form-element
          label.vui-form-element__label MG Transfers
          .vui-form-element__control.vui-m-right--small
            input.vui-input(type='text', name='campaign', v-model='searchKey', debounce='500', v-el:search-key='', placeholder="All MG's & Transferred")

        fieldset.vui-form-element
          button.vui-button.vui-button--brand.vui-m-right--x-small(@click.prevent='') Search


    .vui-scrollable--x
      table.vui-table.vui-no-row-hover
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
            th(style='padding-left: 0.5rem') Number
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
          tr(v-for='offer in offers', :class='[(offer.overdue) ? "overdue" : "", ($index % 2 === 0) ? "vui-highlight" : ""]')
            td {{offer.advertiser}}
            td {{offer.agency}}
            td {{offer.cpe}}
            td {{offer.flightStartDate}}
            td {{offer.flightEndDate}}
            td
              a(@click.prevent='showOffer(offer.makegoodNumber)', href='#')
                icon(name='medicine-bottle')
                span {{offer.makegoodNumber}}
            td
              span.vui-badge(:class='offer.offerStatus') {{offer.offerStatus}}
            td {{ offer.makegoodNumber == 12676 ? dateMakegoodSent : offer.dateMakegoodSent }}
            td {{ offer.makegoodNumber == 12676 ? dateTimeOfferDue : offer.dateTimeOfferDue }}
            td.vui-text-align--right {{offer.makegoodTotal | numberWithCommas | formatMoney }}
            td {{offer.offerType}}

            td
              span.vui-badge(:class='offer.acceptedByAgency') {{offer.acceptedByAgency}}
            td.vui-text-align--center
              a(@click.prevent='', href='#')
                icon(name='sticky-note-o')
              //- {{offer.agencyNotes}}

            td {{offer.stationOrderNumber}}
            td
              span.vui-badge(:class='offer.acceptedByStation') {{offer.acceptedByStation}}
            td.vui-text-align--center
              //- {{offer.stationNotes}}
              a(@click.prevent='', href='#')
                icon(name='sticky-note-o')
            td.vui-text-align--center {{offer.stationAction}}



            td.vui-text-align--center
              a(v-link='{ name: "sellers.order", params: { id: offer.orderId }}') {{offer.orderId}}
</template>

<script>
  import store from '../../store'
  import Panel from '../Panel.vue'
  import Icon from '../Icon.vue'
  import Breadcrumbs from '../Breadcrumbs.vue'
  import Datepicker from '../Datepicker2.vue'
  import moment from 'moment'

  export default {
    components: { Panel, Icon, Breadcrumbs, Datepicker },

    props: {
      offerRoute: {
        type: String,
        default: 'sellers.makegood'
      }
    },

    data () {
      return {
        sharedState: store.state,
        fromDate: new Date('2016-04-25T12:24:00'),
        toDate: new Date('2016-06-05T12:24:00'),
        dateMakegoodSent: moment().add(-3, 'days').format('MM/DD/YY'),
        dateTimeOfferDue: moment().add(-1, 'days').format('MM/DD/YY'),
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
      this.fetchOffers()
    }
  }
</script>


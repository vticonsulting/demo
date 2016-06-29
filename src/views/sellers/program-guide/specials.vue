<template lang="jade">
  #sportsAndSpecials.vui-p-around--x-large.vui-tabs--scoped__content.vui-show(role='tabpanel', v-show="activeTab == '#sportsAndSpecials'")
    h1.vui-text-heading--medium Sports / Specials
    h2.vui-text-heading--label.vui-m-bottom--medium As of {{ lastUpdated }}
    data-grid-heading
    .vui-scrollable--x
      table.vui-table.vui-no-row-hover
        thead
          tr
            th(rowspan='2') Sports/Specials
            th(rowspan='2') Air Date
            th(colspan='2') AUR
            th(colspan='2') Videa
            th(colspan='2') Total
          tr
            th(style='padding-left: 0.5rem') This Year
            th Last Year
            th.vui-text-align--center Spots Sold
            th Revenue
            th.vui-text-align--center Spots Available
            th Revenue
        tbody
          tr(v-for='(index, sportSpecial) in sportsAndSpecials', :class='(index % 2 === 1) ? "vui-highlight" : ""')
            td {{ sportSpecial.sportsSpecialsName }}
            td.u-width-xx-small {{ sportSpecial.formattedAirDate }}
            td.vui-text-align--right.u-width-xx-small {{ sportSpecial.aurTy | numberWithCommas | formatMoney }}
            td.vui-text-align--right.u-width-xx-small {{ sportSpecial.aurLy | numberWithCommas | formatMoney }}
            td.vui-text-align--right.u-width-xx-small {{ sportSpecial.videaSpotsSold }}
            td.vui-text-align--right.u-width-large {{ sportSpecial.videaRevenue | numberWithCommas | formatMoney }}
            td.vui-text-align--right.u-width-xx-small {{ sportSpecial.totalSpotsRemaining }}
            td.vui-text-align--right.u-width-large {{ sportSpecial.totalRevenue | numberWithCommas | formatMoney }}
</template>

<script>
  import moment from 'moment'
  import store from '../../../store'
  import PageHeading from '../../../components/PageHeading.vue'
  import DataGridHeading from '../../../components/DataGridHeading.vue'
  import Panel from '../../../components/Panel.vue'
  import SpotDetailModal from '../../../components/SpotDetailModal.vue'

  export default {
    components: { PageHeading, DataGridHeading, Panel, SpotDetailModal },

    data () {
      return {
        lastUpdated: null,
        sharedState: store.state,
        sortKey: 'programName',
        activeTab: '#sportsAndSpecials',
        pricing: {},
        programs: [],
        showSpotDetailModal: false,
        selectedProgram: {
          id: 1,
          name: '',
          spots: [
            {
              id: 1,
              advertiser: '',
              intendedAirDate: '',
              unitRate: 0,
              cpp: 0
            }
          ]
        },
        sportsAndSpecials: []
      }
    },

    methods: {
      fetchPricing () {
        this.$http.get(store.apiHost + '/programGuide')
          .then((response) => {
            this.programs = response.data
          }, (response) => {
            // error callback
          })
      },

      fetchSportsAndSpecials () {
        this.$http.get(store.apiHost + '/specials')
          .then((response) => {
            this.sportsAndSpecials = response.data
          }, (response) => console.log(response))
      },

      setActiveTab (tab) {
        this.activeTab = tab
      },

      showSpotDetail (program) {
        this.showSpotDetailModal = true
        this.selectedProgram = program
      }
    },

    created () {
      this.fetchPricing()
      this.fetchSportsAndSpecials()
      this.sharedState.activeApp = 'sellers'
    },

    ready () {
      this.lastUpdated = moment().format('MMMM DD, YYYY')
    }
  }
</script>

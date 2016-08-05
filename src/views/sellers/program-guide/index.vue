<template lang="jade">
  .program-guide-view
    h1.vui-text-heading--large.vui-m-bottom--medium Program Revenue
    .vui-tabs--scoped
      ul.vui-tabs--scoped__nav(role='tablist')
        li.vui-tabs--scoped__item.vui-text-heading--label(title='Program Guide', role='presentation' v-link-active)
          a.vui-tabs--scoped__link(v-link="{ name: 'sellers.program-guide.program-guide', activeClass: 'vui-active', exact: true }", href='#', role='tab', tabindex='0', aria-selected='true', aria-controls='tab-default-1')
            | Program Guide
        li.vui-tabs--scoped__item.vui-text-heading--label(title='Sports and Specials', role='presentation' v-link-active)
          a.vui-tabs--scoped__link(v-link="{ name: 'sellers.program-guide.specials', activeClass: 'vui-active', exact: true }", href='#', role='tab', tabindex='-1', aria-selected='false', aria-controls='tab-default-2')
            | Sports / Specials
      router-view
    spot-detail-modal(:show.sync="showSpotDetailModal", :program='selectedProgram')
</template>

<script>
  import store from '../../../store'
  import PageHeading from '../../../components/PageHeading.vue'
  import DataGridHeading from '../../../components/DataGridHeading.vue'
  import Panel from '../../../components/Panel.vue'
  import SpotDetailModal from '../../../components/SpotDetailModal.vue'

  export default {
    components: { PageHeading, DataGridHeading, Panel, SpotDetailModal },

    created () {
      this.fetchPricing()
      this.fetchSportsAndSpecials()
      this.sharedState.activeApp = 'sellers'
    },

    data () {
      return {
        sharedState: store.state,
        sortKey: 'programName',
        activeTab: '',
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
    }
  }
</script>

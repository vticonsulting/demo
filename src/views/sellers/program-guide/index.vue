<template lang="pug">
  .program-guide-view
    h1.vui-text-heading--large.vui-m-bottom--medium Program Revenue
    .vui-tabs--scoped
      ul.vui-tabs--scoped__nav(role='tablist')
        router-link.vui-tabs--scoped__item.vui-text-heading--label(:to='{ name: "sellers.program-guide.program-guide" }', tag='li', title='Program Guide', role='presentation', active-class='vui-active', exact)
          a.vui-tabs--scoped__link(role='tab', tabindex='0', aria-selected='true', aria-controls='tab-default-1') Program Guide
        router-link.vui-tabs--scoped__item.vui-text-heading--label(:to='{ name: "sellers.program-guide.specials" }', tag='li', title='Sports and Specials', role='presentation', active-class='vui-active', exact)
          a.vui-tabs--scoped__link(role='tab', tabindex='0', aria-selected='true', aria-controls='tab-default-1') Sports / Specials
      router-view
    spot-detail-modal(:show='showSpotDetailModal', :program='selectedProgram')
</template>

<script>
  import store from 'store'
  import SpotDetailModal from 'components/SpotDetailModal'

  export default {
    components: { SpotDetailModal },

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

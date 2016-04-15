<template lang="jade">
  #program-guide.vui-p-around--x-large.vui-tabs--scoped__content.vui-show(role='tabpanel', v-show="activeTab == '#program-guide'")

    panel.vui-m-bottom--medium(title='View Selection')
      form.vui-grid.vui-grid--vertical-align-end(action='')
        fieldset.vui-form-element
          label.vui-form-element__label Search
          .vui-form-element__control.vui-m-right--xx-small
            input.vui-input(type='text', name='searchText', v-model='searchKey', debounce='500', v-el:search-key='', placeholder='Search')
        //- fieldset.vui-form-element
        //-   label.vui-form-element__label Quick Selection
        //-   .vui-form-element__control.vui-m-right--small
        //-     .vui-select_container
        //-       select.vui-select(name='', id='')
        //-         option(value='') --
        //-         option(value='') Week
        //-         option(value='') Month
        //-         option(value='') Month +2
        //-         option(value='') Month +5
        //-         option(value='') Quarter
        //-         option(value='') Year

        fieldset.vui-form-element
          label.vui-form-element__label Flight Start Date
          .vui-form-element__control.vui-m-right--small
            datepicker#startDate(:value.sync='startDate', name='startDate')

        fieldset.vui-form-element
          label.vui-form-element__label Flight End Date
          .vui-form-element__control.vui-m-right--small
            datepicker#endDate(:value.sync='endDate', name='endDate')

        fieldset.vui-form-element
          button.vui-button.vui-button--brand Search

    .vui-grid.vui-grid--align-spread.vui-p-around--small(style='background-color: white')
      .vui-media
        .vui-media__body
          p.vui-align-middle
            span.vui-m-right--xx-small Videa Sell Through
            span.vui-text-heading--medium 5%
      .vui-media
        .vui-media__body
          p.vui-align-middle
            span.vui-m-right--xx-small Units Sold
            span.vui-text-heading--medium 517
      .vui-media
        .vui-media__body
          p.vui-align-middle
            span.vui-m-right--xx-small Units Available
            span.vui-text-heading--medium 52,215
      .vui-media
        .vui-media__body
          p.vui-align-middle
            span.vui-m-right--xx-small Videa Overall AUR
            span.vui-text-heading--medium  $757

    //- data-grid-heading.vui-m-bottom--medium
    .vui-scrollable--x.vui-m-bottom--medium
      table.vui-table.vui-no-row-hover
        thead
          tr
            th(rowspan='2') Program
            th(rowspan='2') Daypart
            th.u-width-small(rowspan='2') Time
            th(colspan='2') AUR
            th(colspan='2') Revenue
            th.u-width-small(rowspan='2')
              | CPP
              sup 1
            th.u-width-small.vui-text-align--center(rowspan='2') Spot #
          tr
            th.u-width-medium This Year
            th.u-width-medium Last Year
            th.u-width-medium This Year
            th.u-width-medium Last Year
        tbody
          tr(v-for="program in programs", :class='($index % 2 === 0) ? "vui-highlight" : ""')
            td {{ program.name }}
            td {{ program.daypart }}
            td {{ program.programTime }}
            td.vui-text-align--right {{ program.aurTy | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ program.aurLy | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ program.revenueTy | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ program.revenueLy | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ program.cpp | formatMoney }}
            td.vui-text-align--right
              a(@click.prevent='showSpotDetail(program)' href='#') {{ program.spotCount }}
    p.vui-text-body--small
      sup.vui-m-right--xx-small 1
      span Nielsen source or data derived from Nielsen
    spot-detail-modal(:show.sync="showSpotDetailModal", :program.sync='selectedProgram')
</template>

<script>
  import store from '../../../store'
  import PageHeading from '../../../components/PageHeading.vue'
  import Datepicker from '../../../components/Datepicker2.vue'
  import DataGridHeading from '../../../components/DataGridHeading.vue'
  import Panel from '../../../components/Panel.vue'
  import SpotDetailModal from '../../../components/SpotDetailModal.vue'

  export default {
    components: { PageHeading, DataGridHeading, Datepicker, Panel, SpotDetailModal },

    created () {
      this.fetchPricing()
      this.fetchSportsAndSpecials()
      this.sharedState.activeApp = 'sellers'
    },

    data () {
      return {
        sharedState: store.state,
        sortKey: 'programName',
        activeTab: '#program-guide',
        startDate: new Date('2016-03-28T12:24:00'),
        endDate: new Date('2016-06-26T12:24:00'),
        pricing: {},
        programs: [],
        showSpotDetailModal: false,
        selectedProgram: {
          id: 1,
          name: 'ddd',
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
        this.selectedProgram = program
        this.showSpotDetailModal = true
      }

    }
  }
</script>

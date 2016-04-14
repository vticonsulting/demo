<template lang="jade">
  .avails-edit-view
    .vui-m-bottom--large
      h1.vui-text-heading--large.vui-align-middle Avail ID {{avail.id}} &mdash; Edit

    .vui-box.vui-grid.vui-grid--align-spread.vui-m-bottom--large.vui-wrap.vui-theme--default
      fieldset.vui-form-element
        label.vui-form-element__label(for='') Client
        .vui-form-element__control
          span.vui-form-element__static {{ avail.advertiser }}

      fieldset.vui-form-element
        label.vui-form-element__label(for='') Product
        .vui-form-element__control
          span.vui-form-element__static {{ avail.product }}

      fieldset.vui-form-element
        label.vui-form-element__label(for='') Estimate
        .vui-form-element__control
          span.vui-form-element__static {{ avail.estimateNumber }}

      fieldset.vui-form-element
        label.vui-form-element__label(for='') CPE
        .vui-form-element__control
          span.vui-form-element__static {{ avail.cpe }}

      fieldset.vui-form-element
        label.vui-form-element__label(for='') Start
        .vui-form-element__control
          span.vui-form-element__static {{ avail.flightStartDate }}

      fieldset.vui-form-element
        label.vui-form-element__label(for='') End
        .vui-form-element__control
          span.vui-form-element__static {{ avail.flightEndDate }}

      fieldset.vui-form-element
        label.vui-form-element__label(for='') Hiatus&nbsp;Weeks
        .vui-form-element__control
          span.vui-form-element__static N/A

      fieldset.vui-form-element
        label.vui-form-element__label(for='') Primary&nbsp;Demo
        .vui-form-element__control
          span {{ avail.primaryDemo }}

    ol.steps
      li.steps__item.steps__item--done.steps__item--first(:class="{'steps__item--active' : activeTab !== 'market-competitive'}")
        a.steps__link(@click.prevent="setActiveTab('market-competitive')", :class="{'done': activeTab == 'market-competitive' }", style='cursor: pointer') Market Competitive
      li.steps__item.steps__item--done(:class="{'steps__item--active' : activeTab !== 'buyer-ratings'}")
        a.steps__link(@click.prevent="setActiveTab('buyer-ratings')", :class="{'done': activeTab == 'buyer-ratings' }", style='cursor: pointer') Buyer Ratings
      li.steps__item.steps__item--last(:class="{'steps__item--active' : activeTab !== 'rates-and-ratings'}")
        a.steps__link(@click.prevent="setActiveTab('rates-and-ratings')", :class="{'done': activeTab == 'rates-and-ratings' }", style='cursor: pointer') Rates and Ratings

    #market-competitive(v-show="activeTab == 'market-competitive'")
      h2.vui-text-heading--medium Market Competitive
      p.vui-m-bottom--medium
        | Need rates are generated from the market competitive. Buy specifications are not
        | considered when generating need rates.

      .vui-scrollable--x.vui-m-bottom--large
        table.vui-table.vui-table--custom-1.vui-no-row-hover.vui-m-bottom--large
          thead
            tr
              th(rowspan='2') Daypart
              th(colspan='2') Market Competitive
            tr
              th.u-width-small
                | Low CPP
              th.u-width-small
                | High CPP
          tbody
            tr(v-for='daypart in avail.dayparts')
              td {{ daypart.name }}
              td.u-width-medium
                input.vui-input(type='text', v-model='daypart.marketCompetitive.low')
              td.u-width-medium
                input.vui-input(type='text', v-model='daypart.marketCompetitive.high')
            //- tr
            //-   td Prime Access
            //-   td.u-width-small
            //-     input.vui-input(type='text')
            //-   td.u-width-small
            //-     input.vui-input(type='text')
            //- tr
            //-   td Prime
            //-   td.u-width-small
            //-     input.vui-input(type='text')
            //-   td.u-width-small
            //-     input.vui-input(type='text')
            //- tr
            //-   td Late News
            //-   td.u-width-small
            //-     input.vui-input(type='text')
            //-   td.u-width-small
            //-     input.vui-input(type='text')
            //- tr
            //-   td Sports and Specials
            //-   td.u-width-small
            //-     input.vui-input(type='text')
            //-   td.u-width-small
            //-     input.vui-input(type='text')
        .vui-grid.vui-grid--align-spread
          a(@click.prevent='showAvail(avail.id)', href='#')
            icon.vui-m-right--xx-small(name='arrow-circle-left')
            | Back to Avail
          .action-buttons.vui-m-bottom--x-small
            button.vui-button.vui-button--neutral.vui-m-right--x-small Cancel
            button.vui-button.vui-button--brand(@click.prevent="setActiveTab('buyer-ratings')")
              | Save Changes and Continue
              sup 1
        p.vui-text-body--small.vui-text-align--right(style='line-height: 1.2')

      p.vui-text-body--small
        sup.vui-m-right--xx-small 1
        span Saved changes are viewable by all station users and assigned reps.
    #buyer-ratings(v-show="activeTab == 'buyer-ratings'")
      h2.vui-text-heading--medium Buyer Ratings
      p.vui-m-bottom--medium
        | Enter the buyer ratings per program. To switch to a different daypart, click on the desired daypart  in the timeline below.

      .vui-scrollable--x.vui-m-bottom--large
        .daypart-selector
          //- button.vui-button.vui-max-small-buttons--stretch(v-for='($index, daypart) in dayparts', @click.prevent='selectDaypart(daypart)', :class="(daypart.id == selectedDaypart.id) ? 'vui-button--brand' : 'vui-button--neutral'", style="white-space: nowrap", :disabled='disabled')
          //-   | {{daypart.name}}

          button.vui-button.vui-max-small-buttons--stretch(v-for='daypart in avail.dayparts', @click.prevent='selectDaypart(daypart)', :class="(daypart.id == selectedDaypart.id) ? 'vui-button--brand' : 'vui-button--neutral'")
            | {{ daypart.name}}

      .avail-programs.vui-scrollable--x.vui-m-bottom--large
        h3.vui-text-heading--small.vui-m-bottom--small {{ selectedDaypart.name }}
        table.vui-table.vui-table--custom-1.vui-no-row-hover.vui-m-bottom--medium.vui-table--nested-rows
          thead
            tr
              th
                a.vui-grid.vui-grid--align-spread(@click.prevent='', href="#")
                  span.vui-align-middle Program
                  span.vui-align-middle
                    icon(name="sort", style="color: hsla(192, 9%, 89%, .5)")
              th.u-width-small Buyer Rating
          tbody(v-if='selectedDaypart', v-for='program in selectedDaypart.programs')
            tr
              td
                span
                  span {{ program.name }}
                  br
                  | {{ program.time }}
              td.u-width-small
                input.vui-input(type='text', v-model='program.buyer.rating | formatRating', style='text-align: right')
        .vui-grid.vui-grid--align-spread
          a(@click.prevent="setActiveTab('market-competitive')", href='#')
            icon.vui-m-right--xx-small(name='arrow-circle-left')
            | Back to Market Competitive
          .action-buttons.vui-m-bottom--x-small
            button.vui-button.vui-button--neutral.vui-m-right--x-small(@click.prevent="setActiveTab('market-competitive')", href='#') Cancel
            button.vui-button.vui-button--brand(@click.prevent="setActiveTab('rates-and-ratings')")
              | Save Changes and Continue
              sup 1
        p.vui-text-body--small
          sup.vui-m-right--xx-small 1
          span Saved changes are viewable by all station users and assigned reps.
    #rates-and-ratings(v-show="activeTab == 'rates-and-ratings'")
      h2.vui-text-heading--medium Rates and Ratings
      p.vui-m-bottom--medium Adjust your rates and ratings using the worksheet below.

      .vui-scrollable--x.vui-m-bottom--large
        .daypart-selector
          //- button.vui-button.vui-max-small-buttons--stretch(v-for='($index, daypart) in dayparts', @click.prevent='selectDaypart(daypart)', :class="(daypart.id == selectedDaypart.id) ? 'vui-button--brand' : 'vui-button--neutral'", style="white-space: nowrap", :disabled='disabled')
          //-   | {{daypart.name}}

          button.vui-button.vui-max-small-buttons--stretch(v-for='daypart in avail.dayparts', @click.prevent='selectDaypart(daypart)', :class="(daypart.id == selectedDaypart.id) ? 'vui-button--brand' : 'vui-button--neutral'")
            | {{ daypart.name }}

      .avail-programs.vui-scrollable--x.vui-m-bottom--medium
        .vui-grid.vui-grid--align-spread
          h3.vui-text-heading--small.vui-m-bottom--small {{ selectedDaypart.name }}
          a.vui-text-align--right(@click.prevent='showEditProgramsModal = true', href='#')
            icon.vui-m-right--xx-small(name='edit')
            | Add Programs
        table.vui-table.vui-no-row-hover.vui-table--custom-1.vui-table--nested-rows.vui-m-bottom--large
          thead
            tr
              th(rowspan='2') Program
              th.u-width-large(rowspan='2') Start
              th.u-width-large(rowspan='2') End
              th(colspan='3') Availed
              th(colspan='4') Videa
              th(colspan='4') Buyer
            tr
              th Rate
              th Rating
              th
                | CPP
                sup 1
              th Rating
              th Need Goal
              th Need Low
              th Need High
              th Rating
              th Need Goal
              th Need Low
              th Need High
          tbody(v-if='selectedDaypart', v-for='program in selectedDaypart.programs')
            tr.program
              td
                span.vui-grid
                  a.vui-align-middle.vui-m-right--x-small(href='#', @click.prevent='program.expanded = !program.expanded')
                    icon.vui-align-middle.vui-m-right--x-small(v-if='program.months', :name="(program.expanded) ? 'caret-lower-right' : 'caret-right'")
                  template(v-if='!program.months')
                    span.vui-m-left--large
                      span {{ program.name }}
                      br
                      span {{program.time}}
                  template(v-else)
                    span
                      span {{ program.name }}
                      br
                      span {{ program.time }}
              td {{ program.flightStartDate }}
              td {{ program.flightEndDate }}
              td.u-width-small
                input.vui-text-align--right.vui-input(v-model='program.rate')
              td.u-width-small
                input.vui-text-align--right.vui-input(:value='program.rating | formatRating')
              td.vui-text-align--right.u-width-small {{ program.avgCpp | numberWithCommas | formatMoney }}
              td.vui-text-align--right.u-width-small.u-highlight {{ program.rating | formatRating }}
              td.vui-text-align--right.u-width-small.u-highlight {{ program.videa.needGoal | numberWithCommas | formatMoney }}
              td.vui-text-align--right.u-width-small.u-highlight {{ program.videa.needLow | numberWithCommas | formatMoney }}
              td.vui-text-align--right.u-width-small.u-highlight {{ program.videa.needHigh | numberWithCommas | formatMoney }}
              td.vui-text-align--right.u-width-small {{ program.buyer.rating | formatRating }}
              td.vui-text-align--right.u-width-small {{ program.buyer.needGoal | numberWithCommas | formatMoney }}
              td.vui-text-align--right.u-width-small {{ program.buyer.needLow | numberWithCommas | formatMoney }}
              td.vui-text-align--right.u-width-small {{ program.buyer.needHigh | numberWithCommas | formatMoney }}
            template(v-for='month in program.months')
              tr.month(v-show='program.expanded')
                td
                  .vui-grid.vui-grid--align-spread
                    span {{ month.month }}
                    a(@click.prevent='', href='#')
                      icon(name='calendar-plus-o')
                td.u-width-small {{ month.flightStartDate }}
                td.u-width-small {{ month.flightEndDate }}
                td.u-width-small
                  input.vui-text-align--right.vui-input(v-model='month.rate')
                td.u-width-small
                  input.vui-text-align--right.vui-input(:value='month.rating | formatRating')
                td.vui-text-align--right.u-width-small {{ month.avgCpp | numberWithCommas | formatMoney }}
                td.vui-text-align--right.u-width-small.u-highlight {{ month.rating | formatRating }}
                td.vui-text-align--right.u-width-small.u-highlight {{ month.videa.needGoal | numberWithCommas | formatMoney }}
                td.vui-text-align--right.u-width-small.u-highlight {{ month.videa.needLow | numberWithCommas | formatMoney }}
                td.vui-text-align--right.u-width-small.u-highlight {{ month.videa.needHigh | numberWithCommas | formatMoney }}
                td.vui-text-align--right.u-width-small {{ month.buyer.rating | formatRating }}
                td.vui-text-align--right.u-width-small {{ month.buyer.needGoal | numberWithCommas | formatMoney }}
                td.vui-text-align--right.u-width-small {{ month.buyer.needLow | numberWithCommas | formatMoney }}
                td.vui-text-align--right.u-width-small {{ month.buyer.needHigh | numberWithCommas | formatMoney }}
              template(v-for='week in month.weeks')
                tr.week(v-show='month.expanded')
                  td
                    .vui-grid.vui-grid--align-spread
                      span {{ week.week }}
                  td.u-width-small {{ week.flightStartDate }}
                  td.u-width-small {{ week.flightEndDate }}
                  td.u-width-small
                    input.vui-text-align--right.vui-input(v-model='week.rate')
                  td.u-width-small
                    input.vui-text-align--right.vui-input(:value='week.rating | formatRating')
                  td.vui-text-align--right.u-width-small {{ week.avgCpp | numberWithCommas | formatMoney }}
                  td.vui-text-align--right.u-width-small.u-highlight {{ week.rating | formatRating }}
                  td.vui-text-align--right.u-width-small.u-highlight {{ week.videa.needGoal | numberWithCommas | formatMoney }}
                  td.vui-text-align--right.u-width-small.u-highlight {{ week.videa.needLow | numberWithCommas | formatMoney }}
                  td.vui-text-align--right.u-width-small.u-highlight {{ week.videa.needHigh | numberWithCommas | formatMoney }}
                  td.vui-text-align--right.u-width-small {{ week.buyer.rating | formatRating }}
                  td.vui-text-align--right.u-width-small {{ week.buyer.needGoal | numberWithCommas | formatMoney }}
                  td.vui-text-align--right.u-width-small {{ week.buyer.needLow | numberWithCommas | formatMoney }}
                  td.vui-text-align--right.u-width-small {{ week.buyer.needHigh | numberWithCommas | formatMoney }}

      .vui-grid.vui-grid--align-spread
        a(@click.prevent="setActiveTab('buyer-ratings')", href='#')
          icon.vui-m-right--xx-small(name='arrow-circle-left')
          | Back to Buyer Ratings
        .action-buttons.vui-m-bottom--x-small
          button.vui-button.vui-button--neutral.vui-m-right--x-small(@click.prevent="setActiveTab('buyer-ratings')", href='#') Cancel
          button.vui-button.vui-button--brand(@click.prevent='showAvail(avail.id)', href='#', style='color: #fff !important')
            | Save Changes and Continue
            sup 1
      p.vui-text-body--small
        sup.vui-m-right--xx-small 1
        span Saved changes are viewable by all station users and assigned reps.

    edit-programs-modal(:show.sync="showEditProgramsModal")
</template>

<script>
  import store from '../../store'
  import Icon from '../Icon.vue'
  import PageHeading from '../PageHeading.vue'
  import Panel from '../Panel.vue'
  import DaypartSelector from '../DaypartSelector.vue'
  import StepWizard from '../StepWizard.vue'
  import EditProgramsModal from '../EditProgramsModal.vue'

  let Highcharts = require('highcharts')

  require('highcharts/modules/exporting')(Highcharts)

  export default {
    components: {
      Icon,
      PageHeading,
      Panel,
      DaypartSelector,
      StepWizard,
      EditProgramsModal
    },

    props: {
      availRoute: {
        type: String
      },

      availsRoute: {
        type: String
      }
    },

    data () {
      return {
        sharedState: store.state,
        showEditProgramsModal: false,
        activeTab: 'market-competitive',
        application: 'reps',
        avails: [],
        avail: {},
        selectedDaypart: require('./selected.json'),
        'dayparts': [
          {
            'id': 1,
            'name': 'Early Morning',
            'startTime': '04:30 AM'
          },
          {
            'id': 2,
            'name': 'Daytime',
            'startTime': '09:00 AM'
          },
          {
            'id': 3,
            'name': 'Early Fringe',
            'startTime': '03:00 PM'
          },
          {
            'id': 4,
            'name': 'Early News',
            'startTime': '5:00 PM'
          },
          {
            'id': 5,
            'name': 'Prime Access',
            'startTime': '07:00 PM'
          },
          {
            'id': 6,
            'name': 'Prime/Specials',
            'startTime': '08:00 PM'
          },
          {
            'id': 7,
            'name': 'Sports',
            'startTime': ''
          },
          {
            'id': 8,
            'name': 'Late News',
            'startTime': '10:00 PM'
          },
          {
            'id': 9,
            'name': 'Late Fringe',
            'startTime': '11:00 PM'
          },
          {
            'id': 10,
            'name': 'Weekend',
            'startTime': '11:00 PM'
          },
          {
            'id': 11,
            'name': 'Overnight',
            'startTime': '01:00 AM'
          }
        ]
      }
    },

    methods: {
      fetchAvail (id) {
        this.$http.get(store.apiHost + '/avails/' + id)
          .then((response) => {
            this.avail = response.data
          }, (response) => {
            // error callback
          })
      },

      fetchDayparts () {
        this.$http.get(store.apiHost + '/dayparts')
          .then((response) => {
            this.dayparts = response.data
          }, (response) => {
            // error callback
          })
      },

      selectDaypart (daypart) {
        this.$dispatch('selected-daypart', daypart)
        this.selectedDaypart = daypart
      },

      setActiveTab (tab) {
        this.$dispatch('activate-tab', tab)
        this.activeTab = tab
      },

      showAvail (id, version = '') {
        let routeInfo = {
          name: this.availRoute,
          params: {
            id: id
          }
        }

        if (version) {
          routeInfo.query = { version: version }
        }

        this.$route.router.go(routeInfo)
      },

      showAvails () {
        this.$route.router.go({
          name: this.availsRoute
        })
      }
    },

    events: {
      'activate-tab' (tab) {
        this.activeTab = tab
      },

      'selected-daypart' (daypart) {
        this.selectedDaypart = this.avail.dayparts[daypart.id - 1]
      }
    },

    created () {
      this.fetchAvail(this.$route.params.id)
      this.fetchDayparts()
    }
  }
</script>

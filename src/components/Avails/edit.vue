<template lang="pug">
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
        table.vui-table.vui-no-row-hover.vui-m-bottom--large
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
          button.vui-button.vui-max-small-buttons--stretch(v-for='daypart in avail.dayparts', @click.prevent='selectDaypart(daypart)', :class="(daypart.id == selectedDaypart.id) ? 'vui-button--brand' : 'vui-button--neutral'")
            | {{ daypart.name }}

      .avail-programs.vui-scrollable--x.vui-m-bottom--large
        h3.vui-text-heading--small.vui-m-bottom--small {{ selectedDaypart.name }}
        table.vui-table.vui-no-row-hover.vui-m-bottom--medium.vui-table--nested-rows
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
                input.vui-input(type='text', v-model='program.buyer.rating', style='text-align: right')
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
          button.vui-button.vui-max-small-buttons--stretch(v-for='daypart in avail.dayparts', @click.prevent='selectDaypart(daypart)', :class="(daypart.id == selectedDaypart.id) ? 'vui-button--brand' : 'vui-button--neutral'")
            | {{ daypart.name }}

      .avail-programs.vui-scrollable--x.vui-m-bottom--medium
        .vui-grid.vui-grid--align-spread
          h3.vui-text-heading--small.vui-m-bottom--small {{ selectedDaypart.name }}
          a.vui-text-align--right(@click.prevent='showEditProgramsModal = true', href='#')
            icon.vui-m-right--xx-small(name='edit')
            | Add Programs

        table.vui-table.vui-no-row-hover.vui-m-bottom--large
          thead
            tr
              th(rowspan='2') Program
              th.u-width-large(rowspan='2') Start
              th.u-width-large(rowspan='2') End
              th(colspan='3') Availed
              th(colspan='4') Videa
              th(colspan='4') Buyer
            tr
              th.u-width-large Rate
              th.u-width-large Rating
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

          // Programs
          tbody(v-if='selectedDaypart', v-for='program in selectedDaypart.programs')

            tr.program

              td.name
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

              // Flight Start Date(program)
              td {{ program.flightStartDate }}

              // Flight End Date (program)
              td {{ program.flightEndDate }}

              // Rate (program)
              td.u-width-small
                input.vui-input.vui-text-align--right(@keypress='onKeypress', type='text', :value='program.rate', v-model='program.rate')

              // Rating (program)
              td.u-width-small
                input.vui-text-align--right.vui-input(:value='program.rating', v-model='program.rating')

              // Average CPP
              td.vui-text-align--right.u-width-small
                cpp(:rate='program.rate', :rating='program.rating')
                //- {{ program.avgCpp | numberWithCommas | formatMoney }}

              // Rating (program)
              td.vui-text-align--right.u-width-small.u-highlight {{ program.rating | formatRating }}

              // Videa -- Need Goal (program)
              td.vui-text-align--right.u-width-small.u-highlight {{ program.videa.needGoal | numberWithCommas | formatMoney }}

              // Videa -- Need Low (program)
              td.vui-text-align--right.u-width-small.u-highlight {{ program.videa.needLow | numberWithCommas | formatMoney }}

              // Videa -- Need High (program)
              td.vui-text-align--right.u-width-small.u-highlight {{ program.videa.needHigh | numberWithCommas | formatMoney }}

              // Buyer --  Rating (program)
              td.vui-text-align--right.u-width-small {{ program.buyer.rating | formatRating }}

              // Buyer --  Need Goal (program)
              td.vui-text-align--right.u-width-small {{ program.buyer.needGoal | numberWithCommas | formatMoney }}

              // Buyer --  Need Low (program)
              td.vui-text-align--right.u-width-small {{ program.buyer.needLow | numberWithCommas | formatMoney }}

              // Buyer --  Need High (program)
              td.vui-text-align--right.u-width-small {{ program.buyer.needHigh | numberWithCommas | formatMoney }}

            // Months
            template(v-for='month in program.months')

              tr.month(v-show='program.expanded')

                // Month
                td.name
                  .vui-grid.vui-grid--align-spread
                    span.vui-align-middle(style='font-weight: 500') {{ month.month }}
                    add-week-dropdown.vui-align-middle.dropdown-left.vui-m-right-x-small(text='icon', :weeks='month.weeks', :month='month')

                // Flight Start Date (month)
                td.u-width-small {{ month.flightStartDate }}

                // Flight End Date (month)
                td.u-width-small {{ month.flightEndDate }}

                // Rate (month)
                td.u-width-small
                  input.vui-input.vui-text-align--right(@keypress='onKeypress', type='text', :value='month.rate', v-model='month.rate')

                // Rating (month)
                td.u-width-small
                  input.vui-text-align--right.vui-input(:value='month.rating', v-model='month.rating')

                // Average CPP (month)
                td.vui-text-align--right.u-width-small
                  cpp(:rate='month.rate', :rating='month.rating')
                  //- {{ month.avgCpp | numberWithCommas | formatMoney }}

                // Videa Rating (month)
                td.vui-text-align--right.u-width-small.u-highlight {{ month.videa.rating | formatRating }}

                // Videa Need Goal (month)
                td.vui-text-align--right.u-width-small.u-highlight {{ month.videa.needGoal | numberWithCommas | formatMoney }}

                // Videa Need Low (month)
                td.vui-text-align--right.u-width-small.u-highlight {{ month.videa.needLow | numberWithCommas | formatMoney }}

                // Videa Need High (month)
                td.vui-text-align--right.u-width-small.u-highlight {{ month.videa.needHigh | numberWithCommas | formatMoney }}

                // Buyer Rating (month)
                td.vui-text-align--right.u-width-small {{ month.buyer.rating | formatRating }}

                // Buyer Need Goal(month)
                td.vui-text-align--right.u-width-small {{ month.buyer.needGoal | numberWithCommas | formatMoney }}

                // Buyer Need Low (month)
                td.vui-text-align--right.u-width-small {{ month.buyer.needLow | numberWithCommas | formatMoney }}

                // Buyer Need High (month)
                td.vui-text-align--right.u-width-small {{ month.buyer.needHigh | numberWithCommas | formatMoney }}

              // Weeks
              template(v-for='week in month.weeks')


                tr.week(v-show='week.expanded', :class='[(!week.expanded) ? "vui-hide" : ""]')

                  // Week
                  td.name
                    .vui-grid
                      a.vui-align-middle(@click.prevent='week.expanded = false', href='#')
                        icon.vui-m-right--x-small(name='times-circle')
                      span.vui-align-middle {{ week.week }}

                  // Flight Start Date (week)
                  td.u-width-small {{ week.flightStartDate }}

                  // Flight End Date (week)
                  td.u-width-small {{ week.flightEndDate }}

                  // Rate (week)
                  td.u-width-small
                    input.vui-input.vui-text-align--right(@keypress='onKeypress', type='text', :value='week.rate', v-model='week.rate')

                  // Rating (week)
                  td.u-width-small
                    input.vui-text-align--right.vui-input(:value='week.rating', v-model='week.rating')

                  // Average CPP (week)
                  td.vui-text-align--right.u-width-small
                    cpp(:rate='week.rate', :rating='week.rating')
                    //-{{ week.avgCpp | numberWithCommas | formatMoney }}

                  // Videa Rating (week)
                  td.vui-text-align--right.u-width-small.u-highlight {{ week.videa.rating | formatRating }}

                  // Videa Need Goal (week)
                  td.vui-text-align--right.u-width-small.u-highlight {{ week.videa.needGoal | numberWithCommas | formatMoney }}

                  // Videa Need Low (week)
                  td.vui-text-align--right.u-width-small.u-highlight {{ week.videa.needLow | numberWithCommas | formatMoney }}

                  // Videa Need High (week)
                  td.vui-text-align--right.u-width-small.u-highlight {{ week.videa.needHigh | numberWithCommas | formatMoney }}

                  // Buyer Rating (week)
                  td.vui-text-align--right.u-width-small {{ week.buyer.rating | formatRating }}

                  // Buyer Need Goal (week)
                  td.vui-text-align--right.u-width-small {{ week.buyer.needGoal | numberWithCommas | formatMoney }}

                  // Buyer Need Low
                  td.vui-text-align--right.u-width-small {{ week.buyer.needLow | numberWithCommas | formatMoney }}

                  // Buyer Need High
                  td.vui-text-align--right.u-width-small {{ week.buyer.needHigh | numberWithCommas | formatMoney }}

      .vui-grid.vui-grid--align-spread
        a(@click.prevent="setActiveTab('buyer-ratings')", href='#')
          icon.vui-m-right--xx-small(name='arrow-circle-left')
          | Back to Buyer Ratings
        .action-buttons.vui-m-bottom--x-small
          button.vui-button.vui-button--neutral.vui-m-right--x-small(@click.prevent="setActiveTab('buyer-ratings')", href='#') Cancel
          button.vui-button.vui-button--brand(@click.prevent='showAvail(avail.id)', href='#', style='color: #fff !important')
            | Save Changes and Continue
            sup 2
      p.vui-text-body--small
        sup.vui-m-right--xx-small 1
        span Nielsen source or data derived from Nielsen <br>
        sup.vui-m-right--xx-small 2
        span Saved changes are viewable by all station users and assigned reps.

    edit-programs-modal(:show="showEditProgramsModal")
</template>

<script>
  import store from 'store'
  import Cpp from 'components/Cpp'
  import AddWeekDropdown from 'components/AddWeekDropdown'
  import StepWizard from 'components/StepWizard'
  import EditProgramsModal from 'components/EditProgramsModal'

  let Highcharts = require('highcharts')
  require('highcharts/modules/exporting')(Highcharts)

  export default {
    components: { Cpp, AddWeekDropdown, StepWizard, EditProgramsModal },

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
        this.selectedDaypart = daypart
      },

      setActiveTab (tab) {
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

        this.$router.push(routeInfo)
      },

      showAvails () {
        this.$router.push({
          name: this.availsRoute
        })
      },

      onKeypress (event) {
        if ((event.which !== 46 || $(this).val().indexOf('.') !== -1) && (event.which < 48 || event.which > 57)) {
          event.preventDefault()
        }
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

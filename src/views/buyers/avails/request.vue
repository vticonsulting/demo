<template lang="jade">
//- link(href='/Content/styles/buyers.css', rel='stylesheet')
//- form(action='/Buyers/Campaign/SaveCampaign', data-ng-cloak='', data-ng-controller='EditCampaignController', data-ng-init='init()', method='post', name='displayForm', role='form')
#avails-request
  // Page Heading
  page-heading.vui-m-bottom--medium(title='Request Avails')
  .primary-information.vui-m-bottom--large
    .vui-grid.vui-grid--align-spread
      div
        h2.vui-text-heading--medium Primary Information
        p.vui-m-bottom--large Fields marked <span class='required'>*</span> are required
      .vui-text-align--right
        button.vui-m-right--xx-small.vui-button.vui-button--brand(v-link='{ name: "buyers.avails.request.summary" }', :disabled='daypartMixTotal !== 100') Submit
        button.vui-button.vui-button--neutral Cancel

    .vui-box.vui-grid.vui-grid--align-spread.vui-theme--default

      // Client
      fieldset.vui-form-element.vui-size--1-of-3.vui-p-right--large.vui-m-bottom--large
        label.vui-form-element__label(for='client') Client <span class='required'>*</span>
        .vui-form-element__control
          .vui-select_container
            select#client.vui-select(v-model='selectedAdvertiser')
              option
              option(v-for='advertiser in advertisers', :value='advertiser.id') {{ advertiser.name }}

      // Product
      fieldset.vui-form-element.vui-size--1-of-3.vui-p-right--large
        label.vui-form-element__label(for='product') Product <span class='required'>*</span>
        .vui-form-element__control
          input#product.vui-input(type='text', :disabled='!selectedAdvertiser')

      // Estimate
      fieldset.vui-form-element.vui-size--1-of-3.vui-p-right--large
        label.vui-form-element__label(for='product') Estimate <span class='required'>*</span>
        .vui-form-element__control
          input#estimate.vui-input(type='text')

    .vui-box.vui-grid.vui-grid--align-spread.vui-theme--default

      // Campain Name
      fieldset.vui-form-element.vui-size--1-of-3.vui-p-right--large
        label.vui-form-element__label(for='campaign-name') Campaign Name
        .vui-form-element__control
          input#campaign-name.vui-input(type='text')

      // Gender
      fieldset.vui-form-element.vui-size--1-of-3.vui-p-right--large
        legend.vui-form-element__label.vui-form-element__label--top Gender
        .vui-form-element__control.vui-grid
          label.vui-radio(for='male')
            input#male(type='radio', name='gender')
            span.vui-radio--faux
            span.vui-form-element__label Male
          label.vui-radio(for='female')
            input#female(type='radio', name='gender')
            span.vui-radio--faux
            span.vui-form-element__label Female
          label.vui-radio(for='persons')
            input#persons(type='radio', name='gender', checked='true')
            span.vui-radio--faux
            span.vui-form-element__label Persons

      // Age Range
      fieldset.vui-form-element.vui-size--1-of-3.vui-m-bottom--xx-large.vui-p-right--large
        label.vui-form-element__label(for='age-range') Age Range
        .vui-form-element__control
          #age-range

    .vui-box.vui-grid.vui-grid--align-spread.vui-m-bottom--xx-large.vui-theme--default

      //- // Market
      //- fieldset.vui-form-element.vui-size--1-of-3.vui-p-right--large
      //-   label.vui-form-element__label(for='market') Market <span class='required'>*</span>
      //-   .vui-form-element__control
      //-     .vui-select_container
      //-       typeahead(:data='markets', placeholder='Type or select an option')

      //- // Station
      //- fieldset.vui-form-element.vui-size--1-of-3.vui-p-right--large
      //-   label.vui-form-element__label Station <span class='required'>*</span>
      //-   .vui-form-element__control
      //-     .vui-select_container
      //-       select#market.vui-select
      //-         option
      //-         option WVVV

      //- // Market
      //- fieldset.vui-form-element.vui-size--1-of-3.vui-p-right--large
      //-   label.vui-form-element__label(for='market') Market <span class='required'>*</span>
      //-   .vui-form-element__control
      //-     .vui-select_container
      //-       select(v-model="selectedCity" id="city")
      //-         option(v-for="location in locations", :value="location.city") {{ location.city }}

      //- // Station
      //- fieldset.vui-form-element.vui-size--1-of-3.vui-p-right--large
      //-   label.vui-form-element__label Station <span class='required'>*</span>
      //-   .vui-form-element__control
      //-     .vui-select_container
      //-       select(v-dependOn="locations.city". id="station")
      //-         option(v-for="station in loadedStationOptions", :value="station")  {{ station }}

      // Market
      fieldset.vui-form-element.vui-size--1-of-3.vui-p-right--large
        label.vui-form-element__label(for='market') Market <span class='required'>*</span>
        .vui-form-element__control
          .vui-select_container
            select.vui-select#city(v-dependOn='locations.country', v-model='selectedCity')
              option(v-for='city in loadedCityOptions', :value="city") {{ city }}

      // Station
      fieldset.vui-form-element.vui-size--1-of-3.vui-p-right--large
        label.vui-form-element__label Station <span class='required'>*</span>
        .vui-form-element__control
          .vui-select_container
            select.vui-select#station(v-dependOn='addresses.city')
              option(v-for='station in loadedStationOptions', :value="station") {{ station }}

      // Spot Length
      fieldset.vui-form-element.vui-size--1-of-3
        legend.vui-form-element__label.vui-form-element__label--top Spot Length <span class='required'>*</span>
        .vui-grid
          .vui-form-element
            label.vui-checkbox(for='fiveSeconds')
              input#fiveSeconds(name='spotLengths', type='checkbox', :disabled='true')
              span.vui-checkbox--faux
              span.vui-form-element__label 5S
          .vui-form-element
            label.vui-checkbox(for='tenSeconds')
              input#tenSeconds(name='spotLengths', type='checkbox', :disabled='true')
              span.vui-checkbox--faux
              span.vui-form-element__label 10S
          .vui-form-element
            label.vui-checkbox(for='fifteenSeconds')
              input#fifteenSeconds(name='spotLengths', type='checkbox', :disabled='false')
              span.vui-checkbox--faux
              span.vui-form-element__label 15S
          .vui-form-element
            label.vui-checkbox(for='twentySeconds')
              input#twentySeconds(name='spotLengths', type='checkbox', :disabled='true')
              span.vui-checkbox--faux
              span.vui-form-element__label 20S
          .vui-form-element
            label.vui-checkbox(for='thirtySeconds')
              input#thirtySeconds(name='spotLengths', type='checkbox', :disabled='false', checked='true')
              span.vui-checkbox--faux
              span.vui-form-element__label 30S
          .vui-form-element
            label.vui-checkbox(for='fortyFiveSeconds')
              input#fortyFiveSeconds(name='spotLengths', type='checkbox', :disabled='true')
              span.vui-checkbox--faux
              span.vui-form-element__label 45S
          .vui-form-element
            label.vui-checkbox(for='sixtySeconds')
              input#sixtySeconds(name='spotLengths', type='checkbox', :disabled='true')
              span.vui-checkbox--faux
              span.vui-form-element__label 60S
          .vui-form-element
            label.vui-checkbox(for='seventyFiveSeconds')
              input#seventyFiveSeconds(name='spotLengths', type='checkbox', :disabled='true')
              span.vui-checkbox--faux
              span.vui-form-element__label 75S
          .vui-form-element
            label.vui-checkbox(for='ninetySeconds')
              input#ninetySeconds(name='spotLengths', type='checkbox', :disabled='true')
              span.vui-checkbox--faux
              span.vui-form-element__label 90S
          .vui-form-element
            label.vui-checkbox(for='oneHundredTwentySeconds')
              input#oneHundredTwentySeconds(name='spotLengths', type='checkbox', :disabled='true')
              span.vui-checkbox--faux
              span.vui-form-element__label 120S

  .vui-grid.vui-grid--align-spread
    // Dayparts
    .dayparts.vui-m-bottom--large.vui-size--2-of-5.vui-p-right--large
      h2.vui-text-heading--medium.vui-m-bottom--medium Parameters <span class='required'>*</span>

      .vui-box(style='background-color: #ccc')
        form.vui-form--inline(action='')
          label.vui-radio(for='cpp')
            input#cpp.vui-m-right--x-small(type='radio', name='when', checked='true')
            span.vui-radio--faux.vui-m-right--xx-small
            span.vui-form-element__label CPP
          label.vui-radio.vui-m-right--large(for='cpm')
            input#cpm(type='radio', name='when')
            span.vui-radio--faux.vui-m-right--xx-small
            span.vui-form-element__label CPM
          .vui-form-element
            label.vui-form-element__label(for='grossBudget')
              | Gross Budget <span class='required'>*</span>
            .vui-form-element__control
              input#grossBudget.vui-input(v-model='grossBudget | currencyDisplay', style='width: 6rem; text-align: right')
          .vui-form-element
            label.vui-form-element__label(for='grpGoal') GRP Goal
            .vui-form-element__control
              input#grpGoal.vui-input(value='0', style='width: 6rem; text-align: right')

      table.vui-table.vui-no-row-hover
        thead
          tr
            th Daypart
            th.u-width-medium Target <br>CPP <span class='required'>*</span>
            th.u-width-medium Daypart <br>Mix %<span class='required'>*</span>
            th.u-width-medium Target <br>GRP
        tfoot
          tr
            td.vui-text-align--right<b>Total</b>
            td
            td.vui-text-align--right <b>{{ (daypartMixTotal > 0) ? daypartMixTotal : '' }}</b>
            td
        tbody
          tr(v-for='(index, daypart) in dayparts')
            td(:class='(foundDaypart(daypart.name) || daypart.targetCpp || daypart.daypartMix || daypart.targetGrp ) ? "vui-selected" : ""') {{ daypart.name }}
            //- td.vui-text-align--center(@click.prevent='toggleUnplanned(daypart.name);toggleDaypartSelection($event)', style='cursor: pointer', :class='(foundDaypart(daypart.name) || daypart.targetCpp || daypart.daypartMix || daypart.targetGrp ) ? "vui-selected" : ""')
            //-   .vui-form-element
            //-     label.vui-checkbox(for='{{daypart.id}}')
            //-       input(id='{{daypart.id}}', type='checkbox', v-model='unplannedDayparts', value='{{daypart.name}}', checked='{{daypart.unplanned}}')
            //-       span.vui-checkbox--faux
            td(:class='(foundDaypart(daypart.name) || daypart.targetCpp || daypart.daypartMix || daypart.targetGrp ) ? "vui-selected" : ""')
              input.vui-input.vui-text-align--right(v-model='daypart.targetCpp', number)
            td(:class='(foundDaypart(daypart.name) || daypart.targetCpp || daypart.daypartMix || daypart.targetGrp ) ? "vui-selected" : ""')
              input.vui-input.vui-text-align--right(v-model='daypart.daypartMix', number)
            td(:class='(foundDaypart(daypart.name) || daypart.targetCpp || daypart.daypartMix || daypart.targetGrp ) ? "vui-selected" : ""')
              input.vui-input.vui-text-align--right(v-model='daypart.targetGrp', number)

    .flight-days.vui-m-bottom--large.vui-size--3-of-5
      .vui-grid.vui-grid--align-spread
        h2.vui-text-heading--medium.vui-m-bottom--medium Flight Dates <span class='required'>*</span>

        .vui-grid.vui-grid--align-end.vui-grid--vertical-align-center
          .vui-grid.vui-align-middle.vui-m-right--medium
            span.vui-align-middle.vui-table-legend.vui-table-legend--selected.vui-m-right--x-small
            span.vui-align-middle Selected
          .vui-grid.vui-align-middle
            span.vui-align-middle.vui-table-legend.vui-table-legend--unselected.vui-m-right--x-small
            span.vui-align-middle Unselected

      .vui-box.vui-m-bottom--xx-small(style='background-color: #ccc')
        form.vui-form--inline(action='')

          .vui-form-element
            label.vui-form-element__label(for='') Start <span class='required'>*</span>
            .vui-form-element__control
              datepicker#startDate(:value.sync='startDate', name='startDate')

          .vui-form-element
            label.vui-form-element__label End <span class='required'>*</span>
            .vui-form-element__control
              datepicker#endDate(:value.sync='endDate', name='endDate')

          button.vui-button.vui-button--neutral(@click.prevent='selectOrDeselectAllWeeks') {{ selectButtonText }} all weeks
          //- button.vui-button.vui-button--neutral(@click.prevent='selectOrDeselectAllWeekends') {{ selectButtonText }} all weekends
          //- button.vui-button.vui-button--neutral(@click.prevent='deselectAllWeeks') Deselect all weeks
      .vui-box.vui-grid.vui-grid--align-spread(style='background-color: #ccc')
        a(href='#', @click.prevent='goTo(-1)')
          icon.vui-align-middle.vui-m-right--xx-small(name='arrow-circle-left')
          span.vui-align-middle Previous
        a(href='#', @click.prevent='goTo(1)')
          span.vui-align-middle.vui-m-right--xx-small Next
          icon.vui-align-middle(name='arrow-circle-right')

      table#flight-days.vui-table.vui-table--calendar.vui-m-bottom--large.vui-no-row-hover
        thead
          tr
            th(rowspan='2') Week
            th.vui-text-align--center(@click='monthClick($event)', colspan='7') November 2016
          tr
            th.vui-text-align--center.monday(@click='dayOfWeekHeaderRowClick("monday")', style='padding-left: 0.5rem') Mon
            th.vui-text-align--center.tuesday(@click='dayOfWeekHeaderRowClick("tuesday")') Tue
            th.vui-text-align--center.wednesday(@click='dayOfWeekHeaderRowClick("wednesday")') Wed
            th.vui-text-align--center.thursdey(@click='dayOfWeekHeaderRowClick("thursday")') Thu
            th.vui-text-align--center.friday(@click='dayOfWeekHeaderRowClick("friday")') Fri
            th.vui-text-align--center.saturday(@click='dayOfWeekHeaderRowClick("saturday")') Sat
            th.vui-text-align--center.sunday(@click='dayOfWeekHeaderRowClick("sunday")') Sun
        tbody
          tr
            td(@click='weekNumberClick') Week 1
            td.vui-text-align--center.monday(@click='dayOfWeekClick') 14
            td.vui-text-align--center.tuesday(@click='dayOfWeekClick') 15
            td.vui-text-align--center.wednesday(@click='dayOfWeekClick') 16
            td.vui-text-align--center.thursday(@click='dayOfWeekClick') 17
            td.vui-text-align--center.friday(@click='dayOfWeekClick') 18
            td.vui-text-align--center.saturday(@click='dayOfWeekClick') 19
            td.vui-text-align--center.sunday(@click='dayOfWeekClick') 20
          tr
            td(@click='weekNumberClick') Week 2
            td.vui-text-align--center.monday(@click='dayOfWeekClick') 21
            td.vui-text-align--center.tuesday(@click='dayOfWeekClick') 22
            td.vui-text-align--center.wednesday(@click='dayOfWeekClick') 23
            td.vui-text-align--center.thursday(@click='dayOfWeekClick') 24
            td.vui-text-align--center.friday(@click='dayOfWeekClick') 25
            td.vui-text-align--center.saturday(@click='dayOfWeekClick') 26
            td.vui-text-align--center.sunday(@click='dayOfWeekClick') 27
        thead
          tr
            th(rowspan='2') Week
            th.vui-text-align--center(@click='monthClick($event)', colspan='7') December 2016
          tr
            th.vui-text-align--center.monday(@click='dayOfWeekHeaderRowClick()', style='padding-left: 0.5rem') Mon
            th.vui-text-align--center.tuesday(@click='dayOfWeekHeaderRowClick()') Tue
            th.vui-text-align--center.wednesday(@click='dayOfWeekHeaderRowClick()') Wed
            th.vui-text-align--center.thursday(@click='dayOfWeekHeaderRowClick()') Thu
            th.vui-text-align--center.friday(@click='dayOfWeekHeaderRowClick()') Fri
            th.vui-text-align--center.saturday(@click='dayOfWeekHeaderRowClick()') Sat
            th.vui-text-align--center.sunday(@click='dayOfWeekHeaderRowClick()') Sun
        tbody
          tr
            td(@click='weekNumberClick') Week 3
            td.vui-text-align--center.monday(@click='dayOfWeekClick') 28
            td.vui-text-align--center.tuesday(@click='dayOfWeekClick') 29
            td.vui-text-align--center.wednesday(@click='dayOfWeekClick') 30
            td.vui-text-align--center.thursday(@click='dayOfWeekClick') 01
            td.vui-text-align--center.friday(@click='dayOfWeekClick') 02
            td.vui-text-align--center.saturday(@click='dayOfWeekClick') 03
            td.vui-text-align--center.sunday(@click='dayOfWeekClick') 04
          tr
            td(@click='weekNumberClick') Week 4
            td.vui-text-align--center.monday(@click='dayOfWeekClick') 05
            td.vui-text-align--center.tuesday(@click='dayOfWeekClick') 06
            td.vui-text-align--center.wednesday(@click='dayOfWeekClick') 07
            td.vui-text-align--center.thursday(@click='dayOfWeekClick') 08
            td.vui-text-align--center.friday(@click='dayOfWeekClick') 09
            td.vui-text-align--center.saturday(@click='dayOfWeekClick') 10
            td.vui-text-align--center.sunday(@click='dayOfWeekClick') 11
        tr
          td(@click='weekNumberClick') Week 5
          td.vui-text-align--center.monday(@click='dayOfWeekClick') 12
          td.vui-text-align--center.tuesday(@click='dayOfWeekClick') 13
          td.vui-text-align--center.wednesday(@click='dayOfWeekClick') 14
          td.vui-text-align--center.thursday(@click='dayOfWeekClick') 15
          td.vui-text-align--center.friday(@click='dayOfWeekClick') 16
          td.vui-text-align--center.saturday(@click='dayOfWeekClick') 17
          td.vui-text-align--center.sunday(@click='dayOfWeekClick') 18
        tr
          td(@click='weekNumberClick') Week 6
          td.vui-text-align--center.monday(@click='dayOfWeekClick') 19
          td.vui-text-align--center.tuesday(@click='dayOfWeekClick') 20
          td.vui-text-align--center.wednesday(@click='dayOfWeekClick') 21
          td.vui-text-align--center.thursday(@click='dayOfWeekClick') 22
          td.vui-text-align--center.friday(@click='dayOfWeekClick') 23
          td.vui-text-align--center.saturday(@click='dayOfWeekClick') 24
          td.vui-text-align--center.sunday(@click='dayOfWeekClick') 25
      .vui-text-align--right
        button.vui-m-right--xx-small.vui-button.vui-button--brand(v-link='{ name: "buyers.avails.request.summary" }', :disabled='daypartMixTotal !== 100') Submit
        button.vui-button.vui-button--neutral Cancel
</template>

<script>
  import $ from 'jquery'
  import store from '../../../store'
  import Button from '../../../components/Button.vue'
  import Datepicker from '../../../components/Datepicker2.vue'
  import PageHeading from '../../../components/PageHeading.vue'
  import Icon from '../../../components/Icon.vue'
  import MarketsTypeahead from '../../../components/MarketsTypeahead.vue'
  import Typeahead from '../../../components/Typeahead.vue'

  export default {
    components: {
      Button,
      Datepicker,
      PageHeading,
      Icon,
      MarketsTypeahead,
      Typeahead
    },

    created () {
      this.sharedState.activeApp = 'buyers'
    },

    ready () {
      let ageRange = document.getElementById('age-range')

      noUiSlider.create(ageRange, {
        start: [25.0, 54.0],
        tooltips: true,
        step: 1,
        connect: true,
        range: {
          'min': 18,
          'max': 100
        },
        format: {
          to (value) {
            return value + ''
          },
          from (value) {
            return value.replace('', '')
          }
        },
        pips: {
          mode: 'range',
          values: [18, 100],
          density: 100
        }
      })
    },

    data () {
      return {
        sharedState: store.state,
        startDate: new Date('2016-11-14T12:24:00'),
        endDate: new Date('2016-12-25T12:24:00'),
        grossBudget: 0,
        USstate: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
        asyncTemplate: '{{ item.formatted_address }}',
        githubTemplate: '<img width="18px" height="18px" :src="item.avatar_url"/> <span>{{item.login}}</span>',
        selected: '',
        advertiser: '',
        selectButtonText: 'Select',
        selectWeekendButtonText: 'Select',
        weekClicked: false,
        advertisers: [
          {
            id: 135001,
            name: 'Piedmont Healthcare'
          }
        ],
        selectedAdvertiser: '',
        selectedMarket: '',
        unplannedDayparts: [],
        selectedDayparts: [
          'earlyMorning',
          'daytime'
        ],
        dayparts: [
          { id: 'earlyMorning', name: 'Early Morning', unplanned: false, targetCpp: null, daypartMix: null, targetGrp: null },
          { id: 'daytime', name: 'Daytime', unplanned: false, targetCpp: null, daypartMix: null, targetGrp: null },
          { id: 'earlyFringe', name: 'Early Fringe', unplanned: false, targetCpp: null, daypartMix: null, targetGrp: null },
          { id: 'earlyNews', name: 'Early News', unplanned: false, targetCpp: null, daypartMix: null, targetGrp: null },
          { id: 'primeAccess', name: 'Prime Access', unplanned: false, targetCpp: null, daypartMix: null, targetGrp: null },
          { id: 'primeSpecials', name: 'Prime/Specials', unplanned: false, targetCpp: null, daypartMix: null, targetGrp: null },
          { id: 'sports', name: 'Sports', unplanned: false, targetCpp: null, daypartMix: null, targetGrp: null },
          { id: 'lateNews', name: 'Late News', unplanned: false, targetCpp: null, daypartMix: null, targetGrp: null },
          { id: 'lateFringe', name: 'Late Fringe', unplanned: false, targetCpp: null, daypartMix: null, targetGrp: null },
          { id: 'weekend', name: 'Weekend', unplanned: false, targetCpp: null, daypartMix: null, targetGrp: null },
          { id: 'overnight', name: 'Overnight', unplanned: false, targetCpp: null, daypartMix: null, targetGrp: null }
        ],
        markets: [
          'Abilene-Sweetwater',
          'Albany, GA',
          'Albany-Schenectady-Troy',
          'Albuquerque-Santa Fe',
          'Alexandria, LA',
          'Alpena',
          'Amarillo',
          'Anchorage',
          'Atlanta',
          'Augusta-Aiken',
          'Austin',
          'Bakersfield',
          'Baltimore',
          'Bangor',
          'Baton Rouge',
          'Beaumont-Port Arthur',
          'Bend, OR',
          'Billings',
          'Biloxi-Gulfport',
          'Binghamton',
          'Birmingham (Ann and Tusc)',
          'Bluefield-Beckley-Oak Hill',
          'Boise',
          'Boston (Manchester)',
          'Bowling Green',
          'Buffalo',
          'Burlington-Plattsburgh',
          'Butte-Bozeman',
          'Casper-Riverton',
          'Cedar Rapids-Wtrlo-IWC&Dub',
          'Champaign&Sprngfld-Decatur',
          'Charleston, SC',
          'Charleston-Huntington',
          'Charlotte',
          'Charlottesville',
          'Chattanooga',
          'Cheyenne-Scottsbluff',
          'Chicago',
          'Chico-Redding',
          'Cincinnati',
          'Clarksburg-Weston',
          'Cleveland-Akron (Canton)',
          'Colorado Springs-Pueblo',
          'Columbia,SC',
          'Columbia-Jefferson City',
          'Columbus,GA (Opelika,AL)',
          'Columbus,OH',
          'Columbus-Tupelo-W Pnt-Hstn',
          'Corpus Christi',
          'Dallas-Ft. Worth',
          'Davenport-R.Island-Moline',
          'Dayton',
          'Denver',
          'Des Moines-Ames',
          'Detroit',
          'Dothan',
          'Duluth-Superior',
          'El Paso (Las Cruces)',
          'Elmira (Corning)',
          'Erie',
          'Eugene',
          'Eureka',
          'Evansville',
          'Fairbanks',
          'Fargo-Valley City',
          'Flint-Saginaw-Bay City',
          'Fresno-Visalia',
          'Ft. Myers-Naples',
          'Ft. Smith-Fay-Sprngdl-Rgrs',
          'Ft. Wayne',
          'Gainesville',
          'Glendive',
          'Grand Junction-Montrose',
          'Grand Rapids-Kalmzoo-B.Crk',
          'Great Falls',
          'Green Bay-Appleton',
          'Greensboro-H.Point-W.Salem',
          'Greenville-N.Bern-Washngtn',
          'Greenvll-Spart-Ashevll-And',
          'Greenwood-Greenville',
          'Harlingen-Wslco-Brnsvl-McA',
          'Harrisburg-Lncstr-Leb-York',
          'Harrisonburg',
          'Hartford & New Haven',
          'Hattiesburg-Laurel',
          'Helena',
          'Honolulu',
          'Houston',
          'Huntsville-Decatur (Flor)',
          'Idaho Fals-Pocatllo(Jcksn)',
          'Indianapolis',
          'Jackson,MS',
          'Jackson,TN',
          'Jacksonville',
          'Johnstown-Altoona-St Colge',
          'Jonesboro',
          'Joplin-Pittsburg',
          'Juneau',
          'Kansas City',
          'Knoxville',
          'La Crosse-Eau Claire',
          'Lafayette,IN',
          'Lafayette,LA',
          'Lake Charles',
          'Lansing',
          'Laredo',
          'Las Vegas',
          'Lexington',
          'Lima',
          'Lincoln & Hastings-Krny',
          'Little Rock-Pine Bluff',
          'Los Angeles',
          'Louisville',
          'Lubbock',
          'Macon',
          'Madison',
          'Mankato',
          'Marquette',
          'Medford-Klamath Falls',
          'Memphis',
          'Meridian',
          'Miami-Ft. Lauderdale',
          'Milwaukee',
          'Minneapolis-St. Paul',
          'Minot-Bsmrck-Dcknsn(Wlstn)',
          'Missoula',
          'Mobile-Pensacola (Ft Walt)',
          'Monroe-El Dorado',
          'Monterey-Salinas',
          'Montgomery-Selma',
          'Myrtle Beach-Florence',
          'Nashville',
          'New Orleans',
          'New York',
          'Norfolk-Portsmth-Newpt Nws',
          'North Platte',
          'Odessa-Midland',
          'Oklahoma City',
          'Omaha',
          'Orlando-Daytona Bch-Melbrn',
          'Ottumwa-Kirksville',
          'Paducah-Cape Girard-Harsbg',
          'Palm Springs',
          'Panama City',
          'Parkersburg',
          'Peoria-Bloomington',
          'Philadelphia',
          'Phoenix (Prescott)',
          'Pittsburgh',
          'Portland,OR',
          'Portland-Auburn',
          'Presque Isle',
          'Providence-New Bedford',
          'Quincy-Hannibal-Keokuk',
          'Raleigh-Durham (Fayetvlle)',
          'Rapid City',
          'Reno',
          'Richmond-Petersburg',
          'Roanoke-Lynchburg',
          'Rochester,NY',
          'Rochestr-Mason City-Austin',
          'Rockford',
          'Sacramnto-Stkton-Modesto',
          'Salisbury',
          'Salt Lake City',
          'San Angelo',
          'San Antonio',
          'San Diego',
          'San Francisco-Oak-San Jose',
          'SantaBarbra-SanMar-SanLuOb',
          'Savannah',
          'Seattle-Tacoma',
          'Sherman-Ada',
          'Shreveport',
          'Sioux City',
          'Sioux Falls(Mitchell)',
          'South Bend-Elkhart',
          'Spokane',
          'Springfield,MO',
          'Springfield-Holyoke',
          'St. Joseph',
          'St. Louis',
          'Syracuse',
          'Tallahassee-Thomasville',
          'Tampa-St. Pete (Sarasota)',
          'Terre Haute',
          'Toledo',
          'Topeka',
          'Traverse City-Cadillac',
          'Tri-Cities, TN-VA',
          'Tucson (Sierra Vista)',
          'Tulsa',
          'Twin Falls',
          'Tyler-Longview(Lfkn&Ncgd)',
          'Utica',
          'Victoria',
          'Waco-Temple-Bryan',
          'Washington,DC (Hagrstwn)',
          'Watertown',
          'Wausau-Rhinelander',
          'West Palm Beach-Ft. Pierce',
          'Wheeling-Steubenville',
          'Wichita Falls & Lawton',
          'Wichita-Hutchinson Plus',
          'Wilkes Barre-Scranton-Hztn',
          'Wilmington',
          'Yakima-Pasco-Rchlnd-Knnwck',
          'Youngstown',
          'Yuma-El Centro',
          'Zanesville'
        ],
        locations: [
          {
            country: 'FooCountry',
            city: ['Select Market', 'Atlanta', 'Washington']
          }
        ],
        addresses: [
          {
            city: 'Select Market',
            station: ['', '--']
          },
          {
            city: 'Atlanta',
            station: ['WXIA', 'ABCD']
          },
          {
            city: 'Washington',
            station: ['WVVV', 'WXYZ']
          }
        ],
        selectedCountry: null,
        selectedCity: null,
        loadedCityOptions: null,
        loadedStationOptions: null
        // markets: [
        //   {
        //     marketId: 125,
        //     name: 'Albuquerque-Santa Fe'
        //   },
        //   {
        //     marketId: 81,
        //     name: 'Birmingham (Ann and Tusc)'
        //   },
        //   {
        //     marketId: 27,
        //     name: 'Buffalo'
        //   },
        //   {
        //     marketId: 123,
        //     name: 'Cincinnati'
        //   },
        //   {
        //     marketId: 32,
        //     name: 'Jacksonville'
        //   },
        //   {
        //     marketId: 126,
        //     name: 'Kansas City'
        //   },
        //   {
        //     marketId: 24,
        //     name: 'Milwaukee'
        //   },
        //   {
        //     marketId: 124,
        //     name: 'Oklahoma City'
        //   },
        //   {
        //     marketId: 11,
        //     name: 'Tulsa'
        //   },
        //   {
        //     marketId: 122,
        //     name: 'West Palm Beach-Ft. Pierce'
        //   }
        // ]
      }
    },

    computed: {
      daypartMixTotal () {
        return this.dayparts.reduce((total, daypart) => {
          return total + daypart.daypartMix
        }, 0)
      },

      testDayparts () {
        return this.dayparts.reduce((memo, daypart) => {
          let selected = false

          // for (var i = 0; i < this.selectedDayparts.length; i++) {
          //     if (this.selectedDayparts[i] === daypart.id) {
          //         selected = true
          //     }
          // }

          this.selectedDayparts.forEach(function (selectedDaypart) {
            if (selectedDaypart === daypart.id) selected = true
          })

          // if (daypart.id == 'earlyMorning') { // this serves as our `filter`
          memo.push({ // this serves as our `map`
            doctorNumber: '#' + daypart.id,
            active: selected ? 'active' : null,
            yearsPlayed: daypart.end - daypart.begin + 1
          })
          // }
          return memo
        }, [])
      }
    },

    methods: {

      googleCallback (items, targetVM) {
        const that = targetVM
        that.reset()
        that.query = items.formatted_address
      },

      githubCallback (items) {
        window.open(items.html_url, '_blank')
      },

      selectOrDeselectAllWeeks () {
        let days = $('#flight-days').find('tbody td:not(:first-child)')

        if (this.selectButtonText === 'Select') {
          days.addClass('vui-selected')
          this.selectButtonText = 'Deselect'
        } else {
          days.removeClass('vui-selected')
          this.selectButtonText = 'Select'
        }
      },

      selectOrDeselectAllWeekends () {
        if (this.selectWeekendButtonText === 'Select') {
          $('#flight-days').find('tbody td.saturday').addClass('vui-selected')
          $('#flight-days').find('tbody td.sunday').addClass('vui-selected')
          this.selectWeekendButtonText = 'Deselect'
        } else {
          $('#flight-days').find('tbody td.saturday').removeClass('vui-selected')
          $('#flight-days').find('tbody td.sunday').removeClass('vui-selected')
          this.selectWeekendButtonText = 'Select'
        }
      },

      selectAllWeeks () {
        $('#flight-days').find('tbody td:not(:first-child)').addClass('vui-selected')
      },

      deselectAllWeeks () {
        $('#flight-days').find('tbody td:not(:first-child)').removeClass('vui-selected')
      },

      dayOfWeekHeaderRowClick (day) {
        let $element = $('#flight-days').find('tbody td.' + day)

        if ($element.hasClass('vui-selected')) {
          $element.removeClass('vui-selected')
        } else {
          $element.addClass('vui-selected')
        }
      },

      dayOfWeekClick (event) {
        event.target.classList.toggle('vui-selected')
      },

      monthClick (event) {
        let $element = $(event.target).closest('thead').next('tbody').find('td:not(:first-child)')

        if ($element.hasClass('vui-selected')) {
          $element.removeClass('vui-selected')
        } else {
          $element.addClass('vui-selected')
        }
      },

      weekNumberClick (event) {
        let days = $(event.target.parentNode).find('td:not(:first-child)')
        if (this.weekClicked === true) {
          days.removeClass('vui-selected')
          this.weekClicked = false
        } else {
          days.addClass('vui-selected')
          this.weekClicked = true
        }
        console.log(this.weekClicked)
        // document.getElementsByClassName('myElement')
      },

      foundDaypart (daypart) {
        return (this.unplannedDayparts.indexOf(daypart) !== -1)
      },

      toggleUnplanned (daypart) {
        let item = this.unplannedDayparts.indexOf(daypart)

        if (item === -1) {
          this.unplannedDayparts.push(daypart)
        } else {
          this.unplannedDayparts.splice(item, 1)
        }
      },

      toggleDaypartSelection (event) {
        console.log($(event.target).toggleClass('vui-selected'))
      }
      // isExist (arr, str) {
      //   for (var i = 0; i < arr.length; i++) {
      //      if (arr[i] === 'kamal') {
      //       // Return index
      //       return i;
      //     } else {
      //       /* If value is not found return -1. */
      //       return -1;
      //     }
      //   }
      // }
    }
  }
</script>

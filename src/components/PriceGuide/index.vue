<template lang="jade">
  .price-guide-view

    // Page Heading
    h1.vui-text-heading--large Price Guide
    h2.vui-text-heading--label.vui-m-bottom--medium Videa Pricing was last updated on April 17, 2016 at 04:31 PM

    p.vui-text-longform.vui-m-bottom--medium Use the Price Guide to review your rates and to either accept the Videa rates or override the Videa rates. The price is set prior to avail in the price guide. If you accept the Videa rates, know that Videa updates the rates every Sunday.

    // Panel
    panel.vui-m-bottom--large(title='View Selection')

      // Form
      form.vui-grid.vui-grid--vertical-align-end(action='')

        // CPP | CPM Radio Fieldset
        fieldset.vui-form-element.vui-m-right--small
          legend.form-element__legend.vui-form-element__label Metric
          .vui-form-element__control.vui-grid
            // CPP Radio Input
            label.vui-radio(for='cpp')
              input#cpp(type='radio', name='cpp', v-model='cppOrCpm', value='cpp')
              span.vui-radio--faux.vui-m-right--xx-small
              span.vui-form-element__label CPP

            // CPM Radio Input
            label.vui-radio.vui-m-right--large(for='cpm')
              input#cpm(type='radio', name='cpm', v-model='cppOrCpm', value='cpm')
              span.vui-radio--faux.vui-m-right--xx-small
              span.vui-form-element__label CPM

        // Quarter Select Fieldset
        fieldset.vui-form-element.vui-m-right--small
          label.vui-form-element__label(for='') Quarter
          .vui-form-element__control.vui-m-right--small
            .vui-select_container
              select.vui-select(name='', id='')
                option(value='') Quarter
                option(value='', selected) 2016/Q2
                option(value='') 2016/Q3
                option(value='') 2016/Q4
                option(value='') 2017/Q1

        // $0 Spots Checkbox Fieldset
        fieldset.vui-form-element.vui-m-right--small
          .vui-form-element__control(style='margin-top: -2rem')
            label.vui-checkbox
              input#checkbox-01(type='checkbox', name='options')
              span.vui-checkbox--faux
              span.vui-form-element__label $0 Spots

        // Submit Button Fieldset
        fieldset.vui-form-element
          button.vui-button.vui-button--brand.vui-m-right--x-small Submit

    // Daypart Selector
    #daypart-selector.vui-m-bottom--large
      h3.vui-text-heading--medium.vui-m-bottom--small Select Daypart
      button.vui-button.vui-max-small-buttons--stretch(:disabled='false', @click.prevent='selectDaypart("early-morning")', :class="(selected == 'early-morning') ? 'vui-button--brand' : 'vui-button--neutral'") Early Morning
      button.vui-button.vui-max-small-buttons--stretch(:disabled='false', @click.prevent='selectDaypart("daytime")', :class="(selected == 'daytime') ? 'vui-button--brand' : 'vui-button--neutral'") Daytime
      button.vui-button.vui-max-small-buttons--stretch(:disabled='false', @click.prevent='selectDaypart("early-fringe")', :class="(selected == 'early-fringe') ? 'vui-button--brand' : 'vui-button--neutral'") Early Fringe
      button.vui-button.vui-max-small-buttons--stretch(:disabled='false', @click.prevent='selectDaypart("early-news")', :class="(selected == 'early-news') ? 'vui-button--brand' : 'vui-button--neutral'") Early News
      button.vui-button.vui-max-small-buttons--stretch(:disabled='false', @click.prevent='selectDaypart("primeAccess")', :class="(selected == 'primeAccess') ? 'vui-button--brand' : 'vui-button--neutral'") Prime Access
      button.vui-button.vui-max-small-buttons--stretch(:disabled='false', @click.prevent='selectDaypart("primeSpecials")', :class="(selected == 'primeSpecials') ? 'vui-button--brand' : 'vui-button--neutral'") Prime/Specials
      button.vui-button.vui-max-small-buttons--stretch(:disabled='false', @click.prevent='selectDaypart("sports")', :class="(selected == 'sports') ? 'vui-button--brand' : 'vui-button--neutral'") Sports
      button.vui-button.vui-max-small-buttons--stretch(:disabled='false', @click.prevent='selectDaypart("late-news")', :class="(selected == 'late-news') ? 'vui-button--brand' : 'vui-button--neutral'") Late News
      button.vui-button.vui-max-small-buttons--stretch(:disabled='false', @click.prevent='selectDaypart("late-fringe")', :class="(selected == 'late-fringe') ? 'vui-button--brand' : 'vui-button--neutral'") Late Fringe
      button.vui-button.vui-max-small-buttons--stretch(:disabled='false', @click.prevent='selectDaypart("weekend")', :class="(selected == 'weekend') ? 'vui-button--brand' : 'vui-button--neutral'") Weekend
      button.vui-button.vui-max-small-buttons--stretch(:disabled='false', @click.prevent='selectDaypart("overnight")', :class="(selected == 'overnight') ? 'vui-button--brand' : 'vui-button--neutral'") Overnight

    // table-header
    h3.vui-text-heading--medium.vui-m-bottom--small {{ selected | toTitleCase }} | Q2 2016

    // Market CPP
    .vui-grid.vui-grid--align-end
      h4.vui-text-heading--small.vui-m-bottom--small

        form.vui-form--inline

          // Market CPP Input Fieldset
          fieldset.vui-form-element
            label.vui-form-element__label Market CPP:
            .vui-form-element__control(v-show='sharedState.activeApp == "reps"')
              input.vui-input.vui-m-right--xx-small(style='width: 5rem', type='text', v-model='sharedState.marketCpp | currencyDisplay')
            .vui-form-element__control(v-else)
              span.vui-form-element__static {{ sharedState.marketCpp | currencyDisplay }}

          // Update Market CPP Button Fieldset
          fieldset.vui-form-element(v-show='sharedState.activeApp == "reps"')
            button.vui-button.vui-button--brand(@click='updateMarketCpp($event)') Update

    // Add Program Modal | Manage Premium Clients
    .vui-box.vui-grid.vui-grid--align-spread.vui-grid--vertical-align-middle.vui-theme--default(v-show='sharedState.activeApp == "sellers"')

      a.vui-align-middle(@click.prevent='', href='#') View Previously Accepted Rates and Ratings

      .vui-grid
        .vui-align-middle.vui-m-right--xx-small Premium percent for daypart

        .vui-align-middle.vui-m-right--xx-small
          input#global-premium-percent.vui-align-middle.vui-input.vui-input--small.vui-text-align--right(style='width: 3.25rem', v-show='editingPercent', v-model='sharedState.globalPremiumPercent')
          span.vui-align-middle.vui-form-element__static(v-show='!editingPercent') {{ sharedState.globalPremiumPercent }}
        .vui-align-middle.vui-m-right--small %

        .vui-align-middle
          a(v-show='!editingPercent', href='#', @click.prevent='editingPercent = true')
            icon(name='pencil')
          a(v-show='editingPercent', href='#', @click.prevent='updateDayparts($event)') Update Dayparts

      span.vui-align-middle
        a.vui-m-right--medium(v-link='{ name: "settings.specials" }')
          icon.vui-align-middle(name='plus-circle')
          span.vui-align-middle Add a Program

      a.vui-align-middle(v-link='{ "name": "settings.premium-advertisers" }', href='#')
          icon.vui-align-middle(name='pencil')
          span.vui-align-middle(name='edit') Edit Premium Advertisers

    // Scrollable Container (Horizontal)
    .vui-scrollable-x.vui-m-bottom--small

      // Price Guide Table
      template(v-for='item in sharedState.priceGuide', transition='expand')

        table.vui-table.vui-no-row-hover
          thead
            tr
              th(rowspan='2') Program
              th(colspan='3') Station
              th(colspan='3') Station Premium
              th(colspan='4') Videa
              th(colspan='3') On the Books
            tr
              // Station
              th.u-width-large(style='min-width:5rem') Rate
              th.u-width-medium.vui-text-align--center(v-show='cppOrCpm == "cpp"') A25-54 <sup>1</sup>
              th.u-width-medium(v-show='cppOrCpm == "cpp"') CPP <sup>1</sup>
              th.u-width-medium(v-show='cppOrCpm == "cpm"') Imp (000)
              th.u-width-medium(v-show='cppOrCpm == "cpm"') CPM <sup>1</sup>

              // Station Premium
              th.u-width-medium.vui-text-align--center %
              th.u-width-large(style='min-width:6rem') Rate
              th.u-width-medium(v-show='cppOrCpm == "cpp"', style='min-width:6rem;max-width:6rem') CPP <sup>1</sup>
              th.u-width-medium(v-show='cppOrCpm == "cpm"') CPM <sup>1</sup>

              // Videa
              th.u-width-small Accept<br>Rate
              th.u-width-medium(style='min-width:5rem') Rate
              th.u-width-medium(v-show='cppOrCpm == "cpp"', style='min-width:5rem') A25-54 <sup>1</sup>
              th.u-width-medium(v-show='cppOrCpm == "cpp"') CPP <sup>1</sup>
              th.u-width-medium(v-show='cppOrCpm == "cpm"') Imp (000)
              th.u-width-medium(v-show='cppOrCpm == "cpm"') CPM <sup>1</sup>

              // On the Books
              th.u-width-small Min/Max Rate
              th.u-width-small AUR/LY AUR
              th.u-width-small Sellout %

          // Programs
          tbody(v-for='program in item.programs', transition='item')

            tr.program

              // Program
              td.name
                span.vui-grid
                  a.vui-align-middle.vui-m-right--x-small(href='#', @click.prevent='program.expanded = !program.expanded')
                    icon.vui-align-middle.vui-m-right--x-small(:name="(program.expanded) ? 'caret-lower-right' : 'caret-right'")
                  .vui-align-middle
                    .program-name {{ program.name }}
                    span {{ program.time }}

              // Station -- Rate (Program)
              td.station.rate.vui-text-align--right
                | {{ Math.round(averageMonthlyStationRate(program.months)) | numberWithCommas | formatMoney }}

              // Station -- Rating (Program)
              td.station.rating.vui-text-align--right(v-show='cppOrCpm == "cpp"')
                | {{ averageMonthlyStationRating(program.months) | formatRating }}

              // Station -- CPP (Program)
              td.station.cpp.vui-text-align--right(v-show='cppOrCpm == "cpp"')
                cpp(:rate="averageMonthlyStationRate(program.months)", :rating="averageMonthlyStationRating(program.months)")

              // Station -- Impressions (Program)
              td.station.impressions.vui-text-align--right(v-show='cppOrCpm == "cpm"')
                | {{ Math.round(averageMonthlyStationImpressions(program.months)) | formatRating }}

              // Station -- CPM (Program)
              td.station.cpm.vui-text-align--right(v-show='cppOrCpm == "cpm"')
                | {{ Math.round(averageMonthlyStationCpm(program.months)) | numberWithCommas | formatMoney }}

              // Station Premium -- Percent (Program)
              td.station.premium.percent.vui-text-align--center
                | {{ averageMonthlyStationPremiumPercent(program.months).toFixed(0) }}

              // Station Premium -- Rate (Program)
              td.station.premium.rate.vui-text-align--right
                | {{ Math.round(averageMonthlyStationPremiumRate(program.months)) | numberWithCommas | formatMoney }}

              // Station Premium -- CPP (Program)
              td.station.premium.cpp.vui-text-align--right(v-show='cppOrCpm == "cpp"')
                | {{ Math.round(averageMonthlyStationPremiumCpp(program.months)) | numberWithCommas | formatMoney }}

              // Station Premium -- CPM (Program)
              td.station.premium.cpm.vui-text-align--right(v-show='cppOrCpm == "cpm"')
                | {{ Math.round(averageMonthlyStationPremiumCpm(program.months)) | numberWithCommas | formatMoney }}

              // Videa -- Accept Videa Rate (Program)
              td.videa.accept-rate.vui-text-align--center.vui-highlight
                .vui-form-element
                  .vui-form-element__control
                    label.vui-checkbox
                      input.vui-input(type='checkbox', :value='program.acceptRate', v-model='program.acceptRate', :disabled='sharedState.activeApp == "reps"')
                      span.vui-checkbox--faux

              // Videa -- Rate (Program)
              td.videa.rate.vui-text-align--right.vui-highlight
                | {{ Math.round(averageMonthlyVideaRate (program.months)) | numberWithCommas | formatMoney }}

              // Videa -- Rating (Program)
              td.videa.rating.vui-text-align--right.vui-highlight(v-show='cppOrCpm == "cpp"')
                | {{ averageMonthlyVideaRating(program.months) | formatRating }}

              // Videa -- CPP (Program)
              td.videa.cpp.vui-text-align--right.vui-highlight(v-show='cppOrCpm == "cpp"')
                cpp(:rate="averageMonthlyVideaRate(program.months)", :rating="averageMonthlyVideaRating(program.months)")

              // Videa -- Impressions (Program)
              td.videa.impressions.vui-text-align--right.vui-highlight(v-show='cppOrCpm == "cpm"')
                | {{ Math.round(averageMonthlyVideaImpressions(program.months)) | formatRating }}

              // Videa -- CPM (Program)
              td.videa.cpm.vui-text-align--right.vui-highlight(v-show='cppOrCpm == "cpm"')
                | {{ Math.round(averageMonthlyVideaCpm(program.months)) | numberWithCommas | formatMoney }}

              // On The Books -- (Program)
              td.on-the-books.rate.min-max.vui-text-align--right
                | {{ Math.round(averageMonthlyOnTheBooksRateMin(program.months)) | numberWithCommas | formatMoney }}
                | /
                | {{ Math.round(averageMonthlyOnTheBooksRateMax(program.months)) | numberWithCommas | formatMoney }}

              // On The Books -- (Program)
              td.on-the-books.rate.vui-text-align--right
                | {{ Math.round(averageMonthlyOnTheBooksRate(program.months)) | numberWithCommas | formatMoney }}
                | /
                | {{ Math.round(averageMonthlyOnTheBooksRateLastYear(program.months)) | numberWithCommas | formatMoney }}

              // On The Books -- (Program)
              td.on-the-books.sell-out-percent.vui-text-align--right
                | {{ averageMonthlyOnTheBooksSelloutPercent(program.months) | decimalToPercent }}

            // Months
            template(v-for='month in program.months', v-if='program.months')

              tr.month(v-show='program.expanded', :class='[(month.station.rate !== month.videa.rate) ? "has-changed" : ""]')

                // Month
                td.name
                  .vui-grid.vui-grid--align-spread
                    span.vui-align-middle(style='font-weight: 500') {{ month.month }}
                    dropdown.vui-align-middle.dropdown-left.vui-m-right--x-small(text='icon', :weeks='month.weeks', :month='month')

                // Station -- Rate (month)
                td.station.rate.vui-text-align--right(:style='(sharedState.activeApp == "reps") ? "" : ""')
                  span(v-show='sharedState.activeApp == "reps"') {{ month.station.rate | numberWithCommas | formatMoney }}
                  input.vui-input(@click="selectContents($event)", @keypress='onKeypress($event)', v-show='sharedState.activeApp == "sellers"', type='text', :value.sync='month.station.rate', v-model='month.station.rate | currencyDisplay', style='text-align: right')

                // Station -- Rating (month)
                td.station.rating.vui-text-align--right(v-show='cppOrCpm == "cpp"')
                  a(@click.prevent='displayEditRatingsModal(month)', href='#', style='text-decoration: underline')
                    | {{ month.station.rating | formatRating }}
                  input.vui-text-align--right.vui-input(@click="selectContents($event)", @keypress='onKeypress($event)', v-show='false', type='text', v-model='month.station.rating')

                // Station -- CPP (month)
                td.station.cpp.vui-text-align--right(v-show='cppOrCpm == "cpp"')
                  cpp(:rate='month.station.rate', :rating='month.station.rating')

                // Station -- Impressions (month) // TODO Add Monthly Station Impressions to Data
                td.station.impressions.vui-text-align--right(v-show='cppOrCpm == "cpm"')
                  | {{ month.videa.impressions | formatRating }}

                // Station -- CPM (month)
                td.station.cpm.vui-text-align--right(v-show='cppOrCpm == "cpm"')
                  cpm(:rate.sync='month.station.rate', :impressions.sync='month.station.impressions')

                // Station Premium -- Percent (month) (Percent)
                td.station.premium.percent.vui-text-align--center
                  //- .form-group
                  //-   .input-group.vui-grid
                  //-     input.vui-input.form-control(type='text', placeholder='Amount')
                  //-     .input-group-addon %

                  fieldset.vui-form-element
                    .vui-form-element__control.vui-input-icon
                      input.vui-input.vui-text-align--center(@click="selectContents($event)", @keypress='onKeypress($event)', @input='month.station.premium.rate = setPremiumRate(month.station.rate, month.station.premium.percent)', v-show='sharedState.activeApp == "sellers"', :value='month.station.premium.percent', v-model='month.station.premium.percent' number)
                  span(v-show='sharedState.activeApp !== "sellers"') {{ month.station.premium.percent }}

                // Station Premium -- Rate (month)
                td.station.premium.rate.vui-text-align--right(:style='(sharedState.activeApp == "reps") ? "" : ""')
                  input.vui-text-align--right.vui-input(@input='month.station.premium.percent = setPremiumPercent(month.station.premium.rate, month.station.rate)', v-show='sharedState.activeApp == "sellers"', :value='month.station.premium.rate' v-model='month.station.premium.rate' number)
                  span(v-show='sharedState.activeApp == "reps"') {{ month.station.premium.rate | numberWithCommas | formatMoney }}

                // Station Premium -- CPP (month)
                td.station.premium.cpp.vui-text-align--right(v-show='cppOrCpm == "cpp"')
                  cpp(:rate='month.station.premium.rate', :rating='month.station.premium.rating')

                // Station Premium -- CPM (month)
                td.station.premium.cpm.vui-text-align--right(v-show='cppOrCpm == "cpm"')
                  cpm(:rate='month.station.premium.rate', :impressions='month.station.impressions')

                // Videa -- Accept Videa Rate (month)
                td.videa.accept-rate.vui-text-align--center.vui-highlight
                  .vui-form-element
                    .vui-form-element__control
                      label.vui-checkbox
                        input.vui-input(type='checkbox', @change='acceptVideaRate(month)', :value.sync='month.acceptRate', v-model='month.acceptRate', :disabled='sharedState.activeApp == "reps"', :checked='month.station.rate == month.videa.rate')
                        span.vui-checkbox--faux

                // Videa -- Rate (month)
                td.videa.rate.vui-text-align--right.vui-highlight {{ month.videa.rate | numberWithCommas | formatMoney }}

                // Videa -- Rating (month)
                td.videa.rating.vui-text-align--right.vui-highlight(v-show='cppOrCpm == "cpp"') {{ month.videa.rating | formatRating }}

                // Videa -- CPP (month)
                td.videa.cpp.vui-text-align--right.vui-highlight(v-show='cppOrCpm == "cpp"')
                  cpp(:rate='month.videa.rate', :rating='month.videa.rating')

                // Videa -- Impressions (month)
                td.videa.impressions.vui-text-align--right.vui-highlight(v-show='cppOrCpm == "cpm"')
                  | {{month.videa.impressions}}

                // Videa -- CPM (month)
                td.videa.cpm.vui-text-align--right.vui-highlight(v-show='cppOrCpm == "cpm"')
                  cpm(:rate='month.videa.rate', :impressions='month.videa.impressions')

                // On The Books -- (month)
                td.on-the-books.rate.min-max.vui-text-align--right
                  | {{ month.onTheBooks.minRate | numberWithCommas | formatMoney }}
                  | /
                  | {{ month.onTheBooks.maxRate | numberWithCommas | formatMoney }}

                // On The Books -- (month)
                td.on-the-books.rate.vui-text-align--right
                  | {{ month.onTheBooks.aur | numberWithCommas | formatMoney }}
                  | /
                  |  {{ month.onTheBooks.lyAur | numberWithCommas | formatMoney }}

                // On The Books -- (month)
                td.on-the-books.sell-out-percent.vui-text-align--right
                  | {{ month.onTheBooks.sellOutPercent | decimalToPercent }}

              // Weeks
              template(v-for='week in month.weeks', v-if='month.weeks')

                tr.week(v-show='week.expanded', :class='[(week.station.rate !== week.videa.rate) ? "has-changed" : "", (!week.expanded) ? "vui-hide" : ""]')

                  // Week
                  td.name
                    .vui-grid
                      a.vui-align-middle(@click.prevent='week.expanded = false', href='#')
                        icon.vui-m-right--x-small(name='times-circle')
                      span.vui-align-middle Week of {{ week.week }}

                  // Station -- Rate (week)
                  td.station.rate.vui-text-align--right(:style='(sharedState.activeApp == "reps") ? "" : ""')
                    input.vui-input.vui-text-align--right(@click="selectContents($event)", @keypress='onKeypress($event)', v-show='sharedState.activeApp == "sellers"', type='text', v-model='week.station.rate | currencyDisplay')
                    span(v-show='sharedState.activeApp == "reps"') {{ week.station.rate | numberWithCommas | formatMoney }}

                  // Station -- Rating (week)
                  td.station.rating.vui-text-align--right(v-show='cppOrCpm == "cpp"')
                    input.vui-input.vui-text-align--right(@click="selectContents($event)", @keypress='onKeypress($event)', v-show='false', type='text', v-model='week.station.rating')
                    a(@click.prevent='displayEditRatingsModal(week)', href='#', style='text-decoration: underline')
                        | {{ month.station.rating | formatRating }}

                  // Station -- CPP (week)
                  td.station.cpp.vui-text-align--right(v-show='cppOrCpm == "cpp"')
                    cpp(:rate='week.station.rate', :rating='week.station.rating')

                  // Station -- Impressions (week) // TODO Add Weekly Station Impressions to Data
                  td.station.impressions.vui-text-align--right(v-show='cppOrCpm == "cpm"')
                    | {{ week.videa.impressions | formatRating }}

                  // Station -- CPM (week)
                  td.station.cpm.vui-text-align--right(v-show='cppOrCpm == "cpm"')
                    cpm(:rate='week.station.rate', :impressions='week.station.impressions')

                  // Station Premium -- Percent (week)
                  td.station.premium.percent.vui-text-align--center
                    input.vui-input.vui-text-align--center(@click="selectContents($event)", @keypress='onKeypress($event)', @input='week.station.premium.rate = setPremiumRate(week.station.rate, week.station.premium.percent)', v-show='sharedState.activeApp == "sellers"', :value='week.station.premium.percent', v-model='week.station.premium.percent' number)
                    span(v-show='sharedState.activeApp !== "sellers"') {{ week.station.premium.percent  }}

                  // Station Premium -- Rate (week)
                  td.station.premium.rate.vui-text-align--right(:style='(sharedState.activeApp == "reps") ? "" : ""')
                    input.vui-text-align--right.vui-input(@click="selectContents($event)", @keypress='onKeypress($event)',, @input='week.station.premium.percent = week.station.premium.rate / week.station.rate', v-show='sharedState.activeApp == "sellers"', :value='Math.round(week.station.premium.rate)' v-model='week.station.premium.rate' number)
                    span(v-show='sharedState.activeApp == "reps"') {{ week.station.premium.rate | numberWithCommas | formatMoney }}

                  // Station Premium -- CPP (week)
                  td.station.premium.cpp.vui-text-align--right(v-show='cppOrCpm == "cpp"')
                    cpp(:rate='week.station.premium.rate', :rating='week.station.premium.rating')

                  // Station Premium -- CPM (week)
                  td.station.premium.cpm.vui-text-align--right(v-show='cppOrCpm == "cpm"')
                    cpm(:rate='week.station.premium.rate', :impressions='week.station.impressions')

                  // Videa -- Accept Videa Rate (week)
                  td.videa.accept-rate.vui-text-align--center.vui-highlight
                    .vui-form-element
                      .vui-form-element__control
                        label.vui-checkbox
                          input.vui-input(type='checkbox', @change='acceptVideaRate(week)', :value.sync='week.acceptRate', v-model='week.acceptRate', :disabled='sharedState.activeApp == "reps"', :checked='week.station.rate == week.videa.rate')
                          span.vui-checkbox--faux

                  // Videa -- Rate (week)
                  td.videa.rate.vui-text-align--right.vui-highlight
                    | {{ week.videa.rate | numberWithCommas | formatMoney }}

                  // Videa -- Rating (week)
                  td.videa.rating.vui-text-align--right.vui-highlight(v-show='cppOrCpm == "cpp"')
                    | {{ week.videa.rating | formatRating }}

                  // Videa -- CPP (week)
                  td.videa.cpp.vui-text-align--right.vui-highlight(v-show='cppOrCpm == "cpp"')
                    | {{ week.videa.cpp | numberWithCommas | formatMoney }}

                  // Videa -- Impressions (week)
                  td.videa.impressions.vui-text-align--right.vui-highlight(v-show='cppOrCpm == "cpm"')
                    | {{week.videa.impressions}}

                  // Videa -- CPM (week)
                  td.videa.cpm.vui-text-align--right.vui-highlight(v-show='cppOrCpm == "cpm"')
                    cpm(:rate='week.videa.rate', :impressions='week.videa.impressions')

                  // On The Books -- (week)
                  td.on-the-books.rate.min-max.vui-text-align--right
                    | {{ week.onTheBooks.minRate | numberWithCommas | formatMoney }}
                    | /
                    | {{ week.onTheBooks.maxRate | numberWithCommas | formatMoney }}

                  // On The Books -- (week)
                  td.on-the-books.rate.vui-text-align--right
                    | {{ week.onTheBooks.aur | numberWithCommas | formatMoney }}
                    | /
                    | {{ week.onTheBooks.lyAur | numberWithCommas | formatMoney }}

                  // On The Books -- (week)
                  td.on-the-books.sell-out-percent.vui-text-align--right
                    | {{ week.onTheBooks.sellOutPercent | decimalToPercent }}

    // Table Footer Flex Container
    .vui-grid.vui-grid--align-spread

      // Flex Item
      p.vui-text-body--small
        sup.vui-m-right--xx-small 1
        span Nielsen source or data derived from Nielsen

      // Flex Item
      div.vui-text-align--right(v-show='sharedState.activeApp !== "reps"')

        // Accept Rates and Ratings Confirmation
        fieldset.vui-form-element.vui-align-middle.vui-m-bottom--small
          .vui-form-element__control
            label.vui-checkbox
              input.vui-input(type='checkbox', name='acceptedRatesAndRatings', v-model="acceptedRatesAndRatings")
              span.vui-form-element__label I have reviewed and accepted all rates and ratings
              span.vui-checkbox--faux

        // Submit Button
        fieldset.vui-form-element
          .vui-form-element__control
            button.vui-button.vui-button--brand(:disabled='!acceptedRatesAndRatings') Submit

    premium-clients-modal(:show.sync='showPremiumClientsModal', :account='account')
    edit-ratings-modal(:show.sync='showEditRatingsModal', :heading='heading', :data.sync='context')
    add-program-modal(:show.sync='showAddProgramModal')
</template>

<script>
  import store from '../../store'
  import Panel from '../Panel.vue'
  import Cpp from '../Cpp.vue'
  import Cpm from '../Cpm.vue'
  import Icon from '../Icon.vue'
  import DaypartSelector from '../DaypartSelector.vue'
  import PremiumClientsModal from '../PremiumClientsModal.vue'
  import EditRatingsModal from '../EditRatingsModal.vue'
  import AddProgramModal from '../AddProgramModal.vue'
  import Dropdown from '../AddWeekDropdown.vue'
  import PremiumPercentDropdown from '../ApplyPremiumPercentDropdown.vue'

  export default {
    components: {
      Panel,
      Cpp,
      Cpm,
      DaypartSelector,
      PremiumClientsModal,
      EditRatingsModal,
      AddProgramModal,
      Icon,
      Dropdown,
      PremiumPercentDropdown
    },

    props: {
      routeName: {
        type: String,
        default: 'sellers.price-guide'
      }
    },

    data () {
      return {
        context: {},
        acceptedRatesAndRatings: false,
        globalPercent: 0,
        editingPercent: false,
        cppOrCpm: 'cpp',
        premiumPercent: {
          program: 0,
          month: 0,
          week: 0
        },
        selected: this.$route.query.daypart || 'early-morning',
        selectedDaypart: {},
        daypart: this.$route.query.daypart || 'early-morning',
        dayparts: [],
        showPremiumClientsModal: false,
        showEditRatingsModal: false,
        showAddProgramModal: false,
        heading: '',
        sharedState: store.state,
        options: [
          {
            text: 'Early Morning',
            value: 'early-morning'
          },
          {
            text: 'Early News',
            value: 'early-news'
          },
          {
            text: 'Prime', value: 'prime'
          },
          {
            text: 'Daytime',
            value: 'daytime'
          }
        ],
        priceGuide: [],
        account: {
          clients: [
            {
              agency: 'Zone Group Advertising',
              advertiser: 'Papa John\'s Pizza',
              premium: true
            },
            {
              agency: 'Auto Advertising Partners',
              advertiser: 'Southeast Ford',
              premium: true
            },
            {
              agency: 'Vanthrop and Associates',
              advertiser: 'Community Loans, Inc.',
              premium: true
            },
            {
              agency: 'The Media Masters Group',
              advertiser: 'Metro Wireless',
              premium: true
            },
            {
              agency: 'Huges-Martin Agency',
              advertiser: 'Piedmont Healthcare',
              premium: true
            },
            {
              agency: 'Mullberry Way Group',
              advertiser: 'Sun Valley Bank',
              premium: true
            }
          ]
        }
      }
    },

    computed: {
      expandedDayparts () {
        return this.sharedState.priceGuide.filter(function (daypart) {
          return daypart.expanded
        })
      },

      allDaypartsExpanded () {
        return this.sharedState.priceGuide.length === this.expandedDayparts.length
      }
    },

    methods: {
      fetchPriceGuide (daypart) {
        this.$http.get(store.apiHost + '/priceGuide?daypart=' + daypart)
          .then((response) => {
            this.sharedState.priceGuide = response.data
          }, (response) => {
            // error callback
          })
      },

      selectContents (event) {
        event.target.select()
        // this.select()
      },

      onKeypress (event) {
        if ((event.which !== 46 || $(this).val().indexOf('.') !== -1) && (event.which < 48 || event.which > 57)) {
          event.preventDefault()
        }
      },

      slugify (str) {
        return str.toString().toLowerCase().trim()
          .replace(/\s+/g, '-')           // Replace spaces with -
          .replace(/&/g, '-and-')         // Replace & with 'and'
          .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
          .replace(/\-\-+/g, '-')        // Replace multiple - with single -
      },

      updateMarketCpp (event) {
        console.log('Updated')
      },

      setGlobalPremiumPercent (percent) {
        this.globalPercent = percent
      },

      selectDaypart (daypart) {
        this.fetchPriceGuide(daypart)
        this.selected = daypart

        Router.go({
          name: this.routeName,
          query: {
            daypart: this.slugify(daypart)
          }
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

      displayEditRatingsModal (context) {
        this.showEditRatingsModal = true
        this.context = context
      },

      highlightModifiedRow () {
        alert('highlight')
      },

      calculateCpp (rate, rating, markup = 0.0) {
        return (rate / rating) * (1 + markup)
      },

      calculateCpm (rate, impressions) {
        return rate / impressions
      },

      calculateRate (rate, markup = 0.0) {
        return rate * (1 + markup)
      },

      displayPremiumRate (rate, premiumPercent = 0) {
        return Math.round(rate * (1 + premiumPercent))
      },

      addPremium (rate, premium) {
        return rate * (1 + premium)
      },

      setPremiumPercent (newNum, origNum) {
        return Math.ceil((newNum - origNum) / origNum * 100)
      },

      setPremiumRate (number, percent) {
        let value = number * (1 + (percent / 100))
        return value.toFixed(0)
      },

      updateDayparts () {
        var vm = this
        this.editingPercent = false
      },

      averageMonthlyStationRate (months) {
        return months.reduce((total, month) => {
          return total + month.station.rate
        }, 0) / months.length
      },

      averageMonthlyStationRating (months) {
        return months.reduce((total, month) => {
          return total + month.station.rating
        }, 0) / months.length
      },

      averageMonthlyStationImpressions (months) {
        return months.reduce((total, month) => {
          return total + month.station.impressions
        }, 0) / months.length
      },

      averageMonthlyStationCpm (months) {
        return months.reduce((total, month) => {
          console.log(month.station.cpm)
          return total + (month.station.rate / month.station.impressions)
        }, 0) / months.length
      },

      averageMonthlyStationPremiumPercent (months) {
        return months.reduce((total, month) => {
          return total + month.station.premium.percent
        }, 0) / months.length
      },

      averageMonthlyStationPremiumRate (months) {
        return months.reduce((total, month) => {
          return total + month.station.premium.rate
        }, 0) / months.length
      },

      averageMonthlyStationPremiumCpp (months) {
        return months.reduce((total, month) => {
          return total + (month.station.premium.rate / month.station.premium.rating)
        }, 0) / months.length
      },

      averageMonthlyStationPremiumCpm (months) {
        return months.reduce((total, month) => {
          return total + (month.station.premium.rate / month.station.impressions)
        }, 0) / months.length
      },

      averageMonthlyVideaRate (months) {
        return months.reduce((total, month) => {
          return total + month.videa.rate
        }, 0) / months.length
      },

      averageMonthlyVideaRating (months) {
        return months.reduce((total, month) => {
          return total + month.videa.rating
        }, 0) / months.length
      },

      averageMonthlyVideaCpp (months) {
        return months.reduce((total, month) => {
          return total + (month.videa.rate / month.videa.rating)
        }, 0) / months.length
      },

      averageMonthlyVideaImpressions (months) {
        return months.reduce((total, month) => {
          return total + month.videa.impressions
        }, 0) / months.length
      },

      averageMonthlyVideaCpm (months) {
        return months.reduce((total, month) => {
          return total + (month.videa.rate / month.videa.impressions)
        }, 0) / months.length
      },

      averageMonthlyOnTheBooksRateMin (months) {
        return months.reduce((total, month) => {
          return total + month.onTheBooks.minRate
        }, 0) / months.length
      },

      averageMonthlyOnTheBooksRateMax (months) {
        return months.reduce((total, month) => {
          return total + month.onTheBooks.maxRate
        }, 0) / months.length
      },

      averageMonthlyOnTheBooksRate (months) {
        return months.reduce((total, month) => {
          return total + month.onTheBooks.aur
        }, 0) / months.length
      },

      averageMonthlyOnTheBooksRateLastYear (months) {
        return months.reduce((total, month) => {
          return total + month.onTheBooks.lyAur
        }, 0) / months.length
      },

      averageMonthlyOnTheBooksSelloutPercent (months) {
        return months.reduce((total, month) => {
          return total + month.onTheBooks.sellOutPercent
        }, 0) / months.length
      },

      getAverage (arr) {
        return arr.reduce((prev, curr) => {
          return prev + curr
        }) / arr.length
      },

      acceptVideaRate (context) {
        context.acceptVideaRate = true
        context.station.rate = context.videa.rate
      }
    },

    events: {
      'shown::dropdown' () {},

      'hidden::dropdown' () {
      },

      'opened::edit-ratings' () {
        console.log('edit-ratings opened')
      },

      'saved::edit-ratings' () {
        console.log('edit-ratings saved')
      },

      'selected::weeks' (week) {
        console.log('weeks selected: ', week.station.rate)
      }
    },

    created () {
      this.fetchPriceGuide(this.daypart)
      this.fetchDayparts()
    },

    ready () {
      // THE SCRIPT THAT CHECKS IF THE KEY PRESSED IS A NUMERIC OR DECIMAL VALUE.
      function isNumber (evt, element) {
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (
          (charCode !== 45 || $(element).val().indexOf('-') !== -1) &&
          (charCode !== 46 || $(element).val().indexOf('.') !== -1) &&
          (charCode < 48 || charCode > 57)) {
          return false
        }
        return true
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .vui-table tr.month > td:first-child
    padding-left 4rem

  .has-changed td.videa.rate,
  .has-changed td.videa.cpp,
  .has-changed td.videa.cpm
    // color hsla(349, 72%, 45%, 1) !important
    // background-color rgba(255, 221, 225, 0.5)
    // text-decoration line-through

  .has-changed td.station.rate,
  .has-changed td.station.cpp,
  .has-changed td.station.cpm,
  .has-changed td.station.premium.percent,
  .has-changed td.station.premium.percent input,
  // .has-changed td.station.premium.rate,
  .has-changed td.station.premium.cpp,
  .has-changed td.station.premium.cpm,
  // .has-changed td.station.premium.rate input
    // color rgba(4, 132, 75, 1) !important
    // background rgba(217, 255, 223, 0.5)

  .vui-table tr.week > td:first-child
    padding-left 2.5rem

  td.rate
    // background: red

  // tbody td:first-child
  //   position relative
  //   z-index 1

  // .vui-dropdown
  //   z-index 4000

  .input-group
    display table
    vertical-align middle

    .input-group-addon
      width auto

  // .percent
  //   .vui-input-icon
  //     display inline-block
  //     position relative
  //   .vui-input-icon:before
  //     position absolute
  //     content '%'
  //     right 0
  //     top 0
  //     width 38px
  //     height 38px
  //   input
  //     position relative
  //     :before
  //       display block
  //       float right
  //       padding-right 1rem
  //       content "%"
</style>

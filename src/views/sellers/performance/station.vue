<template lang="pug">
  .station-performance-view
    h1.vui-text-heading--large Station Performance
    h2.vui-text-heading--label.vui-m-bottom--medium As of April 18, 2016
    panel.vui-m-bottom--large(title='View Selection')
      form.vui-form--inline(action='')
        label.vui-radio(for='cpp')
          input#cpp(type='radio', name='cpp', v-model='cppOrCpm', value='cpp')
          span.vui-radio--faux.vui-m-right--x-small
          span.vui-form-element__label CPP
        label.vui-radio.vui-m-right--large(for='cpm')
          input#cpm(type='radio', name='cpm', v-model='cppOrCpm', value='cpm')
          span.vui-radio--faux.vui-m-right--x-small
          span.vui-form-element__label CPM
        label.vui-checkbox(for='national')
          input#national(name='checkbox', type='checkbox', v-model='regions[1].show')
          span.vui-checkbox--faux.vui-m-right--x-small
          span.vui-form-element__label National
        label.vui-checkbox(for='local')
          input#local(name='checkbox', type='checkbox', v-model='regions[2].show')
          span.vui-checkbox--faux.vui-m-right--x-small
          span.vui-form-element__label Local
        label.vui-checkbox.vui-m-right--large(for='political')
          input#political(name='checkbox', type='checkbox', v-model='regions[3].show')
          span.vui-checkbox--faux.vui-m-right--x-small
          span.vui-form-element__label Political
        .vui-form-element__control
          .vui-select_container
            select.vui-select(name='', id='')
              option(value='') Q1
              option(value='') Q2
              option(value='') Q3
              option(value='') Q4
              option(value='') 2014
              option(value='') 2015
              option(value='', selected='') 2016
    //- .chart.vui-m-bottom--large
    //-   #lines(style='min-width: 310px; height: 400px; margin: 0 auto')
    data-grid-heading.vui-m-bottom--medium
    .vui-scrollable--x.vui-m-bottom--xx-large
      table.vui-table.vui-no-row-hover
        thead
          tr
            th(rowspan='2') Sales Region
            th(colspan='2') Revenue
            th(colspan='2') Spot Volume
            th(colspan='2') AUR
          tr
            th(style='padding-left: 0.5rem') This Year
            th Last Year
            th This Year
            th Last Year
            th This Year
            th Last Year
        tbody
          tr.region(v-show='region.show', v-for='(region, index) in regions')
            td {{ region.name }}
            td.u-width-large.vui-text-align--right {{ region.tyRevenue | numberWithCommas | formatMoney }}
            td.u-width-large.vui-text-align--right {{ region.lyRevenue | numberWithCommas | formatMoney }}
            td.u-width-large.vui-text-align--right {{ region.tySpotVolume | numberWithCommas }}
            td.u-width-large.vui-text-align--right {{ region.lySpotVolume | numberWithCommas }}
            td.u-width-large.vui-text-align--right {{ region.tyAur | numberWithCommas | formatMoney }}
            td.u-width-large.vui-text-align--right {{ region.lyAur | numberWithCommas | formatMoney }}
          tr(v-show='shownRegions.length > 1')
            td Total
            td.vui-text-align--right {{ sum('tyRevenue') | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ sum('lyRevenue') | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ sum('tySpotVolume') | numberWithCommas }}
            td.vui-text-align--right {{ sum('lySpotVolume') | numberWithCommas }}
            td.vui-text-align--right {{ avg('tyAur') | numberWithCommas | formatMoney}}
            td.vui-text-align--right {{ avg('lyAur') | numberWithCommas | formatMoney}}

    // Daypart Analysis
    .vui-grid.vui-grid--align-spread.vui-m-bottom--x-small
      h1.vui-align-middle.vui-text-heading--large Daypart Analysis
      data-grid-heading.vui-align-bottom
    .vui-scrollable--x.vui-m-bottom--large
      table.vui-table.vui-no-row-hover.vui-table--nested-rows
        thead
          tr
            th(rowspan='2', style='width: 100%') Daypart
            th(colspan='4')
              .vui-grid.vui-grid--align-spread
                span Videa
                span 10%
            th(colspan='4', v-show='regions[1].show')
              .vui-grid.vui-grid--align-spread
                span National
                span 31%
            th(colspan='4', v-show='regions[2].show')
              .vui-grid.vui-grid--align-spread
                span Local
                span 58%
            th(colspan='4', v-show='regions[3].show')
              .vui-grid.vui-grid--align-spread
                span Political
                span 1%
            th(colspan='4')
              .vui-grid.vui-grid--align-spread
                span Total
                span 100%
            th(colspan='2') Station Universe
          tr
            th.u-width-xx-large(style='padding-left: 0.5rem') Revenue
            th.vui-text-align--right.u-width-xxx-large(v-show='cppOrCpm == "cpp"') CPP <sup>1</sup>
            th.vui-text-align--right.u-width-xxx-large(v-show='cppOrCpm == "cpm"') CPM <sup>1</sup>
            th.vui-text-align--right.u-width-xx-large AUR
            th.vui-text-align--right.u-width-xx-large Volume

            th.u-width-xx-large(v-show='regions[1].show') Revenue
            th.vui-text-align--right.u-width-xx-large(v-show='cppOrCpm == "cpp" && regions[1].show') CPP <sup>1</sup>
            th.vui-text-align--right.u-width-xx-large(v-show='cppOrCpm == "cpm" && regions[1].show') CPM <sup>1</sup>
            th.vui-text-align--right.u-width-xx-large(v-show='regions[1].show') AUR
            th.vui-text-align--right.u-width-xx-large(v-show='regions[1].show') Volume

            th.u-width-xx-large(v-show='regions[2].show') Revenue
            th.vui-text-align--right.u-width-xx-large(v-show='cppOrCpm == "cpp" && regions[2].show') CPP <sup>1</sup>
            th.vui-text-align--right.u-width-xx-large(v-show='cppOrCpm == "cpm" && regions[2].show') CPM <sup>1</sup>
            th.vui-text-align--right.u-width-xx-large(v-show='regions[2].show') AUR
            th.vui-text-align--right.u-width-xx-large(v-show='regions[2].show') Volume

            th.u-width-xx-large(v-show='regions[3].show') Revenue
            th.vui-text-align--right.u-width-xx-large(v-show='cppOrCpm == "cpp" && regions[3].show') CPP <sup>1</sup>
            th.vui-text-align--right.u-width-xx-large(v-show='cppOrCpm == "cpm" && regions[3].show') CPM <sup>1</sup>
            th.vui-text-align--right.u-width-xx-large(v-show='regions[3].show') AUR
            th.vui-text-align--right.u-width-xx-large(v-show='regions[3].show') Volume

            th.u-width-xx-large Revenue
            th.vui-text-align--right.u-width-xx-large(v-show='cppOrCpm == "cpp"') CPP <sup>1</sup>
            th.vui-text-align--right.u-width-xx-large(v-show='cppOrCpm == "cpm"') CPM <sup>1</sup>
            th.vui-text-align--right.u-width-xx-large AUR
            th.vui-text-align--right.u-width-xx-large Volume

            th.u-width-xx-large Spot Volume
            th.vui-text-align--right.u-width-xx-large % Sellout
        tfoot
          tr
            td.vui-text-align--right Total
            td.vui-text-align--right {{ totalVideaRevenue | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpp"') {{ averageVideaCpp | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpm"') {{ averageVideaCpm | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ averageVideaAur | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ totalVideaVolume | numberWithCommas }}

            td.vui-text-align--right(v-show='regions[1].show')  {{ totalNationalRevenue | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpp" && regions[1].show') {{ averageNationalCpp | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpm" && regions[1].show') {{ averageNationalCpm | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='regions[1].show')  {{ averageNationalAur | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='regions[1].show')  {{ totalNationalVolume | numberWithCommas }}

            td.vui-text-align--right(v-show='regions[2].show')  {{ totalLocalRevenue | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpp" && regions[2].show') {{ averageLocalCpp | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpm" && regions[2].show') {{ averageLocalCpm | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='regions[2].show')  {{ averageLocalAur | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='regions[2].show')  {{ totalLocalVolume | numberWithCommas }}

            td.vui-text-align--right(v-show='regions[3].show')  {{ totalPoliticalRevenue | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpp" && regions[3].show') {{ averagePoliticalCpp | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpm" && regions[3].show') {{ averagePoliticalCpm | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='regions[3].show')  {{ averagePoliticalAur | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='regions[3].show')  {{ totalPoliticalVolume | numberWithCommas }}

            td.vui-text-align--right {{ totalTotalRevenue | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpp"') {{ totalTotalCpp | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpm"') {{ totalTotalCpm | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ totalTotalAur | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ totalTotalVolume | numberWithCommas }}

            td.vui-text-align--right {{ totalStationUniverseSpotVolume | numberWithCommas}}
            td.vui-text-align--right 38%
        tbody(v-for='(daypart, index) in stationDayparts', :class='(index % 2 === 1) ? "vui-highlight" : ""')
          tr.daypart
            td
              .vui-grid
                a.vui-align-middle(v-if='daypart.details', href='#', @click.prevent='daypart.expanded = !daypart.expanded')
                  icon.vui-align-middle(:name="(daypart.expanded) ? 'caret-lower-right' : 'caret-right'")
                span.vui-align-middle(:class='[!daypart.details ? "vui-m-left--medium" : ""]') {{daypart.name}}

            td.vui-text-align--right {{daypart.videaTraditional.revenue | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpp"') {{daypart.videaTraditional.cpp | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpm"') {{daypart.videaTraditional.cpm | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{daypart.videaTraditional.aur | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{daypart.videaTraditional.volume | numberWithCommas }}

            td.vui-text-align--right(v-show='regions[1].show') {{daypart.national.revenue | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpp" && regions[1].show') {{daypart.national.cpp | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpm" && regions[1].show') {{daypart.national.cpm | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='regions[1].show') {{daypart.national.aur | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='regions[1].show') {{daypart.national.volume | numberWithCommas }}

            td.vui-text-align--right(v-show='regions[2].show') {{daypart.local.revenue | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpp" && regions[2].show') {{daypart.local.cpp | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpm" && regions[2].show') {{daypart.local.cpm | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='regions[2].show') {{daypart.local.aur | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='regions[2].show') {{daypart.local.volume | numberWithCommas }}

            td.vui-text-align--right(v-show='regions[3].show') {{daypart.political.revenue | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpp" && regions[3].show') {{daypart.political.cpp | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpm" && regions[3].show') {{daypart.political.cpm | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='regions[3].show') {{daypart.political.aur | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='regions[3].show') {{daypart.political.volume | numberWithCommas }}

            td.vui-text-align--right {{( daypart.local.revenue + daypart.political.revenue + daypart.national.revenue + daypart.videaTraditional.revenue) | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpp"')
              | {{ Math.round((daypart.local.cpp + daypart.political.cpp + daypart.national.cpp + daypart.videaTraditional.cpp)  / 4) | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpm"')
              | {{ Math.round((daypart.local.cpm + daypart.political.cpm + daypart.national.cpm + daypart.videaTraditional.cpm) / 4) | numberWithCommas | formatMoney }}
            td.vui-text-align--right
              | {{ Math.round((daypart.local.aur + daypart.political.aur + daypart.national.aur + daypart.videaTraditional.aur) / 4) | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{( daypart.local.volume + daypart.political.volume + daypart.national.volume + daypart.videaTraditional.volume)  | numberWithCommas }}

            td.vui-text-align--right {{daypart.stationUniverse.spotVolume | numberWithCommas }}
            td.vui-text-align--right {{daypart.stationUniverse.percentSellout | decimalToPercent}}
          template(v-if='daypart.details', v-for='detail in daypart.details')
            tr.detail(v-show='daypart.expanded')
              td {{detail.name}}
              td.vui-text-align--right {{detail.videaTraditional.revenue | numberWithCommas | formatMoney }}
              td.vui-text-align--right(v-show='cppOrCpm == "cpp"') {{detail.videaTraditional.cpp | numberWithCommas | formatMoney }}
              td.vui-text-align--right(v-show='cppOrCpm == "cpm"') {{detail.videaTraditional.cpm | numberWithCommas | formatMoney }}
              td.vui-text-align--right {{detail.videaTraditional.aur | numberWithCommas | formatMoney }}
              td.vui-text-align--right {{detail.videaTraditional.volume | numberWithCommas }}

              td.vui-text-align--right(v-show='regions[1].show') {{detail.national.revenue | numberWithCommas | formatMoney }}
              td.vui-text-align--right(v-show='cppOrCpm == "cpp" && regions[1].show') {{detail.national.cpp | numberWithCommas | formatMoney }}
              td.vui-text-align--right(v-show='cppOrCpm == "cpm" && regions[1].show') {{detail.national.cpm | numberWithCommas | formatMoney }}
              td.vui-text-align--right(v-show='regions[1].show') {{detail.national.aur | numberWithCommas | formatMoney }}
              td.vui-text-align--right(v-show='regions[1].show') {{detail.national.volume | numberWithCommas }}

              td.vui-text-align--right(v-show='regions[2].show') {{detail.local.revenue | numberWithCommas | formatMoney }}
              td.vui-text-align--right(v-show='cppOrCpm == "cpp" && regions[2].show') {{detail.local.cpp | numberWithCommas | formatMoney }}
              td.vui-text-align--right(v-show='cppOrCpm == "cpm" && regions[2].show') {{detail.local.cpm | numberWithCommas | formatMoney }}
              td.vui-text-align--right(v-show='regions[2].show') {{detail.local.aur | numberWithCommas | formatMoney }}
              td.vui-text-align--right(v-show='regions[2].show') {{detail.local.volume | numberWithCommas }}

              td.vui-text-align--right(v-show='regions[3].show') {{detail.political.revenue | numberWithCommas | formatMoney }}
              td.vui-text-align--right(v-show='cppOrCpm == "cpp" && regions[3].show') {{detail.political.cpp | numberWithCommas | formatMoney }}
              td.vui-text-align--right(v-show='cppOrCpm == "cpm" && regions[3].show') {{detail.political.cpm | numberWithCommas | formatMoney }}
              td.vui-text-align--right(v-show='regions[3].show') {{detail.political.aur | numberWithCommas | formatMoney }}
              td.vui-text-align--right(v-show='regions[3].show') {{detail.political.volume | numberWithCommas }}

              td.vui-text-align--right
                | {{( detail.local.revenue + detail.political.revenue + detail.national.revenue + detail.videaTraditional.revenue)| numberWithCommas | formatMoney }}
              td.vui-text-align--right(v-show='cppOrCpm == "cpp"')
                | {{ (detail.local.cpp + detail.political.cpp + detail.national.cpp + detail.videaTraditional.cpp) / 4  | numberWithCommas | formatMoney }}
              td.vui-text-align--right(v-show='cppOrCpm == "cpm"')
                | {{( detail.local.cpm + detail.political.cpm + detail.national.cpm + detail.videaTraditional.cpm) / 4 | numberWithCommas | formatMoney }}
              td.vui-text-align--right
                | {{( detail.local.aur + detail.political.aur + detail.national.aur + detail.videaTraditional.aur) / 4 | numberWithCommas | formatMoney }}
              td.vui-text-align--right {{( detail.local.volume + detail.political.volume + detail.national.volume + detail.videaTraditional.volume)  | numberWithCommas }}

              td.vui-text-align--right {{detail.stationUniverse.spotVolume | numberWithCommas }}
              td.vui-text-align--right {{detail.stationUniverse.percentSellout | decimalToPercent}}
    p.vui-text-body--small
      sup.vui-m-right--xx-small 1
      span Nielsen source or data derived from Nielsen
</template>

<script>
  import store from 'store'

  let Highcharts = require('highcharts')
  var faker = require('faker')
  var _ = require('lodash')

  require('highcharts/modules/exporting')(Highcharts)

  export default {
    data () {
      return {
        sharedState: store.state,
        cppOrCpm: 'cpp',
        showLocal: true,
        showNational: true,
        showPolitical: true,
        performanceScope: [
          'videa',
          'local',
          'national',
          'political'
        ],
        regions: [],
        stationDayparts: [],
        newValues: []
      }
    },

    computed: {
      shownRegions () {
        return this.regions.filter(region => region.show)
      },

      totalVideaRevenue () {
        return this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.videaTraditional.revenue
        }, 0)
      },

      averageVideaCpp () {
        let average = this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.videaTraditional.cpp
        }, 0) / this.stationDayparts.length

        return Math.round(average)
      },

      averageVideaCpm () {
        let average = this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.videaTraditional.cpm
        }, 0) / this.stationDayparts.length

        return Math.round(average)
      },

      averageVideaAur () {
        let average = this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.videaTraditional.aur
        }, 0) / this.stationDayparts.length

        return Math.round(average)
      },

      totalVideaVolume () {
        return this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.videaTraditional.volume
        }, 0)
      },

      totalLocalRevenue () {
        return this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.local.revenue
        }, 0)
      },

      averageLocalCpp () {
        let average = this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.local.cpp
        }, 0) / this.stationDayparts.length

        return Math.round(average)
      },

      averageLocalCpm () {
        let average = this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.local.cpm
        }, 0) / this.stationDayparts.length

        return Math.round(average)
      },

      averageLocalAur () {
        let average = this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.local.aur
        }, 0) / this.stationDayparts.length

        return Math.round(average)
      },

      totalLocalVolume () {
        return this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.local.volume
        }, 0)
      },

      totalNationalRevenue () {
        return this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.national.revenue
        }, 0)
      },

      averageNationalCpp () {
        let average = this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.national.cpp
        }, 0) / this.stationDayparts.length

        return Math.round(average)
      },

      averageNationalCpm () {
        let average = this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.national.cpm
        }, 0) / this.stationDayparts.length

        return Math.round(average)
      },

      averageNationalAur () {
        let average = this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.national.aur
        }, 0) / this.stationDayparts.length

        return Math.round(average)
      },

      totalNationalVolume () {
        return this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.national.volume
        }, 0)
      },

      totalPoliticalRevenue () {
        return this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.political.revenue
        }, 0)
      },

      averagePoliticalCpp () {
        let average = this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.political.cpp
        }, 0) / this.stationDayparts.length

        return Math.round(average)
      },

      averagePoliticalCpm () {
        let average = this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.political.cpm
        }, 0) / this.stationDayparts.length

        return Math.round(average)
      },

      averagePoliticalAur () {
        let average = this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.political.aur
        }, 0) / this.stationDayparts.length

        return Math.round(average)
      },

      totalPoliticalVolume () {
        return this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.political.volume
        }, 0)
      },

      totalTotalRevenue () {
        return this.stationDayparts.reduce((total, daypart) => {
          return total + (daypart.local.revenue + daypart.political.revenue + daypart.national.revenue + daypart.videaTraditional.revenue)
        }, 0)
      },

      totalTotalCpp () {
        return this.stationDayparts.reduce((total, daypart) => {
          // return total + daypart.political.cpp
          return total + (daypart.local.cpp + daypart.political.cpp + daypart.national.cpp + daypart.videaTraditional.cpp)
        }, 0)
      },

      totalTotalCpm () {
        return this.stationDayparts.reduce((total, daypart) => {
          // return total + daypart.political.cpp
          return total + (daypart.local.cpm + daypart.political.cpm + daypart.national.cpm + daypart.videaTraditional.cpm)
        }, 0)
      },

      totalTotalAur () {
        return this.stationDayparts.reduce((total, daypart) => {
          // return total + daypart.political.aur
          return total + (daypart.local.aur + daypart.political.aur + daypart.national.aur + daypart.videaTraditional.aur)
        }, 0)
      },

      totalTotalVolume () {
        return this.stationDayparts.reduce((total, daypart) => {
          // return total + daypart.political.volume
          return total + (daypart.local.volume + daypart.political.volume + daypart.national.volume + daypart.videaTraditional.volume)
        }, 0)
      },

      totalStationUniverseSpotVolume () {
        return this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.stationUniverse.spotVolume
        }, 0)
      }
    },

    methods: {
      fetchRegions () {
        this.$http.get(store.apiHost + '/station')
          .then((response) => {
            this.regions = response.data
          }, (response) => {
            // error callback
          })
      },
      fetchStationDayparts () {
        this.$http.get(store.apiHost + '/stationDayparts')
          .then((response) => {
            this.stationDayparts = response.data
          }, (response) => {
            // error callback
          })
      },

      // setShownRegions (regions) {
      //   this.shownRegions = regions.filter(region => region.show)
      // },

      sum (measure) {
        return this.shownRegions.reduce((prev, current) => {
          return prev + current[measure]
        }, 0)
      },

      avg (measure) {
        let average = this.shownRegions.reduce((prev, current) => {
          return prev + current[measure]
        }, 0) / this.shownRegions.length

        return average.toFixed(0)
      }
    },

    created () {
      this.fetchRegions()
      this.fetchStationDayparts()
      this.sharedState.activeApp = 'sellers'
    }
  }
</script>

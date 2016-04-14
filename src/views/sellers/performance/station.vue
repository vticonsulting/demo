<template lang="jade">
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
        label.vui-checkbox(for='local')
          input#local(name='checkbox', type='checkbox', v-model='performanceScope', value='local')
          span.vui-checkbox--faux.vui-m-right--x-small
          span.vui-form-element__label Local
        label.vui-checkbox(for='national')
          input#national(name='checkbox', type='checkbox', v-model='performanceScope', value='national')
          span.vui-checkbox--faux.vui-m-right--x-small
          span.vui-form-element__label National
        label.vui-checkbox.vui-m-right--large(for='political')
          input#political(name='checkbox', type='checkbox', v-model='performanceScope', value='political')
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
    .vui-scrollable--x.vui-m-bottom--medium
      table.vui-table.vui-no-row-hover.vui-table--custom-1
        thead
          tr
            th(rowspan='2') Sales Region
            th(colspan='2') Revenue
            th(colspan='2') Spot Volume
            th(colspan='2') AUR
          tr
            th This Year
            th Last Year
            th This Year
            th Last Year
            th This Year
            th Last Year
        tbody
          tr.region(v-for='($index, region) in regions', :class='($index % 2 === 1) ? "vui-highlight" : ""')
            td {{region.name}}
            td.u-width-large.vui-text-align--right {{region.tyRevenue | numberWithCommas | formatMoney }}
            td.u-width-large.vui-text-align--right {{region.lyRevenue | numberWithCommas | formatMoney }}
            td.u-width-large.vui-text-align--right {{region.tySpotVolume | numberWithCommas}}
            td.u-width-large.vui-text-align--right {{region.lySpotVolume | numberWithCommas}}
            td.u-width-large.vui-text-align--right {{region.tyAur | numberWithCommas | formatMoney }}
            td.u-width-large.vui-text-align--right {{region.lyAur | numberWithCommas | formatMoney }}

    // Daypart Analysis
    h1.vui-text-heading--large.vui-m-bottom--large Daypart Analysis
    data-grid-heading.vui-m-bottom--medium
    .vui-scrollable--x.vui-m-bottom--medium
      table.vui-table.vui-no-row-hover.vui-table--nested-rows.vui-table--custom-1
        thead
          tr
            th(rowspan='2') Daypart
            th(colspan='4')
              .vui-grid.vui-grid--align-spread
                span Videa
                span 10%
            th(colspan='4')
              .vui-grid.vui-grid--align-spread
                span National
                span 31%
            th(colspan='4')
              .vui-grid.vui-grid--align-spread
                span Local
                span 58%
            th(colspan='4')
              .vui-grid.vui-grid--align-spread
                span Political
                span 1%
            th(colspan='4')
              .vui-grid.vui-grid--align-spread
                span Total
                span 100%
            th(colspan='2') Station Universe
          tr
            th.u-width-xx-large Revenue
            th.u-width-xxx-large(v-show='cppOrCpm == "cpp"')
              | CPP
              sup 1
            th.u-width-xxx-large(v-show='cppOrCpm == "cpm"')
              | CPM
              sup 1
            th.u-width-xx-large AUR
            th.u-width-xx-large Vol
            th.u-width-xx-large Revenue
            th.u-width-xx-large(v-show='cppOrCpm == "cpp"')
              | CPP
              sup 1
            th.u-width-xx-large(v-show='cppOrCpm == "cpm"')
              | CPM
              sup 1
            th.u-width-xx-large AUR
            th.u-width-xx-large Vol
            th.u-width-xx-large Revenue
            th.u-width-xx-large(v-show='cppOrCpm == "cpp"')
              | CPP
              sup 1
            th.u-width-xx-large(v-show='cppOrCpm == "cpm"')
              | CPM
              sup 1
            th.u-width-xx-large AUR
            th.u-width-xx-large Vol
            th.u-width-xx-large Revenue
            th.u-width-xx-large(v-show='cppOrCpm == "cpp"')
              | CPP
              sup 1
            th.u-width-xx-large(v-show='cppOrCpm == "cpm"')
              | CPM
              sup 1
            th.u-width-xx-large AUR
            th.u-width-xx-large Vol
            th.u-width-xx-large Revenue
            th.u-width-xx-large(v-show='cppOrCpm == "cpp"')
              | CPP
              sup 1
            th.u-width-xx-large(v-show='cppOrCpm == "cpm"')
              | CPM
              sup 1
            th.u-width-xx-large AUR
            th.u-width-xx-large Vol
            th.u-width-xx-large Spot Volume
            th.u-width-xx-large % Sellout
        tfoot
          tr
            td.vui-text-align--right Total
            td.vui-text-align--right {{ totalVideaRevenue | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpp"') {{ totalVideaCpp | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpm"') {{ totalVideaCpm | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ totalVideaAur | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ totalVideaVolume | numberWithCommas }}
            td.vui-text-align--right {{ totalNationalRevenue | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpp"') {{ totalNationalCpp | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpm"') {{ totalNationalCpm | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ totalNationalAur | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ totalNationalVolume | numberWithCommas }}
            td.vui-text-align--right {{ totalLocalRevenue | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpp"') {{ totalLocalCpp | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpm"') {{ totalLocalCpm | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ totalLocalAur | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ totalLocalVolume | numberWithCommas }}
            td.vui-text-align--right {{ totalPoliticalRevenue | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpp"') {{ totalPoliticalCpp | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpm"') {{ totalPoliticalCpm | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ totalPoliticalAur | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ totalPoliticalVolume | numberWithCommas }}

            td.vui-text-align--right {{ totalTotalRevenue | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpp"') {{ totalTotalCpp | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpm"') {{ totalTotalCpm | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ totalTotalAur | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ totalTotalVolume | numberWithCommas }}
            td.vui-text-align--right {{ totalStationUniverseSpotVolume | numberWithCommas}}
            td.vui-text-align--right 38%
        tbody(v-for='($index, daypart) in stationDayparts', :class='($index % 2 === 1) ? "vui-highlight" : ""')
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
            td.vui-text-align--right {{daypart.national.revenue | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpp"') {{daypart.national.cpp | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpm"') {{daypart.national.cpm | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{daypart.national.aur | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{daypart.national.volume | numberWithCommas }}
            td.vui-text-align--right {{daypart.local.revenue | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpp"') {{daypart.local.cpp | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpm"') {{daypart.local.cpm | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{daypart.local.aur | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{daypart.local.volume | numberWithCommas }}
            td.vui-text-align--right {{daypart.political.revenue | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpp"') {{daypart.political.cpp | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpm"') {{daypart.political.cpm | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{daypart.political.aur | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{daypart.political.volume | numberWithCommas }}
            td.vui-text-align--right {{( daypart.local.revenue + daypart.political.revenue + daypart.national.revenue + daypart.videaTraditional.revenue) | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpp"') {{( daypart.local.cpp + daypart.political.cpp + daypart.national.cpp + daypart.videaTraditional.cpp)  | numberWithCommas | formatMoney }}
            td.vui-text-align--right(v-show='cppOrCpm == "cpm"') {{( daypart.local.cpm + daypart.political.cpm + daypart.national.cpm + daypart.videaTraditional.cpm)  | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{( daypart.local.aur + daypart.political.aur + daypart.national.aur + daypart.videaTraditional.aur)  | numberWithCommas | formatMoney }}
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
              td.vui-text-align--right {{detail.national.revenue | numberWithCommas | formatMoney }}
              td.vui-text-align--right(v-show='cppOrCpm == "cpp"') {{detail.national.cpp | numberWithCommas | formatMoney }}
              td.vui-text-align--right(v-show='cppOrCpm == "cpm"') {{detail.national.cpm | numberWithCommas | formatMoney }}
              td.vui-text-align--right {{detail.national.aur | numberWithCommas | formatMoney }}
              td.vui-text-align--right {{detail.national.volume | numberWithCommas }}
              td.vui-text-align--right {{detail.local.revenue | numberWithCommas | formatMoney }}
              td.vui-text-align--right(v-show='cppOrCpm == "cpp"') {{detail.local.cpp | numberWithCommas | formatMoney }}
              td.vui-text-align--right(v-show='cppOrCpm == "cpm"') {{detail.local.cpm | numberWithCommas | formatMoney }}
              td.vui-text-align--right {{detail.local.aur | numberWithCommas | formatMoney }}
              td.vui-text-align--right {{detail.local.volume | numberWithCommas }}
              td.vui-text-align--right {{detail.political.revenue | numberWithCommas | formatMoney }}
              td.vui-text-align--right(v-show='cppOrCpm == "cpp"') {{detail.political.cpp | numberWithCommas | formatMoney }}
              td.vui-text-align--right(v-show='cppOrCpm == "cpm"') {{detail.political.cpm | numberWithCommas | formatMoney }}
              td.vui-text-align--right {{detail.political.aur | numberWithCommas | formatMoney }}
              td.vui-text-align--right {{detail.political.volume | numberWithCommas }}
              td.vui-text-align--right {{( detail.local.revenue + detail.political.revenue + detail.national.revenue + detail.videaTraditional.revenue) | numberWithCommas | formatMoney }}
              td.vui-text-align--right(v-show='cppOrCpm == "cpp"') {{( detail.local.cpp + detail.political.cpp + detail.national.cpp + detail.videaTraditional.cpp)  | numberWithCommas | formatMoney }}
              td.vui-text-align--right(v-show='cppOrCpm == "cpm"') {{( detail.local.cpm + detail.political.cpm + detail.national.cpm + detail.videaTraditional.cpm)  | numberWithCommas | formatMoney }}
              td.vui-text-align--right {{( detail.local.aur + detail.political.aur + detail.national.aur + detail.videaTraditional.aur)  | numberWithCommas | formatMoney }}
              td.vui-text-align--right {{( detail.local.volume + detail.political.volume + detail.national.volume + detail.videaTraditional.volume)  | numberWithCommas }}
              td.vui-text-align--right {{detail.stationUniverse.spotVolume | numberWithCommas }}
              td.vui-text-align--right {{detail.stationUniverse.percentSellout | decimalToPercent}}
    p.vui-text-body--small
      sup.vui-m-right--xx-small 1
      span Nielsen source or data derived from Nielsen
</template>

<script>
  import store from '../../../store'
  import Alert from '../../../components/Alert.vue'
  import PageHeading from '../../../components/PageHeading.vue'
  import DataGridHeading from '../../../components/DataGridHeading.vue'
  import Panel from '../../../components/Panel.vue'
  import Icon from '../../../components/Icon.vue'

  let Highcharts = require('highcharts')
  var faker = require('faker')
  var _ = require('lodash')

  require('highcharts/modules/exporting')(Highcharts)

  export default {
    components: {
      Alert,
      PageHeading,
      DataGridHeading,
      Panel,
      Icon
    },

    data () {
      return {
        sharedState: store.state,
        cppOrCpm: 'cpp',
        performanceScope: [
          'local',
          'national',
          'political'
        ],
        regions: [],
        stationDayparts: [],
        stationPerformance: require('./stationPerformanceDefaults.json')
      }
    },

    computed: {
      totalVideaRevenue () {
        return this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.videaTraditional.revenue
        }, 0)
      },

      totalVideaCpp () {
        return this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.videaTraditional.cpp
        }, 0)
      },

      totalVideaCpm () {
        return this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.videaTraditional.cpm
        }, 0)
      },

      totalVideaAur () {
        return this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.videaTraditional.aur
        }, 0)
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

      totalLocalCpp () {
        return this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.local.cpp
        }, 0)
      },

      totalLocalCpm () {
        return this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.local.cpm
        }, 0)
      },

      totalLocalAur () {
        return this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.local.aur
        }, 0)
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

      totalNationalCpp () {
        return this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.national.cpp
        }, 0)
      },

      totalNationalCpm () {
        return this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.national.cpm
        }, 0)
      },

      totalNationalAur () {
        return this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.national.aur
        }, 0)
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

      totalPoliticalCpp () {
        return this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.political.cpp
        }, 0)
      },

      totalPoliticalCpm () {
        return this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.political.cpm
        }, 0)
      },

      totalPoliticalAur () {
        return this.stationDayparts.reduce((total, daypart) => {
          return total + daypart.political.aur
        }, 0)
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

    filters: {
      numberWithCommas (number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }
    },

    methods: {
      fetchStationPerformance () {
        this.$http.get(store.apiHost + '/stationPerformance')
          .then((response) => {
            this.stationPerformance = response.data
          }, (response) => {
            // error callback
          })
      },
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
      }
    },

    created () {
      this.fetchStationPerformance()
      this.fetchRegions()
      this.fetchStationDayparts()
      this.sharedState.activeApp = 'sellers'
    },

    ready () {
      // Highcharts.setOptions({
      //   lang: {
      //     thousandsSep: ','
      //   }
      // })
      // Highcharts.chart('lines', {
      //   title: {
      //       text: '',
      //       x: -20 //center
      //   },
      //   xAxis: {
      //       categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      //           'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      //   },
      //   yAxis: {
      //       title: {
      //           text: 'Revenue'
      //       },
      //       plotLines: [{
      //           value: 0,
      //           width: 1,
      //           color: '#808080'
      //       }]
      //   },
      //   tooltip: {
      //       valueSuffix: '°C'
      //   },
      //   legend: {
      //       layout: 'vertical',
      //       align: 'right',
      //       verticalAlign: 'middle',
      //       borderWidth: 0
      //   },
      //   series: [{
      //       name: 'Videa',
      //       data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
      //   }, {
      //       name: 'Political',
      //       data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
      //   }, {
      //       name: 'National',
      //       data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
      //   }, {
      //       name: 'Local',
      //       data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
      //   }]
      // })
    }
  }
</script>

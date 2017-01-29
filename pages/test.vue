<!-- http://codepen.io/pixelass/post/layout-powered-by-css-variables -->
<template lang="pug">
  .grid
    awesome-icon(
      name=  'camera'
    )
    span {{ startOfWeek }}
    span {{ endOfWeek }}
    span {{ week }}

    //- .echarts(
    //-   style = 'width: 300px'
    //- )
    //-   IEcharts(
    //-     v-bind:option = 'bar'
    //-     v-bind:loading = 'loading'
    //-   )

    //- IEcharts(
    //-   @click = 'onClick'
    //-   @ready = 'onReady'
    //-   v-bind:loading = 'loading'
    //-   v-bind:option = 'bar'
    //- )
    //- button(
    //-   @click = 'doRandom'
    //- ) Random

    //- form
    //-   input(type='text', name='email', v-model='emailValue', v-validate='emailValue', data-vv-rules='required|email')
    //-   p(v-if="errors.has('email')") {{ errors.first('email') }}

    //- my-component
    //- custom-component(
    //-   @input = 'dataProperty = $event.target.value'
    //-   v-bind:value = 'dataProperty'
    //- )

    //- ui-flatpickr
    //- twenty-twenty(
    //-   before = '//placehold.it/600x200/E8117F/FFFFFF'
    //-   after = '//placehold.it/600x200/CCCCCC/FFFFFF'
    //- )
    //- article.tile.is-child.box
    //-   ui-title Cleave.js - Format your &lt;input/> content when you are typing
    //-   .block
    //-     .vui-form-element.vui-m-bottom--medium
    //-       label.vui-form-element__label Credit card number formatting
    //-       .vui-form-element__control
    //-         cleave.vui-input(placeholder='Enter credit card number', :options='{ creditCard: true }')
    //-     .vui-form-element.vui-m-bottom--medium
    //-       label.vui-form-element__label Phone number formatting
    //-       .vui-form-element__control
    //-         cleave.vui-input(type='tel', placeholder='Enter phone number', :options="{ phone: true, phoneRegionCode: 'us' }")
    //-     .vui-form-element.vui-m-bottom--medium
    //-       label.vui-form-element__label Date formatting
    //-       .vui-form-element__control
    //-         cleave.vui-input(placeholder='YYYY/MM/DD', :value="'20160901'", :options="{ date: true, datePattern: ['Y', 'm', 'd'] }")
    //-     .vui-form-element.vui-m-bottom--medium
    //-       .vui-form-element__control
    //-         cleave.vui-input(placeholder='MM/YY', :options="{ date: true, datePattern: ['m', 'y'] }")
    //-     .vui-form-element.vui-m-bottom--medium
    //-       label.vui-form-element__label Numeral formatting
    //-       .vui-form-element__control
    //-         cleave.vui-input(placeholder='Enter numeral', :options="{ numeral: true, numeralThousandsGroupStyle: 'thousand' }")
    //-     .vui-form-element.vui-m-bottom--medium
    //-       label.vui-form-element__label Custom options
    //-       .vui-form-element__control
    //-         cleave.vui-input(placeholder='Blocks: [4, 3, 3, 4]', :options='{ blocks: [4, 3, 3, 4], uppercase: true }')
    //-     .vui-form-element.vui-m-bottom--medium
    //-       .vui-form-element__control
    //-         cleave.vui-input(placeholder="Delimiter: '·'", :options="{ delimiter: '·', blocks: [3, 3, 3, 3], uppercase: true }")
    //-     .vui-form-element.vui-m-bottom--medium
    //-       .vui-form-element__control
    //-         cleave.vui-input(:options="{ prefix: 'PREFIX', delimiter: '-', blocks: [6, 4, 4, 4], uppercase: true }")

    div(
      data-key = '🏈'
      ref = 'foo'
    )

    p The safely stored number: {{ safelyStoredNumber }}

    //- masked-input(
    //-   v-model = 'phone'
    //-   mask = '+\1 (111) 1111-11'
    //-   placeholder = 'Phone'
    //- )



    button(
      @click = 'incrementStoredNumber'
    ) Increment Stored Number

    button(
      @click = 'setStoredNumber'
    ) Set Stored Number

    //- highcharts(
    //-   v-bind:options = 'options'
    //-   ref = 'highcharts'
    //- )

    //- button(
    //-   @click = "updateCredits"
    //- ) update credits


    //- h1 {{ $store.state.stars }}
    //- pre {{ markets }}
    .column(
      style = '--viewport-small: var(--column-count)'
    )  Full width
    .column(
      style = '--viewport-small: 4'
    )  4 columns
    .column(
      style = '--viewport-small: 4; --viewport-large: 8'
    ) 4 or 8 columns
      .row
        .column(
          style = '--viewport-small: 4'
        ) 4 columns
        .column(
          style = '--viewport-small: 4'
        ) 4 columns
        .column(
          style = '--viewport-small: 4'
        ) 4 columns
        .column(
          style = '--viewport-small: 4'
        ) 4 columns
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  // import MaskedInput from 'vue-masked-input'
  import IEcharts from 'vue-echarts-v3'
  // import IEcharts from 'vue-echarts-v3/src/lite.vue'
  import Cleave from '~components/cleave'
  import 'cleave.js/dist/addons/cleave-phone.us'
  // import TwentyTwenty from 'vue-twentytwenty'

  import { EventBus } from '~plugins/global-event-bus'

  // Listen for the i-got-clicked event and its payload.
  EventBus.$on('i-got-clicked', clickCount => {
    console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`)
  })

  const  isToday = require('date-fns/is_today')
  const startOfISOWeek = require('date-fns/start_of_iso_week')
  const endOfISOWeek = require('date-fns/end_of_iso_week')
  const getISOWeek = require('date-fns/get_iso_week')

  // import markets from '~/data/markets.json'
  const marketsPromise = process.BROWSER_BUILD
    ? System.import('~/data/markets.json')
    : Promise.resolve(require('~/data/markets.json'))

  const options = {
    title: {
      text: 'Monthly Average Temperature',
      x: -20
    },
    subtitle: {
      text: 'Source: WorldClimate.com',
      x: -20
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'Temperature (°C)'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      valueSuffix: '°C'
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },
    series: [{
      name: 'Tokyo',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
      name: 'New York',
      data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    }, {
      name: 'Berlin',
      data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
    }, {
      name: 'London',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
  }

  // export default {
  //   data ({ params }) {
  //     return { markets }
  //   }
  // }
  export default {
    components: {
      // TwentyTwenty
      IEcharts,
      Cleave
    },
    // components: {
    //   MaskedInput
    // },
    // fetch ({ store, params }) {
    //   return axios.get('http://my-api/stars')
    //     .then((res) => {
    //       store.commit('setStars', res.data)
    //     })
    // },

    // async data ({ req }) {
    //   let markets = await marketsPromise
    //   return { markets: markets, options: options }
    // },
    data () {
      return {
        options: options,
        count: 2,
        emailValue: '',
        isToday: isToday(new Date()),
        startOfWeek: startOfISOWeek(new Date()),
        endOfWeek: endOfISOWeek(new Date()),
        week: getISOWeek(new Date()),
        loading: false,
        bar: {
          title: {
            text: 'ECharts'
          },
          tooltip: {},
          xAxis: {
            data: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN']
          },
          yAxis: {},
          series: [{
            name: 'Clouds',
            type: 'bar',
            data: [5, 20, 3600, 10, 10, 20]
          }]
        }
      }
    },

    beforeCreate () {
      // $store.state.activeApp = 'login'
    },

    mounted () {
      console.log(this.$refs.foo.dataset.key)
    },

    computed: {
      ...mapGetters([
        // Mounts the "safelyStoredNumber" getter to the scope of your component.
        'safelyStoredNumber'
      ])
    },

    methods: {
      ...mapMutations([
        // Mounts the "incrementStoredNumber" mutation to `this.incrementStoredNumber()`.
        'incrementStoredNumber',
        // Mounts the "setStoredNumber" mutation to `this.setStoredNumber(newNumber)`.
        'setStoredNumber'
      ]),

      ...mapActions([
        // Mounts the "setNumberToRemoteValue" action to `this.setNumberToRemoteValue()`.
        'setNumberToRemoteValue'
      ]),

      incrementStoredNumber () {
        this.$store.commit('incrementStoredNumber')
      },

      setStoredNumber () {
        this.$store.commit('setStoredNumber', this.count)
      },

      doRandom () {
        const that = this
        let data = []
        for (let i = 0, min = 5, max = 99; i < 6; i++) {
          data.push(Math.floor(Math.random() * (max + 1 - min) + min))
        }
        that.loading = !that.loading
        that.bar.series[0].data = data
      },

      onReady (instance) {
        console.log(instance)
      },

      onClick (event, instance, echarts) {
        console.log(arguments)
      },

      updateCredits () {
        var chart = this.$refs.highcharts.chart
        chart.credits.update({
          style: {
            color: '#' + (Math.random() * 0xffffff | 0).toString(16)
          }
        })
      }
    }
  }
</script>

<style lang="stylus">
  @import 'https://cdn.rawgit.com/pixelass/minus-grid/v1.2.0/dist/index.css'

  .grid
    --column-margin 5
    --column-padding 5

  .column
    box-shadow 0 0 0 1px inset
    padding-top 0.5em
    padding-bottom 0.5em
</style>

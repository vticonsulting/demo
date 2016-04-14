<template>
  <div class="ui-chart ct-chart ct-perfect-fourth"></div>
</template>

<script>
  import _ from 'lodash'
  import Chartist from 'chartist'

  export default {
    props: {
      type: {
        type: String,
        default: 'Bar'
      },
      labels: Array,
      series: Array,
      options: Object,
      responsiveOptions: Object
    },

    data () {
      return {
        chart: null
      }
    },

    computed: {
      data () {
        return {
          labels: this.labels,
          series: this.series
        }
      },

      capitalizeType () {
        return _.capitalize(this.type)
      }
    },

    methods: {
    },

    ready () {
      this.$nextTick(function () {
        this.chart = new Chartist[this.capitalizeType](this.$el, this.data, this.options, this.responsiveOptions)
      })
    }
  }
</script>

<style lang="sass">
  // @import '../sass/common';

  $ct-series-colors: (
    colour('x'),
    colour('y'),
    colour('a'),
    colour('b'),
    colour-darken('x', 10),
    colour-darken('y', 10),
    colour-darken('a', 10),
    colour-darken('b', 10),
    colour-darken('x', 15),
    colour-darken('y', 15),
    colour-darken('a', 15),
    colour-darken('b', 15),
    colour('mobilleo'),
    colour('teal'),
    colour('purple'),
  ) !default;

  @import '../../../../node_modules/chartist/dist/scss/chartist.scss';
</style>

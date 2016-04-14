<template>
  <div>
    <ui-chart type="bar" :labels="labels" :series="series" :options="options"></ui-chart>
  </div>
</template>

<script>
  import UiChart from '../components/UiChart.vue'

  export default {
    components: { UiChart },

    data () {
      return {
        options : {
          seriesBarDistance: 10,
          reverseData: true,
          horizontalBars: true,
          axisY: {
            offset: 50
          }
        },
        labels  : ['Fuel', 'Flights', 'Transit', 'Expenses', 'Other'],
        series  : [
          [1500, 4500, 1000, 2000, 1000],
          [1337, 2123, 564, 1800, 3500],
        ]
      }
    }
  }
</script>

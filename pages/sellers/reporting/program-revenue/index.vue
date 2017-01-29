<template lang="pug">
  .program-revenue
    ui-title Program Revenue
    ui-panel
      program-revenue-filter
    program-revenue-metrics
    program-revenue-grid(
      v-bind:programs = 'programs'
    )
    ui-footnote
</template>

<script>
  import axios from '~plugins/axios'

  import ProgramRevenueMetrics from '~/components/program-revenue/program-revenue-metrics'
  import ProgramRevenueFilter from '~/components/program-revenue/program-revenue-filter'
  import ProgramRevenueGrid from '~/components/program-revenue/program-revenue-grid'

  export default {
    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    components: {
      ProgramRevenueMetrics,
      ProgramRevenueFilter,
      ProgramRevenueGrid
    },

    async data ({ env, params }) {
      let { data } = await axios.get('/programs')
      return { programs: data }
    }
  }
</script>

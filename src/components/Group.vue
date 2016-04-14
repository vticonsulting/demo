<template lang="jade">
  td {{status}}
  td
    span(:style="{ width: decimalToPercent(percentComplete), backgroundColor: setBackgroundColor(percentComplete) }") {{formattedPercentComplete}}
</template>

<script>
  export default {
    props: ['status', 'percentComplete'],

    data () {
      return {
      }
    },

    computed: {
    },

    methods: {
      setBackgroundColor (percent) {
        if (percent >= 0.96) return 'ahead'
        if (percent >= 0.87) return 'on-track'
        return 'behind'
        return "released"
      },

      decimalToPercent () {
        return (this.percentComplete * 100).toFixed(0) + '%'
      }

    }
  }
</script>

<style lang="stylus" scoped>
  span
    display inline-block
    border 1px solid #ccc
</style>

<template lang="pug">
  .vui-panel
    .vui-panel__heading.vui-grid.vui-grid--align-spread
      h2.vui-panel__title.vui-align-middle {{ title }}
    .vui-panel__body
      slot
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
        default: 'View Selection'
      }
    },

    data () {
      return {
        label: 'View Selection Panel'
      }
    }
  }
</script>

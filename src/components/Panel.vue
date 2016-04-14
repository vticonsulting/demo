<template lang="jade">
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

<style lang="stylus">
  @import '../variables'

  .vui-panel
    border-radius $border-radius-large

    &__heading
      background $vui-color-brand-8 url('../assets/img/panel-header-bg.gif') no-repeat
      height 38px
      color $white
      display flex
      justify-content space-between
      align-items center
      padding-right $spacing-medium
      // filter grayscale(1)

    &__title
      // text-transform uppercase
      // letter-spacing $spacing-xxx-small
      font-weight 400
      padding $spacing-x-small
      padding-left ($spacing-x-large * 2)
      line-height $line-height-reset
      margin 0

    &__body
      background lighten($vui-color-brand-8, 50%)
      background $white
      padding $spacing-medium
      border 1px solid #ccc
</style>

<template lang="jade">
  .vui-alert(:class='classObject', v-show='show')
    .vui-container
      span.vui-alert__message
        i.fa.fa-exclamation-triangle
        slot
</template>

<script>
  export default {
    props: {
      status: String,
      show: {
        type: Boolean,
        required: true,
        twoWay: true
      }
    },

    data () {
      return {
        classObject: {
          'vui-alert--success': this.status === 'success',
          'vui-alert--error': this.status === 'error'
        }
      }
    },

    ready () {
      setTimeout(() => this.show = false, 3000)
    }
  }
</script>

<style lang="stylus">
  @import "../variables"

  .vui-alert
    content ''

  .vui-alert--success
    border 1px solid $color-background-toast-success

  .vui-alert--error
    border 1px solid $color-background-toast-error

  .vui-alert
    position absolute
    // top $site-header-height + $site-nav-height
    top 100%
    left 0
    padding $spacing-xx-small $spacing-xx-small
    color $color-text-error
    z-index 1
    width 100%
    &__message
      display inline-block
    &--error
      background $color-background-toast-error
      color $white
    &--success
      background $color-background-toast-success
      color $white
    &--warn
      background $beige
      color $purple
  .login-page .alert
    top ($site-header-height + $login-page-site-nav-height)
</style>

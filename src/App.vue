<template lang="jade">
  #app
    site-header
    site-navigation
    main.vui-main(:class="{ 'vui-main--login': sharedState.activeApp == 'login' }")
      router-view
    site-footer
</template>

<script>
  import store from './store'
  import SiteHeader from './components/SiteHeader.vue'
  import SiteNavigation from './components/SiteNavigation.vue'
  import SiteFooter from './components/SiteFooter.vue'

  export default {
    components: {
      SiteHeader,
      SiteNavigation,
      SiteFooter
    },

    data () {
      return {
        sharedState: store.state
      }
    }
  }
</script>

<style lang="sass">
  @import "./assets/design-tokens";
  @import "./assets/vendor/design-system/scss/index.scss";
</style>

<style lang="stylus">
  @import "./assets/_design-tokens";

  html
    overflow-y scroll
    height 100%

  #app
    display flex
    flex-direction column
    min-height 100vh
    background-color $color-background
    color: $black

  .vui-container
    padding-left $spacing-x-large
    padding-right $spacing-x-large
    padding-left $spacing-xxx-large
    padding-right $spacing-xxx-large
    min-width $container-min-width
    max-width $container-max-width

  .vui-main
    padding-left $spacing-x-large
    padding-right $spacing-x-large
    padding-left  $spacing-xxx-large
    padding-right  $spacing-xxx-large
    min-width $container-min-width
    max-width $container-max-width
    flex-grow 1

  .vui-input,
  .vui-select,
  .vui-button
    border-radius $border-radius-small

  .vui-view
    margin-bottom $spacing-x-large
</style>

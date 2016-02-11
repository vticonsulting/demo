<template lang="jade">
  #app
    site-header
    main.vui-main
      router-view
    site-footer
</template>

<script>
  import SiteHeader from './components/SiteHeader.vue'
  import SiteFooter from './components/SiteFooter.vue'

  export default {
    components: {
      SiteHeader,
      SiteFooter
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
    margin-bottom $spacing-x-large
    padding-left $spacing-x-large
    padding-right $spacing-x-large
    padding-left  $spacing-xxx-large
    padding-right  $spacing-xxx-large
    min-width $container-min-width
    max-width $container-max-width
    flex-grow 1
</style>

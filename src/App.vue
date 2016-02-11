<template lang="jade">
  #app
    site-header
    main.vui-main
      router-view
</template>

<script>
  import SiteHeader from './components/SiteHeader.vue'

  export default {
    components: {
      SiteHeader
    }
  }
</script>

<style lang="sass">
  @import "./assets/design-tokens";
  @import "./assets/vendor/design-system/scss/index.scss";
</style>

<style lang="stylus">

  @import "./assets/_design-tokens";

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

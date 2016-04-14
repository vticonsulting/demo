<template lang="jade">
  header.vui-site-header.vui-site-header--app(role='banner')
    .vui-site-header--app__container.vui-grid.vui-grid--align-spread
      a.vui-align-middle(v-link="{ name: 'home' }", @click='sharedState.activeApp = "login"')
        img.vui-site-header__logo(alt='Videa', src='../assets/svg/videa--white.svg', style='width:144.531px;height:32px')
      .vui-medium-show.vui-action(v-if="sharedState.activeApp == 'sellers' || sharedState.activeApp == 'reps' || sharedState.activeApp == 'buyers'")
        span.vui-m-right--xx-small Welcome Back,
        preferences-dropdown.dropdown-left.vui-m-right--x-small(:text.sync='sharedState.user.name')
        button#stationSelector.vui-button.vui-button--inverse.vui-button--small.vui-m-right--x-small(v-if='sharedState.activeApp !== "buyers"')
          | WVVV
          svg.vui-icon(style='width: 18px; height: 18px;color:hsla(28, 91%, 54%, 1);')
            use(xlink:href='#icon-caret-down', xmlns:xlink='http://www.w3.org/1999/xlink')
</template>

<script>
  import store from '../store'
  import Dropdown from '../components/Dropdown.vue'
  import PreferencesDropdown from '../components/PreferencesDropdown.vue'

  export default {
    components: { Dropdown, PreferencesDropdown },

    data () {
      return {
        sharedState: store.state
      }
    }
  }
</script>

<style lang="stylus">
  @import '../variables'

  .vui-site-header
    color $white
    background-color $vui-color-brand-5
    padding $spacing-medium 0

    &__logo
      height $spacing-x-large

    &--app
      // background-color $vui-color-brand-5
      background-image linear-gradient(to right, $vui-color-brand-1 10%, $vui-color-brand-5 10%, $vui-color-brand-5 10%)
      padding 0

      &__container
        background url('../assets/img/logo-bg.png') no-repeat
        padding 1rem 2rem 1rem 3rem
        // padding-left 4.5rem
        padding-right 4.5rem
        // min-width 1024px
        // max-width 1440px
        max-height 64px
        // filter grayscale(1)

    &--no-nav
      margin-bottom: $spacing-x-large

</style>

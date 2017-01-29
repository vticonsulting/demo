<template lang="pug">
  header.vui-site-header.vui-site-header--app(role='banner')
    .vui-site-header--app__container.vui-grid.vui-grid--align-spread
      router-link.vui-align-middle(:to='{ name: "home" }', @click='sharedState.activeApp = "login"')
        img.vui-site-header__logo(alt='Videa', src='../assets/svg/videa--white.svg', style='width:144.531px;height:32px')
      .vui-medium-show.vui-action(v-if='sharedState.activeApp == "sellers" || sharedState.activeApp == "reps" || sharedState.activeApp == "buyers"')
        span.vui-m-right--xx-small Welcome Back,
        preferences-dropdown.dropdown-left.vui-m-right--x-small(:text='sharedState.user.name')
        button#stationSelector.vui-button.vui-button--inverse.vui-button--small.vui-m-right--x-small(v-if='sharedState.activeApp !== "buyers"')
          | WVVV
          icon(name='caret-down')
</template>

<script>
  import store from 'store'
  import PreferencesDropdown from 'components/PreferencesDropdown'

  export default {
    components: { PreferencesDropdown },

    data () {
      return {
        sharedState: store.state
      }
    }
  }
</script>

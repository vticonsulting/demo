<template lang="pug">
  header.vui-site-header.vui-site-header--app(
    role = 'banner'
  )
    .vui-site-header--app__container.vui-grid.vui-grid--align-spread
      a.vui-align-middle(
        @click.prevent = 'goHome'
      )
        img.vui-site-header__logo(
          alt = 'Videa'
          src = '/vectors/videa-logo--white.svg'
          style = 'height: 2rem'
        )
      .vui-medium-show.vui-action
        span.vui-m-right--xx-small Welcome Back,
        dropdown.dropdown-left.vui-m-right--x-small(
          :text = '$store.state.user.name'
        )
        button#stationSelector.vui-button.vui-button--inverse.vui-button--small.vui-m-right--x-small
          span {{ $store.state.stationCallLetters }}
          icon(
            name = 'caret-down'
          )
</template>

<style lang="stylus">
  .app-logo
    height 2rem
</style>

<script>
  export default {
    methods: {
      goHome () {
        this.$store.state.activeApp = 'login'
        this.$router.push({
          name: 'index'
        })
        this.$emit('goHome')
      }
    }
  }
</script>


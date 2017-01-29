<template lang="pug">
  .app(
    @click = 'hideDropdowns'
  )
    app-header
    app-navigation
    //- flex-nav
    main.vui-main(
      v-bind:class = '{ "vui-main--login": $store.state.activeApp == "login" }'
    )
      //- span {{ $store.state.visibleHeader }}
      //- span Visible: {{ visible }}
      //- button(@click='toggle') Toggle
      nuxt
    app-footer
</template>

<script>
  import AppHeader from '~components/global/app-header'
  import AppNavigation from '~components/global/app-navigation'
  import AppFooter from '~components/global/app-footer'
  import FlexNav from '~components/global/flex-nav'
  import { EventBus } from '~plugins/global-event-bus'

  export default {
    components: { FlexNav, AppHeader, AppNavigation, AppFooter },

    watch: {
      $route: 'setStore'
    },

    computed: {
      visible () { return this.$store.state.visibleHeader }
    },
    data () {
      return {
        clickCount: 0
      }
    },

    methods: {
      hideDropdowns () {
        this.$emit('hideDropdowns')
      },

      emitGlobalClickEvent () {
        this.clickCount++
        // Send the event on a channel (i-got-clicked) with a payload (the click count.)
        EventBus.$emit('i-got-clicked', this.clickCount)
      },

      toggle () {
        this.$store.commit('toggle', 'visibleHeader')
      },

      setStore () {
        if (this.$store.state.visibleHeader) this.$store.commit('toggle', 'visibleHeader')
        // if (this.$store.state.visibleAffix) this.$store.commit('toggle', 'visibleAffix')
      }
    }
  }
</script>

<style lang="stylus">
  .app
    display flex
    flex-direction column
    min-height 100vh
    height 100%  // Avoid the IE 10-11 `min-height` bug.
    background-color #f4f6f9
    color #000000
    position relative
</style>

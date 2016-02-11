<template lang="jade">
  .vui-view
    hello
</template>

<script>
  import store from '../store'
  import Hello from '../components/Hello.vue'

  export default {
    components: {
      Hello
    },

    data () {
      return {
        sharedState: store.state
      }
    },

    created () {
      this.sharedState.activeApp = 'login'
    }
  }
</script>

<style lang="stylus">
  @import "../assets/_design-tokens";

  .vui-main--login
    background-image url('../assets/img/login-background--placeholder.png')
    background-repeat no-repeat
    background-attachment local
    background-position 0 60%
    background-size cover
    margin-bottom 0
    max-width none
</style>

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

<template id="home" lang="jade">
  .home-view
</template>

<script>
  import store from '../store'

  export default {

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

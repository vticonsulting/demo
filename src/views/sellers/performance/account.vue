<template lang="pug">
  account-performance
</template>

<script>
  import store from 'store'
  import AccountPerformance from 'components/Performance/account'

  export default {
    components: { AccountPerformance },

    created () {
      this.sharedState.activeApp = 'sellers'
    },

    data () {
      return {
        sharedState: store.state
      }
    }

  }
</script>

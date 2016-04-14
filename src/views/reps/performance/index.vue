<template lang="jade">
  account-performance
</template>

<script>
  import store from '../../../store'

  import AccountPerformance from '../../../components/Performance/account.vue'

  export default {
    components: { AccountPerformance },

    created () {
      this.sharedState.activeApp = 'reps'
    },

    data () {
      return {
        sharedState: store.state
      }
    }

  }
</script>

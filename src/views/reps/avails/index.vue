<template lang="pug">
  avails(avail-route='reps.avail')
</template>

<script>
  import store from 'store'
  import Avails from 'components/Avails'

  export default {
    components: { Avails },

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

<template lang="jade">
  avails(avail-route='sellers.avail')
</template>

<script>
  import store from '../../../store'
  import Avails from '../../../components/Avails/index.vue'

  export default {
    components: { Avails },

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

<template lang="jade">
  avail-edit(avails-route='reps.avails', avail-route='reps.avail')
</template>

<script>
  import store from '../../../store'
  import AvailEdit from '../../../components/Avails/edit.vue'

  export default {
    components: { AvailEdit },

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

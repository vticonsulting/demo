<template lang="jade">
  avail(avails-route='reps.avails', edit-avail-route='reps.avail.edit')
</template>

<script>
  import store from '../../../store'
  import Avail from '../../../components/Avails/show.vue'

  export default {
    components: { Avail },

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

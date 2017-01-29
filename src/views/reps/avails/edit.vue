<template lang="pug">
  avail-edit(avails-route='reps.avails', avail-route='reps.avail')
</template>

<script>
  import store from 'store'
  import AvailEdit from 'components/Avails/edit'

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

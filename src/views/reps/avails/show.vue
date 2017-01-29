<template lang="pug">
  avail(avails-route='reps.avails', edit-avail-route='reps.avail.edit')
</template>

<script>
  import store from 'store'
  import Avail from 'components/Avails/show'

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

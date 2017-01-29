<template lang="pug">
  avail-edit(avails-route='sellers.avails', avail-route='sellers.avail')
</template>

<script>
  import store from 'store'
  import AvailEdit from 'components/Avails/edit'

  export default {
    components: { AvailEdit },

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

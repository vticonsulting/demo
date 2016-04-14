<template lang="jade">
  avail(avails-route='sellers.avails', edit-avail-route='sellers.avail.edit')
</template>

<script>
  import store from '../../../store'
  import Avail from '../../../components/Avails/show.vue'

  export default {
    components: { Avail },

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

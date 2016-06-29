<template lang="jade">
  makegood(makegoods-route='sellers.makegoods')
</template>

<script>
  import store from '../../../store'
  import Makegood from '../../../components/Makegoods/show.vue'

  export default {
    components: { Makegood },

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

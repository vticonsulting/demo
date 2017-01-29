<template lang="pug">
  makegoods(offer-route='reps.makegood')
</template>

<script>
  import store from 'store'
  import Makegoods from 'components/Makegoods'

  export default {
    components: { Makegoods },

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

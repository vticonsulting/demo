<template lang="pug">
  makegoods(offer-route='sellers.makegood')
</template>

<script>
  import store from 'store'
  import Makegoods from 'components/Makegoods'

  export default {
    components: { Makegoods },

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

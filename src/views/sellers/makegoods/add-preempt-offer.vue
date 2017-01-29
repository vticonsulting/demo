<template lang="pug">
  makegoods-add-preempt-offer
</template>

<script>
  import store from 'store'
  import MakegoodsAddPreemptOffer from 'components/Makegoods/add-preempt-offer'

  export default {
    components: { MakegoodsAddPreemptOffer },

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

<template lang="pug">
  makegoods-add-bonus-offer
</template>

<script>
  import store from 'store'
  import MakegoodsAddBonusOffer from 'components/Makegoods/add-bonus-offer'

  export default {
    components: { MakegoodsAddBonusOffer },

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

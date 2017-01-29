<template lang="pug">
  makegoods-add-credit-offer
</template>

<script>
  import store from 'store'
  import MakegoodsAddCreditOffer from 'components/Makegoods/add-credit-offer'

  export default {
    components: { MakegoodsAddCreditOffer },

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

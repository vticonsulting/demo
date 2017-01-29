<template lang="pug">
  makegoods-add-makegood-offer
</template>

<script>
  import store from 'store'
  import MakegoodsAddMakegoodOffer from 'components/Makegoods/add-makegood-offer'

  export default {
    components: { MakegoodsAddMakegoodOffer },

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

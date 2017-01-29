<template lang="pug">
  makegoods-add-program-change-offer
</template>

<script>
  import store from 'store'
  import MakegoodsAddProgramChangeOffer from 'components/Makegoods/add-program-change-offer'

  export default {
    components: { MakegoodsAddProgramChangeOffer },

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

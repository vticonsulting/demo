<template lang="pug">
  makegoods-details
</template>

<script>
  import store from 'store'
  import MakegoodsDetails from 'components/Makegoods/details'

  export default {
    components: { MakegoodsDetails },

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

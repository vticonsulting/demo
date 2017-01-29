<template lang="pug">
  makegoods-create
</template>

<script>
  import store from 'store'
  import MakegoodsCreate from 'components/Makegoods/create'

  export default {
    components: { MakegoodsCreate },

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

<template lang="pug">
  makegood(makegoods-route='reps.makegoods')
</template>

<script>
  import store from 'store'
  import Makegood from 'components/Makegoods/show'

  export default {
    components: { Makegood },

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

<template lang="pug">
  orders(order-route='reps.order')
</template>

<script>
  import store from 'store'
  import Orders from 'components/Orders'

  export default {
    components: { Orders },

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

<template lang="pug">
  order(orders-route='sellers.orders')
</template>

<script>
  import store from 'store'
  import Order from 'components/Orders/show'

  export default {
    components: { Order },

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

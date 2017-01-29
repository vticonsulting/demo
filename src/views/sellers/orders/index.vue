<template lang="pug">
  orders(order-route='sellers.order')
</template>

<script>
  import store from 'store'

  import Orders from 'components/Orders'

  export default {
    components: { Orders },

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

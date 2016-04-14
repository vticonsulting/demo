<template lang="jade">
  orders(order-route='sellers.order')
</template>

<script>
  import store from '../../../store'

  import Orders from '../../../components/Orders/index.vue'

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

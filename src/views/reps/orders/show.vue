<template lang="jade">
  order(orders-route='reps.orders')
</template>

<script>
  import store from '../../../store'
  import Order from '../../../components/Orders/show.vue'

  export default {
    components: { Order },

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

<template lang="jade">
  orders(order-route='reps.order')
</template>

<script>
  import store from '../../../store'
  import Orders from '../../../components/Orders/index.vue'

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

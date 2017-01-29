<template lang="pug">
  order-management(detail-route='sellers.order-management.order')
</template>

<script>
  import store from 'store'
  import OrderManagement from 'components/OrderManagement'

  export default {
    components: { OrderManagement },

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

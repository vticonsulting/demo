<template lang="pug">
  order-management-detail(summary-route='sellers.order-management')
</template>

<script>
  import store from 'store'
  import OrderManagementDetail from 'components/OrderManagement/show'

  export default {

    components: { OrderManagementDetail },

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

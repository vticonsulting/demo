<template lang="jade">
  order-management-detail(summary-route='reps.order-management')
</template>

<script>
  import store from '../../../store'
  import OrderManagementDetail from '../../../components/OrderManagement/show.vue'

  export default {
    components: { OrderManagementDetail },

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

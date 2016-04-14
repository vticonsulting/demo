<template lang="jade">
  price-guide(route-name='sellers.price-guide')
</template>

<script>
  import store from '../../../store'

  import PriceGuide from '../../../components/PriceGuide/index.vue'

  export default {
    components: { PriceGuide },

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

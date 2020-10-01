<template>
  <div>
    <Navbar />

    <NotificationContainer />

    <RouterView />
    <div data-testid="location-display">{{ $route.fullPath }}</div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import NotificationContainer from '@/components/NotificationContainer.vue'

export default {
  components: {
    Navbar,
    NotificationContainer,
  },
}
</script>

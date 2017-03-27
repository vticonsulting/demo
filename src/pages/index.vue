<template lang="pug">
  .page
</template>

<script>
  export default {
    name: 'login',
    beforeCreate () {
      this.$store.state.activeApp = 'login'
    }
  }
</script>

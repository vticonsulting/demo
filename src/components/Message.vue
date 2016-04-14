<template lang="jade">
  .message {{ message.name }}
</template>

<script>
  export default {
    props: ['message']
  }
</script>

<style lang="stylus">
  .message
    background-color blue
    height 20px
    margin-bottom 10px
</style>

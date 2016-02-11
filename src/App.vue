<template lang="jade">
  #app
    img.logo(src="./assets/svg/videa-logo.svg")
    hello
</template>

<script>
  import Hello from './components/Hello.vue'

  export default {
    components: {
      Hello
    }
  }
</script>

<style lang="stylus">
  body
    font-family: Helvetica, sans-serif
</style>

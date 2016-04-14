<template>

</template>

<script>
  export default {
    props: ['callback'],
    created () {
      this.callback('hihi')
    }
  }
</script>

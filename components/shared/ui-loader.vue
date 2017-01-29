<template lang="pug">
  i.fa.fa-spinner.fa-spin(
    v-show = 'loading'
  )
</template>

<script>
  export default {
    props: {
      loading: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

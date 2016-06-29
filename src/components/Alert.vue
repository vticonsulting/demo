<template lang="jade">
  .vui-alert(:class='classObject', v-show='show')
    .vui-container
      span.vui-alert__message
        i.fa.fa-exclamation-triangle
        slot
</template>

<script>
  export default {
    props: {
      status: String,
      show: {
        type: Boolean,
        required: true,
        twoWay: true
      }
    },

    data () {
      return {
        classObject: {
          'vui-alert--success': this.status === 'success',
          'vui-alert--error': this.status === 'error'
        }
      }
    },

    ready () {
      setTimeout(() => this.show = false, 3000)
    }
  }
</script>

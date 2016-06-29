<template>
  <div class="vui-flash"
    :class='{
      "vui-flash--success": type == "success",
      "vui-flash--error": type == "error"
    }'
    v-show="show"
  >
    <div class="vui-container">
      <span class="vui-flash__message">
        <i class="fa fa-exclamation-triangle"></i>
        <slot></slot>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['type'],

    data () {
      return {
        show: true
      }
    },

    ready () {
      setTimeout(() => this.show = false, 3000)
    }
  }
</script>

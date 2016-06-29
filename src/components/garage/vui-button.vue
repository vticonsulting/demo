<template>
  <button class="vui-button vui-button--{{ type }} vui-btn--{{ size }}">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'neutral'
      },
      size: {
        type: String,
        default: 'sm'
      }
    }
  }
</script>

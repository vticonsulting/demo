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

<style lang="sass">
  @import "../variables";

  .vui-flash {}
  .vui-flash--success { border: 1px solid $color-background-toast-success; }
  .vui-flash--error { border: 1px solid $color-background-toast-error; }
  .vui-flash {
    position: absolute;
    // top: $site-header-height + $site-nav-height;
    top: 117px;
    left: 0;
    padding: 5px 10px;
    color: $red;
    z-index: 1;
    width: 100%;

    &__message {
      display: inline-block;
    }

    &--error {
      background: $color-background-toast-error;
      color: $white;
    }

    &--success {
      background: $color-background-toast-success;
      color: $white;
    }

    &--warn {
      background: $beige;
      color: $purple;
    }
  }

  .login-page .alert {
    top: $site-header-height + $login-page-site-nav-height;
  }
</style>

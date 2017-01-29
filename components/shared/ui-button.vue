<!-- UI-Button Component definition -->
<template lang="pug">
  button(
    @click = 'action'
    v-bind:autofocus = 'autofocus'
    v-bind:class = 'classes'
    v-bind:disabled = 'isDisabled'
    v-bind:type = 'buttonType'
    class = 'vui-button'
  )
    i(
      v-bind:class = 'iconClass'
      v-if = 'icon'
    )
    slot
</template>

<script>
  export default {
    props: {
      buttonType: {
        type: String,
        default: 'button',
        validator (value) {
          return [ 'button', 'submit', 'reset' ].includes(value)
        }
      },
      type: {
        type: String,
        default: 'default',
        validator (value) {
          return [ 'default', 'primary', 'link' ].includes(value)
        }
      },
      shape: {
        type: String,
        validator (value) {
          return [ 'full', 'circle' ].includes(value)
        }
      },
      size: {
        type: String,
        default: 'medium',
        validator (value) {
          return [ 'small', 'medium', 'large' ].includes(value)
        }
      },
      icon: String,
      disabled: Boolean,
      loading: Boolean,
      autofocus: Boolean,
      action: {
        default: () => {},
        type: Function
      }
    },
    computed: {
      classes () {
        return {
          btn: true,
          [`vui-button--${this.type}`]: this.type,
          [`vui-button--${this.shape}`]: this.shape,
          [`vui-button--${this.size}`]: this.size,
          'vui-button--disabled': this.isDisabled,
          'vui-button--loading': this.loading
        }
      },
      isDisabled () {
        return this.disabled || this.loading
      },
      iconClass () {
        return `icon icon-${this.icon}`
      }
    }
  }
</script>

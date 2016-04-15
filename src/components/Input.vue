<template lang="jade">
  fieldset.vui-form-element
    label.vui-form-element__label(v-if='!hideLabel') {{ label }}
    .vui-form-element__control.vui-form-element__control--with-addon
      input.vui-input.vui-text-align--right(:type='type', :for='id', :name='id', :required='required', style='padding-right: 1.5rem')
      //- span.vui-input-group-addon %
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'text'
      },
      label: {
        type: String,
        required: true
      },
      hideLabel: {
        type: Boolean,
        default: false
      },
      addon: {
        type: String,
        required: false
      },

      required: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="stylus">
  .vui-form-element__control--with-addon
    position relative

    .vui-input ~ span
      display inline-block
      height 3px
      position absolute
      top 20%
      right 0.5rem
      transition all 0.125s ease
</style>

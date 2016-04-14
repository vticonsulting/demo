<template lang="jade">
  fieldset.vui-form-element
    label.vui-form-element__label(:for='id') {{label}}
    .vui-form-element__control
      input.vui-input(:type='type', :id='id', :name='id', :required='required')
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
      required: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

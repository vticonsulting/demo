<!-- <resizable-textarea text="ctrl.makegood.comment" initial-height="140" width="200"> -->
<template lang="pug">
  .resizable(resizable='', r-directions="['bottom', 'right']", r-height='initialHeight', style='height: 140px;')
    textarea.vui-textarea(v-model='text', :readonly='isReadonly', name='', :required='isRequired', :disabled='isDisabled')
    .rg-bottom
      span
    .rg-right
      span
</template>

<script>
  export default {
    props: {
      text: String,
      isReadonly: {
        type: [Boolean, String],
        default: false
      },
      isRequired: {
        type: Boolean,
        default: false
      },
      isDisabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {}
    }
  }
</script>

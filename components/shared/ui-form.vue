<template lang="pug">
  form.vui-grid.vui-grid--vertical-align-end(
    action = ''
  )

    //- fieldset.vui-form-element
    //-   label.vui-form-element__label Search
    //-   .vui-form-element__control.vui-m-right--small
    //-     input.vui-input(type='text', name='searchText', v-model='searchKey', ref='searchKey', placeholder='Advertiser or Agency', style='width: 24rem')

    //- fieldset.vui-form-element
    //-   label.vui-form-element__label.vui-m-right--x-small(for='fromDate') Flight Start Date
    //-   .vui-form-element__control.vui-m-right--small
    //-     datepicker#fromDate(:value='fromDate', name='fromDate')

    //- fieldset.vui-form-element
    //-   label.vui-form-element__label.vui-m-right--x-small(for='fromDate') Flight End Date
    //-   .vui-form-element__control.vui-m-right--small
    //-     datepicker#toDate(:value='toDate', name='toDate')

    fieldset.vui-form-element
      button.vui-button.vui-button--brand.vui-m-right--x-small(
        @click.prevent = ''
      ) Search
</template>

<script>
  export default {
    props: {
      searchKey: {
        type: String
      }
    }
  }

</script>

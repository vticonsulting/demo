<template lang="pug">
  div
    .vui-panel__body
      form.vui-grid.vui-grid--vertical-align-end.order-summary-filter-container.performance-filter-controls.station-performance-controls(name='filterForm', novalidate='')
        fieldset.vui-form-element.on-valid
          label.vui-form-element__label(for='searchText') Search
          .vui-form-element__control
            input#searchText.vui-input(type='text', maxlength='128', name='searchText', v-model='searchText', style='width: 24rem')
        fieldset.vui-form-element
          .vui-form-element__control.vui-m-right--small
            .vui-select_container(style='margin-left: -1px')
              select#searchType.vui-select
                option(label='Advertiser', value='number:0', selected='selected') Advertiser
                option(label='Agency', value='number:1') Agency
                option(label='Station Order #', value='number:2') Station Order #
                option(label='Videa Order #', value='number:3') Videa Order #
        fieldset.vui-form-element
          label.vui-form-element__label Start Date
          .vui-form-element__control.vui-m-right--x-small
            //- vui-date-picker(placeholder="'MM/dd/yyyy'", v-model='startDate', name='startDate', is-required='filterForm.endDate.$modelValue\
            //- || (!searchText && !filterForm.endDate.$modelValue)', v-model-options='{ allowInvalid: true }')
        fieldset.vui-form-element
          label.vui-form-element__label End Date
          .vui-form-element__control.vui-m-right--x-small
            //- vui-date-picker(placeholder="'MM/dd/yyyy'", v-model='endDate', name='endDate', is-required='filterForm.startDate.$modelValue\
            //- || (!searchText && !filterForm.endDate.$modelValue)', v-model-options='{ allowInvalid: true }')
        fieldset.vui-form-element
          input.vui-button.vui-button--brand(type='submit', @click='onSubmit', value='Search')
    //- .filter-validation.vui-theme--shade.error
    //-   ul.vui-p-top--xxx-small
    //-     li(v-show='filterForm.searchText.$error.required\
    //-     && filterForm.startDate.$error.required\
    //-     && filterForm.endDate.$error.required')
    //-       //- i.glyphicon.glyphicon-warning-sign.required.vui-m-left--xxx-small.vui-m-right--xx-small
    //-       | Please provide searching criteria or flight dates.
    //-     li(v-show='filterForm.startDate.$invalid && !filterForm.searchText.$error.required')
    //-       //- i.glyphicon.glyphicon-warning-sign.required.vui-m-left--xxx-small.vui-m-right--xx-small
    //-       | Please select a valid 'Start Date'.
    //-     li(v-show='filterForm.endDate.$invalid && !filterForm.searchText.$error.required')
    //-       //- i.glyphicon.glyphicon-warning-sign.required.vui-m-left--xxx-small.vui-m-right--xx-small
    //-       | Please select a valid 'End Date'.
    //-     li(v-show='filterForm.startDate.$valid && filterForm.endDate.$valid && filterForm.$error.greaterThan')
    //-       //- i.glyphicon.glyphicon-warning-sign.required.vui-m-left--xxx-small.vui-m-right--xx-small
    //-       | Invalid date range. 'Start Date' cannot be greater than 'End Date'.
</template>

<script>
  export default {
    data () {
      return {
        searchText: '',
        startDate: null,
        endDate: null
      }
    },

    methods: {
      onSubmit () {

      }
    }
  }
</script>

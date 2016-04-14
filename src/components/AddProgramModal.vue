<template lang="jade">
  modal(:show.sync='show', :on-close='close', size='large')

    .modal-header.vui-m-bottom--large

      h3.vui-text-heading--medium Add Program

    .modal-body

      // Form
      form

        // Special Event | Available All Quarters Fieldset
        fieldset.vui-form-element.vui-m-bottom--large
          .vui-form-element__control.vui-grid.vui-grid--align-end
            label.vui-checkbox
              input#checkbox-01(type='checkbox', name='options')
              span.vui-checkbox--faux
              span.vui-form-element__label Special Event
            label.vui-checkbox
              input#checkbox-01(type='checkbox', name='options', checked='true')
              span.vui-checkbox--faux
              span.vui-form-element__label Available All Quarters

        // Program Name | Rate | Rating Fieldset Group
        fieldset.vui-form--compound.vui-m-bottom--large
          //- legend.form-element__legend.vui-form-element__label
          //-   b Program Name
          .form-element__group
            .vui-form-element__row
              .vui-size--1-of-2.vui-m-right--small
                label.vui-form-element__label(for='') Program Name
                input.vui-input.vui-input--small.vui-text-align--right(type='text')

              .vui-size--1-of-4.vui-m-right--small
                label.vui-form-element__label(for='input-01') Rate
                input.vui-input.vui-input--small.vui-text-align--right(type='text')

              .vui-size--1-of-4
                label.vui-form-element__label(for='input-01') Rating
                input.vui-input.vui-input--small(type='text')

        // Daypart Select Fieldset
        fieldset.vui-form-element.vui-m-bottom--large
          label.vui-form-element__label(for='select-01') Daypart
          .vui-form-element__control
            .vui-select_container
              select#select-01.vui-select
                option Early Fringe
                option Early Morning
                option Daytime
                option Early Fringe
                option Early News
                option Prime Access
                option Prime/Specials
                option Sports
                option Late News
                option Late Fringe
                option Weekend
                option Overnight

        hr

        // Start Date | End Date Fieldset Group
        fieldset.vui-form--compound.vui-m-bottom--small
          //- legend.form-element__legend.vui-form-element__label
          //-   b Date
          .form-element__group
            .vui-form-element__row
              .vui-form-element.vui-size--1-of-2
                label.vui-form-element__label(for='input-02') Start Date
                datepicker(:value.sync='fromDate', name='fromDate')
              .vui-form-element.vui-size--1-of-2
                label.vui-form-element__label(for='input-01') End Date
                datepicker(:value.sync='toDate', name='toDate')

        // Start Time | End Time Fieldset Group
        fieldset.vui-form--compound.vui-m-bottom--small
          //- legend.form-element__legend.vui-form-element__label
          //-   b Time
          .form-element__group
            .vui-form-element__row
              .vui-form-element.vui-size--1-of-2
                label.vui-form-element__label(for='select-01') Start Time
                .vui-form-element__control
                  .vui-select_container
                    select#select-01.vui-select
                      option 12:00 AM
              .vui-form-element.vui-size--1-of-2
                label.vui-form-element__label(for='select-01') End Time
                .vui-form-element__control
                  .vui-select_container
                    select#select-01.vui-select
                      option 12:00 AM

        // Day of the Week Range Fieldset Group
        fieldset.vui-form--compound.vui-m-bottom--large
          //- legend.form-element__legend.vui-form-element__label
          //-   b Program Days
          .form-element__group
            .vui-form-element__row
              .vui-form-element.vui-size--1-of-2
                label.vui-form-element__label(for='select-01') Beginning
                .vui-form-element__control
                  .vui-select_container
                    select#select-01.vui-select
                      option ---
                      option(:selected='true') Monday
                      option Tuesday
                      option Wednesday
                      option Thursday
                      option Friday
                      option Saturday
                      option Sunday
              .vui-form-element.vui-size--1-of-2
                label.vui-form-element__label(for='select-01') Thru
                .vui-form-element__control
                  .vui-select_container
                    select#select-01.vui-select
                      option ---
                      option Monday
                      option Tuesday
                      option Wednesday
                      option Thursday
                      option Friday
                      option Saturday
                      option Sunday

        // Save | Cancel Fieldset Group
        fieldset.vui-text-align--right
          button.vui-button.vui-button--brand.vui-m-right--x-small(@click.prevent='close()') Save
          button.vui-button.vui-button--neutral(@click.prevent='close()') Cancel
</template>

<script>
  import Modal from './Modal.vue'
  import Datepicker from './Datepicker2.vue'

  export default {
    components: { Modal, Datepicker },

    props: ['show'],

    data () {
      return {
        comment: '',
        fromDate: new Date(),
        toDate: new Date()
      }
    },

    methods: {
      close () {
        this.show = false
        this.comment = ''
      },

      postComment () {
        this.close()
      }
    }
  }
</script>

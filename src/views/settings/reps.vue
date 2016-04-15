<template lang="jade">
  #reps-settings.vui-p-around--x-large.vui-tabs--scoped__content(role='tabpanel', aria-labelledby='tab-scoped-1__item', v-show="activeTab == '#reps-settings'")
    h2.vui-text-heading--medium.vui-m-bottom--medium  Current Sales Reps
    p.vui-text-longform.vui-m-bottom--large Select the reps you'd like to have access to your Price Guide

    .vui-grid.vui-grid--align-spread.vui-m-bottom--large
    button.vui-align-middle.vui-button.vui-button--brand(@click.prevent='showEditSalesRepsModal = true', href='#') Edit Sales Reps

    .vui-scrollable--x
      table.vui-table
        thead
          tr
            th Rep
            th Phone
            th Email
            th.vui-text-align--center Price Guide Access
        tbody
          tr(v-for='rep in reps', :class='($index % 2 === 0) ? "vui-highlight" : ""')
            td {{ rep.name }}
            td {{ rep.phone }}
            td {{ rep.email }}
            td.vui-text-align--center
              label.vui-checkbox
                input#checkbox-01(type='checkbox', name='options')
                span.vui-checkbox--faux
    edit-sales-reps-modal(:show.sync="showEditSalesRepsModal")
</template>

<script>
  import PageHeading from '../../components/PageHeading.vue'
  import EditSalesRepsModal from '../../components/EditSalesRepsModal.vue'

  export default {
    components: { PageHeading, EditSalesRepsModal },

    data () {
      return {
        newpassword: '',
        activeTab: '#reps-settings',
        showEditSalesRepsModal: false,
        reps: [
          {
            name: 'John Adamy',
            phone: '770-145-3867',
            email: 'john.adamy@coxreps.com'
          },
          {
            name: 'Tony Admire',
            phone: '770-145-3937',
            email: 'tony.admire@coxreps.com'
          },
          {
            name: 'Phil Akens',
            phone: '770-145-7364',
            email: 'phil.akens@coxreps.com'
          }
        ],
        settings: {
        }
      }
    },

    validators: {
      confirm (val) {
        return this.newpassword === val
      }
    },

    methods: {
      onKeyup () {
        alert('on keyup')
      },

      onSubmit (e) {
        // validate manually
        this.$validate(true)

        if (this.$validation.invalid) {
          e.preventDefault()
        }
      }
    }
  }
</script>

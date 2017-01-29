<template lang="pug">
  modal(:show='show', :on-close='close', size='large')
    .modal-header.vui-m-bottom--large
      h3.vui-text-heading--medium Premium Advertisers
    .modal-body

      p.vui-text-longform.vui-m-bottom--large Manage your premium advertisers. Premium clients will be affected by the premium pricing on the price guide.

      panel.vui-m-bottom--large(title='View Selection')
        form.vui-form--inline
          fieldset.vui-form-element
            label.vui-form-element__label(for='select-01') Agency
            .vui-form-element__control
              .vui-select_container
                select#select-01.vui-select
                  option All
                  option Hughes-Martin Agency
                  option The Media Masters Group
                  option Mullberry Way Group
                  option Auto Advertising Partners
                  option Zone Group Advertising
                  option Vanthrop &amp; Associates
          fieldset.vui-form-element
            label.vui-form-element__label(for='select-01') Clients
            .vui-form-element__control
              .vui-select_container
                select#select-01.vui-select
                  option All
                  option Piedmont Healthcare
                  option Metro Wireless
                  option Sun Valley Bank
                  option SE Ford
                  option Papa John's Pizza
                  option Community Loans, LLC
          .vui-form-element
            button.vui-button.vui-button--brand(type='submit') Submit

      .vui-scrollable--x.vui-m-bottom--large
        table.vui-table.vui-no-row-hover
          thead
            tr
              th Agency
              th Client
              th.vui-text-align--center Premium
          tbody
            tr(v-for='client in account.clients')
              td {{ client.agency }}
              td {{ client.advertiser }}
              td.vui-text-align--center
                label.vui-checkbox
                  input#checkbox-01(type='checkbox', name='options', :checked='client.premium === true')
                  span.vui-checkbox--faux

      .vui-text-align--right
        button.vui-button.vui-button--brand.vui-m-right--x-small(@click.prevent='close()') Submit
        button.vui-button.vui-button--neutral(@click.prevent='close()') Cancel

</template>

<script>
  export default {
    props: ['show', 'account'],

    data () {
      return {
        comment: ''
      }
    },

    methods: {
      close () {
        this.show = false
        this.comment = ''
      }
    }
  }
</script>

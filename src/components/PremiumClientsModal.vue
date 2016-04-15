<template lang="jade">
  modal(:show.sync='show', :on-close='close', size='large')
    .modal-header.vui-m-bottom--large
      h3.vui-text-heading--medium Premium Clients
    .modal-body
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

      p.vui-m-bottom--large Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin vitae augue vitae vestibulum. Duis non porta tortor. Aenean sed metus placerat, accumsan diam et, tincidunt nulla. Pellentesque id dui faucibus, ullamcorper leo at, ultrices augue. Nullam tincidunt risus mi, vel vulputate metus volutpat sit amet. Maecenas accumsan finibus velit at suscipit. Duis pellentesque facilisis imperdiet.

      .vui-scrollable--x
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
                  input#checkbox-01(type='checkbox', name='options', :checked='client.premium')
                  span.vui-checkbox--faux
</template>

<script>
  import Modal from './Modal.vue'
  import Panel from './Panel.vue'

  export default {
    components: { Modal, Panel },

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

<template lang="jade">
  modal(:show.sync='show', :on-close='close', size='large')
    .modal-header.vui-m-bottom--large
      h3.vui-text-heading--medium  Add Program
    .modal-body
      p.vui-m-bottom--small Add or remove programs in the proposal by selecting or deselecting the check next to the program.
      form
        .vui-form-element.vui-m-bottom--large
          label.vui-form-element__label Select Daypart
          .vui-form-element__control
            .vui-select_container
              select.vui-select
                option Prime Access
                option Prime
      .vui-scrollable--x
        table.vui-table.vui-m-bottom--medium
          thead
            tr
              th Program
              th Time
              th.vui-text-align--center
                input(type='checkbox')
          tbody
            tr(v-for='program in programs')
              td {{program.name}}
              td {{program.time}}
              td.vui-text-align--center
                input(type='checkbox')
        .vui-text-align--right
          button.vui-button.vui-button--brand.vui-m-right--x-small(@click.prevent='close()') Submit
          button.vui-button.vui-button--neutral(@click.prevent='close()') Cancel
</template>

<script>
  import Modal from './Modal.vue'

  export default {
    components: {Modal},

    props: ['show'],

    data () {
      return {
        comment: '',
        programs: [
          {
            name: 'Access Hollywood',
            time: 'M-F / 07:00PM — 07:30 PM'
          },
          {
            name: 'Entertainment Tonight',
            time: 'M-F / 07:30 PM — 08:00 PM'
          },
          {
            name: 'Access Hollywood',
            time: 'Sat / 07:00 PM — 07:30 PM'
          },
          {
            name: 'Entertainment Tonight',
            time: 'Sun / 07:30 PM — 08:00 PM'
          }
        ]
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

<template lang="jade">
  #specials-settings.vui-p-around--x-large.vui-tabs--scoped__content(role='tabpanel', aria-labelledby='tab-scoped-3__item', v-show="activeTab == '#specials-settings'")
    h2.vui-text-heading--medium.vui-m-bottom--medium Sports and Specials
    p.vui-text-longform.vui-m-bottom--large The sports and specials for your station are listed below. If you don't see an upcoming event for your station please submit one to Videa for review.

    form.vui-form--inline.vui-m-bottom--large
      fieldset.vui-form-element
        input.vui-input(type='text', placeholder='Sport or Special', style='width: 24rem')
      fieldset.vui-form-element
        button.vui-button.vui-button--brand Search

    .vui-scrollable--x.vui-m-bottom--large
      table.vui-table.vui-no-row-hover
        thead
          tr
            th Sports/Specials
            th Air Date
        tbody
          tr(v-for='special in specials', :class='($index % 2 === 0) ? "vui-highlight" : ""')
            td {{ special.name }}
            td {{ special.airDate }}

    h3.vui-text-heading--small.vui-m-bottom--medium Add Sports/Specials Notification

    table.vui-table.vui-no-row-hover
      thead
        tr
          th Program Name
          th Air Date
          th Time Period
          th Notes
          th
      tbody
        tr
          td
            input.vui-input(v-model='newProgram.name')
          td
            datepicker#airDate(:value.sync='airDate', name='airDate')
          td
            input.vui-input(v-model='newProgram.timePeriod')
          td
            input.vui-textarea(v-model='newProgram.notes')
          td
            button.vui-button.vui-button--brand(@click.prevent='addNewProgram(newProgram)') Add
</template>

<script>
  import PageHeading from '../../components/PageHeading.vue'
  import Datepicker from '../../components/Datepicker2.vue'

  export default {
    components: { PageHeading, Datepicker },

    data () {
      return {
        newpassword: '',
        activeTab: '#specials-settings',
        newProgram: {},
        specials: [
          {
            name: 'Electronic Music Awards Show',
            airDate: '04/23/16'
          },
          {
            name: 'Nascar: Charlotte',
            airDate: '05/29/16'
          },
          {
            name: 'MLB: Braves v Nationals',
            airDate: '05/21/16'
          },
          {
            name: 'Empire Finale',
            airDate: '05/25/16 '
          },
          {
            name: 'American Idol Series Finale Night 1',
            airDate: '04/05/16'
          },
          {
            name: 'American Idol Series Finale Night 2',
            airDate: '04/06/16'
          },
          {
            name: 'American Idol Series Finale Night 3',
            airDate: '04/07/16'
          },
          {
            name: 'Gotham Season Finale',
            airDate: '05/23/16'
          },
          {
            name: 'Fox Premiere Boxing',
            airDate: '04/30/16'
          }
        ]
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

      addNewProgram (program) {
        this.specials.push(program)
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

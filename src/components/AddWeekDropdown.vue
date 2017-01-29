<template lang="pug">
  .vui-dropdown-trigger.vui-dropdown-trigger--click(:class='{ "vui-is-open": show }', :aria-expanded='show', @click='toggle', :disabled='disabled')
    button.vui-button.vui-button--icon-container(aria-haspopup='true')
      icon(name='calendar-plus-o', style='margin-right: 0; color: hsla(196, 99%, 32%, 1)')
      span.vui-assistive-text Settings
    .vui-dropdown(:style='styleObject', :class='{ "vui-nubbin--top": nubbinTop, "vui-nubbin--top-left": nubbinLeft, "vui-nubbin--top-right": nubbinRight }')
      .vui-dropdown__list(role='menu')
        .vui-p-around--large
          fieldset.vui-form-element.vui-m-bottom--small(v-for='week in month.weeks')
            label.vui-checkbox
              input#checkbox-01(@change='breakOutWeek(week)', type='checkbox', name='options', v-model='selectedWeeks', :value='week')
              span.vui-checkbox--faux
              span.vui-form-element__label Week of {{ week.week }}

          fieldset.vui-form-element.vui-text-align--center
            button.vui-button.vui-button--brand.vui-button--small(@click.prevent='showSelectedWeeks') Submit

</template>

<script>
  import store from 'store'

  export default {
    props: {
      text: {
        type: String,
        default: ''
      },

      disabled: {
        type: Boolean,
        default: false
      },

      weeks: {
        type: Array
      },

      month: {
        type: Object
      }
    },

    data () {
      return {
        show: false,
        shown: false,
        nubbinLeft: false,
        nubbinRight: false,
        nubbinTop: true,
        sharedState: store.state,
        selectedWeeks: [],
        styleObject: {
          backgroundColor: ''
        }

      }
    },

    methods: {
      toggle (e) {
        this.show = !this.show
        if (this.show) {
          e.stopPropagation()
        } else {
        }
      },

      showSelectedWeeks () {
        this.selectedWeeks.forEach((week) => {
          week.expanded = true
        })
      },

      breakOutWeek (week) {
      },

      clicked (route) {
        this.show = false
        this.$router.push({
          name: route
        })
      }
    },

    events: {
      'hide::dropdown' () {
        this.show = false
      }
    }
  }
</script>

<template lang="jade">
  .vui-dropdown-trigger.vui-dropdown-trigger--click(:class='{ "vui-is-open": show }', aria-expanded='{{show}}', @click='toggle($event)', :disabled='disabled')
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


    //- button.vui-button.vui-not-selected(aria-live='assertive', aria-expanded='{{show}}' aria-haspopup='true', @click='toggle($event)', :disabled='disabled')
    //-   span(v-html='text', v-show='text', style='color: white')
    //- .vui-dropdown(:class='{ "vui-nubbin--top": nubbinTop, "vui-nubbin--top-left": nubbinLeft, "vui-nubbin--top-right": nubbinRight }')
    //-   .dropdown-menu.dropdown__list.vui-dropdown__list(role='menu')
    //-     .vui-p-around--large
    //-       fieldset.vui-form-element.vui-m-bottom--large
    //-         label.vui-checkbox
    //-           input#checkbox-01(type='checkbox', name='options')
    //-           span.vui-checkbox--faux
    //-           span.vui-form-element__label Week of 04/21/16
    //-       fieldset.vui-form-element.vui-m-bottom--large
    //-         label.vui-checkbox
    //-           input#checkbox-01(type='checkbox', name='options')
    //-           span.vui-checkbox--faux
    //-           span.vui-form-element__label Week of 04/21/16
    //-       fieldset.vui-form-element.vui-m-bottom--large
    //-         label.vui-checkbox
    //-           input#checkbox-01(type='checkbox', name='options')
    //-           span.vui-checkbox--faux
    //-           span.vui-form-element__label Week of 04/21/16
    //-       fieldset.vui-form-element.vui-m-bottom--large
    //-         label.vui-checkbox
    //-           input#checkbox-01(type='checkbox', name='options')
    //-           span.vui-checkbox--faux
    //-           span.vui-form-element__label Week of 04/21/16
    //-       fieldset.vui-form-element.vui-text-align--center
    //-         button.vui-button.vui-button--brand.vui-button--small Submit

</template>

<script>
  import store from '../store'
  import Icon from './Icon.vue'

  export default {
    components: { Icon },

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
          this.$dispatch('shown::dropdown')
          e.stopPropagation()
        } else {
          this.$dispatch('hidden::dropdown')
        }
      },

      sayHi (month) {
        // this.shown = !this.shown
        console.log('Month Expanded: ', month.expanded)
        month.weeks.forEach((week) => {
          console.log('Week Expanded: ', week.expanded)
        })
      },

      showSelectedWeeks () {
        console.log(this.selectedWeeks)
        this.selectedWeeks.forEach((week) => {
          week.expanded = true
          this.$dispatch('selected::weeks', week)
        })
      },

      breakOutWeek (week) {
      },

      clicked (route) {
        this.show = false
        this.$route.router.go({
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

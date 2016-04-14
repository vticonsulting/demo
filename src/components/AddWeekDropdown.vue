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
        // alert( JSON.stringify(this.selectedWeeks) )
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

<style lang="stylus" scoped>
  .vui-dropdown
    // border 1px solid transparent
    // border 1px solid rgb(106, 37, 101)
    // border-radius 0

  .vui-dropdown,
  .dropdown-menu,
  .vui-nubbin--top:before
  .vui-nubbin--top:after
    // background-color #275f91
    // background-color rgb(106, 37, 101)
    // border 1px solid rgb(106, 37, 101)


</style>

<style lang="sass">

  // @import '../variables'

  // .dropdown
  //   position relative
  //   display inline-block
  //   // margin-right 2rem
  //   padding: 0 .25rem

  //   &.open .dropdown-button
  //     // color $color-ok-text
  //     text-decoration underline
  // .dropdown-button
  //   background none
  //   border none
  //   padding 0
  //   text-dropdown()
  //   transition(all 0.12s linear)
  //   &:focus
  //     outline none
  //   &:hover
  //     // color darken($color-dropdown, 20)
  //     text-decoration underline
  // .open > .dropdown-menu,
  // .open > .dropdown-flyout
  //   display block
  // .open .dropdown-caret
  //   transform rotate(180deg)
  //   display inline-block
  // .dropdown-caret
  //   transition(all 0.1s linear)
  //   margin-left 2px
  //   font-size 12px
  // .dropdown-circle
  //   display inline-block
  //   width $spacing-medium
  //   height $spacing-medium
  //   border-radius $border-radius-large
  //   position relative
  //   border 2px solid $color-border
  //   top 3px
  //   margin-right 2px
  //   &.visible
  //     border 2px solid $color-cta-solid
  //   &.hidden
  //     border 2px solid $color-warning-solid
  //   &.preview
  //     border 2px solid $color-general
  //   &.scheduled
  //     border 2px solid $color-ok-solid
  // .dropdown-menu
  //   color $vui-color-brand-8
  //   position absolute
  //   top 100%
  //   z-index $z-index-dropdown
  //   display none
  //   min-width $size-x-small
  //   margin $spacing-xx-small 0 0
  //   list-style none
  //   border-radius $border-radius-small
  //   padding $spacing-x-small 0
  //   box-shadow 0 0 $spacing-xx-small 0 $color-border
  //   // line-height 2.5
  //   background $white
  //   li
  //     display block
  //     padding 0 $spacing-large
  //     cursor pointer
  //     &:hover
  //       background lighten($color-border, 17)
  //       // background #ccc
  //     span
  //       margin-right $spacing-x-small
  // .dropdown-settings
  //   font-size font-size-large
  //   margin-left 0
  //   line-height 1
  //   position relative
  //   top $spacing-xxx-small
  //   color $color-label
  //   transition(all 0.1s linear)
  //   &:hover
  //     cursor pointer
  //     color $color-ok-solid
  //   .icon-delete
  //     font-size font-size-large
  //     transition(all 0.1s linear)
  //     top $spacing-xxx-small
  //     &:hover
  //       color $color-warning-solid
  // .open .dropdown-settings
  //   color $color-ok-solid
  // .dropdown-flyout
  //   position absolute
  //   top 100%
  //   z-index 1000
  //   display none
  //   width 400px
  //   right -$spacing-large
  //   margin 15px 0 0
  //   border-radius 5px
  //   box-shadow 0px 0px 5px 0px $color-border
  //   background $white
  //   padding $spacing-large
  //   h2
  //     text-menulist()
  //     line-height 1
  //     margin-bottom 1rem
  //   .button
  //     margin-top 0.6rem
  // .dropdown-arrowbefore
  //   top -11px
  //   border-left $spacing-x-small solid transparent
  //   border-right $spacing-x-small solid transparent
  //   border-bottom 10px solid rgba(57, 70, 78, 0.15)
  //   border-style none double solid
  //   display block
  //   position absolute
  //   right $spacing-large
  //   vertical-align middle
  //   content ""
  //   width 0
  //   height 0
  // .dropdown-arrowafter
  //   top -10px
  //   border-left $spacing-x-small solid transparent
  //   border-right $spacing-x-small solid transparent
  //   border-bottom 10px solid $white
  //   border-style none double solid
  //   display block
  //   position absolute
  //   right $spacing-large
  //   vertical-align middle
  //   content ""
  //   width 0
  //   height 0
  // .dropdown-left .dropdown-menu
  //   // right -0.5rem
  //   right 0
  // .dropdown-right .dropdown-menu
  //   left -0.5rem
</style>

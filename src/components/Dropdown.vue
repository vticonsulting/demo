<template lang="jade">
  //- div(:class='{ open: show, dropdown: !dropup, dropup: dropup}')
  //-   button.dropdown-button(aria-expanded='{{show}}', @click='toggle($event)', :disabled='disabled')
  //-     span(v-html='text', v-show='text')
  //-     span.dropdown-caret
  //-       i.icon-down
  //-   ul.dropdown-menu
  //-     li.dropdown-item(@click='clicked("buyers.avails")') Buyers
  //-     li.dropdown-item(@click='clicked("reps.avails")') Reps
  //-     li.dropdown-item(@click='clicked("sellers.orders")') Sellers
  .vui-dropdown-trigger.vui-dropdown-trigger--click(:class='{ "vui-is-open": show, dropdown: !dropup, dropup: dropup}', aria-expanded='{{show}}')
    button.vui-button.vui-not-selected(aria-live='assertive', aria-expanded='{{show}}' aria-haspopup='true', @click='toggle($event)', :disabled='disabled')
      span(v-html='text', v-show='text', style='color: white')
      //- span.vui-text-not-selected
      //-   icon(name='cog')
      //-   span(v-html='text', v-show='text')
      //- span.vui-text-selected
      //-   icon(name='cog')
      //-   span(v-html='text', v-show='text')
      //- span.vui-text-selected-focus
      //-   icon(name='cog')
      //-   span(v-html='text', v-show='text')
    //- button.dropdown-button.vui-button.vui-button--icon-border-filled.vui-button--icon-container(aria-expanded='{{show}}' aria-haspopup='true', @click='toggle($event)', :disabled='disabled')
    //-   //- span(v-html='text', v-show='text')
    //-   svg.vui-button__icon(aria-hidden='true')
    //-     //- use(xlink:href='#icon-cog')
    //-     use(xlink:href='#icon-cog')
    //-   span.vui-assistive-text Settings
    .vui-dropdown(:class='{ "vui-nubbin--top": nubbinTop, "vui-nubbin--top-left": nubbinLeft, "vui-nubbin--top-right": nubbinRight }')
      ul.dropdown-menu.dropdown__list.vui-dropdown__list(role='menu')
        li.dropdown-item.vui-dropdown__item
          a(@click.prevent='clicked("buyers.avails")', role='menuitem')
            p.vui-truncate Buyers
        li.dropdown-item.vui-dropdown__item
          a(@click.prevent='clicked("reps.avails")', role='menuitem')
            p.vui-truncate Reps
        li.dropdown-item.vui-dropdown__item
          a(@click.prevent='clicked("sellers.orders")', role='menuitem')
            p.vui-truncate Sellers
</template>

<script>
  import Icon from './Icon.vue'

  export default {
    components: {Icon},

    props: {
      text: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        show: false,
        nubbinLeft: false,
        nubbinRight: false,
        nubbinTop: true
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

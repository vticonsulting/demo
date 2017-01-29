<template lang="pug">
  .vui-dropdown-trigger.vui-dropdown-trigger--click(:class='{ "vui-is-open": show, dropdown: !dropup, dropup: dropup}', :aria-expanded='show')
    button.vui-button.vui-not-selected(aria-live='assertive', :aria-expanded='show' aria-haspopup='true', @click='toggle', :disabled='disabled')
      span(v-html='text', v-show='text', style='color: white')
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
  export default {
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
          e.stopPropagation()
        } else {
        }
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

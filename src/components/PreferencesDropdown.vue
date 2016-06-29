<template lang="jade">
  .vui-dropdown-trigger.vui-dropdown-trigger--click(:class='{ "vui-is-open": show, dropdown: !dropup, dropup: dropup}', aria-expanded='{{show}}')
    button.vui-button.vui-not-selected(aria-live='assertive', aria-expanded='{{show}}' aria-haspopup='true', @click='toggle($event)', :disabled='disabled')
      span.vui-m-right--xx-small(style='color: white') {{ text }}
      icon(name='caret-down', style='color: #4296b4; margin-right: 0')
    .vui-dropdown(:class='{ "vui-nubbin--top": nubbinTop, "vui-nubbin--top-left": nubbinLeft, "vui-nubbin--top-right": nubbinRight }')
      ul.dropdown-menu.dropdown__list.vui-dropdown__list(role='menu')
        li.dropdown-item.vui-dropdown__item
          a(@click.prevent='clicked("settings")', role='menuitem')
            p.vui-truncate Preferences
        li.dropdown-item.vui-dropdown__item
          a(@click.prevent='clicked("home")', role='menuitem')
            p.vui-truncate Logout
</template>

<script>
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

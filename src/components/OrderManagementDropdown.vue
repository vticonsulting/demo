<template lang="jade">
  .vui-dropdown-trigger.vui-dropdown-trigger--site-nav.vui-dropdown-trigger--click(:class='{ "vui-is-open": show, dropdown: !dropup, dropup: dropup}', aria-expanded='{{show}}')
    a(aria-live='assertive', aria-expanded='{{show}}' aria-haspopup='true', @click.prevent='toggle($event)', :disabled='disabled', v-link-active)
      span.vui-m-right--xx-small(style='color: white') {{ text }}
      icon(name='caret-down', style='color: #4296b4; margin-right: 0')
    .vui-dropdown.vui-dropdown--site-nav
      ul.dropdown-menu.dropdown__list.vui-dropdown__list(role='menu', v-if="sharedState.activeApp == 'sellers'")
        li.dropdown-item.vui-dropdown__item
          a(@click.prevent='clicked("sellers.order-management")', role='menuitem')
            p.vui-truncate Accept/Reject Orders
        li.dropdown-item.vui-dropdown__item
          a(@click.prevent='clicked("sellers.makegoods")', role='menuitem')
            p.vui-truncate Makegoods Dashboard

      ul.dropdown-menu.dropdown__list.vui-dropdown__list(role='menu', v-if="sharedState.activeApp == 'reps'")
        li.dropdown-item.vui-dropdown__item
          a(@click.prevent='clicked("reps.order-management")', role='menuitem')
            p.vui-truncate Accept/Reject Orders
        li.dropdown-item.vui-dropdown__item
          a(@click.prevent='clicked("reps.makegoods")', role='menuitem')
            p.vui-truncate Makegoods Dashboard
</template>

<script>
  import store from '../store'
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
        sharedState: store.state,
        show: false,
        nubbinLeft: false,
        nubbinRight: false,
        nubbinTop: true
      }
    },

    methods: {
      toggle (e) {
        this.$root.$broadcast('menu:toggle')
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
          name: route,
          activeClass: 'vui-active',
          exact: true
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

<template lang="jade">
  .vui-dropdown-trigger.vui-dropdown-trigger--click(:class='{ "vui-is-open": show, dropdown: !dropup, dropup: dropup}', aria-expanded='{{show}}')
    a(aria-live='assertive', aria-expanded='{{show}}' aria-haspopup='true', @click.prevent='toggle($event)', :disabled='disabled', v-link-active)
      span.vui-m-right--xx-small(style='color: white') {{ text }}
      icon(name='caret-down', style='color: #4296b4; margin-right: 0')
    .vui-dropdown
      ul.dropdown-menu.dropdown__list.vui-dropdown__list(role='menu')
        li.dropdown-item.vui-dropdown__item
          a(@click.prevent='clicked("sellers.order-management")', role='menuitem')
            p.vui-truncate Accept/Reject Orders
        li.dropdown-item.vui-dropdown__item
          a(@click.prevent='clicked("sellers.makegoods")', role='menuitem')
            p.vui-truncate Makegoods Dashboard
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

<style lang="stylus" scoped>
  .vui-dropdown
    border 1px solid transparent
    border-radius 0

  .vui-dropdown,
  .dropdown-menu,
  .vui-nubbin--top:before
  .vui-nubbin--top:after
    background-color  #275f91

  .dropdown-menu > li > a
    display block
    border-bottom 0.25rem solid transparent
    border-bottom none
    &:hover
      background-color transparent
      border-bottom 0.25rem solid transparent
      border-bottom none

  .vui-dropdown-trigger .vui-dropdown
    top 90%
    width 13rem

</style>

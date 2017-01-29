<template lang="pug">
  .vui-dropdown-trigger.vui-dropdown-trigger--site-nav.vui-dropdown-trigger--click.dropdown(@closeDropdowns='show = false', :class='{ "vui-is-open": show}', :aria-expanded='show')
    a(aria-live='assertive', :aria-expanded='show', aria-haspopup='true', @click.prevent='toggle', :disabled='disabled', style='margin-right: 0')
      span.vui-m-right--xx-small(style='color: white') {{ text }}
      icon(name='caret-down', style='color: #4296b4; margin-right: 0')
    .vui-dropdown.vui-dropdown--site-nav
      ul.dropdown-menu.dropdown__list.vui-dropdown__list(role='menu', v-if="sharedState.activeApp == 'sellers'")
        li.dropdown-item.vui-dropdown__item
          a(@click.prevent='clicked("sellers.order-management")', role='menuitem')
            p.vui-truncate Pending Orders
        li.dropdown-item.vui-dropdown__item
          a(@click.prevent='clicked("sellers.makegoods")', role='menuitem')
            p.vui-truncate Pending Makegoods
        li.dropdown-item.vui-dropdown__item
          a(@click.prevent='clicked("sellers.makegoods.create")', role='menuitem')
            p.vui-truncate Makegood -- Create
        li.dropdown-item.vui-dropdown__item
          a(@click.prevent='clicked("sellers.makegoods.details")', role='menuitem')
            p.vui-truncate Makegood -- Details (Show)
        li.dropdown-item.vui-dropdown__item
          a(@click.prevent='clicked("sellers.makegoods.add-bonus-offer")', role='menuitem')
            p.vui-truncate Add Bonus Offer
        li.dropdown-item.vui-dropdown__item
          a(@click.prevent='clicked("sellers.open-preempts")', role='menuitem')
            p.vui-truncate Open Pre-Empts
        li.dropdown-item.vui-dropdown__item
          a(@click.prevent='clicked("sellers.active-orders")', role='menuitem')
            p.vui-truncate Order Search

      ul.dropdown-menu.dropdown__list.vui-dropdown__list(role='menu', v-if="sharedState.activeApp == 'reps'")
        li.dropdown-item.vui-dropdown__item
          a(@click.prevent='clicked("reps.order-management")', role='menuitem')
            p.vui-truncate Order Dashboard
        li.dropdown-item.vui-dropdown__item
          a(@click.prevent='clicked("reps.makegoods")', role='menuitem')
            p.vui-truncate Makegood Dashboard
        li.dropdown-item.vui-dropdown__item
          a(@click.prevent='clicked("reps.orders")', role='menuitem')
            p.vui-truncate Order Reporting
</template>

<script>
  import { eventBus } from '../main'

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
      hideDropdown (options) {
        // this.show = false
        // console.log(options)
      },

      toggle (e) {
        this.show = !this.show
        if (this.show) {
          eventBus.$emit('hide-dropdowns', {
            show: this.show
          })
          this.show = true
          e.stopPropagation()
        } else {
          this.show = false
        }
      },

      clicked (route) {
        this.show = false
        this.$router.push({
          name: route,
          activeClass: 'vui-active',
          exact: true
        })
      }
    },

    created () {
      eventBus.$on('hide-dropdowns', this.hideDropdown)
    }
  }
</script>

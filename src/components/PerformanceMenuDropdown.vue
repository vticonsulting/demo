<template lang="pug">
  .vui-dropdown-trigger.vui-dropdown-trigger--site-nav.vui-dropdown-trigger--click(:class='{ "vui-is-open": show }', :aria-expanded='show')
    a(aria-live='assertive', :aria-expanded='show' aria-haspopup='true', @click.prevent='toggle', :disabled='disabled')
      span.vui-m-right--xx-small(style='color: white') {{ text }}
      icon(name='caret-down', style='color: #4296b4; margin-right: 0')
    .vui-dropdown.vui-dropdown--site-nav
      ul.vui-dropdown__list(role='menu')
        li.vui-dropdown__item
          a(@click.prevent='clicked("sellers.performance.account")', role='menuitem')
            p.vui-truncate Account Performance
        li.vui-dropdown__item
          a(@click.prevent='clicked("sellers.performance.station")', role='menuitem')
            p.vui-truncate Station Performance
</template>

<script>
  export default {
    props: {
      caret: {
        type: Boolean,
        default: true
      },
      arrow: {
        type: Boolean,
        default: false
      },
      text: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: 'default'
      },
      variant: {
        type: String,
        default: 'default'
      },
      dropup: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },

    // replace: true,
    data () {
      return {
        show: false,
        nubbinLeft: false,
        nubbinRight: false,
        nubbinTop: true
      }
    },

    computed: {
      btnVariant () {
        return !this.variant || this.variant === 'default' ? 'btn-secondary' : `btn-${this.variant}`
      },
      btnSize () {
        return !this.size || this.size === 'default' ? '' : `btn-${this.size}`
      },
      dropdownToggle () {
        return this.caret ? 'dropdown-toggle' : ''
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


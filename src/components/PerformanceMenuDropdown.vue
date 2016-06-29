<template lang="jade">
  //- div(:class="{ open: show, dropdown: !dropup, dropup: dropup, 'dropdown-arrow': arrow}", v-on:click.prevent='toggle($event)')
  //-   span.btn-action
  //-     button#dLabel.btn(class='{{dropdownToggle}} {{btnVariant}} {{btnSize}}', aria-haspopup='true', aria-expanded='{{show}}', :disabled='disabled', v-if='text')
  //-       span(v-html='text')
  //-       span.caret
  //-     slot(name='button', v-if='!text')
  //-   slot

  .vui-dropdown-trigger.vui-dropdown-trigger--site-nav.vui-dropdown-trigger--click(:class='{ "vui-is-open": show, dropdown: !dropup, dropup: dropup}', aria-expanded='{{show}}')
    a(aria-live='assertive', aria-expanded='{{show}}' aria-haspopup='true', @click.prevent='toggle($event)', :disabled='disabled')
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
  import Icon from './Icon.vue'

  export default {
    components: { Icon },

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


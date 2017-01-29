<template lang="pug">
  nav.vui-site-navigation
    .vui-container.vui-grid.vui-grid--align-spread.vui-grid--vertical-align-center

      ul.vui-grid.vui-grow(v-if='sharedState.activeApp == "sellers"')
        li
          order-management-dropdown(text='Order Management')
        li
          reporting-dropdown(text='Reporting')
        li
          router-link(:to='{ name: "sellers.price-guide" }') Price Guide
        li
          router-link(:to='{ name: "sellers.avails" }') Avails
        li
          router-link(:to='{ name: "sellers.campaign-performance" }') Campaign Performance

      ul.vui-grid.vui-grow(v-if='sharedState.activeApp == "reps"')
        li
          order-management-dropdown(text='Order Management')
        li
          router-link(:to='{ name: "reps.performance" }') Account Performance
        li
          router-link(:to='{ name: "reps.price-guide" }') Price Guide
        li
          router-link(:to='{ name: "reps.avails" }') Avails

      ul.vui-grid.vui-grow(v-if='sharedState.activeApp == "buyers"')
        li
          router-link(:to='{ name: "buyers.avails.request" }') Request Avails
        li
          router-link(:to='{ name: "buyers.avails", exact: true }') Avails

      form.vui-form--compound.vui-align-middle(v-if='sharedState.activeApp == "login"')
        fieldset.vui-form--compound
          .form-element__group
            .vui-form-element__row(style='margin-bottom: 1rem')
              .vui-form-element.vui-size--1-of-3.vui-align-bottom
                label.vui-form-element__label(for='input-01', style='color: white') Username
                .vui-form-element__control.vui-input-has-icon.vui-input-has-icon--left
                  icon.vui-input__icon(name='envelope', style='color: hsla(214, 66%, 34%, 1)')
                  input.vui-input(v-model='sharedState.user.email' type='email', placeholder='john.doe@email.com', style='min-width: 14rem')
              .vui-form-element.vui-size--1-of-3.vui-align-bottom
                label.vui-form-element__label(for='input-01', style='color: white') Password
                .vui-form-element__control.vui-input-has-icon.vui-input-has-icon--left
                  icon.vui-input__icon(name='lock', style='color: hsla(214, 66%, 34%, 1)')
                  input.vui-input(type='password', placeholder='Password', style='min-width: 14rem')
              .vui-form-element.vui-size--1-of-3.vui-align-bottom
                button.vui-button.vui-button--secondary.vui-m-right--x-small(@click.prevent='fakeIt') Login

      ul.actions.vui-align-middle(v-if='sharedState.activeApp == "sellers" || sharedState.activeApp == "reps" || sharedState.activeApp == "buyers"')
        li
          router-link.vui-button.vui-button--brand(tag='button', :to='{ name: "settings.user" }', style='color: white !important; white-space: nowrap')
            icon.vui-m-right--x-small(name='cog')
            | Settings
            span.vui-assistive-text Settings

</template>

<script>
  import store from 'store'
  import PerformanceDropdown from 'components/PerformanceMenuDropdown'
  import OrderManagementDropdown from 'components/OrderManagementDropdown'
  import ReportingDropdown from 'components/ReportingDropdown'

  export default {
    components: { PerformanceDropdown, OrderManagementDropdown, ReportingDropdown },

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
        reps: false,
        sellers: false,
        show: false,
        nubbinLeft: false,
        nubbinRight: false
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
      },

      fakeIt () {
        if (this.sharedState.user.email.toLowerCase().includes('sell')) {
          this.sharedState.user.name = 'Seller User'
          this.$router.push({
            name: 'sellers.orders'
          })
        } else if (this.sharedState.user.email.toLowerCase().includes('buy')) {
          this.sharedState.user.name = 'Buyer User'
          this.$router.push({
            name: 'buyers.avails.request'
          })
        } else if (this.sharedState.user.email.toLowerCase().includes('rep')) {
          this.sharedState.user.name = 'Rep User'
          this.$router.push({
            name: 'reps.avails'
          })
        }
      }
    },

    events: {
      'hide::dropdown' () {
        this.show = false
        return true
      }
    }
  }
</script>

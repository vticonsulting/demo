<template lang="jade">
  nav.vui-site-navigation
    .vui-container.vui-grid.vui-grid--align-spread.vui-grid--vertical-align-center

      ul.vui-grid.vui-grow(v-if="sharedState.activeApp == 'sellers'")
        li
          a(v-link="{ name: 'sellers.orders' }") Orders
        li
          a(v-link="{ name: 'sellers.otri' }") OTRI
        li
          a(v-link="{ name: 'sellers.program-guide' }") Program Guide
        li
          //- a(v-link="{ name: 'sellers.performance.account' }") Account Performance
          //- TODO Need to Highlight the Parent with the 'active' class, when subnav is selected.
          performance-dropdown(text='Performance')
        //- li.vui-dropdown-trigger.vui-dropdown-trigger--click(:class='{ "vui-is-open": show}')
        //-   a(@click='toggle($event)') Performance
        //-   .vui-dropdown.vui-dropdown--left
        //-     ul.vui-dropdown__list
        //-       li.vui-dropdown__item
        //-         a(v-link="{ name: 'sellers.performance.account' }") Account Performance
        //-       li.vui-dropdown__item
        //-         a(v-link="{ name: 'sellers.performance.station' }") Station Performance
        //- li
        //-   a(v-link="{ name: 'sellers.performance.station' }") Station Performance
      ul.vui-grid(v-if="sharedState.activeApp == 'sellers'")
        li
          a(v-link="{ name: 'sellers.price-guide' }") Price Guide
        li
          a(v-link="{ name: 'sellers.avails' }") Avails
        li
          //- a(v-link="{ name: 'sellers.order-management' }") Order Management
          order-management-dropdown(text='Order Management')
        //- li
        //-   a(v-link="{ name: 'sellers.makegoods' }") Makegoods

      ul.vui-grid.vui-grow(v-if="sharedState.activeApp == 'reps'")
        li
          a(v-link="{ name: 'reps.avails' }") Avails
        li
          a(v-link="{ name: 'reps.orders' }") Orders
        li
          a(v-link="{ name: 'reps.performance' }") Performance
      ul.vui-grid(v-if="sharedState.activeApp == 'reps'")
        li
          a(v-link="{ name: 'reps.price-guide' }") Price Guide
        li
          a(v-link="{ name: 'reps.order-management' }") Order Management

      ul.vui-grid.vui-grow(v-if="sharedState.activeApp == 'buyers'")
        li
          a(v-link="{ name: 'buyers.avails.request' }") Request Avails
        li
          a(v-link="{ name: 'buyers.avails', exact: true }") Avails

      form.vui-form--compound.vui-align-middle(v-if="sharedState.activeApp == 'login'")
        fieldset.vui-form--compound
          //- legend.vui-form-element__label Location
          .form-element__group
            .vui-form-element__row
              .vui-form-element.vui-size--1-of-3.vui-align-bottom
                label.vui-form-element__label(for='input-01', style='color: white') Username
                .vui-form-element__control.vui-input-has-icon.vui-input-has-icon--left
                  svg.vui-icon.vui-input__icon(aria-hidden='true', style='color: hsla(214, 66%, 34%, 1)')
                    use(xlink:href='#icon-envelope')
                  input.vui-input(v-model='sharedState.user.email' type='email', placeholder='john.doe@email.com', style='min-width: 14rem')
              .vui-form-element.vui-size--1-of-3.vui-align-bottom
                label.vui-form-element__label(for='input-01', style='color: white') Password
                .vui-form-element__control.vui-input-has-icon.vui-input-has-icon--left
                  svg.vui-icon.vui-input__icon(aria-hidden='true', style='color: hsla(214, 66%, 34%, 1)')
                    use(xlink:href='#icon-lock')
                  input.vui-input(type='password', placeholder='Password', style='min-width: 14rem')
              .vui-form-element.vui-size--1-of-3.vui-align-bottom
                button.vui-button.vui-button--secondary.vui-m-right--x-small(@click.prevent='fakeIt()') Login
              //- button.vui-button.vui-button--secondary(type='button') Login

      //- ul.actions.vui-align-middle(v-if="sharedState.activeApp == 'sellers' || sharedState.activeApp == 'reps' || sharedState.activeApp == 'buyers'")
      //-   li
      //-     button.vui-button.vui-button--brand(v-link="{ name: 'settings' }", style='color: white !important; white-space: nowrap')
      //-       icon.vui-m-right--x-small(name='cog')
      //-       | Settings
      //-       span.vui-assistive-text Settings

</template>

<script>
  import store from '../store'
  import Icon from '../components/Icon.vue'
  import PerformanceDropdown from '../components/PerformanceMenuDropdown.vue'
  import OrderManagementDropdown from '../components/OrderManagementDropdown.vue'

  export default {
    components: { Icon, PerformanceDropdown, OrderManagementDropdown },

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
      },

      fakeIt () {
        if (this.sharedState.user.email.includes('sell')) {
          this.sharedState.user.name = 'Seller User'
          this.$route.router.go({
            name: 'sellers.orders'
          })
        } else if (this.sharedState.user.email.includes('buy')) {
          this.sharedState.user.name = 'Buyer User'
          this.$route.router.go({
            name: 'buyers.avails.request'
          })
        } else if (this.sharedState.user.email.includes('rep')) {
          this.sharedState.user.name = 'Rep User'
          this.$route.router.go({
            name: 'reps.avails'
          })
        }
      }
    },

    events: {
      'hide::dropdown' () {
        this.show = false
      }
    }
  }
</script>

<style lang="stylus">
  @import '../variables'

  .vui-site-navigation
    position relative
    background-color $vui-color-brand-2
    background-color $vui-color-brand-4
    color $white
    margin-bottom $spacing-x-large
    // box-shadow $elevation-shadow-8


    .v-link-active
      color $vui-color-brand-6 !important
      color $vui-color-brand-5 !important
      color $vui-color-brand-2 !important
      color $vui-color-brand-1 !important
      border-top .25rem solid transparent
      border-bottom .25rem solid $vui-color-brand-2
      border-bottom .25rem solid $vui-color-brand-1

    a, &__link
      color $white
      display inline-block
      padding $spacing-medium
      margin-right $spacing-medium
      border-top .25rem solid transparent
      border-bottom .25rem solid transparent
      text-decoration none
      &:hover
        border-bottom .25rem solid $vui-color-brand-2
        border-bottom .25rem solid $vui-color-brand-1
        text-decoration none
        color $vui-color-brand-2
        color $vui-color-brand-1

      &:last-child
        margin-right 0
</style>

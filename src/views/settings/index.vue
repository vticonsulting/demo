<template lang="pug">
  #settings
    page-heading.vui-m-bottom--medium(title='Settings')
    .vui-tabs--scoped
      ul.vui-tabs--scoped__nav(role='tablist')
        router-link.vui-tabs--scoped__item.vui-text-heading--label(:to='{ name: "settings.user" }', tag='li', title='User Settings', role='presentation', active-class='vui-active', exact)
          a#user-settings__item.vui-tabs--scoped__link(role='tab', tabindex='0', aria-selected='true', aria-controls='tab-scoped-1') User Settings

        router-link.vui-tabs--scoped__item.vui-text-heading--label(v-if='sharedState.activeApp == "sellers"', :to='{ name: "settings.display" }', tag='li', title='Display Settings', role='presentation', active-class='vui-active', exact)
          a#display-settings__item.vui-tabs--scoped__link(role='tab', tabindex='-1', aria-selected='false', aria-controls='tab-scoped-2') Display Settings

        router-link.vui-tabs--scoped__item.vui-text-heading--label(v-if='sharedState.activeApp == "sellers"', :to="{ name: 'settings.specials' }", tag='li', title='Sports Specials', role='presentation', active-class='vui-active', exact)
          a#specials-settings__item.vui-tabs--scoped__link(role='tab', tabindex='-1', aria-selected='false', aria-controls='tab-scoped-4') Add A Program

        router-link.vui-tabs--scoped__item.vui-text-heading--label(v-if='sharedState.activeApp == "sellers"', :to='{ name: "settings.reps" }', tag='li', title='Sales Reps', role='presentation', active-class='vui-active', exact)
          a#reps-settings__item.vui-tabs--scoped__link(role='tab', tabindex='-1', aria-selected='false', aria-controls='tab-scoped-5') Sales Reps
    router-view
</template>

<script>
  import store from 'store'

  export default {
    data () {
      return {
        sharedState: store.state,
        newpassword: ''
      }
    },

    validators: {
      confirm (val) {
        return this.newpassword === val
      }
    },

    methods: {
      onKeyup () {
        alert('on keyup')
      },

      onSubmit (e) {
        // validate manually
        this.$validate(true)

        if (this.$validation.invalid) {
          e.preventDefault()
        }
      }
    }
  }
</script>

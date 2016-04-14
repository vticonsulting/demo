<template lang="jade">
  #settings
    page-heading.vui-m-bottom--medium(title='Settings')
    .vui-tabs--scoped
      ul.vui-tabs--scoped__nav(role='tablist')
        li.vui-tabs--scoped__item.vui-text-heading--label.vui-active(title='User Settings', role='presentation', v-link-active)
          a#user-settings__item.vui-tabs--scoped__link(v-link="{ name: 'settings.user', activeClass: 'vui-active', exact: true  }", role='tab', tabindex='0', aria-selected='true', aria-controls='tab-scoped-1') User Settings

        li.vui-tabs--scoped__item.vui-text-heading--label(v-if="sharedState.activeApp == 'sellers'" title='Display Settings', role='presentation', v-link-active)
          a#display-settings__item.vui-tabs--scoped__link(v-link="{ name: 'settings.display', activeClass: 'vui-active', exact: true  }", role='tab', tabindex='-1', aria-selected='false', aria-controls='tab-scoped-2') Display Settings

        li.vui-tabs--scoped__item.vui-text-heading--label(v-if="sharedState.activeApp == 'sellers'" title='Premium Advertisers', role='presentation', v-link-active)
          a#premium-advertisers__item.vui-tabs--scoped__link(v-link="{ name: 'settings.premium-advertisers', activeClass: 'vui-active', exact: true  }", role='tab', tabindex='-1', aria-selected='false', aria-controls='tab-scoped-3') Premium Advertisers

        li.vui-tabs--scoped__item.vui-text-heading--label(v-if="sharedState.activeApp == 'sellers'" title='Sports Specials', role='presentation', v-link-active)
          a#specials-settings__item.vui-tabs--scoped__link(v-link="{ name: 'settings.specials', activeClass: 'vui-active', exact: true  }", role='tab', tabindex='-1', aria-selected='false', aria-controls='tab-scoped-4') Sports and Specials

        li.vui-tabs--scoped__item.vui-text-heading--label(v-if="sharedState.activeApp == 'sellers'" title='Sales Reps', role='presentation', v-link-active)
          a#reps-settings__item.vui-tabs--scoped__link(v-link="{ name: 'settings.reps', activeClass: 'vui-active', exact: true  }", role='tab', tabindex='-1', aria-selected='false', aria-controls='tab-scoped-5') Sales Reps
    router-view
</template>

<script>
  import store from '../../store'
  import PageHeading from '../../components/PageHeading.vue'

  export default {
    components: { PageHeading },

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

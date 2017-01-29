<template lang="jade">
  #app(@click='hideDropdownsAndPopovers')
    site-header
    site-navigation
    main.vui-main(:class='{ "vui-main--login": sharedState.activeApp == "login" }')
      router-view
    site-footer

    // site-help
    .vui-site-help(@click.prevent='showRight = true', style='cursor: pointer')
      a.vui-text-heading--medium(href='#', @click.prevent='', style='font-size: 1em; color: white') Need Help?

    // sidebar
    sidebar(:show.sync='showRight', placement='right', header='Need Help?', :width='750')
      h4.vui-text-heading--large.vui-m-bottom--large Contact Us
      ul.vui-grid.vui-grid--pull-padded.vui-m-bottom--large
        li.vui-grid.vui-grid--align-spread.vui-grid--vertical.vui-col--padded(style='width: 50%')
          .vui-grid.vui-m-bottom--small
            h3.vui-align-middle.vui-text-heading--medium.vui-m-right--small Call Us
            icon.vui-align-middle(name='phone')
          .vui-m-bottom--medium.vui-grow
            p We are available 08:00AM&mdash;11:00PM EST, Monday&mdash;Friday. Customer Service 844-48VIDEA
          .vui-m-bottom--large
            button.vui-button.vui-button--secondary Call Us
        li.vui-grid.vui-grid--align-spread.vui-grid--vertical.vui-col--padded(style='width: 50%')
          .vui-grid.vui-m-bottom--small
            h3.vui-text-heading--medium.vui-align-middle.vui-m-right--small Email Us
            icon.vui-align-middle(name='envelope')
          .vui-m-bottom--medium
            p Technical Support <a href='mailto:support@videa.tv'>support@videa.tv</a>
            p Or, use our email form and we will get back to you within our support hours of 08:00AM&mdash;11:00PM EST, Monday&mdash;Friday
          .vui-m-bottom--large
            button.vui-button.vui-button--secondary Email Us
</template>

<script>
  import store from 'store'
  import { eventBus } from './main'
  import SiteHeader from 'components/SiteHeader'
  import SiteNavigation from 'components/SiteNavigation'
  import SiteFooter from 'components/SiteFooter'
  import SiteHelp from 'components/SiteHelp'

  export default {
    components: { SiteHeader, SiteNavigation, SiteFooter, SiteHelp },

    data () {
      return {
        status: 'success',
        showAlert: false,
        showRight: false,
        sharedState: store.state
      }
    },

    methods: {
      hideDropdownsAndPopovers (event) {
        eventBus.$emit('hide-dropdowns', {
          status: this.status
        })
      }
    }
  }
</script>

<style>
  .mg-offer-spots th:not(.spot-allocation-column),
  .mg-preempts th:not(.spot-allocation-column),
  .mg-missed-spots th:not(.spot-allocation-column),
  .mg-program-name-change th:not(.spot-allocation-column) {
      padding: 1px 4px;
      font-size: 13px;
  }

  .mg-offer-spots th,
  .mg-preempts th,
  .mg-missed-spots th,
  .mg-program-name-change th {
      font-size: 13px;
  }

  .mg-offer-spots td input,
  .mg-offer-spots td select,
  .mg-preempts td input,
  .mg-preempts td select {
      width: 100%;
      height: 100%;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }

  /* Days dropdown selector */
  .days-dropdown-selector .input {
      position: relative;
  }

      .days-dropdown-selector .input i {
          position: absolute;
          top: 8px;
          right: 6px;
      }

  .dropdown-menu-timeframe {
      min-width: 8rem;
      -webkit-transform: translate(-1rem, -120%);
      transform: translate(-1rem, -120%);
  }

      .dropdown-menu-timeframe.vui-nubbin--bottom:before {
          z-index: -1;
      }

      .dropdown-menu-timeframe li {
          line-height: 1rem;
          padding: 0.25rem 0.5rem;
      }

          .dropdown-menu-timeframe li .checkbox {
              display: block;
          }

  /* Time dropdown-selector */
  .time-dropdown-selector .dropdown {
      padding: 0;
  }

      .time-dropdown-selector .dropdown input {
          background: none;
      }

      .time-dropdown-selector .dropdown div i {
          position: absolute;
          top: 4px;
          right: 0;
      }

  .time-dropdown.vui-dropdown {
      min-width: 7rem;
      -webkit-transform: translateX(-14%);
      transform: translateX(-14%);
  }

  .time-dropdown.vui-nubbin--bottom:before {
      z-index: -1;
  }

  .time-dropdown li {
      padding: 0.25rem 0.5rem;
      line-height: 1rem;
  }

      .time-dropdown li a {
          display: block;
          font-size: 1rem;
      }

  /* Angular-resizable Customization */
  .resizable {
      min-width: 25px;
      min-height: 25px;
      padding-right: 3px;
      padding-bottom: 3px;
  }

      .resizable textarea {
          width: 100%;
          height: 100%;
          resize: none;
      }

  .rg-bottom {
      margin-bottom: -3px;
  }

  .rg-right {
      margin-right: -3px;
  }

  /* Old Custom Checkboxes */
  .checkbox {
      display: inline-block;
      padding-left: 0;
      margin: 0;
  }

  .vui-checkbox label {
      display: inline;
      padding-left: 5px;
  }

  .vui-checkbox input[type="checkbox"] {
      display: none;
  }

  .vui-checkbox-unchecked,
  .vui-checkbox-checked {
      display: inline-block;
      padding-left: 2px;
      padding-right: 3px;
      font-size: 12px;
      color: #ffffff;
      background-color: #ffffff;
      border: solid 1px #ccc;
      -webkit-border-radius: 2px;
      -moz-border-radius: 2px;
      -ms-border-radius: 2px;
      border-radius: 2px;
  }

  .disabled label {
      color: rgba(82, 84, 93, 0.6);
      cursor: not-allowed !important;
  }

  .disabled .vui-checkbox-checked,
  .disabled .vui-checkbox-unchecked {
      color: #51545D;
      border: solid 1px rgba(82, 84, 93, 0.14902);
      background-color: rgba(82, 84, 93, 0.14902);
      cursor: not-allowed !important;
  }

  .vui-checkbox-checked {
      display: none;
      color: #000000;
      background-color: #ffffff;
  }

  .checked .vui-checkbox-checked {
      display: inline-block;
  }

  .checked .vui-checkbox-unchecked {
      display: none;
  }

  .checkbox .icons .vui-checkbox-unchecked i {
      color: #fff;
  }

  .vui-time {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
  }

      .vui-time .vui-input {
          width: 80px;
      }

      .vui-time input {
          border: none;
          width: 22px;
          padding: 0;
          margin: 0;
          text-align: center;
          height: 100%;
          line-height: 100%;
      }

      .vui-time select {
          width: 65px;
      }

      .vui-time input:focus {
          color: #000;
          border: none;
          animation: blinker 1s linear infinite;
      }

      .vui-time input::selection {
          background: none;
      }

      .vui-time > span {
          display: none;
      }

  .on-invalid {
      border: solid 2px #C5203E !important;
  }
</style>

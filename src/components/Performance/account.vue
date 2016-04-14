<template lang="jade">
  .account-performance-view
    page-heading.vui-m-bottom--medium(title='Account Performance')
    panel.vui-m-bottom--large(title='View Selection Panel')
      form.vui-form--inline(action='')
        label.vui-radio(for='q1')
          input#q1(type='radio', name='when')
          span.vui-radio--faux.vui-m-right--x-small
          span.vui-form-element__label Q1
        label.vui-radio(for='q2')
          input#q2(type='radio', name='when', checked='true')
          span.vui-radio--faux.vui-m-right--x-small
          span.vui-form-element__label Q2
        label.vui-radio(for='q3')
          input#q3(type='radio', name='when')
          span.vui-radio--faux.vui-m-right--x-small
          span.vui-form-element__label Q3
        label.vui-radio(for='q4')
          input#q4(type='radio', name='when')
          span.vui-radio--faux.vui-m-right--x-small
          span.vui-form-element__label Q4
        label.vui-radio.vui-m-right--large(for='all')
          input#all(type='radio', name='when')
          span.vui-radio--faux.vui-m-right--x-small
          span.vui-form-element__label All
        .vui-form-element__control
          .vui-select_container
            select.vui-select(name='', id='')
              option(value='') 2013
              option(value='') 2014
              option(value='') 2015
              option(value='', selected='true') 2016

    .vui-grid.vui-p-around--small(style='background-color: white')
      //- .vui-text-align--center.vui-box.vui-theme--shade.vui-m-right--medium
      //-   span Station Audience Share
      //-   span.vui-text {{ settings.stationAudienceShare | decimalToPercent }}

      .vui-media
        .vui-media__body
          p.vui-align-middle
            span.vui-m-right--xx-small Station Audience Share
            span.vui-text-heading--medium {{ settings.stationAudienceShare | decimalToPercent }}

    .vui-scrollable--x
      table.vui-table.vui-table--custom-1.vui-no-row-hover
        thead
          tr
            th.vui-text-align--center.u-width-x-small Order Count
            th Advertiser
            th Agency
            th.u-width-x-small Revenue
            th.vui-text-align--right.u-width-x-small Buyer Market Budget
            th.vui-text-align--center.u-width-x-small Spot Volume
            th.u-width-x-small Share
        tfoot
          tr
            td.vui-text-align--right(colspan='3') Total
            td.vui-text-align--right {{ totalRevenueTy | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ totalMarketRevenueTy | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ totalSpotVolumeTy | numberWithCommas }}
            td
        tbody
          tr(v-for='account in accounts', :class='($index % 2 === 0) ? "vui-highlight" : ""')
            td.vui-text-align--center {{ account.orderCount }}
            td
              a(href='#', @click.prevent="showAccountDetail(account)") {{ account.advertiser }}
            td {{ account.agency }}
            td.vui-text-align--right {{ account.revenueTy | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ account.marketRevenueTy | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ account.spotVolumeTy }}
            td.vui-text-align--right {{ account.shareTy | decimalToPercent }}
    account-detail-modal(:show.sync="showAccountDetailModal", :account='selectedAccount')
</template>

<script>
  import store from '../../store'
  import Alert from '../Alert.vue'
  import PageHeading from '../PageHeading.vue'
  import Panel from '../Panel.vue'
  import AccountDetailModal from '../AccountDetailModal.vue'

  export default {
    components: { Alert, PageHeading, Panel, AccountDetailModal },

    data () {
      return {
        sharedState: store.state,
        settings: store.state.settings,
        showAccountDetailModal: false,
        selectedAccount: {
          id: 1,
          advertiser: '',
          orders: [
            {
              id: 1,
              start: '',
              end: '',
              revenue: 0,
              share: 0
            }
          ]
        },
        accountPerformance: {},
        accounts: []
      }
    },

    computed: {
      totalRevenueTy () {
        // return this.accountPerformance.rows
        return this.accounts.reduce((total, account) => {
          return total + account.revenueTy
        }, 0)
      },

      totalMarketRevenueTy () {
        // return this.accountPerformance.rows
        return this.accounts.reduce((total, account) => {
          return total + account.marketRevenueTy
        }, 0)
      },

      totalSpotVolumeTy () {
        // return this.accountPerformance.rows
        return this.accounts.reduce((total, account) => {
          return total + account.spotVolumeTy
        }, 0)
      }
    },

    methods: {
      fetchAccountPerformance () {
        this.$http.get(store.apiHost + '/accountPerformance')
          .then((response) => {
            this.accountPerformance = response.data
          }, (response) => {
            // error callback
          })
      },

      fetchAccounts () {
        this.$http.get(store.apiHost + '/accounts')
          .then((response) => {
            this.accounts = response.data
          }, (response) => {
            // error callback
          })
      },

      showAccountDetail (account) {
        this.showAccountDetailModal = true
        this.selectedAccount = account
      }
    },

    created () {
      this.fetchAccountPerformance()
      this.fetchAccounts()
    }
  }
</script>

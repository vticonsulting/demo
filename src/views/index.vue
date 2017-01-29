<template id="home" lang="pug">
  .home-view
    .vui-box.vui-m-top--large.vui-theme--default
      ul
        li(v-for='page in pages')
          router-link(:to='{ name: page.name }', v-text='page.label')

</template>

<script>
  import store from 'store'

  export default {

    data () {
      return {
        sharedState: store.state,
        components: [
        ],
        templates: [
          { login: '' }
        ],
        pages: [
          { name: 'sellers.avails', label: 'Avails' },
          { name: 'sellers.campaign-performance', label: 'Campaign Performance' },
          { name: 'sellers.order-management', label: 'Order Management -- Order Dashboard', menu: 'Order Management / Pending Orders' },
          { name: 'sellers.active-orders', label: 'Order Management -- Active Orders Dashboard', menu: 'Order Management / Order Search' },
          { name: 'sellers.open-preempts', label: 'Order Management -- Open Pre-empts', menu: 'Open Pre-Empts' },
          { name: 'sellers.makegoods', label: 'Order Management -- Makegoods -- Makegood Dashboard', menu: 'Pending Makegoods' },
          { name: 'sellers.makegoods.create', label: 'Order Management -- Makegoods -- Create' },
          { name: 'sellers.makegoods.details', label: 'Order Management -- Makegoods -- Details' },
          { name: 'sellers.makegoods.add-bonus-offer', label: 'Order Management -- Makegoods -- Add Bonus Offer' },
          { name: 'sellers.makegoods.add-credit-offer', label: 'Order Management -- Makegoods -- Add Credit Offer' },
          { name: 'sellers.makegoods.add-makegood-offer', label: 'Order Management -- Makegoods -- Add Makegood Offer' },
          { name: 'sellers.makegoods.add-preempt-offer', label: 'Order Management -- Makegoods -- Add Preempt Offer' },
          { name: 'sellers.makegoods.add-program-change-offer', label: 'Order Management -- Makegoods -- Add Program Change Offer' },
          { name: 'sellers.price-guide', label: 'Price Guide' },
          { name: 'sellers.performance.account', label: 'Reporting -- Account Performance' },
          { name: 'sellers.orders', label: 'Reporting -- Orders Summary', menu: 'Reporting / Order Reporting' },
          { name: 'sellers.program-revenue', label: 'Reporting -- Program Revenue', menu: 'Program Revenue' }
        ]
      }
    },

    created () {
      this.sharedState.activeApp = 'login'
    }

  }
</script>

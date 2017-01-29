<template lang="pug">
  .vui-container.vui-grid.vui-grid--align-spread.vui-grid--vertical-align-center
      ul.vui-grid.vui-grow
        li
          router-link(
            v-bind:to = '{ name: "buyers-avails-request" }'
            exact
          ) Request Avails
        li
          router-link(
            v-bind:to = '{ name: "buyers-avails" }'
            exact
          ) Avails
      ul.actions.vui-align-middle
        li
          button-link(
            text = 'Settings'
            icon = 'cog'
          )
</template>

<script>
  export default {
    data () {
      return {
        orderManagementMenuItems: [
          { name: 'Pending Orders', route: 'sellers-order-management-pending-orders' },
          { name: 'Pending Makegoods', route: 'sellers-order-management-pending-makegoods' },
          { name: 'Open Pre-Empts', route: 'sellers-order-management-open-preempts' },
          { name: 'Order Search', route: 'sellers-order-management-order-search' }
        ],
        reportingMenuItems: [
          { name: 'Account Performance', route: 'sellers-reporting-account-performance' },
          { name: 'Program Revenue', route: 'sellers-reporting-program-revenue' },
          { name: 'Order Reporting', route: 'sellers-reporting-order-reporting' }
        ]
      }
    }
  }
</script>

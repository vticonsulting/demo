<template lang="pug">
  table.vui-table.vui-no-row-hover.vui-table--striped
    thead
      tr
        th(style='width: 56px'): vui-sorting-column(title='Request Type')
        th(style='width: 100px'): vui-sorting-column(title='Status')
        th(style='width: 100px'): vui-sorting-column(title='User')
        th(style='width: 70px'): vui-sorting-column(title='Date/Time')
        th(style='width: 70px'): vui-sorting-column(title='Iteration')
        th(style='width: 105px'): vui-sorting-column(title='Version')
    tbody
      tr(v-for='item in items' v-show='!item.delivered || item.delivered == showDelivered')
        td {{item.requestType}}
        td {{item.status}}
        td {{item.user}}
        td {{item.dateTime}}
        td.vui-text-align--right {{item.iteration}}
        td.vui-text-align--right {{item.version}}
</template>

<script>
  export default {
    props: {
      showDelivered: Boolean
    },
    data () {
      return {
        items: [
          {
            delivered: true,
            requestType: 'Original',
            status: 'DARE In',
            user: 'Jessica Bond',
            dateTime: '04/21/2017 02:32 PM',
            iteration: 1,
            version: 1
          },
          {
            delivered: false,
            requestType: 'Original',
            status: 'Buyer Status -- Accepted',
            user: 'Brian Reed',
            dateTime: '04/21/2017 02:32 PM',
            iteration: 1,
            version: 1
          },
          {
            delivered: false,
            requestType: 'Original',
            status: 'Seller Status -- New',
            user: 'Brian Reed',
            dateTime: '04/21/2017 02:32 PM',
            iteration: 1,
            version: 1
          },
          {
            delivered: true,
            requestType: 'Original',
            status: 'DARE Out',
            user: 'Brian Reed',
            dateTime: '04/21/2017 02:32 PM',
            iteration: 1,
            version: 1
          },
          {
            delivered: false,
            requestType: 'Original',
            status: 'Email -- Order Sent To Station',
            user: 'Brian Reed',
            dateTime: '04/21/2017 02:32 PM',
            iteration: 1,
            version: 1
          },
          {
            delivered: true,
            requestType: 'Original',
            status: 'DARE Out',
            user: 'Brian Reed',
            dateTime: '04/21/2017 02:32 PM',
            iteration: 1,
            version: 1
          },
          {
            delivered: false,
            requestType: 'Original',
            status: 'Buyer Status -- Confirmed',
            user: 'Brian Reed',
            dateTime: '04/21/2017 02:32 PM',
            iteration: 1,
            version: 1
          },
          {
            delivered: false,
            requestType: 'Original',
            status: 'Seller Status -- Confirmed',
            user: 'Brian Reed',
            dateTime: '04/21/2017 02:32 PM',
            iteration: 1,
            version: 1
          },
          {
            delivered: false,
            requestType: 'Original',
            status: 'Email -- ORder Confirmed To Station',
            user: 'Brian Reed',
            dateTime: '04/21/2017 02:32 PM',
            iteration: 1,
            version: 1
          },
          {
            delivered: true,
            requestType: 'Original',
            status: 'DARE In',
            user: 'Brian Reed',
            dateTime: '04/21/2017 02:32 PM',
            iteration: 1,
            version: 1
          }
        ]
      }
    },
    computed: {
      filteredItems () {
        return this.items.filter((item) => {
          return this.showDelivered == item.delivered || item
        })
      }
    }
  }
</script>


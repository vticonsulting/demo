<template lang="jade">
  .otri-view
    page-heading.vui-m-bottom--medium(title='On Track Ratings Indicator')

    panel.vui-m-bottom--large(title='View Selection')
      form.vui-grid.vui-grid--vertical-align-end(action='')

        //- label.vui-m-right--x-small(for='startDate') Flight Date Range

        fieldset.vui-form-element
          label.vui-form-element__label Flight Start Date
          .vui-form-element__control.vui-m-right--small
            datepicker#startDate(:value.sync='startDate', name='startDate')

        fieldset.vui-form-element
          label.vui-form-element__label Flight End Date
          .vui-form-element__control.vui-m-right--small
            datepicker#endDate(:value.sync='endDate', name='endDate')

        fieldset.vui-form-element
          button.vui-button.vui-button--brand Search

    data-grid-heading.vui-m-bottom--medium
    .vui-scrollable--x.vui-m-bottom--medium
      table.vui-table.vui-no-row-hover
        thead
          tr
            th(rowspan='2') Advertiser
            th(rowspan='2') Agency
            th(rowspan='2') CPE
            th.u-width-xx-small(rowspan='2') Start
            th.u-width-xx-small(rowspan='2') End
            th(colspan='4') Current
            th(colspan='4') Purchased
          tr
            th.u-width-xx-small(style='padding-left: 0.5rem') Expected<br>Delivery %
            th.u-width-xx-small
              | Current<br>GRPs
              sup 1
            th.u-width-xx-small.vui-text-align--center Weeks<br>Remaining
            th.u-width-xx-small.vui-text-align--center Spots<br>Run
            th.u-width-xx-small
              | Total GRPs<br>Purchased
              sup 1
            th
              | Pacing<br>GRPs
              sup 1
            th.u-width-xx-small.vui-text-align--center Spots<br>Ordered
            th.u-width-xx-small Revenue
        tbody
          tr(v-for='(index, item) in otriCollection', :class='(index % 2 === 1) ? "vui-highlight" : ""')
            td {{ item.advertiser }}
            td {{ item.agency }}
            td {{ item.campaignName  }}
            td {{ item.flightStartDate }}
            td {{ item.flightEndDate }}
            td
              .vui-grid.vui-grid--align-spread

                //- icon(:name='getName(item.pacingToPostPercentage)', style='transform: rotate(45deg);', :style='{color: getColor(item.pacingToPostPercentage)}')

                span.vui-align-middle.vui-badge(style='width: 1rem;height: 1rem', :class='getBadge(item.pacingToPostPercentage)') &nbsp;
                span {{ item.pacingToPostPercentage | decimalToPercent }}
            td.vui-text-align--right {{ item.currentGrps | formatRating | numberWithCommas  }}
            td.vui-text-align--right {{ item.weeksRemaining  }}
            td.vui-text-align--right {{ item.spotsRun  }}
            td.vui-text-align--right {{ item.totalGrpsPurchased  }}
            td.vui-text-align--right {{ item.pacingGrps | formatRating }}
            td.vui-text-align--right {{ item.spotsOrdered  }}
            td.vui-text-align--right {{ item.revenue | numberWithCommas | formatMoney }}
    p.vui-text-body--small
      sup.vui-m-right--xx-small 1
      span Nielsen source or data derived from Nielsen
</template>

<script>
  import store from '../../../store'
  import DataGridHeading from '../../../components/DataGridHeading.vue'
  import Icon from '../../../components/Icon.vue'
  import Datepicker from '../../../components/Datepicker2.vue'
  import Panel from '../../../components/Panel.vue'
  import PageHeading from '../../../components/PageHeading.vue'

  export default {
    components: { DataGridHeading, Datepicker, Panel, PageHeading, Icon },

    created () {
      this.fetchOtri()
      this.sharedState.activeApp = 'sellers'
    },

    data () {
      return {
        sharedState: store.state,
        sortKey: '',
        sortOrder: 1,
        searchKey: '',
        reverse: false,
        startDate: new Date('2016-04-28T12:24:00'),
        endDate: new Date('2016-06-26T03:24:00'),
        columns: [
          { name: 'advertiser' },
          { name: 'agency' },
          { name: 'campaign' },
          { name: 'flightStartDate' },
          { name: 'flightEndDate' },
          { name: 'revenue' },
          { name: 'share' },
          { name: 'orderId' },
          { name: 'orderDate' }
        ],
        otriCollection: []
      }
    },

    methods: {
      fetchOtri () {
        this.$http.get(store.apiHost + '/otriCollection')
          .then((response) => {
            this.otriCollection = response.data
          }, (response) => {
            // error callback
          })
      },

      getBadge (percent) {
        if (percent >= 0.96) return 'ahead'
        if (percent >= 0.87) return 'on-track'
        return 'behind'
      },

      getName (percent) {
        if (percent >= 0.96) return 'arrow-left'
        if (percent >= 0.87) return 'dot-circle-o'
        return 'arrow-right'
      },

      getColor (percent) {
        if (percent >= 0.96) return 'hsla(153, 94%, 27%, 1)'
        if (percent >= 0.87) return 'hsla(33, 100%, 68%, 1)'
        return 'hsla(2, 58%, 48%, 1)'
      },

      toggleDetail (order) {
        order.expanded = !order.expanded
      },

      sortBy (sortKey) {
        this.sortOrder = (this.sortKey === sortKey) ? this.sortOrder * -1 : 1
        this.sortKey = sortKey
      }
    }
  }
</script>

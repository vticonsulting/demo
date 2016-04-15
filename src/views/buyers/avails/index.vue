<template lang="jade">
  #avails
    .vui-scrollable--x.vui-m-bottom--large
      .vui-grid.vui-grid--align-spread.vui-m-bottom--medium
        h1.vui-text-heading--large Avails
        button.vui-button.vui-button--secondary(v-link="{ name: 'buyers.avails.request' }") Request New Avail

      panel.vui-m-bottom--large(title='Search')
        form.vui-form--inline(action='')
          .vui-form-element__control.vui-m-right--small
            .vui-select_container
              select.vui-select(id='')
                option Client...
                option Community Loans, LLC
                option Metro Wireless
                option Papa John's Pizza
                option Piedmont Healthcare
                option Southeast Ford
                option Sun Valley Bank
          .vui-form-element__control.vui-m-right--small
            .vui-select_container
              select.vui-select(id='')
                option Product...
          .vui-form-element
            input.vui-input(placeholder='Estimate', style='width: 8rem')
          //- .vui-form-element
          //-   input.vui-input(placeholder='Campaign Name', style='width: 9rem')
          .vui-form-element__control.vui-m-right--small
            .vui-select_container
              select.vui-select(id='')
                option Market...
                option Tulsa
          .vui-form-element__control.vui-m-right--small
            .vui-select_container
              select.vui-select(id='')
                option Station...
                option WVVV

          .vui-form-element__control.vui-m-right--small
            datepicker#startDate(:value.sync='startDate', name='startDate')

          .vui-form-element__control.vui-m-right--small
            datepicker#endDate(:value.sync='endDate', name='endDate')
          //- .vui-form-element
          //-   input.vui-input(type='date', value='2015-09-28', placeholder='Expiration Date')
          .vui-form-element__control.vui-m-right--small
            .vui-select_container
              select.vui-select(id='')
                option Status
          button.vui-button.vui-button--brand.vui-m-right--x-small Search
      table.vui-table.vui-no-row-hover
        thead
          tr
            th Duplicate
            th
              a.vui-grid.vui-grid--align-spread(@click.prevent='', href='#')
                span.vui-align-middle Status
                span.vui-align-middle
                  icon(name='sort', style='color: hsla(192, 9%, 89%, .5)')
            th
              a.vui-grid.vui-grid--align-spread(@click.prevent='', href='#')
                span.vui-align-middle Client
                span.vui-align-middle
                  icon(name='sort', style='color: hsla(192, 9%, 89%, .5)')
            th
              a.vui-grid.vui-grid--align-spread(@click.prevent='', href='#')
                span.vui-align-middle Product
                span.vui-align-middle
                  icon(name='sort', style='color: hsla(192, 9%, 89%, .5)')
            th
               a.vui-grid.vui-grid--align-spread(@click.prevent='', href='#')
                 span.vui-align-middle Estimate
                 span.vui-align-middle
                   icon(name='sort', style='color: hsla(192, 9%, 89%, .5)')
            th
              a.vui-grid.vui-grid--align-spread(@click.prevent='', href='#')
                span.vui-align-middle Campaign Name
                span.vui-align-middle
                  icon(name='sort', style='color: hsla(192, 9%, 89%, .5)')
            th
              a.vui-grid.vui-grid--align-spread(@click.prevent='', href='#')
                span.vui-align-middle Market
                span.vui-align-middle
                  icon(name='sort', style='color: hsla(192, 9%, 89%, .5)')
            th
              a.vui-grid.vui-grid--align-spread(@click.prevent='', href='#')
                span.vui-align-middle Station
                span.vui-align-middle
                  icon(name='sort', style='color: hsla(192, 9%, 89%, .5)')
            th
              a.vui-grid.vui-grid--align-spread(@click.prevent='', href='#')
                span.vui-align-middle Start
                span.vui-align-middle
                  icon(name='sort', style='color: hsla(192, 9%, 89%, .5)')
            th
              a.vui-grid.vui-grid--align-spread(@click.prevent='', href='#')
                span.vui-align-middle End
                span.vui-align-middle
                  icon(name='sort', style='color: hsla(192, 9%, 89%, .5)')
            th
              a.vui-grid.vui-grid--align-spread(@click.prevent='', href='#')
                span.vui-align-middle Expiration
                span.vui-align-middle
                  icon(name='sort', style='color: hsla(192, 9%, 89%, .5)')
        tbody
          tr(v-for='(index, avail) in avails', :class='(index % 2 === 0) ? "vui-highlight" : ""')
            td.vui-text-align--center
              a(@click.prevent='duplicate == true', href='#')
                icon(name='copy')
            td
              span.vui-badge(:class='avail.status')  {{avail.status}}
            td {{ avail.advertiser }}
            td {{ avail.product }}
            td {{ avail.estimateNumber }}
            td {{ avail.campaignName }}
            td {{ avail.market }}
            td {{ avail.station }}
            td {{ avail.flightStartDate }}
            td {{ avail.flightEndDate }}
            td {{ avail.expirationDate }}
</template>

<script>
  import store from '../../../store'
  import Datepicker from '../../../components/Datepicker2.vue'
  import PageHeading from '../../../components/PageHeading.vue'
  import Panel from '../../../components/Panel.vue'
  import Icon from '../../../components/Icon.vue'

  export default {
    components: {
      Datepicker,
      PageHeading,
      Panel,
      Icon
    },

    data () {
      return {
        sharedState: store.state,
        startDate: new Date('2015-09-28T03:24:00'),
        endDate: new Date('2016-03-27T03:24:00'),
        avails: []
      }
    },

    created () {
      this.fetchAvails()
      this.sharedState.activeApp = 'buyers'
    },

    methods: {
      fetchAvails () {
        this.$http.get(store.apiHost + '/avails')
          .then((response) => {
            this.avails = response.data
          }, (response) => {
            // error callback
          })
      }
    }
  }
</script>

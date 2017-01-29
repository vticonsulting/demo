<template lang="pug">
  #avails
    .vui-scrollable--x.vui-m-bottom--large
      .vui-grid.vui-grid--align-spread.vui-m-bottom--medium
        h1.vui-text-heading--large Avails
        router-link.vui-button.vui-button--secondary(tag='button', :to='{ name: "buyers.avails.request" }') Request New Avail

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
            datepicker#startDate(:value='startDate', name='startDate')

          .vui-form-element__control.vui-m-right--small
            datepicker#endDate(:value='endDate', name='endDate')

          .vui-form-element__control.vui-m-right--small
            .vui-select_container
              select.vui-select(id='')
                option Status
          button.vui-button.vui-button--brand.vui-m-right--x-small(@click.prevent='') Search
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
          tr(v-for='(avail, index) in avails', :class='(index % 2 === 0) ? "vui-highlight" : ""')
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
            td {{ (avail.id == 65733 ) ? expirationDate : avail.expirationDate | formatDate }}
</template>

<script>
  import store from 'store'
  import moment from 'moment'

  export default {
    data () {
      return {
        expirationDate: new Date(moment().add(14, 'days').toISOString()),
        sharedState: store.state,
        startDate: new Date('2016-12-26T03:24:00'),
        endDate: new Date('2017-03-26T03:24:00'),
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

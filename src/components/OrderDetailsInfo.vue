<template lang="pug">
  .order-details-info(order-info='orderInfo')
    a.vui-text-link--reset(href='javascript:void(0)', @click.prevent='infoClicked')
      .vui-box.vui-theme--default(style='padding: 0.25rem 1rem')
        .vui-grid.vui-grid--vertical-align-center
          icon(v-if='!shouldShowInfo', name='carat-down', style='color:#0177a2')
          .vui-col.vui-m-right--medium
            label.vui-form-element__label Status
            br
            span(ng-bind='orderInfo.buyerStatusName') Confirmed
          .vui-col.vui-m-right--medium
            label.vui-form-element__label Advertiser
            br
            span(ng-bind='orderInfo.advertiserName') GENERAL MILLS INC
          .vui-col.vui-m-right--medium
            label.vui-form-element__label Station
            br
            span(ng-bind='orderInfo.stationCallLetters') KOKI
          .vui-col.vui-m-right--medium
            label.vui-form-element__label C/P/E
            br
            span(ng-bind='orderInfo.cpe') G1M/TYP/012
          .vui-col.vui-m-right--medium
            label.vui-form-element__label Start Date
            br
            span(ng-bind='orderInfo.startDate|vuiDate') 06/27/2016
          .vui-col.vui-m-right--medium
            label.vui-form-element__label End Date
            br
            span(ng-bind='orderInfo.endDate|vuiDate') 09/25/2016
          .vui-col.vui-m-right--medium
            label.vui-form-element__label Agency Order #
            br
            span(ng-bind='orderInfo.agencyOrderNumber') 04306486
          .vui-col.vui-m-right--medium
            label.vui-form-element__label Videa Order #
            br
            span(ng-bind='orderInfo.videaOrderNumber') V0005057
          .vui-col.vui-m-right--medium
            label.vui-form-element__label Version
            br
            span(ng-bind='orderInfo.buyerVersion') 1
          .vui-col.vui-m-right--medium
            label.vui-form-element__label Station Order #
            br
            span(ng-bind='orderInfo.stationOrderId') 133925
    .vui-box(style='margin-top: -1px;background: #f0f8fc', v-show='!shouldShowInfo')
      .vui-grid
        .vui-col.vui-p-horizontal--medium
          fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
            label.vui-form-element__label Product
            .vui-form-element__control
              span.vui-form-element__static(v-text='orderInfo.productName')
          fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
            label.vui-form-element__label Campaign Name
            .vui-form-element__control
              span.vui-form-element__static(v-text='orderInfo.campaignName')
          fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
            label.vui-form-element__label Deal type
            .vui-form-element__control
              span.vui-form-element__static(v-text='orderInfo.dealType')
        .vui-col.vui-p-horizontal--medium
          fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
            label.vui-form-element__label Agency Name
            .vui-form-element__control
              span.vui-form-element__static(v-text='orderInfo.agencyName')
          fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
            label.vui-form-element__label Buyer Name
            .vui-form-element__control
              span.vui-form-element__static(v-text='orderInfo.buyerName')
          fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
            label.vui-form-element__label Schedule type
            .vui-form-element__control
              span.vui-form-element__static(v-text='orderInfo.scheduleType')
        .vui-col.vui-p-horizontal--medium
          fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
            label.vui-form-element__label Demo
            .vui-form-element__control
              span.vui-form-element__static(v-text='orderInfo.demo')
          fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
            label.vui-form-element__label Estimate
            .vui-form-element__control
              span.vui-form-element__static(v-text='orderInfo.estimate')
          fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
            label.vui-form-element__label Rep Name
            .vui-form-element__control
              span.vui-form-element__static(v-text='orderInfo.repName')
        .vui-col.vui-p-horizontal--medium
          fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large(v-if='!isImpressionsBuyType')
            label.vui-form-element__label Total GRPs
            .vui-form-element__control
              span.vui-form-element__static(ng-bind='orderInfo.totalGuaranteeRating')
          fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
            label.vui-form-element__label Total Spots
            .vui-form-element__control
              span.vui-form-element__static(ng-bind='orderInfo.totalSpotsQuantity')
          fieldset.vui-form-element.vui-m-bottom--small.vui-m-right--large
            label.vui-form-element__label Total $$$
            .vui-form-element__control
              span.vui-form-element__static(ng-bind='orderInfo.totalCost')
        .vui-col.vui-p-horizontal--medium
          fieldset.vui-form-element.vui-m-bottom--small(v-if='!isMakegoodDefined')
            label.vui-form-element__label.black-text.disabled Buyer Avail Request Notes
            .vui-form-element__control
              resizable-textarea(text='orderInfo.buyerAvailRequestNotes', initial-height='60', is-readonly='true', title='')
          fieldset.vui-form-element.vui-m-bottom--small
            label.vui-form-element__label.black-text.disabled Buyer Order Comment
            .vui-form-element__control
              resizable-textarea(text='orderInfo.buyerOrderComment', initial-height='60', is-readonly='true', title='')
          fieldset.vui-form-element.vui-m-bottom--small
            label.vui-form-element__label.black-text.disabled Customer Care Comment To Station
            .vui-form-element__control
              resizable-textarea(text='orderInfo.customerCareCommentToStation', initial-height='60', is-readonly='isCommentReadonly', title='')
</template>

<script>
  export default {
    data () {
      return {
        orderInfo: {
          productName: 'TS W/ YOPLAIT',
          campaignName: '3Q16 PTA',
          dealType: 'Trade',
          agencyName: 'GROUPM LOCAL BROADCAST',
          buyerName: 'LAUREN MUOJO',
          scheduleType: 'Weekly',
          demo: 'W18-49',
          estimate: '012',
          repName: 'Rep Name',
          totalGuaranteeRating: '23.10',
          totalSpotsQuantity: '10',
          totalCost: '0',
          buyerAvailRequestNotes: '',
          buyerOrderComment: '',
          customerCareCommentToStation: ''
        },
        isImpressionsBuyType: true,
        shouldShowInfo: false,
        isMakegoodDefined: true
      }
    },
    computed: {},
    methods: {
      infoClicked () {}
    }
  }
</script>

<template lang="pug">
  .makegoods-create
    page-title(text='KOKI 06/27/2016-09/25/2016')
    h1.vui-text-heading--large.vui-m-bottom--medium Order Information - Offers ( Create )
    order-details-info(order-info='orderInfo')
    .vui-grid.vui-grid--align-spread.vui-m-top--large.vui-m-bottom--large
      h2.vui-text-heading--medium
        span KOKI
        |  Details
      fieldset.vui-form-element
        input.vui-button.vui-button--brand(type='button', value='Transfer to MediaOps', @click='transfer', :disabled='canTransfer')
        input.vui-button.vui-button--brand(type='button', value='Guidelines', @click='viewGuidlines')
        input.vui-button.vui-button--secondary.vui-m-right--xx-small(type='button', value='Save', :disabled='!canSave', @click='save')
        close-button
    .vui-tabs--scoped.details-tabs-header-container
      ul.vui-tabs--scoped__nav.details-tabs(role='tablist')
        li.vui-tabs--scoped__item.vui-text-heading--label.vui-active(role='presentation')
          a.vui-tabs--scoped__link(href='') Makegood
    div(role='tabpanel')
      form.vui-p-around--large.vui-tabs--scoped__content(name='makegoodForm')
        .vui-grid.vui-m-bottom--x-large
          .vui-col.vui-p-right--medium
            .vui-form-element
              label.vui-form-element__label Makegood comments
              .vui-form-element__control
                resizable-textarea(text='makegood.comment', initial-height='140', width='200')
          .vui-col.vui-truncate_container--50.vui-size--1-of-2.vui-p-left--medium.vui-grid.vui-align-spread.vui-form--inline
            .vui-col.vui-size--2-of-3.vui-m-top--large
              makegoods-total-grid(preempts-name="'Pre-empt(s)'", offers-name="'Makegood(s)'", makegood='makegood', show-difference='true', order-buy-type='orderInfo.orderBuyType')
            .vui-form-element.vui-col.vui-size--1-of-3.vui-m-left--x-large.vui-m-top--medium
              label.vui-form-element__label Classification:
              .vui-form-element__control
                offers-makegoods-classification-dropdown(value='makegood.classification')
        .vui-grid.vui-m-bottom--medium
          h4.vui-text-heading--small.vui-align-middle.vui-m-right--large Pre-Empt(s)
          fieldset.vui-form-element.vui-align-middle
            label.vui-radio
              input(name='selectedPreemptsRadioGroup', v-model='isOnlySelectedPreemptsShown', type='radio', value='false')
              span.vui-radio--faux.vui-m-right--xxx-small
              span.vui-form-element__label All Order Preempts
            label.vui-radio
              input(name='selectedPreemptsRadioGroup', v-model='isOnlySelectedPreemptsShown', type='radio', value='true')
              span.vui-radio--faux.vui-m-right--xxx-small
              span.vui-form-element__label Selected
        div(style='height: 12rem')
          makegoods-preempts-grid(items='allOrderPreempts', is-only-selected-preempts-shown='isOnlySelectedPreemptsShown', item-selection-changed='selectedPreemptsChanged', order-buy-type='orderInfo.orderBuyType', is-edit-mode='true')
        offers-makegoods-common-avail-offer-grids-wrapper(offers-label="'Makegood spot(s) offered'", on-data-changed='offersChanged', order-info='orderInfo', makegood-offers='makegood.offers', order-buy-type='orderInfo.orderBuyType', selected-preemt-spot-lengths-async='selectedPreemtSpotLengthsAsync')
</template>

<script>
  import moment from 'moment'
  import store from 'store'

  export default {
    data () {
      return {
        sharedState: store.state,
        isOnlySelectedPreemptsShown: true,
        selectedPreemptsChanged: true,
        canTransfer: true,
        canSave: true,
        orderInfo: {
          orderBuyType: null
        },
        makegood: {
          classification: null,
          offers: []
        }

      }
    },
    methods: {
      save () {},
      transfer () {},
      viewGuidlines () {}
    }
  }
</script>

<template lang="pug">
  .makegoods-add-bonus-offer-view
    page-title(text='KOKI 06/27/2016-09/25/2016')
    h1.vui-text-heading--large.vui-m-bottom--medium Order Information - Credit ( Add Bonus Offer )
    order-details-info(order-info='orderInfo')
    .vui-grid.vui-grid--align-spread.vui-m-top--large.vui-m-bottom--large
      h2.vui-text-heading--medium
        span KOKI
        |  Credit
      fieldset.vui-form-element
        input.vui-button.vui-button--brand(type='button', value='Transfer to MediaOps', @click='transfer', :disabled='!canTransfer', disabled='disabled')
        input.vui-button.vui-button--secondary.vui-m-right--xx-small(type='button', value='Save', :disabled='!canSave', @click='save')
        close-button
    .vui-tabs--scoped.details-tabs-header-container
      ul.vui-tabs--scoped__nav.details-tabs(role='tablist')
        li.vui-tabs--scoped__item.vui-text-heading--label.vui-active(role='presentation')
          a.vui-tabs--scoped__link(href='') Makegood
    div(role='tabpanel')
      .vui-p-around--large.vui-tabs--scoped__content(ng-form='makegoodForm')
        .vui-grid.vui-m-bottom--x-large
          .vui-col.vui-p-right--medium
            .vui-form-element
              label.vui-form-element__label.black-text.disabled Makegood comments
              .vui-form-element__control
                resizable-textarea(text='makegood.comment', initial-height='140', width='200')
          .vui-col.vui-truncate_container--50.vui-size--1-of-2.vui-p-left--medium.vui-grid.vui-align-spread.vui-form--inline
            .vui-col.vui-size--2-of-3.vui-m-top--large
              makegoods-total-grid(preempts-name="'Credit(s)'", makegood='makegood', order-buy-type='orderInfo.orderBuyType')
            .vui-form-element.vui-col.vui-size--1-of-3.vui-m-left--x-large.vui-m-top--medium
              label.vui-form-element__label Classification:
              .vui-form-element__control
                offers-makegoods-classification-dropdown(value='makegood.classification')
        .vui-scrollable(style='height: 12rem')
          makegoods-preempts-grid(items='allMakegoodPreempts', item-selection-changed='selectedPreemptsChanged', order-buy-type='orderInfo.orderBuyType', is-edit-mode='true')
</template>

<script>
  import moment from 'moment'
  import store from 'store'

  export default {
    data () {
      return {
        sharedState: store.state
      }
    },
    methods: {
      canTransfer () {

      },
      transfer () {

      },
      canSave () {

      },
      save () {

      }
    }
  }
</script>

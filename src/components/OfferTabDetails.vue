<template lang="pug">
  .offer-tab-details.offers-container
    .vui-tabs--scoped.details-tabs-header-container
      ul.vui-tabs--scoped__nav.details-tabs.om-details-tabs(role='tablist')
        li.vui-tabs--scoped__item.vui-text-heading--label(role='presentation', @click.prevent='selectTab(detailsTabNames.order)', :class="{ 'vui-active': currentTabName === detailsTabNames.order }")
          a.vui-tabs--scoped__link(href='', v-text='detailsTabNames.order', @click.prevent='selectTab(detailsTabNames.offer)')
        li.vui-tabs--scoped__item.vui-text-heading--label(role='presentation', @click.prevent='selectTab(detailsTabNames.offer)', :class="{ 'vui-active': currentTabName === detailsTabNames.offer }")
          a.vui-tabs--scoped__link(href='', v-text='detailsTabNames.offer', @click.prevent='selectTab(detailsTabNames.offer)')
    .order-tab.vui-m-bottom--medium(role='tabpanel', v-show='currentTabName === detailsTabNames.order')
      .vui-p-around--large.vui-tabs--scoped__content
        .vui-grid.vui-grid--align-start.vui-grid--vertical-align-center.vui-m-bottom--medium
          .vui-size--1-of-12
            ul
              li.row-padding
                a(href='', title='Click to open the Offer which has been sent and is awaiting approval', @click.prevent='showOfferDialog("item.makegoodId")')
                  icon(name='medicine-bottle')
                span Pending MG
              li.row-padding
                span.vui-text-link
                  icon.vui-m-bottom--xxx-small.vui-m-left--xx-small.vui-m-right--xx-small(name='pencil-square')
                span.graft-mg-text Draft MG
          .vui-size--1-of-8
            label.vui-radio(for='view-all')
              input#view-all(name='missedRadioGroup', v-model='isOnlyMissedShown', type='radio', value='false')
              span.vui-radio--faux.vui-m-right--xxx-small
              span.vui-form-element__label View All
            label.vui-radio(for='missed-only')
              input#missed-only(name='missedRadioGroup', v-model='isOnlyMissedShown', type='radio', value='true')
              span.vui-radio--faux.vui-m-right--xxx-small
              span.vui-form-element__label Missed Only
          .vui-size--4-of-12.vui-grid.vui-grid--align-start
            .vui-size--3-of-12.vui-align-middle
              input.vui-button.vui-button--secondary.vui-m-right--xx-small(type='button', value='Add Offer', @click.prevent='addButtonClicked')
            .vui-size--3-of-12
              label.vui-radio(for='make-good')
                input#make-good(name='addButtonTypeRadioGroup', v-model='addButtonType', type='radio', value='Makegood')
                span.vui-radio--faux.vui-m-right--xxx-small
                span.vui-form-element__label Makegood
              label.vui-radio(for='credit')
                input#credit(name='addButtonTypeRadioGroup', v-model='addButtonType', type='radio', value='Credit')
                span.vui-radio--faux.vui-m-right--xxx-small
                span.vui-form-element__label Credit
            .vui-size--3-of-12
              label.vui-radio(for='r-bonus')
                input#r-bonus(name='addButtonTypeRadioGroup', v-model='addButtonType', type='radio', value='Bonus')
                span.vui-radio--faux.vui-m-right--xxx-small
                span.vui-form-element__label Bonus
              label.vui-radio(for='r-pgm-change')
                input#r-pgm-change(name='addButtonTypeRadioGroup', v-model='addButtonType', type='radio', value='ProgramChange')
                span.vui-radio--faux.vui-m-right--xxx-small
                span.vui-form-element__label Pgm. Change
            .vui-size--4-of-12
              label.vui-radio(for='r-mg-preempts')
                input#r-mg-preempts(name='addButtonTypeRadioGroup', v-model='addButtonType', type='radio', value='MakegoodPlacedTrafficSpots')
                span.vui-radio--faux.vui-m-right--xxx-small
                span.vui-form-element__label MG Preempts
              label.vui-radio(for='r-missed-spots')
                input#r-missed-spots(name='addButtonTypeRadioGroup', v-model='addButtonType', type='radio', value='MakegoodMissedSpots')
                span.vui-radio--faux.vui-m-right--xxx-small
                span.vui-form-element__label Missed Spots
          .vui-size--3-of-12.vui-align-top
            label.vui-checkbox
              input.vui-input(type='checkbox', v-model='isShowSpotAllocations')
              span.vui-checkbox--faux
              span.vui-form-element__label Show Spot Allocations
            .clearfix.row-padding
            .vui-form-element_control(v-if='isShowSpotAllocations')
              label.vui-radio
                input(name='spotTypeFilter', v-model='isMissedSpotsShown', type='radio', value='true')
                span.vui-radio--faux.vui-m-right--xxx-small
                span.vui-form-element__label Order v. Missed
              label.vui-radio
                input(name='spotTypeFilter', v-model='isMissedSpotsShown', type='radio', value='false')
                span.vui-radio--faux.vui-m-right--xxx-small
                span.vui-form-element__label Order v. Traffic
        offer-tab-order-grid.flex-container(items='orderItems', show-offer-dialog='showOfferDialog', is-show-spot-allocations='isShowSpotAllocations', is-only-missed-shown='isOnlyMissedShown', is-missed-spots-shown='isMissedSpotsShown', show-current-info='showCurrentLineInfoPopup', order-buy-type='orderBuyType', selected-makegood-type='addButtonType', show-orbit-details='showOrbitDetails')
    .offer-tab.vui-m-bottom--medium(role='tabpanel', v-show='currentTabName === detailsTabNames.offer')
      .vui-p-around--large.vui-tabs--scoped__content
        .vui-grid.vui-grid--align-start.vui-grid--vertical-align-center.vui-m-bottom--medium
          label.vui-radio(for='r-draft-pending')
            input#r-draft-pending(name='offersStatusRadioGroup', v-model='offerTabIsOnlyDraftAndPendingShown', type='radio', value='true')
            span.vui-radio--faux.vui-m-right--xxx-small
            span.vui-form-element__label Draft and Pending Orders Only
          label.vui-radio(for='r-all-offers')
            input#r-all-offers(name='offersStatusRadioGroup', v-model='offerTabIsOnlyDraftAndPendingShown', type='radio', value='false')
            span.vui-radio--faux.vui-m-right--xxx-small
            span.vui-form-element__label All Offers
          .vui-col--bump-left.vui-size--3-of-11
            input.vui-button.vui-button--secondary(type='button', value='TRANSFER Offer', :disabled='!canTransferOffer("offerTabSelected.item")', @click.prevent='transferMakegood("offerTabSelected.item")', disabled='disabled')
            input.vui-button.vui-button--secondary(type='button', value='COPY Offer', :disabled='!canCopyOffer("offerTabSelected.item")', @click.prevent='copyMakegood("offerTabSelected.item")', disabled='disabled')
            input.vui-button.vui-button--secondary(type='button', value='DELETE Offer', :disabled='!canDeleteOffer("offerTabSelected.item")', vui-confirm-click='deleteMakegood("offerTabSelected.item")', disabled='disabled')
            input.vui-button.vui-button--secondary(type='button', value='EDIT Offer', :disabled='!canEditOffer("offerTabSelected.item")', @click.prevent='editMakegood("offerTabSelected.item")', disabled='disabled')
        offer-tab-offer-grid.flex-container(items='offerItems', show-offer-dialog='showOfferDialog', is-only-draft-and-pending-shown='offerTabIsOnlyDraftAndPendingShown', selected-offer='offerTabSelected')
    order-line-current-info-popup(show-dialog='isCurrentLineInfoPopupShown', order-buy-type='orderBuyType', demo='demo')
</template>

<script>
  export default {
    data () {
      return {
        currentTabName: 'Order',
        isCurrentLineInfoPopupShown: false,
        offerTabIsOnlyDraftAndPendingShown: true,
        isShowSpotAllocations: false,
        isMissedSpotsShown: false,
        isOnlyMissedShown: false,
        addButtonType: null,
        detailsTabNames: {
          offer: 'Offer',
          order: 'Order'
        }
      }
    },
    methods: {
      selectTab (tab) {
        this.currentTabName = tab
      },
      addButtonClicked () {},
      showOfferDialog (item) {},
      canTransferOffer (item) {},
      transferMakegood (item) {},
      canCopyOffer (item) {},
      copyMakegood (item) {},
      canDeleteOffer (item) {},
      deleteMakegood (item) {},
      canEditOffer (item) {},
      editMakegood (item) {}
    }
  }
</script>

<template lang="pug">
  .modal-mask.modal-transition(v-show='show', show='isShowDialog', hide-modal='hideDialog')
    .ng-modal-overlay(@click='showModal')
    .ng-modal-dialog(:style='dialogStyle')
      .ng-modal-dialog-content
        .modal-container(style='width: 1600px; height: 700px')
          .modal-header.vui-m-bottom--large
            h3.vui-text-heading--medium.vui-grid.vui-grid--align-spread
              span Order eBiz History
              span.pointer.vui-icon_container.vui-m-right--x-small(title='Close', @click='hideDialog')
                //- svg.vui-icon.vui-icon-text-default(aria-hidden='true', style='fill:#fff')
                //-   use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/Content/assets/icons/utility-sprite/svg/symbols.svg#close')
                span.vui-assistive-text Close
          .modal-body(cg-busy='dataPromise')
            .vui-tabs--scoped.details-tabs-header-container
              ul.vui-tabs--scoped__nav.details-tabs.om-details-tabs(role='tablist')
                li.vui-tabs--scoped__item.vui-text-heading--label(:class="{'vui-active':currentTab === tabs.transactionHistory}")
                  a.vui-tabs--scoped__link(href='', v-text='tabs.transactionHistory', @click='changeTab(tabs.transactionHistory)') Transaction History
                li.vui-tabs--scoped__item.vui-text-heading--label(:class="{'vui-active':currentTab === tabs.revisionHistory}")
                  a.vui-tabs--scoped__link(href='', v-text='tabs.revisionHistory', @click='changeTab(tabs.revisionHistory)') Revision History
            .table.vui-tabs--scoped__content.vui-p-around--x-large(style='height: 500px; overflow-y: auto;')
              ebiz-history-grid(v-show='currentTab === tabs.transactionHistory', items='transactionHistoryItems', is-show-delnotes='isShowDelnotes')
              revision-history-grid(is-order-type-impression='isOrderTypeImpression', v-show='currentTab == tabs.revisionHistory', items='revisionHistoryItems')
            .vui-grid.vui-grid--pull-padded.vui-grid--vertical-align-end
              .vui-col--padded
                .vui-grid.vui-grid--align-end
                  label.vui-checkbox(v-show='currentTab === tabs.transactionHistory')
                    input.vui-input(type='checkbox', v-model='isShowDelnotes')
                    span.vui-checkbox--faux
                    span.vui-form-element__label Show Delivery Notifications
                  input.vui-button.vui-button--neutral(type='button', value='Close', @click='hideDialog')
</template>

<script>
  export default {
    data () {
      return {
        tabs: {
          transactionHistory: 'Transaction History',
          revisionHistory: 'Revision History'
        }
      }
    }
  }
</script>

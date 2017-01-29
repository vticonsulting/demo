<template lang="pug">
  .rejected-offer-dialog-container.modal-mask.modal-transition(v-show='show', show='ctrl.isShowDialog', hide-modal='ctrl.hideDialog')
    .ng-modal-overlay(@click='showModal')
    .ng-modal-dialog(:style='dialogStyle')
      .ng-modal-dialog-content
        .modal-container.modal-container--xx-large
          .modal-header
            .ng-modal-header
              h3.vui-text-heading--medium Dayparts Requested By Buyer
          .modal-body
            .fixed-header-grid(style='display: flex; flex-direction: column; position: relative; height: 100%;')
              div(style='overflow: hidden; flex: 0 0 auto; width: 0px;')
                table.vui-table.vui-table--fixed-layout(style='position: relative;')
                  thead
                    tr
                      th
                        vui-sorting-column(title='', column-name='daypartColumn', sorting-changed='ctrl.sortingChanged(column)', current-sorting='ctrl.sorting')
              .vui-scrollable(style='flex: 0 1 auto;')
                table.vui-table.vui-table--fixed-layout
                  tbody
            fieldset.vui-form-element
              input.vui-button.vui-button--neutral(type='button', value='Cancel', @click='ctrl.hideDialog')
</template>

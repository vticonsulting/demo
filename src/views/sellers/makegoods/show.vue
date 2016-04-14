<template lang="jade">
  .program-guide-view

    //- breadcrumbs
    .vui-grid
      .vui-col.vui-align-middle
        h2.vui-text-heading--large Makegood Offer Details
        .vui-grid.vui-grid--align-spread.vui-m-bottom--large
          a(v-link='{ name: "sellers.makegoods" }')
            svg.vui-icon.vui-icon--x-small.vui-align-middle.vui-m-right--xx-small
              use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='#icon-arrow-circle-left')
            | Back to Makegoods Dashboard
      .vui-col.vui-align-middle
        fieldset.vui-form-element.vui-m-bottom--large.vui-text-align--right
          button.vui-button.vui-button--neutral.vui-m-right--xx-small(@click.prevent='showRejectOfferModal = true') Reject Offer
          button.vui-button.vui-button--brand.vui-m-right--xx-small(@click.prevent='showAcceptOfferModal = true') Accept Offer

    .vui-box.vui-grid.vui-grid--align-spread.vui-m-bottom--large.vui-wrap.vui-theme--default

      //- fieldset.vui-form-element
      //-   label.vui-form-element__label(for='') Videa Order Number
      //-   .vui-form-element__control
      //-     span.vui-form-element__static {{offer.videaOrderNumber}}

      fieldset.vui-form-element
        label.vui-form-element__label(for='') Offer Status
        .vui-form-element__control
          span.vui-show--inline-block.vui-m-top--x-small.vui-align-middle.vui-badge(:class='offer.offerStatus') {{ offer.offerStatus }}

      fieldset.vui-form-element
        label.vui-form-element__label(for='') Station Status
        .vui-form-element__control
          span.vui-show--inline-block.vui-m-top--x-small.vui-align-middle.vui-badge(:class='offer.acceptedByStation') {{ offer.acceptedByStation }}

      fieldset.vui-form-element
        label.vui-form-element__label(for='') Agency Status
        .vui-form-element__control
          span.vui-show--inline-block.vui-m-top--x-small.vui-align-middle.vui-badge(:class='offer.acceptedByAgency') {{ offer.acceptedByAgency }}

      fieldset.vui-form-element
        label.vui-form-element__label(for='') Offer Sent
        .vui-form-element__control
          span.vui-show--inline-block.vui-m-top--x-small.vui-align-middle {{ offer.dateMakegoodSent }}

    .vui-grid.vui-m-bottom--large

    h2.vui-text-heading--medium.vui-m-bottom--small Preempts
    .vui-scrollable--x.vui-m-bottom--large
      table.vui-table.vui-table--custom-1.vui-no-row-hover
        thead
          tr
            th(rowspan='2') Buy Line #
            th(rowspan='2') Spot #
            th(rowspan='2') Program Placed
            th(rowspan='2') Status
            th(rowspan='2') Priority
            th(rowspan='2') Air Day
            th(rowspan='2') Air Date
            th(rowspan='2') Air Time
            th(rowspan='2') Length
            th.vui-text-align--center.u-width-xx-large(colspan='4')
              .vui-grid.vui-grid--align-spread
                a.vui-align-middle(@click.prevent='', href='#')
                  icon(name='arrow-circle-left')
                span.vui-align-middle April
            th.vui-text-align--center.u-width-xx-large(colspan='4')
              span May
            th.vui-text-align--center.u-width-xx-large(colspan='4')
              .vui-grid.vui-grid--align-spread
                span.vui-align-middle June
                a.vui-align-middle(@click.prevent='', href='#')
                  icon(name='arrow-circle-right')
            th(rowspan='2') Spot<br>Rate
            th(rowspan='2') Buyer<br>Rating
            th(rowspan='2') Comment
          tr
            th.vui-text-align--center.u-width-xx-large 04
            th.vui-text-align--center.u-width-xx-large 11
            th.vui-text-align--center.u-width-xx-large 18
            th.vui-text-align--center.u-width-xx-large 25
            th.vui-text-align--center.u-width-xx-large 01
            th.vui-text-align--center.u-width-xx-large 08
            th.vui-text-align--center.u-width-xx-large 15
            th.vui-text-align--center.u-width-xx-large 22
            th.vui-text-align--center.u-width-xx-large 29
            th.vui-text-align--center.u-width-xx-large 07
            th.vui-text-align--center.u-width-xx-large 14
            th.vui-text-align--center.u-width-xx-large 21
          tr(v-for='preempt in offer.preempts')
            td.vui-text-align--center {{preempt.buyLine}}
            td.vui-text-align--center {{preempt.spotNumber}}
            td {{preempt.programPlaced}}
            td {{preempt.status}}
            td.vui-text-align--center {{preempt.priority}}
            td {{preempt.airDay}}
            td {{preempt.airDate}}
            td {{preempt.airTime}}
            td.vui-text-align--center {{preempt.spotLength}}
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px')
            td.vui-text-align--right {{preempt.buyerRate | numberWithCommas | formatMoney}}
            td.vui-text-align--right {{preempt.buyerRating | formatRating}}
            td.vui-text-align--right {{preempt.buyerCpp | numberWithCommas | formatMoney}}
            td
              //- textarea.vui-textarea(style='width: 300px', v-model='makegood.comment')

    h2.vui-text-heading--medium.vui-m-bottom--small Makegood Spots Offered
    .vui-scrollable--x.vui-m-bottom--large
      table.vui-table.vui-table--custom-1.vui-no-row-hover
        thead
          tr
            th(rowspan='2') Buy Line #
            th(rowspan='2') Spot #
            th(rowspan='2') Program Placed
            th(rowspan='2') Status
            th(rowspan='2') Priority
            th(rowspan='2') Air Day
            th(rowspan='2') Air Date
            th(rowspan='2') Air Time
            th(rowspan='2') Length
            th.vui-text-align--center.u-width-xx-large(colspan='4')
              .vui-grid.vui-grid--align-spread
                a.vui-align-middle(@click.prevent='', href='#')
                  icon(name='arrow-circle-left')
                span.vui-align-middle April
            th.vui-text-align--center.u-width-xx-large(colspan='4')
              span May
            th.vui-text-align--center.u-width-xx-large(colspan='4')
              .vui-grid.vui-grid--align-spread
                span.vui-align-middle June
                a.vui-align-middle(@click.prevent='', href='#')
                  icon(name='arrow-circle-right')
            th(rowspan='2') Buyer<br>Rate
            th(rowspan='2') Buyer<br>Rating
            th(rowspan='2') Buyer<br>CPP
            th(rowspan='2') Comment
          tr
            th.vui-text-align--center.u-width-xx-large 04
            th.vui-text-align--center.u-width-xx-large 11
            th.vui-text-align--center.u-width-xx-large 18
            th.vui-text-align--center.u-width-xx-large 25
            th.vui-text-align--center.u-width-xx-large 01
            th.vui-text-align--center.u-width-xx-large 08
            th.vui-text-align--center.u-width-xx-large 15
            th.vui-text-align--center.u-width-xx-large 22
            th.vui-text-align--center.u-width-xx-large 29
            th.vui-text-align--center.u-width-xx-large 07
            th.vui-text-align--center.u-width-xx-large 14
            th.vui-text-align--center.u-width-xx-large 21
          tr(v-for='makegood in offer.makegoods')
            td.vui-text-align--center {{makegood.buyLine}}
            td.vui-text-align--center {{makegood.spotNumber}}
            td {{makegood.programPlaced}}
            td {{makegood.status}}
            td.vui-text-align--center {{makegood.priority}}
            td {{makegood.airDay}}
            td {{makegood.airDate}}
            td {{makegood.airTime}}
            td.vui-text-align--center {{makegood.spotLength}}
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px')
            td.vui-text-align--center.vui-highlight
              input.vui-input.vui-text-align--center(type='text', style='width: 50px')
            td.vui-text-align--right {{makegood.buyerRate | numberWithCommas | formatMoney}}
            td.vui-text-align--right {{makegood.buyerRating | formatRating}}
            td.vui-text-align--right {{makegood.buyerCpp | numberWithCommas | formatMoney}}
            td
              //- textarea.vui-textarea(style='width: 300px', v-model='makegood.comment')

    .vui-grid.vui-grid--align-spread.vui-m-bottom--large

    .vui-grid.vui-grid--pull-padded

      .vui-col--padded
        fieldset.vui-form-element
          label.vui-form-element__label Makegood Comments
          .vui-form-element__control
            textarea.vui-textarea(style='height: 6rem')

      .vui-col--padded
        table.vui-table.vui-table--custom-1.vui-no-row-hover(style='width: 350px')
          thead
            tr
              th Totals
              th.u-width-small.vui-text-align--center Spots
              th.u-width-small Dollars
              th.u-width-small GRPs
          tbody
            tr
              td Preempts
              td.vui-text-align--center 2
              td.vui-text-align--right $6,805
              td.vui-text-align--right 394.61
            tr
              td Makegoods
              td.vui-text-align--center 3
              td.vui-text-align--right $656
              td.vui-text-align--right 9.28


    fieldset.vui-form-element.vui-m-bottom--large.vui-text-align--right
      button.vui-button.vui-button--neutral.vui-m-right--xx-small(@click.prevent='showRejectOfferModal = true') Reject Offer
      button.vui-button.vui-button--brand.vui-m-right--xx-small(@click.prevent='showAcceptOfferModal = true') Accept Offer
      //- button.vui-button.vui-button--neutral.vui-m-right--xx-small Close

    //- //-   .vui-col--padded-medium.vui-size--1-of-3

    //- //-     fieldset.vui-form-element
    //- //-       label.vui-form-element__label(for='') Total Revenue
    //- //-       .vui-form-element__control
    //- //-         span.vui-form-element__static {{offer.totalRevenue}}

    //- //-     fieldset.vui-form-element
    //- //-       label.vui-form-element__label(for='') Total GRPs
    //- //-       .vui-form-element__control
    //- //-         span.vui-form-element__static {{offer.totalGrps}}

    //- //-     fieldset.vui-form-element
    //- //-       label.vui-form-element__label(for='') Total Spots
    //- //-       .vui-form-element__control
    //- //-         span.vui-form-element__static {{offer.totalSpots}}

    //- //-     fieldset.vui-form-element
    //- //-       label.vui-form-element__label(for='') Agency Order Number
    //- //-       .vui-form-element__control
    //- //-         span.vui-form-element__static {{offer.agencyOrderNumber}}

    //- //-     fieldset.vui-form-element
    //- //-       label.vui-form-element__label(for='') Station Order Number
    //- //-       .vui-form-element__control
    //- //-         span.vui-form-element__static {{offer.stationOrderNumber}}

    //- //-   .vui-col--padded-medium.vui-size--1-of-3

    //- //-     fieldset.vui-form-element
    //- //-       label.vui-form-element__label(for='') Buyer Name
    //- //-       .vui-form-element__control
    //- //-         span.vui-form-element__static {{offer.buyerName}}

    //- //-     fieldset.vui-form-element
    //- //-       label.vui-form-element__label(for='') Rep Name
    //- //-       .vui-form-element__control
    //- //-         span.vui-form-element__static {{offer.repName}}

    //- //-     fieldset.vui-form-element
    //- //-       label.vui-form-element__label(for='') Deal Type
    //- //-       .vui-form-element__control
    //- //-         span.vui-form-element__static {{offer.dealType}}

    //- //-     fieldset.vui-form-element
    //- //-       label.vui-form-element__label(for='') Version
    //- //-       .vui-form-element__control
    //- //-         span.vui-form-element__static {{offer.version}}

    //- //-     fieldset.vui-form-element
    //- //-       label.vui-form-element__label(for='') Schedule Type
    //- //-       .vui-form-element__control
    //- //-         span.vui-form-element__static {{offer.scheduleType}}

    //- //-   .vui-col--padded--medium.vui-size--1-of-3
    //- //-     fieldset.vui-form-element.vui-m-bottom--medium
    //- //-       label.vui-form-element__label(for='') Buyer Order Comment
    //- //-       .vui-form-element__control
    //- //-         textarea.vui-textarea(style='min-height: 6rem;')

    //- //-     fieldset.vui-form-element.vui-m-bottom--medium
    //- //-       label.vui-form-element__label(for='') Customer Care Comment To Station
    //- //-       .vui-form-element__control
    //- //-         textarea.vui-textarea(style='min-height: 6rem;')

    //- //-     fieldset.vui-form-element.vui-m-bottom--medium
    //- //-       label.vui-form-element__label(for='') Internal only Videa / Station comments
    //- //-       .vui-form-element__control
    //- //-         textarea.vui-textarea(style='min-height: 6rem;')

    //- //-     fieldset.vui-form-element.vui-m-bottom--large.vui-text-align--right
    //- //-       button.vui-button.vui-button--secondary.vui-m-right--xx-small(@click.prevent='showTransferOpenPreemptsModal = true') Accept Offer
    //- //-       button.vui-button.vui-button--brand.vui-m-right--xx-small Reject Offer

    //- //- timeline

    //- h2.vui-text-heading--large.vui-m-bottom--medium WVVV Details

    //- .vui-tabs--scoped
    //-   ul.vui-tabs--scoped__nav(role='tablist')
    //-     li.vui-tabs--scoped__item.vui-text-heading--label.vui-active(title='Order', role='presentation' v-link-active)
    //-       a#order__item.vui-tabs--scoped__link(v-link="{ name: 'sellers.program-guide.program-guide', activeClass: 'vui-active', exact: true }", href='#', role='tab', tabindex='0', aria-selected='true', aria-controls='order')
    //-         | Order
    //-     li.vui-tabs--scoped__item.vui-text-heading--label(title='Make Good', role='presentation' v-link-active)
    //-       a#makegood__item.vui-tabs--scoped__link(v-link="{ name: 'sellers.program-guide.specials', activeClass: 'vui-active', exact: true }", href='#', role='tab', tabindex='-1', aria-selected='false', aria-controls='makegood')
    //-         | Make Good
    //-   #order.vui-p-around--x-large.vui-tabs--scoped__content.vui-show(role='tabpanel')
    //-     .vui-scrollable--x
    //-       table.vui-table.vui-table--custom-1.vui-no-row-hover
    //-         thead
    //-           tr

    //-   //- #makegood.vui-p-around--x-large.vui-tabs--scoped__content(role='tabpanel')

    //-   //-   .vui-scrollable--x

    //-   //-     //- h2.vui-text-heading--small Open Pre-Empt(s)

    //-   //-     //- .vui-box.vui-m-bottom--large
    //-   //-     //-   form.vui-form--inline
    //-   //-     //-     fieldset.vui-form-element
    //-   //-     //-       // legend.vui-form-element__legend.vui-form-element__label Metric
    //-   //-     //-       .vui-form-element__control
    //-   //-     //-         label.vui-radio(for='cpm')
    //-   //-     //-           input#cpm(type='radio', name='when', checked='true')
    //-   //-     //-           span.vui-radio--faux.vui-m-right--xx-small
    //-   //-     //-           span.vui-form-element__label All Order Preempts
    //-   //-     //-         label.vui-radio.vui-m-right--large(for='cpp')
    //-   //-     //-           input#cpp(type='radio', name='when')
    //-   //-     //-           span.vui-radio--faux.vui-m-right--xx-small
    //-   //-     //-           span.vui-form-element__label Selected

    //-   //-     //-     fieldset.vui-form-element
    //-   //-     //-       label.vui-form-element__label Makegood Comments
    //-   //-     //-       .vui-form-element__control
    //-   //-     //-         textarea.vui-textarea


    //-   //-     //- table.vui-table.vui-table--custom-1.vui-no-row-hover
    //-   //-     //-   thead
    //-   //-     //-     tr
    //-   //-     //-       th(rowspan='2') Buy Line #
    //-   //-     //-       th(rowspan='2') Spot #
    //-   //-     //-       th(rowspan='2') Program Placed
    //-   //-     //-       th(rowspan='2') Status
    //-   //-     //-       th(rowspan='2') Priority
    //-   //-     //-       th(rowspan='2') Air Day
    //-   //-     //-       th(rowspan='2') Air Date
    //-   //-     //-       th(rowspan='2') Air Time
    //-   //-     //-       th(rowspan='2') Length
    //-   //-     //-       th.vui-text-align--center.u-width-xx-large(colspan='4')
    //-   //-     //-         .vui-grid.vui-grid--align-spread
    //-   //-     //-           a.vui-align-middle(@click.prevent='', href='#')
    //-   //-     //-             icon(name='arrow-circle-left')
    //-   //-     //-           span.vui-align-middle January
    //-   //-     //-       th.vui-text-align--center.u-width-xx-large(colspan='4')
    //-   //-     //-         span February
    //-   //-     //-       th.vui-text-align--center.u-width-xx-large(colspan='4')
    //-   //-     //-         .vui-grid.vui-grid--align-spread
    //-   //-     //-           span.vui-align-middle March
    //-   //-     //-           a.vui-align-middle(@click.prevent='', href='#')
    //-   //-     //-             icon(name='arrow-circle-right')
    //-   //-     //-       th(rowspan='2') Buyer<br>Rate
    //-   //-     //-       th(rowspan='2') Buyer<br>Rating
    //-   //-     //-       th(rowspan='2') Buyer<br>CPP
    //-   //-     //-       th(rowspan='2') Comment
    //-   //-     //-     tr
    //-   //-     //-       th.vui-text-align--center.u-width-xx-large 04
    //-   //-     //-       th.vui-text-align--center.u-width-xx-large 11
    //-   //-     //-       th.vui-text-align--center.u-width-xx-large 18
    //-   //-     //-       th.vui-text-align--center.u-width-xx-large 25
    //-   //-     //-       th.vui-text-align--center.u-width-xx-large 01
    //-   //-     //-       th.vui-text-align--center.u-width-xx-large 08
    //-   //-     //-       th.vui-text-align--center.u-width-xx-large 15
    //-   //-     //-       th.vui-text-align--center.u-width-xx-large 22
    //-   //-     //-       th.vui-text-align--center.u-width-xx-large 29
    //-   //-     //-       th.vui-text-align--center.u-width-xx-large 07
    //-   //-     //-       th.vui-text-align--center.u-width-xx-large 14
    //-   //-     //-       th.vui-text-align--center.u-width-xx-large 21
    //-   //-     //-     tr(v-for='makegood in makegoods')
    //-   //-     //-       td.vui-text-align--center {{makegood.buyLine}}
    //-   //-     //-       td.vui-text-align--center {{makegood.spotNumber}}
    //-   //-     //-       td {{makegood.programPlaced}}
    //-   //-     //-       td {{makegood.status}}
    //-   //-     //-       td.vui-text-align--center {{makegood.priority}}
    //-   //-     //-       td {{makegood.airDay}}
    //-   //-     //-       td {{makegood.airDate}}
    //-   //-     //-       td {{makegood.airTime}}
    //-   //-     //-       td.vui-text-align--center {{makegood.spotLength}}
    //-   //-     //-       td.vui-text-align--center.vui-highlight
    //-   //-     //-         input.vui-input.vui-text-align--center(type='text', style='width: 50px')
    //-   //-     //-       td.vui-text-align--center.vui-highlight
    //-   //-     //-         input.vui-input.vui-text-align--center(type='text', style='width: 50px')
    //-   //-     //-       td.vui-text-align--center.vui-highlight
    //-   //-     //-         input.vui-input.vui-text-align--center(type='text', style='width: 50px')
    //-   //-     //-       td.vui-text-align--center.vui-highlight
    //-   //-     //-         input.vui-input.vui-text-align--center(type='text', style='width: 50px')
    //-   //-     //-       td.vui-text-align--center.vui-highlight
    //-   //-     //-         input.vui-input.vui-text-align--center(type='text', style='width: 50px')
    //-   //-     //-       td.vui-text-align--center.vui-highlight
    //-   //-     //-         input.vui-input.vui-text-align--center(type='text', style='width: 50px')
    //-   //-     //-       td.vui-text-align--center.vui-highlight
    //-   //-     //-         input.vui-input.vui-text-align--center(type='text', style='width: 50px')
    //-   //-     //-       td.vui-text-align--center.vui-highlight
    //-   //-     //-         input.vui-input.vui-text-align--center(type='text', style='width: 50px')
    //-   //-     //-       td.vui-text-align--center.vui-highlight
    //-   //-     //-         input.vui-input.vui-text-align--center(type='text', style='width: 50px')
    //-   //-     //-       td.vui-text-align--center.vui-highlight
    //-   //-     //-         input.vui-input.vui-text-align--center(type='text', style='width: 50px')
    //-   //-     //-       td.vui-text-align--center.vui-highlight
    //-   //-     //-         input.vui-input.vui-text-align--center(type='text', style='width: 50px')
    //-   //-     //-       td.vui-text-align--center.vui-highlight
    //-   //-     //-         input.vui-input.vui-text-align--center(type='text', style='width: 50px')
    //-   //-     //-       td.vui-text-align--right {{makegood.buyerRate | numberWithCommas | formatMoney}}
    //-   //-     //-       td.vui-text-align--right {{makegood.buyerRating | formatRating}}
    //-   //-     //-       td.vui-text-align--right {{makegood.buyerCpp | numberWithCommas | formatMoney}}
    //-   //-     //-       td
    //-   //-     //-         //- textarea.vui-textarea(style='width: 300px', v-model='makegood.comment')

    accept-offer-modal(:show.sync='showAcceptOfferModal')
    reject-offer-modal(:show.sync='showRejectOfferModal')
</template>

<script>
  import store from '../../../store'
  import Icon from '../../../components/Icon.vue'
  import AcceptOfferModal from '../../../components/AcceptOfferModal.vue'
  import RejectOfferModal from '../../../components/RejectOfferModal.vue'
  import Timeline from '../../../components/Timeline.vue'
  import Breadcrumbs from '../../../components/Breadcrumbs.vue'

  export default {
    components: { Icon, AcceptOfferModal, RejectOfferModal, Timeline, Breadcrumbs },

    props: {
      ordersRoute: {
        type: String,
        default: 'sellers.orders'
      }
    },

    data () {
      return {
        sharedState: store.state,
        showTransferOpenPreemptsModal: false,
        offer: {},
        makegoods: [
          {
            buyLine: 57,
            spotNumber: 1,
            programPlaced: 'Early News',
            status: 'Preempted',
            priority: 1,
            airDay: 'Monday',
            airDate: '03/06/16',
            airTime: '05:44 PM',
            spotLength: ':30',
            buyerRate: 100,
            buyerRating: 1.0,
            buyerCpp: 100,
            comment: ''
          },
          {
            buyLine: 57,
            spotNumber: 1,
            programPlaced: 'Early News',
            status: 'Preempted',
            priority: 1,
            airDay: 'Monday',
            airDate: '03/06/16',
            airTime: '05:44 PM',
            spotLength: ':30',
            buyerRate: 100,
            buyerRating: 1.0,
            buyerCpp: 100,
            comment: ''
          },
          {
            buyLine: 57,
            spotNumber: 1,
            programPlaced: 'Early News',
            status: 'Preempted',
            priority: 1,
            airDay: 'Monday',
            airDate: '03/06/16',
            airTime: '05:44 PM',
            spotLength: ':30',
            buyerRate: 100,
            buyerRating: 1.0,
            buyerCpp: 100,
            comment: ''
          }
        ]
      }
    },

    methods: {
      fetchOffer (id) {
        this.$http.get(store.apiHost + '/offers/' + id)
          .then((response) => {
            this.offer = response.data
          }, (response) => console.log(response))
      },

      showOffers () {
        this.$route.router.go({
          name: this.offersRoute
        })
      }
    },

    created () {
      this.fetchOffer(this.$route.params.id)
      this.sharedState.activeApp = 'sellers'
    }
  }
</script>

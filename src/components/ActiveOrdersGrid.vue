<!-- <active-orders-grid is-column-sorted="listCtrl.isColumnSorted" sorting-changed="listCtrl.sortingChanged" items="listCtrl.items" class="ng-isolate-scope"> -->
<template lang="pug">
  .vui-scrollable--x.vui-m-bottom--large
    table.vui-table.vui-table--striped.vui-no-row-hover.vui-table--fixed-layout
      thead
        tr
          th(style='width:90px')
            | Order
            br
            | Completed
          th(style='width:80px') Stations
          th(style='width:100px')
            vui-sorting-column(title='Station<br>Order #', column-name='ExternalTrafficOrderNumber', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.stationOrderNumber)', current-sorting='ctrl.gridColumns.stationOrderNumber')
          th(style='width:90px')
            vui-sorting-column(title='Agency<br>Order #', column-name='AgencyOrderNumber', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.agencyOrderNumber)', current-sorting='ctrl.gridColumns.agencyOrderNumber')
          th(style='width:110px')
            vui-sorting-column(title='Videa<br>Order #', column-name='VideaOrderNumber', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.orderId)', current-sorting='ctrl.gridColumns.orderId')
          th(style='width:280px')
            vui-sorting-column(title='Advertiser', column-name='AdvertiserName', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.advertiserName)', current-sorting='ctrl.gridColumns.advertiserName')
          th(style='width:250px')
            vui-sorting-column(title='Agency', column-name='AgencyName', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.agencyName)', current-sorting='ctrl.gridColumns.agencyName')
          th(style='width:95px')
            vui-sorting-column(title='Estimate', column-name='Estimate', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.estimate)', current-sorting='ctrl.gridColumns.estimate')
          th(style='width:100px')
            vui-sorting-column(title='Start Date', column-name='FlightStartDate', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.flightStartDate)', current-sorting='ctrl.gridColumns.flightStartDate')
          th(style='width:100px')
            vui-sorting-column(title='End Date', column-name='FlightEndDate', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.flightEndDate)', current-sorting='ctrl.gridColumns.flightEndDate')
          th(style='width:100px')
            vui-sorting-column(title='Order<br>Value', column-name='TotalCost', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.totalCost)', current-sorting='ctrl.gridColumns.totalCost')
          th(style='width:100px')
            vui-sorting-column(title='Spots<br>Ordered', column-name='TotalSpots', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.totalSpotsNumber)', current-sorting='ctrl.gridColumns.totalSpotsNumber')
          th(style='width:100px')
            vui-sorting-column(title='Spots<br>Missed', column-name='TotalMissedSpots', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.totalMissedSpots)', current-sorting='ctrl.gridColumns.totalMissedSpots')
          th(style='width:100px')
            vui-sorting-column(title='Missed<br>Value', column-name='TotalMissedSpotCost', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.totalMissedSpotCost)', current-sorting='ctrl.gridColumns.totalMissedSpotCost')
          th(style='width:150px')
            | Date/Time Order
            br
            | Completed
          th(style='width:120px')
            | Order
            br
            | Completed By
          th.vui-text-align--center(style='width:160px') Add to Schedule
      tbody
        tr(v-for='item in items')
          td.vui-text-align--center(style='width:90px')
            label.vui-checkbox
              input(type='checkbox', v-model='item.isVideaArchived')
              span.vui-checkbox--faux
          td.vui-truncate(style='width:70px', v-text='item.stationCallLetters', @click='clickRow(item)', title='KMYT') KMYT
          td.vui-truncate(style='width:100px', v-text='item.externalTrafficOrderNumber', @click='clickRow(item)', title='133661') 133661
          td.vui-truncate(style='width:110px', v-text='item.agencyOrderNumber', @click='clickRow(item)', title='00791791') 00791791
          td.vui-truncate(style='width:110px', v-text='item.videaOrderNumber', @click='clickRow(item)', title='V0005009') V0005009
          td.vui-truncate(style='width:280px', v-text='item.advertiserName', @click='clickRow(item)', title='CARL KARCHER ENT INC') CARL KARCHER ENT INC
          td.vui-truncate(style='width:110px', v-text='item.agencyName', @click='clickRow(item)', title='INITIATIVE LA') INITIATIVE LA
          td.vui-text-align--right.vui-truncate(style='width:90px', v-text='item.estimate', @click='clickRow(item)', title='0121  ') 0121
          td.vui-truncate(style='width:100px', v-text='item.startDate', @click='clickRow(item)', title='09/26/2016') 09/26/2016
          td.vui-truncate(style='width:90px', v-text='item.endDate', @click='clickRow(item)', title='12/25/2016') 12/25/2016
          td.vui-text-align--right.vui-truncate(style='width:100px', v-text='item.totalCost', @click='clickRow(item)', title='$1,050.00') $1,050.00
          td.vui-text-align--right.vui-truncate(style='width:100px', v-text='item.totalSpotsNumber', @click='clickRow(item)', title='30') 30
          td.vui-text-align--right.vui-truncate(style='width:100px', v-text='item.totalMissedSpots', @click='clickRow(item)', title='')
          td.vui-text-align--right.vui-truncate(style='width:100px', v-text='item.totalMissedSpotCost', @click='clickRow(item)', title='')
          td.vui-truncate(style='width:150px', v-text='item.videaArchivedDateTime', @click='clickRow(item)', title='')
          td.vui-truncate(style='width:120px', v-text='item.videaArchivedByName', @click='clickRow(item)', title='')
          td.vui-text-align--center(style='width:160px', @click='updateBuyMakegoods(item)', title='Update Buy/Makegoods')
            a(href='', type='button') Add to Schedule
        //- tr(v-for='item in items')
        //-   td.vui-text-align--center(style='width:90px')
        //-     label.vui-checkbox
        //-       input(type='checkbox', v-model='item.isVideaArchived')
        //-       span.vui-checkbox--faux
        //-   td.vui-truncate(style='width:70px', ng-bind='item.stationCallLetters', @click='clickRow(item)', title='KMYT') KMYT
        //-   td.vui-truncate(style='width:100px', ng-bind='item.externalTrafficOrderNumber', @click='ctrl.clickRow(item)', title='133742') 133742
        //-   td.vui-truncate(style='width:110px', ng-bind='item.agencyOrderNumber', @click='ctrl.clickRow(item)', title='04306463') 04306463
        //-   td.vui-truncate(style='width:110px', ng-bind='item.videaOrderNumber', @click='ctrl.clickRow(item)', title='V0005032') V0005032
        //-   td.vui-truncate(style='width:280px', ng-bind='item.advertiserName', @click='ctrl.clickRow(item)', title='GENERAL MILLS INC') GENERAL MILLS INC
        //-   td.vui-truncate(style='width:110px', ng-bind='item.agencyName', @click='ctrl.clickRow(item)', title='GROUPM LOCAL BROADCAST') GROUPM LOCAL BROADCAST
        //-   td.vui-text-align--right.vui-truncate(style='width:90px', ng-bind='item.estimate', @click='ctrl.clickRow(item)', title='012   ') 012
        //-   td.vui-truncate(style='width:100px', ng-bind='item.startDate', @click='ctrl.clickRow(item)', title='06/27/2016') 06/27/2016
        //-   td.vui-truncate(style='width:90px', ng-bind='item.endDate', @click='ctrl.clickRow(item)', title='09/25/2016') 09/25/2016
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalCost|currency', @click='ctrl.clickRow(item)', title='$1,085.00') $1,085.00
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalSpotsNumber', @click='ctrl.clickRow(item)', title='32') 32
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalMissedSpots', @click='ctrl.clickRow(item)', title='0') 0
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalMissedSpotCost|currency', @click='ctrl.clickRow(item)', title='$0.00') $0.00
        //-   td.vui-truncate(style='width:150px', ng-bind='item.videaArchivedDate|vuiDateTime', @click='ctrl.clickRow(item)', title='')
        //-   td.vui-truncate(style='width:120px', ng-bind='item.videaArchivedByName', @click='ctrl.clickRow(item)', title='')
        //-   td.vui-text-align--center(style='width:160px', @click='ctrl.updateBuyMakegoods(item)', title='Update Buy/Makegoods')
        //-     a(href='', vui-access='Admin', type='button') Add to Schedule
        //- tr(v-for='item in items')
        //-   td.vui-text-align--center(style='width:90px')
        //-     label.vui-checkbox
        //-       input(type='checkbox', v-model='item.isVideaArchived')
        //-       span.vui-checkbox--faux
        //-   td.vui-truncate(style='width:70px', ng-bind='item.stationCallLetters', @click='ctrl.clickRow(item)', title='KMYT') KMYT
        //-   td.vui-truncate(style='width:100px', ng-bind='item.externalTrafficOrderNumber', @click='ctrl.clickRow(item)', title='133763') 133763
        //-   td.vui-truncate(style='width:110px', ng-bind='item.agencyOrderNumber', @click='ctrl.clickRow(item)', title='04306466') 04306466
        //-   td.vui-truncate(style='width:110px', ng-bind='item.videaOrderNumber', @click='ctrl.clickRow(item)', title='V0005034') V0005034
        //-   td.vui-truncate(style='width:280px', ng-bind='item.advertiserName', @click='ctrl.clickRow(item)', title='GENERAL MILLS INC') GENERAL MILLS INC
        //-   td.vui-truncate(style='width:110px', ng-bind='item.agencyName', @click='ctrl.clickRow(item)', title='GROUPM LOCAL BROADCAST') GROUPM LOCAL BROADCAST
        //-   td.vui-text-align--right.vui-truncate(style='width:90px', ng-bind='item.estimate', @click='ctrl.clickRow(item)', title='012   ') 012
        //-   td.vui-truncate(style='width:100px', ng-bind='item.startDate|vuiDate', @click='ctrl.clickRow(item)', title='06/27/2016') 06/27/2016
        //-   td.vui-truncate(style='width:90px', ng-bind='item.endDate|vuiDate', @click='ctrl.clickRow(item)', title='09/25/2016') 09/25/2016
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalCost|currency', @click='ctrl.clickRow(item)', title='$525.00') $525.00
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalSpotsNumber', @click='ctrl.clickRow(item)', title='19') 19
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalMissedSpots', @click='ctrl.clickRow(item)', title='0') 0
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalMissedSpotCost|currency', @click='ctrl.clickRow(item)', title='$0.00') $0.00
        //-   td.vui-truncate(style='width:150px', ng-bind='item.videaArchivedDate|vuiDateTime', @click='ctrl.clickRow(item)', title='')
        //-   td.vui-truncate(style='width:120px', ng-bind='item.videaArchivedByName', @click='ctrl.clickRow(item)', title='')
        //-   td.vui-text-align--center(style='width:160px', @click='ctrl.updateBuyMakegoods(item)', title='Update Buy/Makegoods')
        //-     a(href='', vui-access='Admin', type='button') Add to Schedule
        //- tr(v-for='item in items')
        //-   td.vui-text-align--center(style='width:90px')
        //-     label.vui-checkbox
        //-       input(type='checkbox', v-model='item.isVideaArchived')
        //-       span.vui-checkbox--faux
        //-   td.vui-truncate(style='width:70px', ng-bind='item.stationCallLetters', @click='ctrl.clickRow(item)', title='KMYT') KMYT
        //-   td.vui-truncate(style='width:100px', ng-bind='item.externalTrafficOrderNumber', @click='ctrl.clickRow(item)', title='133755') 133755
        //-   td.vui-truncate(style='width:110px', ng-bind='item.agencyOrderNumber', @click='ctrl.clickRow(item)', title='04306465') 04306465
        //-   td.vui-truncate(style='width:110px', ng-bind='item.videaOrderNumber', @click='ctrl.clickRow(item)', title='V0005035') V0005035
        //-   td.vui-truncate(style='width:280px', ng-bind='item.advertiserName', @click='ctrl.clickRow(item)', title='GENERAL MILLS INC') GENERAL MILLS INC
        //-   td.vui-truncate(style='width:110px', ng-bind='item.agencyName', @click='ctrl.clickRow(item)', title='GROUPM LOCAL BROADCAST') GROUPM LOCAL BROADCAST
        //-   td.vui-text-align--right.vui-truncate(style='width:90px', ng-bind='item.estimate', @click='ctrl.clickRow(item)', title='012   ') 012
        //-   td.vui-truncate(style='width:100px', ng-bind='item.startDate|vuiDate', @click='ctrl.clickRow(item)', title='06/27/2016') 06/27/2016
        //-   td.vui-truncate(style='width:90px', ng-bind='item.endDate|vuiDate', @click='ctrl.clickRow(item)', title='09/25/2016') 09/25/2016
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalCost|currency', @click='ctrl.clickRow(item)', title='$435.00') $435.00
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalSpotsNumber', @click='ctrl.clickRow(item)', title='15') 15
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalMissedSpots', @click='ctrl.clickRow(item)', title='0') 0
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalMissedSpotCost|currency', @click='ctrl.clickRow(item)', title='$0.00') $0.00
        //-   td.vui-truncate(style='width:150px', ng-bind='item.videaArchivedDate|vuiDateTime', @click='ctrl.clickRow(item)', title='')
        //-   td.vui-truncate(style='width:120px', ng-bind='item.videaArchivedByName', @click='ctrl.clickRow(item)', title='')
        //-   td.vui-text-align--center(style='width:160px', @click='ctrl.updateBuyMakegoods(item)', title='Update Buy/Makegoods')
        //-     a(href='', vui-access='Admin', type='button') Add to Schedule
        //- tr(v-for='item in items')
        //-   td.vui-text-align--center(style='width:90px')
        //-     label.vui-checkbox
        //-       input(type='checkbox', v-model='item.isVideaArchived')
        //-       span.vui-checkbox--faux
        //-   td.vui-truncate(style='width:70px', ng-bind='item.stationCallLetters', @click='ctrl.clickRow(item)', title='KMYT') KMYT
        //-   td.vui-truncate(style='width:100px', ng-bind='item.externalTrafficOrderNumber', @click='ctrl.clickRow(item)', title='')
        //-   td.vui-truncate(style='width:110px', ng-bind='item.agencyOrderNumber', @click='ctrl.clickRow(item)', title='92684652') 92684652
        //-   td.vui-truncate(style='width:110px', ng-bind='item.videaOrderNumber', @click='ctrl.clickRow(item)', title='V0005346') V0005346
        //-   td.vui-truncate(style='width:280px', ng-bind='item.advertiserName', @click='ctrl.clickRow(item)', title='US Cellular') US Cellular
        //-   td.vui-truncate(style='width:110px', ng-bind='item.agencyName', @click='ctrl.clickRow(item)', title='Starcom') Starcom
        //-   td.vui-text-align--right.vui-truncate(style='width:90px', ng-bind='item.estimate', @click='ctrl.clickRow(item)', title='093   ') 093
        //-   td.vui-truncate(style='width:100px', ng-bind='item.startDate|vuiDate', @click='ctrl.clickRow(item)', title='02/06/2017') 02/06/2017
        //-   td.vui-truncate(style='width:90px', ng-bind='item.endDate|vuiDate', @click='ctrl.clickRow(item)', title='02/26/2017') 02/26/2017
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalCost|currency', @click='ctrl.clickRow(item)', title='$156.00') $156.00
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalSpotsNumber', @click='ctrl.clickRow(item)', title='6') 6
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalMissedSpots', @click='ctrl.clickRow(item)', title='0') 0
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalMissedSpotCost|currency', @click='ctrl.clickRow(item)', title='$0.00') $0.00
        //-   td.vui-truncate(style='width:150px', ng-bind='item.videaArchivedDate|vuiDateTime', @click='ctrl.clickRow(item)', title='')
        //-   td.vui-truncate(style='width:120px', ng-bind='item.videaArchivedByName', @click='ctrl.clickRow(item)', title='')
        //-   td.vui-text-align--center(style='width:160px', @click='ctrl.updateBuyMakegoods(item)', title='Update Buy/Makegoods')
        //-     a(href='', vui-access='Admin', type='button') Add to Schedule
        //- tr(v-for='item in items')
        //-   td.vui-text-align--center(style='width:90px')
        //-     label.vui-checkbox
        //-       input(type='checkbox', v-model='item.isVideaArchived')
        //-       span.vui-checkbox--faux
        //-   td.vui-truncate(style='width:70px', ng-bind='item.stationCallLetters', @click='ctrl.clickRow(item)', title='KMYT') KMYT
        //-   td.vui-truncate(style='width:100px', ng-bind='item.externalTrafficOrderNumber', @click='ctrl.clickRow(item)', title='133693') 133693
        //-   td.vui-truncate(style='width:110px', ng-bind='item.agencyOrderNumber', @click='ctrl.clickRow(item)', title='04306428') 04306428
        //-   td.vui-truncate(style='width:110px', ng-bind='item.videaOrderNumber', @click='ctrl.clickRow(item)', title='V0005016') V0005016
        //-   td.vui-truncate(style='width:280px', ng-bind='item.advertiserName', @click='ctrl.clickRow(item)', title='GENERAL MILLS INC') GENERAL MILLS INC
        //-   td.vui-truncate(style='width:110px', ng-bind='item.agencyName', @click='ctrl.clickRow(item)', title='GROUPM LOCAL BROADCAST') GROUPM LOCAL BROADCAST
        //-   td.vui-text-align--right.vui-truncate(style='width:90px', ng-bind='item.estimate', @click='ctrl.clickRow(item)', title='011   ') 011
        //-   td.vui-truncate(style='width:100px', ng-bind='item.startDate|vuiDate', @click='ctrl.clickRow(item)', title='06/27/2016') 06/27/2016
        //-   td.vui-truncate(style='width:90px', ng-bind='item.endDate|vuiDate', @click='ctrl.clickRow(item)', title='09/25/2016') 09/25/2016
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalCost|currency', @click='ctrl.clickRow(item)', title='$30.00') $30.00
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalSpotsNumber', @click='ctrl.clickRow(item)', title='31') 31
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalMissedSpots', @click='ctrl.clickRow(item)', title='0') 0
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalMissedSpotCost|currency', @click='ctrl.clickRow(item)', title='$0.00') $0.00
        //-   td.vui-truncate(style='width:150px', ng-bind='item.videaArchivedDate|vuiDateTime', @click='ctrl.clickRow(item)', title='')
        //-   td.vui-truncate(style='width:120px', ng-bind='item.videaArchivedByName', @click='ctrl.clickRow(item)', title='')
        //-   td.vui-text-align--center(style='width:160px', @click='ctrl.updateBuyMakegoods(item)', title='Update Buy/Makegoods')
        //-     a(href='', vui-access='Admin', type='button') Add to Schedule
        //- tr(v-for='item in items')
        //-   td.vui-text-align--center(style='width:90px')
        //-     label.vui-checkbox
        //-       input(type='checkbox', v-model='item.isVideaArchived')
        //-       span.vui-checkbox--faux
        //-   td.vui-truncate(style='width:70px', ng-bind='item.stationCallLetters', @click='ctrl.clickRow(item)', title='KMYT') KMYT
        //-   td.vui-truncate(style='width:100px', ng-bind='item.externalTrafficOrderNumber', @click='ctrl.clickRow(item)', title='')
        //-   td.vui-truncate(style='width:110px', ng-bind='item.agencyOrderNumber', @click='ctrl.clickRow(item)', title='36716527') 36716527
        //-   td.vui-truncate(style='width:110px', ng-bind='item.videaOrderNumber', @click='ctrl.clickRow(item)', title='V0005343') V0005343
        //-   td.vui-truncate(style='width:280px', ng-bind='item.advertiserName', @click='ctrl.clickRow(item)', title='US Cellular') US Cellular
        //-   td.vui-truncate(style='width:110px', ng-bind='item.agencyName', @click='ctrl.clickRow(item)', title='Starcom') Starcom
        //-   td.vui-text-align--right.vui-truncate(style='width:90px', ng-bind='item.estimate', @click='ctrl.clickRow(item)', title='037   ') 037
        //-   td.vui-truncate(style='width:100px', ng-bind='item.startDate|vuiDate', @click='ctrl.clickRow(item)', title='01/01/2015') 01/01/2015
        //-   td.vui-truncate(style='width:90px', ng-bind='item.endDate|vuiDate', @click='ctrl.clickRow(item)', title='12/26/2017') 12/26/2017
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalCost|currency', @click='ctrl.clickRow(item)', title='$354.00') $354.00
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalSpotsNumber', @click='ctrl.clickRow(item)', title='8') 8
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalMissedSpots', @click='ctrl.clickRow(item)', title='0') 0
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalMissedSpotCost|currency', @click='ctrl.clickRow(item)', title='$0.00') $0.00
        //-   td.vui-truncate(style='width:150px', ng-bind='item.videaArchivedDate|vuiDateTime', @click='ctrl.clickRow(item)', title='')
        //-   td.vui-truncate(style='width:120px', ng-bind='item.videaArchivedByName', @click='ctrl.clickRow(item)', title='')
        //-   td.vui-text-align--center(style='width:160px', @click='ctrl.updateBuyMakegoods(item)', title='Update Buy/Makegoods')
        //-     a(href='', vui-access='Admin', type='button') Add to Schedule
        //- tr(v-for='item in items')
        //-   td.vui-text-align--center(style='width:90px')
        //-     label.vui-checkbox
        //-       input(type='checkbox', v-model='item.isVideaArchived')
        //-       span.vui-checkbox--faux
        //-   td.vui-truncate(style='width:70px', ng-bind='item.stationCallLetters', @click='ctrl.clickRow(item)', title='KMYT') KMYT
        //-   td.vui-truncate(style='width:100px', ng-bind='item.externalTrafficOrderNumber', @click='ctrl.clickRow(item)', title='133730') 133730
        //-   td.vui-truncate(style='width:110px', ng-bind='item.agencyOrderNumber', @click='ctrl.clickRow(item)', title='04306461') 04306461
        //-   td.vui-truncate(style='width:110px', ng-bind='item.videaOrderNumber', @click='ctrl.clickRow(item)', title='V0005029') V0005029
        //-   td.vui-truncate(style='width:280px', ng-bind='item.advertiserName', @click='ctrl.clickRow(item)', title='GENERAL MILLS INC') GENERAL MILLS INC
        //-   td.vui-truncate(style='width:110px', ng-bind='item.agencyName', @click='ctrl.clickRow(item)', title='GROUPM LOCAL BROADCAST') GROUPM LOCAL BROADCAST
        //-   td.vui-text-align--right.vui-truncate(style='width:90px', ng-bind='item.estimate', @click='ctrl.clickRow(item)', title='012   ') 012
        //-   td.vui-truncate(style='width:100px', ng-bind='item.startDate|vuiDate', @click='ctrl.clickRow(item)', title='06/27/2016') 06/27/2016
        //-   td.vui-truncate(style='width:90px', ng-bind='item.endDate|vuiDate', @click='ctrl.clickRow(item)', title='09/25/2016') 09/25/2016
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalCost|currency', @click='ctrl.clickRow(item)', title='$880.00') $880.00
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalSpotsNumber', @click='ctrl.clickRow(item)', title='22') 22
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalMissedSpots', @click='ctrl.clickRow(item)', title='0') 0
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalMissedSpotCost|currency', @click='ctrl.clickRow(item)', title='$0.00') $0.00
        //-   td.vui-truncate(style='width:150px', ng-bind='item.videaArchivedDate|vuiDateTime', @click='ctrl.clickRow(item)', title='')
        //-   td.vui-truncate(style='width:120px', ng-bind='item.videaArchivedByName', @click='ctrl.clickRow(item)', title='')
        //-   td.vui-text-align--center(style='width:160px', @click='ctrl.updateBuyMakegoods(item)', title='Update Buy/Makegoods')
        //-     a(href='', vui-access='Admin', type='button') Add to Schedule
        //- tr(v-for='item in items')
        //-   td.vui-text-align--center(style='width:90px')
        //-     label.vui-checkbox
        //-       input(type='checkbox', v-model='item.isVideaArchived')
        //-       span.vui-checkbox--faux
        //-   td.vui-truncate(style='width:70px', ng-bind='item.stationCallLetters', @click='ctrl.clickRow(item)', title='KMYT') KMYT
        //-   td.vui-truncate(style='width:100px', ng-bind='item.externalTrafficOrderNumber', @click='ctrl.clickRow(item)', title='133775') 133775
        //-   td.vui-truncate(style='width:110px', ng-bind='item.agencyOrderNumber', @click='ctrl.clickRow(item)', title='04306471') 04306471
        //-   td.vui-truncate(style='width:110px', ng-bind='item.videaOrderNumber', @click='ctrl.clickRow(item)', title='V0005025') V0005025
        //-   td.vui-truncate(style='width:280px', ng-bind='item.advertiserName', @click='ctrl.clickRow(item)', title='GENERAL MILLS INC') GENERAL MILLS INC
        //-   td.vui-truncate(style='width:110px', ng-bind='item.agencyName', @click='ctrl.clickRow(item)', title='GROUPM LOCAL BROADCAST') GROUPM LOCAL BROADCAST
        //-   td.vui-text-align--right.vui-truncate(style='width:90px', ng-bind='item.estimate', @click='ctrl.clickRow(item)', title='012   ') 012
        //-   td.vui-truncate(style='width:100px', ng-bind='item.startDate|vuiDate', @click='ctrl.clickRow(item)', title='06/27/2016') 06/27/2016
        //-   td.vui-truncate(style='width:90px', ng-bind='item.endDate|vuiDate', @click='ctrl.clickRow(item)', title='09/25/2016') 09/25/2016
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalCost|currency', @click='ctrl.clickRow(item)', title='$205.50') $205.50
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalSpotsNumber', @click='ctrl.clickRow(item)', title='23') 23
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalMissedSpots', @click='ctrl.clickRow(item)', title='0') 0
        //-   td.vui-text-align--right.vui-truncate(style='width:100px', ng-bind='item.totalMissedSpotCost|currency', @click='ctrl.clickRow(item)', title='$0.00') $0.00
        //-   td.vui-truncate(style='width:150px', ng-bind='item.videaArchivedDate|vuiDateTime', @click='ctrl.clickRow(item)', title='')
        //-   td.vui-truncate(style='width:120px', ng-bind='item.videaArchivedByName', @click='ctrl.clickRow(item)', title='')
        //-   td.vui-text-align--center(style='width:160px', @click='ctrl.updateBuyMakegoods(item)', title='Update Buy/Makegoods')
        //-     a(href='', vui-access='Admin', type='button') Add to Schedule
</template>

<script>
  export default {
    data () {
      return {
        gridColumns: {
          stationOrderNumber: { sortable: true, isSorted: false, sortedDesc: false, title: 'Station<br>Order #', columnName: 'ExternalTrafficOrderNumber' },
          agencyOrderNumber: { sortable: true, isSorted: false, sortedDesc: false, title: 'Agency<br>Order #', columnName: 'AgencyOrderNumber' },
          orderId: { sortable: true, isSorted: false, sortedDesc: false, title: 'Videa<br>Order #', columnName: 'VideaOrderNumber' },
          advertiserName: { sortable: true, isSorted: false, sortedDesc: false, title: 'Advertiser', columnName: 'AdvertiserName' },
          agencyName: { sortable: true, isSorted: false, sortedDesc: false, title: 'Agency', columnName: 'AgencyName' },
          estimate: { sortable: true, isSorted: false, sortedDesc: false, title: 'Estimate', columnName: 'Estimate' },
          stationName: { sortable: false, isSorted: false, sortedDesc: false, title: 'Station', columnName: 'StationCallLetters' },
          flightStartDate: { sortable: true, isSorted: false, sortedDesc: false, title: 'Start Date', columnName: 'FlightStartDate' },
          flightEndDate: { sortable: true, isSorted: false, sortedDesc: false, title: 'End Date', columnName: 'FlightEndDate' },
          totalCost: { sortable: true, isSorted: false, sortedDesc: false, title: 'Order<br>Value', columnName: 'TotalCost' },
          totalSpotsNumber: { sortable: true, isSorted: false, sortedDesc: false, title: 'Spots<br>Ordered', columnName: 'TotalSpots' },
          totalMissedSpots: { sortable: true, isSorted: false, sortedDesc: false, title: 'Spots<br>Missed', columnName: 'TotalMissedSpots' },
          totalMissedSpotCost: { sortable: true, isSorted: false, sortedDesc: false, title: 'Missed<br>Value', columnName: 'TotalMissedSpotCost' },
          totalTrafficSpots: { sortable: true, isSorted: false, sortedDesc: false, title: 'Traffic<br>Spots', columnName: 'TotalTrafficSpots' }
        },
        items: [
          {
            isVideaArchived: true,
            stationCallLetters: 'KMYT',
            externalTrafficOrderNumber: '133661',
            agencyOrderNumber: '00791791',
            videaOrderNumber: 'V0005009',
            advertiserName: 'CARL KARCHER ENT INC',
            agencyName: 'INITIATIVE LA',
            estimate: '0121',
            startDate: '09/26/2016',
            endDate: '12/25/2016',
            totalCost: '1050',
            totalSpotsNumber: 30,
            totalMissedSpots: 0,
            totalMissedSpotCost: 0,
            videaArchivedDate: '12/25/2016',
            videaArchivedByName: '12/25/2016'
          }
        ]
      }
    },
    methods: {
      clickRow (item) {

      },

      updateBuyMakegoods (item) {

      }
    }
  }
</script>

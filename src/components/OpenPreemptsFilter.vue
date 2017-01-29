<!-- <open-preempts-filter filter="listfilter.value()" apply-filter="listfilterApply" clear-filter="listfilterClear" is-show-filter-errors="listisShowFilterErrors" class="ng-isolate-scope"> -->
<template lang="pug">
  .offer-preempts-filter
    form.vui-grid.vui-grid--vertical-align-end.vui-wrap(name='filterForm')
      fieldset.vui-form-element.on-valid(:class="isShowFilterErrors && !isDatesValid  ? 'vui-has-error' : 'on-valid'")
        label.vui-form-element__label Start Date
        .vui-form-element__control.vui-m-right--x-small
          //- vui-date-picker(placeholder="'MM/dd/yyyy'", v-model='startDate', name='startDate', is-required='true', v-model-options='{ allowInvalid: false }', max-date='endDate')
      fieldset.vui-form-element.on-valid(:class="isShowFilterErrors && !isDatesValid ? 'vui-has-error' : 'on-valid'")
        label.vui-form-element__label End Date
        .vui-form-element__control.vui-m-right--x-small
          //- vui-date-picker(placeholder="'MM/dd/yyyy'", v-model='endDate', name='endDate', is-required='true', v-model-options='{ allowInvalid: false }', min-date='startDate')
      fieldset.vui-form-element.vui-m-right--small
        label.vui-form-element__label(v-text='agencyConfig.displayName') Agency
        .vui-form-element__control(style='width: 11rem')
          .vui-select_container
            select.vui-select
              option(value='', disabled='', selected='selected', hidden='', v-text='agencyConfig.displayName') Agency
              option(label='AEGIS INNOV8 LLC', value='number:16') AEGIS INNOV8 LLC
              option(label='APEX EXCHANGE', value='number:32') APEX EXCHANGE
              option(label='ASSEMBLY', value='number:30') ASSEMBLY
              option(label='BRAND PROGRAMMING NETWORK-DALLAS', value='number:6') BRAND PROGRAMMING NETWORK-DALLAS
              option(label='BRAND PROGRAMMING NETWORK-DETROIT', value='number:22') BRAND PROGRAMMING NETWORK-DETROIT
              option(label='BRAND PROGRAMMING NETWORK-NEW YORK', value='number:14') BRAND PROGRAMMING NETWORK-NEW YORK
              option(label='CARAT', value='number:10') CARAT
              option(label='Check', value='number:35') Check
              option(label='DEUTSCH', value='number:38') DEUTSCH
              option(label='FITZGERALD+CO', value='number:15') FITZGERALD+CO
              option(label='Fogarty and Klein, Inc. dba FKM', value='number:34') Fogarty and Klein, Inc. dba FKM
              option(label='GLOBAL TEAM BLUE', value='number:8') GLOBAL TEAM BLUE
              option(label='GROUP M MOTION', value='number:19') GROUP M MOTION
              option(label='GROUPM LOCAL BROADCAST', value='number:1') GROUPM LOCAL BROADCAST
              option(label='GROUPM MATRIX', value='number:11') GROUPM MATRIX
              option(label='HAWORTH MARKETING + MEDIA LLC', value='number:29') HAWORTH MARKETING + MEDIA LLC
              option(label='INITIATIVE ATLANTA', value='number:37') INITIATIVE ATLANTA
              option(label='INITIATIVE LA', value='number:4') INITIATIVE LA
              option(label='KSM AUSTIN', value='number:2') KSM AUSTIN
              option(label='KSM CHICAGO', value='number:20') KSM CHICAGO
              option(label='MARTIN RETAIL', value='number:7') MARTIN RETAIL
              option(label='MARTIN WILLIAMS', value='number:42') MARTIN WILLIAMS
              option(label='MBUY', value='number:28') MBUY
              option(label='MEDIAOCEAN  SPECTRA DS  IDIINFO', value='number:26') MEDIAOCEAN SPECTRA DS IDIINFO
              option(label='MEDIAVEST NEW YORK', value='number:9') MEDIAVEST NEW YORK
              option(label='OMD', value='number:18') OMD
              option(label='OMD ENTERTAINMENT', value='number:24') OMD ENTERTAINMENT
              option(label='PHD USA', value='number:25') PHD USA
              option(label='RUBIN POSTAER & ASSOCIATES', value='number:40') RUBIN POSTAER & ASSOCIATES
              option(label='SAMPLE ADVERTISING AGENCY', value='number:36') SAMPLE ADVERTISING AGENCY
              option(label='SPARK', value='number:23') SPARK
              option(label='STARCOM', value='number:5') STARCOM
              option(label='Starcom', value='number:33') Starcom
              option(label='TEAM DETROIT', value='number:41') TEAM DETROIT
              option(label='THE MIDAS EXCHANGE', value='number:12') THE MIDAS EXCHANGE
              option(label='THE RICHARDS GROUP', value='number:17') THE RICHARDS GROUP
              option(label='UM DALLAS', value='number:3') UM DALLAS
              option(label='UM DETROIT', value='number:21') UM DETROIT
              option(label='UM LA', value='number:31') UM LA
              option(label='UM NEW YORK', value='number:13') UM NEW YORK
              option(label='ZENITH MEDIA ATLANTA', value='number:39') ZENITH MEDIA ATLANTA
              option(label='ZENTIH MEDIA CHICAGO', value='number:27') ZENTIH MEDIA CHICAGO
      fieldset.vui-form-element.vui-m-right--small
        label.vui-form-element__label(v-text='advertiserConfig.displayName') Advertiser
        .vui-form-element__control(style='width: 11rem;')
          .vui-select_container
            select.vui-select
              option(value='', disabled='', selected='selected', hidden='', v-text='advertiserConfig.displayName') Advertiser
              option(label="AARON'S, INC.", value='number:102') AARON'S, INC.
              option(label='ABBVIE', value='number:65') ABBVIE
              option(label='ALABAMA ACURA DEALRS', value='number:96') ALABAMA ACURA DEALRS
              option(label='ALDI INC.', value='number:41') ALDI INC.
              option(label='AM FAMILY INSURANCE', value='number:95') AM FAMILY INSURANCE
              option(label='AMERICAN HONDA MOTOR CO., INC.', value='number:27') AMERICAN HONDA MOTOR CO., INC.
              option(label="ARBY'S TULSA", value='number:94') ARBY'S TULSA
              option(label='ASPEN DENTAL', value='number:66') ASPEN DENTAL
              option(label='AT&T WIRED', value='number:36') AT&T WIRED
              option(label='AT&T WIRED', value='number:50') AT&T WIRED
              option(label='AUDI OF AMERICA', value='number:13') AUDI OF AMERICA
              option(label='AUDI OF AMERICA', value='number:14') AUDI OF AMERICA
              option(label='AUDI OF AMERICA', value='number:98') AUDI OF AMERICA
              option(label='AUDI OF AMERICA', value='number:103') AUDI OF AMERICA
              option(label='BAYER', value='number:110') BAYER
              option(label='BG BUICK RETAIL-NC', value='number:47') BG BUICK RETAIL-NC
              option(label='BG BUICK RETAIL-SE', value='number:52') BG BUICK RETAIL-SE
              option(label='BG GMC RETAIL-NC', value='number:48') BG GMC RETAIL-NC
              option(label='BG GMC RETAIL-SE', value='number:19') BG GMC RETAIL-SE
              option(label="BLOOMIN' BRANDS, INC.", value='number:69') BLOOMIN' BRANDS, INC.
              option(label='BMW CO-OP CENTRAL', value='number:39') BMW CO-OP CENTRAL
              option(label='BMW CO-OP SOUTH', value='number:30') BMW CO-OP SOUTH
              option(label='BMW CO-OP SOUTH', value='number:85') BMW CO-OP SOUTH
              option(label='BON-TON STORES, INC', value='number:44') BON-TON STORES, INC
              option(label='BP PLC', value='number:37') BP PLC
              option(label='BP PLC', value='number:109') BP PLC
              option(label="CABELA'S", value='number:46') CABELA'S
              option(label='CABLE ONE-FEE', value='number:87') CABLE ONE-FEE
              option(label="CAPTAIN D'S", value='number:55') CAPTAIN D'S
              option(label='CARL KARCHER ENT INC', value='number:5') CARL KARCHER ENT INC
              option(label='Check', value='number:74') Check
              option(label='CHEVROLET RETAIL NC', value='number:43') CHEVROLET RETAIL NC
              option(label='CHEVROLET RETAIL SC', value='number:12') CHEVROLET RETAIL SC
              option(label='CHEVROLET RETAIL SE', value='number:17') CHEVROLET RETAIL SE
              option(label='CHICAGO TDA', value='number:57') CHICAGO TDA
              option(label='CHICK-FIL-A INC.', value='number:29') CHICK-FIL-A INC.
              option(label='COMCAST CABLE', value='number:24') COMCAST CABLE
              option(label='COMCAST SOUTH', value='number:25') COMCAST SOUTH
              option(label='COMMUNITY COFFEE CO', value='number:88') COMMUNITY COFFEE CO
              option(label='COX COMMUNICATIONS, INC.', value='number:10') COX COMMUNICATIONS, INC.
              option(label='DIRECT GENERAL    DX', value='number:35') DIRECT GENERAL DX
              option(label='DISNEY MOTION PICTUR', value='number:49') DISNEY MOTION PICTUR
              option(label='FIRST COAST BPG TRUCK DEALER G', value='number:51') FIRST COAST BPG TRUCK DEALER G
              option(label='FLOOR & DECOR', value='number:26') FLOOR & DECOR
              option(label='FOCUS FEATURES    DX', value='number:16') FOCUS FEATURES DX
              option(label='GANDER MOUNTAIN COMPANY', value='number:91') GANDER MOUNTAIN COMPANY
              option(label='GENERAL MILLS INC', value='number:1') GENERAL MILLS INC
              option(label='GERBER COLLISION', value='number:60') GERBER COLLISION
              option(label='GREATER TULSA AREA BPG DEALERS', value='number:8') GREATER TULSA AREA BPG DEALERS
              option(label="HARDEE'S CORPORATE", value='number:80') HARDEE'S CORPORATE
              option(label='HILCO MERCHANT RESOURCES, LLC', value='number:45') HILCO MERCHANT RESOURCES, LLC
              option(label='HOME DEPOT - GENERAL', value='number:104') HOME DEPOT - GENERAL
              option(label='HONEYWELL', value='number:62') HONEYWELL
              option(label='JENNIE-O', value='number:53') JENNIE-O
              option(label='JENNIE-O', value='number:107') JENNIE-O
              option(label="JIMMY JOHN'S", value='number:38') JIMMY JOHN'S
              option(label='JOHN DEERE', value='number:99') JOHN DEERE
              option(label='KRAFT FOODS GROUP INC', value='number:6') KRAFT FOODS GROUP INC
              option(label='LACTALIS', value='number:28') LACTALIS
              option(label='LA-Z-BOY DEALERS', value='number:97') LA-Z-BOY DEALERS
              option(label='LONGHORN STEAKHOUSE', value='number:20') LONGHORN STEAKHOUSE
              option(label='Mattress Firm', value='number:73') Mattress Firm
              option(label='MEIJER', value='number:89') MEIJER
              option(label='MOPAR (CHRYSLER GROUP LLC)', value='number:63') MOPAR (CHRYSLER GROUP LLC)
              option(label="MOXIE - SONNY'S FRANCHISE CO", value='number:70') MOXIE - SONNY'S FRANCHISE CO
              option(label='NATIONAL VISION, INC.', value='number:67') NATIONAL VISION, INC.
              option(label='NISSAN SOUTHEAST', value='number:33') NISSAN SOUTHEAST
              option(label='OKLAHOMA FDAF', value='number:9') OKLAHOMA FDAF
              option(label='PARAMOUNT', value='number:32') PARAMOUNT
              option(label='PNC FINANCIAL SERVICES', value='number:84') PNC FINANCIAL SERVICES
              option(label='REILY FOODS COMPANY', value='number:78') REILY FOODS COMPANY
              option(label='REMAX-MID STA/DIXIE', value='number:18') REMAX-MID STA/DIXIE
              option(label='RENT A CENTER', value='number:111') RENT A CENTER
              option(label='RETAIL CHRYSLER', value='number:81') RETAIL CHRYSLER
              option(label='RETAIL DODGE', value='number:21') RETAIL DODGE
              option(label='RETAIL DODGE', value='number:59') RETAIL DODGE
              option(label='RETAIL DODGE', value='number:82') RETAIL DODGE
              option(label='RETAIL JEEP', value='number:3') RETAIL JEEP
              option(label='RETAIL JEEP', value='number:31') RETAIL JEEP
              option(label='RETAIL JEEP', value='number:83') RETAIL JEEP
              option(label='RETAIL RAM', value='number:4') RETAIL RAM
              option(label='RETAIL RAM', value='number:22') RETAIL RAM
              option(label='RETAIL RAM', value='number:86') RETAIL RAM
              option(label='SELECT BPG DEALER ASSOCIATION', value='number:90') SELECT BPG DEALER ASSOCIATION
              option(label='SHELL OIL CO      DX', value='number:101') SHELL OIL CO DX
              option(label='SONIC SPLIT BUDGET', value='number:92') SONIC SPLIT BUDGET
              option(label='SONY PICTURES ENT', value='number:68') SONY PICTURES ENT
              option(label='SOUTHEAST FDAF', value='number:100') SOUTHEAST FDAF
              option(label='SOUTHEASTERN GROCERS', value='number:54') SOUTHEASTERN GROCERS
              option(label='SOUTHEASTERN GROCERS', value='number:79') SOUTHEASTERN GROCERS
              option(label='SUBARU', value='number:7') SUBARU
              option(label='SUBARU OF AMERICA', value='number:42') SUBARU OF AMERICA
              option(label='SUBARU RG DISCR FNDS', value='number:23') SUBARU RG DISCR FNDS
              option(label='SUBARU RG DISCR FNDS', value='number:64') SUBARU RG DISCR FNDS
              option(label='TACO BELL CORP.', value='number:93') TACO BELL CORP.
              option(label='TACO BUENO RESTAURANTS', value='number:61') TACO BUENO RESTAURANTS
              option(label='test', value='number:72') test
              option(label='THRIVENT FINANCIAL', value='number:112') THRIVENT FINANCIAL
              option(label='TRAVEL MICHIGAN', value='number:40') TRAVEL MICHIGAN
              option(label='UNITED AIRLINES', value='number:34') UNITED AIRLINES
              option(label='UNITED AIRLINES', value='number:108') UNITED AIRLINES
              option(label='US Cellular', value='number:71') US Cellular
              option(label='US Cellular', value='number:75') US Cellular
              option(label='US Cellular', value='number:76') US Cellular
              option(label='VICTORY TEST CLIENT', value='number:56') VICTORY TEST CLIENT
              option(label='VICTORY TEST CLIENT', value='number:77') VICTORY TEST CLIENT
              option(label='VML (QUIKTRIP)', value='number:15') VML (QUIKTRIP)
              option(label='VOLKSWAGEN OF AMER', value='number:58') VOLKSWAGEN OF AMER
              option(label='VOLKSWAGEN OF AMER', value='number:105') VOLKSWAGEN OF AMER
              option(label='VOLKSWAGEN OF AMER', value='number:106') VOLKSWAGEN OF AMER
              option(label='WAL-MART STORES INC', value='number:11') WAL-MART STORES INC
              option(label='WHATABURGER', value='number:2') WHATABURGER
      fieldset.vui-form-element.vui-m-right--small
        label.vui-form-element__label(for='') Station Order#
        .vui-form-element__control
          input.vui-input(type='text', maxlength='128', name='stationOrderPattern', v-model='stationOrderPattern', placeholder='Station Order#')
      fieldset.vui-form-element.vui-m-right--small
        label.vui-form-element__label(for='') Videa Order#
        .vui-form-element__control
          input.vui-input(type='text', maxlength='128', name='videaOrderPattern', v-model='videaOrderPattern', placeholder='Videa Order#')
      fieldset.vui-form-element.vui-m-right--small
        input.vui-button.vui-button--brand(type='submit', @click='applyFilter', value='Search')
      fieldset.vui-form-element
        input.vui-button.vui-button--neutral(type='button', @click='filterClear', value='Clear')
    //- .filter-validation.vui-theme--shade.error
    //-   ul.vui-p-top--xxx-small
    //-     li
    //-       i.glyphicon.glyphicon-warning-sign.required.vui-m-left--xxx-small.vui-m-right--xx-small
    //-       | Please select a valid 'Start Date'.
    //-     li
    //-       i.glyphicon.glyphicon-warning-sign.required.vui-m-left--xxx-small.vui-m-right--xx-small
    //-       | Please select a valid 'End Date'.
    //-     li
    //-       i.glyphicon.glyphicon-warning-sign.required.vui-m-left--xxx-small.vui-m-right--xx-small
    //-       | Invalid date range. 'Start Date' cannot be greater than 'End Date'.
</template>

<script>
  export default {
    props: [],
    data () {
      return {
        isShowFilterErrors: false,
        isDatesValid: true,
        stationOrderPattern: '',
        videaOrderPattern: '',
        agencyConfig: {
          displayName: ''
        },
        advertiserConfig: {
          displayName: ''
        }
      }
    },
    methods: {
      applyFilter () {

      },
      filterClear () {

      }
    }
  }
</script>

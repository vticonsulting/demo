<template lang="jade">
  .avails-summary


    h2.vui-text-heading--medium.vui-m-bottom--medium.vui-box(style='background-color: #fff', v-show='loading')
      i.fa.fa-refresh.fa-spin.vui-m-right--small(style='color: hsla(196, 46%, 48%, 1)')
      | {{loadingMessage}}

    h1.vui-text-heading--large.vui-m-bottom--medium Summary

    .vui-box.vui-grid.vui-grid--align-spread.vui-m-bottom--large.vui-wrap.vui-theme--default
      .vui-form-element
        label.vui-form-element__label Client
        .vui-form-element__control
          span.vui-form-element__static {{avail.client}}

      .vui-form-element
        label.vui-form-element__label Product
        .vui-form-element__control
          span.vui-form-element__static {{avail.product}}

      .vui-form-element
        label.vui-form-element__label Estimate
        .vui-form-element__control
          span.vui-form-element__static {{avail.estimate}}

      .vui-form-element
        label.vui-form-element__label Campaign Name
        .vui-form-element__control
          span.vui-form-element__static {{avail.campaignName}}

      .vui-form-element
        label.vui-form-element__label Expiration Date
        .vui-form-element__control
          span.vui-form-element__static {{avail.expirationDate}}

      .vui-form-element
        label.vui-form-element__label Start Date
        .vui-form-element__control
          span.vui-form-element__static {{avail.startDate}}

      .vui-form-element
        label.vui-form-element__label End Date
        .vui-form-element__control
          span.vui-form-element__static {{avail.endDate}}

      .vui-form-element
        label.vui-form-element__label Gross Market Budget
        .vui-form-element__control
          span.vui-form-element__static {{avail.grossMarketBudget | numberWithCommas | formatMoney}}

      .vui-form-element
        label.vui-form-element__label Target GRP Goal
        .vui-form-element__control
          span.vui-form-element__static {{avail.targetGrpGoal}}

      .vui-form-element
        label.vui-form-element__label Primary Target
        .vui-form-element__control
          span.vui-form-element__static {{avail.primaryTarget}}

    div(v-show='!loading')
      .vui-grid.vui-grid--align-spread
        h2.vui-text-heading--large.vui-m-bottom--medium Detail
        .buttons
          button.vui-m-right--xx-small.vui-button.vui-button--secondary(v-link='{name: "buyers.avails", exact: true}') Save and Close
          button.vui-m-right--xx-small.vui-button.vui-button--secondary(v-link='{name: "buyers.avails", exact: true}') Cancel
          a.vui-button.vui-button--brand(@click.prevent='exportAvail()') Export Avail

      .vui-tabs--scoped
        ul.vui-tabs--scoped__nav(role='tablist')
          li.vui-tabs--scoped__item.vui-active.vui-text-heading--label(title='WVVV', role='presentation' v-link-active)
            a.vui-tabs--scoped__link(@click.prevent='', href='#', role='tab', tabindex='0', aria-selected='true', aria-controls='tab-default-1')
              | WVVV
      #wnn.vui-tabs--scoped__content.vui-p-around--x-large.vui-show(role='tabpanel')

        .vui-scrollable--x.vui-m-bottom--medium
          table.vui-table.vui-table--nested-rows.vui-no-row-hover
            thead
              tr
                th
                  .vui-form-element
                    .vui-form-element__control
                      label.vui-checkbox
                        input#checkbox-01(type='checkbox', name='options', checked='true')
                        span.vui-checkbox--faux
                        span.vui-form-element__label(style='color: white') Program
                th Avg. Rate
                th
                  | Avg. Rating
                  sup 1
                th
                  | Avg. CPP
                  sup 1
                th Daypart
                th Start Date
                th End Date
                th Start Time
                th End Time
                th Length
            tbody(v-for="(index, program) in programs")
              tr.program(v-if='program.active', :class='(index % 2 === 0) ? "vui-highlight" : ""')
                td
                  .vui-grid
                    a.vui-align-middle(v-if='program.details', href='#', @click.prevent='program.expanded = !program.expanded')
                      icon.vui-align-middle(:name="(program.expanded) ? 'caret-lower-right' : 'caret-right'")
                    .vui-form-element(:class='[!program.details ? "vui-m-left--medium" : ""]')
                      .vui-form-element__control
                        label.vui-checkbox
                          input#checkbox-01(type='checkbox', name='options', checked='true')
                          span.vui-checkbox--faux
                          span.vui-form-element__label {{ program.name }}
                td.vui-text-align--right.u-width-medium {{ program.avgRate | numberWithCommas | formatMoney }}
                td.vui-text-align--right.u-width-xx-small {{ program.avgRating | formatRating }}
                td.vui-text-align--right.u-width-medium {{ program.avgCpp | numberWithCommas | formatMoney }}
                td.u-width-medium {{ program.daypart }}
                td.u-width-medium {{ program.flightStartDate }}
                td.u-width-medium {{ program.flightEndDate }}
                td.u-width-medium {{ program.startTime }}
                td.u-width-medium {{ program.endTime }}
                td.vui-text-align--center.u-width-small {{ program.spotLength }}
              template(v-if='program.details', v-for='detail in program.details')
                tr.detail(v-show='program.expanded')
                  td
                    .vui-form-element
                      .vui-form-element__control
                        label.vui-checkbox
                          input#checkbox-01(type='checkbox', name='options', checked='true')
                          span.vui-checkbox--faux
                      span {{detail.flightStartDate}} - {{detail.flightEndDate}}
                  td.vui-text-align--right.u-width-medium {{ detail.avgRate | numberWithCommas | formatMoney }}
                  td.vui-text-align--right.u-width-xx-small {{ detail.avgRating | formatRating }}
                  td.vui-text-align--right.u-width-medium {{ detail.avgCpp | numberWithCommas | formatMoney }}
                  td.u-width-medium
                  td.u-width-medium
                  td.u-width-medium
                  td.u-width-medium
                  td.u-width-medium
                  td.vui-text-align--center.u-width-small
        p.vui-text-body--small
          sup.vui-m-right--xx-small 1
          span Nielsen source or data derived from Nielsen
</template>

<script>
  import store from '../../../store'
  import Icon from '../../../components/Icon.vue'

  export default {
    components: {
      Icon
    },

    data () {
      return {
        sharedState: store.state,
        loading: false,
        loadingMessage: null,
        loadingMessages: [
          'Request sent...',
          'Matching inventory...',
          'Almost there, getting prices and ratings...',
          '...presenting your avails.'
        ],
        avail: {
          client: 'Piedmont Healthcare',
          product: 'HEA',
          estimate: '57',
          campaignName: "WASHI WVVV PIE-HEA-57 Q2'16",
          expirationDate: '05/03/16',
          startDate: '04/25/16',
          endDate: '06/05/16',
          grossMarketBudget: '140000',
          targetGrpGoal: '800',
          primaryTarget: 'A25-54'
        },
        programs: []
      }
    },

    methods: {
      doSomething () {
        return this.loadingMessage = ''
      },

      exportAvail () {
        download('hello world', 'piedmont-healthcare-avail.xml', 'text/xml')
        // $.ajax({
        //     url: '/download.html',
        //     success: download.bind(true, 'text/html', 'dlAjaxCallback.html')
        // });
      },

      fetchPricing () {
        this.$http.get(store.apiHost + '/requestAvails')
          .then((response) => {
            this.programs = response.data
          }, (response) => {
            // error callback
          })
      },

      delay (ms) {
        var ctr
        var rej
        var p = new Promise(function (resolve, reject) {
          ctr = setTimeout(resolve, ms)
          rej = reject
        })
        p.cancel = function () {
          clearTimeout(ctr)
          rej(Error('Cancelled'))
        }
        return p
      }
    },

    ready () {
      // setTimeout(() => this.show = false, 3000)

      this.loading = true
      // setInterval(() => {
      //   this.loadingMessage = 'Request sent...'
      //   this.loading = false
      // }, 3000)

      // this.loading = true
      // // GET request
      // this.$http({ url: '/someUrl', method: 'GET'})
      //   .then(function (response) {
      //       // success callback
      //       this.loading = false
      //   }, function (response) {
      //       // error callback
      //   })
      // http://stackoverflow.com/questions/34255351/is-there-a-version-of-settimeout-that-returns-an-es6-promise
      this.delay(0)
        .then(() => {
          this.loadingMessage = `Step 1 of 4: ${this.loadingMessages[0]}`
          return this.delay(1000)
        })
        .then(() => {
          this.loadingMessage = `Step 2 of 4: ${this.loadingMessages[1]}`
          return this.delay(1000)
        })
        .then(() => {
          this.loadingMessage = `Step 3 of 4: ${this.loadingMessages[2]}`
          return this.delay(1000)
        })
        .then(() => {
          this.loadingMessage = `Step 4 of 4: ${this.loadingMessages[3]}`
          return this.delay(1000)
        })
        .then(() => {
          this.loading = false
        })
    },

    created () {
      this.sharedState.activeApp = 'buyers'
      this.fetchPricing()
    }
  }
</script>

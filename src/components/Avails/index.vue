<template lang="jade">
  .avails-view
    page-heading.vui-m-bottom--medium(title='Avails')
    panel.vui-m-bottom--large(title='View Selection')

      form.vui-grid.vui-grid--vertical-align-end(action='')
        fieldset.vui-form-element.vui-m-right--small
          label.vui-form-element__label Advertiser
          .vui-form-element__control
            input.vui-input(v-focus='', type='text', name='advertiser', placeholder='Advertiser')

        fieldset.vui-form-element.vui-m-right--small
          label.vui-form-element__label Agency
          .vui-form-element__control
            input.vui-input(type='text', name='agency', placeholder='Agency')

        fieldset.vui-form-element.vui-m-right--small
          label.vui-form-element__label Avail Number
          .vui-form-element__control
          input.vui-input(type='text', name='availNumber', placeholder='Avail #')

        fieldset.vui-form-element.vui-m-right--small
          label.vui-form-element__label Status
          .vui-form-element__control
            .vui-select_container
              select.vui-select(id='')
                option All Avails
                option Pending Buyer Request
                option Released

        fieldset.vui-form-element
          button.vui-button.vui-button--brand.vui-m-right--x-small(@click.prevent='') Search

    .vui-scrollable--x
      table.vui-table.vui-no-row-hover
        thead
          tr
            th
              a.vui-grid.vui-grid--align-spread(@click.prevent='', href="#")
                span.vui-align-middle Avail #
                span.vui-align-middle
                  icon(name="sort-asc", style="color: hsla(192, 9%, 89%, 1)")
            th
              a.vui-grid.vui-grid--align-spread(@click.prevent='', href="#")
                span.vui-align-middle Status
                span.vui-align-middle
                  icon(name="sort-asc", style="color: hsla(192, 9%, 89%, 1)")
            th
              a.vui-grid.vui-grid--align-spread(@click.prevent='', href="#")
                span.vui-align-middle Released
                span.vui-align-middle
                  icon(name="sort-asc", style="color: hsla(192, 9%, 89%, 1)")
            th
              a.vui-grid.vui-grid--align-spread(@click.prevent='', href="#")
                span.vui-align-middle Advertiser
                span.vui-align-middle
                  icon(name="sort", style="color: hsla(192, 9%, 89%, .5)")
            th
              a.vui-grid.vui-grid--align-spread(@click.prevent='', href="#")
                span.vui-align-middle Product
                span.vui-align-middle
                  icon(name="sort", style="color: hsla(192, 9%, 89%, .5)")
            th
              a.vui-grid.vui-grid--align-spread(@click.prevent='', href="#")
                span.vui-align-middle Estimate #
                span.vui-align-middle
                  icon(name="sort", style="color: hsla(192, 9%, 89%, .5)")
            th
              a.vui-grid.vui-grid--align-spread(@click.prevent='', href="#")
                span.vui-align-middle Start
                span.vui-align-middle
                  icon(name="sort", style="color: hsla(192, 9%, 89%, .5)")
            th
              a.vui-grid.vui-grid--align-spread(@click.prevent='', href="#")
                span.vui-align-middle End
                span.vui-align-middle
                  icon(name="sort", style="color: hsla(192, 9%, 89%, .5)")
            th
              a.vui-grid.vui-grid--align-spread(@click.prevent='', href="#")
                span.vui-align-middle Agency
                span.vui-align-middle
                  icon(name="sort", style="color: hsla(192, 9%, 89%, .5)")
            th
              a.vui-grid.vui-grid--align-spread(@click.prevent='', href="#")
                span.vui-align-middle Last Updated
                span.vui-align-middle
                  icon(name="sort", style="color: hsla(192, 9%, 89%, .5)")
        tbody(v-for='(index, avail) in avails')
          tr(:class='(index % 2 === 1) ? "vui-highlight" : ""')
            td
              a(v-if='avail.versions', href='#', @click.prevent='toggleDetail(avail, $event)')
                svg.vui-icon.vui-icon--x-small(style="width: 1rem; height: 1rem;margin-left: -1rem")
                  use(xlink:href="/Content/assets/icons.svg#icon-{{ avail.expanded ? 'caret-lower-right' : 'caret-right'}}", xmlns:xlink='http://www.w3.org/1999/xlink')
              a.vui-align-middle(@click.prevent='showAvail(avail.id)', href='#') {{avail.id}}
            td
              span.vui-badge(:class='avail.availStatus')  {{avail.availStatus}}
            td {{avail.releasedDate}}
            td {{avail.advertiser}}
            td {{avail.product}}
            td {{avail.estimateNumber}}
            td {{avail.flightStartDate}}
            td {{avail.flightEndDate}}
            td {{avail.agency}}
            td {{avail.lastUpdated}}
          tr(v-show='avail.expanded')
            td.expanded(colspan='10')
              .vui-box.vui-theme--shade.vui-grid.vui-grid--align-spread.vui-m-top--medium
                h3.vui-text-heading--small Version History
              table.vui-table.vui-no-row-hover.vui-m-bottom--large(style='background: white')
                thead
                  tr
                    th Version
                    th Date Submitted
                    th Time Submitted
                    th Submitted by
                    th
                tbody
                  tr(v-for='version in avail.versions | orderBy "id" -1')
                    td {{ version.id }}
                    td {{ version.dateSubmitted }}
                    td {{ version.timeSubmitted }}
                    td {{ version.submittedBy }}
                    td
                      //- a(v-link="{ name: 'reps.avail', params: { id: avail.id }, query: { version: version.id } }") View
                      a(@click.prevent='showAvail(avail.id, version.id)', href='#') View
</template>

<script>
  import $ from 'jquery'
  import store from '../../store'
  import Icon from '../Icon.vue'
  import PageHeading from '../PageHeading.vue'
  import Panel from '../Panel.vue'

  export default {
    components: {Icon, PageHeading, Panel},

    props: {
      availRoute: {
        type: String
      }
    },

    data () {
      return {
        sharedState: store.state,
        apiHost: store.apiHost,
        application: 'reps',
        avails: [],
        testDate: new Date('05 October 2011 14:48 UTC').toISOString()
      }
    },

    methods: {
      fetchAvails () {
        this.$http.get(store.apiHost + '/avails')
          .then((response) => {
            this.avails = response.data
            this.$broadcast('availsRetrieved', response.data)
          }, (response) => {
            // error callback
          })
      },

      toggleDetail (avail, event) {
        let $element = $(event.target).closest('tr')
        avail.expanded = !avail.expanded
        if (avail.expanded) {
          // $element.css({ 'backgroundColor': '#cee5eb'})
        } else {
          // $element.css({ 'backgroundColor': '#ffffff'})
        }
      },

      showAvail (avail, version = '') {
        let routeInfo = {
          name: this.availRoute,
          params: {
            id: avail
          }
        }

        if (version) {
          routeInfo.query = { version: version }
        }

        this.$route.router.go(routeInfo)
      }
    },

    created () {
      this.fetchAvails()
    }
  }
</script>

<template lang="jade">
  #display-settings.vui-p-around--x-large.vui-tabs--scoped__content(role='tabpanel', aria-labelledby='tab-scoped-3__item', v-show="activeTab == '#display-settings'")

    h2.vui-text-heading--medium.vui-m-bottom--medium Display Settings

    p.vui-text-longform.vui-m-bottom--large &nbsp;

    form
      .vui-grid.vui-grid--align-spread
        .vui-col.vui-size--12-of-12.vui-medium-size--1-of-2.vui-large-size--1-of-2.vui-p-right--xx-large
          fieldset.vui-form-element.vui-m-bottom--large
            label.vui-form-element__label(for='stationAudienceShare') Station Audience Share
            .vui-form-element__control
              input#stationAudienceShare.vui-input(type='text', v-model='sharedState.settings.stationAudienceShare | percentDisplay')
            .vui-form-element__help Format xx.xx%
          fieldset.vui-form-element.vui-m-bottom--large
            legend.form-element__legend.vui-form-element__label Select a view format
            .vui-form-element__control
              label.vui-radio
                input(type='radio', name='viewFormat')
                span.vui-radio--faux
                span.vui-form-element__label Graphical View
              label.vui-radio
                input(type='radio', name='viewFormat', :checked='true')
                span.vui-radio--faux
                span.vui-form-element__label Spreadsheet View (default)
          fieldset.vui-form-element.vui-m-bottom--large
            legend.form-element__legend.vui-form-element__label Select use
            .vui-form-element__control
              label.vui-radio
                input(type='radio', name='use', :checked='true')
                span.vui-radio--faux
                span.vui-form-element__label Cost Per Thousand
              label.vui-radio
                input(type='radio', name='use', :checked='true')
                span.vui-radio--faux
                span.vui-form-element__label Cost Per Point (default)
          fieldset.vui-form-element.vui-m-bottom--large
            legend.form-element__legend.vui-form-element__label Calendar view
            .vui-form-element__control
              label.vui-radio
                input(type='radio', name='calendarStyle')
                span.vui-radio--faux
                span.vui-form-element__label Gregorian
              label.vui-radio
                input(type='radio', name='calendarStyle', :checked='true')
                span.vui-radio--faux
                span.vui-form-element__label Broadcast (default)
          fieldset.vui-form-element.vui-m-bottom--large
            label.vui-form-element__label(for='numberOfTableRows') Default number of table rows
            .vui-form-element__control
              .vui-select_container
                select#numberOfTableRows.vui-select
                  option 25
        .vui-size--12-of-12.vui-medium-size--1-of-2.vui-large-size--1-of-2
          fieldset.vui-form-element.vui-m-bottom--large
            label.vui-form-element__label(for='primaryDemographic') Primary Demographic
            .vui-form-element__control
              .vui-select_container
                select#primaryDemographic.vui-select
                  option A25-54
            .vui-form-element__help Default demographic from calculations

          legend.vui-form-element__label Additional Demographics

          .vui-grid.vui-grid--align-spread.vui-p-around--x-large
            div(v-for="demoGroup in demographics")
              fieldset.vui-form-element.vui-m-bottom--small(v-for='value in demoGroup')
                .vui-form-element__control(v-for='item in value')
                  label.vui-checkbox
                    input(type='checkbox', name='options', id='checkbox-01', :checked='item.checked')
                    span.vui-checkbox--faux
                    span.vui-form-element__label {{ item.group }}

            //- div
            //-   fieldset.vui-form-element.vui-m-bottom--small(v-for='demographic in demographics')
            //-     .vui-form-element__control
            //-       label.vui-checkbox
            //-         input(type='checkbox', name='options', id='checkbox-01', :checked='demographic.checked')
            //-         span.vui-checkbox--faux
            //-         span.vui-form-element__label {{ demographic.group }}
            //- div
            //-   fieldset.vui-form-element.vui-m-bottom--small(v-for='demographic in demographics')
            //-     .vui-form-element__control
            //-       label.vui-checkbox
            //-         input(type='checkbox', name='options', id='checkbox-01', :checked='demographic.checked')
            //-         span.vui-checkbox--faux
            //-         span.vui-form-element__label {{ demographic.group }}
            //- div
            //-   fieldset.vui-form-element.vui-m-bottom--small(v-for='demographic in demographics')
            //-     .vui-form-element__control
            //-       label.vui-checkbox
            //-         input(type='checkbox', name='options', id='checkbox-01', :checked='demographic.checked')
            //-         span.vui-checkbox--faux
            //-         span.vui-form-element__label {{ demographic.group }}
            //- div
            //-   template(v-for='($index, demographic) in demographics', :value='$index')
            //-     fieldset.vui-form-element.vui-m-bottom--small(v-for='value in demographic')
            //-       //- legend.vui-form-element__legend.vui-form-element__label {{ $key | toTitleCase }}
            //-       .vui-form-element__control(v-for='item in value')
            //-         label.vui-checkbox
            //-           input(type='checkbox', name='options', id='checkbox-01', :checked='item.checked')
            //-           span.vui-checkbox--faux
            //-           span.vui-form-element__label M{{ item.group }}
            //- div
            //-   template(v-for='($index, demographic) in demographics', :value='$index')
            //-     fieldset.vui-form-element.vui-m-bottom--small(v-for='value in demographic')
            //-       //- legend.vui-form-element__legend.vui-form-element__label {{ $key | toTitleCase }}
            //-       .vui-form-element__control(v-for='item in value')
            //-         label.vui-checkbox
            //-           input(type='checkbox', name='options', id='checkbox-01', :checked='item.checked')
            //-           span.vui-checkbox--faux
            //-           span.vui-form-element__label F{{ item.group }}
            //- div
            //-   template(v-for='($index, demographic) in demographics', :value='$index')
            //-     fieldset.vui-form-element.vui-m-bottom--small(v-for='value in demographic')
            //-       //- legend.vui-form-element__legend.vui-form-element__label {{ $key | toTitleCase }}
            //-       .vui-form-element__control(v-for='item in value')
            //-         label.vui-checkbox
            //-           input(type='checkbox', name='options', id='checkbox-01', :checked='item.checked')
            //-           span.vui-checkbox--faux
            //-           span.vui-form-element__label A{{ item.group }}

      .vui-form-element
        button.vui-button.vui-button--brand.vui-m-right--xx-small(@click.prevent='') Save
        button.vui-button.vui-button--neutral(@click.prevent='') Cancel
</template>

<script>
  import store from '../../store'
  import PageHeading from '../../components/PageHeading.vue'

  export default {
    components: { PageHeading },

    data () {
      return {
        sharedState: store.state,
        newpassword: '',
        activeTab: '#display-settings',
        demographics: require('./demos.json'),
        demographics2: [
          {
            'teen': [
              {
                group: '12+',
                checked: false
              },
              {
                group: '12-17',
                checked: false
              },
              {
                group: '12-20',
                checked: false
              }
            ]
          },
          {
            'young-adult': [
              {
                group: '18+',
                checked: false
              },
              {
                group: '18-24',
                checked: false
              },
              {
                group: '18-34',
                checked: true
              },
              {
                group: '18-49',
                checked: true
              },
              {
                group: '18-54',
                checked: false
              },
              {
                group: '18-64',
                checked: false
              }
            ]
          },
          {
            'adult': [
              {
                group: '21+',
                checked: false
              },
              {
                group: '21-24',
                checked: false
              },
              {
                group: '21-34',
                checked: false
              },
              {
                group: '21-49',
                checked: false
              },
              {
                group: '21-54',
                checked: false
              },
              {
                group: '21-64',
                checked: false
              },
              {
                group: '25-49',
                checked: true
              },
              {
                group: '25-54',
                checked: true
              },
              {
                group: '25-64',
                checked: false
              }
            ]
          },
          {
            'older-adult': [
              {
                group: '35+',
                checked: false
              },
              {
                group: '35-54',
                checked: false
              },
              {
                group: '35-64',
                checked: false
              }
            ]
          },
          {
            'senior': [
              {
                group: '50+',
                checked: false
              },
              {
                group: '55+',
                checked: false
              },
              {
                group: '65+',
                checked: false
              }
            ]
          }
        ]
      }
    },

    validators: {
      confirm (val) {
        return this.newpassword === val
      }
    },

    methods: {
      onKeyup () {
        alert('on keyup')
      },

      onSubmit (e) {
        // validate manually
        this.$validate(true)

        if (this.$validation.invalid) {
          e.preventDefault()
        }
      }
    }
  }
</script>

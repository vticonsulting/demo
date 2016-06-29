<template lang="jade">
  .typeahead
    i.fa.fa-spinner.fa-spin(v-if='loading')
    template(v-else='')
      i.fa.fa-search(v-show='isEmpty')
      i.fa.fa-times(v-show='isDirty', @click='reset')
    input.vui-input(type='text', placeholder='', autocomplete='off', v-model='query', @keydown.down='down', @keydown.up='up', @keydown.enter='hit', @keydown.esc='reset', @blur='reset', @input='update')
    ul(v-show='hasItems')
      li(v-for='item in items', :class='activeClass($index)', @mousedown='hit', @mousemove='setActive($index)')
        span.name(v-text='item.name')
        span.screen-name(v-text='item.screen_name')
</template>

<script>
  import store from '../store'
  import VueTypeaheadMixin from '../mixins/vue-typeahead'

  export default {
    mixins: [VueTypeaheadMixin],

    data () {
      return {
        sharedState: store.state,
        src: store.apiHost + '/markets',                     // required
        data: {},                       // optional
        limit: 5,                       // optional
        onHit (item) {                  // required
          // ...
          // window.location.href = 'http://twitter.com/' + item.screen_name
          console.log(item.name)
        },
        prepareResponseData (data) {    // optional
          // data = ...
          return data
        }
      }
    }
  }
</script>

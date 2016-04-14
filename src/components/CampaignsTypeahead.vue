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
          return data;
        }
      }
    }
  }
</script>

<style lang="stylus">
  .typeahead
    position relative

    & > ul
      position absolute
      padding 0
      margin-top 8px
      min-width 100%
      background-color #fff
      list-style none
      box-shadow 0 0 10px rgba(0,0,0, 0.25)
      z-index 1000

      li
        padding 10px 16px
        border-bottom 1px solid #ccc
        cursor pointer

        &:first-child
          border-radius 4px 4px 0 0

        &:last-child
          border-radius 0 0 4px 4px
          border-bottom 0

    span
      display block
      color #2c3e50

    .active
      background-color #3aa373
      span
        color white

    .name
      font-weight 700
      font-size 18px

    .screen-name
      font-style italic
</style>

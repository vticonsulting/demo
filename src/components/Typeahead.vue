<template>
  <div style="position: relative"
    v-bind:class="{'open':showDropdown}"
    >
    <input type="text" class="vui-input"
      :placeholder="placeholder"
      autocomplete="off"
      v-model="query"
      @input="update"
      @keydown.up="up"
      @keydown.down="down"
      @keydown.enter= "hit"
      @keydown.esc="reset"
      @blur="showDropdown = false"
    />
    <ul class="dropdown-menu" v-el:dropdown>
      <li v-for="item in items" v-bind:class="{'vui-highlight': isActive($index)}">
        <a @mousedown.prevent="hit" @mousemove="setActive($index)">
          <partial :name="templateName"></partial>
        </a>
      </li>
    </ul>
  </div>

</template>

<script>
  import callAjax from '../utils/callAjax'
  import coerceBoolean from '../utils/coerceBoolean'

  const typeahead = {
    created () {
      this.items = this.primitiveData
    },

    partials: {
      default: '<span v-html="item | highlight query"></span>'
    },

    props: {
      data: {
        type: Array
      },
      limit: {
        type: Number,
        default: 8
      },
      async: {
        type: String
      },
      template: {
        type: String
      },
      templateName: {
        type: String,
        default: 'default'
      },
      key: {
        type: String
      },
      matchCase: {
        type: Boolean,
        coerce: coerceBoolean,
        default: false
      },
      onHit: {
        type: Function,
        default (items) {
          this.reset()
          this.query = items
        }
      },
      placeholder: {
        type: String
      }
    },

    data () {
      return {
        query: '',
        showDropdown: false,
        noResults: true,
        current: 0,
        items: []
      }
    },

    computed: {
      primitiveData () {
        var _this = this

        if (this.data) {
          return this.data.filter(value => {
            value = this.matchCase ? value : value.toLowerCase()
            var query = this.matchCase ? _this.query : _this.query.toLowerCase()
            return value.indexOf(query) !== -1
          }).slice(0, this.limit)
        }
      }
    },

    ready () {
      // register a partial:
      if (this.templateName && this.templateName !== 'default') {
        Vue.partial(this.templateName, this.template)
      }
    },

    methods: {
      update () {
        if (!this.query) {
          this.reset()
          return false
        }
        if (this.data) {
          this.items = this.primitiveData
          this.showDropdown = this.items.length ? true : false
        }
        if (this.async) {
          callAjax(this.async + this.query, (data) => {
            this.items = data[this.key].slice(0, this.limit)
            this.showDropdown = this.items.length ? true : false
          })
        }
      },

      reset () {
        this.items = []
        this.query = ''
        this.loading = false
        this.showDropdown = false
      },

      setActive (index) {
        this.current = index
      },

      isActive (index) {
        return this.current === index
      },

      hit (e) {
        e.preventDefault()
        this.onHit(this.items[this.current], this)
      },

      up () {
        if (this.current > 0) this.current--
      },

      down () {
        if (this.current < this.items.length - 1) this.current++
      }
    },

    filters: {
      highlight (value, phrase) {
        return value.replace(new RegExp('(' + phrase + ')', 'gi'), '<strong>$1</strong>')
      }
    }
  }
  export default typeahead
</script>

<style>
.dropdown-menu > li > a {
  cursor: pointer;
}
</style>

<style lang="stylus" scoped>

  @import '../variables'

  .dropdown
    position relative
    display inline-block
    // margin-right 2rem
    padding: 0 .25rem

    &.open .dropdown-button
      // color $color-ok-text
      text-decoration underline
  .dropdown-button
    background none
    border none
    padding 0
    text-dropdown()
    transition(all 0.12s linear)
    &:focus
      outline none
    &:hover
      // color darken($color-dropdown, 20)
      text-decoration underline
  .open > .dropdown-menu,
  .open > .dropdown-flyout
    display block
  .open .dropdown-caret
    transform rotate(180deg)
    display inline-block
  .dropdown-caret
    transition(all 0.1s linear)
    margin-left 2px
    font-size 12px
  .dropdown-circle
    display inline-block
    width $spacing-medium
    height $spacing-medium
    border-radius $border-radius-large
    position relative
    border 2px solid $color-border
    top 3px
    margin-right 2px
    &.visible
      border 2px solid $color-cta-solid
    &.hidden
      border 2px solid $color-warning-solid
    &.preview
      border 2px solid $color-general
    &.scheduled
      border 2px solid $color-ok-solid
  .dropdown-menu
    color $vui-color-brand-8
    position absolute
    top 100%
    z-index $z-index-dropdown
    display none
    min-width $size-x-small
    margin $spacing-xx-small 0 0
    list-style none
    border-radius $border-radius-small
    padding $spacing-x-small 0
    box-shadow 0 0 $spacing-xx-small 0 $color-border
    // line-height 2.5
    background $white
    li
      display block
      padding 0 $spacing-large
      cursor pointer
      &:hover
        background lighten($color-border, 17)
        // background #ccc
      span
        margin-right $spacing-x-small
  .dropdown-settings
    font-size font-size-large
    margin-left 0
    line-height 1
    position relative
    top $spacing-xxx-small
    color $color-label
    transition(all 0.1s linear)
    &:hover
      cursor pointer
      color $color-ok-solid
    .icon-delete
      font-size font-size-large
      transition(all 0.1s linear)
      top $spacing-xxx-small
      &:hover
        color $color-warning-solid
  .open .dropdown-settings
    color $color-ok-solid
  .dropdown-flyout
    position absolute
    top 100%
    z-index 1000
    display none
    width 400px
    right -$spacing-large
    margin 15px 0 0
    border-radius 5px
    box-shadow 0px 0px 5px 0px $color-border
    background $white
    padding $spacing-large
    h2
      text-menulist()
      line-height 1
      margin-bottom 1rem
    .button
      margin-top 0.6rem
  .dropdown-arrowbefore
    top -11px
    border-left $spacing-x-small solid transparent
    border-right $spacing-x-small solid transparent
    border-bottom 10px solid rgba(57, 70, 78, 0.15)
    border-style none double solid
    display block
    position absolute
    right $spacing-large
    vertical-align middle
    content ""
    width 0
    height 0
  .dropdown-arrowafter
    top -10px
    border-left $spacing-x-small solid transparent
    border-right $spacing-x-small solid transparent
    border-bottom 10px solid $white
    border-style none double solid
    display block
    position absolute
    right $spacing-large
    vertical-align middle
    content ""
    width 0
    height 0
  .dropdown-left .dropdown-menu
    // right -0.5rem
    right 0
  .dropdown-right .dropdown-menu
    left -0.5rem
</style>

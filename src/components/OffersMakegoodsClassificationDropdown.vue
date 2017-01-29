<!-- <offers-makegoods-classification-dropdown value="ctrl.makegood.classification" class="ng-isolate-scope"> -->
<template lang="pug">
  .videa-dropdown(:style="{ 'width' : styleBaseWidth, 'height':styleBaseHeight }", :disabled='isDisabled', style='width: 300px')
    .dropdown(uib-dropdown='', is-open='isOpen', :style="{ 'width' : styleInnerWidth }")
      a.dropdown-toggle(uib-dropdown-toggle='', aria-haspopup='true', aria-expanded='false')
        div(:style="{ 'width' : styleDisplayDivWidth,'height' : styleDisplayDivHeight }")
          span(style='border-left: none') Unknown
          icon(name='angle-down', :style="{ 'margin-left' : styleDownIconLeftMargin }")
      ul.uib-dropdown-menu.dropdown-menu(role='menu', :style="{ 'height' : styleDropDownHeight, 'width' : styleDropDownWidth }")
        li(@click='itemSelected(item)', v-for='item in items')
          a(:class="{ 'selected': multiSelect === true && selectedItems.indexOf(item) != -1 }")
            icon(name='triangle-up', :style="{ 'left' : styleTriangleUpLeft }")
            | {{ item.name }}
</template>

<script>
  export default {
    props: {
      isDisabled: {
        type: [Boolean, String],
        default: false
      },
      isOpen: {
        type: [Boolean, String],
        default: false
      },
      multiSelect: {
        type: [Boolean, String],
        default: true
      }
    },
    data () {
      return {
        items: [
          { name: 'Unknown' },
          { name: 'MG for Missed Spot' },
          { name: 'MG for Programing Change' },
          { name: 'MG for Live event schedule changes' },
          { name: 'MK to fix schedule' },
          { name: 'Technical difficulties' },
          { name: 'Wrong or no copy' },
          { name: 'Buyer request' }
        ],
        selectedItems: []
      }
    },
    computed: {
      styleBaseWidth () {},
      styleInnerWidth () {},
      styleDisplayDivWidth () {},
      styleDisplayDivHeight () {},
      styleDownIconLeftMargin () { return '0px' },
      styleDropDownHeight () {},
      styleDropDownWidth () { return '300px' },
      styleBaseHeight () {},
      styleTriangleUpLeft () {}
    },
    methods: {
      itemSelected (item) {}
    }
  }
</script>

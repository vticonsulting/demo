<template lang="pug">
  .multiselect-dropdown
    .dropdown(auto-close='outsideClick')
      a.dropdown-toggle(aria-haspopup='true', aria-expanded='false')
        .input(title='')
          input.vui-input.vui-truncate(v-model='selectedItems', readonly='readonly')
          icon(name='angle-down')
      ul.dropdown-menu.dropdown-menu-timeframe(role='menu')
        icon(name='triangle-up')
        li
          ul
            li(v-for='item in items')
              .checkbox.vui-checkbox(text='item.text', value='item.isSelected')
                span.icons
                  span.vui-checkbox-unchecked
                    //- i.glyphicon.glyphicon-ok
                  span.vui-checkbox-checked
                    //- i.glyphicon.glyphicon-ok
                input(type='checkbox')
                label(v-text='item.text')
        li
          div(style='height: 10px')
</template>

<script>
  export default {
    data () {
      return {
        selectedItems: [],
        items: [
          { isSelected: false, text: 'MO' },
          { isSelected: false, text: 'TU' },
          { isSelected: false, text: 'WE' },
          { isSelected: false, text: 'TH' },
          { isSelected: false, text: 'FR' },
          { isSelected: false, text: 'SA' },
          { isSelected: false, text: 'SU' }
        ]
      }
    }
  }
</script>

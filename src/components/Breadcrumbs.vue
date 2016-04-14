<template lang="jade">
  nav(role='navigation')
    p#bread-crumb-label.vui-assistive-text You are here:
    ol.vui-breadcrumb.vui-list--horizontal(aria-labelledby='bread-crumb-label')
      li.vui-list__item.vui-text-heading--label
        a(href='#') {{config.homeText}}
      li.vui-list__item.vui-text-heading--label 12676
</template>

<script>
  export default {
    props: {
      config: {
        type: Object,
        default () {
          return {
            homeText: 'Default'
          }
        }
      }
    }
  }
</script>

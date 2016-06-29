<template lang="jade">
  .vui-docked_container
    .vui-docked-composer.vui-grid.vui-grid--vertical.vui-nowrap.vui-is-open
      .vui-docked-composer__header.vui-grid.vui-grid--align-spread.vui-shrink-none
        .vui-media.vui-media--center
          .vui-media__figure
            span.vui-icon_container.vui-icon-standard-call
              svg.vui-icon.vui-icon--small(aria-hidden='true')
                use(xlink:href='/assets/icons/standard-sprite/svg/symbols.svg#call')
              span.vui-assistive-text Call Icon
          .vui-media__body Header
        .vui-docked-composer__actions
          button.vui-button.vui-button--icon-bare.vui-button--icon-inverse
            svg.vui-button__icon(aria-hidden='true')
              use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#minimize_window')
            span.vui-assistive-text Minimize window
          button.vui-button.vui-button--icon-bare.vui-button--icon-inverse
            svg.vui-button__icon(aria-hidden='true')
              use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#expand_alt')
            span.vui-assistive-text Expand Composer
          button.vui-button.vui-button--icon-bare.vui-button--icon-inverse
            svg.vui-button__icon(aria-hidden='true')
              use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#close')
            span.vui-assistive-text Close
      .vui-docked-composer__body.vui-col.vui-grid.vui-grid--vertical.vui-nowrap.vui-size--1-of-1
      .vui-docked-composer__footer.vui-shrink-none
        .vui-float--right.vui-grid.vui-grid--align-end.vui-size--1-of-2.vui-text-align--right
          button.vui-button.vui-button--brand Action
</template>

<script>
  export default {

  }
</script>

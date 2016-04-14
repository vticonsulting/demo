<template lang="jade">
  .vui-docked-composer.vui-grid.vui-grid--vertical.vui-nowrap.vui-is-open
    .vui-docked-composer__header.vui-grid.vui-grid--align-spread.vui-shrink-none
      .vui-media.vui-media--center
        .vui-media__figure
          span.vui-icon_container.vui-icon-standard-email
            svg.vui-icon.vui-icon--small(aria-hidden='true')
              use(xlink:href='/assets/icons/standard-sprite/svg/symbols.svg#email')
            span.vui-assistive-text Email Icon
        .vui-media__body New Email
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
    .vui-docked-composer__body.vui-docked-composer__body--email.vui-col.vui-grid.vui-grid--vertical.vui-nowrap
      .vui-grid.vui-grid--align-spread
        .vui-grid.vui-grow.vui-p-horizontal--small
          label.vui-email-composer__label.vui-align-middle(for='emailComposerTo') To
          input#emailComposerTo.vui-input--bare.vui-input--height.vui-hide(type='text')
          .vui-pill_container--bare.vui-show
            a.vui-pill(href='#void')
              svg.vui-icon.vui-icon-standard-account.vui-pill__icon(aria-hidden='true')
                use(xlink:href='/assets/icons/standard-sprite/svg/symbols.svg#account')
              span.vui-pill__label Lei Chan
              button.vui-button.vui-button--icon-bare.vui-pill__remove
                svg.vui-button__icon(aria-hidden='true')
                  use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#close')
                span.vui-assistive-text Remove Pill
        .vui-grid.vui-shrink-none.vui-p-horizontal--small
          button.vui-button Cc
          button.vui-button Bcc
      .vui-grid.vui-p-horizontal--small
        label.vui-email-composer__label.vui-align-middle(for='emailComposerCc') Cc
        input#emailComposerCc.vui-input--bare.vui-input--height(type='text')
        .vui-pill_container--bare.vui-hide
      .vui-grid.vui-p-horizontal--small.vui-hide
        label.vui-email-composer__label.vui-align-middle(for='emailComposerBcc') Bcc
        input#emailComposerBcc.vui-input--bare.vui-input--height(type='text')
        .vui-pill_container--bare.vui-hide
      label.vui-assistive-text(for='subject-1') Enter subject
      input#subject-1.vui-input(placeholder='Enter Subject')
      .vui-docked-composer__toolbar.vui-shrink-none.vui-grid.vui-grid--align-spread
        .vui-grid
          .vui-button-group.vui-picklist.vui-picklist--fluid.vui-shrink-none
            button.vui-button.vui-button--neutral.vui-picklist__label.picklist__label--small
              | Font
              svg.vui-icon.vui-icon--small(aria-hidden='true')
                use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#down')
          .vui-button-group.vui-picklist.vui-picklist--fluid.vui-shrink-none
            button.vui-button.vui-button--neutral.vui-picklist__label.picklist__label--small
              | 14
              svg.vui-icon.vui-icon--small(aria-hidden='true')
                use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#down')
          .vui-button-group(role='group')
            button.vui-button.vui-button--icon-border-filled
              svg.vui-button__icon(aria-hidden='true')
                use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#bold')
              span.vui-assistive-text Bold
            button.vui-button.vui-button--icon-border-filled
              svg.vui-button__icon(aria-hidden='true')
                use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#italic')
              span.vui-assistive-text Italic
            button.vui-button.vui-button--icon-border-filled
              svg.vui-button__icon(aria-hidden='true')
                use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#underline')
              span.vui-assistive-text Underline
          .vui-button-group(role='group')
            button.vui-button.vui-button--icon-border-filled
              svg.vui-button__icon(aria-hidden='true')
                use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#richtextnumberedlist')
              span.vui-assistive-text Numbered List
            button.vui-button.vui-button--icon-border-filled
              svg.vui-button__icon(aria-hidden='true')
                use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#richtextbulletedlist')
              span.vui-assistive-text Bulleted List
            button.vui-button.vui-button--icon-border-filled
              svg.vui-button__icon(aria-hidden='true')
                use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#left_align_text')
              span.vui-assistive-text Left Align Text
            button.vui-button.vui-button--icon-border-filled
              svg.vui-button__icon(aria-hidden='true')
                use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#center_align_text')
              span.vui-assistive-text Center Align Text
            button.vui-button.vui-button--icon-border-filled
              svg.vui-button__icon(aria-hidden='true')
                use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#right_align_text')
              span.vui-assistive-text Right Align Text
            button.vui-button.vui-button--icon-border-filled
              svg.vui-button__icon(aria-hidden='true')
                use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#link')
              span.vui-assistive-text Link
      label.vui-assistive-text(for='composer-text-input-1') Compose email
      textarea#composer-text-input-1.vui-docked-composer__input.vui-input--bare.vui-text-longform.vui-grow(placeholder='Compose email...')
    .vui-docked-composer__footer.vui-shrink-none
      .vui-float--right.vui-grid.vui-grid--align-end.vui-size--1-of-2.vui-text-align--right
        button.vui-button.vui-button--icon-container
          svg.vui-button__icon(aria-hidden='true')
            use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#link')
          span.vui-assistive-text Attach File
        button.vui-button.vui-button--icon-container
          svg.vui-button__icon(aria-hidden='true')
            use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#insert_template')
          span.vui-assistive-text Insert Template
        button.vui-button.vui-button--icon-container
          svg.vui-button__icon(aria-hidden='true')
            use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#insert_tag_field')
          span.vui-assistive-text Insert HTML
        button.vui-button.vui-button--icon-container
          svg.vui-button__icon(aria-hidden='true')
            use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#preview')
          span.vui-assistive-text Preview
        button.vui-button.vui-button--icon-container
          svg.vui-button__icon(aria-hidden='true')
            use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#delete')
          span.vui-assistive-text Delete
        button.vui-button.vui-button--brand Send
</template>


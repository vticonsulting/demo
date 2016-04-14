<template lang="jade">
  ul.timeline
    li.vui-timeline__item
      span.vui-assistive-text Task
      .vui-media
        .vui-media__body
          .vui-media.vui-media--timeline.vui-timeline__media--task
            .vui-media__figure
              svg.vui-icon.vui-icon-standard-task.vui-timeline__icon(aria-hidden='true')
                use(xlink:href='/assets/icons/standard-sprite/svg/symbols.svg#task')
            .vui-media__body
              .vui-media.vui-tile.vui-media--small
                .vui-media__figure
                  label.vui-checkbox(for='mark-complete')
                    input#mark-complete(name='checkbox', type='checkbox')
                    span.vui-checkbox--faux
                    span.vui-form-element__label.vui-assistive-text mark-complete
                .vui-media__body
                  p.vui-tile__title.vui-truncate
                    a(href='#') Review proposals for EBC deck with larger team and have marketing review this
                  ul.vui-tile__detail.vui-list--horizontal.vui-text-body--small
                    li.vui-list__item.vui-m-right--large
                      span Contact:
                      span.vui-m-left--xx-small
                        a(href='#') Lei Chan
                    li.vui-list__item
                      span Assigned to:
                      span.vui-m-left--xx-small
                        a(href='#') Betty Mason
        .vui-media__figure.vui-media__figure--reverse
          .vui-timeline__actions
            p.vui-timeline__date Feb 24
            button.vui-button.vui-button--icon-border-filled
              svg.vui-button__icon(aria-hidden='true')
                use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#switch')
              span.vui-assistive-text Switch
    li.vui-timeline__item
      span.vui-assistive-text Event
      .vui-media
        .vui-media__body
          .vui-media.vui-media--timeline.vui-timeline__media--event
            .vui-media__figure
              svg.vui-icon.vui-icon-standard-event.vui-timeline__icon(aria-hidden='true')
                use(xlink:href='/assets/icons/standard-sprite/svg/symbols.svg#event')
            .vui-media__body
              p
                a(href='#') Company One — EBC Meeting
              p.vui-truncate
                | Let's get together to review the theater's layout and facilities. We'll also discuss potential things that truncate at a certain width.
              ul.vui-list--horizontal.vui-text-body--small
                li.vui-list__item.vui-m-right--large
                  span Time:
                  span.vui-m-left--xx-small
                    a(href='#') Feb 23, 2015 11:00am–12:00pm
                li.vui-list__item
                  span Location:
                  span.vui-m-left--xx-small
                    a(href='#') 300 Pike St, San Francisco CA
              span.vui-text-body--small
                span Name:
                span.vui-m-left--xx-small
                  a(href='#') Lei Chan
                  | ,
                  a(href='#') Jason Dewar
                  | ,
                  a(href='#') Gwen Jones
                  |  and
                  a(href='#') Pete Schaffer
        .vui-media__figure.vui-media__figure--reverse
          .vui-timeline__actions
            p.vui-timeline__date Feb 24
            button.vui-button.vui-button--icon-border-filled
              svg.vui-button__icon(aria-hidden='true')
                use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#switch')
              span.vui-assistive-text Switch
    li.vui-timeline__item
      span.vui-assistive-text Call
      .vui-media
        .vui-media__body
          .vui-media.vui-media--timeline.vui-timeline__media--call
            .vui-media__figure
              svg.vui-icon.vui-icon-standard-log-a-call.vui-timeline__icon(aria-hidden='true')
                use(xlink:href='/assets/icons/standard-sprite/svg/symbols.svg#log_a_call')
            .vui-media__body
              p
                a(href='#') Mobile conversation on Monday
              p.vui-truncate Lei seemed interested in closing this deal quickly! Let's move move.
              ul.vui-list--horizontal.vui-text-body--small
                li.vui-list__item.vui-m-right--large
                  span Name:
                  span.vui-m-left--xx-small
                    a(href='#') Lei Chan
                li.vui-list__item
                  span Assigned to:
                  span.vui-m-left--xx-small
                    a(href='#') Betty Mason
        .vui-media__figure.vui-media__figure--reverse
          .vui-timeline__actions
            p.vui-timeline__date Feb 24
            button.vui-button.vui-button--icon-border-filled
              svg.vui-button__icon(aria-hidden='true')
                use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#switch')
              span.vui-assistive-text Switch
    li.vui-timeline__item
      span.vui-assistive-text Email
      .vui-media
        .vui-media__body
          .vui-media.vui-media--timeline.vui-timeline__media--email
            .vui-media__figure
              svg.vui-icon.vui-icon-standard-email.vui-timeline__icon(aria-hidden='true')
                use(xlink:href='/assets/icons/standard-sprite/svg/symbols.svg#email')
            .vui-media__body
              .vui-tile
                p.vui-tile__title.vui-truncate
                  a(href='#') Updated Proposals
                .vui-tile__detail
                  p.vui-truncate
                    | Hi guys, Thanks for meeting with the team today and going through the proposals we saw. This goes on until it's truncated.
                  ul.vui-list--horizontal.vui-text-body--small
                    li.vui-list__item.vui-m-right--large
                      span To:
                      span.vui-m-left--xx-small
                        a(href='#') Lei Chan
                    li.vui-list__item
                      span From:
                      span.vui-m-left--xx-small
                        a(href='#') Jason Dewar
        .vui-media__figure.vui-media__figure--reverse
          .vui-timeline__actions
            p.vui-timeline__date Feb 24
            button.vui-button.vui-button--icon-border-filled
              svg.vui-button__icon(aria-hidden='true')
                use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#switch')
              span.vui-assistive-text Switch
</template>

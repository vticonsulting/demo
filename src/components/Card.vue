<template lang="jade">
  article.card(tabindex='0', data-is-following='true')
    .card-info
      a(tabindex='-1', href='#')
        h1.card-info-heading
          span.card-name {{ name }}
      ul.card-info-list
        li.card-info-list-item.card-info-list-items--location
          span.card-label.card-label--location Location:
          span.card-location {{ location }}
        li.card-info-list-item.card-info-list-items--fields
          span.card-label.card-label--fields Fields:
          a.card-info-link(v-for='field in fields', :href='field.url') {{ field.name }}
      .card-actions
        .card-actions-set
          button.card-actions-button.card-actions-button--follow(tabindex='-1')
            .card-actions-button-container Follow
        .card-actions-set
          .card-actions-stat.card-actions-stat--likes
            svg.card-actions-stat-icon(xmlns='http://www.w3.org/2000/svg', width='24', height='24', viewbox='0 0 24 24')
              path(fill='none', d='M0 0h24v24H0z')
              path(d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z')
            span.card-likes 1435
          .card-actions-stat.card-actions-stat--views
            svg.card-actions-stat-icon(xmlns='http://www.w3.org/2000/svg', width='24', height='24', viewbox='0 0 24 24')
              path(fill='none', d='M0 0h24v24H0z')
              path(d='M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z')
            span.card-views 2347
    .card-image-slot
      img(:src='avatar')
    span.card-status(role='status', aria-live='assertive')
</template>

<style lang="stylus">
  img, svg
    max-width 100%
    height auto
    object-fit cover

  .card
    padding 1em
    display flex
    flex-flow row wrap
    max-width 500px
    overflow hidden
    font-family "Helvetica Neue", Helvetica, Arial
    background none
    border-bottom 1px solid #ddd
    a
      text-decoration none
      color currentColor
      &:hover
        text-decoration underline
    .card-status
      position absolute
      clip rect(0, 0, 0, 0)
    .card-image-slot
      order -1
      margin-right 2%
      flex 1 0 5.625em
    .card-label
      font-weight bold
    .card-info
      display flex
      flex-flow column nowrap
      flex 3.618 0 65%
      overflow hidden
      font-size 0.8rem
      .card-info-heading
        font-size 1.125rem
        font-weight bold
        color #1a6aff
    .card-actions
      margin-top auto
      display flex
      .card-actions-set
        display flex
        padding-right 0.9375em
        border-right 1px solid #c4c4c4
        &:last-child
          padding-right 0
          padding-left 0.9375em
          border-right none
      .card-actions-button
        display block
        border-radius 0.1875em
        line-height 1.4375
        font-size 0.8rem
        border none
      .card-actions-button-container
        display flex
      .card-actions-button--follow
        background linear-gradient(#0096ff, #005dff)
        color white
        &.is-following
          background linear-gradient(#34c520, #219211)
      .card-actions-stat
        display flex
        align-items center
        padding-top 0.08125em
        width 100%
        margin-right 1em
        .card-actions-stat-icon
          margin-right 0.5em
          fill #d4d4d4
          flex 0 0 1.5em
    .card-info-list-item
      white-space nowrap
      text-overflow ellipsis
      overflow hidden
      color #3b3b3b

  .card .card-info .card-info-heading, .card .card-info .card-info-list-item
    margin-bottom 0.375em

  .card .card-actions .card-actions-button, .card .card-actions .card-actions-stat
    height 1.5625em
    line-height 1.4375
</style>

<script>
  export default {
    props: ['name', 'location', 'fields', 'avatar']
  }
</script>

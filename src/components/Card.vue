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

<script>
  export default {
    props: ['name', 'location', 'fields', 'avatar']
  }
</script>

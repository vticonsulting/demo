<template lang="pug">
  .vui-container--large.vui-container--center.vui-text-align--center
    div(style='font-size: 10rem')
      | OOPS.
    .vui-text-heading--large.vui-m-bottom--x-large
      | WE CAN'T SEEM TO FIND THIS PAGE
    span.vui-text-heading--large.vui-badge.rejected.vui-p-around--x-small.vui-p-left--large.vui-p-right--large
      | 404 ERROR
    hr
    .vui-text-align--left.vui-m-bottom--medium
      | It looks like the page you're looking for no longer exists. Please start again from our
      a(href='/') homepage
      | .
    .vui-text-align--left
      | If this keeps happening, please
      a(href='/Sellers/ContactUs') contact us
      |  and let us know.

  //- .container
  //-   h1(
  //-     v-if ='error.statusCode === 404'
  //-   ) Page not found

  //-   h1(
  //-     v-else
  //-   ) An error occurred

  //-   h2 {{ error.statusCode }}
  //-   p {{ error.message }}

  //-   nuxt-link(
  //-     to = '/'
  //-   ) Home page
</template>

<script>
  export default {
    props: ['error']
  }
</script>

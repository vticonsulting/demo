// const webpack = require('webpack')
// const axios = require('axios')
// const _ = require('lodash')

module.exports = {
  build: {
    extend (config, { dev, isClient }) {
      // config is the webpack config
      // dev is a boolean, equals false when `nuxt build`
      // isClient is a boolean, let you know when you extend
      // the config for the client bundle or the server bundle
      config.devtool = (dev ? 'eval-source-map' : false)
      config.performance = { hints: false }
    },
    // postcss: [
    //   require('postcss-nested')(),
    //   require('postcss-responsive-type')(),
    //   require('postcss-hexrgba')(),
    //   require('autoprefixer')({
    //     browsers: ['last 3 versions']
    //   })
    // ],
    plugins: [
      // new webpack.DefinePlugin({
      //   'process.VERSION': require('./package.json').version
      // })
    ]
  },
  css: [
    '~/static/css/vui.css',
    // 'vue-flatpickr/theme/airbnb.css',
    { src: '~assets/screen.styl', lang: 'stylus' }
  ],
  env: {
    googleTrackingId: 'UA-91055240-1',
    baseURL: process.env.BASE_URL || 'https://intense-falls-98650.herokuapp.com',
    API_URL: process.env.API_URL || 'https://intense-falls-98650.herokuapp.com',
    // baseURL: (process.env.NODE_ENV === 'production' ? 'https://intense-falls-98650.herokuapp.com' : 'http://localhost:3000')
  },
  loading: false,
  generate: {
    routeParams: {
      '/sellers/order-management/:id': 135001,
      '/sellers/order-management/order-search/:id': 135001,
      '/sellers/order-management/pending-makegoods/:id': 12676,
      '/sellers/reporting/orders/:id': 135001,
      '/sellers/price-guide/:id': 'early-morning',
      '/sellers/avails/:id': 65733,
      '/sellers/campaign-performance/:id': 135001,
      // '/users/:id': function () {
      //   return axios.get('https://my-api/users')
      //   .then((res) => {
      //     return res.data.map((user) => {
      //       return { id: user.id }
      //     })
      //   })
      // }
    }
  },
  plugins: [
    '~plugins/ga',
    '~plugins/global-components',
    '~plugins/global-directives',
    '~plugins/global-event-bus',
    '~plugins/global-filters',
    '~plugins/sweetalert2',
    // '~plugins/vee-validate',
    // '~plugins/vue-plugin',
    // '~plugins/vue-flatpickr',
    '~plugins/vue-awesome',
    '~plugins/vue-highcharts',
    '~plugins/vue-multiselect'

  ],
  router: {
    linkActiveClass: 'v-link-active'
  },
  vendor: [
    'accounting',
    'axios',
    'moment',
    'sweetalert2',
    // 'vee-validate',
    // 'vue-flatpickr',
    'vue-awesome',
    'vue-highcharts',
    'vue-multiselect'
  ]
}

// function menuToRouteParams (category) {
//   return function () {
//     return axios.get(`https://docs.api.nuxtjs.org/menu/en/${category}`)
//     .then((res) => {
//       return res.data || []
//     })
//     .then((menu) => {
//       return _(menu)
//       .map('links')
//       .flatten()
//       .map((m) => m.to.slice(1))
//       .compact()
//       .map((slug) => {
//         return { slug }
//       })
//       .value()
//     })
//   }
// }

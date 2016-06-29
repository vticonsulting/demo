export default {
  routes: {
    '/': {
      name: 'home',
      component: require('./views/index.vue')
    },
    '/buyers/avails': {
      name: 'buyers.avails',
      component: require('./views/buyers/avails/index.vue')
    },
    '/buyers/avails/request': {
      name: 'buyers.avails.request',
      component: require('./views/buyers/avails/request.vue')
    },
    '/buyers/avails/request/summary': {
      name: 'buyers.avails.request.summary',
      component: require('./views/buyers/avails/summary.vue')
    },
    '/privacy': {
      name: 'privacy',
      component: require('./views/privacy.vue')
    },
    '/reps/avails': {
      name: 'reps.avails',
      component: require('./views/reps/avails/index.vue')
    },
    '/reps/avails/:id': {
      name: 'reps.avail',
      component: require('./views/reps/avails/show.vue')
    },
    '/reps/avails/:id/edit': {
      name: 'reps.avail.edit',
      component: require('./views/reps/avails/edit.vue')
    },
    '/reps/orders': {
      name: 'reps.orders',
      component: require('./views/reps/orders/index.vue')
    },
    '/reps/orders/:id': {
      name: 'reps.order',
      component: require('./views/reps/orders/show.vue')
    },
    '/reps/performance': {
      name: 'reps.performance',
      component: require('./views/reps/performance/index.vue')
    },
    '/reps/price-guide': {
      name: 'reps.price-guide',
      component: require('./views/reps/price-guide/index.vue')
    },
    '/reps/order-management': {
      name: 'reps.order-management',
      component: require('./views/reps/order-management/index.vue')
    },
    '/reps/order-management/:id': {
      name: 'reps.order-management.order',
      component: require('./views/reps/order-management/show.vue')
    },
    '/reps/makegoods': {
      name: 'reps.makegoods',
      component: require('./views/reps/makegoods/index.vue')
    },
    '/reps/makegoods/:id': {
      name: 'reps.makegood',
      component: require('./views/reps/makegoods/show.vue')
    },
    '/sellers/orders': {
      name: 'sellers.orders',
      component: require('./views/sellers/orders/index.vue')
    },
    '/sellers/orders/:id': {
      name: 'sellers.order',
      component: require('./views/sellers/orders/show.vue')
    },
    '/sellers/otri': {
      name: 'sellers.otri',
      component: require('./views/sellers/otri/index.vue')
    },
    '/sellers/program-guide': {
      name: 'sellers.program-guide',
      component: require('./views/sellers/program-guide/index.vue'),
      subRoutes: {
        '/': {
          name: 'sellers.program-guide.program-guide',
          component: require('./views/sellers/program-guide/program-guide.vue')
        },
        '/specials': {
          name: 'sellers.program-guide.specials',
          component: require('./views/sellers/program-guide/specials.vue')
        }
      }
    },
    '/sellers/performance/account': {
      name: 'sellers.performance.account',
      component: require('./views/sellers/performance/account.vue')
    },
    '/sellers/performance/station': {
      name: 'sellers.performance.station',
      component: require('./views/sellers/performance/station.vue')
    },
    '/sellers/price-guide': {
      name: 'sellers.price-guide',
      component: require('./views/sellers/price-guide/index.vue')
    },
    '/sellers/avails': {
      name: 'sellers.avails',
      component: require('./views/sellers/avails/index.vue')
    },
    '/sellers/avails/:id': {
      name: 'sellers.avail',
      component: require('./views/sellers/avails/show.vue')
    },
    '/sellers/avails/:id/edit': {
      name: 'sellers.avail.edit',
      component: require('./views/sellers/avails/edit.vue')
    },
    '/sellers/order-management': {
      name: 'sellers.order-management',
      component: require('./views/sellers/order-management/index.vue')
    },
    '/sellers/order-management/:id': {
      name: 'sellers.order-management.order',
      component: require('./views/sellers/order-management/show.vue')
    },
    '/sellers/makegoods': {
      name: 'sellers.makegoods',
      component: require('./views/sellers/makegoods/index.vue')
    },
    '/sellers/makegoods/:id': {
      name: 'sellers.makegood',
      component: require('./views/sellers/makegoods/show.vue')
    },
    '/settings': {
      name: 'settings',
      component: require('./views/settings/index.vue'),
      subRoutes: {
        '/': {
          name: 'settings.user',
          component: require('./views/settings/user.vue')
        },
        '/specials': {
          name: 'settings.specials',
          component: require('./views/settings/specials.vue')
        },
        '/premium-advertisers': {
          name: 'settings.premium-advertisers',
          component: require('./views/settings/premium-advertisers.vue')
        },
        '/reps': {
          name: 'settings.reps',
          component: require('./views/settings/reps.vue')
        },
        '/display': {
          name: 'settings.display',
          component: require('./views/settings/display.vue')
        }
      }
    },
    '/terms': {
      name: 'terms',
      component: require('./views/terms.vue')
    }
  },
  redirects: {
    '*': '/'
  }
}

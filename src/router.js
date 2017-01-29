export default {
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('views')
    },
    {
      path: '/buyers/avails',
      name: 'buyers.avails',
      component: require('views/buyers/avails')
    },
    {
      path: '/buyers/avails/request',
      name: 'buyers.avails.request',
      component: require('views/buyers/avails/request')
    },
    {
      path: '/buyers/avails/request/summary',
      name: 'buyers.avails.request.summary',
      component: require('views/buyers/avails/summary')
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: require('views/privacy')
    },
    {
      path: '/reps/avails',
      name: 'reps.avails',
      component: require('views/reps/avails')
    },
    {
      path: '/reps/avails/:id',
      name: 'reps.avail',
      component: require('views/reps/avails/show')
    },
    {
      path: '/reps/avails/:id/edit',
      name: 'reps.avail.edit',
      component: require('views/reps/avails/edit')
    },
    {
      path: '/reps/orders',
      name: 'reps.orders',
      component: require('views/reps/orders')
    },
    {
      path: '/reps/orders/:id',
      name: 'reps.order',
      component: require('views/reps/orders/show')
    },
    {
      path: '/reps/performance',
      name: 'reps.performance',
      component: require('views/reps/performance')
    },
    {
      path: '/reps/price-guide',
      name: 'reps.price-guide',
      component: require('views/reps/price-guide')
    },
    {
      path: '/reps/order-management',
      name: 'reps.order-management',
      component: require('views/reps/order-management')
    },
    {
      path: '/reps/order-management/:id',
      name: 'reps.order-management.order',
      component: require('views/reps/order-management/show')
    },
    {
      path: '/reps/makegoods',
      name: 'reps.makegoods',
      component: require('views/reps/makegoods')
    },
    {
      path: '/reps/makegoods/:id',
      name: 'reps.makegood',
      component: require('views/reps/makegoods/show')
    },
    {
      path: '/sellers/active-orders',
      name: 'sellers.active-orders',
      component: require('views/sellers/active-orders')
    },
    {
      path: '/sellers/campaign-performance',
      name: 'sellers.campaign-performance',
      component: require('views/sellers/campaign-performance')
    },
    {
      path: '/sellers/orders',
      name: 'sellers.orders',
      component: require('views/sellers/orders')
    },
    {
      path: '/sellers/orders/:id',
      name: 'sellers.order',
      component: require('views/sellers/orders/show')
    },
    {
      path: '/sellers/open-preempts',
      name: 'sellers.open-preempts',
      component: require('views/sellers/open-preempts')
    },
    {
      path: '/sellers/otri',
      name: 'sellers.otri',
      component: require('views/sellers/otri')
    },
    {
      path: '/sellers/program-guide',
      // name: 'sellers.program-guide',
      component: require('views/sellers/program-guide'),
      children: [
        {
          path: '/',
          name: 'sellers.program-guide.program-guide',
          component: require('views/sellers/program-guide/program-guide')
        },
        {
          path: '/specials',
          name: 'sellers.program-guide.specials',
          component: require('views/sellers/program-guide/specials')
        }
      ]
    },
    {
      path: '/sellers/program-revenue',
      name: 'sellers.program-revenue',
      component: require('views/sellers/program-revenue')
    },
    {
      path: '/sellers/performance/account',
      name: 'sellers.performance.account',
      component: require('views/sellers/performance/account')
    },
    {
      path: '/sellers/performance/station',
      name: 'sellers.performance.station',
      component: require('views/sellers/performance/station')
    },
    {
      path: '/sellers/price-guide',
      name: 'sellers.price-guide',
      component: require('views/sellers/price-guide')
    },
    {
      path: '/sellers/avails',
      name: 'sellers.avails',
      component: require('views/sellers/avails')
    },
    {
      path: '/sellers/avails/:id',
      name: 'sellers.avail',
      component: require('views/sellers/avails/show')
    },
    {
      path: '/sellers/avails/:id/edit',
      name: 'sellers.avail.edit',
      component: require('views/sellers/avails/edit')
    },
    {
      path: '/sellers/order-management',
      name: 'sellers.order-management',
      component: require('views/sellers/order-management')
    },
    {
      path: '/sellers/order-management/:id',
      name: 'sellers.order-management.order',
      component: require('views/sellers/order-management/show')
    },
    {
      path: '/sellers/makegoods',
      name: 'sellers.makegoods',
      component: require('views/sellers/makegoods')
    },
    {
      path: '/sellers/makegoods/create',
      name: 'sellers.makegoods.create',
      component: require('views/sellers/makegoods/create')
    },
    {
      path: '/sellers/makegoods/details',
      name: 'sellers.makegoods.details',
      component: require('views/sellers/makegoods/details')
    },
    {
      path: '/sellers/makegoods/add-bonus-offer',
      name: 'sellers.makegoods.add-bonus-offer',
      component: require('views/sellers/makegoods/add-bonus-offer')
    },
    {
      path: '/sellers/makegoods/add-credit-offer',
      name: 'sellers.makegoods.add-credit-offer',
      component: require('views/sellers/makegoods/add-credit-offer'),
      label: 'Add Credit Offer'
    },
    {
      path: '/sellers/makegoods/add-makegood-offer',
      name: 'sellers.makegoods.add-makegood-offer',
      component: require('views/sellers/makegoods/add-makegood-offer'),
      label: 'Add Makegood Offer'
    },
    {
      path: '/sellers/makegoods/add-preempt-offer',
      name: 'sellers.makegoods.add-preempt-offer',
      component: require('views/sellers/makegoods/add-preempt-offer'),
      label: 'Add Preempt Offer'
    },
    {
      path: '/sellers/makegoods/add-program-change-offer',
      name: 'sellers.makegoods.add-program-change-offer',
      component: require('views/sellers/makegoods/add-program-change-offer'),
      label: 'Add Program Change Offer'
    },
    {
      path: '/sellers/makegoods/:id',
      name: 'sellers.makegood',
      component: require('views/sellers/makegoods/show')
    },
    {
      path: '/settings',
      // name: 'settings',
      component: require('views/settings'),
      children: [
        {
          path: '/',
          name: 'settings.user',
          component: require('views/settings/user')
        },
        {
          path: '/specials',
          name: 'settings.specials',
          component: require('views/settings/specials')
        },
        {
          path: '/premium-advertisers',
          name: 'settings.premium-advertisers',
          component: require('views/settings/premium-advertisers')
        },
        {
          path: '/reps',
          name: 'settings.reps',
          component: require('views/settings/reps')
        },
        {
          path: '/display',
          name: 'settings.display',
          component: require('views/settings/display')
        }
      ]
    },
    {
      path: '/terms',
      name: 'terms',
      component: require('views/terms')
    }
  ]
}

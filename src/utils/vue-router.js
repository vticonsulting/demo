import '@testing-library/jest-dom'
import {render, fireEvent} from '@testing-library/vue'

import App from '@/App.vue'
import Profile from '@/views/Profile.vue'
import About from '@/views/About.vue'
import EventCreate from '@/views/EventCreate.vue'
import Events from '@/views/EventList.vue'
import Event from '@/views/EventShow.vue'
import Messages from '@/views/MessageList.vue'
import Message from '@/views/MessageShow.vue'
import store from '@/store/store'
import NotFound from '@/views/NotFound.vue'
import NetworkIssue from '@/views/NetworkIssue.vue'

// const routes = [
//   {path: '/', component: Profile},
//   {path: '/about', component: About},
//   {path: '*', redirect: '/about'},
// ]

const routes = [
  {
    path: '/',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/events',
    name: 'events-list',
    component: Events,
    props: true,
  },
  {
    path: '/events/create',
    name: 'create-event',
    component: EventCreate,
  },
  // {
  //   path: '/events/:id',
  //   name: 'event',
  //   component: Event,
  //   props: true,
  //   beforeEnter(routeTo, routeFrom, next) {
  //     store
  //       .dispatch('event/fetchEvent', routeTo.params.id)
  //       .then(event => {
  //         routeTo.params.event = event
  //         next()
  //       })
  //       .catch(error => {
  //         if (error.response && error.response.status == 404) {
  //           next({name: '404', params: {resource: 'event'}})
  //         } else {
  //           next({name: 'network-issue'})
  //         }
  //       })
  //   },
  // },
  {
    path: '/messages',
    name: 'messages-list',
    component: Messages,
    props: true,
  },
  // {
  //   path: '/messages/:id',
  //   name: 'message',
  //   component: Message,
  //   props: true,
  //   beforeEnter(routeTo, routeFrom, next) {
  //     store
  //       .dispatch('message/fetchMessage', routeTo.params.id)
  //       .then(message => {
  //         routeTo.params.message = message
  //         next()
  //       })
  //       .catch(error => {
  //         if (error.response && error.response.status == 404) {
  //           next({name: '404', params: {resource: 'message'}})
  //         } else {
  //           next({name: 'network-issue'})
  //         }
  //       })
  //   },
  // },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    props: true,
  },
  {
    path: '/network-issue',
    name: 'network-issue',
    component: NetworkIssue,
  },
  {
    path: '*',
    redirect: {name: '404', params: {resource: 'page'}},
    // redirect: '/about',
  },
]

test.skip('full app rendering/navigating', async () => {
  // Notice how we pass a `routes` object to our render function.
  const {queryByTestId} = render(App, {routes})

  expect(queryByTestId('location-display')).toHaveTextContent('/')

  await fireEvent.click(queryByTestId('about-link'))

  expect(queryByTestId('location-display')).toHaveTextContent('/about')
})

test.skip('setting initial route', () => {
  // The callback function receives three parameters: the Vue instance where
  // the component is mounted, the store instance (if any) and the router
  // object.
  const {queryByTestId} = render(App, {routes}, (vue, store, router) => {
    router.push('/about')
  })

  expect(queryByTestId('location-display')).toHaveTextContent('/about')
})

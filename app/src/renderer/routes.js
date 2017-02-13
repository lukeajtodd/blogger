export default [
  {
    path: '/',
    name: 'home-page',
    component: require('components/HomePage.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

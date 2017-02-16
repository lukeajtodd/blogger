export default [
  {
    path: '/',
    name: 'home-page',
    component: require('components/HomePage.vue')
  },
  {
    path: '/:article_id',
    name: 'article',
    component: require('components/Article.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

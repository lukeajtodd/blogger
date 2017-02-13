import Vue from 'vue'
import Vuex from 'vuex'
import VuexFire from 'vuexfire'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import Router from 'vue-router'
import { db, store } from './vuex/store'

import App from './App'
import routes from './routes'

Vue.use(Electron)
Vue.use(Resource)
Vue.use(Router)
Vue.config.debug = true

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

/* eslint-disable no-new */
new Vue({
  firebase: {
    articles: db.ref('/articles')
  },
  computed: Vuex.mapGetters([
    'articles'
  ]),
  router,
  store,
  ...App
}).$mount('#app')

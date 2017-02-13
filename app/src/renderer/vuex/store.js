import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from 'firebase'
import VuexFire from 'vuexfire'

import * as actions from './actions'
import * as getters from './getters'
import modules from './modules'

Vue.use(Vuex)
Vue.use(VuexFire)

var config = {
    apiKey: "AIzaSyBZr-V2fVbOk__KwvTKrL-wnXyK2PQ6YEw",
    authDomain: "vueblog-f5f5d.firebaseapp.com",
    databaseURL: "https://vueblog-f5f5d.firebaseio.com",
    storageBucket: "vueblog-f5f5d.appspot.com",
    messagingSenderId: "360980777620"
  };

Firebase.initializeApp(config);

// Export db for use in main
export const db = Firebase.database()

export const store = new Vuex.Store({
  state: {
    articles: []
  },
  mutations: VuexFire.mutations,
  actions,
  getters,
  modules
})

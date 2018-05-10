import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import VueRouter  from 'vue-router'
import Routes from './routes'

//Config routing
Vue.use(VueRouter);

const router=new VueRouter({
  routes:Routes,
  mode:'history'
});

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDwn1l7SVLYKU9vcREGrdV1vlJpneWBSxg",
  authDomain: "binlogin-50bfd.firebaseapp.com",
  databaseURL: "https://binlogin-50bfd.firebaseio.com",
  projectId: "binlogin-50bfd",
  storageBucket: "",
  messagingSenderId: "21696425374"
};
firebase.initializeApp(config);

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})

import Vue from 'vue'
import App from './App.vue'
import VueRouter  from 'vue-router'
import Routes from './routes'
import VeeValidate from 'vee-validate'
import VueResource from 'vue-resource'
import VueFire from 'vuefire'
import Toasted from 'vue-toasted'
import VueSweetalert2 from 'vue-sweetalert2'

import appFirebaseConfig from './config/db'

//Config alert
Vue.use(VueSweetalert2);

//Config vue fire base
Vue.use(VueFire);

//Config http service
Vue.use(VueResource);

//Config validation
Vue.use(VeeValidate);

//Config routing
Vue.use(VueRouter);

//Config toast
Vue.use(Toasted, {duration: 5000});

const router=new VueRouter({
  routes:Routes,
  mode:'history'
});

//Redirect to login page if not authenticate
router.beforeEach((to, from, next)=>{
  let currentUser = appFirebaseConfig.auth().currentUser;
  let requiresAuth=to.matched.some(record=>record.meta.requiresAuth);

  if(requiresAuth && !currentUser){
    next('login')
  }
  else if(!requiresAuth && currentUser){
    next('/');
  }
  else{
    next();
  }
});

let app;
appFirebaseConfig.auth().onAuthStateChanged((user)=>{
  if(!app){
    new Vue({
      el: '#app',
      render: h => h(App),
      router:router
    })    
  }
});
import login from './components/admin/authentication/login.vue';
import signup from './components/admin/authentication/signup.vue';
import homepage from './components/admin/homepage.vue';

export default[
    {
        path:'/',
        component:homepage,
        meta:{
            requiresAuth:true
        }
    },
    {
        path:'/login',
        component:login
    },
    {
        path:'/signup',
        component:signup
    }
]
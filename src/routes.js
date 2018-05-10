import login from './components/admin/authentication/login.vue';
import signup from './components/admin/authentication/signup.vue'

export default[
    {
        path:'/login',
        component:login
    },
    {
        path:'/signup',
        component:signup
    }
]
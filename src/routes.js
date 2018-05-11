import login from './components/admin/authentication/login.vue';
import signup from './components/admin/authentication/signup.vue';
import homepage from './components/admin/homepage.vue';
import recoverPassword from './components/admin/authentication/recoverPassword.vue';
import logout from './components/admin/authentication/logout.vue';
import resetPwConfirm from './components/admin/authentication/resetPwConfirm.vue';

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
    },
    {
        path:'/reset',
        component:recoverPassword
    },
    {
        path:'/logout',
        component:logout
    },
    {
        path:'/resetpwconfirm',
        component:resetPwConfirm
    }
]
import login from './components/admin/authentication/login.vue';
import signup from './components/admin/authentication/signup.vue';
import homepage from './components/admin/homepage.vue';
import recoverPassword from './components/admin/authentication/recoverPassword.vue';
import logout from './components/admin/authentication/logout.vue';
import manageUser from './components/admin/pageContent/manageUser.vue';
import manageProject from './components/admin/pageContent/manageProject.vue'

export default[
    {
        path:'/',
        component:homepage,
        meta:{
            requiresAuth:true
        }
    },
    {
        path:'/manage-user',
        component:manageUser,
        meta:{
            requiresAuth:true
        }
    },
    {
        path:'/manage-project',
        component:manageProject,
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
    }
]
<template>
    <app-template>
        <div slot="main-form">
            <form class="" action="#">

                <div class="form-group m-b-20 row">
                    <div class="col-12">
                        <label for="emailaddress">Email address</label>
                        <input class="form-control" type="email" id="emailaddress" required="" placeholder="Enter your email">
                    </div>
                </div>

                <div class="form-group row m-b-20">
                    <div class="col-12">
                        <a href="page-recoverpw.html" class="text-muted pull-right forgot-align"><small>Forgot your password?</small></a>
                        <label for="password">Password</label>
                        <input class="form-control" type="password" required="" id="password" placeholder="Enter your password">
                    </div>
                </div>

                <div class="form-group row m-b-20">
                    <div class="col-12">

                        <div class="checkbox checkbox-custom">
                            <input id="remember" type="checkbox" checked="">
                            <label for="remember">
                                Remember me
                            </label>
                        </div>

                    </div>
                </div>

                <div class="form-group row text-center m-t-10">
                    <div class="col-12">
                        <button class="btn btn-block btn-custom waves-effect waves-light" type="submit">Sign In</button>
                    </div>
                </div>

            </form>

            <div class="row m-t-50">
                <div class="col-sm-12 text-center">
                    <p class="text-muted">Don't have an account? <router-link to="/signup"><b>Sign Up</b></router-link></p>
                </div>
            </div>
        </div>
    </app-template>
</template>

<script>
//Import
import template from './template.vue';

export default{
    components:{
        'app-template':template
    },
    data(){
        return {

        }
    },
    created(){

    }
}
</script>

<style scoped>
.forgot-align{
    float: right;
}
</style>
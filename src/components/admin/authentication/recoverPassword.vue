<template>
    <app-template>
        <div slot="main-form">
            <div class="text-center m-b-20">
                <p class="text-muted m-b-0">Enter your email address and we'll send you an email with instructions to reset your password.  </p>
            </div>

            <form class="form-horizontal" action="#">

                <div class="form-group row m-b-20">
                    <div class="col-12">
                        <label for="emailaddress">Email address</label>
                        <input class="form-control" type="email" id="emailaddress" required="" placeholder="john@deo.com">
                    </div>
                </div>

                <div class="form-group row text-center m-t-10">
                    <div class="col-12">
                        <button class="btn btn-block btn-custom waves-effect waves-light" type="submit">Reset Password</button>
                    </div>
                </div>

            </form>

            <div class="row m-t-50">
                <div class="col-sm-12 text-center">
                    <p class="text-muted">Back to <router-link to="/login"><b>Sign In</b></router-link></p>
                </div>
            </div>
        </div>
    </app-template>
</template>

<script>
//Import
import template from './template.vue';
import firebase from 'firebase';

export default{
    components:{
        'app-template':template
    },
    data(){
        return {
            email:''
        }
    },
    methods:{
        sesetPassword: function(){

        }
    },
    computed:{
        isCompleted(){
            return this.email;
        }
    }
}
</script>

<style scoped>
</style>
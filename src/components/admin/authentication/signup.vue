<template>
    <app-template>
        <div slot="main-form">
            <div class="form-horizontal" action="#">

                <div class="form-group row m-b-20">
                    <div class="col-12">
                        <label for="username">Full Name</label>
                        <input class="form-control" type="email" id="username" required="" placeholder="Michael Zenaty">
                    </div>
                </div>

                <div class="form-group row m-b-20">
                    <div class="col-12">
                        <label for="emailaddress">Email address</label>
                        <input v-model="email" class="form-control" type="email" id="emailaddress" required="" placeholder="john@deo.com">
                    </div>
                </div>

                <div class="form-group row m-b-20">
                    <div class="col-12">
                        <label for="password">Password</label>
                        <input v-model="passsword" class="form-control" type="password" required="" id="password" placeholder="Enter your password">
                    </div>
                </div>

                <div class="form-group row m-b-20">
                    <div class="col-12">

                        <div class="checkbox checkbox-custom">
                            <input id="remember" type="checkbox" checked="">
                            <label for="remember">
                                I accept <a href="#" class="text-custom">Terms and Conditions</a>
                            </label>
                        </div>

                    </div>
                </div>

                <div class="form-group row text-center m-t-10">
                    <div class="col-12">
                        <button v-on:click="signUp" class="btn btn-block btn-custom waves-effect waves-light">Sign Up Free</button>
                    </div>
                </div>

            </div>

            <div class="row m-t-50">
                <div class="col-sm-12 text-center">
                    <p class="text-muted">Already have an account?  <router-link to="/login"><b>Sign In</b></router-link></p>
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
            email:'',
            passsword:''
        }
    },
    methods:{
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.passsword).then(
            (user)=>{
                this.$router.replace('/');
            },
            (err)=>{
                alert('Opps. '+err.message);
            });
        }
    }
}
</script>

<style scoped>
.forgot-align{
    float: right;
}
</style>
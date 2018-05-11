<template>
    <app-template>
        <div slot="main-form">
            <div class="" action="#">

                <div class="form-group m-b-20 row">
                    <div class="col-12">
                        <label for="emailaddress">Email address</label>
                        <input v-validate="'required|email'" class="form-control" v-model="email" type="email" name="email" required="" placeholder="Enter your email">
                        <span v-if="errors.has('email')" class="field-error">{{ errors.first('email') }}</span>
                    </div>
                </div>

                <div class="form-group row m-b-20">
                    <div class="col-12">
                        <router-link to="/reset" class="text-muted pull-right forgot-align"><small>Forgot your password?</small></router-link>
                        <label for="password">Password</label>
                        <input v-validate="'required|min:6'" class="form-control" v-model="passsword" type="password" required="" name="password" placeholder="Enter your password">
                        <span v-if="errors.has('password')" class="field-error">{{ errors.first('password') }}</span>
                    </div>
                </div>

                <div class="form-group row m-b-20">
                    <div class="col-12">

                        <div class="checkbox checkbox-custom">
                            <input id="remember" type="checkbox">
                            <label for="remember">
                                Remember me
                            </label>
                        </div>

                    </div>
                </div>

                <div class="form-group row text-center m-t-10">
                    <div class="col-12">
                        <button v-bind:disabled="errors.any() || !isCompleted" v-on:click="signIn" class="btn btn-block btn-custom waves-effect waves-light">Sign In</button>
                    </div>
                </div>

            </div>

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
        signIn: function(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.passsword).then(
            (user)=>{
                this.$router.replace('/');
            },
            (err)=>{
                alert('Opps. '+err.message);
            });
        }
    },
    computed:{
        isCompleted:function(){
            return this.email&&this.passsword;
        }
    }
}
</script>

<style scoped>
.forgot-align{
    float: right;
}
</style>
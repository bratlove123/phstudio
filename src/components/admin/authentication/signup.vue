<template>
    <app-template>
        <div slot="main-form">
            <div class="form-horizontal" action="#">

                <div class="form-group row m-b-20">
                    <div class="col-12">
                        <label for="fullname">Full Name<span class="text-danger">*</span></label>
                        <input v-model="fullname" v-validate="'required'" class="form-control" type="text" name="fullname" placeholder="Michael Zenaty">
                        <span v-if="errors.has('fullname')" class="field-error">{{ errors.first('fullname') }}</span>
                    </div>
                </div>

                <div class="form-group row m-b-20">
                    <div class="col-12">
                        <label for="emailaddress">Email address<span class="text-danger">*</span></label>
                        <input v-model="email" v-validate="'required|email'" class="form-control" type="email" name="email" required="" placeholder="john@deo.com">
                        <span v-if="errors.has('email')" class="field-error">{{ errors.first('email') }}</span>
                    </div>
                </div>

                <div class="form-group row m-b-20">
                    <div class="col-12">
                        <label for="password">Password<span class="text-danger">*</span></label>
                        <input v-validate="'required|min:6'" v-model="passsword" class="form-control" type="password" required="" name="password" placeholder="Enter your password">
                        <span v-if="errors.has('password')" class="field-error">{{ errors.first('password') }}</span>
                    </div>
                </div>

                <div class="form-group row m-b-20">
                    <div class="col-12">
                        <label for="confirmPassword">Confirm Password<span class="text-danger">*</span></label>
                        <input v-validate="'required|confirmed:password'" v-model="confirmPassword" class="form-control" type="password" required="" name="confirmPassword" placeholder="Repeat your password">
                        <span v-if="errors.has('confirmPassword')" class="field-error">{{ errors.first('confirmPassword') }}</span>
                    </div>
                </div>

                <div class="form-group row m-b-20">
                    <div class="col-12">

                        <div class="checkbox checkbox-custom">
                            <input v-model="remember" id="remember" type="checkbox">
                            <label for="remember">
                                I accept <a href="#" class="text-custom">Terms and Conditions</a>
                            </label>
                        </div>

                    </div>
                </div>

                <div class="form-group row text-center m-t-10">
                    <div class="col-12">
                        <button v-bind:disabled="!remember || errors.any() || !isCompleted" v-on:click="signUp" type="submit" class="btn btn-block btn-custom waves-effect waves-light">Sign Up Free</button>
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
            fullname:'',
            email:'',
            passsword:'',
            confirmPassword:'',
            remember:false
        }
    },
    methods:{
        signUp: function(){
            if(!this.errors.any()){
                firebase.auth().createUserWithEmailAndPassword(this.email, this.passsword).then(
                (user)=>{
                    this.$router.replace('/');
                },
                (err)=>{
                    alert('Opps. '+err.message);
                });
            }
        }
    },
    computed:{
        isCompleted(){
            return this.fullname&& this.email&&this.passsword&& this.confirmPassword;
        }
    }
}
</script>

<style scoped>
</style>
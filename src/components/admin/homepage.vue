<template>
    <div>
        <h1>This is a homepage</h1>
        <button v-on:click="signOut">Sign Out</button>
    </div>
</template>

<script>
//Import
import firebase from 'firebase';

export default{
    components:{
    },
    data(){
        return {

        }
    },
    methods:{
        signOut: function(){
            firebase.auth().signOut().then(()=>{
                this.$router.replace('login');
            });
        }
    }
}
</script>

<style scoped>
</style>
<template>
    <div class="account-pages">

        <!-- Begin page -->
        <div class="accountbg" style="background: url('src/assets/app/images/bg-1.jpg');background-size: cover;"></div>

        <div class="wrapper-page account-page-full">

            <div class="card">
                <div class="card-block">

                    <div class="account-box">

                        <div class="card-box p-5">
                            <h2 class="text-uppercase text-center pb-4">
                                <a href="index.html" class="text-success">
                                    <span><img src="../../../assets/app/images/logo.png" alt="" height="26"></span>
                                </a>
                            </h2>

                            <slot name="main-form"></slot>
                        </div>
                    </div>

                </div>
            </div>

            <div class="m-t-40 text-center">
                <p class="account-copyright">2018 © Highdmin. - Coderthemes.com</p>
            </div>

        </div>
    </div>
</template>

<script>
export default{
    data(){
        return {

        }
    }
}
</script>

<style scoped>

</style>
<template>
    <!-- Begin page -->
    <div id="wrapper">

        <!-- ========== Left Sidebar Start ========== -->
        <div class="side-container">
            <div class="left side-menu">
                <div class="sidebar-content">
                    <app-sidebar></app-sidebar>
                </div>
            </div>
        </div>
        
        <!-- Left Sidebar End -->

        <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== -->

        <div class="content-page">

            <!-- Top Bar Start -->
            <div class="topbar">
                <app-topbar></app-topbar>
            </div>
            <!-- Top Bar End -->

            <!-- Start Page content -->
            <div class="content">
                <slot name="page-content"></slot>
            </div> <!-- content -->
            <footer class="footer text-right">
                2018 © Highdmin. - Coderthemes.com
            </footer>
        </div>

        <!-- ============================================================== -->
        <!-- End Right content here -->
        <!-- ============================================================== -->

    </div>
    <!-- END wrapper -->
</template>

<script>
import sidebar from './sidebar.vue';
import topbar from './topbar.vue';

export default {
    components:{
        'app-sidebar':sidebar,
        'app-topbar':topbar
    }
}
</script>

<style scoped>
.side-menu{
    overflow: auto;
    visibility: hidden;
    transition: visibility 0.2s;
    
}

.side-container{
    width: 240px;
    z-index: 10;
    background: #ffffff;
    bottom: 0;
    margin-top: 0;
    padding-bottom: 30px;
    position: fixed;
    top: 0;
}

.sidebar-content, .side-menu:hover{
    visibility: visible;
    transition: visibility 0s 0.2s ease-out;
}

.side-menu::-webkit-scrollbar {
    width: 0.5em;
    
}
 
.side-menu::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
}
 
.side-menu::-webkit-scrollbar-thumb {
    background-color: #d8dbdd;
    opacity: 0.4;
    border-radius: 7px;
}
</style>

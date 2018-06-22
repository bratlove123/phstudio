<template>
    <div class="slimscroll-menu" id="remove-scroll">
        <!-- LOGO -->
        <div class="topbar-left">
            <a href="index.html" class="logo">
                <span>
                    <img src="src/assets/app/images/logo.png" alt="" height="22">
                </span>
                <i>
                    <img src="src/assets/app/images/logo_sm.png" alt="" height="28">
                </i>
            </a>
        </div>

        <!-- User box -->
        <div class="user-box">
            <div class="user-img">
                <img src="src/assets/app/images/users/avatar-1.jpg" alt="user-img" title="Mat Helme" class="rounded-circle img-fluid">
            </div>
            <h5><a href="#">Maxine Kennedy</a> </h5>
            <p class="text-muted">Admin Head</p>
        </div>

        <!--- Sidemenu -->
        <div id="sidebar-menu">

            <ul class="metismenu" id="side-menu">
                <li v-for="(sidebar, index) in sideBars">
                    <a v-bind:href="sidebar.url" v-on:click="toggleSidebar(index)">
                        <i v-if="sidebar.iconClass" v-bind:class="sidebar.iconClass"></i>
                        <span>{{sidebar.name}}</span>
                        <span v-if="sidebar.childBars.length > 0" class="menu-arrow" v-bind:class="{'rotate-menu-icon':sidebar.expanded}"></span>
                    </a>
                    <ul v-if="sidebar.childBars.length > 0" class="nav-second-level" v-bind:class="{'sidebar-show':sidebar.expanded, 'sidebar-hide':!sidebar.expanded}">
                        <li v-for="child in sidebar.childBars">
                            <a v-bind:href="child.url">{{child.name}}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- Sidebar -->

        <div class="clearfix"></div>

    </div>
    <!-- Sidebar -left -->
</template>

<script>
export default {
    data(){
        return {
            sideBars : [
                {
                    name : "App",
                    url: "javascript: void(0);",
                    iconClass: "fi-paper-stack",
                    expanded: false,
                    childBars: [
                        {
                            name: "Calendar",
                            url: "/calendar",
                        },
                        {
                            name: "Calendar",
                            url: "/calendar"
                        },
                        {
                            name: "Calendar",
                            url: "/calendar"
                        }
                    ]
                },
                {
                    name : "Service",
                    url: "javascript: void(0);",
                    iconClass: "fi-paper-stack",
                    expanded: false,
                    childBars: [
                        {
                            name: "Calendar",
                            url: "/calendar",
                        },
                        {
                            name: "Calendar",
                            url: "/calendar"
                        },
                        {
                            name: "Calendar",
                            url: "/calendar"
                        }
                    ]
                },
                {
                    name : "Service",
                    url: "javascript: void(0);",
                    iconClass: "fi-paper-stack",
                    expanded: false,
                    childBars: [
                        {
                            name: "Calendar",
                            url: "/calendar",
                        },
                        {
                            name: "Calendar",
                            url: "/calendar"
                        },
                        {
                            name: "Calendar",
                            url: "/calendar"
                        }
                    ]
                },
                {
                    name : "Service",
                    url: "javascript: void(0);",
                    iconClass: "fi-paper-stack",
                    expanded: false,
                    childBars: [
                        {
                            name: "Calendar",
                            url: "/calendar",
                        },
                        {
                            name: "Calendar",
                            url: "/calendar"
                        },
                        {
                            name: "Calendar",
                            url: "/calendar"
                        }
                    ]
                },
                {
                    name : "Service",
                    url: "javascript: void(0);",
                    iconClass: "fi-paper-stack",
                    expanded: false,
                    childBars: [
                        {
                            name: "Calendar",
                            url: "/calendar",
                        },
                        {
                            name: "Calendar",
                            url: "/calendar"
                        },
                        {
                            name: "Calendar",
                            url: "/calendar"
                        }
                    ]
                },
                {
                    name : "Service",
                    url: "javascript: void(0);",
                    iconClass: "fi-paper-stack",
                    expanded: false,
                    childBars: [
                        {
                            name: "Calendar",
                            url: "/calendar",
                        },
                        {
                            name: "Calendar",
                            url: "/calendar"
                        },
                        {
                            name: "Calendar",
                            url: "/calendar"
                        }
                    ]
                },
                {
                    name : "Service",
                    url: "javascript: void(0);",
                    iconClass: "fi-paper-stack",
                    expanded: false,
                    childBars: [
                        {
                            name: "Calendar",
                            url: "/calendar",
                        },
                        {
                            name: "Calendar",
                            url: "/calendar"
                        },
                        {
                            name: "Calendar",
                            url: "/calendar"
                        }
                    ]
                },
                {
                    name : "Service",
                    url: "javascript: void(0);",
                    iconClass: "fi-paper-stack",
                    expanded: false,
                    childBars: [
                        {
                            name: "Calendar",
                            url: "/calendar",
                        },
                        {
                            name: "Calendar",
                            url: "/calendar"
                        },
                        {
                            name: "Calendar",
                            url: "/calendar"
                        }
                    ]
                },
                {
                    name : "Service",
                    url: "javascript: void(0);",
                    iconClass: "fi-paper-stack",
                    expanded: false,
                    childBars: [
                        {
                            name: "Calendar",
                            url: "/calendar",
                        },
                        {
                            name: "Calendar",
                            url: "/calendar"
                        },
                        {
                            name: "Calendar",
                            url: "/calendar"
                        }
                    ]
                },
                {
                    name : "Service",
                    url: "javascript: void(0);",
                    iconClass: "fi-paper-stack",
                    expanded: false,
                    childBars: [
                        {
                            name: "Calendar",
                            url: "/calendar",
                        },
                        {
                            name: "Calendar",
                            url: "/calendar"
                        },
                        {
                            name: "Calendar",
                            url: "/calendar"
                        }
                    ]
                }
            ]
        }
    },
    methods:{
        toggleSidebar: function(index){
            this.sideBars[index].expanded=!this.sideBars[index].expanded;
        }
    }
}
</script>

<style scoped>
.sidebar-show{
	-webkit-transform: scaleY(1);
	-o-transform: scaleY(1);
	-ms-transform: scaleY(1);
	transform: scaleY(1);

    -webkit-transform-origin: top;
	-o-transform-origin: top;
	-ms-transform-origin: top;
	transform-origin: top;

	-webkit-transition: -webkit-transform 0.26s ease-out;
	-o-transition: -o-transform 0.26s ease;
	-ms-transition: -ms-transform 0.26s ease;
	transition: transform 0.26s ease;
}

.sidebar-hide{
    height: 0;
    -webkit-transform: scaleY(0);
	-o-transform: scaleY(0);
	-ms-transform: scaleY(0);
	transform: scaleY(0);
}

.rotate-menu-icon{
    transform: rotate(90deg) !important;
}


</style>

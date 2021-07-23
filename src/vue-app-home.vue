<template>
    <div>
        <div class="fixed-top container-fluid my导航栏">
            <nav
                class="
                    navbar navbar-default navbar navbar-expand-sm
                    bg-light
                    navbar-light
                "
                role="navigation"
            >
                <div class="container-fluid">
                    <div class="navbar-header">
                        <router-link
                            class="
                                navbar-brand
                                mui-btn mui-btn-primary mui-btn-outlined
                            "
                            to="/"
                            >基于VUE的首页</router-link
                        >
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            v-on:click="togglecollapsenavbar"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div
                        class="collapse navbar-collapse example-navbar-collapse"
                    >
                        <ul class="nav navbar-nav" @click="myfreshdata">
                            <li v-bind:class="{ active: isActive2 }">
                                <router-link
                                    to="/huami"
                                    class="
                                        nav-link
                                        mui-btn mui-btn-primary mui-btn-outlined
                                    "
                                    >花密网页版</router-link
                                >
                            </li>
                            <li v-bind:class="{ active: isActive3 }">
                                <router-link
                                    to="/about"
                                    class="
                                        nav-link
                                        mui-btn mui-btn-primary mui-btn-outlined
                                    "
                                    >关于VUE</router-link
                                >
                            </li>

                            <li>
                                <router-link
                                    to="/beautify-javascript"
                                    class="
                                        nav-link
                                        mui-btn mui-btn-primary mui-btn-outlined
                                    "
                                    >美化javascript代码</router-link
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        <div
            class="container my主体"
            style="min-width: 100%; padding-top: 53px"
        >
            <suspense :timeout="0">
                <template #fallback>
                    <loading></loading>
                </template>
                <router-view />
            </suspense>
        </div>
    </div>
</template>

<script src="./vue-app-home.js"></script>

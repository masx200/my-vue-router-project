<template>
    <div>
        <div :ref="navbarref" class="fixed-top container-fluid my导航栏">
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
                            active-class="active"
                            class="
                                navbar-brand
                                mui-btn mui-btn-primary mui-btn-outlined
                            "
                            to="/"
                            >首页</router-link
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
                        v-show="shownavbar"
                        class="navbar-collapse example-navbar-collapse"
                    >
                        <ul class="nav navbar-nav">
                            <li
                                v-for="(navlink, index) of navlinks"
                                :key="index"
                            >
                                <router-link
                                    active-class="active"
                                    :to="navlink.to"
                                    class="
                                        nav-link
                                        mui-btn mui-btn-primary mui-btn-outlined
                                    "
                                    >{{ navlink.text }}</router-link
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        <div
            class="container my主体"
            :style="`min-width: 100%; padding-top: ${navbarheight}px`"
        >
            <suspense :timeout="500">
                <template #fallback>
                    <Loading></Loading>
                </template>
                <router-view />
            </suspense>
        </div>
    </div>
</template>

<script src="./vue-app-layout.ts"></script>

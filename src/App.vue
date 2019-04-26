<template>
  <div id="app">
    <nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand">masx200的github</a>
        </div>
        <div>
          <ul class="nav navbar-nav" @click="mychangemenu()">
            <li v-bind:class="{ active: isActive1 }">
              <!--     <a href="">首页</a> -->
              <router-link to="/">基于VUE的首页</router-link>
            </li>

            <li v-bind:class="{ active: isActive2 }">
              <router-link to="/huami">花密网页版</router-link>
            </li>
            <li v-bind:class="{ active: isActive3 }">
              <router-link to="/about">关于</router-link>
            </li>
            <li>
              <a href="../index.html">传统网页</a>
            </li>
            <!-- <li><router-link  to="/home">home</router-link></li> -->
          </ul>
        </div>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isActive1: true,
      isActive2: true,
      isActive3: true,
      myroutename: this.$route.name
    };
  },
  methods: {
    mychangemenu() {
      //alert("changed")
      this.myroutename = this.$route.name;
      //console.log(this.$route.name)
      //console.log(this.myroutename)
      if (this.myroutename == "home" || this.$route.name == "home") {
        this.isActive1 = this.isActive2 = this.isActive3 = false;
        this.isActive1 = true;
      } else if (this.myroutename == "huami" || this.$route.name == "huami") {
        this.isActive1 = this.isActive2 = this.isActive3 = false;
        this.isActive2 = true;
      } else if (this.myroutename == "about" || this.$route.name == "about") {
        this.isActive1 = this.isActive2 = this.isActive3 = false;
        this.isActive3 = true;
      }
    }
  },
  created() {
    this.mychangemenu();
  },
  watch: {
    myroutename: function() {
      // 做点什么
      this.mychangemenu();
    }
  }
};
</script>
<style>
* {
  font-family: "Microsoft Yahei";
  text-align: center;
}

#nav {
  float: center;
}
</style>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
<style>
#App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
}
@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
<style src="./about/rotate.css"></style>
<template>
  <div class="hello">
    <img id="App-logo" src="../assets/logo.png">
    <h1>VUE ROUTER测试</h1>
    <h2>欢迎来到VUE</h2>
    <h1>Hello, world!</h1>
    <h2>现在是 {{new Date().toLocaleTimeString()}}.</h2>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      myroutename: this.$route.name
    };
  },
  methods: {
    mychangemenu() {
      this.myroutename = this.$route.name;
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
  mounted() {
    this.mychangemenu();
  },
  created() {
    this.mychangemenu();
  }
};
</script>
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

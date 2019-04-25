<template>
  <div class="hello">
      <div class="container">
            <div class="jumbotron">
                <h1>欢迎登陆页面！</h1>
                <p><a href="https://weibo.com/2174458781?/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1">一生忽而得一夏当司掌好年华的微博_微博
                    </a></p>
                    <p><a href="https://github.com/masx200">masx200的github主页
                        </a></p>
            </div>
        </div>
    <h1>VUE ROUTER测试</h1>
    <h2>欢迎来到VUE</h2>
    <h1>Hello, world!</h1>
    <h2>现在是 {{new Date().toLocaleTimeString()}}.</h2>
    <h1>{{ msg }}</h1>


  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        myroutename:this.$route.name
      }
    },
    methods:{
mychangemenu(){
    this.myroutename=this.$route.name
if(this.myroutename=="home"||this.$route.name=="home"){
    this.isActive1=this.isActive2=this.isActive3=false
    this.isActive1=true
}else if(this.myroutename=="huami"||this.$route.name=="huami"){
    this.isActive1=this.isActive2=this.isActive3=false
    this.isActive2=true
}else if(this.myroutename=="about"||this.$route.name=="about"){
    this.isActive1=this.isActive2=this.isActive3=false
    this.isActive3=true
}



}
},
    mounted(){
    this.mychangemenu()
},created(){
    this.mychangemenu()
}
  }

</script>
<style>
  * {
    font-family: "Microsoft Yahei";
    text-align: center
  }

  #nav {
    float: center;
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

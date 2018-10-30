<template>
  <div class="hello">
    <div class="w-head">
      <h1>{{ title }}</h1>
      <h2>{{ msg }}</h2>
    </div>
    <div class="w-body">
      <p><a href="#" @click="noIn()">Go xixi Home</a></p>
      <p><a href="#" @click="noIn()">Go sky Home</a></p>
      <p><a href="#" @click="goIn()">Go open Home</a></p>
      <p><a href="/vip">Go vip Video</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: 'Welcome to xixily',
      msg: '西西乐园欢迎您的光临'
    }
  },
  methods: {
    goIn:function(){
      alert("您好！亲爱的游客朋友，这儿还在努力建设中...");
    },
    noIn: function(index) {
      alert("禁区，请识擅自闯入")
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
.hello{
  padding: 20px 15px
}
.w-head{
  text-align: center;
  padding-top: 50px;
}
.w-body{
  padding-top: 50px;
  text-align: center;
}
.w-body p{
  padding: 5px;
}
</style>

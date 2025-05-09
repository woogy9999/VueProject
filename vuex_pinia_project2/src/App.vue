<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Child1 v-bind:msg="msg" />
</template>

<script>
import Child1 from './components/ChildComp1.vue'

export default { 
  name: 'App',
  components: {
    Child1
  },
  data(){
    return {
      msg: 'Hello Vue!!'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

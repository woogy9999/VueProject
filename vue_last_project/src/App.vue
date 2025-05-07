<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <constrolView />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import MsgView from './components/MsgView.vue';
//import DirectoryView from './components/DirectoryView.vue';
//import RefView from './components/RefView.vue';
//import EventView from './components/EventView.vue';
import constrolView from './components/ControlView.vue';
export default {
  name: 'App',
  components: {
    constrolView
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

<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from './components/Header.vue'
export default {
  name: 'app',
  components: {
    MyHeader
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
}
li {
  display: inline-block;
}
a {
  display: block;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  background-color: #42b983;
  color: #fff;
}
a:hover {
  background-color: #71bb99;
}
#app {
  padding: 0 100px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
/*#app header {
  padding: 30px;
  margin-bottom: 20px;
  background-color: #f2f2f2;
}
header button {
  margin-right: 20px;
  border: 0;
  border-radius: 5px;
}
button.disabled a{
  background-color: #ec971f;
  opacity: 0.2;
  cursor: not-allowed;
}
button.clear a{
  background-color: #540e0c;
}*/
</style>

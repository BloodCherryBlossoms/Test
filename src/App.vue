<template>
  <div id="app">
    <div id="nav">
      <Menu class="Menu"></Menu>
      <router-view class="content"></router-view>
    </div>
  </div>
</template>
<script>
import Menu from '@/components/menu/menu.vue'
export default {
    components: {
      'Menu': Menu
    }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.Menu{
  width: 20%;
  height: 100%;
  float:left;
  text-align: center;
}
.content{
  width: 79.5%;
  height: 100%;
  // border:1px solid #FF6699;
  float:left
}
</style>

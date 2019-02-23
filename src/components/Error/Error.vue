<template>
  <div id="Http404">
    <router-link to="/">返回主页面</router-link>
    <p>ε=ε=ε=(~￣▽￣)~</p>
    <!-- prettier-ignore -->
    <p>Really sorry about this, but we can't find the page that you're looking for!</p>
    <!-- prettier-ignore -->
    <img src="../../assets/runoob404.jpg" alt="ε=ε=ε=(~￣▽￣)~">
  </div>
</template>

<script>
export default {
  name: 'Errors'
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
#Http404 {
  text-align: center;
}
</style>

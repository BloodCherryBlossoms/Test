<template>
  <div>
    <li v-for="child in children" :key="child.id">
      <tree-folder v-if="child.children" :folder="child"></tree-folder>
      <!-- <span v-else>{{ child.name }}</span> -->
      <router-link v-else :to="child.tourl">{{ child.name }}</router-link>
    </li>
  </div>
</template>

<script>
  import TreeFolder from './Submenu.vue'
  export default {
    props: ['children'],
    components: {
      TreeFolder
    }
  }
</script>

<style>

</style>

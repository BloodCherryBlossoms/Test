<template>
  <div>
    <div :class="{bold: isFolder}" @click="toggle">
      <router-link v-if="folder.tourl" :to="folder.tourl">{{ folder.name }}</router-link>
      <span v-else>{{folder.name}}</span>
      <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
    </div>
      <transition name="fade">
       <tree-folder-contents v-show="open" v-if="isFolder" :children="folder.children"></tree-folder-contents>
      </transition>
  </div>
</template>

<script>
  export default {
    props: ['folder'],
      data: function () {
        return {
            open: false
        }
      },
    components: {
      // TreeFolderContents
    },
    beforeCreate: function () {
      this.$options.components.TreeFolderContents = require('./grandson.vue').default
      // this.$options.components.TreeFolderContents = () => import('')
    },
    methods: {
      toggle: function () {
        if (this.isFolder) {
          this.open = !this.open
        }
      }
    },
    computed: {
      isFolder: function () {
        return this.folder.children &&
          this.folder.children.length
      }
    }
  }
</script>

<style>

</style>

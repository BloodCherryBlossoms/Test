<template>
  <div>
    <div class="menuss">
      <ul>
        <li v-for="folder in folders" :key="folder.id" >
          <tree-folder v-bind:folder="folder" ></tree-folder>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import TreeFolder from './Submenu.vue'
  export default {
    mounted: function () { //全局钩子 = 以前的全局启动
    },
    name: 'menus',
    data() {
      return {
        folders: [
          {
            name: 'Home',
            tourl: '/'
          },
          {
            name: 'About',
            tourl: '/about'
          },
          {
            name: 'Test',
            children: [
            {
              name: 'HHome',
              tourl: '/hhome'
            },
            {
              name: 'scroll',
              children: [{
                name: 'txt',
                tourl: '/txt'
              },
              {
                name: 'tree',
                tourl: '/tree'
              }]
            }
            ]
          },
          {
            name: 'My Tree'
          },
          {
            name: 'Errors',
            tourl: '/e'
          }
        ]
      }
    },
    components: {
       TreeFolder
    },
     methods: {
      toggle: function () {
        let element = []
        let ss = this.menu
        for (let i = 0; i < ss.length; i++) {
          const elements = ss[i].tourl
          element.push(elements)
        }
        console.log(element)
        // console.log(this.isFolder)
      }
    }
  }
</script>

<style>
a{
  text-decoration: none;
  color: black;
}
ul{
  list-style:none;
}
</style>

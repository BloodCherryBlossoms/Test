<template>
  <div>
    <div>
    {{arr}}
    </div>
    <input type="checkbox" @click="checkItem(submenu)">
    <label :class="{boId: isFolder}" @click="toggle">
      <label>{{submenu.name}}</label>
      <span v-if="isFolder">[{{ opens ? '-' : '+' }}]</span>
      {{menus}}
      {{data.selectArr}}
    </label>
    <checkboxs  v-show="opens"
                v-if="isFolder"
                :children="submenu.userList"
                @checkItem="checkItem"
                :arr="arr">
    </checkboxs>

  </div>
</template>

<script>
export default {
  props: ['submenu', 'open', 'arr'],
  data () {
    return {
      data: this.submenu,
      opens: this.open,
      selectArr: this.submenu.selectArr,
      menus: [] //子菜单,
    }
  },
  watch: {
    submenu(val) {
      this.data = val
    },
    open(val) {
      this.opens = val
    }
  },
  components: {
    // checkboxs
  },
  beforeCreate () {
    this.$options.components.checkboxs = require('./checkboxs.vue').default
  },
  methods: {
    //点击展开
    toggle() {
      if (this.isFolder) {
        this.opens = !this.opens
      }
    },
    checkItem(data) {
      console.log(this.arr)
      console.log(data)
      if (data.selectArr.length > 0) {
        data.selectArr = []
        if (data.userList && data.userList.length > 0) {
          console.log(123)
        }
      } else {
        data.selectArr.push(data.id)
        if (data.userList && data.userList.length > 0) {
          this.addChild(data.userList)
        }
      }
    }
  },
  computed: {
    //判断是否有子菜单
    isFolder: function() {
      return this.data.userList &&
        this.data.userList.length
    }
  }
}
</script>

<style>
</style>

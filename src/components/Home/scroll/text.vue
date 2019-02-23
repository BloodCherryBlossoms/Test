<template>
  <div>
      <input type="checkbox" :value="submenu.id" v-model="checked" @click="checkAll">
      <label :class="{bold: isFolder}" @click="toggle">
        <label>{{submenu.name}}</label>
        <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
      </label>
        <checkboxs v-show="open" v-if="isFolder" :children="submenu.list" :childrenChecked="selectArrs" @selectArrsK="selectArrsK"></checkboxs>
      {{selectArrs}}
  </div>
</template>

<script>
export default {
  props: ['submenu', 'submenuChecked'],
  data: function () {
     return {
       data: this.submenu,
       open: true,
       checked: false,
       selectArrs: []
     }
  },
  components: {
    // checkboxs
  },
  beforeCreate () {
    this.$options.components.checkboxs = require('./checkboxs2.vue').default
    // this.$options.components.TreeFolderContents = () => import('')
  },
  mounted() {
    console.log(this.checkeds)
    this.getTree();
  },
  methods: {
    getTree() {
      console.log()
    },
    //展开动作
    toggle: function () {
      console.log(this.isFolder)
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    checkAll: function () {
      let isd = this.isdata
      console.log(isd)
      var _this = this
      console.log(_this.checked)
      console.log(_this.selectArrs)
      this.$nextTick(function(){
        console.log(_this.checked)
      })
      if (_this.checked) {
        _this.selectArrs = []
      } else {
        _this.selectArrs = []
        let list
        if (isd !== undefined) {
          list = isd.list
        }
        console.log(list)
        if (!list) {
          return
        }
        list.forEach((item) => {
          _this.selectArrs.push(item.id)
        })
      }
    },
    selectArrsK: function(val) {
      this.selectArrs = val
    }
  },
  computed: {
    isFolder: function () {
      return this.data.list &&
        this.data.list.length
    },
    isdata: function () {
      return this.data
    }
  },
  watch: {
    'selectArrs': {
      handler(val){
        let isd = this.isdata
        let list = isd.list
        console.log(val)
        if (!list) {
          return
        }
        if (val.length === list.length) {
          this.checked = true
        } else {
          this.checked = false
        }
      }
    }
  }
};
</script>
<style scoped>
</style>

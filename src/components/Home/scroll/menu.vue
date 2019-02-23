<template>
  <div>
    <div v-for="(submenu, index) in datas" :key="index">
      <Submenu :submenu="submenu"
               :open=open
               :arr=datas
      ></Submenu>
    </div>
  </div>
</template>

<script>
import Submenu from './Submenu.vue'
export default {
  props: ['data'],
  data () {
    return {
      datas: this.data, //数据
      msg: 'menu组件', //备注
      open: false //是否展开
    }
  },
  watch: {
    data: function(val) {
      this.datas = val
    }
  },
  mounted() {
    this.addshow(this.datas)
  },
  methods: {
    addshow(arr) {
      for (let i = 0; i < arr.length; i++) {
        this.$set(arr[i], 'show', true)
        this.$set(arr[i], 'selectArr', [])
        if (arr[i].userList && arr[i].userList.length > 0) {
          this.addshow(arr[i].userList)
        }
      }
    }
  },
  components: {
    Submenu
  }
}
</script>

<style>

</style>

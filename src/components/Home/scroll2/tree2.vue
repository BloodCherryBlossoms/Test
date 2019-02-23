<template>
  <div>
      {{datas}}
      <!-- <tree3></tree3> -->
  </div>
</template>

<script>
export default {
    props: ['data'],
    data() {
        return {
            data: this.data,
            mag: 'A组件',
            depth: 0,
            menus: [],
            actId: ''
        }
    },
    // beforeCreate () {
    //     this.$options.components.tree3 = require('./tree3.vue').default
    // },
    mounted() {
        this.getTree()
    },
    methods: {
        async getTree () {
            let _this = this
            console.log(_this.data.code)
        }
    }
}
</script>

<style>

</style>

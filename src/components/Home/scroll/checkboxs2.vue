<template>
  <div>
      <div>
        {{selectArrs}}
      </div>
      <li  v-for="child in children" :key="child.id" class="padds1">
        <!-- <keep-alive> -->
          <Submenu v-if="child.list" :submenu="child" :submenuname="child.id" :submenuChecked="selectArrs"></Submenu>
        <!-- </keep-alive> -->
        <div v-else>
          <input type="checkbox" :value="child.id" v-model="selectArrs" @change="clicks">
          <label>{{child.name}}</label>
        </div>
      </li>
  </div>
</template>

<script>
import Submenu from './text.vue'
export default {
  props: ['children', 'childrenChecked'],
  data () {
    return {
      selectArrs: this.childrenChecked
    }
  },
  components: {
    Submenu
  },
  methods: {
    clicks: function () {
      this.$emit('selectArrsK', this.selectArrs)
    }
  },
  watch: {
    childrenChecked: function (newVal) {
      this.selectArrs = newVal
    }
  },
  mounted () {
      console.log(this.selectArrs)
  }
}
</script>

<style scoped>
.padds1{
  padding: 5px;
}
</style>

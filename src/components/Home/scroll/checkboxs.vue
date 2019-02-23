<template>
  <div>
    <!-- {{children}} -->
    <div v-for="(item, index) in children" :key="index">
        <div v-if="item.userList">
          <Submenu :submenu="item" @checkItem="checkItem" :arr="arr"></Submenu>
        </div>
        <div v-else>
          <input type="checkbox" @click="checkItem(item)">
          <label>{{item.username}}</label>
          {{item.selectArr}}
        </div>
    </div>
  </div>
</template>

<script>
import Submenu from './Submenu.vue'
export default {
  props: ['children', 'arr'],
  components: {
    Submenu
  },
  methods: {
    checkItem(item) {
      this.$emit('checkItem', item)
    }
  }
}
</script>

<style>

</style>

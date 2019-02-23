<template>
  <div>
    <span>子组件subdmok: {{subdmok}}</span>
    <br>
    <span>子组件subdoms: {{subdoms}}</span>
    <br>
    <span>子组件给父组件</span>
    <input type="text" v-model="subdoms" @change="childClick">
    <br>
    <input type="checkbox" ref="test" @click="testCheckbox" v-model="test">
    {{test}}
    <br>
    <input type="checkbox" v-bind:model="sth" v-on:input="sth=$event.target.value">
    {{sth}}
    <br>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: ['subdmok', 'models',],
  data () {
    return {
      subdoms: this.subdmok,
      sth: '',
      test: ''
    }
  },
  mounted(){
    let test = this.$refs.test
    test.checked = true
  },
  watch: {
    subdmok: function (val) {
      this.subdoms = val
    }
  },
  methods: {
      childClick () {
        // childByValue是在父组件on监听的方法
        // 第二个参数this.childValue是需要传的值
        this.$emit('childByValue', this.subdoms)
      },
      testCheckbox () {
        let test = this.$refs.test
        let va = test.checked
        console.log(va)
      }
  }
}
</script>

<style>

</style>

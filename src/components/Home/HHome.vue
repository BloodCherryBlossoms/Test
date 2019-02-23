<template>
  <div>
    <h1>{{ firstName }}</h1>
    <h1>{{ firstName.split('').reverse().join('') }}</h1> <!--拆分字符串,颠倒并重组字符串-->
    <h1>Name: {{ reversedName }}</h1>
    <input type="text" v-model="id" />
     <p>Name: {{user.name}}</p>
    <p>Email: {{user.email}}</p>
    <p>Id: {{user.id}}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'hhome',
  data() {
    return {
      id: '',
      user: {},
      firstName: 'pushs'
    }
  },
  mounted: function () { //全局钩子 = 以前的全局启动
    // this.ajaxss()
  },
  computed: {
    reversedName() {
      return this.firstName.split('').reverse().join('')
    }
  },
 methods: {
    getDataForUser() {
      axios.get(`https://jsonplaceholder.typicode.com/users/${this.id}`)
        .then(res => this.user = res.data)
        .catch(function (error) {
          console.log('错误消息：' + error)
        })
    },
    ajaxss(){
      axios({
        url: 'static/hhome.json',
        method: 'get',
        responseType: 'json'
      }).then((response) => {
        let data = response.data
        // console.log(response)
        // console.log(data)
        for (let index = 0; index < data.length; index++) {
          let datas = {}
          datas.id = data[index].id
          datas.name = data[index].name
          datas.email = data[index].email
          if (datas.id === parseInt(this.id)) {
            console.log('===========')
            let name = datas.name
            let emali = datas.email
            console.log(name, emali)
            console.log('===========')
          }
        }
      }).catch(function (error) {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else {
          console.log('Error', error.message)
        }
        console.log(error.config)
        console.log('错误消息：' + error)
      })
    }
  },
  watch: {
    id() {
      this.getDataForUser();
      this.ajaxss()
      console.log(`Got data for user: `, this.id);
    }
  }
}
</script>

<style scoped>

</style>

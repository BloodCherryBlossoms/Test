<template>
  <div>
    <div class="txtss">
      <div>
        <span>Multiline message is:</span>
        <br>
        <p style="white-space: pre-line;">{{ message }}</p>
        <!-- <a href="" style="white-space: pre-line;">{{ message }}</a> -->
        <br>
        <textarea v-model="message" placeholder="add multiple lines"></textarea>
      </div>
      <div>
        <!-- <input type="button" value="全选" @click="all">
        <input type="button" value="取消" @click="">
        <input type="button" value="反选" @click="">
        <input type="button" value="提交" @click="">
        <br> -->
        <ul>
          <li v-for="rdata in rolesMenuList" :key="rdata.id">
            <input type="checkbox" v-model="checked" @click="checkAlls">
            <label :for="rdata.id">{{rdata.name}}{{checked}}</label>
            <div v-if="rdata.list">
              <li v-for="rdata2 in rdata.list" :key="rdata2.id">
                <input type="checkbox" :value="rdata2.id" v-model="checkList">
                <label :for="rdata2.id">{{rdata2.name}}{{checkList}}</label>
              </li>
            </div>
          </li>
        </ul>
        <p>{{checkList}}</p>
      </div>
      <div>
        <div v-for="submenu in ssdata" :key="submenu.id" class="submenus">
          <Texts :submenu="submenu" :submenuChecked='checked'></Texts>
        </div>
      </div>
      <br>
      <div>
        <Menu :data="rdata"></Menu>
      </div>
      <br>
      <div>
        <div>
          <span>父组件: </span>
          <input type="text" v-model="subdmo">
          <Subassembly :subdmok="subdmo" :models="subdmo" @childByValue="childByValue"></Subassembly>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './menu.vue'
import Texts from './text.vue'
import Subassembly from './Subassembly.vue'
export default {
  name: 'txt',
  data() {
    return {
      message: '',
      ssdata: [
        {
          id: '1',
          name: '水果',
          list: [
            {
              id: '1.1',
              name: '苹果',
              value: '苹果'
            },
            {
              id: '1.2',
              name: '葡萄',
              value: '葡萄'
            },
            {
              id: '1.3',
              name: '西瓜',
              value: '西瓜'
            }
          ]
        },
        {
          id: '4',
          name: '未知'
        }
      ],
      rdata: [
        {
          id: '1.1',
          name: '水果',
          userList: [
            {
              id: '1.1.1',
              name: '苹果',
              userList: [
                {
                  id: '1.1.1A',
                  username: '红苹果'
                },
                {
                  id: '1.1.1B',
                  username: '青苹果'
                }
              ]
            },
            {
              id: '1.1.2',
              username: '梨'
            }
          ]
        },
        {
          id: '1.2',
          name: '未知'
        }
      ],
      rolesMenuList: [{
        name: '全选/取消全选',
        id: '1',
        list: [
          {
            id: '10',
            name: '父级菜单1'
          },
          {
            id: '20',
            name: '父级菜单2'
          },
          {
            id: '30',
            name: '父级菜单3'
          }
        ]
      }],
      checked: false,
      checkList: [],
      subdmo: ''
    }
  },
  components: {
    Menu,
    Texts,
    Subassembly
  },
  methods: {
    checkAlls: function () {
      var _this = this
      console.log(_this.checkList)
      console.log(_this.checked)
      this.$nextTick(function(){
        console.log(_this.checked)
      })
      if (_this.checked) {
        _this.checkList = []
      } else {
        _this.checkList = []
        let list = 'undefined'
        let rMl = _this.rolesMenuList
        for (let i = 0; i < rMl.length; i++) {
           list = rMl[i].list
        }
        console.log(_this.rolesMenuList)
        if (!list){
          return
        }
        list.forEach((item) => {
          _this.checkList.push(item.id)
        })
      }
    },
    childByValue: function(val){
      this.subdmo = val
    }
  },
  watch: {
    'checkList': {
      handler(val){
        let list
        let rMl = this.rolesMenuList
        console.log(rMl)
        for (let i = 0; i < rMl.length; i++) {
           list = rMl[i].list
        }
        console.log(val)
        if (val.length === list.length) {
          this.checked = true;
        } else {
          this.checked = false;
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.submenus{
  list-style:none
}
.txtss{
  float:left
}
.padds1{
  padding: 10px;
}
.scrolls{
  padding: 10px;
  float:left
}
</style>

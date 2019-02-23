<template>
  <div>
    <ul class="treeMoudel">
      <li v-for="(item, index) in menus" :key="index">
      <!--遍历menus-->
        <div :class="{'itemTree':true,'topNode':depth == 0,'noTopNode':depth != 0,'active':actId == item.id}">
        <!-- 判断如果含有name字段就显示name字段 -->
          <span :style="transform" v-if="item.name" :class="{'topSpan':depth== 0,'noTopSpan':depth != 0}">
          <!-- 如果item有孩子且item.show为false,那么图标为折叠图标 -->
            <i v-if="item.userList && item.userList.length > 0 && !item.show" @click="selectItem(item)"></i>
            <!-- 如果item有孩子且item.show为true,那么图标为展开图标 -->
            <i v-if="item.userList && item.userList.length > 0 && item.show" @click="selectItem(item)"></i>
            <i class="selectBox" @click="checkItem(item)">
              <i v-if="item.selectArr.length > 0" :class="{checkName:true}"></i>
              <!-- 如果item的selectArr.length是大于0的，也就是里面有值的话就是勾选状态，否则就是不勾选状态 -->
              <i v-else></i>
            </i>
            {{item.name}}
            {{actId}}
          </span>
          <!-- 判断如果含有username字段就显示username字段 -->
          <span :style="transform" v-if="item.username" :class="{'topSpan':depth== 0,'noTopSpan':depth != 0}">
            <!-- 如果item有孩子且item.show为false,那么图标为折叠图标 -->
            <i v-if="item.userList && item.userList.length > 0 && !item.show" @click="selectItem(item)"></i>
            <!-- 如果item有孩子且item.show为true,那么图标为展开图标 -->
            <i v-if="item.userList && item.userList.length > 0 && item.show" @click="selectItem(item)"></i>
            <i class="selectBox" @click="checkItem(item)">
              <i v-if="item.selectArr.length > 0" :class="{checkUsername:true}"></i>
              <!-- 如果item的selectArr.length是大于0的，也就是里面有值的话就是勾选状态，否则就是不勾选状态 -->
              <i v-else></i>
            </i>
            {{item.username}}
          </span>
        </div>
      <tree3 v-if="item.userList && item.userList.length > 0 && item.show"
        :menus="item.userList"
        :depth="depth+1"
        :actId="actId"
        @selectItem="selectItem"
        @checkItem="checkItem">
      </tree3>
      <!-- <tree3 v-if="item.userList && item.userList.length > 0 && item.show"
        :menus="item.userList"
        :depth="depth+4"
        @selectItem="selectItem"
        :actId="actId"
        @checkItem="checkItem">
      </tree3> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tree3',
  props: ['menus', 'depth', 'actId'],
  data() {
    return {
      msg: '这是B组件'
    }
  },
  methods: {
        // 将selectItem方法暴露出去
        selectItem(item) {
            this.$emit('selectItem', item)
        },
        // 将checkItem方法暴露出去
        checkItem(item) {
            this.$emit('checkItem', item)
        }
    },
    computed: {
        //通过传过来的depth计算下级目录的偏移量，这里我用的transform
        transform() {
            return 'transform:translateX(' + this.depth * 10 + 'px)'
        }
    }
}
</script>

<style lang="scss" scoped>
.treeMoudel{
  li{
      .itemTree{
          width: 100%;
          padding-left:30px;
          position: relative;
          &:hover{
              background:#2B9EEE;
              color:#fff;
          }
          .selectBox{
              display: inline-block;
              width: 16px;
              height:16px;
              border:1px solid #ccc;
              border-radius: 3px;
              position: relative;
              background: #fff;
              top:2px;
              .checkName{
                  display: inline-block;
                  position: absolute;
                  width: 15px;
                  height: 15px;
                  background-color: #2ac845;
              }
              .checkUsername{
                  display: inline-block;
                  position: absolute;
                  width: 15px;
                  height: 15px;
                  background-color: #2ac845;
              }
          }
          span{
              display: inline-block;
              position: absolute;
              font-size:14px;
          }
          .topSpan{
              font-size:16px;
          }
          .noTopSpan{
              font-size:14px;
          }
      }
      .topNode{
          height:55px;
          line-height: 55px;
          font-size:16px;
          cursor: pointer;
      }
      .active{
          background:#2B9EEE;
          color:#fff;
      }
      .noTopNode{
          height:45px;
          line-height:45px;
          &:hover{
              background:#2B9EEE;
              cursor: pointer;
              color:#fff;
          }
      }
  }
}
</style>
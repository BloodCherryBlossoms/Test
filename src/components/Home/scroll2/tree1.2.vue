<template>
  <div>
    <!-- {{data}} -->
    <!-- <div>123</div> -->
    <!-- {{datas}} -->
    <tree3
      :menus="menus"
      :depth="depth"
      :actId="actId"
      @selectItem="selectItem"
      @checkItem="checkItem"
    ></tree3>
  </div>
</template>

<script>
import tree3 from './tree1.3'
export default {
  props: ['data'],
  data() {
    return {
      datas: this.data,
      msg: '这是A组件',
      depth: 0,
      menus: [],
      actId: ''
    };
  },
  components: {
    tree3
  },
  watch: {
    data: function(val) {
      this.datas = val;
    }
  },
  mounted() {
    this.getTree();
  },
  methods: {
    //异步调用ajax async-await(ES7的东西)
    getTree() {
      var last = this.datas;
      if (last.code === 1) {
        this.menus = last.data;
        this.addshow(this.menus);
      }
    },
    //递归函数在每一项中添加selectArr和show
    addshow(arr) {
      for (let i = 0; i < arr.length; i++) {
        this.$set(arr[i], 'show', true);
        this.$set(arr[i], 'selectArr', []);
        if (arr[i].userList && arr[i].userList.length > 0) {
          this.addshow(arr[i].userList);
        }
      }
    },
    //点击箭头使树展开收缩
    selectItem(data) {
      if (data.userList && data.userList.length > 0) {
        //如果此项下有userList且length大于0，则切换展开与折叠状态
        data.show = !data.show;
      } else {
        //如果此项下没有userList或length等于0，则将选中的id赋值给actId
        this.actId = data.id;
      }
    },
    //进行多选勾选
    checkItem(data) {
      console.log(this.menus)
        if (data.selectArr.length > 0) {
          //如果这一项的selectArr有值，说明是被勾选状态，要把selectArr清空，清空勾选
          data.selectArr = [];
          //如果此选项清空勾选后，如果下面有userList的话，那么也同时要清空
          if (data.userList && data.userList.length > 0) {
            this.clearChild(data.userList);
          }
          //如果此选项清空勾选后，要把所有的父元素，也全部清空勾选，因为它不勾选了，所有父元素的状态不可能还处于勾选状态，不管它勾选不勾选，我们都要清除一遍，以防万一
          this.clearFather(this.menus, data);
        } else {
          //如果这一项的selectArr为[]，说明是未被勾选状态，在selectArr里加id值，添加勾选
          data.selectArr.push(data.id);
          //如果此选项清空勾选后，如果下面有userList的话，那么也同时勾选下面所有的孩子
          if (data.userList && data.userList.length > 0) {
            this.addChild(data.userList);
          }
          console.log(this.menus)
          console.log(data)
          //如果此选项勾选后，要判断所有的上级元素是不是应该全部打勾
          this.selectFather(this.menus, data);
      }
    },
    //定义函数清空所有孩子的勾选
    clearChild(arr) {
      for (var i = 0; i < arr.length; i++) {
        arr[i].selectArr = [];
        if (arr[i].userList && arr[i].userList.length > 0) {
          this.clearChild(arr[i].userList);
        }
      }
    },
    //定义函数添加所有孩子的勾选
    addChild(arr) {
      for (var i = 0; i < arr.length; i++) {
        arr[i].selectArr.push(arr[i].id);
        if (arr[i].userList && arr[i].userList.length > 0) {
          this.addChild(arr[i].userList);
        }
      }
    },
    //定义函数一层一层的往上寻找父元素的userList
    clearFather(father, data) {
      for (var i = 0; i < father.length; i++) {
        if (father[i].id === data.id) {
          //找到data所在的userList为father，然后再通过这个userList找到拥有这个userList的父元素
          this.clearRealFather(this.menus, father);
        } else if (father[i].userList && father[i].userList.length > 0) {
          this.clearFather(father[i].userList, data);
        }
      }
    },
    //定义函数根据找到的上层父元素的userList来寻找父元素，并将他们清除勾选
    clearRealFather(menus, arr) {
      for (var i = 0; i < menus.length; i++) {
        console.log(menus[i].userList)
        console.log(menus)
        console.log(arr)
        if (menus[i].userList === arr) {
          //找到这个拥有userList的父元素后，将此selectArr清空
          menus[i].selectArr = [];
          //找到这个拥有userList的父元素后，再调用clearFather，再进行向上寻找父元素，知道没有父元素为止
          this.clearFather(this.menus, menus[i]);
        } else if (menus[i].userList && menus[i].userList.length > 0) {
          this.clearRealFather(menus[i].userList, arr);
        }
      }
    },
    //定义函数一层一层的往上寻找父元素的userList
    selectFather(father, data) {
      for (var i = 0; i < father.length; i++) {
        if (father[i].id === data.id) {
          var arr = [];
          for (var j = 0; j < father.length; j++) {
            if (father[j].selectArr.length > 0) {
              arr.push(father[i]);
            }
          }
          //判断此数组中是不是所有的selectArr都有值，如果有值，就执行selectRealFather，将上层父元素也勾选
          if (arr.length === father.length) {
            this.selectRealFather(this.menus, father);
          }
        } else if (father[i].userList && father[i].userList.length > 0) {
          this.selectFather(father[i].userList, data);
        }
      }
    },
    //定义函数根据找到的上层父元素的userList来寻找父元素，并将他们清除勾选
    selectRealFather(menus, arr) {
      for (var i = 0; i < menus.length; i++) {
        if (menus[i].userList === arr) {
          //找到这个拥有userList的父元素后，给selectArr赋值，使其勾选
          menus[i].selectArr.push(menus[i].id);
          //找到这个拥有userList的父元素后，再调用clearFather，再进行向上寻找父元素，知道没有父元素为止
          this.clearFather(this.menus, menus[i]);
        } else if (menus[i].userList && menus[i].userList.length > 0) {
          this.selectRealFather(menus[i].userList, arr);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.treeMoudel {
  li {
    .itemTree {
      width: 100%;
      padding-left: 30px;
      position: relative;
      &:hover {
        background: #2b9eee;
        color: #fff;
      }
      .selectBox {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 1px solid #ccc;
        border-radius: 3px;
        position: relative;
        background: #fff;
        top: 2px;
        .checkName {
          position: absolute;
          top: -16px;
          left: 0px;
          color: #333;
        }
        .checkUsername {
          position: absolute;
          top: -12px;
          left: 0px;
          color: #333;
        }
      }
      span {
        display: inline-block;
        position: absolute;
        font-size: 14px;
      }
      .topSpan {
        font-size: 16px;
      }
      .noTopSpan {
        font-size: 14px;
      }
    }
    .topNode {
      height: 55px;
      line-height: 55px;
      font-size: 16px;
      cursor: pointer;
    }
    .active {
      background: #2b9eee;
      color: #fff;
    }
    .noTopNode {
      height: 45px;
      line-height: 45px;
      &:hover {
        background: #2b9eee;
        cursor: pointer;
        color: #fff;
      }
    }
  }
}
</style>

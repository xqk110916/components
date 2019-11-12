<template>
  <div>
    <van-sticky>
      <div class="nav-title">
        <van-dropdown-menu class="nav-title-list">
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>

        <span class="nav-title-list">距离最近</span>
        <span class="nav-title-list">品质联盟</span>

        <van-dropdown-menu class="nav-title-list">
          <van-dropdown-item title="筛选" ref="item">
            <div class="group" v-for="(item, index) in screenGroup" :key="index">
              <p class="group-title"> {{ item.title }} </p>
              <div class="tag-group">
                <div v-for="option in item.options" :class="['tags', {'tag-active': tagIsActive(option.id)}]" :key="option.id" @click="changeTagActive(option.id)"> {{ option.name }} </div>
              </div>
            </div>
            
            <div class="buttonBox">
              <van-button type="default" @click="onConfirm" :class="['btn',true?'empty':'']">清空</van-button>
              <van-button type="primary" @click="onConfirm" class="btn">确认</van-button>
            </div>
            
          </van-dropdown-item>
        </van-dropdown-menu>
        
      </div>
    </van-sticky>
    
  </div>
</template>

<script>
  export default {
    name: 'recommend',
    data() {
      return {
        value1: 0,
        option1: [      //集合1排序数据
          { text: '综合排序', value: 0 },
          { text: '好评有限', value: 1 },
          { text: '销量最高', value: 2 },
          { text: '起送价最低', value: 3 },
          { text: '配送最快', value: 4 },
          { text: '配送费最低', value: 5 },
          { text: '人均从低到高', value: 6 },
          { text: '人均从高到低', value: 7 },
          { text: '通用排序', value: 8 },
        ],
        screenGroup: [      //筛选分组数据
          {
            title: '上家服务(可多选)',
            options: [
              {id: 1, name: '选项1'},
              {id: 2, name: '选项2'},
              {id: 3, name: '选项3'},
              {id: 4, name: '选项4'},
            ]
          }
        ],
        tagActive: [],      //选中的筛选条件
      }
    },
    methods: {
      changeTagActive(id) {
        let index = this.tagActive.indexOf(id)
        if(index >= 0) {
          this.tagActive.splice(index, 1)
        } else {
          this.tagActive.push(id)
        }
      },
      tagIsActive(id) {   //判断标签是否被选中
        let index = this.tagActive.indexOf(id)
        if(index >= 0) {
          return true
        } else {
          return false
        }
      },
      onConfirm() {
        this.$refs.item.toggle();
      }
    },
  }
</script>

<style lang="scss" scoped>
.nav-title {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: .79rem;
  margin-right: .25rem;

  .nav-title-list {
    font-size: .28rem;
    color: #333;

    .buttonBox {
      display: flex;
      .btn {
        width: 50%;
      }
      .empty {
        color: #ddd;
      }
    }
  }

  .group {
    margin-bottom: .2rem;

    .group-title {
      color: #666;
      font-size: .24rem;
      margin-left: .7rem;
      margin-bottom: .15rem;
    }

    .tag-group {
      box-sizing: border-box;
      padding: 0 .2rem;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .tags {
        width: 2.22rem;
        height: .7rem;
        background: #fafafa;
        color: #333;
        font-size: .26rem;
        line-height: .7rem;
        text-align: center;
        border-radius: 5px;
        margin-top: .06rem;
        margin-bottom: .06rem;
      }

      .tag-active {
        background: #edf5ff;
        color: #55a3ec;
      }
    }
  }
  
  
}
</style>
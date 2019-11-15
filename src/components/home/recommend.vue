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
            <select-filter :group="screenGroup" :actives="multipleTagActive" @change:active="multipleChangeActive" multiple></select-filter>
            
            <div class="buttonBox">
              <van-button type="default" @click="emptyCheck" :class="['btn', !multipleTagActive.length?'empty':'']">清空</van-button>
              <van-button type="primary" @click="onConfirm" class="btn">确认</van-button>
            </div>
            
          </van-dropdown-item>
        </van-dropdown-menu>
        
      </div>
    </van-sticky>
    
  </div>
</template>

<script>
  import selectFilter from '@/components/selectFilter'
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
        screenGroup: {
          title: '上家服务(可多选)',
          options: [
            {id: 1, name: '选项1'},
            {id: 2, name: '选项2'},
            {id: 3, name: '选项3'},
            {id: 4, name: '选项4'},
          ]
        },
        multipleTagActive: [],      //选中的筛选条件
      }
    },
    methods: {
      multipleChangeActive(active) {
        this.multipleTagActive = active
      },
      onConfirm() {
        this.$refs.item.toggle();
      },
      emptyCheck() {

      },
    },
    components: {
      selectFilter,
    }
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

  
  
  
}
</style>
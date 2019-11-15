<template>
  <div>
    <div class="group">
      <p class="group-title"> {{ group.title }} </p>
      <div class="tag-group">
        <div v-for="option in group.options" :class="['tags', {'tag-active': tagIsActive(option.id)}]" :key="option.id" @click="changeTagActive(option.id)"> {{ option.name }} </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'multipleOption',
    data(){
      return {
        tagActive: [],
      }
    },
    computed: {
      tagActive() {
        return 
      },
    },
    methods: {
      changeTagActive(id) {  //判断标签是否被选中
        if(this.multiple) {
          let index = this.tagActive.indexOf(id)
          if(index >= 0) {
            this.tagActive.splice(index, 1)
            this.$emit("change:active", this.tagActive)
          } else {
            this.tagActive.push(id)
            this.$emit("change:active", this.tagActive)
          }
        } else {
          this.tagActive = [id]
          this.$emit("change:active", this.tagActive)
        }
      },
      tagIsActive(id) {   //判断标签是否被选中, 从而改变样式
        let index = this.tagActive.indexOf(id)
        if(index >= 0) {
          return true
        } else {
          return false
        }
      },
      emptyCkeck() {
        console.log('===')
        this.tagActive = []
        this.$emit("multiple:changeactive", this.tagActive)
      }
    },
    props: {
      group: {
        type: Object,
        default: {},
      },
      actives: {
        type: Array,
        default: [],
      },
      multiple: {
        type: Boolean,
        default: false,
      }
    }
  }
</script>

<style lang="scss" scoped>
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
      font-weight: 700;
      font-size: .28rem;
    }
  }
}
</style>
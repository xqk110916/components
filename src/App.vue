<template>
  <div id="app">
    <index></index>
  </div>
</template>

<script>
import index from '@/views/index.vue'
export default {
  name: 'app',
  components: {
    index
  }
}
</script>

<style>
.icon {
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
/* 给字体两侧添加横杠 */
.twoFlanksLine {   
  font-size: .3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.twoFlanksLine:before {
  display: inline-block;
  content: "";
  width: .4rem;
  height: 1px;
  background-color: #999;
  margin: 0 .2rem;
  margin-right: .2rem;
}
.twoFlanksLine:after {
  display: inline-block;
  content: "";
  width: .4rem;
  height: 1px;
  background-color: #999;
  margin: 0 .2rem;
  margin-left: .2rem;
}
</style>

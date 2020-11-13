<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <home-header></home-header>

    <router-view></router-view>
  </div>
</template>

<script>
import homeHeader from '@/view/homepage/homeHeader'
import Vue from 'vue'
import { Button, Search } from 'vant'
Vue.use(Search)
Vue.use(Button)

export default {
  data() {
    return {
      value: '',
      imgList: []
    }
  },
  components: {
    homeHeader: homeHeader
  }
}
</script>

<style lang="scss" scoped></style>

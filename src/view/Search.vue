<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div class="hot">
      <div style="font-size:12px;color:gray">热门搜索</div>
      <van-row type="flex" justify="space-between">
        <van-col span="6">尖叫实验室</van-col>
        <van-col span="5">暖书包</van-col>
        <van-col span="5">沙发</van-col>
        <van-col span="5">杯子</van-col>
      </van-row>
      <van-row type="flex" justify="space-between">
        <van-col span="5">餐具</van-col>
        <van-col span="5">茶具</van-col>
        <van-col span="5">吊灯</van-col>
        <van-col span="5">厨房</van-col>
      </van-row>
      <van-row type="flex" justify="space-between">
        <van-col span="5">儿童</van-col>
        <van-col span="5">HAY</van-col>
        <van-col span="5">Arabia</van-col>
        <van-col span="5">家饰</van-col>
      </van-row>
      <van-row type="flex" justify="space-between">
        <van-col span="6">收纳</van-col>
        <van-col span="6">床上用品</van-col>
        <van-col span="6">旅行</van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Search, Col, Row } from 'vant'

Vue.use(Col)
Vue.use(Row)
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onCancel() {
      this.$router.push('/homepage')
    },
    onSearch() {
      console.log('search')
      this.$router.push(`/search/result?keyword=${this.value}`)
    },
    clickKeyword() {}
  },
  mounted() {
    this.$store.commit('tabbarHideMutation')
  },
  destroyed() {
    this.$store.commit('tabbarShowMutation')
  }
}
</script>

<style lang="scss" scoped>
.hot {
  padding: 20px;
}
.van-col {
  background: #f5f5f5;
  padding: 10px;
  font-size: 12px;
  text-align: center;
  margin: 3px 0;
}
</style>

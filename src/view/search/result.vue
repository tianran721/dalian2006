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

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="false"
      :offset="50"
    >
      <van-cell v-for="item in productList" :key="item.productId">
        <img
          :src="item.productImg"
          alt=""
          @click="handleClick(item.productId)"
        />
        <div class="productName van-ellipsis">{{ item.productName }}</div>
        <div class="price">
          <span class="sellPrice">¥{{ item.sellPrice }}</span>
          <span class="originalPrice">{{ item.originalPrice }}</span>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { List, Cell, Col, Row } from 'vant'
Vue.use(List)
Vue.use(Cell)

export default {
  data() {
    return {
      value: '',
      productList: [],
      loading: false,
      finished: false,
      current: 1
    }
  },
  methods: {
    onCancel() {
      this.$router.push('/homepage')
    },
    onSearch() {
      this.$router.push(`/search/result?keyword=${this.value}`)
    },
    onLoad() {
      // console.log('到底了')
      this.current++
      axios(
        `/product/search?keyword=${this.$route.query.keyword}&sort=onShelfTime&order=desc&currentPage=${this.current}`
      ).then(res => {
        // console.log(res.data)
        if (res.data.length === 0) {
          this.finished = true
        }
        this.productList = [...this.productList, ...res.data.data.products]
      })
      this.loading = false
    },
    handleClick(id) {
      this.$router.push(`/item/${id}`)
    }
  },
  mounted() {
    console.log(this.$route, this.$route.query.keyword)
    axios
      .get(
        `/product/search?keyword=${this.$route.query.keyword}&sort=onShelfTime&order=desc&currentPage=1`
      )
      .then(res => {
        console.log(res.data.data.products)
        this.productList = res.data.data.products
      })
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
.productName {
  color: #808080;
  font-size: 12px;
}
.sellPrice {
  margin: 0 5px 0 15px;
}

.originalPrice {
  color: #aaa;
  margin: 0px 0px 2.5px;
  font-size: 11px;
  text-decoration: line-through;
}
.van-list {
  display: flex;
  flex-flow: wrap;
  justify-content: left;
  .van-cell {
    width: 50%;
  }
}
</style>

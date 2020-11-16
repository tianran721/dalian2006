<template>
  <div>
    <van-nav-bar
      title="商品详情"
      @click-left="$router.push('/homepage')"
      @click-right="$router.push('/search/view')"
    >
      <template #left>
        <van-icon name="bag-o" size="22" color="black" />
      </template>
      <template #right>
        <van-icon name="search" size="22" color="black" />
      </template>
    </van-nav-bar>
    <div class="youLike">猜你喜欢</div>
    <van-list
      :finished="finished"
      finished-text="没有更多了"
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
        </div>
      </van-cell>
    </van-list>
    <van-goods-action>
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ffd444" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import {
  NavBar,
  Icon,
  Cell,
  List,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant'
Vue.use(GoodsAction)
Vue.use(GoodsActionButton)
Vue.use(GoodsActionIcon)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(List)
Vue.use(Cell)
export default {
  data() {
    return {
      productList: [],
      finished: false
    }
  },
  mounted() {
    this.$store.commit('tabbarHideMutation')
    console.log(this.$route.params.id)
    axios(`/recommend/item?skuId=${this.$route.params.id}`).then(res => {
      console.log(res.data.data)
      this.productList = res.data.data
    })
  },
  methods: {
    handleClick(id) {
      this.$router.push(`/item/${id}`)
      axios(`/recommend/item?skuId=${this.$route.params.id}`).then(res => {
        this.productList = res.data.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.youLike {
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: rgb(219, 216, 216);
}
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
.van-list {
  display: flex;
  flex-flow: wrap;
  justify-content: left;
  .van-cell {
    width: 50%;
  }
}
</style>

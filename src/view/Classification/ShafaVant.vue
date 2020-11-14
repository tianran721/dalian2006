<template>
    <div class="tab">
        <van-tabs v-model="active">
            <van-tab title="上新">
                <div class="tad-1">
                  <ul >
                    <li v-for="item in datalist" :key="item.productId">
                      <img :src="item.productImg" alt="">
                       <p class="active">{{item.productName}}</p>
                       <span class="active">￥{{item.sellPrice}}</span>
                       <div class="active">{{item.prizeOrSlogan}}</div>
                    </li>
                  </ul>
                </div>
            </van-tab>
            <van-tab title="销量">
                 <div class="tad-1">
                  <ul >
                    <li v-for="item in datalistb" :key="item.productId">
                      <img :src="item.productImg" alt="">
                       <p class="active">{{item.productName}}</p>
                       <span class="active">￥{{item.sellPrice}}</span>
                       <div class="active">{{item.prizeOrSlogan}}</div>
                    </li>
                  </ul>
                </div>
            </van-tab>
            <van-tab title="价格">
                    <div class="tad-1">
                  <ul >
                    <li v-for="item in datalistc" :key="item.productId">
                      <img :src="item.productImg" alt="">
                       <p class="active">{{item.productName}}</p>
                       <span class="active">￥{{item.sellPrice}}</span>
                       <div class="active">{{item.prizeOrSlogan}}</div>
                    </li>
                  </ul>
                </div>
            </van-tab>
        </van-tabs>
    </div>

</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import { Tab, Tabs } from 'vant'

Vue.use(Tab).use(Tabs)

export default {
  data() {
    return {
      active: 0,
      datalist: [],
      datalistb: [],
      datalistc: []

    }
  },
  mounted() {
    axios.get('/pages/category/20?currentPage=1&sort=onShelfTime&order=desc&_=1605280721526')
      .then((res) => {
      // console.log(res.data)
        this.datalist = res.data.data
      })
    axios.get('/pages/category/20?currentPage=1&sort=sales&order=desc&_=1605285670853')
      .then((res) => {
      // console.log(res.data)
        this.datalistb = res.data.data
      })
    axios.get('/pages/category/20?currentPage=1&sort=price&order=desc&_=1605286175419')
      .then((res) => {
      // console.log(res.data)
        this.datalistc = res.data.data
      })
  }
}
</script>
<style lang="scss" scoped>
*{margin: 0;
  padding: 0;
}
.tab{
  margin-bottom:50px ;
}
.tad-1{
  ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li{

      width: 50%;

      p{
        font-size: 12px;
        color: #808080;
      }
      img{width: 100%;
          height: 180px;
      }
      span{
        font-size: 13px;
        color: #000;
      }
     div{
       overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      color: #808080;
     }
    }
  }
}
.active{
  margin-left: 10px;
}
</style>

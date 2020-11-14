<template>
  <div >

    <swiper   v-if="imgList.length">
      <div class="swiper-slide" v-for="item in imgList" :key="item.id">
        <img :src="item.bannerImgSrc" alt=""  />
      </div>
    </swiper>

    <div>
    <goodies-swiper v-if="List.length" title='good'>
      <div
      class="swiper-slide" v-for="item in List" :key="item.id">
       <img :src="item.productImg" alt="" class='imgs'/>
      <div class="ming">{{item.productTitle}}</div>
      <div class="qian">￥{{item.sellPrice}}</div>
    </div>
    </goodies-swiper>
    </div>
    <router-link to= "/homepage/goodies/quanbu" tag='div' class="quanbu">查看全部</router-link>

    <shada></shada>
    <remen></remen>
  </div>
</template>

<script>
import swiper from '../../../components/Swiper'
import axios from 'axios'
import goodiesSwiper from './goodies/goodiesSwiper'
import quanbu from '@/view/homepage/goodies/quanbu'
import shada from './goodies/shada'
import remen from './goodies/remen'

export default {
  components: {
    swiper,
    goodiesSwiper,
    shada,
    remen
  },
  data() {
    return {
      imgList: [],
      List: []
    }
  },
  mounted() {
    axios
      .get(
        'v2/page?pageId=1&tabId=10005&currentPage=1&pageSize=8&_=1605235353609'
      )
      .then(res => {
        //console.log(res.data.data.modules[0].moduleContent.banners)
        this.imgList = res.data.data.modules[0].moduleContent.banners
        this.List = res.data.data.modules[1].moduleContent.products
      })
  }
}
</script>
<style lang="scss" scoped>

.page-module-title{
  height: 60px;
  h1{
      font-weight: bold;
      text-align: center;
      height: 30px;
      line-height: 30px;
      color: #000;
      font-size:20px;
      margin: 10px 0;

  }
  h3{
      text-align: center;
      color: #808080;
      height: 30;
      line-height: 30px;
      font-size:5px;
      margin-bottom: 5px;
      font-weight: normal;
  }
}
  .imgs{
    width: 100px !important;
  }
  .ming{
    font-size: 8px;
    color: #808080;
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .qian{
   font-size: 8px;
  }
  .quanbu{
    text-align: center;

      color: #000;
      font-size:8px;
      padding: 20px;
  }
  </style>

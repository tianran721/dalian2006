<template>
  <div>
    <swiper v-if="imgList.length">
      <div class="swiper-slide" v-for="item in imgList" :key="item.id">
        <img :src="item.bannerImgSrc" alt="" />
      </div>
    </swiper>
    <div class="banner">
      <a href="javascript:;">
        <img
          src="https://img.wowdsgn.com/page/banners/ad782eca-7d30-45cf-a20b-7a79707637ca_2dimension_1125x210.jpg?imageslim"
          alt=""
      /></a>
    </div>
    <div class="banner-group" v-for="item in imgList2" :key="item.id">
      <div class="banner-item">
        <a href="javascript:;">
          <img :src="item.bannerImgSrc" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from '../../../components/Swiper'
import axios from 'axios'
export default {
  components: {
    swiper: swiper
  },
  data() {
    return {
      imgList: [],
      imgList2: []
    }
  },
  mounted() {
    axios
      .get('/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1605168939004')
      .then(res => {
        console.log(res.data.data.modules[2])
        this.imgList = res.data.data.modules[0].moduleContent.banners
        this.imgList2 = res.data.data.modules[2].moduleContent.banners
      })
  }
}
</script>

<style lang="scss" scoped>
.banner {
  img {
    display: block;
    width: 100%;
  }
}
.banner-group {
  overflow: hidden;
  .banner-item {
    float: left;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>

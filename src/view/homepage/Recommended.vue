<template>
  <div>
    <swiper v-if="imgList.length">
      <div class="swiper-slide" v-for="item in imgList" :key="item.id">
        <img
          :src="item.bannerImgSrc"
          alt=""
          @click="handleClick(item.bannerLinkTargetId)"
        />
      </div>
    </swiper>
    <div class="banner">
      <a href="javascript:;">
        <img
          src="https://img.wowdsgn.com/page/banners/ad782eca-7d30-45cf-a20b-7a79707637ca_2dimension_1125x210.jpg?imageslim"
          alt=""
      /></a>
    </div>
    <div class="banner-group">
      <div class="banner-item" v-for="item in imgList2" :key="item.id">
        <div class="banner-item">
          <a href="javascript:;">
            <img :src="item.bannerImgSrc" />
          </a>
        </div>
      </div>
    </div>

    <ul class="page1">
      <li v-for="item in imgAll" :key="item.moduleId">
        <img :src="item.moduleContent.bannerImgSrc" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
import swiper from '../../../components/Swiper'
import axios from 'axios'
import Vue from 'vue'
import { Search } from 'vant'

Vue.use(Search)
export default {
  components: {
    swiper: swiper
  },
  data() {
    return {
      imgList: [],
      imgList2: [],
      imgAll: []
    }
  },
  mounted() {
    axios
      .get('/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1605198857663')
      .then(res => {
        console.log(res.data.data.modules)
        this.imgList = res.data.data.modules[0].moduleContent.banners
        this.imgList2 = res.data.data.modules[2].moduleContent.banners
        this.imgAll = res.data.data.modules
      })
  },
  methods: {
    handleClick(id) {
      // console.log(id)
      if (id !== 0) {
        //跳到商品详情页
        // this.$router.push(`/detail/${id}`)
        this.$router.push({
          name: 'myDetail',
          params: {
            id: id
          }
        })
      }
    },
    handleimg(arr) {
      var tmp = arr.map(item => item.moduleContent)
      return tmp
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}

.banner-group {
  display: flex;
  .banner-item {
    width: 33.3%;
    display: flex;
    justify-content: center;
    img {
      width: 100px;
      height: 140px;
    }
  }
}
</style>

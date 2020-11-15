<template>
  <div>
    <div @click="isClick">Potential品质空间</div>

    <swiper v-if="imgList.length">
      <div class="swiper-slide" v-for="item in imgList" :key="item.id">
        <img :src="item.bannerImgSrc" alt="" />
      </div>
    </swiper>
  </div>
</template>

<script>
import swiper from '../../../components/Swiper'
import axios from 'axios'
export default {
  methods: {
    isClick() {
      console.log('222')
    }
  },
  components: {
    swiper: swiper
  },
  data() {
    return {
      imgList: []
    }
  },
  mounted() {
    axios
      .get(
        '/v2/page?pageId=1&tabId=10005&currentPage=1&pageSize=8&_=1605177619089'
      )
      .then(res => {
        console.log(res.data.data.modules[0].moduleContent.banners)
        this.imgList = res.data.data.modules[0].moduleContent.banners
      })
  }
}
</script>

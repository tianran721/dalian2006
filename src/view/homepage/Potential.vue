<template>
  <div>
    <swiper v-if="imgList.length">
      <div class="swiper-slide" v-for="item in imgList" :key="item.id">
        <img :src="item.bannerImgSrc" alt="" />
      </div>
    </swiper>
    <cuangxin></cuangxin>
    <zawu></zawu>
    <deng></deng>
  </div>
</template>

<script>
import swiper from '../../../components/Swiper'
import axios from 'axios'
import cuangxin from './potential/cuangxin.vue'
import zawu from './potential/zawu'
import deng from './potential/deng'
export default {
  components: {
    swiper,
    cuangxin,
    zawu,
    deng
  },
  data() {
    return {
      imgList: []
    }
  },
  mounted() {
    axios
      .get(
        '/v2/page?pageId=1&tabId=10006&currentPage=1&pageSize=8&_=1605341147518'
      )
      .then(res => {
        console.log(res.data.data.modules[0].moduleContent.banners)
        this.imgList = res.data.data.modules[0].moduleContent.banners
      })
  }
}
</script>

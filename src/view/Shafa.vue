<template>
    <div>
       <shafa-header></shafa-header>
        <shafa-swiper>
            <div class="swiper-slide" v-for="(item,index) in dataList" :key="index" @click="addClass(index) " :class="{
           ischeck:index==current}">
                {{item}}
            </div>
        </shafa-swiper>
        <shafa-vant></shafa-vant>
    </div>
</template>
<script>

// import Vue from 'vue'
// import { Icon } from 'vant'
import shafaSwiper from './Classification/ShafaSwiper'
import shafaHeader from './Classification/Shafaheader'
import shafaVant from './Classification/ShafaVant'
export default {
  data() {
    return {
      dataList: ['All', '沙发', '椅凳', '柜架', '休闲椅', '餐桌', '茶几和餐桌', '书桌', '床'],
      current: 0
    }
  },
  components: {
    shafaSwiper,
    shafaHeader,
    shafaVant
  },
  methods: {
    addClass(index) {
      this.current = index
    }

  }
}
</script>
<style lang="scss" scoped>
*{padding: 0;
  margin: 0;
}

.swiper-slide{
    overflow: hidden;
    border: 1px solid #ccc;
    height: 80px;
    line-height: 80px;
    text-align: center;
    margin-left: 10px;
    background: white;
    opacity: 0.3;

    color: red;
}
.swiper-slide:nth-of-type(1){
    margin-left: 20px;
}
.ischeck  {
    background: #e6e6e6;
    opacity: 0.6;
    border: 2px solid white;
}

</style>

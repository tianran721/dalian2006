<template>
  <div>
    <div class="swiper-container kerwin">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper, { Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
Swiper.use([Pagination])
export default {
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    loop: {
      type: Boolean,
      default: true
    },
    
  },
  mounted() {
    new Swiper('.kerwin', {
      loop: this.loop,
      autoplay: this.autoplay,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  .swiper-slide img {
    width: 100%;
  }
}
</style>

<template>
    <div>
    <div class="swiper-container" :class="title">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper/bundle'// swipe6 之前， 所有的功能都集成再swiper核心包
// swiper6之后， 功能分离了。
import 'swiper/swiper-bundle.css'
// css在哪？？？
export default {
  props: {
    perview: {
      type: Number
    },
    title: {
      type: String
    }
  },
  // 每次更新都会重新执行
  mounted () {
    //console.log("mounted1111111111111111111111")
    var swiper = new Swiper('.' + this.title, {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true

    })
  }
}
</script>

<style lang="scss" scoped>

</style>

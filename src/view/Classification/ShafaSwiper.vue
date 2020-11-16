/* eslint-disable no-new */
<template>
    <div class="swiper-container">
        <div class="swiper-wrapper" >
            <slot></slot>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'

export default {

  props: {
    loop: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    // eslint-disable-next-line no-new
    new Swiper('.swiper-container', {
      loop: this.loop,
      slidesPerView: 4,
      spaceBetween: 30,
      freeMode: false
    })
  }
}
</script>
<style lang="scss" scoped>

.swiper-container{
   width: 100%;
   height:80px;

    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 60px;
    left: 0;
    }
    /* .swiper-wrapper{
       // padding-left:20px
    } */
</style>

<template>
    <div>
        <div class="xijie">
        <h1>创新设计</h1>
        <h3>提升生活品质细节</h3>
        </div>
        <div>
            <goodies-swiper v-if="List.length" title='good'>
            <div
            class="swiper-slide" v-for="item in List" :key="item.id">
            <img :src="item.productImg" alt="" class='imgs'/>
            <div class="ming">{{item.productName}}</div>
            <div class="qian">￥{{item.sellPrice}}</div>
            </div>
            </goodies-swiper>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import goodiesSwiper from '../goodies/goodiesSwiper'
export default {
  components: {
    goodiesSwiper
  },
  data() {
    return {
      List: []
    }
  },
  mounted() {
    axios
      .get(
        '/v2/page?pageId=1&tabId=10006&currentPage=1&pageSize=8&_=1605343646908'
      )
      .then(res => {
        //console.log(res.data.data.modules[0].moduleContent.banners)
        this.List = res.data.data.modules[1].moduleContent.products
      })
  }
}
</script>
<style  lang="scss" scoped>
.xijie{
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

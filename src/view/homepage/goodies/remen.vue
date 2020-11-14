<template>
    <div>
        <div class="qb">全部分类</div>
        <ul>
        <li v-for=" item in list" :key="item.id"  class="tt">

            <img :src="item.bannerImgSrc" alt=""  @click="hunderss"  class="ttb">

        </li>
        </ul>
        <div class="dd">已经到底了</div>
    </div>
</template>
<script>
import axios from 'axios'
import quanbu from '@/view/homepage/goodies/quanbu'
export default {
  data() {
    return {
      list: []
    }
  },
  mounted() {
    axios
      .get(
        'v2/page?pageId=1&tabId=10005&currentPage=1&pageSize=8&_=1605235353609'
      )
      .then(res => {
        //console.log(res.data.data.modules[3].moduleContent.banners)
        this.list = res.data.data.modules[3].moduleContent.banners
      })
  },
  methods: {
    hunderss() {
      this.$router.push('/homepage/goodies/quanbu')
    }
  }
}
</script>
<style  lang="scss" scoped>
.qb{
      font-weight: bold;
      text-align: center;
      height: 30px;
      line-height: 30px;
      color: #000;
      font-size:20px;
      margin: 10px 0;
}
ul{
    width: 100%;
    display:flex;
    flex-direction: row;
    //overflow: hidden;
    li{
        flex: 1;

    img{
        width: 100%;
        height: auto;

    }
    }
}
.dd{
    text-align: center;
    font-size: 8px;
    height: 50px;
    line-height: 50px;
}

</style>

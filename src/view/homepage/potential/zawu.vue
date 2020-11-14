<template>
    <div>
    <div>
     <h1 >收起杂物</h1>
    <h3>让家井然有序的秘密</h3>
    </div>
    <ul class="y1">
    <li @click="change" v-for="item in list " :key="item.id" class="e0">
      <img :src="item.productImg" alt="" class="e1">
      <div class="e2">{{item.productName}}</div>
      <div class="e3">￥{{item.sellPrice}}</div>
    </li>
    </ul>
    <router-link to= "/homepage/goodies/quanbu" tag='div' class="quanbu">查看全部</router-link>
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
        '/v2/page?pageId=1&tabId=10006&currentPage=1&pageSize=8&_=1605343646908'
      )
      .then(res => {
        //console.log(res.data.data.modules[0].moduleContent.banners)
        this.list = res.data.data.modules[2].moduleContent.products
      })
  },
  methods: {
    change() {
      this.$router.push('/homepage/goodies/quanbu')
    }
  }

}
</script>
<style  lang="scss" scoped>
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
  ul{
   display: flex;
    width: 100%;
    flex-wrap: wrap;
    .e0{
      width: 50%;
      //float: left;
      //overflow: hidden;
      flex:1;
      //flex-wrap: wrap;
      img{
        width: 100%;
        height: auto;

      }
      .e2{
        font-size: 8px;
    color: #808080;
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
      }

    }

  }
  .quanbu{
    text-align: center;
      height: 100px;
      line-height: 100px;
      color: #000;
      font-size:8px;

  }

</style>

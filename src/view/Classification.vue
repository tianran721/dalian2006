<template>
    <div>
        <div class="van-search">
            <van-search class="vansearch" v-model="value" shape="square"     placeholder="搜索我的尖叫好物" style="color:black;" >
        </van-search>
        </div>

        <div class="center">
        <div class="banner-a">
             <img src="https://m.wowdsgn.com/static/img/furniture.png" alt="">
         </div>
         <div class="tab">
             <ul >
                 <li>沙发<van-icon name="arrow" /></li>
                 <li>板凳<van-icon name="arrow" /></li>
                 <li>床<van-icon name="arrow" /></li>
                 <li>柜架<van-icon name="arrow" /></li>
                 <li>餐桌<van-icon name="arrow" /></li>
                 <li>茶几和边桌<van-icon name="arrow" /></li>
                 <li>书桌<van-icon name="arrow" /></li>
             </ul>
          </div>
         </div>
    </div>

</template>
<script>
import Vue from 'vue'
import { Search, Icon } from 'vant'

Vue.use(Search).use(Icon)
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
.van-search{
    width: 100%;
    height: 50px;

}
.vansearch{
    margin-left:20px ;
    width:250px;

}
 .van-search__content{
     border-radius: 20px;
 }
 .center{
     width:100%;
 }
 .banner-a{
     text-align: center;
     img{

         width: 90%;
         height: 115px;
     }
 }
 .tab{
     width: 100%;
     text-align: center;
 }
 .tab ul{
     width: 90%;
     margin: auto;
     display: flex;
     flex-direction: column;
       height: 360px;
    li{
        flex: 1;
        height: 49px;
        line-height:49px ;
        font-size: 15px;
        border-bottom: 1px solid black;
        text-align: left;
        .van-icon{
            height: 49px;
            line-height: 49px;
            float: right;
        }
    }
 }

</style>

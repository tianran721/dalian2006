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
                 <router-link to="/classification/shafa" tag="li" active-class="active">沙发<van-icon name="arrow" /></router-link>
                 <router-link to="/classification/shafa" tag="li" active-class="active">板凳<van-icon name="arrow" /></router-link>
                 <router-link to="/classification/shafa" tag="li" active-class="active">床<van-icon name="arrow" /></router-link>
                 <router-link to="/classification/shafa" tag="li" active-class="active">柜架<van-icon name="arrow" /></router-link>
                 <router-link to="/classification/shafa" tag="li" active-class="active">餐桌<van-icon name="arrow" /></router-link>
                 <router-link to="/classification/shafa" tag="li" active-class="active">茶几<van-icon name="arrow" /></router-link>
                 <router-link to="/classification/shafa" tag="li" active-class="active">书桌<van-icon name="arrow" /></router-link>
             </ul>
          </div>
           <div class="banner-a  banner-b">
             <img src="https://m.wowdsgn.com/static/img/household.png" alt="">
         </div>
         <div class="tab-2">
             <ul >
                 <router-link to="/classification/shafa" tag="li" active-class="active">灯具<van-icon name="arrow" /></router-link>
                 <router-link to="/classification/shafa" tag="li" active-class="active">用餐<van-icon name="arrow" /></router-link>
                 <router-link to="/classification/shafa" tag="li" active-class="active">时尚生活<van-icon name="arrow" /></router-link>
                 <router-link to="/classification/shafa" tag="li" active-class="active">收纳<van-icon name="arrow" /></router-link>
                 <router-link to="/classification/shafa" tag="li" active-class="active">烹饪<van-icon name="arrow" /></router-link>
                 <router-link to="/classification/shafa" tag="li" active-class="active">纺织品<van-icon name="arrow" /></router-link>
                 <router-link to="/classification/shafa" tag="li" active-class="active">家饰 <van-icon name="arrow" /></router-link>
                <router-link to="/classification/shafa" tag="li" active-class="active">卫浴 <van-icon name="arrow" /></router-link>
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
 .van-icon{
     color: #ccc;
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

    li{
        margin-bottom: 7px;
        flex: 1;
        height: 49px;
        line-height:49px ;
        font-size: 15px;
        border-bottom: 1px solid #ccc;
        text-align: left;
        .van-icon{
            height: 49px;
            line-height: 49px;
            float: right;
        }
    }
 }
.banner-b{
    margin-top: 5px;
}
.tab-2{
     width: 100%;
     text-align: center;
 }
 .tab-2 ul{
     width: 90%;
     margin: auto;
     display: flex;
     flex-direction: column;

    li{
        margin-bottom: 7px;
        flex: 1;
        height: 49px;
        line-height:49px ;
        font-size: 15px;
        border-bottom: 1px solid #ccc;
        text-align: left;
        .van-icon{
            height: 49px;
            line-height: 49px;
            float: right;
        }
    }
 }
</style>

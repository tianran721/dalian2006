<template>
    <div>
         <header>
            <div class="center">
                 <van-icon class="iconleft" name="wap-home" @click="handleClick"></van-icon>
                <div class="headercenter">商品详情</div>
                 <van-icon class="iconright" name="apps-o" @click="handleClicks"></van-icon>
            </div>
           <swiper>
                <div class="swiper-slide" v-for="(item,index) in dataList" :key="index">
                  <img :src="item" alt="">
                </div>
           </swiper>
        </header>
        <div class="jiage">
          <div class="list-1">编者沙发</div>
          <div class="list-2">￥6288</div>
        </div>
        <div class="imglist" v-for="(imgitem,index) in imgList" :key="index">
          <img :src="imgitem.content" alt="">
        </div>
     </div>
</template>
<script>
import swiper from '../../../components/Swiper'
import axios from 'axios'
export default {
  components: {
    swiper: swiper
  },
  data() {
    return {
      dataList: ['  https://img.wowdsgn.com/product/images/76c11fac-f1e6-4581-85aa-8e42e7d7e970_2dimension_800x800.jpg?imageView2/1/w/375/h/300  ', 'https://img.wowdsgn.com/product/addtionalImage//fe2116ad-1b6a-4b3b-a1fd-bab3c58abc53_2dimension_750x600.jpg?imageView2/1/w/375/h/300 ', ' https://img.wowdsgn.com/product/addtionalImage//8d4a2137-491e-4c2c-bd2a-79f3123fec7a_2dimension_750x600.jpg?imageView2/1/w/375/h/300  ', '  https://img.wowdsgn.com/product/addtionalImage//634a4800-4c1f-4496-90c8-6c6428df8b2e_2dimension_750x600.jpg?imageView2/1/w/375/h/300  ', '  https://img.wowdsgn.com/product/addtionalImage//209dc38a-530e-4303-93df-7652c84e1344_2dimension_750x600.jpg?imageView2/1/w/375/h/300  '

      ],
      imgList: []
    }
  },

  mounted() {
    //console.log(this.$route)
    //console.log(this.$route.params.myid)
    axios.get('/itemdetail/spuInfos/11910?_=1605427571391')
      .then((res) => {
        //  console.log(res.data)
        this.imgList = res.data.data.itemDetailIntroVoList
      })
  },
  methods: {
    handleClick() {
      this.$router.push('/homepage')
    },
    handleClicks() {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scoped>
     *{padding: 0;
  margin: 0;
}
header{
    width: 100%;
    overflow: hidden;
   .center{
       width: 90%;
       background: white;
       margin: auto;
       display: flex;
       height: 50px;
       line-height: 50px;
       .iconleft{
       width: 50px;
       font-size: 30px;
       text-align: center;
       line-height: 50px;
       }
       .headercenter{
        flex: 1;
        text-align: center;
        font-weight: bolder;

       }
       .iconright{
         width: 50px;
         font-size: 30px;
         text-align: center;
         line-height: 50px;
       }

   }

}
.jiage{
  width: 100%;
  height: 90px;
  text-indent: 2em;
    .list-1{
      height: 45px;
      line-height: 45px;

    }
     .list-2{
      height: 45px;
      font-size: 24px;
      font-weight: bolder;
    }

}
.imglist{
  width: 100%;
  img{
    width: 100%;
  }
}
</style>

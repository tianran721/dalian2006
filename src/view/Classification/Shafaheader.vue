<template>
     <header>
            <div class="center">
                 <van-icon class="iconleft" name="wap-home" @click="handleClick"></van-icon>
                <div class="headercenter">沙发</div>
                 <van-icon class="iconright" name="apps-o" @click="handleClicks"></van-icon>
            </div>
            <div class="banner">
             <img src="https://img.wowdsgn.com/category/background/10.jpg?imageslim" alt="">
            </div>
        </header>
</template>
<script>
export default {

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
.banner{
    width:100%;
    height: 110px;
}
.banner img{
   width: 100%;
}
</style>

<template>
   <footer>
       <ul>
           <router-link to="/homepage" tag="li" active-class="kerwinactive">
            <i class="iconfont icon-form"></i>
            <span>首页</span>
            </router-link>
            <router-link to="/classification" tag="li" active-class="kerwinactive">
            <i class="iconfont icon-category"></i>
            <span>分类</span>
            </router-link>
            <router-link to="/shoppingcart" tag="li" active-class="kerwinactive">
            <i class="iconfont icon-cart"></i>
            <span>购物车</span>
            </router-link>
            <router-link to="/message" tag="li" active-class="kerwinactive">
            <i class="iconfont icon-edit"></i>
            <span>消息</span>
            </router-link>
            <router-link to="/myself" tag="li" active-class="kerwinactive">
            <i class="iconfont icon-account"></i>
            <span>我</span>
            </router-link>
       </ul>
   </footer>
</template>
<script>
import '@/assets/iconfont/iconfont.css'
export default {

}
</script>
<style lang="scss" scoped>
.kerwinactive{
    color: red;
}
footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 25px;
    text-align: center;
}
ul{

    display: flex;
    li{
        flex: 1;
        display: flex;
        flex-direction: column;
        i{
            font-size: 15px;
        }
        span{
           font-size: 15px;
        }
    }
}
</style>

<template>
     <header>
            <div class="header">
                 <van-icon class="iconleft" name="wap-home" @click="handleClick"></van-icon>
                <div class="headercenter">登录</div>
                <div class="iconright">注册</div>
            </div>
            <div class="login">
                <van-tabs v-model="active">
                    <van-tab title="密码登录">
                        <div class="loginipt">
                            <input class="input-a" type="text" placeholder="请输入手机号" ><br>

                            <div class="input-all">
                                 <input  class="input-b" type="password"  placeholder="请输入密码" >
                                 <input  class="input-c" type="button"  value="忘记密码?"  placeholder="忘记密码?">
                            </div>

                        </div>

                    </van-tab>
                    <van-tab title="短信登录">
                         <div class="loginipt">
                            <input class="input-a" type="text" placeholder="请输入手机号" ><br>

                            <div class="input-all">
                                 <input  class="input-b" type="password"  placeholder="请输入验证码" >
                                 <input  class="input-c" type="button"  value="获取验证码"  placeholder="获取验证码">
                            </div>

                        </div>
                    </van-tab>
                </van-tabs>
                <div class="queren">
                    <div>确认</div>
                </div>
               <ul >
                  <li class="fuxuankuang">
                       <van-checkbox v-model="checked" checked-color="#000">一个月内记住登录
                       </van-checkbox>
                       <p>快速注册</p>
                 </li>

               </ul>
            </div>
        </header>
</template>
<script>
import Vue from 'vue'
import { Tab, Tabs, Checkbox, CheckboxGroup } from 'vant'
Vue.use(Tab).use(Tabs).use(Checkbox).use(CheckboxGroup)

export default {
  data() {
    return {
      active: 0,
      checked: true
    }
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
    margin-bottom: 10px;
    background: #fff;
   .header{
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
        font-size: 20px;
        font-weight: bolder;

       }
       .iconright{
         width: 50px;
         font-size: 14px;
         text-align: center;
         line-height: 50px;
       }

   }

}
.login{
    width: 100%;
    height: 500px;
    margin-top: 10px;

    .van-tabs{
        width: 90%;
     margin: 0 auto;

    }
    .queren{
        width: 100%;
        div{
            width: 90%;
            margin: 0 auto;
            height: 50px;
            line-height: 50px;
            text-align: center;
            background: #ffd444;
        }
    }
    .fuxuankuang{
        width: 90%;
        margin: 0 auto;
        display: flex;
       .van-checkbox{
            height: 50px;
            line-height: 50px;
            width: 100%;
            flex: 1;
       }
          p{
                width: 70px;
                height: 50px;
               line-height: 50px;
            }

    }

}
.loginipt{
    width: 100%;
    height: 110px;
    input{
        border: none;
        height: 50px;
    }
    .input-a{
        width: 100%;

        border-bottom: 1px solid #ccc;
    }
    .input-all{
        width: 100%;
        display: flex;
        .input-b{
            flex: 1;
        }
        .input-c{
            width: 100px;
            background-color:#fff;
        }

    }
}

</style>

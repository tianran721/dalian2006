<template>
  <div>
    <tabbar></tabbar>
     <router-view></router-view>

  </div>
</template>
<script>
import tabbar from '../components/Tabbar'
// import homepage from './view/Homepage'
export default {
  components: {
    tabbar
    // homepage
  }
}
</script>
<style lang="scss" >
  *{
    margin: 0;
    padding: 0;

  }
  body,html{
    height: 100%;
  }
  ul li{list-style: none;}
</style>

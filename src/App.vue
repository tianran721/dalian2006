<template>
  <div>
    <tabbar></tabbar>
    <router-view></router-view>
  </div>
</template>
<script>
import tabbar from '../components/Tabbar'
import axios from 'axios'

// import homepage from './view/Homepage'
export default {
  components: {
    tabbar
    // homepage
  },
  mounted() {
    axios
      .get('/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1605168939004')
      .then(res => {
        console.log(res.data)
      })
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body,
html {
  height: 100%;
}
ul li {
  list-style: none;
}
</style>

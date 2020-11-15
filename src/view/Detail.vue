<template>
  <div>
    detail
  </div>
</template>

<script>
export default {
  mounted() {
    //$route是当前匹配的路由对象
    console.log(this.$route.params.id)
    //https://m.wowdsgn.com/recommend/item?skuId=21514&_=1605201035855
  }
}
</script>

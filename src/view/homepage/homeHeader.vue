<template>
  <div>
    <ul>
      <router-link tag="li" to="/homepage/recommended" active-class="activeItem"
        >推荐</router-link
      >
      <router-link tag="li" to="/homepage/goodies" active-class="activeItem"
        >品质空间</router-link
      >
      <router-link tag="li" to="/homepage/potential" active-class="activeItem"
        >居家好物</router-link
      >
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {}
</script>
<style lang="scss" scoped>
.activeItem {
  color: red;
}
ul {
  display: flex;
  li {
    flex: 1;
  }
}
</style>

<script setup lang="ts">

</script>

<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="https://merlinalex-pic.oss-cn-hangzhou.aliyuncs.com/img/Frame%201logo.svg" alt="" class="img">
      <span class="title">沫岸后台</span>
    </div>
  </div>
</template>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
  }
}
</style>

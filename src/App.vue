<script setup lang="ts">

</script>

<template>
  <div>
    <h2>{{ $store.state.name }}</h2>

    <router-link to="/login">
      Login
    </router-link>
    <router-link to="/main">
      Main
    </router-link>
    <router-view />

    <el-button>hhh</el-button>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

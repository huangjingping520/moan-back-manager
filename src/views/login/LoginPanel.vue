<script setup lang="ts">

</script>

<template>
  <div class="login-panel">
    <h1 class="title">
      沫岸后台
    </h1>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <LoginAccount />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped lang="less">
.login-panel {
  width: 30%;

  .title {
    text-align: center;
  }
}
</style>

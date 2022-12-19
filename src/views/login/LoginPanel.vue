<script setup lang="ts">
import LoginAccount from './LoginAccount.vue'
import LoginPhone from './LoginPhone.vue'

const isKeepPassword = ref(false)
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const phoneRef = ref<InstanceType<typeof LoginPhone>>()
const currentTab = ref<string>('account')

const handleLoginClick = () => {
  if (currentTab.value === 'account')
    accountRef.value?.loginAction(isKeepPassword.value)
  else
    console.log('phone login')
}
</script>

<template>
  <div class="login-panel">
    <h1 class="title">
      沫岸后台
    </h1>
    <el-tabs v-model="currentTab" type="border-card" class="demo-tabs" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="password-control">
      <el-checkbox v-model="isKeepPassword">
        记住密码
      </el-checkbox>
      <el-link type="primary">
        忘记密码
      </el-link>
    </div>

    <el-button class="login-btn" type="primary" @click="handleLoginClick">
      登录
    </el-button>
  </div>
</template>

<style scoped lang="less">
.login-panel {
  width: 300px;

  .title {
    text-align: center;
  }
  .password-control {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>

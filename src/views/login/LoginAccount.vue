<script setup lang="ts">
import { rules } from '../../composables/account-rules'

const account = reactive({
  name: '',
  password: ''
})
</script>

<template>
  <div class="login-account">
    <el-form :rules="rules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" placeholder="请输入密码" />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>

</style>

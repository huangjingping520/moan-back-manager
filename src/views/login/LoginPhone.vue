<script setup lang="ts">
import { phoneRules } from '../../composables/account-rules'

const phone = reactive({
  number: '',
  code: ''
})
</script>

<template>
  <div class="login-phone">
    <el-form :rules="phoneRules" :model="phone">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number" placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="code">
          <el-input v-model="phone.code" />
          <el-button type="primary" class="get-code">
            获取验证码
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="less">
.code {
  display: flex;
  .get-code {
    margin-left: 10px;
  }
}
</style>

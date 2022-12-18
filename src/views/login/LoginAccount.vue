<script setup lang="ts">
import { ElForm } from 'element-plus'
import { accountRules } from '../../composables/account-rules'

const account = reactive({
  name: '',
  password: ''
})

const formRef = ref<InstanceType<typeof ElForm>>()

const loginAction = () => {
  formRef.value?.validate(valid => {
    if (valid) {
      console.log('登录')
    }
    else {
      console.log('error submit!!')
      return false
    }
  })
}

defineExpose({ loginAction })
</script>

<template>
  <div class="login-account">
    <el-form ref="formRef" :rules="accountRules" :model="account">
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

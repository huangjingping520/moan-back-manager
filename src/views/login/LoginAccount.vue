<script setup lang="ts">
import { ElForm } from 'element-plus'
import { useStore } from 'vuex'
import { accountRules } from '../../composables/account-rules'
import localCache from '../../composables/cache'

const store = useStore()

const account = reactive({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})

const formRef = ref<InstanceType<typeof ElForm>>()

const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate(valid => {
    if (valid) {
      if (isKeepPassword) {
        localCache.setCache('name', account.name)
        localCache.setCache('password', account.password)
      }
      else {
        localCache.deleteCache('name')
        localCache.deleteCache('password')
      }

      store.dispatch('login/accountLoginAction', { ...account })
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
        <el-input v-model="account.password" placeholder="请输入密码" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>

</style>

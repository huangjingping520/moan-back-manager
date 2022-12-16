export const rules = {
  name: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{6,16}$/,
      message: '账号必须是 6 ~ 16 个字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{6,}$/,
      message: '密码必须是 6 位以上字母或数字',
      trigger: 'blur'
    }
  ]
}

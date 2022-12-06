module.exports = {
  extends: '@antfu',
  rules: {
    'comma-dangle': [
      'warn',
      'never'
    ],
    '@typescript-eslint/comma-dangle': 'off',
    'arrow-parens': [
      'warn',
      'as-needed'
    ]
  }
}

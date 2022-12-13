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
    ],
    'no-console': 'off',
    'import/no-mutable-exports': 'off'
  }
}

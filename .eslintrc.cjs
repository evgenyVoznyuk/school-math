/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'semi-style': ['error', 'last'],
    "space-before-function-paren": ["error", "always"],
  },
}

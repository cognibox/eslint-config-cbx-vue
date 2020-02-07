module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: [
    '@cognibox/eslint-config-cbx',
    'plugin:vue/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@cognibox/vue-require-component-key',
  ],
  rules: {
    'vue/valid-v-for': 'off',
    '@cognibox/vue-require-component-key/vue-require-component-key': ['error'],
  },
};

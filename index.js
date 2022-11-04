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
    "vue/require-explicit-emits": ["warn", {
      "allowProps": false
    }],
    "vue/require-name-property": "warn",
    "vue/match-component-file-name": "warn",
    "vue/v-slot-style": ["warn", {
      "atComponent": "shorthand",
      "default": "shorthand",
      "named": "shorthand"
    }]
  },
};

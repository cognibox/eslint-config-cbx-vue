module.exports = {
  extends: [
    'cbx',
    'plugin:vue/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
  },
  plugins: [	
    'vue',	
  ],
};

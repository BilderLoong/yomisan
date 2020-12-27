module.exports = {
  // env specifies the defined global variables
  env: {
    es2021: true,
    webextensions: true,
    node: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  //parser specifies the syntax
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    babelOptions: {
      configFile: './babel.config.js',
    },
  },
  plugins: ['react'],
  rules: {},
};

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  globals: {
    process: true,
    __filename: true,
    __dirname: true,
    setImmediate: true
  },
  extends: ["eslint:recommended", "prettier"],
  rules: {
    "linebreak-style": ["error", "unix"],
    semi: ["error", "always"]
  },
  parserOptions: {
    ecmaVersion: 2017
  }
};

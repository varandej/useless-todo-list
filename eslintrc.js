module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essentials"],
  rules: {
    "no-console": "off",
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: [
    "@nuxtjs",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["tailwindcss", "vue"],
  // add your custom rules here
  rules: {
    "vue/multi-word-component-names": "off",
    "tailwindcss/no-custom-classname": "off",
  },
};

const globals = require("globals");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        ...globals.node,
        ...globals.commonjs,
        ...globals.es2021,
        ...globals.jest,
      }
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"]
    },
    ignores: ["coverage/"]
  }
];

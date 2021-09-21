module.exports = {
    env: {
      browser: true,
      es2020: true,
    },
    extends: ["plugin:react/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 11,
      sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "react-hooks"],
    rules: {
      "no-console": ["error", { allow: ["info", "error"] }], 
      "@typescript-eslint/no-explicit-any": "error",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/display-name": "off",
    },
    settings: {
      react: {
        version: "latest",
      },
    },
  };
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  ignorePatterns: ['dist', 'node_modules'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: '18.2.0',
    },
  },
};

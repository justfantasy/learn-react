module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  settings: {
    // 修复import/unresolved提示
    'import/resolver': {
      node: {
        extensions: ['.js', 'jsx', '.ts', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    // 修复不允许tsx文件后缀的问题
    'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx', '.js', '.jsx'] }],
    // 修复引入import tsx文件时报错的问题
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};

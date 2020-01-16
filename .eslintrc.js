module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:jest/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    'eslint-comments/no-unused-disable': 'warn',
    'eslint-comments/disable-enable-pair': [
      'error',
      {
        allowWholeFile: true
      }
    ],
    'prettier/prettier': 'warn'
  },
  overrides: [
    {
      files: ['__tests__'],
      env: {
        'jest/globals': true
      },
      rules: {
        'jest/consistent-test-it': [
          'error',
          {
            fn: 'it'
          }
        ]
      }
    }
  ]
};

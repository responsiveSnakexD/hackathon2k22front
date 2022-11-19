const path = require('path');

module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
    '@react-native-community',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint', 'import'],
  ignorePatterns: [
    '**/node_modules/',
    '**/coverage/',
    '**/dist/',
    '**/scripts/',
    '**/*.setup.js',
    '**/*.config.js',
  ],
  rules: {
    'global-require': 'off',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-exports': ['error', {restrictedNamedExports: ['then']}],
    'jsx-a11y/anchor-is-valid': 'off',
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
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
    'import/no-extraneous-dependencies': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', {ignoreRestSiblings: true}],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    // @typescript-eslint / eslint conflicts
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {functions: true, classes: true, variables: false},
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    // react
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': ['warn', {extensions: ['.tsx']}],
    'react/function-component-definition': [
      'error',
      {namedComponents: 'arrow-function', unnamedComponents: 'arrow-function'},
    ],
    'react/no-unstable-nested-components': 'off',
    'react/style-prop-object': [
      'off',
      {
        allow: ['string'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
    },
  ],
  settings: {
    'import/core-modules': ['@env'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['./src/*'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: [path.resolve(__dirname, './tsconfig.json')],
      },
    },
  },
};

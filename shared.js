module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'jest', 'unicorn'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:eslint-comments/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {functions: false, classes: false, variables: true, typedefs: true},
    ],
    '@typescript-eslint/require-await': 'off',
    'eslint-comments/no-unused-disable': 'error',
    'no-underscore-dangle': 'off',
    // Common abbreviations are known and readable
    'unicorn/prevent-abbreviations': 'off',
  },
};

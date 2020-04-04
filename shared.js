module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['jest', 'unicorn'],
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
    '@typescript-eslint/no-use-before-define': [
      'error',
      {functions: false, classes: true, variables: true, typedefs: true},
    ],
    'eslint-comments/no-unused-disable': 'error',
    // Common abbreviations are known and readable
    'unicorn/prevent-abbreviations': 'off',
  },
};

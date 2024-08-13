import eslint from '@eslint/js';
import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  unicorn.configs['flat/recommended'],
  ...tseslint.configs.recommendedTypeChecked,
  {
    rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {functions: false, classes: false, variables: true, typedefs: true},
    ],
    '@typescript-eslint/require-await': 'off',
    'no-underscore-dangle': 'off',
    // Nulls and undefined have slight distinct cases
    'unicorn/no-null': 'off',
    // Unanamed exports are fine
    'unicorn/no-anonymous-default-export': 'off',
    // Chainable awaits are plenty readable
    'unicorn/no-await-expression-member': 'off',
    // Common abbreviations are known and readable
    'unicorn/prevent-abbreviations': 'off',      
    }
  },
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
  },
);

// module.exports = {
//   parserOptions: {
//     project: './tsconfig.json',
//   },
//   plugins: ['@typescript-eslint', 'jest', 'unicorn'],
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/eslint-recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:@typescript-eslint/recommended-requiring-type-checking',
//     'plugin:eslint-comments/recommended',
//     'plugin:import/errors',
//     'plugin:import/warnings',
//     'plugin:import/typescript',
//     'plugin:jest/recommended',
//     'plugin:unicorn/recommended',
//     'prettier',
//   ],
//   env: {
//     node: true,
//     jest: true,
//   },
//   rules: {
//     '@typescript-eslint/explicit-function-return-type': [
//       'warn',
//       {
//         allowExpressions: true,
//       },
//     ],
//     '@typescript-eslint/no-throw-literal': 'off',
//     '@typescript-eslint/no-unused-vars': 'off',
//     '@typescript-eslint/no-use-before-define': [
//       'error',
//       {functions: false, classes: false, variables: true, typedefs: true},
//     ],
//     '@typescript-eslint/require-await': 'off',
//     'eslint-comments/no-unused-disable': 'error',
//     'no-underscore-dangle': 'off',
//     // Common abbreviations are known and readable
//     'unicorn/prevent-abbreviations': 'off',
//   },
// };

import jest from 'eslint-plugin-jest';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    files: ['**/*.{test,spec}.{js,cjs,mjs,jsx,ts,tsx}', '**/__tests__/*.{js,cjs,mjs,jsx,ts,tsx}'],
    ...jest.configs['flat/recommended'],
  }
);

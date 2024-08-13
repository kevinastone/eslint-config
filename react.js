import react from 'eslint-plugin-react';
// import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  react.configs.flat.recommended,
  // https://github.com/facebook/react/issues/28313
  // reactHooks.configs.flat.recommended,
  {
    rules: {
      'react/display-name': 'off',
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      }
    }
  }
);

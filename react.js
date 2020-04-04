module.exports = {
  plugins: ['react', 'react-hooks'],
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/display-name': 'off',
  },
};

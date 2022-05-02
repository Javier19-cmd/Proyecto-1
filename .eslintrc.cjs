module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
    "jsx-a11y",
    "import"
  ],
  rules: {
    "semi": 0,
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
  },
};

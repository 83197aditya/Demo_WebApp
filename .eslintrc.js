export const env = {
  browser: true, // If you're targeting a browser
  node: true, // If you're targeting Node.jss
  es2021: true, // Use ECMAScript 2021 features
};
export const parserOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module', // Use the latest ECMAScript version
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ]
};


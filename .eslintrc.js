module.exports = {
  extends: [
    'ryansobol/browser',
    'ryansobol/es6',
    'ryansobol/materialize',
    'ryansobol/jquery'
  ],
  rules: {
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    'max-len': ["error", 8000000],
    'func-style': ["error", "declaration"],
  }
};

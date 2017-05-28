module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/style'
  ].map(require.resolve),
  rules: {}
};
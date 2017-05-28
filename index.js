module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/style',
    './rules/react',
    './rules/import'
  ].map(require.resolve),
  rules: {}
};

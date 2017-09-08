module.exports = {
    extends: [
        'eslint-config-airbnb',
        './rules/style',
        './rules/react',
        './rules/react-a11y',
        './rules/import'
    ].map(require.resolve),
    rules: {}
};

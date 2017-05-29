module.exports = {
    rules: {
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    'test/**',
                    '**/webpack.config.js',
                    'webpack/**',
                    '**/*.dev.js'
                ],
                optionalDependencies: false
            }
        ]
    }
}

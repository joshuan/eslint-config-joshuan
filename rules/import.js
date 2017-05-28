module.exports = {
    rules: {
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": [
                    "test/**",
                    "**/webpack.config.js",
                    "**/webpack.config.*.js",
                    "**/*.dev.js"
                ],
                "optionalDependencies": false
            }
        ]
    }
}

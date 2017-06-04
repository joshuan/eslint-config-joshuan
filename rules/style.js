module.exports = {
    rules: {
        indent: [
        	'error',
        	4
    	],

        'object-curly-spacing': [
        	'error',
        	'never'
    	],

        'comma-dangle': [
        	'error',
        	'never'
    	],

        'max-len': [
        	'error',
        	80
    	],

        'arrow-parens': [
        	'error',
			"as-needed",
			{"requireForBlockBody": false}
		]
    }
}

module.exports = {
    rules: {
        'react/jsx-filename-extension': [
        	'off', 
        	{ 
        		extensions: ['.js', '.jsx'] 
        	}
    	],
        
        'react/prefer-stateless-function': [
        	'off'
        ],

        'react/jsx-indent': [
        	'error', 
        	4
    	],
        
        'react/jsx-indent-props': [
        	'error', 
        	4
        ],

        'react/jsx-closing-bracket-location': [
        	'error', 
        	{
    			selfClosing: 'tag-aligned', 
    			nonEmpty: 'props-aligned'
    		}
		]
    }
};

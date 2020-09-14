module.exports = {
	extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jest: true,
		node: true,
	},
	parser: 'babel-eslint',
	rules: {
		'jsx-a11y/href-no-hash': ['off'],
		'jsx-a11y/label-has-associated-control': 0,
		'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
		'react/no-unescaped-entities': 0,
		'react/prop-types': 0,
		'react/jsx-props-no-spreading': 0,
		'react/state-in-constructor': 0,
		'max-len': [
			'warn',
			{
				code: 120,
				tabWidth: 2,
				comments: 80,
				ignoreComments: true,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
			},
		],
	},
	globals: {
		window: true,
		document: true,
	},
};

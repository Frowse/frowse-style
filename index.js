module.exports = {

	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		mongo: true,
		amd: true,
		browser: true,
		node: true,
		es6: true,
		jquery: true
	},
	rules: {
		'comma-dangle': [2, 'never'],
		'no-cond-assign': [2, 'always'],
		'no-console': 0,
		'no-constant-condition': 2,
		'no-control-regex': 1,
		'no-debugger': 2,
		'no-dupe-args': 2,
		'no-dupe-keys': 2,
		'no-duplicate-case': 2,
		'no-empty-character-class': 2,
		'no-empty': 2,
		'no-ex-assign': 2,
		'no-extra-boolean-cast': 2,
		'no-extra-parens': [2, 'all'],
		'no-extra-semi': 2,
		'no-func-assign': 2,
		'no-inner-declarations': [2, 'both'],
		'no-invalid-regexp': 2,
		'no-irregular-whitespace': 2,
		'no-negated-in-lhs': 2,
		'no-obj-calls': 2,
		'no-regex-spaces': 2,
		'no-sparse-arrays': 1,
		'no-unreachable': 2,
		'use-isnan': 2,
		'valid-jsdoc': 0,
		'valid-typeof': 2,
		'no-unexpected-multiline': 2,
		'accessor-pairs': 0,
		'block-scoped-var': 2,
		complexity: [1, 6],
		'consistent-return': 0,
		curly: [2, 'all'],
		'default-case': 2,
		'dot-notation': 2,
		'dot-location': [2, 'property'],
		eqeqeq: 2,
		'guard-for-in': 2,
		'no-alert': 1,
		'no-caller': 2,
		'no-div-regex': 1,
		'no-else-return': 1,
		'no-eq-null': 2,
		'no-eval': 1,
		'no-extend-native': 1,
		'no-extra-bind': 2,
		'no-fallthrough': 2,
		'no-floating-decimal': 1,
		'no-implicit-coercion': [2, {
			boolean: true,
			number: true,
			string: true
		}],
		'no-implied-eval': 2,
		'no-invalid-this': 2,
		'no-iterator': 2,
		'no-labels': 2,
		'no-lone-blocks': 2,
		'no-loop-func': 2,
		'no-multi-spaces': 2,
		'no-multi-str': 1,
		'no-native-reassign': 2,
		'no-new-func': 2,
		'no-new-wrappers': 2,
		'no-new': 2,
		'no-octal-escape': 2,
		'no-octal': 2,
		'no-param-reassign': [2, {
			props: false
		}],
		'no-process-env': 1,
		'no-proto': 2,
		'no-redeclare': [2, {
			builtinGlobals: true
		}],
		'no-return-assign': [2, 'always'],
		'no-script-url': 2,
		'no-self-compare': 2,
		'no-sequences': 2,
		'no-throw-literal': 1,
		'no-unused-expressions': 2,
		'no-useless-call': 2,
		'no-void': 2,
		'no-warning-comments': 0,
		'no-with': 2,
		radix: 2,
		'vars-on-top': 2,
		'wrap-iife': [2, 'inside'],
		yoda: [2, 'never', {}],
		strict: [2, 'global'],
		'init-declarations': 0,
		'no-catch-shadow': 2,
		'no-delete-var': 2,
		'no-label-var': 2,
		'no-shadow-restricted-names': 2,
		'no-shadow': [1, {allow: ['done', 'cb', 'err']}],
		'no-undef-init': 2,
		'no-undef': 2,
		'no-undefined': 2,
		'no-unused-vars': 2,
		'no-use-before-define': 2,
		'callback-return': [0, ['done', 'cb', 'callback']],
		'handle-callback-err': 2,
		'no-mixed-requires': [1, false],
		'no-new-require': 2,
		'no-path-concat': 1,
		'no-process-exit': 0,
		'no-restricted-modules': 0,
		'no-sync': 1,
		'array-bracket-spacing': [2, 'never', {}],
		'brace-style': [2, '1tbs', {
			allowSingleLine: true
		}],
		camelcase: [2, {
			properties: 'always'
		}],
		'comma-spacing': [2, {
			after: true
		}],
		'comma-style': 2,
		'computed-property-spacing': [2, 'never'],
		'consistent-this': [2, 'self'],
		'eol-last': 2,
		'func-names': 0,
		'func-style': [2, 'expression'],
		'id-length': 0,
		indent: [2, 'tab'],
		'key-spacing': 2,
		'lines-around-comment': [2, {
			beforeBlockComment: true,
			beforeLineComment: true,
			allowBlockStart: true,
			allowBlockEnd: true
		}],
		'linebreak-style': [2, 'unix'],
		'max-nested-callbacks': [1, 6],
		'new-cap': 2,
		'new-parens': 2,
		'newline-after-var': [2, 'always'],
		'no-array-constructor': 2,
		'no-continue': 2,
		'no-inline-comments': 2,
		'no-lonely-if': 2,
		'no-mixed-spaces-and-tabs': 2,
		'no-multiple-empty-lines': [2, {
			max: 1
		}],
		'no-nested-ternary': 2,
		'no-new-object': 2,
		'no-spaced-func': 2,
		'no-ternary': 0,
		'no-trailing-spaces': 2,
		'no-underscore-dangle': 0,
		'no-unneeded-ternary': 2,
		'object-curly-spacing': [2, 'never'],
		'one-var': [2, 'never'],
		'operator-assignment': [2, 'always'],
		'operator-linebreak': [2, 'none'],
		'padded-blocks': [2, 'never'],
		'quote-props': [2, 'as-needed'],
		quotes: [2, 'single', 'avoid-escape'],
		'id-match': 0,
		'semi-spacing': [2, {
			after: true
		}],
		semi: [2, 'always'],
		'sort-vars': 0,
		'space-after-keywords': 0,
		'space-before-blocks': [2, 'always'],
		'space-before-function-paren': [2, 'never'],
		'space-in-parens': 2,
		'space-infix-ops': [2, {
			int32Hint: true
		}],
		'space-return-throw-case': 0,
		'space-unary-ops': [2, {
			words: true,
			nonwords: true
		}],
		'spaced-comment': [2, 'always', {}],
		'wrap-regex': 2,
		'arrow-parens': [2, 'as-needed'],
		'arrow-spacing': [2, {
			after: true
		}],
		'constructor-super': 2,
		'generator-star-spacing': 2,
		'no-class-assign': 2,
		'no-const-assign': 2,
		'no-this-before-super': 2,
		'no-var': 2,
		'object-shorthand': [2, 'always'],
		'prefer-const': 1,
		'prefer-spread': 1,
		'prefer-reflect': 1,
		'require-yield': 2,
		'max-depth': [1, 5],
		'max-len': [1, 80, 4, {
			ignoreComments: true,
			ignoreUrls: true
		}],
		'max-params': [1, 4],
		'max-statements': [1, 25],
		'no-bitwise': 2,
		'no-plusplus': 2,
		'keyword-spacing': [2, {before: false, after: true}]
	}

};

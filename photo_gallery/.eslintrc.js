module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2020: true,
		node: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'prettier',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		parser: 'babel-eslint',
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
	},
	plugins: ['react'],
	rules: {
		'prettier/prettier': [
			'error',
			// 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
			// https://prettier.io/docs/en/options.html
			{
				arrowParens: 'always', // "<always|avoid>"
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 10,
				trailingComma: 'all',
				printWidth: 100,
				bracketSpacing: true,
				// arrowParens: "avoid"
				// tabWidth: 4,
				// useTabs: true,
				// semi: true,
				// singleQuote: true,
				// jsxSingleQuote: true, // JSX에서 singleQuote or doubleQuote
				// endOfLine: "lf",
				// trailingComma: "all", // comma 항상 붙이기
				// bracketSpacing: false, // 객체리터럴에서 { } 사이에 공백을 넣을 것인지
				// jsxBracketSameLine: false, // 여러줄의 JSX 요소가 있을때, > 를 마지막 줄의 끝부분에서 닫을 것인지
				// arrowParens: "always", // (x) => x : always | x => x : avoid
			},
		],
		// 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// "@typescript-eslint/no-var-requires": "off",
		'import/no-extraneous-dependencies': [
			'warn',
			{
				devDependencies: true,
				optionalDependencies: true,
				peerDependencies: true,
			},
		],
		// "import/extensions": [".js", ".jsx"],
		'no-console': 'off',
		'no-debugger': 'off',
		indent: 'off',
		'linebreak-style': 0,
		'import/no-unresolved': 'off',
		// "arrow-body-style": ["error", "never"],
		// https://eslint.org/docs/rules/{rules}
		'no-nested-ternary': 'off',
		// "accessor-pairs": "error",  // 객체 getter, setter를 쌍으로 적용.
		// "arrow-spacing": ["error", { "before": true, "after": true }],  // arrow함수 에서 화살표 앞뒤에 공간 설정.
		// "block-spacing": ["error", "always"],   // 블록 간격을 설정 always 하나 이상의 공백이 필요, never 공백을 허용하지 않는다.
		// "brace-style": ["error", "1tbs", { "allowSingleLine": true }], // 중괄호 스타일 설정.
		camelcase: ['error', { properties: 'never', ignoreDestructuring: true }], // 변수 이름을 지정할 때 스타일 가이드.
		'import/no-cycle': 'off',
		// "comma-dangle": ["error", { // 마지막 쉼표를 허용 여부.
		//     "arrays": "never",
		//     "objects": "never",
		//     "imports": "never",
		//     "exports": "never",
		//     "functions": "never"
		// }],
		// "comma-spacing": ["error", { "before": false, "after": true }], // 쉼표 주위에 간격 적용 설정.
		// "comma-style": ["error", "last"], // 쉼표 스타일 설정.
		// "constructor-super": "error", // super() constructor-super 호출 확인.
		// "curly": ["error", "multi-line"], // 중괄호를 생략하는 블록을 발견하면 경고.
		// "dot-location": ["error", "property"], // 점을 앞뒤로 개행 여부를 적용.
		// "eol-last": "error",  // 파일 끝에 개행 요구 여부.
		// "eqeqeq": ["error", "always", { "null": "ignore" }], // === 및 !== 필요.
		// "func-call-spacing": ["error", "never"],  // 함수 식별자와 함수 호출 사이의 간격 여부.
		// "generator-star-spacing": ["error", { "before": true, "after": true }], //
		// "handle-callback-err": ["error", "^(err|error)$" ], // 콜백 오류 처리 적용 null확인.
		// "indent": ["error", 2, { // 들여쓰기.
		//     "SwitchCase": 1,
		//     "VariableDeclarator": 1,
		//     "outerIIFEBody": 1,
		//     "MemberExpression": 1,
		//     "FunctionDeclaration": { "parameters": 1, "body": 1 },
		//     "FunctionExpression": { "parameters": 1, "body": 1 },
		//     "CallExpression": { "arguments": 1 },
		//     "ArrayExpression": 1,
		//     "ObjectExpression": 1,
		//     "ImportDeclaration": 1,
		//     "flatTernaryExpressions": false,
		//     "ignoreComments": false
		// }],
		// "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],  // 객체 리터럴에서 키 와 값 사이의 간격 적용.
		// "keyword-spacing": ["error", { "before": true, "after": true }],  // 키워드 전후에 일관된 간격을 두기.
		// "new-cap": ["error", { "newIsCap": true, "capIsNew": false }],  // 대문자로 시작하면 생성자를 요구.
		// "new-parens": "error",  // 인수가 없는 생성자를 호출 할 때 괄호가 필요.
		// "no-array-constructor": "error", // 배열 생성자를 허용하지 않음.
		// "no-caller": "error",
		// "no-class-assign": "error", // 클래스 이름을 변수로 사용 금지.
		// "no-compare-neg-zero": "error", // -0 에 대한 비교를 허용하지 않는다. ex) x === -0
		// "no-cond-assign": "error", // 조건문에 할당 연산자를 허용하지 않는다.
		// "no-const-assign": "error", // const 변수 수정을 허용하지 않음.
		// "no-constant-condition": ["error", { "checkLoops": false }], // 조건에서 상수 표현을 허용하지 않음.
		// "no-control-regex": "error", // 정규 표현식에서 제어 문자를 허용하지 않음.
		// "no-debugger": "error",
		// "no-delete-var": "error", // 변수 삭제를 허용하지 않음.
		// "no-dupe-args": "error", // 함수에서 중복 인수를 허용하지 않음.
		// "no-dupe-class-members": "error", // 멤버 함수 중복 이름 사용 금지.
		// "no-dupe-keys": "error",  // 객체 리터럴에서 중복 키 허용 안함.
		// "no-duplicate-case": "error", // switch-case문 에서 중복 case 금지.
		// "no-empty-character-class": "error", // 정규 표현식에서 빈 문자를 허용하지 않는다.
		// "no-empty-pattern": "error",
		// "no-eval": "error",
		// "no-ex-assign": "error",  // catch 절 재 할당을 허용하지 않음.
		// "no-extend-native": "error", // 네이티브 객체 확장 금지.
		// "no-extra-bind": "error", // 불필요한 함수 바인딩 허용 안 함.
		// "no-extra-boolean-cast": "error", // 불필요한 boolean형 캐스트를 금지. ex) !!!bar;
		// "no-extra-parens": ["error", "functions"], // 불필요한 괄호를 허용하지 않음.
		// "no-fallthrough": "error",
		// "no-floating-decimal": "error", // 부동 소수점 허용하지 않음.
		// "no-func-assign": "error",  // function 선언 재 정의를 허용하지 않음.
		// "no-global-assign": "error", // 네이티브 객체 또는 읽기 전용 전역 변수에 대한 할당 금지.
		// "no-implied-eval": "error",
		// "no-inner-declarations": ["error", "functions"], // 중첩 된 블록에서 변수 또는 선언을 허용하지 않음.
		// "no-invalid-regexp": "error", // RegExp 생성자 에서 잘못된 정규 표현식 문자열을 허용하지 않음.
		// "no-irregular-whitespace": "error", // 불규칙한 공백을 허용하지 않음.
		// "no-iterator": "error",
		// "no-label-var": "error",
		// "no-labels": ["error", { "allowLoop": false, "allowSwitch": false }],
		// "no-lone-blocks": "error", // 불필요한 충접 블록 허용 안 함.
		// "no-mixed-operators": ["error", { // 다른 연산자의 혼합을 허용하지 않음.
		//     "groups": [
		//         ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
		//         ["&&", "||"],
		//         ["in", "instanceof"]
		//     ],
		//     "allowSamePrecedence": true
		// }],
		// "no-mixed-spaces-and-tabs": "error",  // 혼합 된 공백과 들여 쓰기에 대한 탭을 허용하지 않음.
		// "no-multi-spaces": "error", // 여러 공백을 허용하지 않음.
		// "no-multi-str": "error",  // 여러 줄 문자열 사용 금지.
		// "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],  // 여러 개의 빈 줄을 허용하지 않음.
		// "no-negated-in-lhs": "error", // in 표현식 에서 왼쪽 피연산자를 무효화하는 것을 허용하지 않음.
		// "no-new": "error",
		// "no-new-func": "error",
		// "no-new-object": "error",
		// "no-new-require": "error",
		// "no-new-symbol": "error",
		// "no-new-wrappers": "error",
		// "no-obj-calls": "error", // 전역 객체 속성을 함수로 호출하는 것을 허용하지 않음.
		// "no-octal": "error",  // 8진수 리터럴 금지.
		// "no-octal-escape": "error", // 문자열 리터럴에서 8진수 이스케이프 시퀀스를 허용 안 함.
		// "no-path-concat": "error", // ** _dirname과 _filename을 사용할 때 문자열 연결을 허용하지 않음.
		// "no-proto": "error",  // __proto__ 의 사용 금지.
		// "no-redeclare": "error",  // 변수 재 선언을 허용하지 않음.
		// "no-regex-spaces": "error", // 정규식 리터럴에서 공백을 여러 개 허용하지 않습니다.
		// "no-return-assign": ["error", "except-parens"], // return 문에서 할당 금지.
		// "no-return-await": "error",
		'no-await-in-loop': 'off',
		// "no-self-assign": "error",  // 자기 할당 금지.
		// "no-self-compare": "error", // 자기 비교 금지.
		// "no-sequences": "error",  // 쉼표 연사자 사용 금지.
		// "no-shadow-restricted-names": "error",
		// "no-sparse-arrays": "error",
		// "no-tabs": "error", // 주석을 포함한 탭 문자를 사용할 수 없다.
		// "no-template-curly-in-string": "error",
		// "no-this-before-super": "error",  // 생성자에 있는 super()를 호출하기 전에 this/super를 사용하지 못한다.
		// "no-throw-literal": "error",
		// "no-trailing-spaces": "error", // 줄의 끝에 공백 문자가 오는 것을 허용하지 않는다.
		// "no-undef": "error", // 선언되지 않은 변수를 허용하지 않음.
		// "no-undef-init": "error", // undefined롤 초기화 할 수 없음.
		// "no-unexpected-multiline": "error", // 혼란스러운 여러 줄의 표현을 허용하지 않음.
		// "no-unmodified-loop-condition": "error", // 수정되지 않음 루프 조건을 허용하지 않음.
		// "no-unneeded-ternary": ["error", { "defaultAssignment": false }], // 더 간단한 대안이 존재할 때 삼항 연산자를 허용하지 않는다.
		// "no-unreachable": "error",  // 도달 할 수 없는 코드를 허용하지 않는다. (return , throw, continue)
		// "no-unsafe-finally": "error", // finally 블록에서 제어 흐름 명령문을 허용하지 않음.
		// "no-unsafe-negation": "error", // 관계 연산자의 왼쪽 피연산자를 무효화하는 것을 허용하지 않음.
		// "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true, "allowTaggedTemplates": true }], // 사용되지 않는 표현식 금지.
		'no-unused-vars': [
			'error',
			{ vars: 'all', args: 'none', ignoreRestSiblings: true },
		], // 사용하지 않는 변수 금지.
		// "no-use-before-define": ["error", { "functions": false, "classes": false, "variables": false }], // 변수와 함수를 선언전에 사용 금지.
		// "no-useless-call": "error", // 불필요한 .call() 및 .apply()를 금지.
		// "no-useless-computed-key": "error", // 객체에서 불필요한 계산 된 속성 키를 허용하지 않음.
		// "no-useless-constructor": "error",  // 불필요한 생성자를 허용하지 않음.
		// "no-useless-escape": "error", // 불필요한 escape 사용을 허용하지 않음.
		// "no-useless-rename": "error", // ** import, export 및 소멸 된 할당의 이름을 같은 이름으로 바꿀 수 없음.
		// "no-useless-return": "error", // 중복 반환 문을 허용하지 않음.
		// "no-whitespace-before-property": "error", // 특성 앞에 공백을 허용하지 않음.
		// "no-with": "error", // with 문장을 허용하지 않음.
		// "object-curly-spacing": ["error", "always"], // 중괄호 안에 일정한 간격을 두기.
		// "object-property-newline": ["error", { "allowMultiplePropertiesPerLine": true }], // 객체 속성을 별도의 줄에 배치하도록 강요.
		// "one-var": ["error", { "initialized": "never" }], // 함수에서 함께 선언되거나 별도로 선언 될 변수를 강제 적용.
		// "operator-linebreak": ["error", "after", { "overrides": { "?": "before", ":": "before" } }], // 일관된 라인 브레이크 스타일 적용.
		// "padded-blocks": ["error", { "blocks": "never", "switches": "never", "classes": "never" }], // 블록 내에서 패딩을 요구하거나 허용하지 않음.
		// "prefer-promise-reject-errors": "error",
		// "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }], // 역 따옴표, 이중 따옴표, 작은 따옴표의 일관된 사용을 시행.
		// "rest-spread-spacing": ["error", "never"], // 나머지 연산자와 스프레드 연산자와 그 표현식 사이의 간격 조정.
		// "semi": ["error", "never"], // ASI(semi) 대신에 세미콜론을 금지.
		// "semi-spacing": ["error", { "before": false, "after": true }], // 세미콜론 전후에 간격을 둔다.
		// "space-before-blocks": ["error", "always"], // 블록 앞에 공백 필요 / 불허 하기.
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always',
			},
		], // 함수 괄호 앞에 공백이 필요하거나 허용되지 않는다.
		// "space-in-parens": ["error", "never"], // 괄호 안의 공백을 허용 여부.
		// "space-infix-ops": "error", // 중위 연산자 주위에 공백이 필요.
		// "space-unary-ops": ["error", { "words": true, "nonwords": false }], // 단항 연산자의 전후에 공백 필요 또는 비 허용.
		// "spaced-comment": ["error", "always", { // 주석을 시작하는 공백 여부.
		//     "line": { "markers": ["*package", "!", "/", ",", "="] },
		//     "block": { "balanced": true, "markers": ["*package", "!", ",", ":", "::", "flow-include"], "exceptions": ["*"] }
		// }],
		// "symbol-description": "error", // 기호 설명이 필요하다.
		// "template-curly-spacing": ["error", "never"], // 템플릿 문자열에서 간격의 사용을 강요.
		// "template-tag-spacing": ["error", "never"], // 탬플릿 태그와 리터럴 사잉의 간격 여부.
		// "unicode-bom": ["error", "never"], // 유니 코드 바이트 순서 표시 여부.
		// "use-isnan": "error", // NaN 체크 할때 isNaN() 호출 요청.
		// "valid-typeof": ["error", { "requireStringLiterals": true }],
		// "wrap-iife": ["error", "any", { "functionPrototypeMethods": true }],
		// "yield-star-spacing": ["error", "both"],
		// "yoda": ["error", "never"], // Yoda 조건 여부.
		//
		// "import/export": "error",
		'class-methods-use-this': 'off',
		'import/first': 'off',
		// "import/no-duplicates": "error",
		// "import/no-named-default": "error",
		// "import/no-webpack-loader-syntax": "error",
		//
		// "node/no-deprecated-api": "error",
		// "node/process-exit-as-throw": "error",
		//
		// "promise/param-names": "error",
		//
		// "standard/array-bracket-even-spacing": ["error", "either"],
		// "standard/computed-property-even-spacing": ["error", "even"],
		// "standard/no-callback-literal": "error",
		// "standard/object-curly-even-spacing": ["error", "either"],
		'no-confusing-arrow': [
			'off',
			{
				allowParens: false,
			},
		], // 비교와 혼동 될 수 있는 화살표 기능 중 단일 인수는 허용한다.
		'array-element-newline': ['error', 'consistent'], // 배열 요소 간에 일관된 줄바꿈을 허용한다.
	},
};

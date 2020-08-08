const bar = function () {};

const bar2 = function () {};

function good() {
	console.log('good');
}

// bad
const bad = function () {
	console.log('bad');
};
const myArray = [1, 2, 3, 4];
// const indexMap = myArray.reduce((memo, item, index) => {
// 	return (memo[item] = index);
// }, {});
//
// const foo = Array.from(nodes, function (node) {
// 	if (node.tagName === 'DIV') {
// 		return true;
// 	}
// });
//
// const bar3 = foo.filter(function (x) {
// 	if (x) {
// 		return true;
// 	}
// });
var indexMap = myArray.reduce(function(memo, item, index) {
	memo[item] = index;
	return memo;
}, {});

var foo = Array.from(nodes, function(node) {
	if (node.tagName === "DIV") {
		return true;
	}
	return false;
});

var bar = foo.map(node => node.getAttribute("id"));

const a = x => console.log(1);
// good

const aaabb = {
	ddd: {
		aaa: {
			aaad: {
				fadad: {
					ddsad: {},
				},
			},
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'prettier',
		'eslint:recommended',
		'plugin:react/ree',
		'plugin:react/ree',
	],
};
console.log(bad());
console.log(good());

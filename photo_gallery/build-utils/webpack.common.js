// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPaths = require('./common-paths');

const config = {
	entry: {
		vendor: ['semantic-ui-react'],
	},
	output: {
		path: commonPaths.outputPath,
		publicPath: '/',
	},
	module: {
		rules: [
			// {
			// 	test: /\.(js)$/,
			// 	exclude: /node_modules/,
			// 	use: ['babel-loader'],
			// },
			{
				test: /\.js$/, // .js, .jsx로 끝나는 babel이 컴파일하게 할 모든 파일
				// test: /.(js|jsx)$/, // .js, .jsx로 끝나는 babel이 컴파일하게 할 모든 파일
				exclude: /node_module/, // node module 폴더는 babel 컴파일에서 제외
				use: {
					loader: 'babel-loader', // babel loader가 파이프를 통해 js 코드를 불러옴
				},
			},
		],
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.css$/,
					chunks: 'all',
					enforce: true,
				},
				vendor: {
					chunks: 'initial',
					test: 'vendor',
					name: 'vendor',
					enforce: true,
				},
			},
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: `public/index.html`,
			favicon: `public/favicon.ico`,
		}),
	],
};

module.exports = config;

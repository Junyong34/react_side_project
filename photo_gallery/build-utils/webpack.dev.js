const webpack = require('webpack');
const commonPaths = require('./common-paths');

const port = process.env.PORT || 3000;

const config = {
	mode: 'development',
	entry: {
		app: `${commonPaths.appEntry}/index.js`,
	},
	output: {
		filename: '[name].[hash].js',
	},
	resolve: {
		alias: {
			'react-dom': '@hot-loader/react-dom',
		},
		// extensions: ['', '.js', '.json', '.jsx'],
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localsConvention: 'camelCase',
							sourceMap: true,
						},
					},
				],
			},
		],
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	devServer: {
		host: 'localhost',
		port,
		historyApiFallback: true,
		hot: true,
		open: true,
	},
};

module.exports = config;


var webpack = require('webpack');
var $ = require("jquery");
require("bootstrap");

module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		path: './dist'
	},
	module: {
		
		rules: [
			{
				test: /\.js/,
				exclude: [/node_modules/],
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['es2015']
					}
				}]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "sass-loader",
					options: {
						includePaths: ["absolute/path/a", "absolute/path/b"]
					}
				}]
			}, { test: /[\/]jquery\.js$/, use: 'expose-loader?$!expose?jQuery' }
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			  $: 'jquery',
			  jQuery: 'jquery'
		})
	]
}

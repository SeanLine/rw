const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: 'ts-loader',
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					}
				}
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({
		template: './public/index.html'
	})],
	devServer: {
		static: path.join(__dirname, 'dist'),
    port: 3000,
    hot: true,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	}
}
const path = require('path')
const webpack = require('webpack')

module.exports = env => {
	const srcPath = path.join(__dirname, 'src')
	const outputFolder = 'build'

	return {
		cache: true,
		entry: {
			components: './src/components.js'
		},
		output: {
			filename: 'js/[name].js',
			path: path.join(__dirname, outputFolder),
			libraryTarget: 'commonjs2'
		},
		target: 'node',
		resolve: {
			extensions: ['.js', '.vue', '.json'],
			alias: {
				'vue$': 'vue/dist/vue.esm.js',
				'@': srcPath
			}
		},
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader'
				}
			]
		},
		stats: {
			children: false
		}
	}
}

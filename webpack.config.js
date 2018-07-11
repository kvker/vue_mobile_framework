const path = require('path');
const webpack = require('webpack');

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}
// 打包 html 模板文件到 html 文件的插件，自动填充生成的 js 文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	// 入口 js，可以多个
	entry: ['./src/main.coffee'],
	// 打包输出费配置
	output: {
		path: __dirname + '/dist',
		filename: 'js/app.js',
	},
	devServer: {
		contentBase: './dist',
		port: 8899,
		open: true,
		host: '127.0.0.1',
	},
	// 引用到的模块配置
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader'
					},
				]
			},
			{
				test: /\.coffee$/,
				use: [
					{
						loader: 'coffee-loader'
					},
				]
			},
			{
				test: /\.vue$/,
				use: {
					loader: 'vue-loader',
					options: {
						sourceMap: 'source-map'
					}
				}
			},
			{
				test: /\.(png|gif|jpe?g)$/,
				use: {
					loader: 'url-loader',
					// 配置静态资源，这里图片，下面那个字体一样处理
					query: {
            /**
             * limit 单位 byte，大于这个设定的静态资源打包到 name 字段对应的文件夹下方
             * 小于这个设定值的直接打包为 base64 文本使用
             */
						limit: 1, // 所有图片不做压缩处理
						name: 'static/img/[name].[hash].[ext]'
					}
				}
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
				use: {
					loader: 'url-loader',
					query: {
						limit: 1,// 所有字体资源也不做压缩处理
						name: 'static/font/[name].[hash].[ext]'
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.vue', '.json', '.coffee'],
		alias: {
			src: path.resolve(__dirname, 'src'),
			static: path.resolve(__dirname, 'src/static'),
			img: path.resolve(__dirname, 'src/static/img'),
			icon: path.resolve(__dirname, 'src/static/icon'),
			page: path.resolve(__dirname, 'src/page'),
			core: path.resolve(__dirname, 'src/page/core'),
			component: path.resolve(__dirname, 'src/component'),
			common: path.resolve(__dirname, 'src/page/common'),
			mixin: path.resolve(__dirname, 'src/mixin'),
			api: path.resolve(__dirname, 'src/config/api'),
			'@': resolve('src'),
			'assets': resolve('src/assets'),
		}
	},
	externals: {},
	plugins: [
		// 模板与输入文件名（路径一起）
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			filename: 'index.html'
		}),
	]
}
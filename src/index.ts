import {Configuration as WebpackConfig, DefinePlugin} from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin';
import devConfig from './development';
import prodConfig from './production';

console.info('CLIENT BUILD CONTEXT - environment', process.env.NODE_ENV);

const isProduction = process.env.NODE_ENV === 'production';

const commonConfig: WebpackConfig = {
	mode: isProduction ? 'production' : 'development',
	entry: {
		app: [
			...isProduction ? [] : ['webpack-hot-middleware/client'],
			'./src/index.tsx'
		]
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				enforce: 'pre',
				use: 'eslint-loader'
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: 'ts-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(eot|svg|ttf|otf|woff|woff2)$/,
				use: 'file-loader?name=[name].[ext]'
			},
			{
				test: /\.(gif|jpe?g|otf|png|webp)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							name: 'media/[name].[ext]'
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.json', '.js', ',jsx', '.ts', '.tsx']
	}
};

export default (definitions = {}, buildVersion: string, directory: string): WebpackConfig => {
	const commonPlugins = [
		new HTMLWebpackPlugin({
			minify: {
				collapseWhitespace: true,
				html5: true,
				removeAttributeQuotes: true,
				removeComments: true,
				removeEmptyAttributes: true
			},
			template: 'src/index.html',
			version: buildVersion
		}),
		new CopyWebpackPlugin([
			{from: './src/static', to: ''}
		]),
		new HardSourceWebpackPlugin()
	];

	const {plugins, ...environmentConfig}: WebpackConfig =
		isProduction ?
			prodConfig(directory) :
			devConfig(directory);
	return {
		...commonConfig,
		...environmentConfig,
		plugins: [
			...commonPlugins,
			...plugins,
			new DefinePlugin(definitions)
		]
	};
};

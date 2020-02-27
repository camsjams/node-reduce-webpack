import {join} from 'path';
import CompressionWebpackPlugin from 'compression-webpack-plugin';
import {Configuration} from 'webpack';

const config = (dirPath: string): Configuration => ({
	output: {
		filename: '[name].[hash].js',
		path: join(dirPath, '/dist/public'),
		publicPath: '/'
	},
	plugins: [
		new CompressionWebpackPlugin({
			algorithm: 'gzip',
			minRatio: 0.8,
			test: /\.(js|html|css)$/,
			threshold: 10240
		})
	]
});

export default config;

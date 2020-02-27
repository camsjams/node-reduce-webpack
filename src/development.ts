import {join} from 'path';
import {Configuration, HotModuleReplacementPlugin} from 'webpack';

const config = (dirPath: string): Configuration => ({
	output: {
		filename: '[name].js',
		path: join(dirPath, '/dist/public'),
		publicPath: '/'
	},
	plugins: [
		new HotModuleReplacementPlugin()
	]
});

export default config;

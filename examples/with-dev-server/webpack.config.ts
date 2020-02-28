import {join} from 'path';
import {Configuration} from 'webpack';
import reduceWebpack from 'reduce-webpack';
import {Configuration as DevServerConfig} from 'webpack-dev-server';

const config: Configuration = reduceWebpack(
	{},
	'someVersion',
	__dirname
);

if (process.env.NODE_ENV !== 'production') {
	config.devServer = ((): DevServerConfig => ({
		contentBase: join(__dirname, 'dist'),
		host: '0.0.0.0',
		port: 8118,
		hotOnly: true,
		inline: true,
		publicPath: '/'
	}))()
}

export default config

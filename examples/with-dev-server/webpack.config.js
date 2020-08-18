const {join} = require('path');
const reduceWebpack = require('reduce-webpack').default;

const config = reduceWebpack(
	{
		__SOME_VAR__: JSON.stringify('World!!')
	},
	'someVersion',
	__dirname
);

if (process.env.NODE_ENV !== 'production') {
	config.devServer = (() => ({
		contentBase: join(__dirname, 'dist'),
		host: '0.0.0.0',
		port: 1234,
		hotOnly: true,
		inline: true,
		publicPath: '/'
	}))()
}


config.entry.app = ['./src/index.tsx'];

module.exports = config;

const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const config = require('../../webpack.config');

const compiler = webpack(config);

const webpackDevMiddleware = devMiddleware(compiler, {
	watchOptions: {
		poll: false
	},
	stats: 'minimal'
});

const webpackHotMiddleware = hotMiddleware(compiler);

module.exports = {
	webpackDevMiddleware,
	webpackHotMiddleware
}

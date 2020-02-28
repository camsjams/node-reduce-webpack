import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';

import config from '../../webpack.config';

const compiler = webpack(config);

export const webpackDevMiddleware = devMiddleware(compiler, {
	watchOptions: {
		poll: false
	},
	stats: 'minimal'
});

export const webpackHotMiddleware = hotMiddleware(compiler);

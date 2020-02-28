import Express from 'express';

const app = new Express();
const PORT = process.env.PORT || 1234;
const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
	console.log('Webpack middleware enabled');
	const {webpackDevMiddleware, webpackHotMiddleware} = require('./middleware/webpack');
	app.use(webpackDevMiddleware);
	app.use(webpackHotMiddleware);
} else {
	console.log('Webpack middleware disabled, using pre-built files');
}

app.listen(PORT, (err) => {
	if (err) {
		logger.error(err);
	}

	console.log(`================
	Environment[${process.env.NODE_ENV}]
	Port[${PORT}]
	`);
});

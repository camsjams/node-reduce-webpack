# reduce-webpack
Provide a list zero-config webpack experience for common app setups

## Current Version
check package.json

## Platforms / Technologies
* [nodejs](https://nodejs.org/)
* [webpack](https://webpack.js.org/)
* [TypeScript](https://typescriptlang.org/)

## Works with and is 100% conventional webpack
- TypeScript
- eslint
- React
- Styled Components
- FP-TS
- Jest
- Tape
- Express
- Supports static folder
- Supports images/fonts
- Hot Module Reloading (HMR)

## Install
>       $ npm install reduce-webpack --save-dev


## Setup
See [examples](./examples)

Your project needs to `webpack.config.ts` or `webpack.config.js` in your root folder:
```javascript
import reduceWebpack from 'reduce-webpack';

 // create custom variable rewrites using the webpack DefinePlugin
const DEFINITIONS = {
	__SOME_VAR__: JSON.stringify('World!!')
};

export default reduceWebpack(
	DEFINITIONS,
	'someVersion',
	__dirname
);
```

Then in your package.json, you can add:
```JSON
{
	"scripts": {
    	"build": "webpack"
  	},
}
```

The build step looks for `NODE_ENV` and will run the `production` webpack rules if `NODE_ENV=production`.

## Dev Server
Every other `NODE_ENV` not equal to `production` is treated as a `development` build, which spins up a [webpack-hot-middleware](https://github.com/webpack-contrib/webpack-hot-middleware) client.

This client can easily be attached to your existing server with Express middleware like so:
```javascript
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

// your webpack config as created above
import config from './webpack.config';

const compiler = webpack(config);

export const webpackDevMiddleware = devMiddleware(compiler, {
	publicPath: '/',
	watchOptions: {
		poll: false
	},
	stats: 'minimal'
});

export const webpackHotMiddleware = hotMiddleware(compiler);

const app = express();
app.use(webpackDevMiddleware);
app.use(webpackHotMiddleware);
```

If you instead wanted to just use the [webpack-dev-server](), use:
```javascript
import {join} from 'path';
import {Configuration} from 'webpack';
import reduceWebpack from 'reduce-webpack';
import {Configuration as DevServerConfig} from 'webpack-dev-server';

const config: Configuration = reduceWebpack(
	{__SOME_VAR__: JSON.stringify('World!!')},
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
```

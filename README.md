# reduce-webpack
Provide a zero-config webpack experience for common app setups

# Who is this for?
Those who:
- Are tired of copying over webpack configs to other projects
- Don't enjoy fiddling with / installing npm modules for webpack
- Use standard webpack practices
- Want a conventional config for webpack as a plain object, that's extensible to fit any project
- Like smart defaults
- Prefer less npm dependencies

## Current Version
v1.0.3

## Platforms / Technologies
* [nodejs](https://nodejs.org/)
* [webpack](https://webpack.js.org/)
* [TypeScript](https://typescriptlang.org/)

## Works with everything* / 100% conventional webpack
- Blazing Fast 🚀
- Zero config 📄
- TypeScript 💜
- ESLint 🤝
- React ⚛️
- Styled Components :nail_care:
- FP-TS ➕
- Jest 🃏
- Tape 🖭
- Express 🌠
- Simple HTML file file templates 😀 (using [lodash templates](https://lodash.com/docs#template) - see [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/))
- Supports static folder 🎓
- Supports images/fonts 📦
- Hot Module Reloading (HMR) ⚡

## Install
>       $ npm install reduce-webpack --save-dev

---

## Setup and Usage
For quick project templates, see [examples](./examples)


### Basic
Your project needs a `webpack.config.ts` (must install `ts-node`) or `webpack.config.js` in your root folder:
```javascript
import reduceWebpack from 'reduce-webpack';

export default reduceWebpack({},'someVersionNumberYouWantToShowInHTML',__dirname);
```

Then in your package.json, you can add:
```JSON
{
	"scripts": {
		"build": "webpack"
	}
}
```

### Customizing
Your can use the resulting config and customize any aspect of it as needed:
```javascript
import reduceWebpack from 'reduce-webpack';

const baseConfig = reduceWebpack({},'someVersionNumberYouWantToShowInHTML',__dirname);

// here we might want to customize the config to support more file extensions
export default {
	...baseConfig,
	resolve: {
		extensions: ['.json', '.js', '.ts', '.tsx', '.jsx', '.wasm', '.mjs']
	}
};
```

### Definitions
You can optionally add definitions that will be sent to  the webpack [DefinePlugin](https://webpack.js.org/plugins/define-plugin/)
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

### Production Build

The build step looks for `NODE_ENV` and will run the `production` webpack rules if `NODE_ENV=production`.

A folder called `dist` will be created, with a subfolder called `public`, which is the root directory to be hosted by your static file server, GitHub page or Express app.
```bash
[your project]/dist/public/index.html <--- serve this file
```

---

## Dev Server
Every other `NODE_ENV` not equal to `production` is treated as a `development` build, which spins up a [webpack-hot-middleware](https://github.com/webpack-contrib/webpack-hot-middleware) client.

### With an Express server
This client can easily be attached to your existing server with Express middleware, see [examples/with-express-server](./examples/with-express-server).

### As a standalone SPA app
If you instead wanted to just use the [webpack-dev-server](), see [examples/with-dev-server](./examples/with-dev-server).

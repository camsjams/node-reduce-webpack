import reduceWebpack from 'reduce-webpack';

export default reduceWebpack(
	{
		__SOME_VAR__: JSON.stringify('World!!')
	},
	'v123',
	__dirname
);

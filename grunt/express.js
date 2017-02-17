module.exports = {
	options: {
		port: process.env.PORT,
	},
	dev: {
		options: {
			script: 'keystone.js',
			debug: true,
		},
	},
};

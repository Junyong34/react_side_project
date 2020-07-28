const webpackMerge = require('webpack-merge');
const buildValidations = require('./build-utils/build-validations');
const commonConfig = require('./build-utils/webpack.common');

const addons = (/* string | string[] */ addonsArg) => {
	const fileList = [...[addonsArg]] // Normalize array of addons (flatten)
		.filter(Boolean); // If addons is undefined, filter it out

	// eslint-disable-next-line global-require,import/no-dynamic-require
	return fileList.map(addonName => require(`./build-utils/addons/webpack.${addonName}.js`));
};

module.exports = env => {
	if (!env) {
		throw new Error(buildValidations.ERR_NO_ENV_FLAG);
	}

	// eslint-disable-next-line global-require,import/no-dynamic-require
	const envConfig = require(`./build-utils/webpack.${env.env}.js`);
	const mergedConfig = webpackMerge(commonConfig, envConfig, ...addons(env.addons));

	return mergedConfig;
};

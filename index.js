const {getSysInfo} = require('./sys-info');

/**
 * Chrome user agent
 *
 * @param {number | string} version Browser version
 * @param {string} sysInfo System information
 * @returns {string} User agent
 */
function chrome(version, sysInfo) {
	return 'Mozilla/5.0 (' + getSysInfo(sysInfo) + ') AppleWebKit/537.36 (KHTML, like Gecko) Chrome/' + version + ' Safari/537.36';
}

/**
 * Chrome user agent with advanced options
 *
 * @param {number | string} version Browser version
 * @param {number | string} webkitVersion Webkit version
 * @param {string} sysInfo System information
 * @returns {string} User agent
 */
function chromeAdvanced(version, webkitVersion, sysInfo) {
	return 'Mozilla/5.0 (' + getSysInfo(sysInfo) + ') AppleWebKit/' + webkitVersion + ' (KHTML, like Gecko) Chrome/' + version + ' Safari/' + webkitVersion;
}

/**
 * Safari user agent
 *
 * @param {number | string} version Browser version
 * @param {string} sysInfo System information
 * @returns {string} User agent
 */
function firefox(version, sysInfo) {
	return 'Mozilla/5.0 (' + getSysInfo(sysInfo) + '; rv:' + version + ') Gecko/20100101 Firefox/' + version;
}

/**
 * Firefox user agent with advanced options
 *
 * @param {number | string} version Browser version
 * @param {number | string} geckoVersion Gecko version
 * @param {string} sysInfo System information
 * @returns {string} User agent
 */
function firefoxAdvanced(version, geckoVersion, sysInfo) {
	return 'Mozilla/5.0 (' + getSysInfo(sysInfo) + '; rv:' + version + ') Gecko/' + geckoVersion + ' Firefox/' + version;
}

/**
 * Opera user agent
 *
 * @param {number | string} version Browser version
 * @param {string} sysInfo System information
 * @returns {string} User agent
 */
function opera(version, sysInfo) {
	return 'Opera/9.80 (' + getSysInfo(sysInfo) + ') Presto/2.12.388 Version/' + version;
}

/**
 * Opera user agent with advanced options
 *
 * @param {number | string} version Browser version
 * @param {number | string} prestoVersion Presto version
 * @param {number | string} operaVersion Opera version
 * @param {string} sysInfo System information
 * @returns {string} User agent
 */
function operaAdvanced(version, prestoVersion, operaVersion, sysInfo) {
	return 'Opera/' + operaVersion + ' (' + getSysInfo(sysInfo) + ') Presto/' + prestoVersion + ' Version/' + version;
}

/**
 * Safari user agent
 *
 * @param {number | string} version Browser version
 * @param {string} sysInfo System information
 * @returns {string} User agent
 */
function safari(version, sysInfo) {
	return 'Mozilla/5.0 (' + getSysInfo(sysInfo) + ') AppleWebKit/601.4.8 (KHTML, like Gecko) Version/' + version + ' Safari/601.4.8';
}

/**
 * Safari user agent with advanced options
 *
 * @param {number | string} version Browser version
 * @param {number | string} webkitBuildVersion Webkit build version
 * @param {number | string} safariBuildVersion Safari build version
 * @param {string} sysInfo System information
 * @returns {string} User agent
 */
function safariAdvanced(version, webkitBuildVersion, safariBuildVersion, sysInfo) {
	return 'Mozilla/5.0 (' + getSysInfo(sysInfo) + ') AppleWebKit/' + webkitBuildVersion + ' (KHTML, like Gecko) Version/' + version + ' Safari/' + safariBuildVersion;
}

module.exports = {
	chrome,
	chromeAdvanced,
	firefox,
	firefoxAdvanced,
	opera,
	operaAdvanced,
	safari,
	safariAdvanced
};

const {getSysInfo} = require('./sys-info');

/**
 * @param {number | string} version Browser version
 * @param {string} sysInfo System info
 * @returns {string} Useragent
 */
function chrome(version, sysInfo) {
	return 'Mozilla/5.0 (' + getSysInfo(sysInfo) + ') AppleWebKit/537.36 (KHTML, like Gecko) Chrome/' + version + ' Safari/537.36';
}

/**
 * @param {number | string} version Browser version
 * @param {number | string} webkitVersion Webkit version
 * @param {string} sysInfo System info
 * @returns {string} Useragent
 */
function chromeAdvanced(version, webkitVersion, sysInfo) {
	return 'Mozilla/5.0 (' + getSysInfo(sysInfo) + ') AppleWebKit/' + webkitVersion + ' (KHTML, like Gecko) Chrome/' + version + ' Safari/' + webkitVersion;
}

/**
 * @param {number | string} version Browser version
 * @param {string} sysInfo System info
 * @returns {string} Useragent
 */
function firefox(version, sysInfo) {
	return 'Mozilla/5.0 (' + getSysInfo(sysInfo) + '; rv:' + version + ') Gecko/20100101 Firefox/' + version;
}

/**
 * @param {number | string} version Browser version
 * @param {number | string} geckoVersion Gecko version
 * @param {string} sysInfo System info
 * @returns {string} Useragent
 */
function firefoxAdvanced(version, geckoVersion, sysInfo) {
	return 'Mozilla/5.0 (' + getSysInfo(sysInfo) + '; rv:' + version + ') Gecko/' + geckoVersion + ' Firefox/' + version;
}

/**
 * @param {number | string} version Browser version
 * @param {string} sysInfo System info
 * @returns {string} Useragent
 */
function opera(version, sysInfo) {
	return 'Opera/9.80 (' + getSysInfo(sysInfo) + ') Presto/2.12.388 Version/' + version;
}

/**
 * @param {number | string} version Browser version
 * @param {number | string} prestoVersion Presto version
 * @param {number | string} operaVersion Opera version
 * @param {string} sysInfo System info
 * @returns {string} Useragent
 */
function operaAdvanced(version, prestoVersion, operaVersion, sysInfo) {
	return 'Opera/' + operaVersion + ' (' + getSysInfo(sysInfo) + ') Presto/' + prestoVersion + ' Version/' + version;
}

/**
 * @param {number | string} version Browser version
 * @param {string} sysInfo System info
 * @returns {string} Useragent
 */
function safari(version, sysInfo) {
	return 'Mozilla/5.0 (' + getSysInfo(sysInfo) + ') AppleWebKit/601.4.8 (KHTML, like Gecko) Version/' + version + ' Safari/601.4.8';
}

/**
 * @param {number | string} version Browser version
 * @param {number | string} webkitBuildVersion Webkit build version
 * @param {number | string} safariBuildVersion Safari build version
 * @param {string} sysInfo System info
 * @returns {string} Useragent
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

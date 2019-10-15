const os = require('os');

/* istanbul ignore next */
/**
 * @returns {string} Linux system informations
 */
function linux() {
	switch (os.arch()) {
		case 'x64':
			return 'Linux; x86_64';
		case 'i686':
			return 'Linux; i686';
		case 'arm':
			return 'Linux; ARM';
		default:
			return 'Linux';
	}
}

/* istanbul ignore next */
/**
 *	@returns {string} macOS system informations
 */
function mac() {
	return 'Macintosh; Intel Mac OS X ' + require('get-osx-version');
}

/* istanbul ignore next */
/**
 * @returns {string} Windows system informations
 */
function windows() {
	let version;
	try {
		version = parseFloat(os.release());
	} catch {
		version = '';
	}

	switch (os.arch()) {
		case 'x64':
			return 'Windows NT ' + version + '; Win64; x64';
		case 'x86':
			return 'Windows NT ' + version + '; Win32; x86';
		case 'arm':
			return 'Windows NT ' + version + '; ARM';
		default:
			return 'Windows NT ' + version;
	}
}

/**
 * Get system informations
 *
 * @param {string} sysInfo System info
 * @returns {string} System info
 */
function getSysInfo(sysInfo) {
	if (sysInfo) {
		return sysInfo;
	}

	/* istanbul ignore next */
	switch (os.platform()) {
		case 'darwin':
			return mac();

		case 'linux':
			return linux();

		case 'windows':
			return windows();

		default:
			return '';
	}
}

module.exports.getSysInfo = getSysInfo;

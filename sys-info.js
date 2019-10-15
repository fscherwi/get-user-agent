/**
 * @param {string} arch The operating system CPU architecture
 * @returns {string} Linux system informations
 */
function linux(arch) {/* istanbul ignore next */
	switch (arch) {
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

/**
 *	@returns {string} macOS system informations
 */
function mac() {/* istanbul ignore next */
	return 'Macintosh; Intel Mac OS X ' + require('get-osx-version');
}

/**
 * @param {string} arch The operating system CPU architecture
 * @returns {string} Windows system informations
 */
function windows(arch) {/* istanbul ignore next */
	switch (arch) {
		case 'x64':
			return 'Windows; Win64; x64';
		case 'x86':
			return 'Windows; Win32; x86';
		case 'arm':
			return 'Windows; ARM';
		default:
			return 'Windows';
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

	const os = require('os');
	/* istanbul ignore next */
	switch (os.platform()) {
		case 'darwin':
			return mac();

		case 'linux':
			return linux(os.arch());

		case 'windows':
			return windows(os.arch());

		default:
			return '';
	}
}

module.exports.getSysInfo = getSysInfo;

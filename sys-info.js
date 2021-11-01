const os = require('os');

/**
 * @returns {string} Linux system informations
 */
function sysInfoLinux() {
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

/**
 *	@returns {string} macOS system informations
 */
function sysInfoMac() {
	const {macOSVersion} = require('get-osx-version');
	return 'Macintosh; Intel Mac OS X ' + macOSVersion();
}

/**
 * @returns {string} Windows system informations
 */
function sysInfoWindows() {
	let version;
	try {
		version = Number.parseFloat(os.release());
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
module.exports.getSysInfo = sysInfo => {
	if (sysInfo) {
		return sysInfo;
	}

	switch (os.platform()) {
		case 'linux':
			return sysInfoLinux();

		case 'darwin':
			return sysInfoMac();

		case 'windows':
			return sysInfoWindows();

		default:
			return '';
	}
};

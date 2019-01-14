function get() {
	const os = require('os');
	switch (os.platform()) {
		case 'darwin':
			return 'Macintosh; Intel Mac OS X ' + require('get-osx-version');
		case 'windows':
			switch (os.arch()) {
				case 'x64':
					return 'Windows; Win64; x64';
				case 'x86':
					return 'Windows; Win32; x86';
				case 'arm':
					return 'Windows; ARM';
				default:
					return 'Windows';
			}

		case 'linux':
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

		default:
			return '';
	}
}

module.exports = get();

function getsysInfo(sysInfo) {
	if (sysInfo) {
		return sysInfo;
	}

	return require('./sys-info');
}

function chrome(version, sysInfo) {
	return 'Mozilla/5.0 (' + getsysInfo(sysInfo) + ') AppleWebKit/537.36 (KHTML, like Gecko) Chrome/' + version + ' Safari/537.36';
}

function chromeAdvanced(version, webkitVersion, sysInfo) {
	return 'Mozilla/5.0 (' + getsysInfo(sysInfo) + ') AppleWebKit/' + webkitVersion + ' (KHTML, like Gecko) Chrome/' + version + ' Safari/' + webkitVersion;
}

function firefox(version, sysInfo) {
	return 'Mozilla/5.0 (' + getsysInfo(sysInfo) + '; rv:' + version + ') Gecko/20100101 Firefox/' + version;
}

function firefoxAdvanced(version, geckoVersion, sysInfo) {
	return 'Mozilla/5.0 (' + getsysInfo(sysInfo) + '; rv:' + version + ') Gecko/' + geckoVersion + ' Firefox/' + version;
}

function opera(version, sysInfo) {
	return 'Opera/9.80 (' + getsysInfo(sysInfo) + ') Presto/2.12.388 Version/' + version;
}

function operaAdvanced(version, prestoVersion, operaVersion, sysInfo) {
	return 'Opera/' + operaVersion + ' (' + getsysInfo(sysInfo) + ') Presto/' + prestoVersion + ' Version/' + version;
}

function safari(version, sysInfo) {
	return 'Mozilla/5.0 (' + getsysInfo(sysInfo) + ') AppleWebKit/601.4.8 (KHTML, like Gecko) Version/' + version + ' Safari/601.4.8';
}

function safariAdvanced(version, webkitBuildVersion, safariBuildVersion, sysInfo) {
	return 'Mozilla/5.0 (' + getsysInfo(sysInfo) + ') AppleWebKit/' + webkitBuildVersion + ' (KHTML, like Gecko) Version/' + version + ' Safari/' + safariBuildVersion;
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

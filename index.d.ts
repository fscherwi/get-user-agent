declare const useragent: {

	/**
	@returns Chrome user agent
	 */
	chrome: (version: string | number, sysInfo?: string) => string;

	/**
	@returns Chrome user agent with advanced options
	 */
	chromeAdvanced: (version: string | number, webkitVersion: string | number, sysInfo?: string) => string;

	/**
	@returns Firefox user agent
	 */
	firefox: (version: string | number, sysInfo?: string) => string;

	/**
	@returns Firefox user agent with advanced options
	 */
	firefoxAdvanced: (version: string | number, geckoVersion: string | number, sysInfo?: string) => string;

	/**
	@returns Opera user agent
	 */
	opera: (version: string | number, sysInfo?: string) => string;

	/**
	@returns Opera user agent with advanced options
	 */
	operaAdvanced: (version: string | number, prestoVersion: string | number, operaVersion: string | number, sysInfo?: string) => string;

	/**
	@returns Safari user agent
	 */
	safari: (version: string | number, sysInfo?: string) => string;

	/**
	@returns Safari user agent with advanced options
	 */
	safariAdvanced: (version: string | number, webkitBuildVersion: string | number, safariBuildVersion: string | number, sysInfo?: string) => string;

};

export = useragent;

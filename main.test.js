import test from 'ava';

import {chrome, chromeAdvanced, firefox, firefoxAdvanced, opera, operaAdvanced, safari, safariAdvanced} from './main';
const parser = require('ua-parser-js');

test('Chrome', t => {
	const version = '41.0.2228.0';
	const ua = parser(chrome(version));
	t.is(ua.browser.name, 'Chrome');
	t.is(ua.browser.version, version);
});

test('Chrome Advanced', t => {
	const version = '41.0.2228.0';
	const webkitVersion = '537.36';
	const ua = parser(chromeAdvanced(version, webkitVersion));
	t.is(ua.browser.name, 'Chrome');
	t.is(ua.browser.version, version);
});

test('Firefox', t => {
	const version = '41.0';
	const ua = parser(firefox(version));
	t.is(ua.browser.name, 'Firefox');
	t.is(ua.browser.version, version);
});

test('Firefox Advanced', t => {
	const version = '41.0';
	const geckoVersion = '20100101';
	const ua = parser(firefoxAdvanced(version, geckoVersion));
	t.is(ua.browser.name, 'Firefox');
	t.is(ua.browser.version, version);
});

test('Opera', t => {
	const version = '12.6';
	const ua = parser(opera(version));
	t.is(ua.browser.name, 'Opera');
	t.is(ua.browser.version, version);
});

test('Opera Advanced', t => {
	const version = '12.6';
	const prestoVersion = '2.12.388';
	const operaVersion = '9.80';
	const ua = parser(operaAdvanced(version, prestoVersion, operaVersion));
	t.is(ua.browser.name, 'Opera');
	t.is(ua.browser.version, version);
});

test('Safari', t => {
	const version = '10.0.3';
	const ua = parser(safari(version));
	t.is(ua.browser.name, 'Safari');
	t.is(ua.browser.version, version);
});

test('Safari Advanced', t => {
	const version = '10.0.3';
	const webkitBuildVersion = '602.4.8';
	const safariBuildVersion = '602.4.8';
	const ua = parser(safariAdvanced(version, webkitBuildVersion, safariBuildVersion));
	t.is(ua.browser.name, 'Safari');
	t.is(ua.browser.version, version);
});

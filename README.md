# get-user-agent

[![Build Status](https://travis-ci.org/fscherwi/get-user-agent.svg?branch=master)](https://travis-ci.org/fscherwi/get-user-agent) [![Coverage Status](https://coveralls.io/repos/fscherwi/get-user-agent/badge.svg?branch=master&service=github)](https://coveralls.io/github/fscherwi/get-user-agent?branch=master)

Easily generate a browser user agent!

## Install

```bash
npm install get-user-agent
```

## Example Usage

```javascript
const useragent = require('get-user-agent');

console.log(useragent.firefox(75));
```

## Functions

<dl>
<dt><a href="#chrome">chrome(version, [sysInfo])</a> ⇒ <code>string</code></dt>
<dd><p>Chrome user agent</p>
</dd>
<dt><a href="#chromeAdvanced">chromeAdvanced(version, webkitVersion, [sysInfo])</a> ⇒ <code>string</code></dt>
<dd><p>Chrome user agent with advanced options</p>
</dd>
<dt><a href="#firefox">firefox(version, [sysInfo])</a> ⇒ <code>string</code></dt>
<dd><p>Safari user agent</p>
</dd>
<dt><a href="#firefoxAdvanced">firefoxAdvanced(version, geckoVersion, [sysInfo])</a> ⇒ <code>string</code></dt>
<dd><p>Firefox user agent with advanced options</p>
</dd>
<dt><a href="#opera">opera(version, [sysInfo])</a> ⇒ <code>string</code></dt>
<dd><p>Opera user agent</p>
</dd>
<dt><a href="#operaAdvanced">operaAdvanced(version, prestoVersion, operaVersion, [sysInfo])</a> ⇒ <code>string</code></dt>
<dd><p>Opera user agent with advanced options</p>
</dd>
<dt><a href="#safari">safari(version, [sysInfo])</a> ⇒ <code>string</code></dt>
<dd><p>Safari user agent</p>
</dd>
<dt><a href="#safariAdvanced">safariAdvanced(version, webkitBuildVersion, safariBuildVersion, [sysInfo])</a> ⇒ <code>string</code></dt>
<dd><p>Safari user agent with advanced options</p>
</dd>
</dl>

<a name="chrome"></a>

## chrome(version, [sysInfo]) ⇒ <code>string</code>
Chrome user agent

**Returns**: <code>string</code> - User agent

| Param | Type | Description |
| --- | --- | --- |
| version | <code>number</code> \| <code>string</code> | Browser version |
| sysInfo (optional) | <code>string</code> | System information |

<a name="chromeAdvanced"></a>

## chromeAdvanced(version, webkitVersion, [sysInfo]) ⇒ <code>string</code>
Chrome user agent with advanced options

**Returns**: <code>string</code> - User agent

| Param | Type | Description |
| --- | --- | --- |
| version | <code>number</code> \| <code>string</code> | Browser version |
| webkitVersion | <code>number</code> \| <code>string</code> | Webkit version |
| sysInfo (optional) | <code>string</code> | System information |

<a name="firefox"></a>

## firefox(version, [sysInfo]) ⇒ <code>string</code>
Safari user agent

**Returns**: <code>string</code> - User agent

| Param | Type | Description |
| --- | --- | --- |
| version | <code>number</code> \| <code>string</code> | Browser version |
| sysInfo (optional) | <code>string</code> | System information |

<a name="firefoxAdvanced"></a>

## firefoxAdvanced(version, geckoVersion, [sysInfo]) ⇒ <code>string</code>
Firefox user agent with advanced options

**Returns**: <code>string</code> - User agent

| Param | Type | Description |
| --- | --- | --- |
| version | <code>number</code> \| <code>string</code> | Browser version |
| geckoVersion | <code>number</code> \| <code>string</code> | Gecko version |
| sysInfo (optional) | <code>string</code> | System information |

<a name="opera"></a>

## opera(version, [sysInfo]) ⇒ <code>string</code>
Opera user agent

**Returns**: <code>string</code> - User agent

| Param | Type | Description |
| --- | --- | --- |
| version | <code>number</code> \| <code>string</code> | Browser version |
| sysInfo (optional) | <code>string</code> | System information |

<a name="operaAdvanced"></a>

## operaAdvanced(version, prestoVersion, operaVersion, [sysInfo]) ⇒ <code>string</code>
Opera user agent with advanced options

**Returns**: <code>string</code> - User agent

| Param | Type | Description |
| --- | --- | --- |
| version | <code>number</code> \| <code>string</code> | Browser version |
| prestoVersion | <code>number</code> \| <code>string</code> | Presto version |
| operaVersion | <code>number</code> \| <code>string</code> | Opera version |
| sysInfo (optional) | <code>string</code> | System information |

<a name="safari"></a>

## safari(version, [sysInfo]) ⇒ <code>string</code>
Safari user agent

**Returns**: <code>string</code> - User agent

| Param | Type | Description |
| --- | --- | --- |
| version | <code>number</code> \| <code>string</code> | Browser version |
| sysInfo (optional) | <code>string</code> | System information |

<a name="safariAdvanced"></a>

## safariAdvanced(version, webkitBuildVersion, safariBuildVersion, [sysInfo]) ⇒ <code>string</code>
Safari user agent with advanced options

**Returns**: <code>string</code> - User agent

| Param | Type | Description |
| --- | --- | --- |
| version | <code>number</code> \| <code>string</code> | Browser version |
| webkitBuildVersion | <code>number</code> \| <code>string</code> | Webkit build version |
| safariBuildVersion | <code>number</code> \| <code>string</code> | Safari build version |
| sysInfo (optional) | <code>string</code> | System information |

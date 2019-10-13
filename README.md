# get-user-agent

[![Build Status](https://travis-ci.org/fscherwi/get-user-agent.svg?branch=master)](https://travis-ci.org/fscherwi/get-user-agent) [![Coverage Status](https://coveralls.io/repos/fscherwi/get-user-agent/badge.svg?branch=master&service=github)](https://coveralls.io/github/fscherwi/get-user-agent?branch=master) [![Dependency Status](https://david-dm.org/fscherwi/get-user-agent.svg)](https://david-dm.org/fscherwi/get-user-agent)

Easily generate a browser user-agent!

## Install

```bash
npm install --save get-user-agent
```

## Example Usage

```javascript
const useragent = require('get-user-agent');

console.log(useragent.firefox(62));
```

## Functions

<dl>
<dt><a href="#chrome">chrome(version, sysInfo)</a> ⇒ <code>string</code></dt>
<dd><p>Chrome Useragent</p>
</dd>
<dt><a href="#chromeAdvanced">chromeAdvanced(version, webkitVersion, sysInfo)</a> ⇒ <code>string</code></dt>
<dd><p>Chrome Useragent with advanced options</p>
</dd>
<dt><a href="#firefox">firefox(version, sysInfo)</a> ⇒ <code>string</code></dt>
<dd><p>Safari Useragent</p>
</dd>
<dt><a href="#firefoxAdvanced">firefoxAdvanced(version, geckoVersion, sysInfo)</a> ⇒ <code>string</code></dt>
<dd><p>Firefox Useragent with advanced options</p>
</dd>
<dt><a href="#opera">opera(version, sysInfo)</a> ⇒ <code>string</code></dt>
<dd><p>Opera Useragent</p>
</dd>
<dt><a href="#operaAdvanced">operaAdvanced(version, prestoVersion, operaVersion, sysInfo)</a> ⇒ <code>string</code></dt>
<dd><p>Opera Useragent with advanced options</p>
</dd>
<dt><a href="#safari">safari(version, sysInfo)</a> ⇒ <code>string</code></dt>
<dd><p>Safari Useragent</p>
</dd>
<dt><a href="#safariAdvanced">safariAdvanced(version, webkitBuildVersion, safariBuildVersion, sysInfo)</a> ⇒ <code>string</code></dt>
<dd><p>Safari Useragent with advanced options</p>
</dd>
</dl>

<a name="chrome"></a>

## chrome(version, sysInfo) ⇒ <code>string</code>
Chrome Useragent

**Kind**: global function  
**Returns**: <code>string</code> - Useragent  

| Param | Type | Description |
| --- | --- | --- |
| version | <code>number</code> \| <code>string</code> | Browser version |
| sysInfo | <code>string</code> | System info |

<a name="chromeAdvanced"></a>

## chromeAdvanced(version, webkitVersion, sysInfo) ⇒ <code>string</code>
Chrome Useragent with advanced options

**Kind**: global function  
**Returns**: <code>string</code> - Useragent  

| Param | Type | Description |
| --- | --- | --- |
| version | <code>number</code> \| <code>string</code> | Browser version |
| webkitVersion | <code>number</code> \| <code>string</code> | Webkit version |
| sysInfo | <code>string</code> | System info |

<a name="firefox"></a>

## firefox(version, sysInfo) ⇒ <code>string</code>
Safari Useragent

**Kind**: global function  
**Returns**: <code>string</code> - Useragent  

| Param | Type | Description |
| --- | --- | --- |
| version | <code>number</code> \| <code>string</code> | Browser version |
| sysInfo | <code>string</code> | System info |

<a name="firefoxAdvanced"></a>

## firefoxAdvanced(version, geckoVersion, sysInfo) ⇒ <code>string</code>
Firefox Useragent with advanced options

**Kind**: global function  
**Returns**: <code>string</code> - Useragent  

| Param | Type | Description |
| --- | --- | --- |
| version | <code>number</code> \| <code>string</code> | Browser version |
| geckoVersion | <code>number</code> \| <code>string</code> | Gecko version |
| sysInfo | <code>string</code> | System info |

<a name="opera"></a>

## opera(version, sysInfo) ⇒ <code>string</code>
Opera Useragent

**Kind**: global function  
**Returns**: <code>string</code> - Useragent  

| Param | Type | Description |
| --- | --- | --- |
| version | <code>number</code> \| <code>string</code> | Browser version |
| sysInfo | <code>string</code> | System info |

<a name="operaAdvanced"></a>

## operaAdvanced(version, prestoVersion, operaVersion, sysInfo) ⇒ <code>string</code>
Opera Useragent with advanced options

**Kind**: global function  
**Returns**: <code>string</code> - Useragent  

| Param | Type | Description |
| --- | --- | --- |
| version | <code>number</code> \| <code>string</code> | Browser version |
| prestoVersion | <code>number</code> \| <code>string</code> | Presto version |
| operaVersion | <code>number</code> \| <code>string</code> | Opera version |
| sysInfo | <code>string</code> | System info |

<a name="safari"></a>

## safari(version, sysInfo) ⇒ <code>string</code>
Safari Useragent

**Kind**: global function  
**Returns**: <code>string</code> - Useragent  

| Param | Type | Description |
| --- | --- | --- |
| version | <code>number</code> \| <code>string</code> | Browser version |
| sysInfo | <code>string</code> | System info |

<a name="safariAdvanced"></a>

## safariAdvanced(version, webkitBuildVersion, safariBuildVersion, sysInfo) ⇒ <code>string</code>
Safari Useragent with advanced options

**Kind**: global function  
**Returns**: <code>string</code> - Useragent  

| Param | Type | Description |
| --- | --- | --- |
| version | <code>number</code> \| <code>string</code> | Browser version |
| webkitBuildVersion | <code>number</code> \| <code>string</code> | Webkit build version |
| safariBuildVersion | <code>number</code> \| <code>string</code> | Safari build version |
| sysInfo | <code>string</code> | System info |

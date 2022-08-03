# ProxySettings class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/proxysettings'>Selenium Java</a>
<a href='../../selenium/python_sdk4/proxysettings'>Selenium Python_sdk4</a>
<a href='../../imagesappkit/objectivec/proxysettings'>Imagesappkit Objectivec</a>
<a href='../../puppeteer/javascript/proxysettings'>Puppeteer Javascript</a>
<a href='../../images/java/proxysettings'>Images Java</a>
<a href='../../images/python_sdk4/proxysettings'>Images Python_sdk4</a>
<a href='../../images/javascript/proxysettings'>Images Javascript</a>
<a href='../../images/objectivec/proxysettings'>Images Objectivec</a>
<a href='../../selenium4/javascript/proxysettings'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/proxysettings'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/proxysettings'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/proxysettings'>Nightwatch Javascript</a>
<a href='../../xcui/objectivec/proxysettings'>Xcui Objectivec</a>
<a href='../../protractor/javascript/proxysettings'>Protractor Javascript</a>
<a href='../../appium/java/proxysettings'>Appium Java</a>
<a href='../../wdiogeneric/javascript/proxysettings'>Wdiogeneric Javascript</a>
<a href='../../espresso/java/proxysettings'>Espresso Java</a>
</div></div><br /><br /></div>




An object used to set and retrieve the details of the proxy server used to interact with the Eyes server.

To set a proxy server, create an object of this type and pass it to the [setProxy](./eyes#setproxy-method) method.

Require statement

    const {ProxySettings} = require('@applitools/eyes-images');
    	



### ProxySettings method
#### Syntax


    let proxySettings = new ProxySettings(uri, username, password, isHttpOnly);
    
    let proxySettings = new ProxySettings(uri, username, password);
    
    let proxySettings = new ProxySettings(uri, username);
    
    let proxySettings = new ProxySettings(uri);
    

#### Parameters

uri

Type: 

    string|boolean

The proxy's server URI.

username

Type: string \[Optional \]

The username to be sent to the proxy (default null).

password

Type: string \[Optional \]

The password to be sent to the proxy (default null).

isHttpOnly

Type: boolean \[Optional \]

A value of true specifies that the SDK should communicate with the server using an http tunnel. Use this if your http proxy blocks https communication.

#### Return value

Type:  [ProxySettings](./proxysettings)


### getIsDisabled method
#### Syntax


    proxySettings.getIsDisabled();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type: 

### getIsHttpOnly method
#### Syntax


    proxySettings.getIsHttpOnly();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type: 

### getPassword method
#### Syntax


    proxySettings.getPassword();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type: 

### getUri method
#### Syntax


    proxySettings.getUri();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type: 

### getUsername method
#### Syntax


    proxySettings.getUsername();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type: 

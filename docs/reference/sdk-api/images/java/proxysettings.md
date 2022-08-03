# ProxySettings class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
</div><div class='platform-bar-div'>Language: <b>Java</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

Import statement

    import com.applitools.eyes.ProxySettings;
    	



### ProxySettings method
#### Syntax


    ProxySettings proxySettings = new ProxySettings(uri, port, username, password);
    
    ProxySettings proxySettings = new ProxySettings(uri, port);
    
    ProxySettings proxySettings = new ProxySettings(uri, username, password);
    
    ProxySettings proxySettings = new ProxySettings(uri);
    
    ProxySettings proxySettings = new ProxySettings();
    

#### Parameters

uri

Type: String

The proxy's server URI.

port

Type: int

The proxy's port (default 80).

username

Type: String

The username to be sent to the proxy (default null).

password

Type: String

The password to be sent to the proxy (default null).

#### Return value

Type:  [ProxySettings](./proxysettings)


### getPassword method
#### Syntax


    String value = proxySettings.getPassword();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getPort method
#### Syntax


    int value = proxySettings.getPort();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  int

### getUri method
#### Syntax


    String value = proxySettings.getUri();
    

Note: This method is a static method.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getUsername method
#### Syntax


    String value = proxySettings.getUsername();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

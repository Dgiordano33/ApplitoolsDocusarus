# AbstractProxySettings class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
</div><div class='platform-bar-div'>Language: <b>Objectivec</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

To set a proxy server, create an object of this type and pass it to the [proxy](#proxy-property) method.

Import statement

    @import EyesImages
    	



### initWithUri method
#### Syntax
#### Call syntax

    AbstractProxySettings* proxySettings = [[AbstractProxySettings alloc] initWithUri  : uri port: port username: username password: password   ];
    
    AbstractProxySettings* proxySettings = [[AbstractProxySettings alloc] initWithUri  : uri username: username password: password   ];
    
    AbstractProxySettings* proxySettings = [[AbstractProxySettings alloc] initWithUri  : uri port: port   ];
    

#### Declaration

    (instancetype)initWithUri:(NSString *)uri port:(NSInteger)port

#### Parameters

uri

Type: NSString\*

The proxy's server URI.

port

Type: NSInteger

The proxy's port (default 80).

username

Type: NSString\*_Nullable

The username to be sent to the proxy (default nil).

password

Type: NSString\*_Nullable

The password to be sent to the proxy (default nil).

#### Return value

Type:  [AbstractProxySettings](./proxysettings)\*


### password property
#### Syntax
#### Call syntax

    NSString* value = proxySettings.password
    

#### Declaration

     (readonly, copy, nonatomic, nullable) NSString *password

Type: NSString\*

### port property
#### Syntax
#### Call syntax

    NSInteger value = proxySettings.port
    

#### Declaration

     (readonly, assign, nonatomic) NSInteger port

Type: NSInteger

### uri property
#### Syntax
#### Call syntax

    NSString* value = proxySettings.uri
    

#### Declaration

     (readonly, copy, nonatomic) NSString *uri

Type: NSString\*

### username property
#### Syntax
#### Call syntax

    NSString* value = proxySettings.username
    

#### Declaration

     (readonly, copy, nonatomic, nullable) NSString *username

Type: NSString\*

# DesktopBrowserInfo class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Python_sdk4</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/desktopbrowserinfo'>Selenium Java</a>
<a href='../../selenium/python_sdk4/desktopbrowserinfo'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/desktopbrowserinfo'>Selenium Csharp</a>
<a href='../../puppeteer/javascript/desktopbrowserinfo'>Puppeteer Javascript</a>
<a href='../../selenium4/javascript/desktopbrowserinfo'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/desktopbrowserinfo'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/desktopbrowserinfo'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/desktopbrowserinfo'>Nightwatch Javascript</a>
<a href='../../protractor/javascript/desktopbrowserinfo'>Protractor Javascript</a>
<a href='../../appium/java/desktopbrowserinfo'>Appium Java</a>
<a href='../../wdiogeneric/javascript/desktopbrowserinfo'>Wdiogeneric Javascript</a>
</div></div><br /><br /></div>




Objects of this class are used to configure the Ultrafast Grid to render checkpoints by rendering them on a particular desktop browser.

Import statement

    from applitools.selenium import DesktopBrowserInfo
    	



### DesktopBrowserInfo method
#### Syntax


    obj = DesktopBrowserInfo(width, height, browser_type, baseline_env_name)
    
    obj = DesktopBrowserInfo(width, height, browser_type)
    
    obj = DesktopBrowserInfo(width, height)
    

#### Parameters

width

Type: int

The width of the browser viewport for this target. The maximum viewport width for all browsers is 5120. If this limit is exceeded, then execution of the checkpoint will fail.

height

Type: int

The height of the browser viewport for this target. There is no height limit.

browser_type

Type: [BrowserType](./browsertype) \[Optional : default = BrowserType.CHROME \]

The browser type, a value from the set of supported devices defined by the type [BrowserType](./browsertype).

baseline_env_name

Type: Text \[Optional : default = None \]

The name of the baseline environment. If provided, then the viewport, host app (browser), and OS that define the baseline are defined by the baseline environment name and not by the execution environment. The name should already be defined in the Test Manager. If it is not defined, then it will be created based on the execution environment of the first test that uses that name. For more information see [Running cross-environment tests](https://applitools.com/docs/topics/general-concepts/working-withcross-environment-tests.html).

#### Return value

Type:  None


### platform property
#### Syntax


    value = obj.platform
    

Type: Text

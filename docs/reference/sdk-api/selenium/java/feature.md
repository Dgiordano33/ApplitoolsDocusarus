# Feature enum
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Java</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/feature'>Selenium Java</a>
<a href='../../selenium/python_sdk4/feature'>Selenium Python_sdk4</a>
<a href='../../images/java/feature'>Images Java</a>
<a href='../../images/python_sdk4/feature'>Images Python_sdk4</a>
<a href='../../xcui/objectivec/feature'>Xcui Objectivec</a>
<a href='../../appium/java/feature'>Appium Java</a>
<a href='../../espresso/java/feature'>Espresso Java</a>
</div></div><br /><br /></div>

Enable optional Eyes features by passing values defined by this Enum to [Configuration.setFeatures](./configuration#setfeatures-method). 
###### - NO_SWITCH_WITHOUT_FRAME_CHAIN 
 This option may help in cases where rendering fails because of a clash between the test program's use of the WebDriver to access frames and the SDK's attempt to take a screenshot.

The recommended way to access the Selenium WebDriver is as follows:

    originalWebDriver = new ChromeDriver();
    WebDriver webDriver = eyes.open(originalWebDriver, appName, testName, viewport)
    webDriver.get(url);
    

The code creates a WebDriver instance (originalWebDriver) and passes this to the method [Eyes.open](./eyes#open-method). The method returns a clone of originalWebDriver that the test assigns to the variable webDriver. Thereafter, the program should use webDriver to access Selenium and not originalWebDriver.

This pattern enables Eyes to be aware of changes in the state of the browser, and it can use this information during the screen capture process.

If the test must use the originalWebDriver object and not webDriver, this can cause the screen capture to fail. If this happens, we recommend that you try to eliminate such failures by calling [Configuration.setFeatures](./configuration#setfeatures-method), passing as a parameter the value [Feature.NO_SWITCH_WITHOUT_FRAME_CHAIN](#).

Note that this problem sometimes occurs when the originalWebDriver is used to change the context to an internal frame in the window for some reason. The recomended way to check a nested frame nested is by calling the [SeleniumCheckSettings.frame](./checksettings#frame-method) method, without switching into the frame, as follows:

    eyes.check(Target.frame(frame1Locator)) 
 ###### - USE_PREDEFINED_DEVICE_INFO 
 If this feature is set, then Eyes uses internal information regarding mobile devices instead of the information provided by Appium.

Some versions of Appium have inaccurate information, such as screen size and pixel scale ratio, on certain mobile devices. If you have issues with capturing correct images on a mobile device, try calling [Configuration.setFeatures](./configuration#setfeatures-method), passing a value of [Feature.USE_PREDEFINED_DEVICE_INFO](#), for example:

    suiteConfig.setFeatures(Feature.USE_PREDEFINED_DEVICE_INFO)
    This instructs Eyes to use information stored in Eyes about the mobile devices that have been tested and are known to work correctly. 
 

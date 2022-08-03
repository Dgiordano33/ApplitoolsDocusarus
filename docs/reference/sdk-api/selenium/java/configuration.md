# Configuration class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Java</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/configuration'>Selenium Java</a>
<a href='../../selenium/python_sdk4/configuration'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/configuration'>Selenium Csharp</a>
<a href='../../imagesappkit/objectivec/configuration'>Imagesappkit Objectivec</a>
<a href='../../puppeteer/javascript/configuration'>Puppeteer Javascript</a>
<a href='../../images/java/configuration'>Images Java</a>
<a href='../../images/python_sdk4/configuration'>Images Python_sdk4</a>
<a href='../../images/csharp/configuration'>Images Csharp</a>
<a href='../../images/javascript/configuration'>Images Javascript</a>
<a href='../../images/objectivec/configuration'>Images Objectivec</a>
<a href='../../selenium4/javascript/configuration'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/configuration'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/configuration'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/configuration'>Nightwatch Javascript</a>
<a href='../../xcui/objectivec/configuration'>Xcui Objectivec</a>
<a href='../../protractor/javascript/configuration'>Protractor Javascript</a>
<a href='../../appium/java/configuration'>Appium Java</a>
<a href='../../appium/csharp/configuration'>Appium Csharp</a>
<a href='../../wdiogeneric/javascript/configuration'>Wdiogeneric Javascript</a>
<a href='../../espresso/java/configuration'>Espresso Java</a>
</div></div><br /><br /></div>




This class is used to create a configuration object that is used to configure an [Eyes](./eyes) object by passing it to the [Eyes.setConfiguration](./eyes#setconfiguration-method) method.

You can use this configuration object instead of using the various [Eyes](./eyes) methods and properties that set the same attributes. Typically you set up a Configuration object by calling its setXXXX methods chained with a '.' in a Fluent coding style.

Import statement

    import com.applitools.eyes.selenium.Configuration;
    	



### Configuration method
#### Syntax


    Configuration config = new Configuration();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.


### addBrowser method
#### Syntax


    Configuration configval = config.addBrowser(desktopBrowserInfo);
    
    Configuration configval = config.addBrowser(chromeEmulationInfo);
    
    Configuration configval = config.addBrowser(iosDeviceInfo);
    
    Configuration configval = config.addBrowser(width, height, browserType, baselineEnvName);
    
    Configuration configval = config.addBrowser(width, height, browserType);
    

#### Parameters

desktopBrowserInfo

Type: [DesktopBrowserInfo](./desktopbrowserinfo)

Which desktop browser type and viewport size to use.

Java

    /* test suite setup */  
        suiteConfig = new Configuration() 
            .addBrowser(new DesktopBrowserInfo(viewPortWidth, viewPortHeight, BrowserType.EDGE_CHROMIUM)) 
    /* ... other configurations */  ; 
        /*
         * Assign the configuration to all newly created Eyes instances
         */
        eyes = new Eyes(runner);
        eyes.setConfiguration(suiteConfig);

chromeEmulationInfo

Type: [ChromeEmulationInfo](./chromeemulationinfo)

Which mobile device to emulate and its vertical or horizontal orientation.

Java

    /* test suite setup */  
        suiteConfig = new Configuration() 
            .addBrowser(new ChromeEmulationInfo(DeviceName.Galaxy_S5, ScreenOrientation.LANDSCAPE)) 
    /* ... other configurations */  ; 
        /*
         * Assign the configuration to all newly created Eyes instances
         */
        eyes = new Eyes(runner);
        eyes.setConfiguration(suiteConfig);

iosDeviceInfo

Type: [IosDeviceInfo](./iosdeviceinfo)

Defines the mobile device to be simulated and its vertical or horizontal orientation.

Java

    /* test suite setup */  
        suiteConfig = new Configuration() 
            .addBrowser(new IosDeviceInfo(IosDeviceName.iPhone_11, ScreenOrientation.PORTRAIT)) 
    /* ... other configurations */  ; 
        /*
         * Assign the configuration to all newly created Eyes instances
         */
        eyes = new Eyes(runner);
        eyes.setConfiguration(suiteConfig);

width

Type: int

The width of the browser viewport for this target. The maximum viewport width for all browsers is 5120. If this limit is exceeded, then execution of the checkpoint will fail.

Use this in conjunction with the browserType parameter.

height

Type: int

The height of the browser viewport for this target. There is no height limit.

Use this in conjunction with the browserType parameter.

browserType

Type: [BrowserType](./browsertype)

The type of browser for this target.

Java

    /* test suite setup */  
        suiteConfig = new Configuration() 
            .addBrowser(viewPortWidth, viewPortHeight, BrowserType.CHROME)  
    /* ... other configurations */  ; 
        /*
         * Assign the configuration to all newly created Eyes instances
         */
        eyes = new Eyes(runner);
        eyes.setConfiguration(suiteConfig);

baselineEnvName

Type: String

The name of the baseline environment. If provided, then the viewport, host app (browser), and OS that define the baseline are defined by the baseline environment name and not by the execution environment. The name should already be defined in the Test Manager. If it is not defined, then it will be created based on the execution environment of the first test that uses that name. For more information see [Running cross-environment tests](https://applitools.com/docs/topics/general-concepts/working-withcross-environment-tests.html).

Use this in conjunction with the browserType parameter.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


By default, the entire page is rendered. The viewport width and height parameters impact the baseline that is chosen, unless the baseline environment configuration or parameter has been provided. The viewport passed to the [Eyes.open](#open-method) method does not impact the baseline used, but could impact the page layout if the page has any viewport size-sensitive factors such as HTML, CSS or Javascript.

### addBrowsers method
#### Syntax


    Configuration configval = config.addBrowsers(browserInfos);
    

#### Parameters

browserInfos

Type: IRenderingBrowserInfo...

One or more browser or device configuration definitions passed as an array or multiple parameters.

Define the browser or device configurations using instances of one or more of the following classes:

*   [DesktopBrowserInfo](./desktopbrowserinfo#desktopbrowserinfo-method): to run the test on a desktop browser.
*   [IosDeviceInfo](./iosdeviceinfo#iosdeviceinfo-method): to run the test on a Simulated iOS mobile device.
*   [ChromeEmulationInfo](./chromeemulationinfo#chromeemulationinfo-method): to run the test using on an emulated mobile device.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


You can use this method to pass a list of configurations instead of configuring each browser device individually using multiple calls to [addBrowser](./configuration#addbrowser-method).

#### Example


Java

    /* test suite setup */  
       IRenderingBrowserInfo[] browserList = {
               new DesktopBrowserInfo(viewPortWidth, viewPortHeight, BrowserType.FIREFOX),
               new ChromeEmulationInfo(DeviceName.Galaxy_Note_3, ScreenOrientation.LANDSCAPE),
               new IosDeviceInfo(IosDeviceName.iPhone_8, ScreenOrientation.PORTRAIT)
       };
        suiteConfig = new Configuration() 
            .addBrowsers(browserList) 
    /* ... other configurations */  ; 
       /*
        * Assign the configuration to all newly created Eyes instances
        */
       eyes = new Eyes(runner);
       eyes.setConfiguration(suiteConfig);

### addDeviceEmulation method
#### Syntax


    Configuration configval = config.addDeviceEmulation(deviceName, orientation);
    
    Configuration configval = config.addDeviceEmulation(deviceName);
    
    Configuration configval = config.addDeviceEmulation(deviceName, baselineEnvName);
    
    Configuration configval = config.addDeviceEmulation(deviceName, orientation, baselineEnvName);
    

#### Parameters

deviceName

Type: [DeviceName](./devicename)

The name of the device, from the list of devices defined by [DeviceName](./devicename).

orientation

Type: [ScreenOrientation](./screenorientation)

Whether the device is in portrait or landscape mode.

baselineEnvName

Type: String

The name of the baseline environment. If provided, then the viewport, host app (browser), and OS that define the baseline are defined by the baseline environment name and not by the execution environment. The name should already be defined in the Test Manager. If it is not defined, then it will be created based on the execution environment of the first test that uses that name. For more information see [Running cross-environment tests](https://applitools.com/docs/topics/general-concepts/working-withcross-environment-tests.html).

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### getAccessibilityValidation method
#### Syntax


    AccessibilitySettings configval = config.getAccessibilityValidation();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [AccessibilitySettings](./accessibilitysettings)

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### getAgentId method
#### Syntax


    String configval = config.getAgentId();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getApiKey method
#### Syntax


    String configval = config.getApiKey();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getAppName method
#### Syntax


    String configval = config.getAppName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getBaselineBranchName method
#### Syntax


    String configval = config.getBaselineBranchName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getBaselineEnvName method
#### Syntax


    String configval = config.getBaselineEnvName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getBatch method
#### Syntax


    BatchInfo configval = config.getBatch();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [BatchInfo](./batchinfo)

### getBranchName method
#### Syntax


    String configval = config.getBranchName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getDeviceInfo method
#### Syntax


    String configval = config.getDeviceInfo();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getForceFullPageScreenshot method
#### Syntax


    Boolean configval = config.getForceFullPageScreenshot();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  Boolean

### getHideCaret method
#### Syntax


    boolean configval = config.getHideCaret();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getHideScrollbars method
#### Syntax


    boolean configval = config.getHideScrollbars();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getHostApp method
#### Syntax


    String configval = config.getHostApp();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getHostOS method
#### Syntax


    String configval = config.getHostOS();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getHostingAppInfo method
#### Syntax


    String configval = config.getHostingAppInfo();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getIgnoreCaret method
#### Syntax


    boolean configval = config.getIgnoreCaret();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getIgnoreDisplacements method
#### Syntax


    boolean configval = config.getIgnoreDisplacements();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getMatchLevel method
#### Syntax


    MatchLevel configval = config.getMatchLevel();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [MatchLevel](./matchlevel)

#### Remarks


For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### getMatchTimeout method
#### Syntax


    int configval = config.getMatchTimeout();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  int

### getOsInfo method
#### Syntax


    String configval = config.getOsInfo();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getParentBranchName method
#### Syntax


    String configval = config.getParentBranchName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getProxy method
#### Syntax


    AbstractProxySettings configval = config.getProxy();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  AbstractProxySettings

The value returned is a [ProxySettings](./proxysettings) object or null if no proxy is set.

### getSaveDiffs method
#### Syntax


    Boolean configval = config.getSaveDiffs();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  Boolean

### getSaveNewTests method
#### Syntax


    boolean configval = config.getSaveNewTests();
    

Note: This method is a static method.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getServerUrl method
#### Syntax


    URI configval = config.getServerUrl();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  URI

### getStitchMode method
#### Syntax


    StitchMode configval = config.getStitchMode();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [StitchMode](./stitchmode)

### getStitchOverlap method
#### Syntax


    int configval = config.getStitchOverlap();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  int

### getTestName method
#### Syntax


    String configval = config.getTestName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getViewportSize method
#### Syntax


    RectangleSize configval = config.getViewportSize();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [RectangleSize](./rectanglesize)

### getVisualGridOptions method
#### Syntax


    List<VisualGridOption> configval = config.getVisualGridOptions();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  List<[VisualGridOption](./visualgridoption)\>

### getWaitBeforeScreenshots method
#### Syntax


    int configval = config.getWaitBeforeScreenshots();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  int

### isSendDom method
#### Syntax


    Boolean configval = config.isSendDom();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  Boolean

### setAccessibilityValidation method
#### Syntax


    Configuration configval = config.setAccessibilityValidation(accessibilitySettings);
    

#### Parameters

accessibilitySettings

Type: [AccessibilitySettings](./accessibilitysettings)

The required accessibility settings. A value of null will disable accessibility checking.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### setAgentId method
#### Syntax


    Configuration configval = config.setAgentId(agentId);
    

#### Parameters

agentId

Type: String

The agent id to be configured.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setApiKey method
#### Syntax


    Configuration configval = config.setApiKey(apiKey);
    

#### Parameters

apiKey

Type: String

A string that is your API Key.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


Set this immediately after the Eyes object is created (before calling [open](#open-method)). If you have an environment variable called APPLITOOLS_API_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value.

### setAppName method
#### Syntax


    Configuration configval = config.setAppName(appName);
    

#### Parameters

appName

Type: String

The application name to be configured for the test.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


If you call this method, it must be called before the call to [Eyes.open](#open-method). In the call to [Eyes.open](#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used.

### setBaselineBranchName method
#### Syntax


    Configuration configval = config.setBaselineBranchName(baselineBranchName);
    

#### Parameters

baselineBranchName

Type: String

The baseline branch name to be configured.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setBaselineEnvName method
#### Syntax


    Configuration configval = config.setBaselineEnvName(baselineEnvName);
    

#### Parameters

baselineEnvName

Type: String

The name of the baseline environment.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setBatch method
#### Syntax


    Configuration configval = config.setBatch(batch);
    

#### Parameters

batch

Type: [BatchInfo](./batchinfo)

An object that defines the batch configuration.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setBranchName method
#### Syntax


    Configuration configval = config.setBranchName(branchName);
    

#### Parameters

branchName

Type: String

The branch name to be used by the configuration.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setBrowsersInfo method
#### Syntax


    Configuration configval = config.setBrowsersInfo(browsersInfo);
    

#### Parameters

browsersInfo

Type: List<[RenderBrowserInfo](./renderbrowserinfo)\>

List of objects that define browsers and emulated devices to be rendered.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setDeviceInfo method
#### Syntax


    Configuration configval = config.setDeviceInfo(deviceInfo);
    

#### Parameters

deviceInfo

Type: String

The name of the device - this is displayed in the Device column in the Test Manager.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setFeatures method
#### Syntax


    Configuration configval = config.setFeatures(feature, features);
    

#### Parameters

feature

Type: [Feature](./feature)

One or more features to set.

features

Type: [Feature](./feature)...

One or more features to set.

#### Return value

Type:  [Configuration](./configuration)

#### Remarks


The following values may be passed to this method:

[USE_PREDEFINED_DEVICE_INFO](./feature)

If this feature is set, then Eyes uses internal information regarding mobile devices instead of the information provided by Appium.

Some versions of Appium have inaccurate information, such as screen size and pixel scale ratio, on certain mobile devices. If you have issues with capturing correct images on a mobile device, try calling [Configuration.setFeatures](#), passing a value of [Feature.USE_PREDEFINED_DEVICE_INFO](./feature), for example:

    suiteConfig.setFeatures(Feature.USE_PREDEFINED_DEVICE_INFO)
    This instructs Eyes to use information stored in Eyes about the mobile devices that have been tested and are known to work correctly.

[NO_SWITCH_WITHOUT_FRAME_CHAIN](./feature)

This option may help in cases where rendering fails because of a clash between the test program's use of the WebDriver to access frames and the SDK's attempt to take a screenshot.

The recommended way to access the Selenium WebDriver is as follows:

    originalWebDriver = new ChromeDriver();
    WebDriver webDriver = eyes.open(originalWebDriver, appName, testName, viewport)
    webDriver.get(url);
    

The code creates a WebDriver instance (originalWebDriver) and passes this to the method [Eyes.open](#open-method). The method returns a clone of originalWebDriver that the test assigns to the variable webDriver. Thereafter, the program should use webDriver to access Selenium and not originalWebDriver.

This pattern enables Eyes to be aware of changes in the state of the browser, and it can use this information during the screen capture process.

If the test must use the originalWebDriver object and not webDriver, this can cause the screen capture to fail. If this happens, we recommend that you try to eliminate such failures by calling [Configuration.setFeatures](#), passing as a parameter the value [Feature.NO_SWITCH_WITHOUT_FRAME_CHAIN](./feature).

Note that this problem sometimes occurs when the originalWebDriver is used to change the context to an internal frame in the window for some reason. The recomended way to check a nested frame nested is by calling the [SeleniumCheckSettings.frame](#frame-method) method, without switching into the frame, as follows:

    eyes.check(Target.frame(frame1Locator))

### setForceFullPageScreenshot method
#### Syntax


    Configuration configval = config.setForceFullPageScreenshot(forceFullPageScreenshot);
    

#### Parameters

forceFullPageScreenshot

Type: boolean

If this paramter has a value of true, then Eyes will do scrolling and stitching if necessary. If false, then the result is browser dependent.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setHideCaret method
#### Syntax


    Configuration configval = config.setHideCaret(hideCaret);
    

#### Parameters

hideCaret

Type: boolean

If this paramter has a value of true, then the cursor will be hidden before the image is captured.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


We recommend using this method instead of [Eyes.setIgnoreCaret](./eyes#setignorecaret-method), [Configuration.setIgnoreCaret](./configuration#setignorecaret-method) or [SeleniumCheckSettings.ignoreCaret](./checksettings#ignorecaret-method), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them.

### setHideScrollbars method
#### Syntax


    Configuration configval = config.setHideScrollbars(hideScrollbars);
    

#### Parameters

hideScrollbars

Type: boolean

If set to true then hide the scrollbars. Otherwise, don't hide the scrollbars.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setHostApp method
#### Syntax


    Configuration configval = config.setHostApp(hostApp);
    

#### Parameters

hostApp

Type: String

The value to be used for the Host App property.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setHostOS method
#### Syntax


    Configuration configval = config.setHostOS(hostOS);
    

#### Parameters

hostOS

Type: String

The value to be used for the Host OS Property.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setHostingAppInfo method
#### Syntax


    Configuration configval = config.setHostingAppInfo(hostingAppInfo);
    

#### Parameters

hostingAppInfo

Type: String

hostappinfo.params.sethostappinfo

#### Return value

Type:  [Configuration](./configuration)

### setIgnoreCaret method
#### Syntax


    Configuration configval = config.setIgnoreCaret(value);
    

#### Parameters

value

Type: boolean

If set to true, then Eyes does extra processing to eliminate artifacts introduced by blinking cursors.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


We recommend using [setHideCaret](./eyes#sethidecaret-method) or [setHideCaret](./configuration#sethidecaret-method) since this eliminates cursor related artifacts instead of detecting and ignoring them.

### setIgnoreDisplacements method
#### Syntax


    Configuration configval = config.setIgnoreDisplacements(isIgnoreDisplacements);
    

#### Parameters

isIgnoreDisplacements

Type: boolean

If a value of true is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


Ignore displacements is only active when using a Match level of [STRICT](./matchlevel) or [CONTENT](./matchlevel)

### setLayoutBreakpoints method
#### Syntax


    Configuration configval = config.setLayoutBreakpoints(shouldSet);
    
    Configuration configval = config.setLayoutBreakpoints(breakpoints);
    

#### Parameters

shouldSet

Type: boolean

Pass a value of true to enable this feature.

breakpoints

Type: int...

Pass one or more viewport widths explicitly, and the JavaScript is executed and the DOM is extracted for each viewport width. For each target, the Ultrafast Grid uses the DOM extracted with the widest viewport that is smaller than the viewport width. For example, if the values 640, 768 and 1024 are passed, then targets with a width between 640 and 767 (inclusive) use the DOM extracted at 640. Similarly, targets between 768 and 1023 use the DOM extracted at 768. Targets that have a width smaller than the smallest defined width use a DOM extracted at one less than the smallest DOM width (639 in this example). Targets that have a width larger than the largest width defined (1024 in this example) use the DOM extracted at the largest width. If no width is specified, then a separate DOM is extracted for each distinct execution environment viewport width.

#### Return value

Type:  [Configuration](./configuration)

#### Remarks


This method sets the default for all checkpoints on all tests that are configured using this Configuration object. This default can be overridden for a specific checkpoint by using the [SeleniumCheckSettings.layoutBreakpoints](./checksettings#layoutbreakpoints-method) method.

### setMatchLevel method
#### Syntax


    Configuration configval = config.setMatchLevel(matchLevel);
    

#### Parameters

matchLevel

Type: [MatchLevel](./matchlevel)

Available match level values are:

*   [NONE](./matchlevel)
*   [STRICT](./matchlevel)
*   [LAYOUT](./matchlevel)
*   [CONTENT](./matchlevel)
*   [EXACT](./matchlevel)

For a description of these match levels and the different ways to apply them to tests, checkpoints, and regions, see [Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### setMatchTimeout method
#### Syntax


    Configuration configval = config.setMatchTimeout(matchTimeout);
    

#### Parameters

matchTimeout

Type: int

The timeout to set in milliseconds.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


You can overide the default timeout set by this method for a specific set checkpoint by passing a timeout to one of the check_XXXX methods that support a timeout parameter, e.g. [`checkWindow`](./eyes#checkwindow-method)You can also overide the timeout for a specific test using the check fluent [`timeout method`](#timeout-method)

### setOsInfo method
#### Syntax


    Configuration configval = config.setOsInfo(osInfo);
    

#### Parameters

osInfo

Type: String

The value to be displayed in the OS column of the Test Results page of the Test Manager.

#### Return value

Type:  [Configuration](./configuration)

### setParentBranchName method
#### Syntax


    Configuration configval = config.setParentBranchName(parentBranchName);
    

#### Parameters

parentBranchName

Type: String

The parent branch name to be configured.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setProxy method
#### Syntax


    Configuration configval = config.setProxy(proxy);
    

#### Parameters

proxy

Type: AbstractProxySettings

An object created from the [ProxySettings](./proxysettings) class that contains the user name, password, URI and port.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setSaveDiffs method
#### Syntax


    Configuration configval = config.setSaveDiffs(saveDiffs);
    

#### Parameters

saveDiffs

Type: Boolean

Set to true to configure Save Diffs functionality.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setSaveNewTests method
#### Syntax


    Configuration configval = config.setSaveNewTests(saveNewTests);
    

#### Parameters

saveNewTests

Type: boolean

If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior).

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setSendDom method
#### Syntax


    Configuration configval = config.setSendDom(sendDom);
    

#### Parameters

sendDom

Type: boolean

A value of true means that DOM information will be sent. A value of false means that DOM information will not be sent.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


Sending DOM information is enabed by default, so use this method only if you have to disable it.

### setServerUrl method
#### Syntax


    Configuration configval = config.setServerUrl(serverUrl);
    

#### Parameters

serverUrl

Type: String

The URL of the Eyes server. Pass a value of null to use the default cloud server.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setStitchMode method
#### Syntax


    Configuration configval = config.setStitchMode(stitchMode);
    

#### Parameters

stitchMode

Type: [StitchMode](./stitchmode)

The stitch mode to use.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setStitchOverlap method
#### Syntax


    Configuration configval = config.setStitchOverlap(stitchOverlap);
    

#### Parameters

stitchOverlap

Type: int

The width of the stitch overlap in pixels.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setTestName method
#### Syntax


    Configuration configval = config.setTestName(testName);
    

#### Parameters

testName

Type: String

The test name to be configured for the test.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setViewportSize method
#### Syntax


    Configuration configval = config.setViewportSize(viewportSize);
    

#### Parameters

viewportSize

Type: [RectangleSize](./rectanglesize)

An object that defines the width and height of the test browser viewport in pixels.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setVisualGridOptions method
#### Syntax


    Configuration configval = config.setVisualGridOptions(option, options);
    

#### Parameters

option

Type: [VisualGridOption](./visualgridoption)

The first configuration option for the Ultrafast Grid.

options

Type: [VisualGridOption](./visualgridoption)...

Optional additional configuration options for the Ultrafast Grid.

#### Return value

Type:  [Configuration](./configuration)

#### Remarks


The following configuration key/value pairs are currently supported:

'chromeHeadless'

Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of false to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

'polyfillAdoptedStyleSheets'

Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option polyfillAdoptedStyleSheets to a value of true or false:

*   Setting a value of true instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
*   Setting a value of false instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.setVisualGridOptions](#)

You can override the global value for a given checkpoint using the method [SeleniumCheckSettings.visualGridOptions](./checksettings#visualgridoptions-method).

#### Example


Java

    /* test suite setup */  
        suiteConfig = new Configuration() 
                .setVisualGridOptions(new VisualGridOption("polyfillAdoptedStyleSheets", true))   
    /* ... other configurations */  ; 
        /*
         * Assign the configuration to all newly created Eyes instances
         */
        eyes = new Eyes(runner);
        eyes.setConfiguration(suiteConfig);

### setWaitBeforeScreenshots method
#### Syntax


    Configuration configval = config.setWaitBeforeScreenshots(waitBeforeScreenshots);
    

#### Parameters

waitBeforeScreenshots

Type: int

The time to wait in milliseconds. Passing a value of less than or equal to zero will cause the default value to be used.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

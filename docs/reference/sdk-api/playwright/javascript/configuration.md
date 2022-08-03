# Configuration class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Playwright</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

You can use this configuration object instead of using the various [Eyes](./eyes) methods and properties that set the same attributes. Typically you set up a Configuration object by calling its setXXXX methods chained with a '.' in a Fluent coding style. In this class, some attributes can be set by both a property and a set command. The properties allow you simple direct access to assign to and retrieve the attribute. The corresponding set method allows you to set multiple attributes using a Fluent style.



### Configuration method
#### Syntax


    let config = new Configuration();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.


### agentId property
#### Syntax


    config.agentId = configval;
    configval = config.agentId;
    

Type: string

The agent id to be configured.

### apiKey property
#### Syntax


    config.apiKey = configval;
    configval = config.apiKey;
    

Type: string

A string that is your API Key.

#### Remarks


Set this immediately after the Eyes object is created (before calling [open](#open-method)). If you have an environment variable called APPLITOOLS_API_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value.

### appName property
#### Syntax


    config.appName = configval;
    configval = config.appName;
    

Type: string

The application name to be configured for the test.

#### Remarks


If you call this method, it must be called before the call to [Eyes.open](#open-method). In the call to [Eyes.open](#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used.

### baselineBranchName property
#### Syntax


    config.baselineBranchName = configval;
    configval = config.baselineBranchName;
    

Type: string

The baseline branch name to be configured.

### baselineEnvName property
#### Syntax


    config.baselineEnvName = configval;
    configval = config.baselineEnvName;
    

Type: string

The name of the baseline environment.

### batch property
#### Syntax


    config.batch = configval;
    configval = config.batch;
    

Type: [BatchInfoPlain](./batchinfoplain)

An object that defines the batch configuration.

### branchName property
#### Syntax


    config.branchName = configval;
    configval = config.branchName;
    

Type: string

The branch name to be used by the configuration.

### browsersInfo property
#### Syntax


    let suiteConfig = {
      browsersInfo: [
        { height: value1_number, width: value2_number, name: "chrome" },
        { deviceName: "Galaxy Note 3", screenOrientation: "landscape" },
        {
          deviceName: "iPad (7th generation)",
          iosVersion: "latest",
          screenOrientation: "portrait",
        },
      ],
    };
    eyes.setConfiguration(suiteConfig);
    

Type: 

    (DesktopBrowserInfo|ChromeEmulationInfo|IOSDeviceInfo)[]

### forceFullPageScreenshot property
#### Syntax


    config.forceFullPageScreenshot = configval;
    configval = config.forceFullPageScreenshot;
    

Type: boolean

### hideCaret property
#### Syntax


    config.hideCaret = configval;
    configval = config.hideCaret;
    

Type: boolean

If this paramter has a value of true, then the cursor will be hidden before the image is captured.

#### Remarks


We recommend using this method instead of [Eyes.setIgnoreCaret](./eyes#setignorecaret-method), [Configuration.setIgnoreCaret](./configuration#setignorecaret-method) or [CheckSettings.ignoreCaret](./checksettings#ignorecaret-method), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them.

### hideScrollbars property
#### Syntax


    config.hideScrollbars = configval;
    configval = config.hideScrollbars;
    

Type: boolean

If set to true then hide the scrollbars. Otherwise, don't hide the scrollbars.

### hostApp property
#### Syntax


    config.hostApp = configval;
    configval = config.hostApp;
    

Type: string

The value to be used for the Host App property.

### hostAppInfo property
#### Syntax


    config.hostAppInfo = configval;
    configval = config.hostAppInfo;
    

Type: string

### hostOS property
#### Syntax


    config.hostOS = configval;
    configval = config.hostOS;
    

Type: string

The value to be used for the Host OS Property.

### hostOSInfo property
#### Syntax


    config.hostOSInfo = configval;
    configval = config.hostOSInfo;
    

Type: string

### matchTimeout property
#### Syntax


    config.matchTimeout = configval;
    configval = config.matchTimeout;
    

Type: number

The timeout to set in milliseconds.

#### Remarks


You can overide the default timeout set by this method for a specific set checkpoint by passing a timeout to one of the check_XXXX methods that support a timeout parameter, e.g. [`eyes.checkwindow (not yet available in playwright javascript)`](#)You can also overide the timeout for a specific test using the check fluent [`timeout method`](#timeout-method)

### parentBranchName property
#### Syntax


    config.parentBranchName = configval;
    configval = config.parentBranchName;
    

Type: string

The parent branch name to be configured.

### properties property
#### Syntax


    config.properties = configval;
    configval = config.properties;
    

Type: [PropertyDataPlain](./propertydataplain)\[\]

#### Remarks


*   Set multiple properties by calling [Eyes.addProperty](./eyes#addproperty-method) or [Configuration.addProperty](./configuration#addproperty-method) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run.
*   You can also associate properties with a batch using [BatchInfo.addProperty](./batchinfo#addproperty-method).

### rotation property
#### Syntax


    config.rotation = configval;
    configval = config.rotation;
    

Type: ImageRotationPlain

#### Type definitions

ImageRotationPlain

The legal values that an image may be rotated by. This may have the following values: \-270|-180|-90|0|90|180|270

The number of degrees to rotate.

### saveDiffs property
#### Syntax


    config.saveDiffs = configval;
    configval = config.saveDiffs;
    

Type: boolean

Set to true to configure Save Diffs functionality.

### saveNewTests property
#### Syntax


    config.saveNewTests = configval;
    configval = config.saveNewTests;
    

Type: boolean

If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior).

### sendDom property
#### Syntax


    config.sendDom = configval;
    configval = config.sendDom;
    

Type: boolean

A value of true means that DOM information will be sent. A value of false means that DOM information will not be sent.

#### Remarks


Sending DOM information is enabed by default, so use this method only if you have to disable it.

### serverUrl property
#### Syntax


    config.serverUrl = configval;
    configval = config.serverUrl;
    

Type: string

The URL of the Eyes server. Pass a value of null to use the default cloud server.

### stitchMode property
#### Syntax


    config.stitchMode = configval;
    configval = config.stitchMode;
    

Type: 

    StitchMode|'Scroll'|'CSS'

The stitch mode to use.

### stitchOverlap property
#### Syntax


    config.stitchOverlap = configval;
    configval = config.stitchOverlap;
    

Type: number

The width of the stitch overlap in pixels.

### testName property
#### Syntax


    config.testName = configval;
    configval = config.testName;
    

Type: string

The test name to be configured for the test.

### viewportSize property
#### Syntax


    config.viewportSize = configval;
    configval = config.viewportSize;
    

Type: [RectangleSizePlain](./rectanglesizeplain)

An object that defines the width and height of the test browser viewport in pixels.

### visualGridOptions property
#### Syntax


    config.visualGridOptions = configval;
    configval = config.visualGridOptions;
    

Type: 

    { [key: string]: any };
    

#### Remarks


The following configuration key/value pairs are currently supported:

'chromeHeadless'

Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of false to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

'polyfillAdoptedStyleSheets'

Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option polyfillAdoptedStyleSheets to a value of true or false:

*   Setting a value of true instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
*   Setting a value of false instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.setVisualGridOption](./configuration#visualgridoptions-property)

You can override the global value for a given checkpoint using the method [CheckSettings.visualGridOption](./checksettings#visualGridOption-method).

### waitBeforeScreenshots property
#### Syntax


    config.waitBeforeScreenshots = configval;
    configval = config.waitBeforeScreenshots;
    

Type: number

The time to wait in milliseconds. Passing a value of less than or equal to zero will cause the default value to be used.


### addBrowser method
#### Syntax


    let configval = config.addBrowser(browserInfo_dsktp);
    
    let configval = config.addBrowser(browserInfo_chrm);
    
    let configval = config.addBrowser(browserInfo_ios);
    
    let configval = config.addBrowser(browserInfo_obj);
    
    let configval = config.addBrowser(width, height, name);
    
    let configval = config.addBrowser(width, height);
    

#### Parameters

browserInfo_dsktp

Type: [DesktopBrowserInfo](./desktopbrowserinfo)

An object that defines the attributes of the browser and the viewport.

[DesktopBrowserInfo](./desktopbrowserinfo)

browserInfo_chrm

Type: [ChromeEmulationInfo](./chromeemulationinfo)

An object that defines the attributes of the browser and the viewport.

[ChromeEmulationInfo](./chromeemulationinfo)

browserInfo_ios

Type: [IOSDeviceInfo](./iosdeviceinfo)

An object that defines the attributes of the browser and the viewport.

[IOSDeviceInfo](./iosdeviceinfo)

browserInfo_obj

Type: {
      deviceName: DeviceName | undefined;
      screenOrientation?: ScreenOrientation | undefined;
    }; 

An object that defines the attributes of the browser and the viewport.

    {
      deviceName: DeviceName | undefined;
      screenOrientation?: ScreenOrientation | undefined;
    }; 

width

Type: number

The width of the browser viewport for this target. The maximum viewport width for all browsers is 5120. If this limit is exceeded, then execution of the checkpoint will fail.

Use this in conjunction with the parameter.

height

Type: number

The height of the browser viewport for this target. There is no height limit.

Use this in conjunction with the parameter.

name

Type: [BrowserType](./browsertype) \[Optional \]

The type of browser for this target.

JavaScript

        suiteConfig = new Configuration() 
            .addBrowser(viewPortWidth, viewPortHeight, BrowserType.CHROME)  
    /* ... other configurations */  ; 
        /*
         * Assign the configuration to all newly created Eyes instances
         */
        eyes = new Eyes(runner);
        eyes.setConfiguration(suiteConfig);

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


By default, the entire page is rendered. The viewport width and height parameters impact the baseline that is chosen, unless the baseline environment configuration has been provided. The viewport passed to the [Eyes.open](#open-method) method does not impact the baseline used, but could impact the page layout if the page has any viewport size-sensitive factors such as HTML, CSS or Javascript.

### addBrowsers method
#### Syntax


    let configval = config.addBrowsers(browsersInfo);
    

#### Parameters

browsersInfo

Type: (
      | DesktopBrowserInfo
      | ChromeEmulationInfo
      | IOSDeviceInfo
      | {
          deviceName: DeviceName | undefined;
          screenOrientation?: ScreenOrientation | undefined;
        }
    )[]; 

One or more browser or device configuration definitions passed as an array or multiple parameters.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


You can use this method to pass a list of configurations instead of configuring each browser device individually using multiple calls to [addBrowser](./configuration#addbrowser-method).

### addDeviceEmulation method
#### Syntax


    let configval = config.addDeviceEmulation(deviceName, screenOrientation);
    
    let configval = config.addDeviceEmulation(deviceName);
    

#### Parameters

deviceName

Type: [DeviceName](./devicename)

The name of the device, from the list of devices defined by [DeviceName](./devicename).

screenOrientation

Type: [ScreenOrientation](./screenorientation) \[Optional \]

Whether the device is in portrait or landscape mode.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### addProperty method
#### Syntax


    let configval = config.addProperty(name, value);
    
    let configval = config.addProperty(prop);
    

#### Parameters

name

Type: string

The name of the property.

value

Type: string

The value associated with the name.

prop

Type: [PropertyDataPlain](./propertydataplain)

[PropertyDataPlain](./propertydataplain)

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


*   Set multiple properties by calling [Eyes.addProperty](./eyes#addproperty-method) or [Configuration.addProperty](#) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run.
*   You can also associate properties with a batch using [BatchInfo.addProperty](./batchinfo#addproperty-method).

### clearProperties method
#### Syntax


    let configval = config.clearProperties();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [Configuration](./configuration)

### getAccessibilityValidation method
#### Syntax


    let configval = config.getAccessibilityValidation();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [AccessibilitySettings](./accessibilitysettings)

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### getAgentId method
#### Syntax


    let configval = config.getAgentId();
    config.agentId = configval;
    configval = config.agentId;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getApiKey method
#### Syntax


    let configval = config.getApiKey();
    config.apiKey = configval;
    configval = config.apiKey;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getAppName method
#### Syntax


    let configval = config.getAppName();
    config.appName = configval;
    configval = config.appName;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getBaselineBranchName method
#### Syntax


    let configval = config.getBaselineBranchName();
    config.baselineBranchName = configval;
    configval = config.baselineBranchName;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getBaselineEnvName method
#### Syntax


    let configval = config.getBaselineEnvName();
    config.baselineEnvName = configval;
    configval = config.baselineEnvName;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getBatch method
#### Syntax


    let configval = config.getBatch();
    config.batch = configval;
    configval = config.batch;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [BatchInfo](./batchinfo)

### getBranchName method
#### Syntax


    let configval = config.getBranchName();
    config.branchName = configval;
    configval = config.branchName;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getDeviceInfo method
#### Syntax


    let configval = config.getDeviceInfo();
    config.deviceInfo = configval;
    configval = config.deviceInfo;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getForceFullPageScreenshot method
#### Syntax


    let configval = config.getForceFullPageScreenshot();
    config.forceFullPageScreenshot = configval;
    configval = config.forceFullPageScreenshot;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getHideCaret method
#### Syntax


    let configval = config.getHideCaret();
    config.hideCaret = configval;
    configval = config.hideCaret;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getHideScrollbars method
#### Syntax


    let configval = config.getHideScrollbars();
    config.hideScrollbars = configval;
    configval = config.hideScrollbars;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getHostApp method
#### Syntax


    let configval = config.getHostApp();
    config.hostApp = configval;
    configval = config.hostApp;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getHostOS method
#### Syntax


    let configval = config.getHostOS();
    config.hostOS = configval;
    configval = config.hostOS;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getIgnoreCaret method
#### Syntax


    let configval = config.getIgnoreCaret();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getIgnoreDisplacements method
#### Syntax


    let configval = config.getIgnoreDisplacements();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getIsDisabled method
#### Syntax


    let configval = config.getIsDisabled();
    config.getIsDisabled = configval;
    configval = config.getIsDisabled;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

If true, then all calls to Eyes are ignored, if false then all calls to Eyes work as usual.

### getMatchLevel method
#### Syntax


    let configval = config.getMatchLevel();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [MatchLevel](./matchlevel)

#### Remarks


For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### getMatchTimeout method
#### Syntax


    let configval = config.getMatchTimeout();
    config.matchTimeout = configval;
    configval = config.matchTimeout;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  number

### getParentBranchName method
#### Syntax


    let configval = config.getParentBranchName();
    config.parentBranchName = configval;
    configval = config.parentBranchName;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getProperties method
#### Syntax


    let configval = config.getProperties();
    config.properties = configval;
    configval = config.properties;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [PropertyData](./propertydata)\[\]

### getProxy method
#### Syntax


    let configval = config.getProxy();
    config.proxy = configval;
    configval = config.proxy;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [ProxySettings](./proxysettings)

### getRotation method
#### Syntax


    let configval = config.getRotation();
    config.rotation = configval;
    configval = config.rotation;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [ImageRotation](./imagerotation)

### getSaveDiffs method
#### Syntax


    let configval = config.getSaveDiffs();
    config.saveDiffs = configval;
    configval = config.saveDiffs;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getSaveNewTests method
#### Syntax


    let configval = config.getSaveNewTests();
    config.saveNewTests = configval;
    configval = config.saveNewTests;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getScaleRatio method
#### Syntax


    let configval = config.getScaleRatio();
    config.scaleRatio = configval;
    configval = config.scaleRatio;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  number

### getScrollRootElement method
#### Syntax


    let configval = config.getScrollRootElement();
    config.scrollRootElement = configval;
    configval = config.scrollRootElement;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type: 

    ElementHandle|Selector

Returns the value most recently set using [Configuration.setScrollRootElement](./configuration#setscrollrootelement-method), or returns an undefined value if this method was not called.

### getSendDom method
#### Syntax


    let configval = config.getSendDom();
    config.sendDom = configval;
    configval = config.sendDom;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getServerUrl method
#### Syntax


    let configval = config.getServerUrl();
    config.serverUrl = configval;
    configval = config.serverUrl;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getStitchMode method
#### Syntax


    let configval = config.getStitchMode();
    config.stitchMode = configval;
    configval = config.stitchMode;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [StitchMode](./stitchmode)

### getStitchOverlap method
#### Syntax


    let configval = config.getStitchOverlap();
    config.stitchOverlap = configval;
    configval = config.stitchOverlap;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  number

### getTestName method
#### Syntax


    let configval = config.getTestName();
    config.testName = configval;
    configval = config.testName;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getViewportSize method
#### Syntax


    let configval = config.getViewportSize();
    config.viewportSize = configval;
    configval = config.viewportSize;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [RectangleSize](./rectanglesize)

### getVisualGridOptions method
#### Syntax


    let configval = config.getVisualGridOptions();
    config.visualGridOptions = configval;
    configval = config.visualGridOptions;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type: { [key: string]: any };

### getWaitBeforeScreenshots method
#### Syntax


    let configval = config.getWaitBeforeScreenshots();
    config.waitBeforeScreenshots = configval;
    configval = config.waitBeforeScreenshots;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  number

### setAccessibilityValidation method
#### Syntax


    let configval = config.setAccessibilityValidation(accessibilityValidation);
    

#### Parameters

accessibilityValidation

Type: [AccessibilitySettings](./accessibilitysettings)

The required accessibility settings. A value of null will disable accessibility checking.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### setAgentId method
#### Syntax


    let configval = config.setAgentId(agentId);
    config.agentId = configval;
    configval = config.agentId;
    

Note that this feature is available as both a method and a property.

#### Parameters

agentId

Type: string

The agent id to be configured.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setApiKey method
#### Syntax


    let configval = config.setApiKey(apiKey);
    config.apiKey = configval;
    configval = config.apiKey;
    

Note that this feature is available as both a method and a property.

#### Parameters

apiKey

Type: string

A string that is your API Key.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


Set this immediately after the Eyes object is created (before calling [open](#open-method)). If you have an environment variable called APPLITOOLS_API_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value.

### setAppName method
#### Syntax


    let configval = config.setAppName(appName);
    config.appName = configval;
    configval = config.appName;
    

Note that this feature is available as both a method and a property.

#### Parameters

appName

Type: string

The application name to be configured for the test.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


If you call this method, it must be called before the call to [Eyes.open](#open-method). In the call to [Eyes.open](#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used.

### setBaselineBranchName method
#### Syntax


    let configval = config.setBaselineBranchName(baselineBranchName);
    config.baselineBranchName = configval;
    configval = config.baselineBranchName;
    

Note that this feature is available as both a method and a property.

#### Parameters

baselineBranchName

Type: string

The baseline branch name to be configured.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setBaselineEnvName method
#### Syntax


    let configval = config.setBaselineEnvName(baselineEnvName);
    config.baselineEnvName = configval;
    configval = config.baselineEnvName;
    

Note that this feature is available as both a method and a property.

#### Parameters

baselineEnvName

Type: string

The name of the baseline environment.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setBatch method
#### Syntax


    let configval = config.setBatch(batch);
    config.batch = configval;
    configval = config.batch;
    

Note that this feature is available as both a method and a property.

#### Parameters

batch

Type: [BatchInfoPlain](./batchinfoplain)

An object that defines the batch configuration.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setBranchName method
#### Syntax


    let configval = config.setBranchName(branchName);
    config.branchName = configval;
    configval = config.branchName;
    

Note that this feature is available as both a method and a property.

#### Parameters

branchName

Type: string

The branch name to be used by the configuration.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setBrowsersInfo method
#### Syntax


    let configval = config.setBrowsersInfo(browsersInfo);
    config.browsersInfo = configval;
    configval = config.browsersInfo;
    

Note that this feature is available as both a method and a property.

#### Parameters

browsersInfo

Type: (
      | DesktopBrowserInfo
      | ChromeEmulationInfo
      | IOSDeviceInfo
      | {
          deviceName: DeviceName | undefined;
          screenOrientation?: ScreenOrientation | undefined;
        }
    )[]; 

List of objects that define browsers and emulated devices to be rendered.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setDeviceInfo method
#### Syntax


    let configval = config.setDeviceInfo(deviceInfo);
    config.deviceInfo = configval;
    configval = config.deviceInfo;
    

Note that this feature is available as both a method and a property.

#### Parameters

deviceInfo

Type: string

The name of the device - this is displayed in the Device column in the Test Manager.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setForceFullPageScreenshot method
#### Syntax


    let configval = config.setForceFullPageScreenshot(forceFullPageScreenshot);
    config.forceFullPageScreenshot = configval;
    configval = config.forceFullPageScreenshot;
    

Note that this feature is available as both a method and a property.

#### Parameters

forceFullPageScreenshot

Type: boolean

If this paramter has a value of true, then Eyes will do scrolling and stitching if necessary. If false, then the result is browser dependent.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setHideCaret method
#### Syntax


    let configval = config.setHideCaret(hideCaret);
    config.hideCaret = configval;
    configval = config.hideCaret;
    

Note that this feature is available as both a method and a property.

#### Parameters

hideCaret

Type: boolean

If this paramter has a value of true, then the cursor will be hidden before the image is captured.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


We recommend using this method instead of [Eyes.setIgnoreCaret](./eyes#setignorecaret-method), [Configuration.setIgnoreCaret](./configuration#setignorecaret-method) or [CheckSettings.ignoreCaret](./checksettings#ignorecaret-method), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them.

### setHideScrollbars method
#### Syntax


    let configval = config.setHideScrollbars(hideScrollbars);
    config.hideScrollbars = configval;
    configval = config.hideScrollbars;
    

Note that this feature is available as both a method and a property.

#### Parameters

hideScrollbars

Type: boolean

If set to true then hide the scrollbars. Otherwise, don't hide the scrollbars.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setHostApp method
#### Syntax


    let configval = config.setHostApp(hostApp);
    config.hostApp = configval;
    configval = config.hostApp;
    

Note that this feature is available as both a method and a property.

#### Parameters

hostApp

Type: string

The value to be used for the Host App property.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setHostOS method
#### Syntax


    let configval = config.setHostOS(hostOS);
    config.hostOS = configval;
    configval = config.hostOS;
    

Note that this feature is available as both a method and a property.

#### Parameters

hostOS

Type: string

The value to be used for the Host OS Property.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setIgnoreCaret method
#### Syntax


    let configval = config.setIgnoreCaret(ignoreCaret);
    

#### Parameters

ignoreCaret

Type: boolean

If set to true, then Eyes does extra processing to eliminate artifacts introduced by blinking cursors.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


We recommend using [setHideCaret](./eyes#sethidecaret-method) or [setHideCaret](./configuration#sethidecaret-method) since this eliminates cursor related artifacts instead of detecting and ignoring them.

### setIgnoreDisplacements method
#### Syntax


    let configval = config.setIgnoreDisplacements(ignoreDisplacements);
    

#### Parameters

ignoreDisplacements

Type: boolean

If a value of true is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


Ignore displacements is only active when using a Match level of [Strict](./matchlevel) or [Content](./matchlevel)

### setIsDisabled method
#### Syntax


    let configval = config.setIsDisabled(isDisabled);
    config.setIsDisabled = configval;
    configval = config.setIsDisabled;
    

Note that this feature is available as both a method and a property.

#### Parameters

isDisabled

Type: boolean

If this has a value of true then all method calls to the SDK are ignored. Otherwise, all methods work as usual.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setMatchLevel method
#### Syntax


    let configval = config.setMatchLevel(matchLevel);
    

#### Parameters

matchLevel

Type: [MatchLevel](./matchlevel)

Available match level values are:

*   [None](./matchlevel)
*   [Strict](./matchlevel)
*   [Layout](./matchlevel)
*   [Content](./matchlevel)
*   [Exact](./matchlevel)

For a description of these match levels and the different ways to apply them to tests, checkpoints, and regions, see [Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### setMatchTimeout method
#### Syntax


    let configval = config.setMatchTimeout(matchTimeout);
    config.matchTimeout = configval;
    configval = config.matchTimeout;
    

Note that this feature is available as both a method and a property.

#### Parameters

matchTimeout

Type: number

The timeout to set in milliseconds.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


You can overide the default timeout set by this method for a specific set checkpoint by passing a timeout to one of the check_XXXX methods that support a timeout parameter, e.g. [`eyes.checkwindow (not yet available in playwright javascript)`](#)You can also overide the timeout for a specific test using the check fluent [`timeout method`](#timeout-method)

### setParentBranchName method
#### Syntax


    let configval = config.setParentBranchName(parentBranchName);
    config.parentBranchName = configval;
    configval = config.parentBranchName;
    

Note that this feature is available as both a method and a property.

#### Parameters

parentBranchName

Type: string

The parent branch name to be configured.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setProperties method
#### Syntax


    let configval = config.setProperties(properties);
    config.properties = configval;
    configval = config.properties;
    

Note that this feature is available as both a method and a property.

#### Parameters

properties

Type: [PropertyDataPlain](./propertydataplain)\[\]

List of propertydata objects.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


*   Set multiple properties by calling [Eyes.addProperty](./eyes#addproperty-method) or [Configuration.addProperty](./configuration#addproperty-method) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run.
*   You can also associate properties with a batch using [BatchInfo.addProperty](./batchinfo#addproperty-method).

### setProxy method
#### Syntax


    let configval = config.setProxy(proxy);
    
    let configval = config.setProxy(url, username, password, isHttpOnly);
    
    let configval = config.setProxy(url, username, password);
    
    let configval = config.setProxy(url, username);
    
    let configval = config.setProxy(url);
    
    let configval = config.setProxy(isEnabled);
    config.proxy = configval;
    configval = config.proxy;
    

Note that this feature is available as both a method and a property.

#### Parameters

proxy

Type: [ProxySettingsPlain](./proxysettingsplain)

An object created from the [ProxySettings](./proxysettings) class that contains the user name, password, URI and port.

url

Type: string

The proxy URL to be used by the serverConnector. If it has a value of null then no proxy is set.

username

Type: string \[Optional \]

The string to pass as the username.

password

Type: string \[Optional \]

The string to pass as the password.

isHttpOnly

Type: boolean \[Optional \]

A value of true specifies that the SDK should communicate with the server using an http tunnel. Use this if your http proxy blocks https communication.

isEnabled

Type: false

If this parameter is provided, then it must have a value of false and it means that use of the proxy is disabled.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setRotation method
#### Syntax


    let configval = config.setRotation(rotation_lit);
    
    let configval = config.setRotation(rotation_obj);
    config.rotation = configval;
    configval = config.rotation;
    

Note that this feature is available as both a method and a property.

#### Parameters

rotation_lit

Type: ImageRotationPlain

The number of degrees to rotate.

A literal object that defines the amount to rotate.

#### Type definitions

ImageRotationPlain

The legal values that an image may be rotated by. This may have the following values: \-270|-180|-90|0|90|180|270

rotation_obj

Type: [ImageRotation](./imagerotation)

The number of degrees to rotate.

A class object that defines the amount to rotate.

#### Return value

Type:  [Configuration](./configuration)

### setSaveDiffs method
#### Syntax


    let configval = config.setSaveDiffs(saveDiffs);
    config.saveDiffs = configval;
    configval = config.saveDiffs;
    

Note that this feature is available as both a method and a property.

#### Parameters

saveDiffs

Type: boolean

Set to true to configure Save Diffs functionality.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setSaveNewTests method
#### Syntax


    let configval = config.setSaveNewTests(saveNewTests);
    config.saveNewTests = configval;
    configval = config.saveNewTests;
    

Note that this feature is available as both a method and a property.

#### Parameters

saveNewTests

Type: boolean

If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior).

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setScaleRatio method
#### Syntax


    let configval = config.setScaleRatio(scaleRatio);
    config.scaleRatio = configval;
    configval = config.scaleRatio;
    

Note that this feature is available as both a method and a property.

#### Parameters

scaleRatio

Type: number

The scale ratio to use.

#### Return value

Type:  [Configuration](./configuration)

### setScrollRootElement method
#### Syntax


    let configval = config.setScrollRootElement(scrollRootElement_ele);
    
    let configval = config.setScrollRootElement(scrollRootElement_sel);
    config.scrollRootElement = configval;
    configval = config.scrollRootElement;
    

Note that this feature is available as both a method and a property.

#### Parameters

scrollRootElement_ele

Type: ElementHandle

The element that should be scrolled.

An element whose position and bounding rectangle defines the region.

scrollRootElement_sel

Type: Selector

The element that should be scrolled.

A selector to an element whose position and bounding rectangle defines the region.

#### Type definitions

Selector

Used to identify an HTML element defined as string|{selector:string;Type: string}.

#### Return value

Type:  [Configuration](./configuration)

### setSendDom method
#### Syntax


    let configval = config.setSendDom(sendDom);
    config.sendDom = configval;
    configval = config.sendDom;
    

Note that this feature is available as both a method and a property.

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


    let configval = config.setServerUrl(serverUrl);
    config.serverUrl = configval;
    configval = config.serverUrl;
    

Note that this feature is available as both a method and a property.

#### Parameters

serverUrl

Type: string

The URL of the Eyes server. Pass a value of null to use the default cloud server.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setStitchMode method
#### Syntax


    let configval = config.setStitchMode(stitchMode);
    config.stitchMode = configval;
    configval = config.stitchMode;
    

Note that this feature is available as both a method and a property.

#### Parameters

stitchMode

Type: [StitchMode](./stitchmode)

The stitch mode to use.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setStitchOverlap method
#### Syntax


    let configval = config.setStitchOverlap(stitchOverlap);
    config.stitchOverlap = configval;
    configval = config.stitchOverlap;
    

Note that this feature is available as both a method and a property.

#### Parameters

stitchOverlap

Type: number

The width of the stitch overlap in pixels.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setTestName method
#### Syntax


    let configval = config.setTestName(testName);
    config.testName = configval;
    configval = config.testName;
    

Note that this feature is available as both a method and a property.

#### Parameters

testName

Type: string

The test name to be configured for the test.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setViewportSize method
#### Syntax


    let configval = config.setViewportSize(viewportSize);
    config.viewportSize = configval;
    configval = config.viewportSize;
    

Note that this feature is available as both a method and a property.

#### Parameters

viewportSize

Type: [RectangleSizePlain](./rectanglesizeplain)

An object that defines the width and height of the test browser viewport in pixels.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setVisualGridOption method
#### Syntax


    let configval = config.setVisualGridOption();
    

#### Parameters

This method does not take any parameters.

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

You can set this option globally using the method [Configuration.setVisualGridOption](#)

You can override the global value for a given checkpoint using the method [CheckSettings.visualGridOption](./checksettings#visualGridOption-method).

#### Example


JavaScript

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


    let configval = config.setWaitBeforeScreenshots(waitBeforeScreenshots);
    config.waitBeforeScreenshots = configval;
    configval = config.waitBeforeScreenshots;
    

Note that this feature is available as both a method and a property.

#### Parameters

waitBeforeScreenshots

Type: number

The time to wait in milliseconds. Passing a value of less than or equal to zero will cause the default value to be used.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

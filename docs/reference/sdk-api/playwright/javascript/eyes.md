# Eyes class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Playwright</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/python/eyes'>Selenium Python</a>
<a href='../../selenium/java/eyes'>Selenium Java</a>
<a href='../../selenium/python_sdk4/eyes'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/eyes'>Selenium Csharp</a>
<a href='../../selenium/javascript/eyes'>Selenium Javascript</a>
<a href='../../imagesappkit/objectivec/eyes'>Imagesappkit Objectivec</a>
<a href='../../puppeteer/javascript/eyes'>Puppeteer Javascript</a>
<a href='../../images/java/eyes'>Images Java</a>
<a href='../../images/python_sdk4/eyes'>Images Python_sdk4</a>
<a href='../../images/csharp/eyes'>Images Csharp</a>
<a href='../../images/javascript/eyes'>Images Javascript</a>
<a href='../../images/objectivec/eyes'>Images Objectivec</a>
<a href='../../selenium4/javascript/eyes'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/eyes'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/eyes'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/eyes'>Nightwatch Javascript</a>
<a href='../../xcui/objectivec/eyes'>Xcui Objectivec</a>
<a href='../../protractor/javascript/eyes'>Protractor Javascript</a>
<a href='../../appium/java/eyes'>Appium Java</a>
<a href='../../appium/csharp/eyes'>Appium Csharp</a>
<a href='../../wdiogeneric/javascript/eyes'>Wdiogeneric Javascript</a>
<a href='../../espresso/java/eyes'>Espresso Java</a>
</div></div><br /><br /></div>




This class provides the main methods used to execute tests and checkpoints.



### Eyes method
#### Syntax


    let eyes = new Eyes(runner);
    
    let eyes = new Eyes();
    

#### Parameters

runner

Type: EyesRunner \[Optional \]

If this parameter is provided, it must be an instance of either the [ClassicRunner](./classicrunner) or [VisualGridRunner](./visualgridrunner) classes. If a [VisualGridRunner](./visualgridrunner) is passed then the image will be rendered using the Ultrafast Grid. If this parameter is not provided, then DOM rendering is done using the local browser defined by the driver parameter passed to the [Eyes.open](#open-method) method.

#### Return value

Type:  [Eyes](./eyes)

Use the object returned to call the various methods provided by the Eyes class.


### abort method
#### Syntax


    let result = await eyes.abort();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  Promise<[TestResults](./testresults)\>

#### Remarks


If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored.

### addProperty method
#### Syntax


    let value = eyes.addProperty(name, value);
    

#### Parameters

name

Type: string

The name of the property.

value

Type: string

The value associated with the name.

#### Return value

Type:  [Configuration](./configuration)

#### Remarks


*   Set multiple properties by calling [Eyes.addProperty](#) or [Configuration.addProperty](./configuration#addproperty-method) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run.
*   You can also associate properties with a batch using [BatchInfo.addProperty](./batchinfo#addproperty-method).

### check method
#### Syntax


    let result = await eyes.check(name, checkSettings_obj);
    
    let result = await eyes.check(checkSettings_lit);
    
    let result = await eyes.check();
    

#### Parameters

name

Type: string

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

checkSettings_obj

Type: [CheckSettings](./checksettings)

The fluent API calls, starting with one of the [Target](./target) methods.

A series of method calls to the CheckSettings class, in Fluent API style.

checkSettings_lit

Type: [CheckSettingsPlain](./checksettingsplain) \[Optional \]

The fluent API calls, starting with one of the [Target](./target) methods.

A literal object defined by the CheckSettingsPlain object.

#### Return value

Type:  Promise<[MatchResult](./matchresult)\>

#### Remarks


For a detailed description of how to use this method see [The Eyes SDK check Fluent API](https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html).

### clearProperties method
#### Syntax


    let value = eyes.clearProperties();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [Configuration](./configuration)

### close method
#### Syntax


    let result = await eyes.close(throwErr);
    
    let result = await eyes.close();
    

#### Parameters

throwErr

Type: boolean \[Optional \]

If this parameter has a value of true, then if there are new, missing, or mismatched steps, an exception will be thrown. If the parameter is set to false, then an exception will not be thrown for the above cases. If the parameter is not passed, then it is as if a true value was passed.

#### Return value

Type:  Promise<[TestResults](./testresults)\>

The result of the test can be obtained from the object returned. See [TestResults class](./testresults) for a list of what information can be obtained from this object. See [TestResults class](./testresults) for a list of what information can be obtained from this object.

### getApiKey method
#### Syntax


    let value = eyes.getApiKey();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getAppName method
#### Syntax


    let value = eyes.getAppName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getBaselineBranchName method
#### Syntax


    let value = eyes.getBaselineBranchName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getBaselineEnvName method
#### Syntax


    let value = eyes.getBaselineEnvName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

Returns the value most recently set by a call to [setBaselineEnvName](./eyes#setbaselineenvname-method), or a value of null if the baseline environment name has not been assigned in this run.

### getBatch method
#### Syntax


    let value = eyes.getBatch();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [BatchInfo](./batchinfo)

### getBranchName method
#### Syntax


    let value = eyes.getBranchName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getConfiguration method
#### Syntax


    let value = eyes.getConfiguration();
    eyes.configuration = value;
    value = eyes.configuration;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [Configuration](./configuration)

### getDebugScreenshotsPath method
#### Syntax


    let value = eyes.getDebugScreenshotsPath();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

#### Remarks


Enable and disable saving screenshots to the local disk using the [setSaveDebugScreenshots](./eyes#setsavedebugscreenshots-method) method.

### getDebugScreenshotsPrefix method
#### Syntax


    let value = eyes.getDebugScreenshotsPrefix();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

#### Remarks


Enable and disable saving screenshots to the local disk using the [setSaveDebugScreenshots](./eyes#setsavedebugscreenshots-method) method.

### getDeviceInfo method
#### Syntax


    let value = eyes.getDeviceInfo();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getDriver method
#### Syntax


    let value = eyes.getDriver();
    value = eyes.driver;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  Page

### getForceFullPageScreenshot method
#### Syntax


    let value = eyes.getForceFullPageScreenshot();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getHideCaret method
#### Syntax


    let value = eyes.getHideCaret();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getHideScrollbars method
#### Syntax


    let value = eyes.getHideScrollbars();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getHostApp method
#### Syntax


    let value = eyes.getHostApp();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getHostOS method
#### Syntax


    let value = eyes.getHostOS();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getIgnoreCaret method
#### Syntax


    let value = eyes.getIgnoreCaret();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getIsDisabled method
#### Syntax


    let value = eyes.getIsDisabled();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

If true, then all calls to Eyes are ignored, if false then all calls to Eyes work as usual.

### getIsOpen method
#### Syntax


    let value = eyes.getIsOpen();
    value = eyes.getIsOpen;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

Return true if the [Eyes.open](#open-method) method has been called on an eyes instance, and [Eyes.close](#close-method) or [Eyes.abort](#abort-method) have not yet been called.

### getMatchLevel method
#### Syntax


    let value = eyes.getMatchLevel();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [MatchLevel](./matchlevel)

#### Remarks


For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### getMatchTimeout method
#### Syntax


    let value = eyes.getMatchTimeout();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  number

### getParentBranchName method
#### Syntax


    let value = eyes.getParentBranchName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getProxy method
#### Syntax


    let value = eyes.getProxy();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [ProxySettings](./proxysettings)

### getRotation method
#### Syntax


    let value = eyes.getRotation();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [ImageRotation](./imagerotation)

The rotation in degrees.

### getSaveDebugScreenshots method
#### Syntax


    let value = eyes.getSaveDebugScreenshots();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

#### Remarks


Enable and disable saving screenshots to the local disk using the [setSaveDebugScreenshots](./eyes#setsavedebugscreenshots-method) method.

### getSaveDiffs method
#### Syntax


    let value = eyes.getSaveDiffs();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

returns true if steps that have mismatches are automatically saved to the baseline.

### getSaveNewTests method
#### Syntax


    let value = eyes.getSaveNewTests();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getScaleRatio method
#### Syntax


    let value = eyes.getScaleRatio();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  number

### getScrollRootElement method
#### Syntax


    let value = eyes.getScrollRootElement();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type: 

    ElementHandle|Selector

Returns either the value most recently set using [Eyes.setScrollRootElement](./eyes#setscrollrootelement-method), or returns an undefined value if this method was not called.

### getSendDom method
#### Syntax


    let value = eyes.getSendDom();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getServerUrl method
#### Syntax


    let value = eyes.getServerUrl();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getStitchMode method
#### Syntax


    let value = eyes.getStitchMode();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [StitchMode](./stitchmode)

The value returned can be either [CSS](./stitchmode) or [SCROLL](./stitchmode).

### getStitchOverlap method
#### Syntax


    let value = eyes.getStitchOverlap();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  number

The stiching overlap in pixels.

### getViewportSize method
#### Syntax


    let result = await eyes.getViewportSize();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  Promise<[RectangleSize](./rectanglesize)\>

### getWaitBeforeScreenshots method
#### Syntax


    let value = eyes.getWaitBeforeScreenshots();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  number

The time Eyes waits before taking a screenshot, in milliseconds.

### locate method
#### Syntax
#### Call syntax

    let regions = eyes.locate({ locatorNames: ["locA", "locB"], firstOnly: false });
    

#### Declaration

    <TLocator extends string>(settings:VisualLocatorSettings<TLocator>):Promise<Record<TLocator,RegionPlain[]>>

#### Parameters

settings

Type: [VisualLocatorSettings](./visuallocatorsettings)`<TLocator>`

A literal object that defines the required visual locator names and whethere a single or all instances of each locator should be found. See the example below for more details.

#### Return value

Type:  Promise<Record<TLocator,RegionPlain\[\]>>

Returns a mapping between the names passed in the locatornames field passed as a parameter and the regions in the viewport where the graphic images defined by those locator names were detected. If the firstOnly parameter is passed and has a value of true then only the 1st result found is retuned.

If the image of a particular locator name is not found in the viewport, the locator is mapped to a zero length array. If a locator name is passed, and a locator of that name has not been defined on the Eyes server, the returned locator will be mapped to a value of null instead of an array.

and each value is an object that contains the text found and its bounding rectangle.

#### Type definitions

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

#### Remarks


The article [Visual locators](https://applitools.com/docs/features/visual-locators.html) describes in detail how to associate locator names with graphic images and how to search for instances of the graphic in the browser viewport. The example below is a briefer description of how to search for instances of the locator graphics.

### open method
#### Syntax


    let result = await eyes.open(driver);
    
    let result = await eyes.open(driver, appName, testName, viewportSize);
    
    let result = await eyes.open(driver, appName, testName);
    
    let result = await eyes.open(driver, appName);
    

#### Parameters

driver

Type: Page

The web driver.

appName

Type: string \[Optional \]

The application name. This may be any string. You can set the application name for all tests using the [Configuration.setAppName](./configuration#setappname-method) method or [Eyes.setAppName](./eyes#setappname-method) method. If you do so, then set this parameter to a value of null to indicate that the configuration default should be used.

testName

Type: string \[Optional \]

The name of the test. This name must be unique within the scope of the application name. It may be any string.

viewportSize

Type: [RectangleSizePlain](./rectanglesizeplain) \[Optional \]

The size of the viewport

The size of the viewport passed as an object.

The size of the viewport passed as an object {'width':, 'height':}

Defines the viewport size of the browser that will be set before the start of the test. If this parameter is not provided then the viewport size will be based on the current browser window size. See [Using viewports in Eyes](https://applitools.com/docs/topics/general-concepts/using-viewports-in-eyes.html) for more details.

#### Return value

Type:  Promise`<Page>`

The returned web driver is a clone of the driver passed as a parameter. It is recomended that you use the web driver object returned by this method in all further calls to the web driver. This allows Eyes to record these interactions and play them back in the Eyes Test Manager.

#### Remarks


After making a call to this method, you must eventually terminate the test by calling [Eyes.close](#close-method) (in case of a normal completion) or [Eyes.abort](#abort-method) (in case of an aborted test). If you want to run another test, then it is recomended to do this with a newly created Eyes instance to avoid side effects. However, in principle, it is legal to call [Eyes.Open](#open-method) again to start a new test on the same Eyes instance.

### setApiKey method
#### Syntax


    eyes.setApiKey(apiKey);
    

#### Parameters

apiKey

Type: string

A string that is your API Key.

#### Return value

Type:  void

#### Remarks


Set this immediately after the Eyes object is created (before calling [open](#open-method)). If you have an environment variable called APPLITOOLS_API_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value.

### setAppName method
#### Syntax


    eyes.setAppName(appName);
    

#### Parameters

appName

Type: string

The application name. This may be any string.

#### Return value

Type:  void

#### Remarks


If you call this method, it must be called before the call to [Eyes.open](#open-method). In the call to [Eyes.open](#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used.

### setBaselineBranchName method
#### Syntax


    eyes.setBaselineBranchName(baselineBranchName);
    

#### Parameters

baselineBranchName

Type: string

The name of the baseline branch to use.

#### Return value

Type:  void

### setBaselineEnvName method
#### Syntax


    eyes.setBaselineEnvName(baselineEnvName);
    

#### Parameters

baselineEnvName

Type: string

The name of the baseline environment.

#### Return value

Type:  void

### setBatch method
#### Syntax


    eyes.setBatch(batch);
    eyes.setBatch(name, id, startedAt_date);
    eyes.setBatch(name, id);
    eyes.setBatch(name);
    eyes.setBatch(name, id, startedAt_str);
    

#### Parameters

batch

Type: [BatchInfoPlain](./batchinfoplain)

An object of the class [BatchInfo](./batchinfo) that describes the batch.

name

Type: string

The batch name. It may be any string.

id

Type: string \[Optional \]

If the first parameter is a batch name string (and not a BatchInfo object), then the value passed for this parameter will be used as the id of the created object. All tests that have the same batch ID will appear in the Test results in the same batch. If the value is a falsy value or is not passed and the environment variable APPLITOOLS_BATCH_ID is defined, then the value of the environment variable will be used as the ID. Otherwise, an internal id will be generated.

startedAt_date

Type: Date \[Optional \]

If the value is a falsey value or is not passed, then the current date and time will be used.

The start date/time as a JavaScript Date object

startedAt_str

Type: string \[Optional \]

If the value is a falsey value or is not passed, then the current date and time will be used.

The value passed must be a string that represents the date/time in the same format as Date().toUTCString().

#### Return value

Type:  void

#### Remarks


Call this method once before the calls to the [open](#open-method) method for all tests that are supposed to be part of this batch.

### setBranchName method
#### Syntax


    eyes.setBranchName(branchName);
    

#### Parameters

branchName

Type: string

The name of the branch from which the baseline will be taken and saved. This may be any string.

#### Return value

Type:  void

### setConfiguration method
#### Syntax


    eyes.setConfiguration(config);
    eyes.configuration = value;
    value = eyes.configuration;
    

Note that this feature is available as both a method and a property.

#### Parameters

config

Type: [ConfigurationPlain](./configurationplain)

A configuration object that has the various properties/methods set to the required values.

#### Return value

Type:  void

#### Remarks


The typical sequence for configuring a test is:

*   Create a [Configuration](./configuration) object.
*   Set the properties you want to set up, using the various set methods.
*   Create an [Eyes](./eyes) instance.
*   Call the [Eyes.setConfiguration](#) method with the configuration object.
*   Call the [Eyes.open](#open-method) method to start the test session.

Once you've changed the configuration of an Eyes instance by calling [Eyes.setConfiguration](#) or by setting a configuration directly on the Eyes instance, if you want to change the configuration, you must use the following sequence:

*   Get the current configuration using [Eyes.getConfiguration](./eyes#getconfiguration-method) to a local variable.
*   Make changes to the local configuration value.
*   Assign the local configuration object to the Eyes instance using [Eyes.setConfiguration](#).

### setDebugScreenshotsPath method
#### Syntax


    eyes.setDebugScreenshotsPath(path);
    

#### Parameters

path

Type: string

A pathname where saved checkpoint images should be stored.

#### Return value

Type:  void

#### Remarks


Enable and disable saving screenshots to the local disk using the [setSaveDebugScreenshots](./eyes#setsavedebugscreenshots-method) method.

### setDebugScreenshotsPrefix method
#### Syntax


    eyes.setDebugScreenshotsPrefix(prefix);
    

#### Parameters

prefix

Type: string

A prefix to be added to the saved checkpoint images filename.

#### Return value

Type:  void

#### Remarks


Enable and disable saving screenshots to the local disk using the [setSaveDebugScreenshots](./eyes#setsavedebugscreenshots-method) method.

### setDeviceInfo method
#### Syntax


    eyes.setDeviceInfo(deviceInfo);
    

#### Parameters

deviceInfo

Type: string

The name of the device - this is displayed in the Device column in the Test Manager.

#### Return value

Type:  void

### setForceFullPageScreenshot method
#### Syntax


    eyes.setForceFullPageScreenshot(forceFullPageScreenshot);
    

#### Parameters

forceFullPageScreenshot

Type: boolean

If this paramter has a value of true, then Eyes will do scrolling and stitching if necessary. If false, then the result is browser dependent.

#### Return value

Type:  void

### setHideCaret method
#### Syntax


    eyes.setHideCaret(hideCaret);
    

#### Parameters

hideCaret

Type: boolean

If this paramter has a value of true, then the cursor will be hidden before the image is captured.

#### Return value

Type:  void

#### Remarks


We recommend using this method instead of [Eyes.setIgnoreCaret](./eyes#setignorecaret-method), [Configuration.setIgnoreCaret](./configuration#setignorecaret-method) or [CheckSettings.ignoreCaret](./checksettings#ignorecaret-method), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them.

### setHideScrollbars method
#### Syntax


    eyes.setHideScrollbars(hideScrollbars);
    

#### Parameters

hideScrollbars

Type: boolean

If set to true then hide the scrollbars. Otherwise, don't hide the scrollbars.

#### Return value

Type:  void

### setHostApp method
#### Syntax


    eyes.setHostApp(hostApp);
    

#### Parameters

hostApp

Type: string

The value to be used for the Host OS Property.

#### Return value

Type:  void

### setHostOS method
#### Syntax


    eyes.setHostOS(hostOS);
    

#### Parameters

hostOS

Type: string

The value to be used for the Host OS property.

#### Return value

Type:  void

### setIgnoreCaret method
#### Syntax


    eyes.setIgnoreCaret(ignoreCaret);
    

#### Parameters

ignoreCaret

Type: boolean

If set to true, then Eyes does extra processing to eliminate artifacts introduced by blinking cursors.

#### Return value

Type:  void

#### Remarks


We recommend using [setHideCaret](./eyes#sethidecaret-method) or [setHideCaret](./configuration#sethidecaret-method) since this eliminates cursor related artifacts instead of detecting and ignoring them.

### setIsDisabled method
#### Syntax


    eyes.setIsDisabled(isDisabled);
    

#### Parameters

isDisabled

Type: boolean

If this has a value of true then all method calls to the SDK are ignored. Otherwise, all methods work as usual.

#### Return value

Type:  void

### setMatchLevel method
#### Syntax


    eyes.setMatchLevel(matchLevel);
    

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

Type:  void

#### Remarks


For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### setMatchTimeout method
#### Syntax


    eyes.setMatchTimeout(matchTimeout);
    

#### Parameters

matchTimeout

Type: number

The timeout to set in milliseconds.

#### Return value

Type:  void

#### Remarks


You can overide the default timeout set by this method for a specific set checkpoint by passing a timeout to one of the check_XXXX methods that support a timeout parameter, e.g. [`eyes.checkwindow (not yet available in playwright javascript)`](#)You can also overide the timeout for a specific test using the check fluent [`timeout method`](#timeout-method)

### setParentBranchName method
#### Syntax


    eyes.setParentBranchName(parentBranchName);
    

#### Parameters

parentBranchName

Type: string

The branch name. This may be any string.

#### Return value

Type:  void

### setProxy method
#### Syntax


    eyes.setProxy(proxy);
    eyes.setProxy(url, username, password, isHttpOnly);
    eyes.setProxy(url, username, password);
    eyes.setProxy(url, username);
    eyes.setProxy(url);
    eyes.setProxy(isEnabled);
    

#### Parameters

proxy

Type: [ProxySettingsPlain](./proxysettingsplain)

[ProxySettingsPlain](./proxysettingsplain)

url

Type: string

The proxy URL to be used by the serverConnector. If it has a value of then no proxy is set.

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

If this parameter is provided, then it must have a value of false, and it means that use of the proxy is disabled.

#### Return value

Type:  void

### setRotation method
#### Syntax


    eyes.setRotation(rotation_lit);
    eyes.setRotation(rotation_obj);
    

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

Type:  void

### setSaveDebugScreenshots method
#### Syntax


    eyes.setSaveDebugScreenshots(save);
    

#### Parameters

save

Type: boolean

If set to true, then checkpoint images is saved to a local directory.

#### Return value

Type:  void

### setSaveDiffs method
#### Syntax


    eyes.setSaveDiffs(saveDiffs);
    

#### Parameters

saveDiffs

Type: boolean

If this has a value of true, then the baseline will be updated with checkpoints that have mismatches.

#### Return value

Type:  void

### setSaveNewTests method
#### Syntax


    eyes.setSaveNewTests(saveNewTests);
    

#### Parameters

saveNewTests

Type: boolean

If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior).

#### Return value

Type:  void

### setScaleRatio method
#### Syntax


    eyes.setScaleRatio(scaleRatio);
    

#### Parameters

scaleRatio

Type: number

The scale ratio to use.

#### Return value

Type:  void

### setScrollRootElement method
#### Syntax


    eyes.setScrollRootElement(scrollRootElement_ele);
    eyes.setScrollRootElement(scrollRootElement_sel);
    

#### Parameters

scrollRootElement_ele

Type: ElementHandle

The element or element descriptor.

An element whose position and bounding rectangle defines the region.

scrollRootElement_sel

Type: Selector

The element or element descriptor.

A selector to an element whose position and bounding rectangle defines the region.

#### Type definitions

Selector

Used to identify an HTML element defined as string|{selector:string;Type: string}.

#### Return value

Type:  void

### setSendDom method
#### Syntax


    eyes.setSendDom(sendDom);
    

#### Parameters

sendDom

Type: boolean

A value of true means that DOM information will be sent. A value of false means that DOM information will not be sent.

#### Return value

Type:  void

#### Remarks


Sending DOM information is enabed by default, so use this method only if you have to disable it.

### setServerUrl method
#### Syntax


    eyes.setServerUrl("https://myEyesServer");
    

#### Parameters

serverUrl

Type: string

The URL of the Eyes server. Pass a value of null to use the default cloud server.

#### Return value

Type:  void

### setStitchMode method
#### Syntax


    eyes.setStitchMode(stitchMode);
    

#### Parameters

stitchMode

Type: [StitchMode](./stitchmode)

The stitch mode to use.

#### Return value

Type:  void

### setStitchOverlap method
#### Syntax


    eyes.setStitchOverlap(stitchOverlap);
    

#### Parameters

stitchOverlap

Type: number

The width of the stitch overlap in pixels.

#### Return value

Type:  void

### setViewportSize method
#### Syntax


    await Eyes.setViewportSize(driver, viewportSize_rectanglesize);
    await Eyes.setViewportSize(viewportSize_rectanglesizeplain);
    

Note: This method has both static and non static overloads.

#### Parameters

driver

Type: Page

The driver returned from the call to open.

viewportSize_rectanglesize

Type: [RectangleSize](./rectanglesize)

The size of the viewport

The size of the viewport passed as an object.

The size of the viewport passed as an object {'width':, 'height':}

An object that defines the viewport size.

The size of the viewport

The size of the viewport passed as an object.

The size of the viewport passed as an object {'width':, 'height':}

viewportSize_rectanglesizeplain

Type: [RectangleSizePlain](./rectanglesizeplain)

The size of the viewport

The size of the viewport passed as an object.

The size of the viewport passed as an object {'width':, 'height':}

A literal object that defines the viewport size.

The size of the viewport

The size of the viewport passed as an object.

The size of the viewport passed as an object {'width':, 'height':}

#### Return value

Type:  Promise`<void>`

#### Remarks


*   Call this method before the call to [Eyes.open](#open-method). Then, when calling the open method, don't pass the viewportSize parameter. If the viewport size is set to be smaller than the actual content, then scrolling should typically be enabled by calling [setForceFullPageScreenshot](./eyes#setforcefullpagescreenshot-method) method or [setForceFullPageScreenshot](./configuration#setforcefullpagescreenshot-method) method so that the full page image is tested.

This method is a static method.

### setWaitBeforeScreenshots method
#### Syntax


    eyes.setWaitBeforeScreenshots(waitBeforeScreenshots);
    

#### Parameters

waitBeforeScreenshots

Type: number

The time to wait in milliseconds. Passing a value of less than or equal to zero will cause the default value to be used.

#### Return value

Type:  void

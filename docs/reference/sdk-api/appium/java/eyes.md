# Eyes class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Appium</b>
</div><div class='platform-bar-div'>Language: <b>Java</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

Import statement

    import com.applitools.eyes.appium.Eyes;
    	



### Eyes method
#### Syntax


    Eyes eyes = new Eyes();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [Eyes](./eyes)

Use the object returned to call the various methods provided by the Eyes class.


### abort method
#### Syntax


    TestResults value = eyes.abort();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [TestResults](./testresults)

#### Remarks


If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored.

### abortAsync method
#### Syntax


    eyes.abortAsync();

#### Parameters

This method does not take any parameters.

#### Return value

Type:  void

#### Remarks


If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored.

### abortIfNotClosed method
#### Syntax


    TestResults value = eyes.abortIfNotClosed();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [TestResults](./testresults)

#### Remarks


If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored.

### addProperty method
#### Syntax


    eyes.addProperty(name, value);

#### Parameters

name

Type: String

The name of the property.

value

Type: String

The value associated with the name.

#### Return value

Type:  void

#### Remarks


*   You should not assign a given value to a property more than once in a given test run.
*   You can also associate properties with a batch using [BatchInfo.addProperty](./batchinfo#addproperty-method).

### check method
#### Syntax


    eyes.check(name, checkSettings);
    eyes.check(checkSettings);
    

#### Parameters

name

Type: String

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

checkSettings

Type: ICheckSettings

The fluent API calls, starting with one of the [Target](./target) methods.

checkSettings

Type: ICheckSettings...

One or more check settings, as an array or a comma separated list.

#### Return value

Type:  void

#### Remarks


For a detailed description of how to use this method see [The Eyes SDK check Fluent API](https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html).

### checkElement method
#### Syntax


    eyes.checkElement(element);
    eyes.checkElement(element, tag);
    eyes.checkElement(element, matchTimeout, tag);
    eyes.checkElement(selector);
    eyes.checkElement(selector, tag);
    eyes.checkElement(selector, matchTimeout, tag);

#### Parameters

element

Type: WebElement

An element whose position and bounding rectangle defines the region.

tag

Type: String

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

matchTimeout

Type: int

The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout.

selector

Type: By

An object that defines a selector for the region.

#### Return value

Type:  void

### checkRegion method
#### Syntax


    eyes.checkRegion(region);
    eyes.checkRegion(region, matchTimeout, tag);
    eyes.checkRegion(element);
    eyes.checkRegion(element, tag, stitchContent);
    eyes.checkRegion(element, matchTimeout, tag);
    eyes.checkRegion(element, matchTimeout, tag, stitchContent);
    eyes.checkRegion(selector);
    eyes.checkRegion(selector, stitchContent);
    eyes.checkRegion(selector, tag);
    eyes.checkRegion(selector, tag, stitchContent);
    eyes.checkRegion(selector, matchTimeout, tag);
    eyes.checkRegion(selector, matchTimeout, tag, stitchContent);

#### Parameters

region

Type: [Region](./region)

A non-empty region representing the screen region to check in screenshot pixel coordinates.

matchTimeout

Type: int

The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout.

tag

Type: String

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

element

Type: WebElement

The element which represents the region to check.

stitchContent

Type: boolean

If the application window is larger than the viewport, and this parameter is true, then the entire page content is rendered. If this parameter is false, then only the viewport is rendered.

selector

Type: By

An object that defines a selector for the region.

#### Return value

Type:  void

### checkWindow method
#### Syntax


    eyes.checkWindow();
    eyes.checkWindow(tag);
    eyes.checkWindow(matchTimeout, tag);
    eyes.checkWindow(tag, fully);

#### Parameters

tag

Type: String

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

matchTimeout

Type: int

The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout.

fully

Type: boolean

Set to true to capture the full browser page and not just the viewport.

#### Return value

Type:  void

### clearProperties method
#### Syntax


    eyes.clearProperties();

#### Parameters

This method does not take any parameters.

#### Return value

Type:  void

### close method
#### Syntax


    TestResults result = eyes.close();
    
    TestResults result = eyes.close(throwEx);
    

#### Parameters

throwEx

Type: boolean

If this parameter has a value of true, then if there are new, missing, or mismatched steps, an exception will be thrown. If the parameter is set to false, then an exception will not be thrown for the above cases. If the parameter is not passed, then it is as if a true value was passed.

#### Return value

Type:  [TestResults](./testresults)

The result of the test can be obtained from the object returned. See [TestResults class](./testresults) for a list of what information can be obtained from this object. See [TestResults class](./testresults) for a list of what information can be obtained from this object.

### closeAsync method
#### Syntax


    eyes.closeAsync();

#### Parameters

This method does not take any parameters.

#### Return value

Type:  void

### getAgentId method
#### Syntax


    String value = eyes.getAgentId();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getApiKey method
#### Syntax


    String value = eyes.getApiKey();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getBaselineBranchName method
#### Syntax


    String value = eyes.getBaselineBranchName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getBaselineEnvName method
#### Syntax


    String value = eyes.getBaselineEnvName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

Returns the value most recently set by a call to [setBaselineEnvName](./eyes#setbaselineenvname-method), or a value of null if the baseline environment name has not been assigned in this run.

### getBatch method
#### Syntax


    BatchInfo value = eyes.getBatch();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [BatchInfo](./batchinfo)

### getBranchName method
#### Syntax


    String value = eyes.getBranchName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getConfiguration method
#### Syntax


    com.applitools.eyes.selenium.Configuration value = eyes.getConfiguration();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  com.applitools.eyes.selenium.[Configuration](./configuration)

### getDebugScreenshotsPath method
#### Syntax


    String value = eyes.getDebugScreenshotsPath();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

#### Remarks


Enable and disable saving screenshots to the local disk using the [setSaveDebugScreenshots](./eyes#setsavedebugscreenshots-method) method.

### getDebugScreenshotsPrefix method
#### Syntax


    String value = eyes.getDebugScreenshotsPrefix();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

#### Remarks


Enable and disable saving screenshots to the local disk using the [setSaveDebugScreenshots](./eyes#setsavedebugscreenshots-method) method.

### getDevicePixelRatio method
#### Syntax


    double value = eyes.getDevicePixelRatio();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  double

### getDriver method
#### Syntax


    WebDriver value = eyes.getDriver();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  WebDriver

### getForceFullPageScreenshot method
#### Syntax


    boolean value = eyes.getForceFullPageScreenshot();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getHostApp method
#### Syntax


    String value = eyes.getHostApp();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getHostOS method
#### Syntax


    String value = eyes.getHostOS();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getIgnoreCaret method
#### Syntax


    boolean value = eyes.getIgnoreCaret();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getIsDisabled method
#### Syntax


    boolean value = eyes.getIsDisabled();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

If true, then all calls to Eyes are ignored, if false then all calls to Eyes work as usual.

### getIsOpen method
#### Syntax


    boolean value = eyes.getIsOpen();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

Return true if the [Eyes.open](#open-method) method has been called on an eyes instance, and [Eyes.close](#close-method), [Eyes.abort](#abort-method), [Eyes.abortAsync](./eyes#abortasync-method) or [Eyes.abortIfNotClosed](./eyes#abortifnotclosed-method) have not yet been called.

### getMatchLevel method
#### Syntax


    MatchLevel value = eyes.getMatchLevel();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [MatchLevel](./matchlevel)

#### Remarks


For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### getMatchTimeout method
#### Syntax


    int value = eyes.getMatchTimeout();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  int

### getParentBranchName method
#### Syntax


    String value = eyes.getParentBranchName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getProxy method
#### Syntax


    AbstractProxySettings value = eyes.getProxy();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  AbstractProxySettings

The value returned is a [ProxySettings](./proxysettings) object or null if no proxy is set.

### getRotation method
#### Syntax


    ImageRotation value = eyes.getRotation();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [ImageRotation](./imagerotation)

The rotation in degrees.

### getSaveDebugScreenshots method
#### Syntax


    boolean value = eyes.getSaveDebugScreenshots();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

#### Remarks


Enable and disable saving screenshots to the local disk using the [setSaveDebugScreenshots](./eyes#setsavedebugscreenshots-method) method.

### getSaveDiffs method
#### Syntax


    Boolean value = eyes.getSaveDiffs();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  Boolean

returns true if steps that have mismatches are automatically saved to the baseline.

### getSaveNewTests method
#### Syntax


    boolean value = eyes.getSaveNewTests();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getScaleRatio method
#### Syntax


    double value = eyes.getScaleRatio();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  double

### getScrollToRegion method
#### Syntax


    boolean value = eyes.getScrollToRegion();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getServerUrl method
#### Syntax


    URI value = eyes.getServerUrl();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  URI

### locate method
#### Syntax


    List<String> names_A = Arrays.asList(new String[]{"locator_1a", "locator_1b", "locator_1c"});
    Map<String, List<Region>> locRegions5 = eyes.locate(VisualLocator.names(names_A).first()); 

#### Parameters

visualLocatorSettings

Type: [VisualLocatorSettings](./visuallocatorsettings)

An object that defines the required visual locator names and how many instances of each locator should be found. This object is created using a series of calls on a [VisualLocator](./visuallocator) object in a fluent API style. See the example below for more details.

#### Return value

Type:  Map<String, List<[Region](./region)\>>

Returns a mapping between the locator names passed as a parameter [name](#name-method) or [names](#names-method) methods and the regions in the viewport where the graphic images defined by those locator names were detected.

If the image of a particular locator name is not found in the viewport, the locator is mapped to a zero length array. If a locator name is passed, and a locator of that name has not been defined on the Eyes server, the returned locator will be mapped to a value of null instead of an array.

and each value is an object that contains the text found and its bounding rectangle.

#### Remarks


The article [Visual locators](https://applitools.com/docs/features/visual-locators.html) describes in detail how to associate locator names with graphic images and how to search for instances of the graphic in the browser viewport. The example below is a briefer description of how to search for instances of the locator graphics.

#### Example


The example below includes two calls to the method [Eyes.locate](#). These calls illustrate two ways to specify the visual locators and two ways to specify how many locators to return.

Two ways of specifying visual locators are:

*   Pass a locator string to the method [name](#name-method).
*   Pass a list of strings to the method [names](#names-method).

You can call these methods multiple times to specify multiple locators names or multiple lists of locator names.

To specify how many regions to return per locator, append one of the following methods:

*   To retrieve a maximum of one region for each locator append a call to [first](#first-method).
*   To retrieve all regions for all locators append a call to ([all](#all-method)).

Java

    //return a zero or one locator for each of the three locators defined as parameters to name()
    Map<String, List<Region>> locRegions8 = eyes.locate(
        VisualLocator.name("locator_a")
                     .name("locator_b")
                     .name("locator_c")
                     .first()); 
           
    //return all the locator found for the locators defined in the lists passed to names() or Strings passed to name()                   
    List<String> locatorList1 = Arrays.asList(new String[]{"locator_1a", "locator_1b", "locator_1c"});
    List<String> locatorList2 = Arrays.asList(new String[]{"locator_2a", "locator_2b", "locator_2c"});
    Map<String, List<Region>> locRegions9 = eyes.locate(
        VisualLocator.names(locatorList1)
                     .names(locatorList2)
                     .name("another locator")
                     .all());
    //loop through all the locators and click on the center of their region
    locRegions7.forEach((locator,regions)-> {
        for (Region region : regions) {
            click(region.getLeft()+region.getWidth()/2, region.getTop()+region.getHeight()/2);
        }
    });

//...

### open method
#### Syntax


    WebDriver outdriver = eyes.open(driver, appName, testName, viewportSize);
    
    WebDriver outdriver = eyes.open(driver, appName, testName);
    

#### Parameters

driver

Type: WebDriver

The web driver.

appName

Type: String

The application name. This may be any string. You can set the application name for all tests using the [Configuration.setAppName](./configuration#setappname-method) method. If you do so, then set this parameter to a value of null to indicate that the configuration default should be used.

testName

Type: String

The name of the test. This name must be unique within the scope of the application name. It may be any string.

viewportSize

Type: [RectangleSize](./rectanglesize)

The size of the viewport

The size of the viewport passed as an object.

The size of the viewport passed as an object {'width':, 'height':}

Defines the viewport size of the browser that will be set before the start of the test. If this parameter is not provided then the viewport size will be based on the current browser window size. See [Using viewports in Eyes](https://applitools.com/docs/topics/general-concepts/using-viewports-in-eyes.html) for more details.

#### Return value

Type:  WebDriver

The returned web driver is a clone of the driver passed as a parameter. It is recomended that you use the web driver object returned by this method in all further calls to the web driver. This allows Eyes to record these interactions and play them back in the Eyes Test Manager.

#### Remarks


After making a call to this method, you must eventually terminate the test by calling [Eyes.closeAsync](./eyes#closeasync-method) (in case of a normal completion) or [Eyes.abortAsync](./eyes#abortasync-method) (in case of an aborted test). If you want to run another test, then it is recomended to do this with a newly created Eyes instance to avoid side effects. However, in principle, it is legal to call [Eyes.Open](#open-method) again to start a new test on the same Eyes instance.

### setAgentId method
#### Syntax


    eyes.setAgentId(agentId);

#### Parameters

agentId

Type: String

The id of the agent in the format 'name/1.2.3'.

#### Return value

Type:  void

#### Remarks


To take effect, this method must be called before the call to [open](#open-method).

### setApiKey method
#### Syntax


    Configuration value = eyes.setApiKey(apiKey);
    

#### Parameters

apiKey

Type: String

A string that is your API Key.

#### Return value

Type:  [Configuration](./configuration)

#### Remarks


Set this immediately after the Eyes object is created (before calling [open](#open-method)). If you have an environment variable called APPLITOOLS_API_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value.

### setBaselineBranchName method
#### Syntax


    eyes.setBaselineBranchName(branchName);

#### Parameters

branchName

Type: String

The name of the baseline branch to use.

#### Return value

Type:  void

### setBaselineEnvName method
#### Syntax


    eyes.setBaselineEnvName(baselineEnvName);

#### Parameters

baselineEnvName

Type: String

The name of the baseline environment.

#### Return value

Type:  void

### setBatch method
#### Syntax


    eyes.setBatch( new BatchInfo(name));

#### Parameters

batch

Type: [BatchInfo](./batchinfo)

An object of the class [BatchInfo](./batchinfo) that describes the batch.

#### Return value

Type:  [Configuration](./configuration)

#### Remarks


Call this method once before the calls to the [open](#open-method) method for all tests that are supposed to be part of this batch.

### setBranchName method
#### Syntax


    eyes.setBranchName(branchName);

#### Parameters

branchName

Type: String

The name of the branch from which the baseline will be taken and saved. This may be any string.

#### Return value

Type:  void

### setConfiguration method
#### Syntax


    eyes.setConfiguration(configuration);

#### Parameters

configuration

Type: [Configuration](./configuration)

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


    eyes.setDebugScreenshotsPath(pathToSave);

#### Parameters

pathToSave

Type: String

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

Type: String

A prefix to be added to the saved checkpoint images filename.

#### Return value

Type:  void

#### Remarks


Enable and disable saving screenshots to the local disk using the [setSaveDebugScreenshots](./eyes#setsavedebugscreenshots-method) method.

### setExplicitViewportSize method
#### Syntax


    eyes.setExplicitViewportSize(explicitViewportSize);

#### Parameters

explicitViewportSize

Type: [RectangleSize](./rectanglesize)

The size of the viewport. A value of null disables the explicit size.

#### Return value

Type:  void

### setForceFullPageScreenshot method
#### Syntax


    eyes.setForceFullPageScreenshot(shouldForce);

#### Parameters

shouldForce

Type: boolean

If this paramter has a value of true, then Eyes will do scrolling and stitching if necessary. If false, then the result is browser dependent.

#### Return value

Type:  void

### setHostApp method
#### Syntax


    eyes.setHostApp(hostApp);

#### Parameters

hostApp

Type: String

The value to be used for the Host OS Property.

#### Return value

Type:  void

### setHostOS method
#### Syntax


    eyes.setHostOS(hostOS);

#### Parameters

hostOS

Type: String

The value to be used for the Host OS property.

#### Return value

Type:  void

### setIgnoreCaret method
#### Syntax


    eyes.setIgnoreCaret(value);

#### Parameters

value

Type: boolean

If set to true, then Eyes does extra processing to eliminate artifacts introduced by blinking cursors.

#### Return value

Type:  void

#### Remarks


We recommend using [setHideCaret](./configuration#sethidecaret-method) since this eliminates cursor related artifacts instead of detecting and ignoring them.

### setIsDisabled method
#### Syntax


    eyes.setIsDisabled(isDisabled);

#### Parameters

isDisabled

Type: boolean

If this has a value of true then all method calls to the SDK are ignored. Otherwise, all methods work as usual.

isDisabled

Type: Boolean

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

*   [NONE](./matchlevel)
*   [STRICT](./matchlevel)
*   [LAYOUT](./matchlevel)
*   [CONTENT](./matchlevel)
*   [EXACT](./matchlevel)

For a description of these match levels and the different ways to apply them to tests, checkpoints, and regions, see [Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

#### Return value

Type:  void

#### Remarks


For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### setMatchTimeout method
#### Syntax


    eyes.setMatchTimeout(ms);

#### Parameters

ms

Type: int

The timeout to set in milliseconds.

#### Return value

Type:  void

#### Remarks


You can overide the default timeout set by this method for a specific set checkpoint by passing a timeout to one of the check_XXXX methods that support a timeout parameter, e.g. [`checkWindow`](./eyes#checkwindow-method)You can also overide the timeout for a specific test using the check fluent [`timeout method`](#timeout-method)

### setParentBranchName method
#### Syntax


    eyes.setParentBranchName(branchName);

#### Parameters

branchName

Type: String

The branch name. This may be any string.

#### Return value

Type:  void

### setProxy method
#### Syntax


    Configuration value = eyes.setProxy(abstractProxySettings);
    

#### Parameters

abstractProxySettings

Type: AbstractProxySettings

An object that defines how to connect to the proxy server by providing the user name, password, URI and port. This is an instance of the [ProxySettings](./proxysettings) class.

#### Return value

Type:  [Configuration](./configuration)

### setRotation method
#### Syntax


    eyes.setRotation(rotation);

#### Parameters

rotation

Type: [ImageRotation](./imagerotation)

The number of degrees to rotate.

#### Return value

Type:  void

### setSaveDebugScreenshots method
#### Syntax


    eyes.setSaveDebugScreenshots(saveDebugScreenshots);

#### Parameters

saveDebugScreenshots

Type: boolean

If set to true, then checkpoint images is saved to a local directory.

#### Return value

Type:  void

### setSaveDiffs method
#### Syntax


    eyes.setSaveDiffs(saveDiffs);

#### Parameters

saveDiffs

Type: Boolean

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

Type: Double

The scale ratio to use.

#### Return value

Type:  void

### setScrollToRegion method
#### Syntax


    eyes.setScrollToRegion(shouldScroll);

#### Parameters

shouldScroll

Type: boolean

If set to true, then before a region is matched, Eyes will automatically scroll to the region. If set to false, then Eyes will not scroll.

#### Return value

Type:  void

### setServerUrl method
#### Syntax


    eyes.setServerUrl('https://myEyesServer');
    eyes.setServerUrl(new URI('https://myEyesServer');

#### Parameters

serverUrl

Type: String

The URL of the Eyes server. Pass a value of null to use the default cloud server.

serverUrl

Type: URI

The URI of your Eyes server in URI format. Pass a value of null to use the default cloud server.

#### Return value

Type:  [Configuration](./configuration)

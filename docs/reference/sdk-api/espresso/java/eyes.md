# Eyes class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Espresso</b>
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

    import com.applitools.eyes.android.espresso.Eyes;
    	



### Eyes method
#### Syntax


    Eyes eyes = new Eyes();
    
    Eyes eyes = new Eyes(eyesRunner);
    

#### Parameters

eyesRunner

Type: EyesRunner

If this parameter is provided, it must be an instance of the [ClassicRunner](./classicrunner) class.

#### Return value

Type:  [Eyes](./eyes)

Use the object returned to call the various methods provided by the Eyes class.


### abortIfNotClosed method
#### Syntax


    eyes.abortIfNotClosed();

#### Parameters

This method does not take any parameters.

#### Return value

Type:  void

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

### check method
#### Syntax


    eyes.check(checkSettings);
    eyes.check(name, checkSettings);

#### Parameters

checkSettings

Type: ICheckSettings

The fluent API calls, starting with one of the [Target](./target) methods.

name

Type: String

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

#### Return value

Type:  void

#### Remarks


For a detailed description of how to use this method see [The Eyes SDK check Fluent API](https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html).

### checkElement method
#### Syntax


    eyes.checkElement(elementId);
    eyes.checkElement(elementId, tag);

#### Parameters

elementId

Type: int

the Id that identifies the element.

tag

Type: String

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

#### Return value

Type:  void

### checkGoogleMapFragment method
#### Syntax


    eyes.checkGoogleMapFragment(fragmentId, isSupportMapFragment);
    eyes.checkGoogleMapFragment(fragmentId, isSupportMapFragment, timeout);
    eyes.checkGoogleMapFragment(fragmentId, isSupportMapFragment, tag);
    eyes.checkGoogleMapFragment(fragmentId, isSupportMapFragment, tag, timeout);

#### Parameters

fragmentId

Type: int

fragmentId

isSupportMapFragment

Type: boolean

This parameter defines the type of fragment passed. If it is true then the fragement passsed is of the type SupportMapFragment. If it is false then the fragement passsed is of the type MapFragment.

timeout

Type: long

The timeout in milliseconds. If this time is exceeded then Eyes will generate a GoogleMapScreenshotTimeoutException exception.

tag

Type: String

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

#### Return value

Type:  void

### checkGoogleMapView method
#### Syntax


    eyes.checkGoogleMapView(mapViewId);
    eyes.checkGoogleMapView(mapViewId, timeout);
    eyes.checkGoogleMapView(mapViewId, tag);
    eyes.checkGoogleMapView(mapViewId, tag, timeout);

#### Parameters

mapViewId

Type: int

The mapview id that defines what view to capture

timeout

Type: long

The timeout in milliseconds. If this time is exceeded then Eyes will generate a GoogleMapScreenshotTimeoutException exception.

tag

Type: String

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

#### Return value

Type:  void

### checkRegion method
#### Syntax


    eyes.checkRegion(region);
    eyes.checkRegion(region, tag);
    eyes.checkRegion(matcher);
    eyes.checkRegion(matcher, tag);

#### Parameters

region

Type: [Region](./region)

A non-empty region representing the screen region to check in screenshot pixel coordinates.

tag

Type: String

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

matcher

Type: Matcher

The Matcher types can be any of the following Hamcrest Matchers: ViewMatcher, RootMatcher, LayoutMatcher or PreferenceMatcher

#### Return value

Type:  void

### checkWindow method
#### Syntax


    eyes.checkWindow();
    eyes.checkWindow(tag);

#### Parameters

tag

Type: String

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

#### Return value

Type:  void

### checkWindowAllLayers method
#### Syntax


    eyes.checkWindowAllLayers();
    eyes.checkWindowAllLayers(tag);

#### Parameters

tag

Type: String

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

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

### getAppName method
#### Syntax


    String value = eyes.getAppName();
    

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

### getBranchName method
#### Syntax


    String value = eyes.getBranchName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getConfiguration method
#### Syntax


    Configuration value = eyes.getConfiguration();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [Configuration](./configuration)

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

### getDeviceInfo method
#### Syntax


    String value = eyes.getDeviceInfo();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getForceFullPageScreenshot method
#### Syntax


    boolean value = eyes.getForceFullPageScreenshot();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

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

Return true if the [Eyes.open](#open-method) method has been called on an eyes instance, and [Eyes.close](#close-method) or [Eyes.abortIfNotClosed](./eyes#abortifnotclosed-method) have not yet been called.

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

### getServerUrl method
#### Syntax


    URI value = eyes.getServerUrl();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  URI

### getStitchOverlap method
#### Syntax


    int value = eyes.getStitchOverlap();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  int

The stiching overlap in pixels.

### isHideCaret method
#### Syntax


    boolean value = eyes.isHideCaret();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### open method
#### Syntax


    eyes.open(testName);
    eyes.open(appName, testName);

#### Parameters

testName

Type: String

The name of the test. This name must be unique within the scope of the application name. It may be any string.

appName

Type: String

The application name. This may be any string. You can set the application name for all tests using the [Configuration.setAppName](./configuration#setappname-method) method or [Eyes.setAppName](./eyes#setappname-method) method. If you do so, then set this parameter to a value of null to indicate that the configuration default should be used.

#### Return value

Type:  void

#### Remarks


After making a call to this method, you must eventually terminate the test by calling [Eyes.close](#close-method) (in case of a normal completion) or [Eyes.abortIfNotClosed](./eyes#abortifnotclosed-method) (in case of an aborted test). If you want to run another test, then it is recomended to do this with a newly created Eyes instance to avoid side effects. However, in principle, it is legal to call [Eyes.Open](#open-method) again to start a new test on the same Eyes instance.

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


    eyes.setApiKey(apiKey);

#### Parameters

apiKey

Type: String

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

Type: String

The application name. This may be any string.

#### Return value

Type:  void

#### Remarks


If you call this method, it must be called before the call to [Eyes.open](#open-method). In the call to [Eyes.open](#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used.

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

Type:  void

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

### setComponentsProvider method
#### Syntax


    eyes.setComponentsProvider(componentsProvider);

#### Parameters

componentsProvider

Type: IComponentsProvider

Pass a value of new AndroidXComponentsProvider()

#### Return value

Type:  void

#### Example


    
    import com.applitools.eyes.android.components.androidx.AndroidXComponentsProvider;
    //...
    ClassicRunner runner = new ClassicRunner()
    Eyes eyes = new Eyes(runner);
    eyes.setComponentsProvider(new AndroidXComponentsProvider());

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

### setDeviceInfo method
#### Syntax


    eyes.setDeviceInfo(deviceInfo);

#### Parameters

deviceInfo

Type: String

The name of the device - this is displayed in the Device column in the Test Manager.

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


We recommend using this method instead of [Eyes.setIgnoreCaret](./eyes#setignorecaret-method), [Configuration.setIgnoreCaret](./configuration#setignorecaret-method) or [EspressoCheckSettings.ignoreCaret](./checksettings#ignorecaret-method), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them.

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


We recommend using [setHideCaret](./eyes#sethidecaret-method), [setHideCaret](./configuration#sethidecaret-method) or [hideCaret](./checksettings#hidecaret-method) since this eliminates cursor related artifacts instead of detecting and ignoring them.

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


    eyes.setProxy(proxySettings);

#### Parameters

proxySettings

Type: [ProxySettings](./proxysettings)

An object that defines how to connect to the proxy server by providing the user name, password, URI and port. This is an instance of the [ProxySettings](./proxysettings) class.

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

### setServerUrl method
#### Syntax


    eyes.setServerUrl('https://myEyesServer');
    eyes.setServerUrl(new URI('https://myEyesServer');

#### Parameters

serverUrl

Type: URI

The URL of the Eyes server. Pass a value of null to use the default cloud server.

#### Return value

Type:  void

### setStitchOverlap method
#### Syntax


    eyes.setStitchOverlap(pixels);

#### Parameters

pixels

Type: int

The width of the stitch overlap in pixels.

#### Return value

Type:  void

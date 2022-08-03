# Eyes class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
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

    import com.applitools.eyes.images.Eyes;
    	



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


    boolean value = eyes.check(name, checkSettings);
    

#### Parameters

name

Type: String

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

checkSettings

Type: ICheckSettings

The fluent API calls, starting with one of the [Target](./target) methods.

#### Return value

Type:  boolean

A return value of true indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of false depends on whether this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of false, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned false, all the following checkpoints will also return false. This does not mean that the checkpoint mismatched; it means that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [close](#close-method) method.

#### Remarks


For a detailed description of how to use this method see [The Eyes SDK check Fluent API](https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html).

### checkImage method
#### Syntax


    boolean value = eyes.checkImage(image);
    
    boolean value = eyes.checkImage(image, tag);
    
    boolean value = eyes.checkImage(image, tag, ignoreMismatch);
    
    boolean value = eyes.checkImage(path);
    
    boolean value = eyes.checkImage(path, tag);
    
    boolean value = eyes.checkImage(path, tag, ignoreMismatch);
    
    
    
    

#### Parameters

image

Type: BufferedImage

An image in a buffer.

tag

Type: String

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

ignoreMismatch

Type: boolean

This parameter is used to implement retry of a checkpoint. If you are not implementing retry, then don't pass this parameter or pass a value of false. To implement retry, on all retry attempts apart from the last, pass this parameter a value of true. When the method returns, check the return value. A returned value of true means that the checkpoint passed, and you can continue with the next checkpoint. A returned value of false means that that the checkpoint did not match. Since this parameter was passed as true, Eyes will not store the outcome of this checkpoint and will expect that the next image sent is for the current step (i.e. is being retried). On the last retry attempt, pass a value of false. This way, Eyes knows that there will be no more retries, and it will store the results of the last check as the result of the current step. The next checkpoint sent will be treated as the next step. Note that since Eyes allows for new or deleted steps, once there is a mismatch for one step, all subsequent steps will also return a mismatch, and Eyes determines the actual match/mismatch/new/missing status of all the steps when the test is closed.

path

Type: String

The file system path to a file that contains the image.

image

Type: byte\[\]

The image as a byte stream (as it appears in the PNG image file).

#### Return value

Type:  boolean

A return value of true indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of false depends on whether this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of false, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned false, all the following checkpoints will also return false. This does not mean that the checkpoint mismatched; it means that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [close](#close-method) method.

### checkRegion method
#### Syntax


    boolean value = eyes.checkRegion(image, region, tag, ignoreMismatch);
    
    eyes.checkRegion(image, region, tag);
    eyes.checkRegion(image, region);

#### Parameters

image

Type: BufferedImage

An image stored in a buffer in PNG format.

region

Type: [Region](./region)

A non-empty region representing the screen region to check in screenshot pixel coordinates.

tag

Type: String

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

ignoreMismatch

Type: boolean

This parameter is used to implement retry of a checkpoint. If you are not implementing retry, then don't pass this parameter or pass a value of false. To implement retry, on all retry attempts apart from the last, pass this parameter a value of true. When the method returns, check the return value. A returned value of true means that the checkpoint passed, and you can continue with the next checkpoint. A returned value of false means that that the checkpoint did not match. Since this parameter was passed as true, Eyes will not store the outcome of this checkpoint and will expect that the next image sent is for the current step (i.e. is being retried). On the last retry attempt, pass a value of false. This way, Eyes knows that there will be no more retries, and it will store the results of the last check as the result of the current step. The next checkpoint sent will be treated as the next step. Note that since Eyes allows for new or deleted steps, once there is a mismatch for one step, all subsequent steps will also return a mismatch, and Eyes determines the actual match/mismatch/new/missing status of all the steps when the test is closed.

#### Return value

Type:  boolean

A return value of true indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of false depends on whether this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of false, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned false, all the following checkpoints will also return false. This does not mean that the checkpoint mismatched; it means that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [close](#close-method) method.

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

### getServerUrl method
#### Syntax


    URI value = eyes.getServerUrl();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  URI

### getViewportSize method
#### Syntax


    RectangleSize value = eyes.getViewportSize();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [RectangleSize](./rectanglesize)

### open method
#### Syntax


    eyes.open(appName, testName, dimensions);
    eyes.open(appName, testName);

#### Parameters

appName

Type: String

The application name. This may be any string. You can set the application name for all tests using the [Configuration.setAppName](./configuration#setappname-method) method or [Eyes.setAppName](./eyes#setappname-method) method. If you do so, then set this parameter to a value of null to indicate that the configuration default should be used.

testName

Type: String

The name of the test. This name must be unique within the scope of the application name. It may be any string.

dimensions

Type: [RectangleSize](./rectanglesize)

If this parameter is not provided, and the viewport was not set using the [setViewportSize](./eyes#setviewportsize-method) method, then the viewport size is taken from the dimensions of the image of the first checkpoint. For the image SDK this is used to identify the baseline and does not affect the way the checkpoint image is processed in any other way.

#### Return value

Type:  void

#### Remarks


After making a call to this method, you must eventually terminate the test by calling [Eyes.closeAsync](./eyes#closeasync-method) (in case of a normal completion) or [Eyes.abortAsync](./eyes#abortasync-method) (in case of an aborted test). If you want to run another test, then it is recomended to do this with a newly created Eyes instance to avoid side effects. However, in principle, it is legal to call [Eyes.Open](#open-method) again to start a new test on the same Eyes instance.

### setAgentId method
#### Syntax


    Configuration value = eyes.setAgentId(agentId);
    

#### Parameters

agentId

Type: String

The id of the agent in the format 'name/1.2.3'.

#### Return value

Type:  [Configuration](./configuration)

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

### setAppName method
#### Syntax


    Configuration value = eyes.setAppName(appName);
    

#### Parameters

appName

Type: String

The application name. This may be any string.

#### Return value

Type:  [Configuration](./configuration)

#### Remarks


If you call this method, it must be called before the call to [Eyes.open](#open-method). In the call to [Eyes.open](#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used.

### setBaselineBranchName method
#### Syntax


    Configuration value = eyes.setBaselineBranchName(branchName);
    

#### Parameters

branchName

Type: String

The name of the baseline branch to use.

#### Return value

Type:  [Configuration](./configuration)

### setBaselineEnvName method
#### Syntax


    Configuration value = eyes.setBaselineEnvName(baselineEnvName);
    

#### Parameters

baselineEnvName

Type: String

The name of the baseline environment.

#### Return value

Type:  [Configuration](./configuration)

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


    Configuration value = eyes.setBranchName(branchName);
    

#### Parameters

branchName

Type: String

The name of the branch from which the baseline will be taken and saved. This may be any string.

#### Return value

Type:  [Configuration](./configuration)

### setConfiguration method
#### Syntax


    eyes.setConfiguration(config);

#### Parameters

config

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

### setHostApp method
#### Syntax


    Configuration value = eyes.setHostApp(hostApp);
    

#### Parameters

hostApp

Type: String

The value to be used for the Host OS Property.

#### Return value

Type:  [Configuration](./configuration)

### setHostOS method
#### Syntax


    Configuration value = eyes.setHostOS(hostOS);
    

#### Parameters

hostOS

Type: String

The value to be used for the Host OS property.

#### Return value

Type:  [Configuration](./configuration)

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


    Configuration value = eyes.setMatchLevel(matchLevel);
    

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

#### Remarks


For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### setParentBranchName method
#### Syntax


    Configuration value = eyes.setParentBranchName(branchName);
    

#### Parameters

branchName

Type: String

The branch name. This may be any string.

#### Return value

Type:  [Configuration](./configuration)

### setProxy method
#### Syntax


    Configuration value = eyes.setProxy(abstractProxySettings);
    

#### Parameters

abstractProxySettings

Type: AbstractProxySettings

An object that defines how to connect to the proxy server by providing the user name, password, URI and port. This is an instance of the [ProxySettings](./proxysettings) class.

#### Return value

Type:  [Configuration](./configuration)

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


    Configuration value = eyes.setSaveDiffs(saveDiffs);
    

#### Parameters

saveDiffs

Type: Boolean

If this has a value of true, then the baseline will be updated with checkpoints that have mismatches.

#### Return value

Type:  [Configuration](./configuration)

### setSaveNewTests method
#### Syntax


    Configuration value = eyes.setSaveNewTests(saveNewTests);
    

#### Parameters

saveNewTests

Type: boolean

If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior).

#### Return value

Type:  [Configuration](./configuration)

### setScaleRatio method
#### Syntax


    eyes.setScaleRatio(scaleRatio);

#### Parameters

scaleRatio

Type: Double

The scale ratio to use.

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

### setViewportSize method
#### Syntax


    Configuration value = Eyes.setViewportSize(size);
    

#### Parameters

size

Type: [RectangleSize](./rectanglesize)

The size of the viewport

The size of the viewport passed as an object.

The size of the viewport passed as an object {'width':, 'height':}

#### Return value

Type:  [Configuration](./configuration)

#### Remarks


*   Call this method before the call to [Eyes.open](#open-method). Then, when calling the open method, don't pass the viewportSize parameter.

This method is a static method.

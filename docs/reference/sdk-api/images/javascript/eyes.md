# Eyes class
<div class='platform-bar-container-div'>Type: <div class='platform-bar-div'>Platform: <b>Images</b>
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

Require statement

    const {Eyes} = require('@applitools/eyes-images');
    	



### Eyes method
#### Syntax


    let eyes = new Eyes();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [Eyes](./eyes)

Use the object returned to call the various methods provided by the Eyes class.


### abort method
#### Syntax


    let result = await eyes.abort();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  Promise<?[TestResults](./testresults)\>

#### Remarks


If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored.

### abortIfNotClosed method
#### Syntax


    let result = await eyes.abortIfNotClosed();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  Promise<?[TestResults](./testresults)\>

#### Remarks


If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored.

### addProperty method
#### Syntax


    eyes.addProperty(name, value);
    

#### Parameters

name

Type: string

The name of the property.

value

Type: string

The value associated with the name.

#### Return value

Type: 

#### Remarks


*   Set multiple properties by calling [Eyes.addProperty](#) or [Configuration.addProperty](./configuration#addproperty-method) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run.

### check method
#### Syntax


    let result = await eyes.check(name, checkSettings);
    

#### Parameters

name

Type: string

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

checkSettings

Type: 

    ImagesCheckSettings|CheckSettings

The fluent API calls, starting with one of the [Target](./target) methods.

#### Return value

Type:  Promise`<boolean>`

A return value of true indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of false depends on whether this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of false, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned false, all the following checkpoints will also return false. This does not mean that the checkpoint mismatched; it means that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [close](#close-method) method.

#### Remarks


For a detailed description of how to use this method see [The Eyes SDK check Fluent API](https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html).

### checkImage method
#### Syntax


    let result = await eyes.checkImage(base64String, name, ignoreMismatch);
    
    let result = await eyes.checkImage(base64String, name);
    
    let result = await eyes.checkImage(base64String);
    
    let result = await eyes.checkImage(url, name, ignoreMismatch);
    
    let result = await eyes.checkImage(url, name);
    
    let result = await eyes.checkImage(url);
    
    let result = await eyes.checkImage(filePath, name, ignoreMismatch);
    
    let result = await eyes.checkImage(filePath, name);
    
    let result = await eyes.checkImage(filePath);
    
    let result = await eyes.checkImage(imageBuffer, name, ignoreMismatch);
    
    let result = await eyes.checkImage(imageBuffer, name);
    
    let result = await eyes.checkImage(imageBuffer);
    

#### Parameters

base64String

Type: string

The checkpoint image in PNG format, encoded in base64.

name

Type: string \[Optional \]

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

ignoreMismatch

Type: boolean \[Optional \]

This parameter is used to implement retry of a checkpoint. If you are not implementing retry, then don't pass this parameter or pass a value of false. To implement retry, on all retry attempts apart from the last, pass this parameter a value of true. When the method returns, check the return value. A returned value of true means that the checkpoint passed, and you can continue with the next checkpoint. A returned value of false means that that the checkpoint did not match. Since this parameter was passed as true, Eyes will not store the outcome of this checkpoint and will expect that the next image sent is for the current step (i.e. is being retried). On the last retry attempt, pass a value of false. This way, Eyes knows that there will be no more retries, and it will store the results of the last check as the result of the current step. The next checkpoint sent will be treated as the next step. Note that since Eyes allows for new or deleted steps, once there is a mismatch for one step, all subsequent steps will also return a mismatch, and Eyes determines the actual match/mismatch/new/missing status of all the steps when the test is closed.

url

Type: string

A string with the URL of the checkpoint image. The image must be in PNG format.

filePath

Type: string

A string with the file system path to the checkpoint image file. The image must be in PNG format.

imageBuffer

Type: Buffer

The checkpoint image as an object in PNG format.

#### Return value

Type:  Promise`<boolean>`

A return value of true indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of false depends on whether this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of false, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned false, all the following checkpoints will also return false. This does not mean that the checkpoint mismatched; it means that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [close](#close-method) method.

#### Remarks


This method can take three different types of string: a base64 image, a URL, and a file path. It inspects the format of the data to decide if what it has is an image, a URL, or a filepath.

### checkRegion method
#### Syntax


    let result = await eyes.checkRegion(base64String, region, name, ignoreMismatch);
    
    let result = await eyes.checkRegion(base64String, region, name);
    
    let result = await eyes.checkRegion(base64String, region);
    
    let result = await eyes.checkRegion(url, region, name, ignoreMismatch);
    
    let result = await eyes.checkRegion(url, region, name);
    
    let result = await eyes.checkRegion(url, region);
    
    let result = await eyes.checkRegion(filePath, region, name, ignoreMismatch);
    
    let result = await eyes.checkRegion(filePath, region, name);
    
    let result = await eyes.checkRegion(filePath, region);
    
    let result = await eyes.checkRegion(imageBuffer, region, name, ignoreMismatch);
    
    let result = await eyes.checkRegion(imageBuffer, region, name);
    
    let result = await eyes.checkRegion(imageBuffer, region);
    

#### Parameters

base64String

Type: string

The checkpoint image in PNG format, encoded in base64.

region

Type: 

    Region|RegionObject

A non-empty region representing the screen region to check in screenshot pixel coordinates.

#### Type definitions

RegionObject

The type RegionObject is defined as: {left:number,top:number,width:number,height:number,coordinatesType: CoordinatesType|undefined} The field coordinatesType is for internal use only and should not be set by users.

name

Type: string \[Optional \]

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

ignoreMismatch

Type: boolean \[Optional \]

This parameter is used to implement retry of a checkpoint. If you are not implementing retry, then don't pass this parameter or pass a value of false. To implement retry, on all retry attempts apart from the last, pass this parameter a value of true. When the method returns, check the return value. A returned value of true means that the checkpoint passed, and you can continue with the next checkpoint. A returned value of false means that that the checkpoint did not match. Since this parameter was passed as true, Eyes will not store the outcome of this checkpoint and will expect that the next image sent is for the current step (i.e. is being retried). On the last retry attempt, pass a value of false. This way, Eyes knows that there will be no more retries, and it will store the results of the last check as the result of the current step. The next checkpoint sent will be treated as the next step. Note that since Eyes allows for new or deleted steps, once there is a mismatch for one step, all subsequent steps will also return a mismatch, and Eyes determines the actual match/mismatch/new/missing status of all the steps when the test is closed.

url

Type: string

A string with the URL of the checkpoint image. The image must be in PNG format.

filePath

Type: string

A string with the file system path to the checkpoint image file. The image must be in PNG format.

imageBuffer

Type: Buffer

The checkpoint image as an object in PNG format.

#### Return value

Type:  Promise`<boolean>`

A return value of true indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of false depends on whether this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of false, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned false, all the following checkpoints will also return false. This does not mean that the checkpoint mismatched; it means that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [close](#close-method) method.

#### Remarks


This method can take three different types of string: a base64 image, a URL, and a file path. It inspects the format of the data to decide if what it has is an image, a URL, or a filepath.

### clearProperties method
#### Syntax


    eyes.clearProperties();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type: 

### close method
#### Syntax


    let result = await eyes.close(throwEx);
    
    let result = await eyes.close();
    

#### Parameters

throwEx

Type: boolean \[Optional : default = true \]

If this parameter has a value of true, then if there are new, missing, or mismatched steps, an exception will be thrown. If the parameter is set to false, then an exception will not be thrown for the above cases. If the parameter is not passed, then it is as if a true value was passed.

#### Return value

Type:  Promise<[TestResults](./testresults)\>

The result of the test can be obtained from the object returned. See [TestResults class](./testresults) for a list of what information can be obtained from this object. See [TestResults class](./testresults) for a list of what information can be obtained from this object.

### getAgentId method
#### Syntax


    let value = eyes.getAgentId();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

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
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

Return true if the [Eyes.open](#open-method) method has been called on an eyes instance, and [Eyes.close](#close-method), [Eyes.abort](#abort-method) or [Eyes.abortIfNotClosed](./eyes#abortifnotclosed-method) have not yet been called.

### getMatchLevel method
#### Syntax


    let value = eyes.getMatchLevel();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [MatchLevel](./matchlevel)

#### Remarks


For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

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

### getServerUrl method
#### Syntax


    let value = eyes.getServerUrl();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getViewportSize method
#### Syntax


    eyes.getViewportSize();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type: 

### open method
#### Syntax


    await eyes.open(appName, testName, imageSize);
    await eyes.open(appName, testName);
    

#### Parameters

appName

Type: string

The application name. This may be any string. You can set the application name for all tests using the [Configuration.setAppName](./configuration#setappname-method) method or [Eyes.setAppName](./eyes#setappname-method) method. If you do so, then set this parameter to a value of null to indicate that the configuration default should be used.

testName

Type: string

The name of the test. This name must be unique within the scope of the application name. It may be any string.

imageSize

Type: [RectangleSize](./rectanglesize) \[Optional \]

If this parameter is not provided, and the viewport was not set using the [setViewportSize](./eyes#setviewportsize-method) method, then the viewport size is taken from the dimensions of the image of the first checkpoint. For the image SDK this is used to identify the baseline and does not affect the way the checkpoint image is processed in any other way.

#### Return value

Type:  Promise

#### Remarks


After making a call to this method, you must eventually terminate the test by calling [Eyes.close](#close-method) (in case of a normal completion) or [Eyes.abort](#abort-method) (in case of an aborted test). If you want to run another test, then it is recomended to do this with a newly created Eyes instance to avoid side effects. However, in principle, it is legal to call [Eyes.Open](#open-method) again to start a new test on the same Eyes instance.

### replaceImage method
#### Syntax


    let result = await eyes.replaceImage(stepIndex, image, tag, title, userInputs);
    
    let result = await eyes.replaceImage(stepIndex, image, tag, title);
    
    let result = await eyes.replaceImage(stepIndex, image, tag);
    
    let result = await eyes.replaceImage(stepIndex, image);
    

#### Parameters

stepIndex

Type: number

The index number of the checkpoint (the first checkpoint is zero).

image

Type: 

    string|Buffer|MutableImage

The image for this checkpoint in PNG format.

tag

Type: string \[Optional \]

Replace the tag originally defined for the checkpoint.If this parameter is not passed, then the default tag is used.

title

Type: string \[Optional \]

Replace the `<title>` tag in the checkpoint metadata.If this parameter is not passed, then the title in the metadata is undefined.

userInputs

Type: Trigger\[\] \[Optional \]

Replace the list of user actions recorded for this checkpoint.If this parameter is not passed, then this checkpoint does not have any associated user actions.

#### Return value

Type:  Promise`<boolean>`

### replaceWindow method
#### Syntax


    let result = await eyes.replaceWindow(
      stepIndex,
      screenshot,
      tag,
      title,
      userInputs
    );
    
    let result = await eyes.replaceWindow(stepIndex, screenshot, tag, title);
    
    let result = await eyes.replaceWindow(stepIndex, screenshot, tag);
    
    let result = await eyes.replaceWindow(stepIndex, screenshot);
    

#### Parameters

stepIndex

Type: number

The zero-based index of the step in which to replace the actual image.

screenshot

Type: Buffer

The PNG bytes of the updated screenshot.

tag

Type: string \[Optional \]

The updated tag for the checkpoint.

title

Type: string \[Optional \]

The updated `<title>` tag for the checkpoint.

userInputs

Type: Trigger\[\] \[Optional \]

The updated userInputs for the checkpoint.

#### Return value

Type:  Promise<[MatchResult](./matchresult)\>

A promise which, when resolved, takes a value of true as a parameter, if the image matched. Otherwise, it will have a value of false.

### setAgentId method
#### Syntax


    eyes.setAgentId(agentId);
    

#### Parameters

agentId

Type: string

The id of the agent in the format 'name/1.2.3'.

#### Return value

Type: 

#### Remarks


To take effect, this method must be called before the call to [open](#open-method).

### setApiKey method
#### Syntax


    eyes.setApiKey(apiKey);
    

#### Parameters

apiKey

Type: string

A string that is your API Key.

#### Return value

Type: 

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

Type: 

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

Type: 

### setBaselineEnvName method
#### Syntax


    eyes.setBaselineEnvName(baselineEnvName);
    

#### Parameters

baselineEnvName

Type: string

The name of the baseline environment.

#### Return value

Type: 

### setBatch method
#### Syntax


    eyes.setBatch(batchOrName, batchId, startedAt);
    eyes.setBatch(batchOrName, batchId);
    eyes.setBatch(batchOrName);
    

#### Parameters

batchOrName

Type: 

    BatchInfo|BatchInfoObject|string

#### Type definitions

BatchInfoObject

The type BatchInfoObject is defined as: {id:(string|undefined),name:(string|undefined),startedAt:(Date|string|undefined),sequenceName:(string|undefined),notifyOnCompletion:(boolean|undefined)}.

batchId

Type: string \[Optional \]

If the first parameter is a batch name string (and not a BatchInfo object), then the value passed for this parameter will be used as the id of the created object. All tests that have the same batch ID will appear in the Test results in the same batch. If the value is a falsy value or is not passed and the environment variable APPLITOOLS_BATCH_ID is defined, then the value of the environment variable will be used as the ID. Otherwise, an internal id will be generated.

startedAt

Type: string \[Optional \]

If the value is a falsey value or is not passed, then the current date and time will be used.

#### Return value

Type: 

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

Type: 

### setConfiguration method
#### Syntax


    eyes.setConfiguration(configuration);
    

#### Parameters

configuration

Type: 

    Configuration|object

A configuration object that has the various properties/methods set to the required values.

#### Return value

Type: 

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

Type: string

A pathname where saved checkpoint images should be stored.

#### Return value

Type: 

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

Type: 

#### Remarks


Enable and disable saving screenshots to the local disk using the [setSaveDebugScreenshots](./eyes#setsavedebugscreenshots-method) method.

### setDeviceInfo method
#### Syntax


    eyes.setDeviceInfo(value);
    

#### Parameters

value

Type: string

The name of the device - this is displayed in the Device column in the Test Manager.

#### Return value

Type: 

### setExplicitViewportSize method
#### Syntax


    eyes.setExplicitViewportSize(explicitViewportSize);
    

#### Parameters

explicitViewportSize

Type: [RectangleSize](./rectanglesize)

The size of the viewport. A value of null disables the explicit size.

#### Return value

Type: 

### setHostApp method
#### Syntax


    eyes.setHostApp(value);
    

#### Parameters

value

Type: string

The value to be used for the Host OS Property.

#### Return value

Type: 

### setHostOS method
#### Syntax


    eyes.setHostOS(value);
    

#### Parameters

value

Type: string

The value to be used for the Host OS property.

#### Return value

Type: 

### setIgnoreCaret method
#### Syntax


    eyes.setIgnoreCaret(value);
    

#### Parameters

value

Type: boolean

If set to true, then Eyes does extra processing to eliminate artifacts introduced by blinking cursors.

#### Return value

Type: 

### setIsDisabled method
#### Syntax


    eyes.setIsDisabled(isDisabled);
    

#### Parameters

isDisabled

Type: boolean

If this has a value of true then all method calls to the SDK are ignored. Otherwise, all methods work as usual.

#### Return value

Type: 

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

Type: 

#### Remarks


For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### setParentBranchName method
#### Syntax


    eyes.setParentBranchName(parentBranchName);
    

#### Parameters

parentBranchName

Type: string

The branch name. This may be any string.

#### Return value

Type: 

### setProxy method
#### Syntax


    eyes.setProxy(proxySettings);
    eyes.setProxy(isEnabled);
    eyes.setProxy(url, username, password);
    eyes.setProxy(url, username);
    eyes.setProxy(url);
    

#### Parameters

proxySettings

Type: [ProxySettings](./proxysettings)

An object that defines how to connect to the proxy server by providing the user name, password, URI and port. This is an instance of the [ProxySettings](./proxysettings) class.

isEnabled

Type: boolean

If this parameter is provided, then it must have a value of false, and it means that use of the proxy is disabled.

url

Type: string

The proxy URL to be used by the serverConnector. If it has a value of then no proxy is set.

username

Type: string \[Optional \]

The string to pass as the username.

password

Type: string \[Optional \]

The string to pass as the password.

#### Return value

Type: 

### setSaveDebugScreenshots method
#### Syntax


    eyes.setSaveDebugScreenshots(saveDebugScreenshots);
    

#### Parameters

saveDebugScreenshots

Type: boolean

If set to true, then checkpoint images is saved to a local directory.

#### Return value

Type: 

### setSaveDiffs method
#### Syntax


    eyes.setSaveDiffs(saveDiffs);
    

#### Parameters

saveDiffs

Type: boolean

If this has a value of true, then the baseline will be updated with checkpoints that have mismatches.

#### Return value

Type: 

### setSaveNewTests method
#### Syntax


    eyes.setSaveNewTests(saveNewTests);
    

#### Parameters

saveNewTests

Type: boolean

If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior).

#### Return value

Type: 

### setScaleRatio method
#### Syntax


    eyes.setScaleRatio(scaleRatio);
    eyes.setScaleRatio();
    

#### Parameters

scaleRatio

Type: number \[Optional : default = 1 \]

The scale ratio to use.

#### Return value

Type: 

### setServerUrl method
#### Syntax


    eyes.setServerUrl("https://myEyesServer");
    

#### Parameters

serverUrl

Type: string

The URL of the Eyes server. Pass a value of null to use the default cloud server.

#### Return value

Type: 

### setViewportSize method
#### Syntax


    await Eyes.setViewportSize(viewportSize);
    

#### Parameters

viewportSize

Type: 

    RectangleSize|RectangleSizeObject

The size of the viewport

The size of the viewport passed as an object.

The size of the viewport passed as an object {'width':, 'height':}

#### Type definitions

RectangleSizeObject

The type RectangleSizeObject is defined as: {width:number,height:number}.

#### Return value

Type:  Promise

#### Remarks


*   Call this method before the call to [Eyes.open](#open-method). Then, when calling the open method, don't pass the viewportSize parameter.

This method is a static method.

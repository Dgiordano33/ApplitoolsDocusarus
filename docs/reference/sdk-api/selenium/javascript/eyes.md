# Eyes class
<div class='platform-bar-container-div'>Type: <div class='platform-bar-div'>Platform: <b>Selenium</b>
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

    const {Eyes} = require('const EyesSDK = require('eyes.selenium'))');
    	



### eyes method
#### Syntax


    let eyes = new Eyes();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [Eyes](./eyes)

Use the object returned to call the various methods provided by the Eyes class.


### abortIfNotClosed method
#### Syntax


    eyes.abortIfNotClosed();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type: 

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


*   You should not assign a given value to a property more than once in a given test run.

### check method
#### Syntax


    let result = await eyes.check(name, target);
    

#### Parameters

name

Type: string

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

target

Type: [Target](./target)

t b d what this is

#### Return value

Type:  Promise`<boolean>`

#### Remarks


For a detailed description of how to use this method see [The Eyes SDK check Fluent API](https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html).

### checkElement method
#### Syntax


    let result = await eyes.checkElement(element, matchTimeout, tag);
    

#### Parameters

element

Type: EyesRemoteWebElement

An element whose position and bounding rectangle defines the region.

matchTimeout

Type: int

The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout.

tag

Type: string

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

#### Return value

Type:  Promise`<boolean>`

### checkElementBy method
#### Syntax


    let result = await eyes.checkElementBy(locator, matchTimeout, tag);
    

#### Parameters

locator

Type: webdriver.By

locator - The element to check.

matchTimeout

Type: int

The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout.

tag

Type: string

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

#### Return value

Type:  Promise`<boolean>`

### checkFrame method
#### Syntax


    let result = await eyes.checkFrame(element, matchTimeout, tag);
    

#### Parameters

element

Type: EyesRemoteWebElement

An element whose position and bounding rectangle defines the region.

matchTimeout

Type: int

The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout.

tag

Type: string

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

#### Return value

Type:  Promise`<boolean>`

### checkRegion method
#### Syntax


    let result = await eyes.checkRegion(region, tag, matchTimeout);
    

#### Parameters

region

Type: { left: number; top: number; width: number; height: number }; 

A non-empty region representing the screen region to check in screenshot pixel coordinates.

tag

Type: string

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

matchTimeout

Type: number

The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout.

#### Return value

Type:  Promise`<boolean>`

### checkRegionBy method
#### Syntax


    let result = await eyes.checkRegionBy(by, tag, matchTimeout);
    

#### Parameters

by

Type: 

    webdriver.WebElement|EyesRemoteWebElement

An element selector which is chosen using the Selenium By class.

tag

Type: string

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

matchTimeout

Type: number

The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout.

#### Return value

Type:  Promise`<boolean>`

### checkRegionByElement method
#### Syntax


    let result = await eyes.checkRegionByElement(element, tag, matchTimeout);
    

#### Parameters

element

Type: 

    webdriver.WebElement|EyesRemoteWebElement

An element whose position and bounding rectangle defines the region.

tag

Type: string

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

matchTimeout

Type: number

The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout.

#### Return value

Type:  Promise`<boolean>`

### checkWindow method
#### Syntax


    await eyes.checkWindow(tag, matchTimeout);
    

#### Parameters

tag

Type: string

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

matchTimeout

Type: int

The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout.

#### Return value

Type:  Promise

### close method
#### Syntax


    let result = await eyes.close(throwEx);
    

#### Parameters

throwEx

Type: boolean

If this parameter has a value of true, then if there are new, missing, or mismatched steps, an exception will be thrown. If the parameter is set to false, then an exception will not be thrown for the above cases. If the parameter is not passed, then it is as if a true value was passed.

#### Return value

Type:  Promise`<TestResult>`

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

Type:  string

### getBranchName method
#### Syntax


    let value = eyes.getBranchName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getDefaultMatchTimeout method
#### Syntax


    let value = eyes.getDefaultMatchTimeout();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  number

### getForceFullPageScreenshot method
#### Syntax


    let value = eyes.getForceFullPageScreenshot();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getForcedImageRotation method
#### Syntax


    let value = eyes.getForcedImageRotation();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  int

The rotation in degrees.

### getHideScrollbars method
#### Syntax


    let value = eyes.getHideScrollbars();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getHostOS method
#### Syntax


    let value = eyes.getHostOS();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getHostingApp method
#### Syntax


    let value = eyes.getHostingApp();
    

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

Return true if the [Eyes.open](#open-method) method has been called on an eyes instance, and [Eyes.close](#close-method) or [Eyes.abortIfNotClosed](./eyes#abortifnotclosed-method) have not yet been called.

### getMatchLevel method
#### Syntax


    eyes.getMatchLevel();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type: 

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

Type:  string

The value returned is in URL format, or null if no proxy is set.

### getSaveDebugScreenshots method
#### Syntax


    let value = eyes.getSaveDebugScreenshots();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

#### Remarks


Enable and disable saving screenshots to the local disk using the [setSaveDebugScreenshots](./eyes#setsavedebugscreenshots-method) method.

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

Type:  webdriver.WebElement

Returns either the value most recently set using [Eyes.setScrollRootElement](./eyes#setscrollrootelement-method), or returns an undefined value if this method was not called.

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

Type:  [StitchMode](./stitchmode).Scroll or Stitchmode.CSS

The value returned can be either [CSS](./stitchmode) or [Scroll](./stitchmode).

### getViewportSize method
#### Syntax


    let result = await eyes.getViewportSize();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type: Promise<{ width: number; height: number }>;

### getWaitBeforeScreenshots method
#### Syntax


    let value = eyes.getWaitBeforeScreenshots();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  number

The time Eyes waits before taking a screenshot, in milliseconds.

### open method
#### Syntax


    let result = await eyes.open(driver, appName, testName, viewportSize);
    

#### Parameters

appName

Type: string

The application name. This may be any string.

testName

Type: string

The name of the test. This name must be unique within the scope of the application name. It may be any string.

viewportSize

Type: { width: number; height: number }; 

The size of the viewport

The size of the viewport passed as an object.

The size of the viewport passed as an object {'width':, 'height':}

Defines the viewport size of the browser that will be set before the start of the test. If this parameter is not provided then the viewport size will be based on the current browser window size. See [Using viewports in Eyes](https://applitools.com/docs/topics/general-concepts/using-viewports-in-eyes.html) for more details.

driver

Type: WebDriver

The web driver.

#### Return value

Type:  Promise`<WebDriver>`

The returned web driver is a clone of the driver passed as a parameter. It is recomended that you use the web driver object returned by this method in all further calls to the web driver. This allows Eyes to record these interactions and play them back in the Eyes Test Manager.

#### Remarks


After making a call to this method, you must eventually terminate the test by calling [Eyes.close](#close-method) (in case of a normal completion) or [Eyes.abortIfNotClosed](./eyes#abortifnotclosed-method) (in case of an aborted test). If you want to run another test, then it is recomended to do this with a newly created Eyes instance to avoid side effects. However, in principle, it is legal to call [Eyes.Open](#open-method) again to start a new test on the same Eyes instance.

### replaceWindow method
#### Syntax


    await eyes.replaceWindow(stepIndex, screenshot, tag, title, userInputs);
    

#### Parameters

stepIndex

Type: number

The zero-based index of the step in which to replace the actual image.

screenshot

Type: Buffer

The PNG bytes of the updated screenshot.

tag

Type: string

The updated tag for the checkpoint.

title

Type: string

The updated ```` tag for the checkpoint.

userInputs

Type: Trigger\[\]

The updated userInputs for the checkpoint.

#### Return value

Type:  Promise`<void>`

A promise which resolves when replacing is done, or rejects if an error occurs.

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


    eyes.setBatch();
    eyes.setBatch(batchOrName);
    eyes.setBatch(batchOrName, batchId);
    eyes.setBatch(batchOrName, batchId, batchDate);
    eyes.setBatch({ id: string, name: string, startedAt: string });
    

#### Parameters

batchOrName

Type: string | { id: string; name: string; startedAt: string }; 

This parameter can be either a batch name string or an object. If it is an object, then it must have the following fields:

*   id: A unique identifier for all batches.
*   name: The batch name that will be displayed in the Test Editor batch panel.
*   startedAt : When the batch started (e.g. the current time). This should be in a format generated by Date().toUTCString().

If the parameter is a non-empty string, then it will be used as the batch name of the internally defined batch object. If the parameter value is falsy, and the environment value APPLITOOLS_BATCH_NAME is defined, then the value of the environment variable will be used as the batch name. Otherwise, an internal name will be generated.

batchId

Type: string

If the first parameter is a batch name string (and not a BatchInfo object), then the value passed for this parameter will be used as the id of the created object. All tests that have the same batch ID will appear in the Test results in the same batch. If the value is a falsy value or is not passed and the environment variable APPLITOOLS_BATCH_ID is defined, then the value of the environment variable will be used as the ID. Otherwise, an internal id will be generated.

batchDate

Type: string

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

### setDefaultMatchTimeout method
#### Syntax


    eyes.setDefaultMatchTimeout(timeout);
    

#### Parameters

timeout

Type: number

The timeout to set in milliseconds.

#### Return value

Type: 

#### Remarks


You can overide the default timeout set by this method for a specific set checkpoint by passing a timeout to one of the check_XXXX methods that support a timeout parameter, e.g. [`checkWindow`](./eyes#checkwindow-method)You can also overide the timeout for a specific test using the check fluent [`timeout method`](#timeout-method)

### setForceFullPageScreenshot method
#### Syntax


    eyes.setForceFullPageScreenshot(force);
    

#### Parameters

force

Type: boolean

If this paramter has a value of true, then Eyes will do scrolling and stitching if necessary. If false, then the result is browser dependent.

#### Return value

Type: 

### setForcedImageRotation method
#### Syntax


    eyes.setForcedImageRotation(degrees);
    

#### Parameters

degrees

Type: number

The number of degrees to rotate.

#### Return value

Type: 

### setHideScrollbars method
#### Syntax


    eyes.setHideScrollbars(hide);
    

#### Parameters

hide

Type: boolean

If set to true then hide the scrollbars. Otherwise, don't hide the scrollbars.

#### Return value

Type: 

### setHostOS method
#### Syntax


    eyes.setHostOS(os);
    

#### Parameters

os

Type: string

The value to be used for the Host OS property.

#### Return value

Type: 

### setHostingApp method
#### Syntax


    eyes.setHostingApp(hostingApp);
    

#### Parameters

hostingApp

Type: string

The value to be used for the Host OS Property.

#### Return value

Type: 

### setIgnoreCaret method
#### Syntax


    eyes.setIgnoreCaret(ignoreCaret);
    

#### Parameters

ignoreCaret

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


    eyes.setMatchLevel(level);
    

#### Parameters

level

Type: 

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


    eyes.setProxy(url, username, password);
    

#### Parameters

url

Type: string

The proxy URL to be used by the serverConnector. If it has a value of then no proxy is set.

username

Type: string

The string to pass as the username.

password

Type: string

The string to pass as the password.

#### Return value

Type: 

### setSaveDebugScreenshots method
#### Syntax


    eyes.setSaveDebugScreenshots(saveDebugScreenshots, pathToSave);
    

#### Parameters

saveDebugScreenshots

Type: boolean

If set to true, then checkpoint images is saved to a local directory.

pathToSave

Type: string

The file system path where debug screenshots should be saved.

#### Return value

Type: 

### setSaveNewTests method
#### Syntax


    eyes.setSaveNewTests(shouldSave);
    

#### Parameters

shouldSave

Type: boolean

If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior).

#### Return value

Type: 

### setScaleRatio method
#### Syntax


    eyes.setScaleRatio(scaleRatio);
    

#### Parameters

scaleRatio

Type: number

The scale ratio to use.

#### Return value

Type: 

### setScrollRootElement method
#### Syntax


    eyes.setScrollRootElement(element);
    

#### Parameters

element

Type: 

    webdriver.WebElement|webdriver.By|EyesRemoteWebElement

The element or element descriptor.

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

### setStitchMode method
#### Syntax


    eyes.setStitchMode(mode);
    

#### Parameters

mode

Type: [StitchMode](./stitchmode)

The stitch mode to use.

#### Return value

Type: 

### setViewportSize method
#### Syntax


    Eyes.setViewportSize(size);
    

#### Parameters

size

Type: { width: number; height: number }; 

The size of the viewport

The size of the viewport passed as an object.

The size of the viewport passed as an object {'width':, 'height':}

#### Return value

Type: 

#### Remarks


*   Call this method before the call to [Eyes.open](#open-method). Then, when calling the open method, don't pass the viewportSize parameter. If the viewport size is set to be smaller than the actual content, then scrolling should typically be enabled by calling [setForceFullPageScreenshot](./eyes#setforcefullpagescreenshot-method) method so that the full page image is tested.

This method is a static method.

### setWaitBeforeScreenshots method
#### Syntax


    eyes.setWaitBeforeScreenshots(waitBeforeScreenshots);
    

#### Parameters

waitBeforeScreenshots

Type: number

The time to wait in milliseconds. Passing a value of less than or equal to zero will cause the default value to be used.

#### Return value

Type: 

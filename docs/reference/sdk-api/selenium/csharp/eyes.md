# Eyes class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Csharp</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

Using statement

    using Applitools.Selenium;
    	



### Eyes method
#### Syntax


    Eyes eyes = new Eyes();
    
    Eyes eyes = new Eyes(runner);
    

#### Parameters

runner

Type: EyesRunner

If this parameter is provided, it must be an instance of either the [ClassicRunner](./classicrunner) or [VisualGridRunner](./visualgridrunner) classes. If a [VisualGridRunner](./visualgridrunner) is passed then the image will be rendered using the Ultrafast Grid. If this parameter is not provided, then DOM rendering is done using the local browser defined by the driver parameter passed to the [Eyes.Open](./eyes#open-method) method.

#### Return value

Type:  [Eyes](./eyes)

Use the object returned to call the various methods provided by the Eyes class.


### BaselineEnvName property
#### Syntax


    string value; // give relevant initial value
    eyes.BaselineEnvName  = value;
    value = eyes.BaselineEnvName

Type: string

### ForceFullPageScreenshot property
#### Syntax


    bool value; // give relevant initial value
    eyes.ForceFullPageScreenshot  = value;
    value = eyes.ForceFullPageScreenshot

Type: bool

### HideScrollbars property
#### Syntax


    bool value; // give relevant initial value
    eyes.HideScrollbars  = value;
    value = eyes.HideScrollbars

Type: bool

### HostApp property
#### Syntax


    string value; // give relevant initial value
    eyes.HostApp  = value;
    value = eyes.HostApp

Type: string

### HostOS property
#### Syntax


    string value; // give relevant initial value
    eyes.HostOS  = value;
    value = eyes.HostOS

Type: string

### IgnoreCaret property
#### Syntax


    bool value; // give relevant initial value
    eyes.IgnoreCaret  = value;
    value = eyes.IgnoreCaret

Type: bool

#### Remarks


We recommend using [HideCaret](./eyes#hidecaret-property) or [SetHideCaret](./configuration#sethidecaret-method) since this eliminates cursor related artifacts instead of detecting and ignoring them.

### SendDom property
#### Syntax


    bool value; // give relevant initial value
    eyes.SendDom  = value;
    value = eyes.SendDom

Type: bool

#### Remarks


Sending DOM information is enabed by default, so use this method only if you have to disable it.

### SendDom property
#### Syntax


    bool value; // give relevant initial value
    eyes.SendDom  = value;
    value = eyes.SendDom

Type: bool

#### Remarks


Sending DOM information is enabed by default, so use this method only if you have to disable it.

### SendDom property
#### Syntax


    bool value; // give relevant initial value
    eyes.SendDom  = value;
    value = eyes.SendDom

Type: bool

### StitchMode property
#### Syntax


    StitchModes value; // give relevant initial value
    eyes.StitchMode  = value;
    value = eyes.StitchMode

Type: [StitchModes](./stitchmode)

The value assigned or read may be either [CSS](./stitchmode) or [Scroll](./stitchmode).

### StitchOverlap property
#### Syntax


    int value; // give relevant initial value
    eyes.StitchOverlap  = value;
    value = eyes.StitchOverlap

Type: int

### ViewportSize property
#### Syntax


    RectangleSize value; // give relevant initial value
    eyes.ViewportSize  = value;
    value = eyes.ViewportSize

Type: [RectangleSize](./rectanglesize)

### ViewportSize property
#### Syntax


    RectangleSize value; // give relevant initial value
    Eyes.ViewportSize  = value;
    value = Eyes.ViewportSize

Type: [RectangleSize](./rectanglesize)

#### Remarks


*   Call this method before the call to [Eyes.Open](./eyes#open-method). Then, when calling the open method, don't pass the viewportSize parameter. If the viewport size is set to be smaller than the actual content, then scrolling should typically be enabled by calling [ForceFullPageScreenshot](./eyes#forcefullpagescreenshot-property) property or [SetForceFullPageScreenshot](./configuration#setforcefullpagescreenshot-method) method so that the full page image is tested.

This method is a static method.

### WaitBeforeScreenshots property
#### Syntax


    int value; // give relevant initial value
    eyes.WaitBeforeScreenshots  = value;
    value = eyes.WaitBeforeScreenshots

Type: int

### IsOpen property
#### Syntax


    bool value = eyes.IsOpen;
    

Type: bool

Return true if the [Eyes.Open](./eyes#open-method) method has been called on an eyes instance, and [Eyes.Close](./eyes#close-method), [Eyes.Abort](./eyes#abort-method), [Eyes.AbortAsync](./eyes#abortasync-method) or [Eyes.AbortIfNotClosed](./eyes#abortifnotclosed-method) have not yet been called.

### AgentId property
#### Syntax


    string value; // give relevant initial value
    eyes.AgentId  = value;
    value = eyes.AgentId

Type: string

#### Remarks


To take effect, this property must be assigned before the call to [Open](./eyes#open-method).

### ApiKey property
#### Syntax


    string value; // give relevant initial value
    eyes.ApiKey  = value;
    value = eyes.ApiKey

Type: string

#### Remarks


Set this immediately after the Eyes object is created (before calling [Open](./eyes#open-method)). If you have an environment variable called APPLITOOLS_API_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value.

### AppName property
#### Syntax


    string value; // give relevant initial value
    eyes.AppName  = value;
    value = eyes.AppName

Type: string

#### Remarks


If you call this method, it must be called before the call to [Eyes.Open](./eyes#open-method). In the call to [Eyes.Open](./eyes#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used.

### BaselineBranchName property
#### Syntax


    string value; // give relevant initial value
    eyes.BaselineBranchName  = value;
    value = eyes.BaselineBranchName

Type: string

### Batch property
#### Syntax


    eyes.Batch = new BatchInfo(name)

Type: [BatchInfo](./batchinfo)

#### Remarks


Set this property once before the calls to the [Open](./eyes#open-method) method for all tests that are supposed to be part of this batch.

### BranchName property
#### Syntax


    string value; // give relevant initial value
    eyes.BranchName  = value;
    value = eyes.BranchName

Type: string

### HideCaret property
#### Syntax


    bool value; // give relevant initial value
    eyes.HideCaret  = value;
    value = eyes.HideCaret

Type: bool

#### Remarks


We recommend using this method instead of [Eyes.IgnoreCaret](./eyes#ignorecaret-property), [Configuration.SetIgnoreCaret](./configuration#setignorecaret-method) or [SeleniumCheckSettings.IgnoreCaret](./checksettings#ignorecaret-method), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them.

### IsDisabled property
#### Syntax


    bool value; // give relevant initial value
    eyes.IsDisabled  = value;
    value = eyes.IsDisabled

Type: bool

### MatchLevel property
#### Syntax


    MatchLevel value; // give relevant initial value
    eyes.MatchLevel  = value;
    value = eyes.MatchLevel

Type: [MatchLevel](./matchlevel)

#### Remarks


For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### MatchTimeout property
#### Syntax


    TimeSpan value; // give relevant initial value
    eyes.MatchTimeout  = value;
    value = eyes.MatchTimeout

Type: TimeSpan

#### Remarks


You can overide the default timeout set by this property for a specific set checkpoint by passing a timeout to one of the check_XXXX methods that support a timeout parameter, e.g. [`CheckWindow`](./eyes#checkwindow-method)You can also overide the timeout for a specific test using the check fluent [`Timeout method`](./checksettings#timeout-method)

### BranchName property
#### Syntax


    string value; // give relevant initial value
    eyes.ParentBranchName  = value;
    value = eyes.ParentBranchName

Type: string

### Proxy property
#### Syntax


    WebProxy value; // give relevant initial value
    eyes.Proxy  = value;
    value = eyes.Proxy

Type: WebProxy

### SaveDiffs property
#### Syntax


    bool? value; // give relevant initial value
    eyes.SaveDiffs  = value;
    value = eyes.SaveDiffs

Type: bool?

### SaveNewTests property
#### Syntax


    bool value; // give relevant initial value
    eyes.SaveNewTests  = value;
    value = eyes.SaveNewTests

Type: bool

### ScaleRatio property
#### Syntax


    double value; // give relevant initial value
    eyes.ScaleRatio  = value;
    value = eyes.ScaleRatio

Type: double

### ServerUrl property
#### Syntax


    eyes.ServerUrl  = new System.Uri('https://myEyesServer'); //setter
    System.Uri uri = eyes.ServerUrl;                          //getter

Type: string


### Abort method
#### Syntax


    TestResults value = eyes.Abort();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [TestResults](./testresults)

#### Remarks


If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored.

### AbortAsync method
#### Syntax


    eyes.AbortAsync();

#### Parameters

This method does not take any parameters.

#### Return value

Type:  void

#### Remarks


If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored.

### AbortIfNotClosed method
#### Syntax


    TestResults value = eyes.AbortIfNotClosed();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [TestResults](./testresults)

#### Remarks


If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored.

### AddProperty method
#### Syntax


    eyes.AddProperty(name, value);

#### Parameters

name

Type: string

The name of the property.

value

Type: string

The value associated with the name.

#### Return value

Type:  void

#### Remarks


*   You should not assign a given value to a property more than once in a given test run.
*   You can also associate properties with a batch using [BatchInfo.AddProperty](./batchinfo#addproperty-method).

### Check method
#### Syntax


    eyes.Check(checkSettings);
    eyes.Check(name, checkSettings);
    

#### Parameters

checkSettings

Type: ICheckSettings

The fluent API calls, starting with one of the [Target](./target) methods.

name

Type: string

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

checkSettings

Type: ICheckSettings\[\]

One or more check settings, as an array or a comma separated list.

#### Return value

Type:  void

#### Remarks


For a detailed description of how to use this method see [The Eyes SDK check Fluent API](https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html).

### CheckElement method
#### Syntax


    eyes.CheckElement(selector, tag, matchTimeout);
    eyes.CheckElement(selector, tag);
    eyes.CheckElement(selector);

#### Parameters

selector

Type: By

An object that defines a selector for the region.

tag

Type: string \[Optional : default = null \]

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

matchTimeout

Type: int \[Optional : default = -1 \]

The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout.

#### Return value

Type:  void

### CheckFrame method
#### Syntax


    eyes.CheckFrame(frameNameOrId, tag);
    eyes.CheckFrame(frameNameOrId);
    eyes.CheckFrame(frameNameOrId, matchTimeout, tag);
    eyes.CheckFrame(frameNameOrId, matchTimeout);
    eyes.CheckFrame(frameIndex, matchTimeout, tag);
    eyes.CheckFrame(frameIndex, matchTimeout);
    eyes.CheckFrame(frameReference, matchTimeout, tag);
    eyes.CheckFrame(frameReference, matchTimeout);
    eyes.CheckFrame(framePath, matchTimeout, tag);
    eyes.CheckFrame(framePath, matchTimeout);

#### Parameters

frameNameOrId

Type: string

The name or id of the frame element.

tag

Type: string \[Optional : default = null \]

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

matchTimeout

Type: TimeSpan

The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout.

frameIndex

Type: int

A Selenium frame index.

frameReference

Type: IWebElement

An object that references the frame.

framePath

Type: string\[\]

The path of the frame to check. This is a fully defined, top-down list of frame names or IDs, where each frame is nested in the previous frame.

#### Return value

Type:  void

### CheckRegion method
#### Syntax


    eyes.CheckRegion(selector, tag, stitchContent, matchTimeout);
    eyes.CheckRegion(selector, tag, stitchContent);
    eyes.CheckRegion(selector, tag, matchTimeout);
    eyes.CheckRegion(selector, tag);
    eyes.CheckRegion(selector);
    eyes.CheckRegion(selector, matchTimeout, tag);
    eyes.CheckRegion(selector, matchTimeout);
    eyes.CheckRegion(region, tag, matchTimeout);
    eyes.CheckRegion(region, tag);
    eyes.CheckRegion(region);
    eyes.CheckRegion(region, matchTimeout, tag);
    eyes.CheckRegion(region, matchTimeout);

#### Parameters

selector

Type: By

An object that defines a selector for the region.

tag

Type: string

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

stitchContent

Type: bool

If the application window is larger than the viewport, and this parameter is true, then the entire page content is rendered. If this parameter is false, then only the viewport is rendered.

matchTimeout

Type: int \[Optional : default = -1 \]

The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout. This parameter overrides any global timeout set using [Eyes.MatchTimeout](./eyes#matchtimeout-property) property or [Configuration.SetMatchTimeout](./configuration#setmatchtimeout-method) method.

matchTimeout

Type: TimeSpan

The retry time. The units are defined by the TimeSpan type. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout. This parameter overrides any global timeout set using [Eyes.MatchTimeout](./eyes#matchtimeout-property) property or [Configuration.SetMatchTimeout](./configuration#setmatchtimeout-method) method.

region

Type: Rectangle

A non-empty region representing the screen region to check in screenshot pixel coordinates.

#### Return value

Type:  void

### CheckWindow method
#### Syntax


    eyes.CheckWindow(tag, fully);
    eyes.CheckWindow(tag);
    eyes.CheckWindow();
    eyes.CheckWindow(matchTimeout, tag, fully);
    eyes.CheckWindow(matchTimeout, tag);
    eyes.CheckWindow(matchTimeout);

#### Parameters

tag

Type: string \[Optional : default = null \]

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

fully

Type: bool? \[Optional : default = null \]

Set to true to capture the full browser page and not just the viewport.

matchTimeout

Type: TimeSpan

The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout.

#### Return value

Type:  void

### ClearProperties method
#### Syntax


    eyes.ClearProperties();

#### Parameters

This method does not take any parameters.

#### Return value

Type:  void

### Close method
#### Syntax


    TestResults result = eyes.Close(throwEx);
    
    TestResults result = eyes.Close();
    

#### Parameters

throwEx

Type: bool \[Optional : default = true \]

If this parameter has a value of true, then if there are new, missing, or mismatched steps, an exception will be thrown. If the parameter is set to false, then an exception will not be thrown for the above cases. If the parameter is not passed, then it is as if a true value was passed.

#### Return value

Type:  [TestResults](./testresults)

The result of the test can be obtained from the object returned. See [TestResults class](./testresults) for a list of what information can be obtained from this object. See [TestResults class](./testresults) for a list of what information can be obtained from this object.

### CloseAsync method
#### Syntax


    eyes.CloseAsync();

#### Parameters

This method does not take any parameters.

#### Return value

Type:  void

### GetConfiguration method
#### Syntax


    Configuration value = eyes.GetConfiguration();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [Configuration](./configuration)

### GetDriver method
#### Syntax


    EyesWebDriver value = eyes.GetDriver();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  EyesWebDriver



### Open method
#### Syntax


    IWebDriver outdriver = eyes.Open(driver);
    
    IWebDriver outdriver = eyes.Open(driver, appName, testName, viewportSize);
    
    IWebDriver outdriver = eyes.Open(driver, appName, testName);
    

#### Parameters

driver

Type: IWebDriver

The web driver.

appName

Type: string

The application name. This may be any string. You can set the application name for all tests using the [Configuration.SetAppName](./configuration#setappname-method) method or [Eyes.AppName](./eyes#appname-property) property. If you do so, then set this parameter to a value of null to indicate that the configuration default should be used.

testName

Type: string

The name of the test. This name must be unique within the scope of the application name. It may be any string.

viewportSize

Type: Size

The size of the viewport

The size of the viewport passed as an object.

The size of the viewport passed as an object {'width':, 'height':}

Defines the viewport size of the browser that will be set before the start of the test. If this parameter is not provided then the viewport size will be based on the current browser window size. See [Using viewports in Eyes](https://applitools.com/docs/topics/general-concepts/using-viewports-in-eyes.html) for more details.

#### Return value

Type:  IWebDriver

The returned web driver is a clone of the driver passed as a parameter. It is recomended that you use the web driver object returned by this method in all further calls to the web driver. This allows Eyes to record these interactions and play them back in the Eyes Test Manager.

#### Remarks


After making a call to this method, you must eventually terminate the test by calling [Eyes.CloseAsync](./eyes#closeasync-method) (in case of a normal completion) or [Eyes.AbortAsync](./eyes#abortasync-method) (in case of an aborted test). If you want to run another test, then it is recomended to do this with a newly created Eyes instance to avoid side effects. However, in principle, it is legal to call [Eyes.Open](#open-method) again to start a new test on the same Eyes instance.

### SetConfiguration method
#### Syntax


    eyes.SetConfiguration(configuration);

#### Parameters

configuration

Type: IConfiguration

A configuration object that has the various properties/methods set to the required values.

#### Return value

Type:  void

#### Remarks


The typical sequence for configuring a test is:

*   Create a [Configuration](./configuration) object.
*   Assign to the properties you want to set up, and call the various methods.
*   Create an [Eyes](./eyes) instance.
*   Call the [Eyes.SetConfiguration](#) method with the configuration object.
*   Call the [Eyes.Open](./eyes#open-method) method to start the test session.

Once you've changed the configuration of an Eyes instance by calling [Eyes.SetConfiguration](#) or by setting a configuration directly on the Eyes instance, if you want to change the configuration, you must use the following sequence:

*   Get the current configuration using [Eyes.GetConfiguration](./eyes#getconfiguration-method) to a local variable.
*   Make changes to the local configuration value.
*   Assign the local configuration object to the Eyes instance using [Eyes.SetConfiguration](#).

### SetScrollToRegion method
#### Syntax


    eyes.SetScrollToRegion(shouldScroll);

#### Parameters

shouldScroll

Type: bool

If set to true, then before a region is matched, Eyes will automatically scroll to the region. If set to false, then Eyes will not scroll.

#### Return value

Type:  void

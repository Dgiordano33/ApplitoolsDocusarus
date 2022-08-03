# Eyes class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
</div><div class='platform-bar-div'>Language: <b>Objectivec</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

    @import EyesImages
    	



### init method
#### Syntax


    Eyes* eyes = [Eyes new];
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [Eyes](./eyes)\*

Use the object returned to call the various methods provided by the Eyes class.

### initWithRunner method
#### Syntax
#### Call syntax

    EyesBase* eyes = [[Eyes alloc] initWithRunner  : runner   ];
    

#### Declaration

    (instancetype)initWithRunner:(EyesRunner *)runner

#### Parameters

runner

Type: EyesRunner\*

If this parameter is provided, it must be an instance of the [ClassicRunner](./classicrunner) class.

#### Return value

Type:  EyesBase\*

Use the object returned to call the various methods provided by the Eyes class.


### apiKey property
#### Syntax
#### Call syntax

    NSString* value; // give relevant initial value
    eyes.apiKey  = value
    value = eyes.apiKey

#### Declaration

     (copy, nonatomic) NSString *apiKey

Type: NSString\*

A string that is your API Key.

#### Remarks


Set this immediately after the Eyes object is created (before calling [openWithApplicationName](#openwithapplicationname-method)). If you have an environment variable called APPLITOOLS_API_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value.

### baselineBranchName property
#### Syntax
#### Call syntax

    NSString* value; // give relevant initial value
    eyes.baselineBranchName  = value
    value = eyes.baselineBranchName

#### Declaration

     (copy, nonatomic, nullable) NSString *baselineBranchName

Type: NSString\*

The name of the baseline branch to use.

### baselineEnvName property
#### Syntax
#### Call syntax

    NSString* value; // give relevant initial value
    eyes.baselineEnvName  = value
    value = eyes.baselineEnvName

#### Declaration

     (strong, nonatomic, nullable) NSString *baselineEnvName

Type: NSString\*

The name of the baseline environment.

### batch property
#### Syntax
#### Call syntax

    BatchInfo* value; // give relevant initial value
    eyes.batch  = value
    value = eyes.batch

#### Declaration

     (strong, nonatomic, nullable) BatchInfo *batch

Type: [BatchInfo](./batchinfo)\*

An object of the class [BatchInfo](./batchinfo) that describes the batch.

#### Remarks


Set this property once before the calls to the [openWithApplicationName](#openwithapplicationname-method) method for all tests that are supposed to be part of this batch.

### branchName property
#### Syntax
#### Call syntax

    NSString* value; // give relevant initial value
    eyes.branchName  = value
    value = eyes.branchName

#### Declaration

     (copy, nonatomic, nullable) NSString *branchName

Type: NSString\*

The name of the branch from which the baseline will be taken and saved. This may be any string.

### configuration property
#### Syntax
#### Call syntax

    Configuration* value; // give relevant initial value
    eyes.configuration  = value
    value = eyes.configuration

#### Declaration

     (strong, nonatomic) Configuration *configuration

Type: [Configuration](./configuration)\*

A configuration object that has the various properties/methods set to the required values.

#### Remarks


The typical sequence for configuring a test is:

*   Create a [Configuration](./configuration) object.
*   Assign to the properties you want to set up, and call the various methods.
*   Create an [Eyes](./eyes) instance.
*   Call the [\[Eyes configuration\]](#configuration-property) method with the configuration object.
*   Call the [\[Eyes openWithApplicationName\]](#openwithapplicationname-method) method to start the test session.

Once you've changed the configuration of an Eyes instance by calling [\[Eyes configuration\]](#configuration-property) or by setting a configuration directly on the Eyes instance, if you want to change the configuration, you must use the following sequence:

*   Get the current configuration using [\[Eyes configuration\]](#configuration-property) to a local variable.
*   Make changes to the local configuration value.
*   Assign the local configuration object to the Eyes instance using [\[Eyes configuration\]](#configuration-property).

### debugScreenshotsPath property
#### Syntax
#### Call syntax

    NSString* value; // give relevant initial value
    eyes.debugScreenshotsPath  = value
    value = eyes.debugScreenshotsPath

#### Declaration

     (copy, nonatomic, nonnull) NSString *debugScreenshotsPath

Type: NSString\*

#### Remarks


Enable and disable saving screenshots to the local disk using the [saveDebugScreenshots](./eyes#savedebugscreenshots-property) property.

### debugScreenshotsPrefix property
#### Syntax
#### Call syntax

    NSString* value; // give relevant initial value
    eyes.debugScreenshotsPrefix  = value
    value = eyes.debugScreenshotsPrefix

#### Declaration

     (copy, nonatomic, nonnull) NSString *debugScreenshotsPrefix

Type: NSString\*

#### Remarks


Enable and disable saving screenshots to the local disk using the [saveDebugScreenshots](./eyes#savedebugscreenshots-property) property.

### deviceInfo property
#### Syntax
#### Call syntax

    NSString* value; // give relevant initial value
    eyes.deviceInfo  = value
    value = eyes.deviceInfo

#### Declaration

     (copy, nonatomic, nullable) NSString *deviceInfo

Type: NSString\*

The name of the device - this is displayed in the Device column in the Test Manager.

### hostApp property
#### Syntax
#### Call syntax

    NSString* value; // give relevant initial value
    eyes.hostApp  = value
    value = eyes.hostApp

#### Declaration

     (copy, nonatomic, nullable) NSString *hostApp

Type: NSString\*

The value to be used for the Host OS Property.

### hostOS property
#### Syntax
#### Call syntax

    NSString* value; // give relevant initial value
    eyes.hostOS  = value
    value = eyes.hostOS

#### Declaration

     (copy, nonatomic, nullable) NSString *hostOS DEPRECATED_MSG_ATTRIBUTE("Use 'osInfo' instead please")

Type: NSString\*

The value to be used for the Host OS property.

### hostingAppInfo property
#### Syntax
#### Call syntax

    NSString* value; // give relevant initial value
    eyes.hostingAppInfo  = value
    value = eyes.hostingAppInfo

#### Declaration

     (copy, nonatomic, nullable) NSString *hostingAppInfo

Type: NSString\*

hostappinfo.params.sethostappinfo

### ignoreCaret property
#### Syntax
#### Call syntax

    BOOL value; // give relevant initial value
    eyes.ignoreCaret  = value
    value = eyes.ignoreCaret

#### Declaration

     (assign, nonatomic) BOOL ignoreCaret

Type: BOOL

If set to true, then Eyes does extra processing to eliminate artifacts introduced by blinking cursors.

### matchLevel property
#### Syntax
#### Call syntax

    MatchLevel value; // give relevant initial value
    eyes.matchLevel  = value
    value = eyes.matchLevel

#### Declaration

     (assign, nonatomic) MatchLevel matchLevel

Type: [MatchLevel](./matchlevel)

Available match level values are:

*   [MatchLevelNone](./matchlevel)
*   [MatchLevelStrict](./matchlevel)
*   [MatchLevelLayout](./matchlevel)
*   [MatchLevelContent](./matchlevel)
*   [MatchLevelExact](./matchlevel)

For a description of these match levels and the different ways to apply them to tests, checkpoints, and regions, see [Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

#### Remarks


For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### osInfo property
#### Syntax
#### Call syntax

    NSString* value; // give relevant initial value
    eyes.osInfo  = value
    value = eyes.osInfo

#### Declaration

     (copy, nonatomic, nullable) NSString *osInfo

Type: NSString\*

The value to be displayed in the OS column of the Test Results page of the Test Manager.

### parentBranchName property
#### Syntax
#### Call syntax

    NSString* value; // give relevant initial value
    eyes.parentBranchName  = value
    value = eyes.parentBranchName

#### Declaration

     (copy, nonatomic, nullable) NSString *parentBranchName

Type: NSString\*

The branch name. This may be any string.

### proxy property
#### Syntax
#### Call syntax

    AbstractProxySettings* value; // give relevant initial value
    eyes.proxy  = value
    value = eyes.proxy

#### Declaration

     (strong, nonatomic, nullable) AbstractProxySettings *proxy

Type: [AbstractProxySettings](./proxysettings)\*

[AbstractProxySettings](./proxysettings)\*

### saveDebugScreenshots property
#### Syntax
#### Call syntax

    BOOL value; // give relevant initial value
    eyes.saveDebugScreenshots  = value
    value = eyes.saveDebugScreenshots

#### Declaration

     (assign, nonatomic) BOOL saveDebugScreenshots

Type: BOOL

If set to true, then checkpoint images is saved to a local directory.

### saveDiffs property
#### Syntax
#### Call syntax

    BOOL value; // give relevant initial value
    eyes.saveDiffs  = value
    value = eyes.saveDiffs

#### Declaration

     (assign, nonatomic) BOOL saveDiffs

Type: BOOL

If this has a value of true, then the baseline will be updated with checkpoints that have mismatches.

### saveNewTests property
#### Syntax
#### Call syntax

    BOOL value; // give relevant initial value
    eyes.saveNewTests  = value
    value = eyes.saveNewTests

#### Declaration

     (assign, nonatomic) BOOL saveNewTests

Type: BOOL

If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior).

### serverURL property
#### Syntax
#### Call syntax

    NSString* value; // give relevant initial value
    eyes.serverURL  = value
    value = eyes.serverURL

#### Declaration

     (copy, nonatomic, nullable) NSString *serverURL

Type: NSString\*

The URL of the Eyes server. Pass a value of nil to use the default cloud server.


### abortIfNotClosed method
#### Syntax
#### Call syntax

     [ eyes abortIfNotClosed    ];
    

#### Declaration

    (void)abortIfNotClosed

#### Parameters

This method does not take any parameters.

#### Return value

Type:  void

#### Remarks


If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored.

### addProperty method
#### Syntax
#### Call syntax

     [ eyes addProperty  : name value: value   ];
    

#### Declaration

    (void)addProperty:(NSString *)name value:(NSString *)value

#### Parameters

name

Type: NSString\*

The name of the property.

value

Type: NSString\*

The value associated with the name.

#### Return value

Type:  void

#### Remarks


*   You should not assign a given value to a property more than once in a given test run.

### checkImage method
#### Syntax
#### Call syntax

    BOOL value =  [ eyes checkImage  : image   ]
    ;
    
    BOOL value =  [ eyes checkImage  : image tag: tag   ]
    ;
    
    BOOL value =  [ eyes checkImage  : image tag: tag ignoreMismatch: ignoreMismatch   ]
    ;
    

#### Declaration

    (BOOL)checkImage:(UIImage *)image tag:(nullable NSString *)tag ignoreMismatch:(BOOL)ignoreMismatch

#### Parameters

image

Type: UIImage\*

An image stored in a buffer in PNG format.

tag

Type: NSString\*

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

ignoreMismatch

Type: BOOL

This parameter is used to implement retry of a checkpoint. If you are not implementing retry, then don't pass this parameter or pass a value of false. To implement retry, on all retry attempts apart from the last, pass this parameter a value of true. When the method returns, check the return value. A returned value of true means that the checkpoint passed, and you can continue with the next checkpoint. A returned value of false means that that the checkpoint did not match. Since this parameter was passed as true, Eyes will not store the outcome of this checkpoint and will expect that the next image sent is for the current step (i.e. is being retried). On the last retry attempt, pass a value of false. This way, Eyes knows that there will be no more retries, and it will store the results of the last check as the result of the current step. The next checkpoint sent will be treated as the next step. Note that since Eyes allows for new or deleted steps, once there is a mismatch for one step, all subsequent steps will also return a mismatch, and Eyes determines the actual match/mismatch/new/missing status of all the steps when the test is closed.

#### Return value

Type:  BOOL

A return value of true indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of false depends on whether this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of false, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned false, all the following checkpoints will also return false. This does not mean that the checkpoint mismatched; it means that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [close](#close-method) method.

### checkRegion method
#### Syntax
#### Call syntax

     [ eyes checkRegion  : region inImage: image   ];
    
     [ eyes checkRegion  : region inImage: image tag: tag   ];
    

#### Declaration

    (void)checkRegion:(Region *)region inImage:(UIImage *)image tag:(nullable NSString *)tag

#### Parameters

region

Type: [Region](./region)\*

A non-empty region representing the screen region to check in screenshot pixel coordinates.

image

Type: UIImage\*

An image stored in a buffer in PNG format.

tag

Type: NSString\*

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

#### Return value

Type:  void

A return value of true indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of false depends on whether this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of false, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned false, all the following checkpoints will also return false. This does not mean that the checkpoint mismatched; it means that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [close](#close-method) method.

### checkWithTag method
#### Syntax
#### Call syntax

    BOOL value =  [ eyes checkWithTag  : tag andSettings: checkSettings   ]
    ;
    

#### Declaration

    (BOOL)checkWithTag:(nullable NSString *)tag andSettings:(id <CheckSettingsProtocol>)checkSettings

#### Parameters

tag

Type: NSString\*

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

checkSettings

Type: id `<CheckSettingsProtocol>`

The fluent API calls, starting with one of the [Target](./target) methods.

#### Return value

Type:  BOOL

A return value of true indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of false depends on whether this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of false, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned false, all the following checkpoints will also return false. This does not mean that the checkpoint mismatched; it means that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [close](#close-method) method.

#### Remarks


For a detailed description of how to use this method see [The Eyes SDK check Fluent API](https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html).

### close method
#### Syntax
#### Call syntax

    TestResults* result =  [ eyes close    ]
    ;
    

#### Declaration

    (nullable TestResults *)close:(NSError **)error

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [TestResults](./testresults)\*

The result of the test can be obtained from the object returned. See [TestResults class](./testresults) for a list of what information can be obtained from this object. See [TestResults class](./testresults) for a list of what information can be obtained from this object.

### openWithApplicationName method
#### Syntax
#### Call syntax

     [ eyes openWithApplicationName  : appName testName: testName   ];
    
     [ eyes openWithApplicationName  : appName testName: testName viewportSize: viewportSize   ];
    

#### Declaration

    (void)openWithApplicationName:(nullable NSString *)appName testName:(nullable NSString *)testName viewportSize:(CGSize)viewportSize

#### Parameters

appName

Type: NSString\*

The application name. This may be any string. You can set the application name for all tests using the [\[Configuration appName\]](./configuration#appname-property) property. If you do so, then set this parameter to a value of nil to indicate that the configuration default should be used.

testName

Type: NSString\*

The name of the test. This name must be unique within the scope of the application name. It may be any string.

viewportSize

Type: CGSize

The size of the viewport

The size of the viewport passed as an object.

The size of the viewport passed as an object {'width':, 'height':}

Defines the viewport size of the browser that will be set before the start of the test. If this parameter is not provided then the viewport size will be based on the current browser window size. See [Using viewports in Eyes](https://applitools.com/docs/topics/general-concepts/using-viewports-in-eyes.html) for more details.

#### Return value

Type:  void

#### Remarks


After making a call to this method, you must eventually terminate the test by calling [\[Eyes close\]](#close-method) (in case of a normal completion) or [\[Eyes abortIfNotClosed\]](./eyes#abortifnotclosed-method) (in case of an aborted test). If you want to run another test, then it is recomended to do this with a newly created Eyes instance to avoid side effects. However, in principle, it is legal to call [\[Eyes openWithApplicationName\]](#) again to start a new test on the same Eyes instance.

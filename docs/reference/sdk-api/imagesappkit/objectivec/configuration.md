# Configuration class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Imagesappkit</b>
</div><div class='platform-bar-div'>Language: <b>Objectivec</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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




This class is used to create a configuration object that is used to configure an [Eyes](./eyes) object by assigning it to the [\[Eyes configuration\]](#configuration-property) property.

You can use this configuration object instead of using the various [Eyes](./eyes) methods and properties that set the same attributes. Typically you set up a Configuration object by calling its setXXXX methods chained with a '.' in a Fluent coding style.

Import statement

    @import EyesImagesAppKit
    	



### init method
#### Syntax


    Configuration* config = [Configuration new];
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [Configuration](./configuration)\*

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.


### accessibilityValidation property
#### Syntax
#### Call syntax

    AccessibilitySettings* configval; // give relevant initial value
    config.accessibilityValidation  = configval
    configval = config.accessibilityValidation

#### Declaration

     (strong, nonatomic, nullable) AccessibilitySettings *accessibilityValidation

Type: [AccessibilitySettings](./accessibilitysettings)\*

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### accessibilityValidation property
#### Syntax
#### Call syntax

    AccessibilitySettings* configval; // give relevant initial value
    config.accessibilityValidation  = configval
    configval = config.accessibilityValidation

#### Declaration

     (strong, nonatomic, nullable) AccessibilitySettings *accessibilityValidation

Type: [AccessibilitySettings](./accessibilitysettings)\*

The required accessibility settings. A value of nil will disable accessibility checking.

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### agentId property
#### Syntax
#### Call syntax

    NSString* configval; // give relevant initial value
    config.agentId  = configval
    configval = config.agentId

#### Declaration

     (copy, nonatomic) NSString *agentId

Type: NSString\*

The agent id to be configured.

### agentId property
#### Syntax
#### Call syntax

    NSString* configval; // give relevant initial value
    config.agentId  = configval
    configval = config.agentId

#### Declaration

     (copy, nonatomic) NSString *agentId

Type: NSString\*

The agent id to be configured.

### apiKey property
#### Syntax
#### Call syntax

    NSString* configval; // give relevant initial value
    config.apiKey  = configval
    configval = config.apiKey

#### Declaration

     (copy, nonatomic) NSString *apiKey

Type: NSString\*

A string that is your API Key.

#### Remarks


Set this immediately after the Eyes object is created (before calling [openWithApplicationName](./eyes#openwithapplicationname-method)). If you have an environment variable called APPLITOOLS_API_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value.

### apiKey property
#### Syntax
#### Call syntax

    NSString* configval; // give relevant initial value
    config.apiKey  = configval
    configval = config.apiKey

#### Declaration

     (copy, nonatomic) NSString *apiKey

Type: NSString\*

A string that is your API Key.

#### Remarks


Set this immediately after the Eyes object is created (before calling [openWithApplicationName](./eyes#openwithapplicationname-method)). If you have an environment variable called APPLITOOLS_API_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value.

### appName property
#### Syntax
#### Call syntax

    NSString* configval; // give relevant initial value
    config.appName  = configval
    configval = config.appName

#### Declaration

     (copy, nonatomic) NSString *appName

Type: NSString\*

The application name to be configured for the test.

#### Remarks


If you call this method, it must be called before the call to [\[Eyes openWithApplicationName\]](./eyes#openwithapplicationname-method). In the call to [\[Eyes openWithApplicationName\]](./eyes#openwithapplicationname-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a nil, then the value set here will be used.

### appName property
#### Syntax
#### Call syntax

    NSString* configval; // give relevant initial value
    config.appName  = configval
    configval = config.appName

#### Declaration

     (copy, nonatomic) NSString *appName

Type: NSString\*

The application name to be configured for the test.

#### Remarks


If you call this method, it must be called before the call to [\[Eyes openWithApplicationName\]](./eyes#openwithapplicationname-method). In the call to [\[Eyes openWithApplicationName\]](./eyes#openwithapplicationname-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a nil, then the value set here will be used.

### baselineBranchName property
#### Syntax
#### Call syntax

    NSString* configval; // give relevant initial value
    config.baselineBranchName  = configval
    configval = config.baselineBranchName

#### Declaration

     (copy, nonatomic) NSString *baselineBranchName

Type: NSString\*

The baseline branch name to be configured.

### baselineBranchName property
#### Syntax
#### Call syntax

    NSString* configval; // give relevant initial value
    config.baselineBranchName  = configval
    configval = config.baselineBranchName

#### Declaration

     (copy, nonatomic) NSString *baselineBranchName

Type: NSString\*

The baseline branch name to be configured.

### baselineEnvName property
#### Syntax
#### Call syntax

    NSString* configval; // give relevant initial value
    config.baselineEnvName  = configval
    configval = config.baselineEnvName

#### Declaration

     (copy, nonatomic, nullable) NSString *baselineEnvName

Type: NSString\*

The name of the baseline environment.

### baselineEnvName property
#### Syntax
#### Call syntax

    NSString* configval; // give relevant initial value
    config.baselineEnvName  = configval
    configval = config.baselineEnvName

#### Declaration

     (copy, nonatomic, nullable) NSString *baselineEnvName

Type: NSString\*

The name of the baseline environment.

### batch property
#### Syntax
#### Call syntax

    BatchInfo* configval; // give relevant initial value
    config.batch  = configval
    configval = config.batch

#### Declaration

     (strong, nonatomic) BatchInfo *batch

Type: [BatchInfo](./batchinfo)\*

An object that defines the batch configuration.

### batch property
#### Syntax
#### Call syntax

    BatchInfo* configval; // give relevant initial value
    config.batch  = configval
    configval = config.batch

#### Declaration

     (strong, nonatomic) BatchInfo *batch

Type: [BatchInfo](./batchinfo)\*

An object that defines the batch configuration.

### branchName property
#### Syntax
#### Call syntax

    NSString* configval; // give relevant initial value
    config.branchName  = configval
    configval = config.branchName

#### Declaration

     (copy, nonatomic) NSString *branchName

Type: NSString\*

The branch name to be used by the configuration.

### branchName property
#### Syntax
#### Call syntax

    NSString* configval; // give relevant initial value
    config.branchName  = configval
    configval = config.branchName

#### Declaration

     (copy, nonatomic) NSString *branchName

Type: NSString\*

The branch name to be used by the configuration.

### hostApp property
#### Syntax
#### Call syntax

    NSString* configval; // give relevant initial value
    config.hostApp  = configval
    configval = config.hostApp

#### Declaration

     (copy, nonatomic) NSString *hostApp

Type: NSString\*

The value to be used for the Host App property.

### hostApp property
#### Syntax
#### Call syntax

    NSString* configval; // give relevant initial value
    config.hostApp  = configval
    configval = config.hostApp

#### Declaration

     (copy, nonatomic) NSString *hostApp

Type: NSString\*

The value to be used for the Host App property.

### hostOS property
#### Syntax
#### Call syntax

    NSString* configval; // give relevant initial value
    config.hostOS  = configval
    configval = config.hostOS

#### Declaration

     (copy, nonatomic) NSString *hostOS

Type: NSString\*

The value to be used for the Host OS Property.

### hostOS property
#### Syntax
#### Call syntax

    NSString* configval; // give relevant initial value
    config.hostOS  = configval
    configval = config.hostOS

#### Declaration

     (copy, nonatomic) NSString *hostOS

Type: NSString\*

The value to be used for the Host OS Property.

### ignoreCaret property
#### Syntax
#### Call syntax

    BOOL configval; // give relevant initial value
    config.ignoreCaret  = configval
    configval = config.ignoreCaret

#### Declaration

     (assign, nonatomic) BOOL ignoreCaret

Type: BOOL

If set to true, then Eyes does extra processing to eliminate artifacts introduced by blinking cursors.

### ignoreCaret property
#### Syntax
#### Call syntax

    BOOL configval; // give relevant initial value
    config.ignoreCaret  = configval
    configval = config.ignoreCaret

#### Declaration

     (assign, nonatomic) BOOL ignoreCaret

Type: BOOL

If set to true, then Eyes does extra processing to eliminate artifacts introduced by blinking cursors.

### ignoreDisplacements property
#### Syntax
#### Call syntax

    BOOL configval; // give relevant initial value
    config.ignoreDisplacements  = configval
    configval = config.ignoreDisplacements

#### Declaration

     (assign, nonatomic) BOOL ignoreDisplacements

Type: BOOL

#### Remarks


Ignore displacements is only active when using a Match level of [MatchLevelStrict](./matchlevel) or [MatchLevelContent](./matchlevel)

### ignoreDisplacements property
#### Syntax
#### Call syntax

    BOOL configval; // give relevant initial value
    config.ignoreDisplacements  = configval
    configval = config.ignoreDisplacements

#### Declaration

     (assign, nonatomic) BOOL ignoreDisplacements

Type: BOOL

If a value of true is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed.

#### Remarks


Ignore displacements is only active when using a Match level of [MatchLevelStrict](./matchlevel) or [MatchLevelContent](./matchlevel)

### matchLevel property
#### Syntax
#### Call syntax

    MatchLevel configval; // give relevant initial value
    config.matchLevel  = configval
    configval = config.matchLevel

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

### matchLevel property
#### Syntax
#### Call syntax

    MatchLevel configval; // give relevant initial value
    config.matchLevel  = configval
    configval = config.matchLevel

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

### matchTimeout property
#### Syntax
#### Call syntax

    NSInteger configval; // give relevant initial value
    config.matchTimeout  = configval
    configval = config.matchTimeout

#### Declaration

     (assign, nonatomic) NSInteger matchTimeout

Type: NSInteger

The timeout to set in milliseconds.

#### Remarks


You can overide the default timeout set by this property for a specific set checkpoint by passing a timeout to one of the check_XXXX methods that support a timeout parameter, e.g. [`eyes.checkwindow (not yet available in imagesappkit objectivec)`](#)You can also overide the timeout for a specific test using the check fluent [`timeoutInSeconds method`](./checksettings#timeoutinseconds-method)

### matchTimeout property
#### Syntax
#### Call syntax

    NSInteger configval; // give relevant initial value
    config.matchTimeout  = configval
    configval = config.matchTimeout

#### Declaration

     (assign, nonatomic) NSInteger matchTimeout

Type: NSInteger

The timeout to set in milliseconds.

#### Remarks


You can overide the default timeout set by this property for a specific set checkpoint by passing a timeout to one of the check_XXXX methods that support a timeout parameter, e.g. [`eyes.checkwindow (not yet available in imagesappkit objectivec)`](#)You can also overide the timeout for a specific test using the check fluent [`timeoutInSeconds method`](./checksettings#timeoutinseconds-method)

### parentBranchName property
#### Syntax
#### Call syntax

    NSString* configval; // give relevant initial value
    config.parentBranchName  = configval
    configval = config.parentBranchName

#### Declaration

     (copy, nonatomic) NSString *parentBranchName

Type: NSString\*

The parent branch name to be configured.

### parentBranchName property
#### Syntax
#### Call syntax

    NSString* configval; // give relevant initial value
    config.parentBranchName  = configval
    configval = config.parentBranchName

#### Declaration

     (copy, nonatomic) NSString *parentBranchName

Type: NSString\*

The parent branch name to be configured.

### proxy property
#### Syntax
#### Call syntax

    AbstractProxySettings* configval; // give relevant initial value
    config.proxy  = configval
    configval = config.proxy

#### Declaration

     (strong, nonatomic) AbstractProxySettings *proxy

Type: [AbstractProxySettings](./proxysettings)\*

An object created from the [AbstractProxySettings](./proxysettings) class that contains the user name, password, URI and port.

### saveDiffs property
#### Syntax
#### Call syntax

    BOOL configval; // give relevant initial value
    config.saveDiffs  = configval
    configval = config.saveDiffs

#### Declaration

     (assign, nonatomic) BOOL saveDiffs

Type: BOOL

Set to true to configure Save Diffs functionality.

### saveDiffs property
#### Syntax
#### Call syntax

    BOOL configval; // give relevant initial value
    config.saveDiffs  = configval
    configval = config.saveDiffs

#### Declaration

     (assign, nonatomic) BOOL saveDiffs

Type: BOOL

Set to true to configure Save Diffs functionality.

### saveNewTests property
#### Syntax
#### Call syntax

    BOOL configval; // give relevant initial value
    config.saveNewTests  = configval
    configval = config.saveNewTests

#### Declaration

     (assign, nonatomic) BOOL saveNewTests

Type: BOOL

If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior).

### saveNewTests property
#### Syntax
#### Call syntax

    BOOL configval; // give relevant initial value
    config.saveNewTests  = configval
    configval = config.saveNewTests

#### Declaration

     (assign, nonatomic) BOOL saveNewTests

Type: BOOL

If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior).

### serverUrl property
#### Syntax
#### Call syntax

    NSString* configval; // give relevant initial value
    config.serverUrl  = configval
    configval = config.serverUrl

#### Declaration

     (copy, nonatomic) NSString *serverUrl

Type: NSString\*

The URL of the Eyes server. Pass a value of nil to use the default cloud server.

### serverUrl property
#### Syntax
#### Call syntax

    NSString* configval; // give relevant initial value
    config.serverUrl  = configval
    configval = config.serverUrl

#### Declaration

     (copy, nonatomic) NSString *serverUrl

Type: NSString\*

The URL of the Eyes server. Pass a value of nil to use the default cloud server.

### stitchOverlap property
#### Syntax
#### Call syntax

    NSInteger configval; // give relevant initial value
    config.stitchOverlap  = configval
    configval = config.stitchOverlap

#### Declaration

     (assign, nonatomic) NSInteger stitchOverlap

Type: NSInteger

The width of the stitch overlap in pixels.

### stitchOverlap property
#### Syntax
#### Call syntax

    NSInteger configval; // give relevant initial value
    config.stitchOverlap  = configval
    configval = config.stitchOverlap

#### Declaration

     (assign, nonatomic) NSInteger stitchOverlap

Type: NSInteger

The width of the stitch overlap in pixels.

### testName property
#### Syntax
#### Call syntax

    NSString* configval; // give relevant initial value
    config.testName  = configval
    configval = config.testName

#### Declaration

     (copy, nonatomic) NSString *testName

Type: NSString\*

The test name to be configured for the test.

### testName property
#### Syntax
#### Call syntax

    NSString* configval; // give relevant initial value
    config.testName  = configval
    configval = config.testName

#### Declaration

     (copy, nonatomic) NSString *testName

Type: NSString\*

The test name to be configured for the test.

### viewportSize property
#### Syntax
#### Call syntax

    CGSize configval; // give relevant initial value
    config.viewportSize  = configval
    configval = config.viewportSize

#### Declaration

     (assign, nonatomic) CGSize viewportSize

Type: CGSize

An object that defines the width and height of the test browser viewport in pixels.

### viewportSize property
#### Syntax
#### Call syntax

    CGSize configval; // give relevant initial value
    config.viewportSize  = configval
    configval = config.viewportSize

#### Declaration

     (assign, nonatomic) CGSize viewportSize

Type: CGSize

An object that defines the width and height of the test browser viewport in pixels.

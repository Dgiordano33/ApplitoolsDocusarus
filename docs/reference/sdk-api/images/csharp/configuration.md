# Configuration class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
</div><div class='platform-bar-div'>Language: <b>Csharp</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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




This class is used to create a configuration object that is used to configure an [Eyes](./eyes) object by passing it to the [Eyes.SetConfiguration](./eyes#setconfiguration-method) method.

You can use this configuration object instead of using the various [Eyes](./eyes) methods and properties that set the same attributes. Typically you set up a Configuration object by calling its setXXXX methods chained with a '.' in a Fluent coding style.

Using statement

    using Configuration = Applitools.Configuration;
    	



### Configuration method
#### Syntax


    Configuration config = new Configuration();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.


### AccessibilityValidation property
#### Syntax


    AccessibilitySettings configval; // give relevant initial value
    config.AccessibilityValidation  = configval;
    configval = config.AccessibilityValidation

Type: [AccessibilitySettings](./accessibilitysettings)

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### AgentId property
#### Syntax


    string configval; // give relevant initial value
    config.AgentId  = configval;
    configval = config.AgentId

Type: string

### ApiKey property
#### Syntax


    string configval; // give relevant initial value
    config.ApiKey  = configval;
    configval = config.ApiKey

Type: string

#### Remarks


Set this immediately after the Eyes object is created (before calling [Open](./eyes#open-method)). If you have an environment variable called APPLITOOLS_API_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value.

### AppName property
#### Syntax


    string configval; // give relevant initial value
    config.AppName  = configval;
    configval = config.AppName

Type: string

#### Remarks


If you call this method, it must be called before the call to [Eyes.Open](./eyes#open-method). In the call to [Eyes.Open](./eyes#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used.

### BaselineBranchName property
#### Syntax


    string configval; // give relevant initial value
    config.BaselineBranchName  = configval;
    configval = config.BaselineBranchName

Type: string

### BaselineEnvName property
#### Syntax


    string configval; // give relevant initial value
    config.BaselineEnvName  = configval;
    configval = config.BaselineEnvName

Type: string

### Batch property
#### Syntax


    BatchInfo configval; // give relevant initial value
    config.Batch  = configval;
    configval = config.Batch

Type: [BatchInfo](./batchinfo)

### BranchName property
#### Syntax


    string configval; // give relevant initial value
    config.BranchName  = configval;
    configval = config.BranchName

Type: string

### HostApp property
#### Syntax


    string configval; // give relevant initial value
    config.HostApp  = configval;
    configval = config.HostApp

Type: string

### HostOS property
#### Syntax


    string configval; // give relevant initial value
    config.HostOS  = configval;
    configval = config.HostOS

Type: string

### IgnoreCaret property
#### Syntax


    bool configval; // give relevant initial value
    config.IgnoreCaret  = configval;
    configval = config.IgnoreCaret

Type: bool

### IgnoreDisplacements property
#### Syntax


    bool configval; // give relevant initial value
    config.IgnoreDisplacements  = configval;
    configval = config.IgnoreDisplacements

Type: bool

#### Remarks


Ignore displacements is only active when using a Match level of [Strict](./matchlevel) or [Content](./matchlevel)

### MatchLevel property
#### Syntax


    MatchLevel configval; // give relevant initial value
    config.MatchLevel  = configval;
    configval = config.MatchLevel

Type: [MatchLevel](./matchlevel)

#### Remarks


For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### BranchName property
#### Syntax


    string configval; // give relevant initial value
    config.ParentBranchName  = configval;
    configval = config.ParentBranchName

Type: string

### SaveDiffs property
#### Syntax


    bool? configval; // give relevant initial value
    config.SaveDiffs  = configval;
    configval = config.SaveDiffs

Type: bool?

### SaveNewTests property
#### Syntax


    bool configval; // give relevant initial value
    config.SaveNewTests  = configval;
    configval = config.SaveNewTests

Type: bool

### ServerUrl property
#### Syntax


    string configval; // give relevant initial value
    config.ServerUrl  = configval;
    configval = config.ServerUrl

Type: string

### TestName property
#### Syntax


    string configval; // give relevant initial value
    config.TestName  = configval;
    configval = config.TestName

Type: string

### ViewportSize property
#### Syntax


    RectangleSize configval; // give relevant initial value
    config.ViewportSize  = configval;
    configval = config.ViewportSize

Type: [RectangleSize](./rectanglesize)


### Clone method
#### Syntax


    Configuration configval = config.Clone();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [Configuration](./configuration)

A cloned [Configuration](./configuration) object.

### SetAccessibilityValidation method
#### Syntax


    IConfiguration configval = config.SetAccessibilityValidation(value);
    config.AccessibilityValidation  = configval;
     = config.AccessibilityValidation;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: [AccessibilitySettings](./accessibilitysettings)

The required accessibility settings. A value of null will disable accessibility checking.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### SetAgentId method
#### Syntax


    IConfiguration configval = config.SetAgentId(value);
    config.AgentId  = configval;
     = config.AgentId;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: string

The agent id to be configured.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### SetApiKey method
#### Syntax


    IConfiguration configval = config.SetApiKey(value);
    config.ApiKey  = configval;
     = config.ApiKey;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: string

A string that is your API Key.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


Set this immediately after the Eyes object is created (before calling [Open](./eyes#open-method)). If you have an environment variable called APPLITOOLS_API_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value.

### SetAppName method
#### Syntax


    IConfiguration configval = config.SetAppName(value);
    config.AppName  = configval;
     = config.AppName;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: string

The application name to be configured for the test.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


If you call this method, it must be called before the call to [Eyes.Open](./eyes#open-method). In the call to [Eyes.Open](./eyes#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used.

### SetBaselineBranchName method
#### Syntax


    IConfiguration configval = config.SetBaselineBranchName(value);
    config.BaselineBranchName  = configval;
     = config.BaselineBranchName;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: string

The baseline branch name to be configured.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### SetBaselineEnvName method
#### Syntax


    IConfiguration configval = config.SetBaselineEnvName(value);
    config.BaselineEnvName  = configval;
     = config.BaselineEnvName;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: string

The name of the baseline environment.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### SetBatch method
#### Syntax


    IConfiguration configval = config.SetBatch(value);
    config.Batch  = configval;
     = config.Batch;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: [BatchInfo](./batchinfo)

An object that defines the batch configuration.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### SetBranchName method
#### Syntax


    IConfiguration configval = config.SetBranchName(value);
    config.BranchName  = configval;
     = config.BranchName;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: string

The branch name to be used by the configuration.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### SetHostApp method
#### Syntax


    IConfiguration configval = config.SetHostApp(value);
    config.HostApp  = configval;
     = config.HostApp;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: string

The value to be used for the Host App property.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### SetHostOS method
#### Syntax


    IConfiguration configval = config.SetHostOS(value);
    config.HostOS  = configval;
     = config.HostOS;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: string

The value to be used for the Host OS Property.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### SetIgnoreCaret method
#### Syntax


    IConfiguration configval = config.SetIgnoreCaret(value);
    config.IgnoreCaret  = configval;
     = config.IgnoreCaret;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: bool

If set to true, then Eyes does extra processing to eliminate artifacts introduced by blinking cursors.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### SetIgnoreDisplacements method
#### Syntax


    IConfiguration configval = config.SetIgnoreDisplacements(value);
    config.IgnoreDisplacements  = configval;
     = config.IgnoreDisplacements;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: bool

If a value of true is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


Ignore displacements is only active when using a Match level of [Strict](./matchlevel) or [Content](./matchlevel)

### SetMatchLevel method
#### Syntax


    IConfiguration configval = config.SetMatchLevel(value);
    config.MatchLevel  = configval;
     = config.MatchLevel;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: [MatchLevel](./matchlevel)

Available match level values are:

*   [None](./matchlevel)
*   [Strict](./matchlevel)
*   [Layout](./matchlevel)
*   [Content](./matchlevel)
*   [Exact](./matchlevel)

For a description of these match levels and the different ways to apply them to tests, checkpoints, and regions, see [Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### SetParentBranchName method
#### Syntax


    IConfiguration configval = config.SetParentBranchName(value);
    config.ParentBranchName  = configval;
     = config.ParentBranchName;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: string

The parent branch name to be configured.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### SetProxy method
#### Syntax


    IConfiguration configval = config.SetProxy(proxy);
    config.Proxy  = configval;
     = config.Proxy;
    

Note that this feature is available as both a method and a property.

#### Parameters

proxy

Type: WebProxy

An object that provides the user credentials.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### SetSaveDiffs method
#### Syntax


    IConfiguration configval = config.SetSaveDiffs(value);
    config.SaveDiffs  = configval;
     = config.SaveDiffs;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: bool?

Set to true to configure Save Diffs functionality.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### SetSaveNewTests method
#### Syntax


    IConfiguration configval = config.SetSaveNewTests(value);
    config.SaveNewTests  = configval;
     = config.SaveNewTests;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: bool

If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior).

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### SetServerUrl method
#### Syntax


    IConfiguration configval = config.SetServerUrl(value);
    config.ServerUrl  = configval;
     = config.ServerUrl;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: string

The URL of the Eyes server. Pass a value of null to use the default cloud server.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### SetTestName method
#### Syntax


    IConfiguration configval = config.SetTestName(value);
    config.TestName  = configval;
     = config.TestName;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: string

The test name to be configured for the test.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### SetViewportSize method
#### Syntax


    IConfiguration configval = config.SetViewportSize(width, height);
    
    IConfiguration configval = config.SetViewportSize(value);
    config.ViewportSize  = configval;
     = config.ViewportSize;
    

Note that this feature is available as both a method and a property.

#### Parameters

width

Type: int

The width of the test browser viewport in pixels.

height

Type: int

The height of the test browser viewport in pixels.

value

Type: [RectangleSize](./rectanglesize)

An object that defines the width and height of the test browser viewport in pixels.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

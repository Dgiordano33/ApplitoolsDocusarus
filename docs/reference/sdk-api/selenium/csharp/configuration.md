# Configuration class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
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

You can use this configuration object instead of using the various [Eyes](./eyes) methods and properties that set the same attributes. Typically you set up a Configuration object by calling its setXXXX methods chained with a '.' in a Fluent coding style. In this class, some attributes can be set by both a property and a set command. The properties allow you simple direct access to assign to and retrieve the attribute. The corresponding set method allows you to set multiple attributes using a Fluent style.

Using statement

    using Configuration = Applitools.Selenium.Configuration;
    	



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

### HideCaret property
#### Syntax


    bool configval; // give relevant initial value
    config.HideCaret  = configval;
    configval = config.HideCaret

Type: bool

#### Remarks


We recommend using this method instead of [Eyes.IgnoreCaret](./eyes#ignorecaret-property), [Configuration.SetIgnoreCaret](./configuration#setignorecaret-method) or [SeleniumCheckSettings.IgnoreCaret](./checksettings#ignorecaret-method), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them.

### HideScrollbars property
#### Syntax


    bool configval; // give relevant initial value
    config.HideScrollbars  = configval;
    configval = config.HideScrollbars

Type: bool

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

#### Remarks


We recommend using [HideCaret](./eyes#hidecaret-property) or [SetHideCaret](./configuration#sethidecaret-method) since this eliminates cursor related artifacts instead of detecting and ignoring them.

### IgnoreDisplacements property
#### Syntax


    bool configval; // give relevant initial value
    config.IgnoreDisplacements  = configval;
    configval = config.IgnoreDisplacements

Type: bool

#### Remarks


Ignore displacements is only active when using a Match level of [Strict](./matchlevel) or [Content](./matchlevel)

### LayoutBreakpoints property
#### Syntax


    int configval; // give relevant initial value
    config.LayoutBreakpoints  = configval;
    configval = config.LayoutBreakpoints

Type: int

#### Remarks


This method sets the default for all checkpoints on all tests that are configured using this Configuration object. This default can be overridden for a specific checkpoint by using the [SeleniumCheckSettings.LayoutBreakpoints](./checksettings#layoutbreakpoints-method) method.

### MatchLevel property
#### Syntax


    MatchLevel configval; // give relevant initial value
    config.MatchLevel  = configval;
    configval = config.MatchLevel

Type: [MatchLevel](./matchlevel)

#### Remarks


For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### MatchTimeout property
#### Syntax


    TimeSpan configval; // give relevant initial value
    config.MatchTimeout  = configval;
    configval = config.MatchTimeout

Type: TimeSpan

#### Remarks


You can overide the default timeout set by this property for a specific set checkpoint by passing a timeout to one of the check_XXXX methods that support a timeout parameter, e.g. [`CheckWindow`](./eyes#checkwindow-method)You can also overide the timeout for a specific test using the check fluent [`Timeout method`](./checksettings#timeout-method)

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

### SendDom property
#### Syntax


    bool configval; // give relevant initial value
    config.SendDom  = configval;
    configval = config.SendDom

Type: bool

#### Remarks


Sending DOM information is enabed by default, so use this method only if you have to disable it.

### ServerUrl property
#### Syntax


    string configval; // give relevant initial value
    config.ServerUrl  = configval;
    configval = config.ServerUrl

Type: string

### StitchMode property
#### Syntax


    StitchModes configval; // give relevant initial value
    config.StitchMode  = configval;
    configval = config.StitchMode

Type: [StitchModes](./stitchmode)

### StitchOverlap property
#### Syntax


    int configval; // give relevant initial value
    config.StitchOverlap  = configval;
    configval = config.StitchOverlap

Type: int

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

### VisualGridOptions property
#### Syntax


    VisualGridOption[] configval; // give relevant initial value
    config.VisualGridOptions  = configval;
    configval = config.VisualGridOptions

Type: [VisualGridOption](./visualgridoption)\[\]

#### Remarks


The following configuration key/value pairs are currently supported:

'chromeHeadless'

Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of false to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

'polyfillAdoptedStyleSheets'

Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option polyfillAdoptedStyleSheets to a value of true or false:

*   Setting a value of true instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
*   Setting a value of false instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.SetVisualGridOptions](./configuration#setvisualgridoptions-method)

You can override the global value for a given checkpoint using the method [SeleniumCheckSettings.VisualGridOptions](./checksettings#visualgridoptions-method).

### WaitBeforeScreenshots property
#### Syntax


    int configval; // give relevant initial value
    config.WaitBeforeScreenshots  = configval;
    configval = config.WaitBeforeScreenshots

Type: int


### AddBrowser method
#### Syntax


    IConfiguration configval = config.AddBrowser(desktopBrowserInfo);
    
    IConfiguration configval = config.AddBrowser(emulationInfo);
    
    IConfiguration configval = config.AddBrowser(deviceInfo);
    
    IConfiguration configval = config.AddBrowser(width, height, browserType, baselineEnvName);
    
    IConfiguration configval = config.AddBrowser(width, height, browserType);
    

#### Parameters

desktopBrowserInfo

Type: [DesktopBrowserInfo](./desktopbrowserinfo)

Which desktop browser type and viewport size to use.

C#

    /* test suite setup */  
        suiteConfig = (Configuration) new Configuration() 
            .AddBrowser(new DesktopBrowserInfo(viewPortWidth, viewPortHeight, BrowserType.EDGE_CHROMIUM)) 
            /* ... other configurations */  ; 
        /* 
         * Assign the configuration to all newly created Eyes instances
         */
        eyes = new Eyes(runner);
        eyes.SetConfiguration(suiteConfig);

emulationInfo

Type: [ChromeEmulationInfo](./chromeemulationinfo)

Which mobile device to emulate and its vertical or horizontal orientation.

C#

    /* test suite setup */  
        suiteConfig = (Configuration) new Configuration() 
            .AddBrowser(new ChromeEmulationInfo(DeviceName.Galaxy_S5, ScreenOrientation.Landscape)) 
            /* ... other configurations */  ; 
        /* 
         * Assign the configuration to all newly created Eyes instances
         */
        eyes = new Eyes(runner);
        eyes.SetConfiguration(suiteConfig);

deviceInfo

Type: [IosDeviceInfo](./iosdeviceinfo)

Defines the mobile device to be simulated and its vertical or horizontal orientation.

C#

    /* test suite setup */  
        suiteConfig = (Configuration) new Configuration() 
            .AddBrowser(new IosDeviceInfo(IosDeviceName.iPhone_11, ScreenOrientation.Portrait)) 
            /* ... other configurations */  ; 
        /* 
         * Assign the configuration to all newly created Eyes instances
         */
        eyes = new Eyes(runner);
        eyes.SetConfiguration(suiteConfig);

width

Type: int

The width of the browser viewport for this target. The maximum viewport width for all browsers is 5120. If this limit is exceeded, then execution of the checkpoint will fail.

Use this in conjunction with the browserType parameter.

height

Type: int

The height of the browser viewport for this target. There is no height limit.

Use this in conjunction with the browserType parameter.

browserType

Type: [BrowserType](./browsertype)

The type of browser for this target.

C#

    /* test suite setup */  
        suiteConfig = (Configuration) new Configuration() 
            /* ... other configurations */  ; 
        /* 
         * Assign the configuration to all newly created Eyes instances
         */
        eyes = new Eyes(runner);
        eyes.SetConfiguration(suiteConfig);

baselineEnvName

Type: string \[Optional : default = null \]

The name of the baseline environment. If provided, then the viewport, host app (browser), and OS that define the baseline are defined by the baseline environment name and not by the execution environment. The name should already be defined in the Test Manager. If it is not defined, then it will be created based on the execution environment of the first test that uses that name. For more information see [Running cross-environment tests](https://applitools.com/docs/topics/general-concepts/working-withcross-environment-tests.html).

Use this in conjunction with the browserType parameter.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


By default, the entire page is rendered. The viewport width and height parameters impact the baseline that is chosen, unless the baseline environment configuration or parameter has been provided. The viewport passed to the [Eyes.Open](./eyes#open-method) method does not impact the baseline used, but could impact the page layout if the page has any viewport size-sensitive factors such as HTML, CSS or Javascript.

### AddBrowsers method
#### Syntax


    IConfiguration configval = config.AddBrowsers(browsersInfo);
    

#### Parameters

browsersInfo

Type: IRenderBrowserInfo\[\]

One or more browser or device configuration definitions passed as an array or multiple parameters.

Define the browser or device configurations using instances of one or more of the following classes:

*   [DesktopBrowserInfo](./desktopbrowserinfo#desktopbrowserinfo-method): to run the test on a desktop browser.
*   [IosDeviceInfo](./iosdeviceinfo#iosdeviceinfo-method): to run the test on a Simulated iOS mobile device.
*   [ChromeEmulationInfo](./chromeemulationinfo#chromeemulationinfo-method): to run the test using on an emulated mobile device.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


You can use this method to pass a list of configurations instead of configuring each browser device individually using multiple calls to [AddBrowser](./configuration#addbrowser-method).

#### Example


C#

    /* test suite setup */  
       IRenderBrowserInfo[] browserList =
       {
           new DesktopBrowserInfo(viewPortWidth, viewPortHeight, BrowserType.FIREFOX),
           new ChromeEmulationInfo(DeviceName.Galaxy_Note_3, ScreenOrientation.Landscape),
           new IosDeviceInfo(IosDeviceName.iPhone_8, ScreenOrientation.Portrait)
       };
        suiteConfig = (Configuration) new Configuration() 
            .AddBrowsers(browserList) 
            /* ... other configurations */  ; 
       /* 
        * Assign the configuration to all newly created Eyes instances
        */
       eyes = new Eyes(runner);
       eyes.SetConfiguration(suiteConfig);

### AddDeviceEmulation method
#### Syntax


    IConfiguration configval = config.AddDeviceEmulation(deviceName, screenOrientation, baselineEnvName);
    
    IConfiguration configval = config.AddDeviceEmulation(deviceName, screenOrientation);
    
    IConfiguration configval = config.AddDeviceEmulation(deviceName);
    

#### Parameters

deviceName

Type: [DeviceName](./devicename)

The name of the device, from the list of devices defined by [DeviceName](./devicename).

screenOrientation

Type: [ScreenOrientation](./screenorientation) \[Optional : default = ScreenOrientation.Portrait \]

Whether the device is in portrait or landscape mode.

baselineEnvName

Type: string \[Optional : default = null \]

The name of the baseline environment. If provided, then the viewport, host app (browser), and OS that define the baseline are defined by the baseline environment name and not by the execution environment. The name should already be defined in the Test Manager. If it is not defined, then it will be created based on the execution environment of the first test that uses that name. For more information see [Running cross-environment tests](https://applitools.com/docs/topics/general-concepts/working-withcross-environment-tests.html).

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### Clone method
#### Syntax


    Applitools.Configuration configval = config.Clone();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  Applitools.[Configuration](./configuration)

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

### SetForceFullPageScreenshot method
#### Syntax


    IConfiguration configval = config.SetForceFullPageScreenshot(value);
    

#### Parameters

value

Type: bool

If this paramter has a value of true, then Eyes will do scrolling and stitching if necessary. If false, then the result is browser dependent.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### SetHideCaret method
#### Syntax


    IConfiguration configval = config.SetHideCaret(value);
    config.HideCaret  = configval;
     = config.HideCaret;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: bool

If this paramter has a value of true, then the cursor will be hidden before the image is captured.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


We recommend using this method instead of [Eyes.IgnoreCaret](./eyes#ignorecaret-property), [Configuration.SetIgnoreCaret](./configuration#setignorecaret-method) or [SeleniumCheckSettings.IgnoreCaret](./checksettings#ignorecaret-method), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them.

### SetHideScrollbars method
#### Syntax


    IConfiguration configval = config.SetHideScrollbars(value);
    config.HideScrollbars  = configval;
     = config.HideScrollbars;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: bool

If set to true then hide the scrollbars. Otherwise, don't hide the scrollbars.

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

#### Remarks


We recommend using [HideCaret](./eyes#hidecaret-property) or [SetHideCaret](./configuration#sethidecaret-method) since this eliminates cursor related artifacts instead of detecting and ignoring them.

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

### SetLayoutBreakpoints method
#### Syntax


    IConfiguration configval = config.SetLayoutBreakpoints(breakpoints);
    
    IConfiguration configval = config.SetLayoutBreakpoints(value);
    config.LayoutBreakpoints  = configval;
     = config.LayoutBreakpoints;
    

Note that this feature is available as both a method and a property.

#### Parameters

breakpoints

Type: int\[\]

Pass one or more viewport widths explicitly, and the JavaScript is executed and the DOM is extracted for each viewport width. For each target, the Ultrafast Grid uses the DOM extracted with the widest viewport that is smaller than the viewport width. For example, if the values 640, 768 and 1024 are passed, then targets with a width between 640 and 767 (inclusive) use the DOM extracted at 640. Similarly, targets between 768 and 1023 use the DOM extracted at 768. Targets that have a width smaller than the smallest defined width use a DOM extracted at one less than the smallest DOM width (639 in this example). Targets that have a width larger than the largest width defined (1024 in this example) use the DOM extracted at the largest width. If no width is specified, then a separate DOM is extracted for each distinct execution environment viewport width.

value

Type: int\[\]

Pass one or more viewport widths explicitly, and the JavaScript is executed and the DOM is extracted for each viewport width. For each target, the Ultrafast Grid uses the DOM extracted with the widest viewport that is smaller than the viewport width. For example, if the values 640, 768 and 1024 are passed, then targets with a width between 640 and 767 (inclusive) use the DOM extracted at 640. Similarly, targets between 768 and 1023 use the DOM extracted at 768. Targets that have a width smaller than the smallest defined width use a DOM extracted at one less than the smallest DOM width (639 in this example). Targets that have a width larger than the largest width defined (1024 in this example) use the DOM extracted at the largest width. If no width is specified, then a separate DOM is extracted for each distinct execution environment viewport width.

#### Return value

Type:  IConfiguration

#### Remarks


This method sets the default for all checkpoints on all tests that are configured using this Configuration object. This default can be overridden for a specific checkpoint by using the [SeleniumCheckSettings.LayoutBreakpoints](./checksettings#layoutbreakpoints-method) method.

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

### SetMatchTimeout method
#### Syntax


    IConfiguration configval = config.SetMatchTimeout(value);
    config.MatchTimeout  = configval;
     = config.MatchTimeout;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: TimeSpan

The timeout to set in seconds.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


You can overide the default timeout set by this property for a specific set checkpoint by passing a timeout to one of the check_XXXX methods that support a timeout parameter, e.g. [`CheckWindow`](./eyes#checkwindow-method)You can also overide the timeout for a specific test using the check fluent [`Timeout method`](./checksettings#timeout-method)

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
    
    IConfiguration configval = config.SetProxy(value);
    config.Proxy  = configval;
     = config.Proxy;
    

Note that this feature is available as both a method and a property.

#### Parameters

proxy

Type: WebProxy

An object that provides the user credentials.

value

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

### SetSendDom method
#### Syntax


    IConfiguration configval = config.SetSendDom(value);
    config.SendDom  = configval;
     = config.SendDom;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: bool

A value of true means that DOM information will be sent. A value of false means that DOM information will not be sent.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


Sending DOM information is enabed by default, so use this method only if you have to disable it.

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

### SetStitchMode method
#### Syntax


    IConfiguration configval = config.SetStitchMode(value);
    config.StitchMode  = configval;
     = config.StitchMode;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: [StitchModes](./stitchmode)

The stitch mode to use.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### SetStitchOverlap method
#### Syntax


    IConfiguration configval = config.SetStitchOverlap(value);
    config.StitchOverlap  = configval;
     = config.StitchOverlap;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: int

The width of the stitch overlap in pixels.

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

### SetVisualGridOptions method
#### Syntax


    IConfiguration configval = config.SetVisualGridOptions(options);
    config.VisualGridOptions  = configval;
     = config.VisualGridOptions;
    

Note that this feature is available as both a method and a property.

#### Parameters

options

Type: [VisualGridOption](./visualgridoption)\[\]

One or more configuration options for the Ultrafast Grid.

#### Return value

Type:  IConfiguration

#### Remarks


The following configuration key/value pairs are currently supported:

'chromeHeadless'

Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of false to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

'polyfillAdoptedStyleSheets'

Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option polyfillAdoptedStyleSheets to a value of true or false:

*   Setting a value of true instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
*   Setting a value of false instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.SetVisualGridOptions](#)

You can override the global value for a given checkpoint using the method [SeleniumCheckSettings.VisualGridOptions](./checksettings#visualgridoptions-method).

#### Example


C#

    /* test suite setup */  
        suiteConfig = (Configuration) new Configuration() 
            .SetVisualGridOptions(new VisualGridOption("polyfillAdoptedStyleSheets", true))   
            /* ... other configurations */  ; 
        /* 
         * Assign the configuration to all newly created Eyes instances
         */
        eyes = new Eyes(runner);
        eyes.SetConfiguration(suiteConfig);

### SetWaitBeforeScreenshots method
#### Syntax


    IConfiguration configval = config.SetWaitBeforeScreenshots(value);
    config.WaitBeforeScreenshots  = configval;
     = config.WaitBeforeScreenshots;
    

Note that this feature is available as both a method and a property.

#### Parameters

value

Type: int

The time to wait in milliseconds. Passing a value of less than or equal to zero will cause the default value to be used.

#### Return value

Type:  IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

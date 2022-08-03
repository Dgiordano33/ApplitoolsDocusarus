# Configuration class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Espresso</b>
</div><div class='platform-bar-div'>Language: <b>Java</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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




This class is used to create a configuration object that is used to configure an [Eyes](./eyes) object by passing it to the [Eyes.setConfiguration](./eyes#setconfiguration-method) method.

You can use this configuration object instead of using the various [Eyes](./eyes) methods and properties that set the same attributes. Typically you set up a Configuration object by calling its setXXXX methods chained with a '.' in a Fluent coding style.

Import statement

    import com.applitools.eyes.android.common.config.Configuration;
    	



### Configuration method
#### Syntax


    Configuration config = new Configuration();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.


### cloneConfig method
#### Syntax


    Configuration configval = config.cloneConfig();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [Configuration](./configuration)

A cloned [Configuration](./configuration) object.

### getAccessibilityValidation method
#### Syntax


    AccessibilitySettings configval = config.getAccessibilityValidation();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [AccessibilitySettings](./accessibilitysettings)

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### getAgentId method
#### Syntax


    String configval = config.getAgentId();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getApiKey method
#### Syntax


    String configval = config.getApiKey();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getAppName method
#### Syntax


    String configval = config.getAppName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getBaselineBranchName method
#### Syntax


    String configval = config.getBaselineBranchName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getBaselineEnvName method
#### Syntax


    String configval = config.getBaselineEnvName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getBatch method
#### Syntax


    BatchInfo configval = config.getBatch();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [BatchInfo](./batchinfo)

### getBranchName method
#### Syntax


    String configval = config.getBranchName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getForceFullPageScreenshot method
#### Syntax


    Boolean configval = config.getForceFullPageScreenshot();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  Boolean

### getHideCaret method
#### Syntax


    boolean configval = config.getHideCaret();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getHostApp method
#### Syntax


    String configval = config.getHostApp();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getHostOS method
#### Syntax


    String configval = config.getHostOS();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getIgnoreCaret method
#### Syntax


    boolean configval = config.getIgnoreCaret();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getIgnoreDisplacements method
#### Syntax


    boolean configval = config.getIgnoreDisplacements();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getMatchLevel method
#### Syntax


    MatchLevel configval = config.getMatchLevel();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [MatchLevel](./matchlevel)

#### Remarks


For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### getMatchTimeout method
#### Syntax


    int configval = config.getMatchTimeout();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  int

### getParentBranchName method
#### Syntax


    String configval = config.getParentBranchName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getProxy method
#### Syntax


    AbstractProxySettings configval = config.getProxy();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  AbstractProxySettings

The value returned is a [ProxySettings](./proxysettings) object or null if no proxy is set.

### getSaveDiffs method
#### Syntax


    Boolean configval = config.getSaveDiffs();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  Boolean

### getSaveNewTests method
#### Syntax


    boolean configval = config.getSaveNewTests();
    

Note: This method is a static method.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getServerUrl method
#### Syntax


    URI configval = config.getServerUrl();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  URI

### getStitchOverlap method
#### Syntax


    int configval = config.getStitchOverlap();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  int

### getTestName method
#### Syntax


    String configval = config.getTestName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getViewportSize method
#### Syntax


    RectangleSize configval = config.getViewportSize();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [RectangleSize](./rectanglesize)

### isSendDom method
#### Syntax


    Boolean configval = config.isSendDom();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  Boolean

### setAccessibilityValidation method
#### Syntax


    IConfigurationSetter configval = config.setAccessibilityValidation(accessibilitySettings);
    

#### Parameters

accessibilitySettings

Type: [AccessibilitySettings](./accessibilitysettings)

The required accessibility settings. A value of null will disable accessibility checking.

#### Return value

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### setAgentId method
#### Syntax


    IConfigurationSetter configval = config.setAgentId(agentId);
    

#### Parameters

agentId

Type: String

The agent id to be configured.

#### Return value

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setApiKey method
#### Syntax


    IConfigurationSetter configval = config.setApiKey(apiKey);
    

#### Parameters

apiKey

Type: String

A string that is your API Key.

#### Return value

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


Set this immediately after the Eyes object is created (before calling [open](#open-method)). If you have an environment variable called APPLITOOLS_API_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value.

### setAppName method
#### Syntax


    IConfigurationSetter configval = config.setAppName(appName);
    

#### Parameters

appName

Type: String

The application name to be configured for the test.

#### Return value

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


If you call this method, it must be called before the call to [Eyes.open](#open-method). In the call to [Eyes.open](#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used.

### setBaselineBranchName method
#### Syntax


    IConfigurationSetter configval = config.setBaselineBranchName(baselineBranchName);
    

#### Parameters

baselineBranchName

Type: String

The baseline branch name to be configured.

#### Return value

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setBaselineEnvName method
#### Syntax


    IConfigurationSetter configval = config.setBaselineEnvName(baselineEnvName);
    

#### Parameters

baselineEnvName

Type: String

The name of the baseline environment.

#### Return value

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setBatch method
#### Syntax


    IConfigurationSetter configval = config.setBatch(batch);
    

#### Parameters

batch

Type: [BatchInfo](./batchinfo)

An object that defines the batch configuration.

#### Return value

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setBranchName method
#### Syntax


    IConfigurationSetter configval = config.setBranchName(branchName);
    

#### Parameters

branchName

Type: String

The branch name to be used by the configuration.

#### Return value

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.



### setForceFullPageScreenshot method
#### Syntax


    IConfigurationSetter configval = config.setForceFullPageScreenshot(forceFullPageScreenshot);
    

#### Parameters

forceFullPageScreenshot

Type: boolean

If this paramter has a value of true, then Eyes will do scrolling and stitching if necessary. If false, then the result is browser dependent.

#### Return value

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setHideCaret method
#### Syntax


    IConfigurationSetter configval = config.setHideCaret(hideCaret);
    

#### Parameters

hideCaret

Type: boolean

If this paramter has a value of true, then the cursor will be hidden before the image is captured.

#### Return value

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


We recommend using this method instead of [Eyes.setIgnoreCaret](./eyes#setignorecaret-method), [Configuration.setIgnoreCaret](./configuration#setignorecaret-method) or [EspressoCheckSettings.ignoreCaret](./checksettings#ignorecaret-method), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them.

### setHostApp method
#### Syntax


    IConfigurationSetter configval = config.setHostApp(hostApp);
    

#### Parameters

hostApp

Type: String

The value to be used for the Host App property.

#### Return value

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setHostOS method
#### Syntax


    IConfigurationSetter configval = config.setHostOS(hostOS);
    

#### Parameters

hostOS

Type: String

The value to be used for the Host OS Property.

#### Return value

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setIgnoreCaret method
#### Syntax


    IConfigurationSetter configval = config.setIgnoreCaret(value);
    

#### Parameters

value

Type: boolean

If set to true, then Eyes does extra processing to eliminate artifacts introduced by blinking cursors.

#### Return value

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


We recommend using [setHideCaret](./eyes#sethidecaret-method), [setHideCaret](./configuration#sethidecaret-method) or [hideCaret](./checksettings#hidecaret-method) since this eliminates cursor related artifacts instead of detecting and ignoring them.

### setIgnoreDisplacements method
#### Syntax


    IConfigurationSetter configval = config.setIgnoreDisplacements(isIgnoreDisplacements);
    

#### Parameters

isIgnoreDisplacements

Type: boolean

If a value of true is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed.

#### Return value

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


Ignore displacements is only active when using a Match level of [STRICT](./matchlevel) or [CONTENT](./matchlevel)

### setMatchLevel method
#### Syntax


    IConfigurationSetter configval = config.setMatchLevel(matchLevel);
    

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

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### setMatchTimeout method
#### Syntax


    IConfigurationSetter configval = config.setMatchTimeout(matchTimeout);
    

#### Parameters

matchTimeout

Type: int

The timeout to set in milliseconds.

#### Return value

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


You can overide the default timeout set by this method for a specific set checkpoint by passing a timeout to one of the check_XXXX methods that support a timeout parameter, e.g. [`checkWindow`](./eyes#checkwindow-method)You can also overide the timeout for a specific test using the check fluent [`timeout method`](#timeout-method)

### setParentBranchName method
#### Syntax


    IConfigurationSetter configval = config.setParentBranchName(parentBranchName);
    

#### Parameters

parentBranchName

Type: String

The parent branch name to be configured.

#### Return value

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setProxy method
#### Syntax


    IConfigurationSetter configval = config.setProxy(proxy);
    

#### Parameters

proxy

Type: AbstractProxySettings

An object created from the [ProxySettings](./proxysettings) class that contains the user name, password, URI and port.

#### Return value

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setSaveDiffs method
#### Syntax


    IConfigurationSetter configval = config.setSaveDiffs(saveDiffs);
    

#### Parameters

saveDiffs

Type: Boolean

Set to true to configure Save Diffs functionality.

#### Return value

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setSaveNewTests method
#### Syntax


    IConfigurationSetter configval = config.setSaveNewTests(saveNewTests);
    

#### Parameters

saveNewTests

Type: boolean

If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior).

#### Return value

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setSendDom method
#### Syntax


    IConfigurationSetter configval = config.setSendDom(sendDom);
    

#### Parameters

sendDom

Type: boolean

A value of true means that DOM information will be sent. A value of false means that DOM information will not be sent.

#### Return value

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


Sending DOM information is enabed by default, so use this method only if you have to disable it.

### setServerUrl method
#### Syntax


    IConfigurationSetter configval = config.setServerUrl(serverUrl);
    

#### Parameters

serverUrl

Type: String

The URL of the Eyes server. Pass a value of null to use the default cloud server.

#### Return value

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setStitchOverlap method
#### Syntax


    IConfigurationSetter configval = config.setStitchOverlap(stitchOverlap);
    

#### Parameters

stitchOverlap

Type: int

The width of the stitch overlap in pixels.

#### Return value

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setTestName method
#### Syntax


    IConfigurationSetter configval = config.setTestName(testName);
    

#### Parameters

testName

Type: String

The test name to be configured for the test.

#### Return value

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setViewportSize method
#### Syntax


    IConfigurationSetter configval = config.setViewportSize(viewportSize);
    

#### Parameters

viewportSize

Type: [RectangleSize](./rectanglesize)

An object that defines the width and height of the test browser viewport in pixels.

#### Return value

Type:  IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

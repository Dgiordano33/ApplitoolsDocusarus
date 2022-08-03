# Configuration class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
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

    import com.applitools.eyes.config.Configuration;
    	



### Configuration method
#### Syntax


    Configuration config = new Configuration();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.


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

### getDeviceInfo method
#### Syntax


    String configval = config.getDeviceInfo();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

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

### getHostingAppInfo method
#### Syntax


    String configval = config.getHostingAppInfo();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

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

### getOsInfo method
#### Syntax


    String configval = config.getOsInfo();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

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

### setAccessibilityValidation method
#### Syntax


    Configuration configval = config.setAccessibilityValidation(accessibilitySettings);
    

#### Parameters

accessibilitySettings

Type: [AccessibilitySettings](./accessibilitysettings)

The required accessibility settings. A value of null will disable accessibility checking.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### setAgentId method
#### Syntax


    Configuration configval = config.setAgentId(agentId);
    

#### Parameters

agentId

Type: String

The agent id to be configured.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setApiKey method
#### Syntax


    Configuration configval = config.setApiKey(apiKey);
    

#### Parameters

apiKey

Type: String

A string that is your API Key.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


Set this immediately after the Eyes object is created (before calling [open](#open-method)). If you have an environment variable called APPLITOOLS_API_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value.

### setAppName method
#### Syntax


    Configuration configval = config.setAppName(appName);
    

#### Parameters

appName

Type: String

The application name to be configured for the test.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


If you call this method, it must be called before the call to [Eyes.open](#open-method). In the call to [Eyes.open](#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used.

### setBaselineBranchName method
#### Syntax


    Configuration configval = config.setBaselineBranchName(baselineBranchName);
    

#### Parameters

baselineBranchName

Type: String

The baseline branch name to be configured.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setBaselineEnvName method
#### Syntax


    Configuration configval = config.setBaselineEnvName(baselineEnvName);
    

#### Parameters

baselineEnvName

Type: String

The name of the baseline environment.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setBatch method
#### Syntax


    Configuration configval = config.setBatch(batch);
    

#### Parameters

batch

Type: [BatchInfo](./batchinfo)

An object that defines the batch configuration.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setBranchName method
#### Syntax


    Configuration configval = config.setBranchName(branchName);
    

#### Parameters

branchName

Type: String

The branch name to be used by the configuration.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setDeviceInfo method
#### Syntax


    Configuration configval = config.setDeviceInfo(deviceInfo);
    

#### Parameters

deviceInfo

Type: String

The name of the device - this is displayed in the Device column in the Test Manager.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setFeatures method
#### Syntax


    Configuration configval = config.setFeatures(feature, features);
    

#### Parameters

feature

Type: [Feature](./feature)

One or more features to set.

features

Type: [Feature](./feature)...

One or more features to set.

#### Return value

Type:  [Configuration](./configuration)

#### Remarks


The following values may be passed to this method:

[USE_PREDEFINED_DEVICE_INFO](./feature)

If this feature is set, then Eyes uses internal information regarding mobile devices instead of the information provided by Appium.

Some versions of Appium have inaccurate information, such as screen size and pixel scale ratio, on certain mobile devices. If you have issues with capturing correct images on a mobile device, try calling [Configuration.setFeatures](#), passing a value of [Feature.USE_PREDEFINED_DEVICE_INFO](./feature), for example:

    suiteConfig.setFeatures(Feature.USE_PREDEFINED_DEVICE_INFO)
    This instructs Eyes to use information stored in Eyes about the mobile devices that have been tested and are known to work correctly.

[NO_SWITCH_WITHOUT_FRAME_CHAIN](./feature)

This option may help in cases where rendering fails because of a clash between the test program's use of the WebDriver to access frames and the SDK's attempt to take a screenshot.

The recommended way to access the Selenium WebDriver is as follows:

    originalWebDriver = new ChromeDriver();
    WebDriver webDriver = eyes.open(originalWebDriver, appName, testName, viewport)
    webDriver.get(url);
    

The code creates a WebDriver instance (originalWebDriver) and passes this to the method [Eyes.open](#open-method). The method returns a clone of originalWebDriver that the test assigns to the variable webDriver. Thereafter, the program should use webDriver to access Selenium and not originalWebDriver.

This pattern enables Eyes to be aware of changes in the state of the browser, and it can use this information during the screen capture process.

If the test must use the originalWebDriver object and not webDriver, this can cause the screen capture to fail. If this happens, we recommend that you try to eliminate such failures by calling [Configuration.setFeatures](#), passing as a parameter the value [Feature.NO_SWITCH_WITHOUT_FRAME_CHAIN](./feature).

### setHostApp method
#### Syntax


    Configuration configval = config.setHostApp(hostApp);
    

#### Parameters

hostApp

Type: String

The value to be used for the Host App property.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setHostOS method
#### Syntax


    Configuration configval = config.setHostOS(hostOS);
    

#### Parameters

hostOS

Type: String

The value to be used for the Host OS Property.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setHostingAppInfo method
#### Syntax


    Configuration configval = config.setHostingAppInfo(hostingAppInfo);
    

#### Parameters

hostingAppInfo

Type: String

hostappinfo.params.sethostappinfo

#### Return value

Type:  [Configuration](./configuration)

### setIgnoreDisplacements method
#### Syntax


    Configuration configval = config.setIgnoreDisplacements(isIgnoreDisplacements);
    

#### Parameters

isIgnoreDisplacements

Type: boolean

If a value of true is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


Ignore displacements is only active when using a Match level of [STRICT](./matchlevel) or [CONTENT](./matchlevel)

### setMatchLevel method
#### Syntax


    Configuration configval = config.setMatchLevel(matchLevel);
    

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

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### setOsInfo method
#### Syntax


    Configuration configval = config.setOsInfo(osInfo);
    

#### Parameters

osInfo

Type: String

The value to be displayed in the OS column of the Test Results page of the Test Manager.

#### Return value

Type:  [Configuration](./configuration)

### setParentBranchName method
#### Syntax


    Configuration configval = config.setParentBranchName(parentBranchName);
    

#### Parameters

parentBranchName

Type: String

The parent branch name to be configured.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setProxy method
#### Syntax


    Configuration configval = config.setProxy(proxy);
    

#### Parameters

proxy

Type: AbstractProxySettings

An object created from the [ProxySettings](./proxysettings) class that contains the user name, password, URI and port.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setSaveDiffs method
#### Syntax


    Configuration configval = config.setSaveDiffs(saveDiffs);
    

#### Parameters

saveDiffs

Type: Boolean

Set to true to configure Save Diffs functionality.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setSaveNewTests method
#### Syntax


    Configuration configval = config.setSaveNewTests(saveNewTests);
    

#### Parameters

saveNewTests

Type: boolean

If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior).

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setServerUrl method
#### Syntax


    Configuration configval = config.setServerUrl(serverUrl);
    

#### Parameters

serverUrl

Type: String

The URL of the Eyes server. Pass a value of null to use the default cloud server.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setTestName method
#### Syntax


    Configuration configval = config.setTestName(testName);
    

#### Parameters

testName

Type: String

The test name to be configured for the test.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setViewportSize method
#### Syntax


    Configuration configval = config.setViewportSize(viewportSize);
    

#### Parameters

viewportSize

Type: [RectangleSize](./rectanglesize)

An object that defines the width and height of the test browser viewport in pixels.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

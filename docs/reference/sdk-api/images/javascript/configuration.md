# Configuration class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

You can use this configuration object instead of using the various [Eyes](./eyes) methods and properties that set the same attributes. Typically you set up a Configuration object by calling its setXXXX methods chained with a '.' in a Fluent coding style. In this class, some attributes can be set by both a property and a set command. The properties allow you simple direct access to assign to and retrieve the attribute. The corresponding set method allows you to set multiple attributes using a Fluent style.

Require statement

    const {Configuration} = require('@applitools/eyes-images');
    	



### Configuration method
#### Syntax


    let config = new Configuration();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.


### addProperty method
#### Syntax


    let configval = config.addProperty(property);
    
    let configval = config.addProperty(propertyName, propertyValue);
    

#### Parameters

### property

Type: 

    PropertyData|PropertyDataObject

An object of type [PropertyData](./propertydata), or an object of the form {name: string, value: string}. The name and value of the added property are derived from the passed object.

#### Type definitions

PropertyDataObject

The type PropertyDataObject is defined as: {name:string,value:string}.

propertyName

Type: string

The name of the property.

propertyValue

Type: string

The value associated with the name.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


*   Set multiple properties by calling [Eyes.addProperty](./eyes#addproperty-method) or [Configuration.addProperty](#) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run.

### cloneConfig method
#### Syntax


    let configval = config.cloneConfig();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [Configuration](./configuration)

A cloned [Configuration](./configuration) object.

### getAccessibilityValidation method
#### Syntax


    let configval = config.getAccessibilityValidation();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  AccessibilitySettings

#### Type definitions

AccessibilitySettings

The type AccessibilitySettings is defined as: {level:[AccessibilityLevel](./accessibilitylevel),guidelinesVersion:[AccessibilityGuidelinesVersion](./accessibilityguidelinesversion)}

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### getAgentId method
#### Syntax


    let configval = config.getAgentId();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getApiKey method
#### Syntax


    let configval = config.getApiKey();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getAppName method
#### Syntax


    let configval = config.getAppName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getBaselineBranchName method
#### Syntax


    let configval = config.getBaselineBranchName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getBaselineEnvName method
#### Syntax


    let configval = config.getBaselineEnvName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getBatch method
#### Syntax


    let configval = config.getBatch();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [BatchInfo](./batchinfo)

### getBranchName method
#### Syntax


    let configval = config.getBranchName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getDeviceInfo method
#### Syntax


    let configval = config.getDeviceInfo();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getHostApp method
#### Syntax


    let configval = config.getHostApp();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getHostOS method
#### Syntax


    let configval = config.getHostOS();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getIgnoreCaret method
#### Syntax


    let configval = config.getIgnoreCaret();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getIgnoreDisplacements method
#### Syntax


    let configval = config.getIgnoreDisplacements();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getIsDisabled method
#### Syntax


    let configval = config.getIsDisabled();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

If true, then all calls to Eyes are ignored, if false then all calls to Eyes work as usual.

### getMatchLevel method
#### Syntax


    let configval = config.getMatchLevel();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [MatchLevel](./matchlevel)

#### Remarks


For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### getParentBranchName method
#### Syntax


    let configval = config.getParentBranchName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getProperties method
#### Syntax


    let configval = config.getProperties();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [PropertyData](./propertydata)\[\]

### getProxy method
#### Syntax


    let configval = config.getProxy();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [ProxySettings](./proxysettings)

### getSaveDiffs method
#### Syntax


    let configval = config.getSaveDiffs();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getSaveNewTests method
#### Syntax


    let configval = config.getSaveNewTests();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getServerUrl method
#### Syntax


    let configval = config.getServerUrl();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getTestName method
#### Syntax


    let configval = config.getTestName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getViewportSize method
#### Syntax


    let configval = config.getViewportSize();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [RectangleSize](./rectanglesize)

### setAccessibilityValidation method
#### Syntax


    let configval = config.setAccessibilityValidation(value);
    

#### Parameters

value

Type: AccessibilitySettings

The required accessibility settings. A value of null will disable accessibility checking.

#### Type definitions

AccessibilitySettings

The type AccessibilitySettings is defined as: {level:[AccessibilityLevel](./accessibilitylevel),guidelinesVersion:[AccessibilityGuidelinesVersion](./accessibilityguidelinesversion)}

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### setAgentId method
#### Syntax


    let configval = config.setAgentId(value);
    

#### Parameters

value

Type: string

The agent id to be configured.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setApiKey method
#### Syntax


    let configval = config.setApiKey(value);
    

#### Parameters

value

Type: string

A string that is your API Key.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


Set this immediately after the Eyes object is created (before calling [open](#open-method)). If you have an environment variable called APPLITOOLS_API_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value.

### setAppName method
#### Syntax


    let configval = config.setAppName(value);
    

#### Parameters

value

Type: string

The application name to be configured for the test.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


If you call this method, it must be called before the call to [Eyes.open](#open-method). In the call to [Eyes.open](#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used.

### setBaselineBranchName method
#### Syntax


    let configval = config.setBaselineBranchName(value);
    

#### Parameters

value

Type: string

The baseline branch name to be configured.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setBaselineEnvName method
#### Syntax


    let configval = config.setBaselineEnvName(value);
    

#### Parameters

value

Type: string

The name of the baseline environment.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setBatch method
#### Syntax


    let configval = config.setBatch(value);
    

#### Parameters

value

Type: 

    BatchInfo|BatchInfoObject

An object that defines the batch configuration.

#### Type definitions

BatchInfoObject

The type BatchInfoObject is defined as: {id:(string|undefined),name:(string|undefined),startedAt:(Date|string|undefined),sequenceName:(string|undefined),notifyOnCompletion:(boolean|undefined)}.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setBranchName method
#### Syntax


    let configval = config.setBranchName(value);
    

#### Parameters

value

Type: string

The branch name to be used by the configuration.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setDeviceInfo method
#### Syntax


    let configval = config.setDeviceInfo(value);
    

#### Parameters

value

Type: string

The name of the device - this is displayed in the Device column in the Test Manager.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setHostApp method
#### Syntax


    config.setHostApp(value);
    

#### Parameters

value

Type: string

The value to be used for the Host App property.

#### Return value

Type: 

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setHostOS method
#### Syntax


    config.setHostOS(value);
    

#### Parameters

value

Type: string

The value to be used for the Host OS Property.

#### Return value

Type: 

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setIgnoreCaret method
#### Syntax


    let configval = config.setIgnoreCaret(value);
    

#### Parameters

value

Type: boolean

If set to true, then Eyes does extra processing to eliminate artifacts introduced by blinking cursors.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setIgnoreDisplacements method
#### Syntax


    let configval = config.setIgnoreDisplacements(value);
    

#### Parameters

value

Type: boolean

If a value of true is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


Ignore displacements is only active when using a Match level of [Strict](./matchlevel) or [Content](./matchlevel)

### setIsDisabled method
#### Syntax


    let configval = config.setIsDisabled(value);
    

#### Parameters

value

Type: boolean

If this has a value of true then all method calls to the SDK are ignored. Otherwise, all methods work as usual.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setMatchLevel method
#### Syntax


    let configval = config.setMatchLevel(value);
    

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

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### setParentBranchName method
#### Syntax


    let configval = config.setParentBranchName(value);
    

#### Parameters

value

Type: string

The parent branch name to be configured.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setProperties method
#### Syntax


    let configval = config.setProperties(properties);
    

#### Parameters

properties

Type: [PropertyData](./propertydata)\[\]

List of propertydata objects.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


*   Set multiple properties by calling [Eyes.addProperty](./eyes#addproperty-method) or [Configuration.addProperty](./configuration#addproperty-method) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run.

### setProxy method
#### Syntax


    let configval = config.setProxy(value);
    

#### Parameters

value

Type: 

    ProxySettings|ProxySettingsObject|string|boolean

An object created from the [ProxySettings](./proxysettings) class that contains the user name, password, URI and port.

#### Type definitions

ProxySettingsObject

The type ProxySettingsObject is defined as: {url:string,username:(string|undefined),password:(string|undefined)}.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setSaveDiffs method
#### Syntax


    let configval = config.setSaveDiffs(value);
    

#### Parameters

value

Type: boolean

Set to true to configure Save Diffs functionality.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setSaveNewTests method
#### Syntax


    let configval = config.setSaveNewTests(value);
    

#### Parameters

value

Type: boolean

If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior).

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setServerUrl method
#### Syntax


    let configval = config.setServerUrl(value);
    

#### Parameters

value

Type: string

The URL of the Eyes server. Pass a value of null to use the default cloud server.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setTestName method
#### Syntax


    let configval = config.setTestName(value);
    

#### Parameters

value

Type: string

The test name to be configured for the test.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### setViewportSize method
#### Syntax


    let configval = config.setViewportSize(value);
    

#### Parameters

value

Type: 

    RectangleSize|RectangleSizeObject

An object that defines the width and height of the test browser viewport in pixels.

#### Type definitions

RectangleSizeObject

The type RectangleSizeObject is defined as: {width:number,height:number}.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

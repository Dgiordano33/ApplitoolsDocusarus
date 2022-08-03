# ConfigurationPlain class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Playwright</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../puppeteer/javascript/configurationplain'>Puppeteer Javascript</a>
<a href='../../selenium4/javascript/configurationplain'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/configurationplain'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/configurationplain'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/configurationplain'>Nightwatch Javascript</a>
<a href='../../protractor/javascript/configurationplain'>Protractor Javascript</a>
<a href='../../wdiogeneric/javascript/configurationplain'>Wdiogeneric Javascript</a>
</div></div><br /><br /></div>




This type is used to create a configuration object that is used to configure an [Eyes](./eyes) object by passing it to the [Eyes.setConfiguration](./eyes#setconfiguration-method) method.

You can use this configuration object instead of using the various [Eyes](./eyes) methods and properties that set the same attributes. Typically you set up a Configuration object by calling its setXXXX methods chained with a '.' in a Fluent coding style. In this class, some attributes can be set by both a property and a set command. The properties allow you simple direct access to assign to and retrieve the attribute. The corresponding set method allows you to set multiple attributes using a Fluent style.


### agentId property
#### Syntax


    config = { agentId: value_string };
    

Type: string

The agent id to be configured.

### agentId property
#### Syntax


    config = { agentId: value_string };
    

Type: string

The agent id to be configured.

### apiKey property
#### Syntax


    config = { apiKey: value_string };
    

Type: string

A string that is your API Key.

#### Remarks


Set this immediately after the Eyes object is created (before calling [open](#open-method)). If you have an environment variable called APPLITOOLS_API_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value.

### apiKey property
#### Syntax


    config = { apiKey: value_string };
    

Type: string

A string that is your API Key.

#### Remarks


Set this immediately after the Eyes object is created (before calling [open](#open-method)). If you have an environment variable called APPLITOOLS_API_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value.

### appName property
#### Syntax


    config = { appName: value_string };
    

Type: string

The application name to be configured for the test.

#### Remarks


If you call this method, it must be called before the call to [Eyes.open](#open-method). In the call to [Eyes.open](#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used.

### appName property
#### Syntax


    config = { appName: value_string };
    

Type: string

The application name to be configured for the test.

#### Remarks


If you call this method, it must be called before the call to [Eyes.open](#open-method). In the call to [Eyes.open](#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used.

### baselineBranchName property
#### Syntax


    config = { baselineBranchName: value_string };
    

Type: string

The baseline branch name to be configured.

### baselineBranchName property
#### Syntax


    config = { baselineBranchName: value_string };
    

Type: string

The baseline branch name to be configured.

### baselineEnvName property
#### Syntax


    config = { baselineEnvName: value_string };
    

Type: string

The name of the baseline environment.

### baselineEnvName property
#### Syntax


    config = { baselineEnvName: value_string };
    

Type: string

The name of the baseline environment.

### batch property
#### Syntax


    config = { batch: value_BatchInfoPlain };
    

Type: [BatchInfoPlain](./batchinfoplain)

An object that defines the batch configuration.

### batch property
#### Syntax


    config = { batch: value_BatchInfoPlain };
    

Type: [BatchInfoPlain](./batchinfoplain)

An object that defines the batch configuration.

### branchName property
#### Syntax


    config = { branchName: value_string };
    

Type: string

The branch name to be used by the configuration.

### branchName property
#### Syntax


    config = { branchName: value_string };
    

Type: string

The branch name to be used by the configuration.

### browsersInfo property
#### Syntax


    let suiteConfig = {
      browsersInfo: [
        { height: value1_number, width: value2_number, name: "chrome" },
        { deviceName: "Galaxy Note 3", screenOrientation: "landscape" },
        {
          deviceName: "iPad (7th generation)",
          iosVersion: "latest",
          screenOrientation: "portrait",
        },
      ],
    };
    eyes.setConfiguration(suiteConfig);
    

Type: 

    (DesktopBrowserInfo|ChromeEmulationInfo|IOSDeviceInfo)[]

### browsersInfo property
#### Syntax


    config = { browsersInfo: value };
    

Type: 

    (DesktopBrowserInfo|ChromeEmulationInfo|IOSDeviceInfo)[]

List of objects that define browsers and emulated devices to be rendered.

### deviceInfo property
#### Syntax


    config = { deviceInfo: value_string };
    

Type: string

The name of the device - this is displayed in the Device column in the Test Manager.

### forceFullPageScreenshot property
#### Syntax


    config = { forceFullPageScreenshot: value_boolean };
    

Type: boolean

### forceFullPageScreenshot property
#### Syntax


    config = { forceFullPageScreenshot: value_boolean };
    

Type: boolean

If this paramter has a value of true, then Eyes will do scrolling and stitching if necessary. If false, then the result is browser dependent.

### hideCaret property
#### Syntax


    config = { hideCaret: value_boolean };
    

Type: boolean

If this paramter has a value of true, then the cursor will be hidden before the image is captured.

#### Remarks


We recommend using this method instead of [Eyes.setIgnoreCaret](./eyes#setignorecaret-method), [Configuration.setIgnoreCaret](./configuration#setignorecaret-method) or [CheckSettings.ignoreCaret](./checksettings#ignorecaret-method), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them.

### hideCaret property
#### Syntax


    config = { hideCaret: value_boolean };
    

Type: boolean

If this paramter has a value of true, then the cursor will be hidden before the image is captured.

#### Remarks


We recommend using this method instead of [Eyes.setIgnoreCaret](./eyes#setignorecaret-method), [Configuration.setIgnoreCaret](./configuration#setignorecaret-method) or [CheckSettings.ignoreCaret](./checksettings#ignorecaret-method), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them.

### hideScrollbars property
#### Syntax


    config = { hideScrollbars: value_boolean };
    

Type: boolean

If set to true then hide the scrollbars. Otherwise, don't hide the scrollbars.

### hideScrollbars property
#### Syntax


    config = { hideScrollbars: value_boolean };
    

Type: boolean

If set to true then hide the scrollbars. Otherwise, don't hide the scrollbars.

### hostApp property
#### Syntax


    config = { hostApp: value_string };
    

Type: string

The value to be used for the Host App property.

### hostApp property
#### Syntax


    config = { hostApp: value_string };
    

Type: string

The value to be used for the Host App property.

### hostAppInfo property
#### Syntax


    config = { hostAppInfo: value_string };
    

Type: string

### hostOS property
#### Syntax


    config = { hostOS: value_string };
    

Type: string

The value to be used for the Host OS Property.

### hostOS property
#### Syntax


    config = { hostOS: value_string };
    

Type: string

The value to be used for the Host OS Property.

### hostOSInfo property
#### Syntax


    config = { hostOSInfo: value_string };
    

Type: string

### matchTimeout property
#### Syntax


    config = { matchTimeout: value_number };
    

Type: number

The timeout to set in milliseconds.

#### Remarks


You can overide the default timeout set by this method for a specific set checkpoint by passing a timeout to one of the check_XXXX methods that support a timeout parameter, e.g. [`eyes.checkwindow (not yet available in playwright javascript)`](#)You can also overide the timeout for a specific test using the check fluent [`timeout method`](#timeout-method)

### matchTimeout property
#### Syntax


    config = { matchTimeout: value_number };
    

Type: number

The timeout to set in milliseconds.

#### Remarks


You can overide the default timeout set by this method for a specific set checkpoint by passing a timeout to one of the check_XXXX methods that support a timeout parameter, e.g. [`eyes.checkwindow (not yet available in playwright javascript)`](#)You can also overide the timeout for a specific test using the check fluent [`timeout method`](#timeout-method)

### parentBranchName property
#### Syntax


    config = { parentBranchName: value_string };
    

Type: string

The parent branch name to be configured.

### parentBranchName property
#### Syntax


    config = { parentBranchName: value_string };
    

Type: string

The parent branch name to be configured.

### properties property
#### Syntax


    config = { properties: [value1_PropertyDataPlain, value2_PropertyDataPlain] };
    

Type: [PropertyDataPlain](./propertydataplain)\[\]

#### Remarks


*   Set multiple properties by calling [Eyes.addProperty](./eyes#addproperty-method) or [Configuration.addProperty](./configuration#addproperty-method) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run.
*   You can also associate properties with a batch using [BatchInfo.addProperty](./batchinfo#addproperty-method).

### properties property
#### Syntax


    config = { properties: [value1_PropertyDataPlain, value2_PropertyDataPlain] };
    

Type: [PropertyDataPlain](./propertydataplain)\[\]

List of propertydata objects.

#### Remarks


*   Set multiple properties by calling [Eyes.addProperty](./eyes#addproperty-method) or [Configuration.addProperty](./configuration#addproperty-method) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run.
*   You can also associate properties with a batch using [BatchInfo.addProperty](./batchinfo#addproperty-method).

### proxy property
#### Syntax


    config = { proxy: value_ProxySettingsPlain };
    

Type: [ProxySettingsPlain](./proxysettingsplain)

An object created from the [ProxySettings](./proxysettings) class that contains the user name, password, URI and port.

### rotation property
#### Syntax


    config = { rotation: value_ImageRotationPlain };
    

Type: ImageRotationPlain

#### Type definitions

ImageRotationPlain

The legal values that an image may be rotated by. This may have the following values: \-270|-180|-90|0|90|180|270

The number of degrees to rotate.

### rotation property
#### Syntax


    config = { rotation: value_ImageRotationPlain };
    

Type: ImageRotationPlain

#### Type definitions

ImageRotationPlain

The legal values that an image may be rotated by. This may have the following values: \-270|-180|-90|0|90|180|270

The number of degrees to rotate.

### saveNewTests property
#### Syntax


    config = { saveNewTests: value_boolean };
    

Type: boolean

If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior).

### saveNewTests property
#### Syntax


    config = { saveNewTests: value_boolean };
    

Type: boolean

If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior).

### scaleRatio property
#### Syntax


    config = { scaleRatio: value_number };
    

Type: number

The scale ratio to use.

### scrollRootElement property
#### Syntax


    config = { scrollRootElement: value };
    

Type: 

    ElementHandle|Selector

The element that should be scrolled.

### sendDom property
#### Syntax


    config = { sendDom: value_boolean };
    

Type: boolean

A value of true means that DOM information will be sent. A value of false means that DOM information will not be sent.

#### Remarks


Sending DOM information is enabed by default, so use this method only if you have to disable it.

### sendDom property
#### Syntax


    config = { sendDom: value_boolean };
    

Type: boolean

A value of true means that DOM information will be sent. A value of false means that DOM information will not be sent.

#### Remarks


Sending DOM information is enabed by default, so use this method only if you have to disable it.

### serverUrl property
#### Syntax


    config = { serverUrl: value_string };
    

Type: string

The URL of the Eyes server. Pass a value of null to use the default cloud server.

### serverUrl property
#### Syntax


    config = { serverUrl: value_string };
    

Type: string

The URL of the Eyes server. Pass a value of null to use the default cloud server.

### stitchMode property
#### Syntax


    config = { stitchMode: value };
    

Type: 

    StitchMode|undefined

The stitch mode to use.

### stitchMode property
#### Syntax


    config = { stitchMode: value };
    

Type: 

    StitchMode|undefined

The stitch mode to use.

### stitchOverlap property
#### Syntax


    config = { stitchOverlap: value_number };
    

Type: number

The width of the stitch overlap in pixels.

### stitchOverlap property
#### Syntax


    config = { stitchOverlap: value_number };
    

Type: number

The width of the stitch overlap in pixels.

### testName property
#### Syntax


    config = { testName: value_string };
    

Type: string

The test name to be configured for the test.

### testName property
#### Syntax


    config = { testName: value_string };
    

Type: string

The test name to be configured for the test.

### viewportSize property
#### Syntax


    config = { viewportSize: value_RectangleSizePlain };
    

Type: [RectangleSizePlain](./rectanglesizeplain)

An object that defines the width and height of the test browser viewport in pixels.

### viewportSize property
#### Syntax


    config = { viewportSize: value_RectangleSizePlain };
    

Type: [RectangleSizePlain](./rectanglesizeplain)

An object that defines the width and height of the test browser viewport in pixels.

### visualGridOptions property
#### Syntax


    config = { visualGridOptions: value };
    

Type: Record<string,any>

#### Remarks


The following configuration key/value pairs are currently supported:

'chromeHeadless'

Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of false to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

'polyfillAdoptedStyleSheets'

Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option polyfillAdoptedStyleSheets to a value of true or false:

*   Setting a value of true instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
*   Setting a value of false instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.setVisualGridOption](./configuration#visualgridoptions-property)

You can override the global value for a given checkpoint using the method [CheckSettings.visualGridOption](./checksettings#visualGridOption-method).

### visualGridOptions property
#### Syntax


    config = { visualGridOptions: value };
    

Type: Record<string,any>

#### Remarks


The following configuration key/value pairs are currently supported:

'chromeHeadless'

Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of false to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

'polyfillAdoptedStyleSheets'

Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option polyfillAdoptedStyleSheets to a value of true or false:

*   Setting a value of true instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
*   Setting a value of false instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.setVisualGridOption](./configuration#visualgridoptions-property)

You can override the global value for a given checkpoint using the method [CheckSettings.visualGridOption](./checksettings#visualGridOption-method).

#### Example


JavaScript

        suiteConfig = new Configuration() 
            .setVisualGridOptions(new VisualGridOption("polyfillAdoptedStyleSheets", true))   
    /* ... other configurations */  ; 
        /*
         * Assign the configuration to all newly created Eyes instances
         */
        eyes = new Eyes(runner);
        eyes.setConfiguration(suiteConfig);

### waitBeforeScreenshots property
#### Syntax


    config = { waitBeforeScreenshots: value_number };
    

Type: number

The time to wait in milliseconds. Passing a value of less than or equal to zero will cause the default value to be used.

### waitBeforeScreenshots property
#### Syntax


    config = { waitBeforeScreenshots: value_number };
    

Type: number

The time to wait in milliseconds. Passing a value of less than or equal to zero will cause the default value to be used.

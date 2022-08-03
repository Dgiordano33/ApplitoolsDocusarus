# Configuration class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Python_sdk4</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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




This class is used to create a configuration object that is used to configure an [Eyes](./eyes) object by passing it to the [Eyes.set_configuration](./eyes#set_configuration-method) method.

You can use this configuration object instead of using the various [Eyes](./eyes) methods and properties that set the same attributes. Typically you set up a Configuration object by calling its setXXXX methods chained with a '.' in a Fluent coding style. In this class, some attributes can be set by both a property and a set command. The properties allow you simple direct access to assign to and retrieve the attribute. The corresponding set method allows you to set multiple attributes using a Fluent style.

Import statement

    from applitools.selenium import Configuration
    	



### Configuration method
#### Syntax


    config = Configuration()
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  None

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.


### ignore_caret property
#### Syntax


    configval = config.ignore_caret
    

Type: bool

#### Remarks


We recommend using [set_hide_caret](#set_hide_caret-method) since this eliminates cursor related artifacts instead of detecting and ignoring them.

### ignore_caret property
#### Syntax


    configval = config.ignore_caret
    

Type: bool

### is_send_dom property
#### Syntax


    configval = config.send_dom
    

Type: bool

### accessibility_validation property
#### Syntax


    config.accessibility_validation  = configval
    configval = config.accessibility_validation
    

Type: [AccessibilitySettings](./accessibilitysettings)

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### agent_id property
#### Syntax


    config.agent_id  = configval
    configval = config.agent_id
    

Type: Text

The agent id to be configured.

### api_key property
#### Syntax


    config.api_key  = configval
    configval = config.api_key
    

Type: Text

A string that is your API Key.

#### Remarks


Set this immediately after the Eyes object is created (before calling [open](#open-method)). If you have an environment variable called APPLITOOLS_API_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value.

### app_name property
#### Syntax


    config.app_name  = configval
    configval = config.app_name
    

Type: Text

The application name to be configured for the test.

#### Remarks


If you call this method, it must be called before the call to [Eyes.open](#open-method). In the call to [Eyes.open](#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a None, then the value set here will be used.

### baseline_branch_name property
#### Syntax


    config.baseline_branch_name  = configval
    configval = config.baseline_branch_name
    

Type: Text

The baseline branch name to be configured.

### baseline_env_name property
#### Syntax


    config.baseline_env_name  = configval
    configval = config.baseline_env_name
    

Type: Text

The name of the baseline environment.

### batch property
#### Syntax


    config.batch  = configval
    configval = config.batch
    

Type: [BatchInfo](./batchinfo)

An object that defines the batch configuration.

### branch_name property
#### Syntax


    config.branch_name  = configval
    configval = config.branch_name
    

Type: Text

The branch name to be used by the configuration.

### features property
#### Syntax


    config.features  = configval
    configval = config.features
    

Type: Set\[[Feature](./feature)\]

A feature to set.

#### Remarks


The following values may be passed to this method:

### force_full_page_screenshot property
#### Syntax


    config.force_full_page_screenshot  = configval
    configval = config.force_full_page_screenshot
    

Type: bool

### hide_caret property
#### Syntax


    config.hide_caret  = configval
    configval = config.hide_caret
    

Type: bool

If this paramter has a value of True, then the cursor will be hidden before the image is captured.

#### Remarks


We recommend using this method instead of [Configuration.set_ignore_caret](#set_ignore_caret-method) or [SeleniumCheckSettings.ignore_caret](./checksettings#ignore_caret-method), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them.

### hide_scrollbars property
#### Syntax


    config.hide_scrollbars  = configval
    configval = config.hide_scrollbars
    

Type: bool

If set to True then hide the scrollbars. Otherwise, don't hide the scrollbars.

### host_app property
#### Syntax


    config.host_app  = configval
    configval = config.host_app
    

Type: Text

The value to be used for the Host App property.

### host_os property
#### Syntax


    config.host_os  = configval
    configval = config.host_os
    

Type: Text

The value to be used for the Host OS Property.

### ignore_displacements property
#### Syntax


    config.ignore_displacements  = configval
    configval = config.ignore_displacements
    

Type: bool

#### Remarks


Ignore displacements is only active when using a Match level of [STRICT](./matchlevel) or [CONTENT](./matchlevel)

### is_disabled property
#### Syntax


    config.is_disabled  = configval
    configval = config.is_disabled
    

Type: bool

If this has a value of True then all method calls to the SDK are ignored. Otherwise, all methods work as usual.

### match_level property
#### Syntax


    config.match_level  = configval
    configval = config.match_level
    

Type: [MatchLevel](./matchlevel)

Available match level values are:

*   [NONE](./matchlevel)
*   [STRICT](./matchlevel)
*   [LAYOUT](./matchlevel)
*   [CONTENT](./matchlevel)
*   [EXACT](./matchlevel)

For a description of these match levels and the different ways to apply them to tests, checkpoints, and regions, see [Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

#### Remarks


For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### match_timeout property
#### Syntax


    config.match_timeout  = configval
    configval = config.match_timeout
    

Type: int

The timeout to set in milliseconds.

#### Remarks


You can overide the default timeout set by this property for a specific set checkpoint by passing a timeout to one of the check_XXXX methods that support a timeout parameter, e.g. [`check_window`](./eyes#check_window-method)You can also overide the timeout for a specific test using the check fluent [`timeout method`](#timeout-method)

### branch_name property
#### Syntax


    config.parent_branch_name  = configval
    configval = config.parent_branch_name
    

Type: Text

The parent branch name to be configured.

### properties property
#### Syntax


    config.properties  = configval
    configval = config.properties
    

Type: List\[Dict\[Text,Text\]\]

#### Remarks


*   Set multiple properties by calling [Eyes.add_property](./eyes#add_property-method) or [Configuration.add_property](#add_property-method) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run.
*   You can also associate properties with a batch using [BatchInfo.add_property](./batchinfo#add_property-method).

### properties property
#### Syntax


    config.properties  = configval
    configval = config.properties
    

Type: List\[Dict\[Text,Text\]\]

List of propertydata objects.

#### Remarks


*   Set multiple properties by calling [Eyes.add_property](./eyes#add_property-method) or [Configuration.add_property](#add_property-method) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run.
*   You can also associate properties with a batch using [BatchInfo.add_property](./batchinfo#add_property-method).

### save_diffs property
#### Syntax


    config.save_diffs  = configval
    configval = config.save_diffs
    

Type: bool

Set to True to configure Save Diffs functionality.

### save_new_tests property
#### Syntax


    config.save_new_tests  = configval
    configval = config.save_new_tests
    

Type: bool

If set to False, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to True, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior).

### send_dom property
#### Syntax


    config.send_dom  = configval
    configval = config.send_dom
    

Type: bool

A value of True means that DOM information will be sent. A value of False means that DOM information will not be sent.

#### Remarks


Sending DOM information is enabed by default, so use this method only if you have to disable it.

### server_url property
#### Syntax


    config.server_url  = configval
    configval = config.server_url
    

Type: Text

The URL of the Eyes server. Pass a value of None to use the default cloud server.

### stitch_mode property
#### Syntax


    config.stitch_mode  = configval
    configval = config.stitch_mode
    

Type: [StitchMode](./stitchmode)

The stitch mode to use.

### stitch_overlap property
#### Syntax


    config.stitch_overlap  = configval
    configval = config.stitch_overlap
    

Type: int

The width of the stitch overlap in pixels.

### test_name property
#### Syntax


    config.test_name  = configval
    configval = config.test_name
    

Type: Text

The test name to be configured for the test.

### viewport_size property
#### Syntax


    config.viewport_size  = configval
    configval = config.viewport_size
    

Type: [RectangleSize](./rectanglesize)

An object that defines the width and height of the test browser viewport in pixels.

### visual_grid_options property
#### Syntax


    config.visual_grid_options  = configval
    configval = config.visual_grid_options
    

Type: Tuple\[[VisualGridOption](./visualgridoption)\]

#### Remarks


The following configuration key/value pairs are currently supported:

'chromeHeadless'

Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of False to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

'polyfillAdoptedStyleSheets'

Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option polyfillAdoptedStyleSheets to a value of True or False:

*   Setting a value of True instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
*   Setting a value of False instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.set_visual_grid_options](#set_visual_grid_options-method)

You can override the global value for a given checkpoint using the method [SeleniumCheckSettings.visual_grid_options](./checksettings#visual_grid_options-method).

### wait_before_screenshots property
#### Syntax


    config.wait_before_screenshots  = configval
    configval = config.wait_before_screenshots
    

Type: int

The time to wait in milliseconds. Passing a value of less than or equal to zero will cause the default value to be used.


### add_browser method
#### Syntax


    configval = config.add_browser(desktop_browser_info)
    
    configval = config.add_browser(ios_device_info)
    
    configval = config.add_browser(chrome_emulation_info)
    
    configval = config.add_browser(width, height, browser_type)
    
    configval = config.add_browser(width, height, browser_type, baseline_env_name)
    

#### Parameters

desktop_browser_info

Type: [DesktopBrowserInfo](./desktopbrowserinfo)

Which desktop browser type and viewport size to use.

Python

    # test suite setup  
        suite_config = (Configuration()  
            .add_browser(DesktopBrowserInfo(viewport_width, viewport_height, BrowserType.EDGE_CHROMIUM))  
            # ... other configurations    
         )  
        #
        # Assign the configuration to all newly created Eyes instances
        #
        eyes = Eyes(runner)
        eyes.set_configuration(suite_config) 

ios_device_info

Type: [IosDeviceInfo](./iosdeviceinfo)

Defines the mobile device to be simulated and its vertical or horizontal orientation.

Python

    # test suite setup  
        suite_config = (Configuration()  
            .add_browser(IosDeviceInfo(IosDeviceName.iPhone_11, ScreenOrientation.PORTRAIT))  
            # ... other configurations    
         )  
        #
        # Assign the configuration to all newly created Eyes instances
        #
        eyes = Eyes(runner)
        eyes.set_configuration(suite_config) 

chrome_emulation_info

Type: [ChromeEmulationInfo](./chromeemulationinfo)

Which mobile device to emulate and its vertical or horizontal orientation.

Python

    # test suite setup  
        suite_config = (Configuration()  
            .add_browser(ChromeEmulationInfo(DeviceName.Galaxy_S5, ScreenOrientation.LANDSCAPE))  
            # ... other configurations    
         )  
        #
        # Assign the configuration to all newly created Eyes instances
        #
        eyes = Eyes(runner)
        eyes.set_configuration(suite_config) 

width

Type: int

The width of the browser viewport for this target. The maximum viewport width for all browsers is 5120. If this limit is exceeded, then execution of the checkpoint will fail.

Use this in conjunction with the browser_type parameter.

height

Type: int

The height of the browser viewport for this target. There is no height limit.

Use this in conjunction with the browser_type parameter.

browser_type

Type: [BrowserType](./browsertype)

The type of browser for this target.

Python

    # test suite setup  
        suite_config = (Configuration()  
            .add_browser(viewport_width, viewport_height, BrowserType.CHROME)  
            # ... other configurations    
         )  
        #
        # Assign the configuration to all newly created Eyes instances
        #
        eyes = Eyes(runner)
        eyes.set_configuration(suite_config) 

baseline_env_name

Type: Text

The name of the baseline environment. If provided, then the viewport, host app (browser), and OS that define the baseline are defined by the baseline environment name and not by the execution environment. The name should already be defined in the Test Manager. If it is not defined, then it will be created based on the execution environment of the first test that uses that name. For more information see [Running cross-environment tests](https://applitools.com/docs/topics/general-concepts/working-withcross-environment-tests.html).

Use this in conjunction with the browser_type parameter.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


By default, the entire page is rendered. The viewport width and height parameters impact the baseline that is chosen, unless the baseline environment configuration has been provided. The viewport passed to the [Eyes.open](#open-method) method does not impact the baseline used, but could impact the page layout if the page has any viewport size-sensitive factors such as HTML, CSS or Javascript.

### add_browsers method
#### Syntax


    configval = config.add_browsers(renders_info)
    

#### Parameters

renders_info

Type: Union\[[DesktopBrowserInfo](./desktopbrowserinfo),[IosDeviceInfo](./iosdeviceinfo),[ChromeEmulationInfo](./chromeemulationinfo)\]

One or more browser or device configuration definitions passed as an array or multiple parameters.

Define the browser or device configurations using instances of one or more of the following classes:

*   [DesktopBrowserInfo](./desktopbrowserinfo#desktopbrowserinfo-method): to run the test on a desktop browser.
*   [IosDeviceInfo](./iosdeviceinfo#iosdeviceinfo-method): to run the test on a Simulated iOS mobile device.
*   [ChromeEmulationInfo](./chromeemulationinfo#chromeemulationinfo-method): to run the test using on an emulated mobile device.

renders_info

Type: Union\[[DesktopBrowserInfo](./desktopbrowserinfo),[IosDeviceInfo](./iosdeviceinfo),[ChromeEmulationInfo](./chromeemulationinfo)\]

One or more browser or device configuration definitions passed as an array or multiple parameters.

Define the browser or device configurations using instances of one or more of the following classes:

*   [DesktopBrowserInfo](./desktopbrowserinfo#desktopbrowserinfo-method): to run the test on a desktop browser.
*   [IosDeviceInfo](./iosdeviceinfo#iosdeviceinfo-method): to run the test on a Simulated iOS mobile device.
*   [ChromeEmulationInfo](./chromeemulationinfo#chromeemulationinfo-method): to run the test using on an emulated mobile device.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


You can use this method to pass a list of configurations instead of configuring each browser device individually using multiple calls to [add_browser](#add_browser-method).

#### Example


Python

    # test suite setup  
        target_list = [
            DesktopBrowserInfo(viewport_width, viewport_height, BrowserType.FIREFOX),
            ChromeEmulationInfo(DeviceName.Galaxy_S3, ScreenOrientation.LANDSCAPE),
            IosDeviceInfo(IosDeviceName.iPhone_8, ScreenOrientation.PORTRAIT)
        ]
        suite_config = (Configuration()  
            .add_browsers(target_list)  
            # ... other configurations    
         )  
        #
        # Assign the configuration to all newly created Eyes instances
        #
        eyes = Eyes(runner)
        eyes.set_configuration(suite_config)

### add_device_emulation method
#### Syntax


    configval = config.add_device_emulation(device_name, orientation)
    
    configval = config.add_device_emulation(device_name)
    

#### Parameters

device_name

Type: [DeviceName](./devicename)

The name of the device, from the list of devices defined by [DeviceName](./devicename).

orientation

Type: [ScreenOrientation](./screenorientation) \[Optional : default = ScreenOrientation.PORTRAIT \]

Whether the device is in portrait or landscape mode.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### add_property method
#### Syntax


    configval = config.add_property(name, value)
    

#### Parameters

name

Type: Text

The name of the property.

value

Type: Text

The value associated with the name.

#### Return value

Type:  Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


*   Set multiple properties by calling[Eyes.add_property](./eyes#add_property-method) or [Configuration.add_property](#add_property-method) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run.
*   You can also associate properties with a batch using [BatchInfo.add_property](./batchinfo#add_property-method).

### clear_properties method
#### Syntax


    configval = config.clear_properties()
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  Self

### clone method
#### Syntax


    configval = config.clone()
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [Configuration](./configuration)

A cloned [Configuration](./configuration) object.

### set_accessibility_validation method
#### Syntax


    configval = config.set_accessibility_validation(accessibility_settings)
    config.accessibility_validation  = configval
    configval = config.accessibility_validation
    

Note that this feature is available as both a method and a property.

#### Parameters

accessibility_settings

Type: [AccessibilitySettings](./accessibilitysettings) \[Optional \]

The required accessibility settings. A value of None will disable accessibility checking.

#### Return value

Type:  Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### set_agent_id method
#### Syntax


    configval = config.set_agent_id(agent_id)
    config.agent_id  = configval
    configval = config.agent_id
    

Note that this feature is available as both a method and a property.

#### Parameters

agent_id

Type: Text

The agent id to be configured.

#### Return value

Type:  Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### set_api_key method
#### Syntax


    configval = config.set_api_key(api_key)
    config.api_key  = configval
    configval = config.api_key
    

Note that this feature is available as both a method and a property.

#### Parameters

api_key

Type: Text

A string that is your API Key.

#### Return value

Type:  Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


Set this immediately after the Eyes object is created (before calling [open](#open-method)). If you have an environment variable called APPLITOOLS_API_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value.

### set_app_name method
#### Syntax


    configval = config.set_app_name(app_name)
    config.app_name  = configval
    configval = config.app_name
    

Note that this feature is available as both a method and a property.

#### Parameters

app_name

Type: Text

The application name to be configured for the test.

#### Return value

Type:  Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


If you call this method, it must be called before the call to [Eyes.open](#open-method). In the call to [Eyes.open](#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a None, then the value set here will be used.

### set_baseline_branch_name method
#### Syntax


    configval = config.set_baseline_branch_name(baseline_branch_name)
    config.baseline_branch_name  = configval
    configval = config.baseline_branch_name
    

Note that this feature is available as both a method and a property.

#### Parameters

baseline_branch_name

Type: Text

The baseline branch name to be configured.

#### Return value

Type:  Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### set_baseline_env_name method
#### Syntax


    configval = config.set_baseline_env_name(baseline_env_name)
    config.baseline_env_name  = configval
    configval = config.baseline_env_name
    

Note that this feature is available as both a method and a property.

#### Parameters

baseline_env_name

Type: Text

The name of the baseline environment.

#### Return value

Type:  Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### set_batch method
#### Syntax


    configval = config.set_batch(batch)
    config.batch  = configval
    configval = config.batch
    

Note that this feature is available as both a method and a property.

#### Parameters

batch

Type: [BatchInfo](./batchinfo)

An object that defines the batch configuration.

#### Return value

Type:  Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### set_branch_name method
#### Syntax


    configval = config.set_branch_name(branch_name)
    config.branch_name  = configval
    configval = config.branch_name
    

Note that this feature is available as both a method and a property.

#### Parameters

branch_name

Type: Text

The branch name to be used by the configuration.

#### Return value

Type:  Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### set_features method
#### Syntax


    configval = config.set_features(features)
    config.features  = configval
    configval = config.features
    

Note that this feature is available as both a method and a property.

#### Parameters

features

Type: [Feature](./feature)

One or more features to set.

#### Return value

Type:  Self

#### Remarks


The following values may be passed to this method:

### set_force_full_page_screenshot method
#### Syntax


    configval = config.set_force_full_page_screenshot(force_full_page_screenshot)
    config.force_full_page_screenshot  = configval
    configval = config.force_full_page_screenshot
    

Note that this feature is available as both a method and a property.

#### Parameters

force_full_page_screenshot

Type: bool

If this paramter has a value of True, then Eyes will do scrolling and stitching if necessary. If False, then the result is browser dependent.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### set_hide_caret method
#### Syntax


    configval = config.set_hide_caret(hide_caret)
    config.hide_caret  = configval
    configval = config.hide_caret
    

Note that this feature is available as both a method and a property.

#### Parameters

hide_caret

Type: bool

If this paramter has a value of True, then the cursor will be hidden before the image is captured.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


We recommend using this method instead of [Configuration.set_ignore_caret](#set_ignore_caret-method) or [SeleniumCheckSettings.ignore_caret](./checksettings#ignore_caret-method), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them.

### set_hide_scrollbars method
#### Syntax


    configval = config.set_hide_scrollbars(hide_scrollbars)
    config.hide_scrollbars  = configval
    configval = config.hide_scrollbars
    

Note that this feature is available as both a method and a property.

#### Parameters

hide_scrollbars

Type: bool

If set to True then hide the scrollbars. Otherwise, don't hide the scrollbars.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### set_host_app method
#### Syntax


    configval = config.set_host_app(host_app)
    config.host_app  = configval
    configval = config.host_app
    

Note that this feature is available as both a method and a property.

#### Parameters

host_app

Type: Text

The value to be used for the Host App property.

#### Return value

Type:  Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### set_host_os method
#### Syntax


    configval = config.set_host_os(host_os)
    config.host_os  = configval
    configval = config.host_os
    

Note that this feature is available as both a method and a property.

#### Parameters

host_os

Type: Text

The value to be used for the Host OS Property.

#### Return value

Type:  Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### set_ignore_caret method
#### Syntax


    configval = config.set_ignore_caret(ignore_caret)
    config.ignore_caret  = configval
    configval = config.ignore_caret
    

Note that this feature is available as both a method and a property.

#### Parameters

ignore_caret

Type: bool

If set to True, then Eyes does extra processing to eliminate artifacts introduced by blinking cursors.

#### Return value

Type:  Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


We recommend using [set_hide_caret](#set_hide_caret-method) since this eliminates cursor related artifacts instead of detecting and ignoring them.

### set_ignore_displacements method
#### Syntax


    configval = config.set_ignore_displacements(ignore_displacements)
    config.ignore_displacements  = configval
    configval = config.ignore_displacements
    

Note that this feature is available as both a method and a property.

#### Parameters

ignore_displacements

Type: bool

If a value of True is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed.

#### Return value

Type:  Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


Ignore displacements is only active when using a Match level of [STRICT](./matchlevel) or [CONTENT](./matchlevel)

### set_match_level method
#### Syntax


    configval = config.set_match_level(match_level)
    config.match_level  = configval
    configval = config.match_level
    

Note that this feature is available as both a method and a property.

#### Parameters

match_level

Type: [MatchLevel](./matchlevel)

Available match level values are:

*   [NONE](./matchlevel)
*   [STRICT](./matchlevel)
*   [LAYOUT](./matchlevel)
*   [CONTENT](./matchlevel)
*   [EXACT](./matchlevel)

For a description of these match levels and the different ways to apply them to tests, checkpoints, and regions, see [Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

#### Return value

Type:  Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### set_match_timeout method
#### Syntax


    configval = config.set_match_timeout(match_timeout)
    config.match_timeout  = configval
    configval = config.match_timeout
    

Note that this feature is available as both a method and a property.

#### Parameters

match_timeout

Type: int

The timeout to set in milliseconds.

#### Return value

Type:  Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


You can overide the default timeout set by this property for a specific set checkpoint by passing a timeout to one of the check_XXXX methods that support a timeout parameter, e.g. [`check_window`](./eyes#check_window-method)You can also overide the timeout for a specific test using the check fluent [`timeout method`](#timeout-method)

### set_parent_branch_name method
#### Syntax


    configval = config.set_parent_branch_name(parent_branch_name)
    config.parent_branch_name  = configval
    configval = config.parent_branch_name
    

Note that this feature is available as both a method and a property.

#### Parameters

parent_branch_name

Type: Text

The parent branch name to be configured.

#### Return value

Type:  Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### set_proxy method
#### Syntax


    configval = config.set_proxy(proxy)
    config.proxy  = configval
    configval = config.proxy
    

Note that this feature is available as both a method and a property.

#### Parameters

proxy

Type: [ProxySettings](./proxysettings) \[Optional \]

An object created from the [ProxySettings](./proxysettings) class that contains the user name, password, URI and port.

#### Return value

Type:  Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### set_save_diffs method
#### Syntax


    configval = config.set_save_diffs(save_diffs)
    config.save_diffs  = configval
    configval = config.save_diffs
    

Note that this feature is available as both a method and a property.

#### Parameters

save_diffs

Type: bool

Set to True to configure Save Diffs functionality.

#### Return value

Type:  Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### set_save_new_tests method
#### Syntax


    configval = config.set_save_new_tests(save_new_tests)
    config.save_new_tests  = configval
    configval = config.save_new_tests
    

Note that this feature is available as both a method and a property.

#### Parameters

save_new_tests

Type: bool

If set to False, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to True, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior).

#### Return value

Type:  Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### set_send_dom method
#### Syntax


    configval = config.set_send_dom(send_dom)
    config.send_dom  = configval
    configval = config.send_dom
    

Note that this feature is available as both a method and a property.

#### Parameters

send_dom

Type: bool

A value of True means that DOM information will be sent. A value of False means that DOM information will not be sent.

#### Return value

Type:  Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

#### Remarks


Sending DOM information is enabed by default, so use this method only if you have to disable it.

### set_server_url method
#### Syntax


    configval = config.set_server_url(server_url)
    config.server_url  = configval
    configval = config.server_url
    

Note that this feature is available as both a method and a property.

#### Parameters

server_url

Type: Text

The URL of the Eyes server. Pass a value of None to use the default cloud server.

#### Return value

Type:  Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### set_stitch_mode method
#### Syntax


    configval = config.set_stitch_mode(stitch_mode)
    config.stitch_mode  = configval
    configval = config.stitch_mode
    

Note that this feature is available as both a method and a property.

#### Parameters

stitch_mode

Type: [StitchMode](./stitchmode)

The stitch mode to use.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### set_stitch_overlap method
#### Syntax


    configval = config.set_stitch_overlap(stitch_overlap)
    config.stitch_overlap  = configval
    configval = config.stitch_overlap
    

Note that this feature is available as both a method and a property.

#### Parameters

stitch_overlap

Type: int

The width of the stitch overlap in pixels.

#### Return value

Type:  Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### set_test_name method
#### Syntax


    configval = config.set_test_name(test_name)
    config.test_name  = configval
    configval = config.test_name
    

Note that this feature is available as both a method and a property.

#### Parameters

test_name

Type: Text

The test name to be configured for the test.

#### Return value

Type:  Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### set_viewport_size method
#### Syntax


    configval = config.set_viewport_size(viewport_size)
    config.viewport_size  = configval
    configval = config.viewport_size
    

Note that this feature is available as both a method and a property.

#### Parameters

viewport_size

Type: ViewPort

An object that defines the width and height of the test browser viewport in pixels.

#### Type definitions

ViewPort

The type ViewPort is defined as: Union\[Dict\[Text,int\],[RectangleSize](./rectanglesize)\]

#### Return value

Type:  Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

### set_visual_grid_options method
#### Syntax


    configval = config.set_visual_grid_options(options)
    config.visual_grid_options  = configval
    configval = config.visual_grid_options
    

Note that this feature is available as both a method and a property.

#### Parameters

options

Type: [VisualGridOption](./visualgridoption)

One or more configuration options for the Ultrafast Grid.

#### Return value

Type:  [Configuration](./configuration)

#### Remarks


The following configuration key/value pairs are currently supported:

'chromeHeadless'

Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of False to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

'polyfillAdoptedStyleSheets'

Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option polyfillAdoptedStyleSheets to a value of True or False:

*   Setting a value of True instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
*   Setting a value of False instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.set_visual_grid_options](#)

You can override the global value for a given checkpoint using the method [SeleniumCheckSettings.visual_grid_options](./checksettings#visual_grid_options-method).

#### Example


Python

    # test suite setup  
        suite_config = (Configuration()  
            .set_visual_grid_options(VisualGridOption("polyfillAdoptedStyleSheets", True))  
            # ... other configurations    
         )  
        #
        # Assign the configuration to all newly created Eyes instances
        #
        eyes = Eyes(runner)
        eyes.set_configuration(suite_config)

### set_wait_before_screenshots method
#### Syntax


    configval = config.set_wait_before_screenshots(wait_before_screenshots)
    config.wait_before_screenshots  = configval
    configval = config.wait_before_screenshots
    

Note that this feature is available as both a method and a property.

#### Parameters

wait_before_screenshots

Type: int

The time to wait in milliseconds. Passing a value of less than or equal to zero will cause the default value to be used.

#### Return value

Type:  [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.

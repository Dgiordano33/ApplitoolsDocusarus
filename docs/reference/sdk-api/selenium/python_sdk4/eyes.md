# Eyes class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Python_sdk4</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

    from applitools.selenium import Eyes
    	



### Eyes method
#### Syntax


    eyes = Eyes(runner)
    
    eyes = Eyes()
    

#### Parameters

runner

Type: Union\[Text,[VisualGridRunner](./visualgridrunner),[ClassicRunner](./classicrunner),None\] \[Optional : default = None \]

If this parameter is provided, it must be an instance of either the [ClassicRunner](./classicrunner) or [VisualGridRunner](./visualgridrunner) classes. If a [VisualGridRunner](./visualgridrunner) is passed then the image will be rendered using the Ultrafast Grid. If this parameter is not provided, then DOM rendering is done using the local browser defined by the driver parameter passed to the [Eyes.open](#open-method) method.

#### Return value

Type:  None

Use the object returned to call the various methods provided by the Eyes class.


### device_pixel_ratio property
#### Syntax


    value = eyes.device_pixel_ratio
    

Type: int

### driver property
#### Syntax


    value = eyes.driver
    

Type: EyesWebDriver

### baseline_env_name property
#### Syntax


    eyes.baseline_env_name  = value
    value = eyes.baseline_env_name
    

Type: Text

The name of the baseline environment.

### ignore_caret property
#### Syntax


    value = eyes.ignore_caret
    

Type: bool

### is_open property
#### Syntax


    value = eyes.is_open
    

Type: bool

Return True if the [Eyes.open](#open-method) method has been called on an eyes instance, and [Eyes.close](#close-method), [Eyes.abort](#abort-method), [Eyes.abort_async](#abort_async-method) or [Eyes.abort_if_not_closed](#abort_if_not_closed-method) have not yet been called.

### is_send_dom property
#### Syntax


    value = eyes.send_dom
    

Type: bool

### api_key property
#### Syntax


    eyes.api_key  = value
    value = eyes.api_key
    

Type: Text

A string that is your API Key.

#### Remarks


Set this immediately after the Eyes object is created (before calling [open](#open-method)). If you have an environment variable called APPLITOOLS_API_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value.

### app_name property
#### Syntax


    eyes.app_name  = value
    value = eyes.app_name
    

Type: Text

The application name. This may be any string.

#### Remarks


If you call this method, it must be called before the call to [Eyes.open](#open-method). In the call to [Eyes.open](#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a None, then the value set here will be used.

### baseline_branch_name property
#### Syntax


    eyes.baseline_branch_name  = value
    value = eyes.baseline_branch_name
    

Type: Text

The name of the baseline branch to use.

### batch property
#### Syntax


    eyes.batch =  BatchInfo(name)

Type: [](./batchinfo)[BatchInfo](./batchinfo)

An object of the class [BatchInfo](./batchinfo) that describes the batch.

#### Remarks


Set this property once before the calls to the [open](#open-method) method for all tests that are supposed to be part of this batch.

### is_disabled property
#### Syntax


    eyes.is_disabled  = value
    value = eyes.is_disabled
    

Type: bool

If this has a value of True then all method calls to the SDK are ignored. Otherwise, all methods work as usual.

### configure property
#### Syntax


    eyes.configure.set_match_level(MatchLevel.LAYOUT)

Type: [Configuration](./configuration)

### agent_id property
#### Syntax


    eyes.agent_id  = value
    value = eyes.agent_id
    

Type: Text

The id of the agent in the format 'name/1.2.3'.

#### Remarks


To take effect, this property must be assigned before the call to [open](#open-method).

### branch_name property
#### Syntax


    eyes.branch_name  = value
    value = eyes.branch_name
    

Type: Text

The name of the branch from which the baseline will be taken and saved. This may be any string.

### debug_screenshots_path property
#### Syntax


    eyes.debug_screenshots_path  = value
    value = eyes.debug_screenshots_path
    

Type: Text

A pathname where saved checkpoint images should be stored.

#### Remarks


Enable and disable saving screenshots to the local disk using the [save_debug_screenshots](#save_debug_screenshots-property) property.

### debug_screenshots_prefix property
#### Syntax


    eyes.debug_screenshots_prefix  = value
    value = eyes.debug_screenshots_prefix
    

Type: Text

A prefix to be added to the saved checkpoint images filename.

#### Remarks


Enable and disable saving screenshots to the local disk using the [save_debug_screenshots](#save_debug_screenshots-property) property.

### host_app property
#### Syntax


    eyes.host_app  = value
    value = eyes.host_app
    

Type: Text

The value to be used for the Host OS Property.

### host_os property
#### Syntax


    eyes.host_os  = value
    value = eyes.host_os
    

Type: Text

The value to be used for the Host OS property.

### match_level property
#### Syntax


    eyes.match_level  = value
    value = eyes.match_level
    

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


    eyes.match_timeout  = value
    value = eyes.match_timeout
    

Type: int

The timeout to set in milliseconds.

#### Remarks


You can overide the default timeout set by this property for a specific set checkpoint by passing a timeout to one of the check_XXXX methods that support a timeout parameter, e.g. [`check_window`](#check_window-method)You can also overide the timeout for a specific test using the check fluent [`timeout method`](#timeout-method)

### branch_name property
#### Syntax


    eyes.parent_branch_name  = value
    value = eyes.parent_branch_name
    

Type: Text

The branch name. This may be any string.

### rotation property
#### Syntax


    eyes.rotation  = value
    value = eyes.rotation
    

Type: Union\[int,float\]

The number of degrees to rotate.

### save_debug_screenshots property
#### Syntax


    eyes.save_debug_screenshots  = value
    value = eyes.save_debug_screenshots
    

Type: bool

If set to true, then checkpoint images is saved to a local directory.

### save_diffs property
#### Syntax


    eyes.save_diffs  = value
    value = eyes.save_diffs
    

Type: bool

If this has a value of true, then the baseline will be updated with checkpoints that have mismatches.

### save_new_tests property
#### Syntax


    eyes.save_new_tests  = value
    value = eyes.save_new_tests
    

Type: bool

If set to False, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to True, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior).

### scale_ratio property
#### Syntax


    eyes.scale_ratio  = value
    value = eyes.scale_ratio
    

Type: float

The scale ratio to use.

### send_dom property
#### Syntax


    eyes.send_dom  = value
    value = eyes.send_dom
    

Type: bool

#### Remarks


Sending DOM information is enabed by default, so use this method only if you have to disable it.

### send_dom property
#### Syntax


    eyes.send_dom  = value
    value = eyes.send_dom
    

Type: bool

#### Remarks


Sending DOM information is enabed by default, so use this method only if you have to disable it.

### server_url property
#### Syntax


    eyes.server_url  = 'https://myEyesServer' #setter
    value = eyes.server_url                   #getter

Type: Text

The URL of the Eyes server. Pass a value of None to use the default cloud server.

### stitch_overlap property
#### Syntax


    eyes.stitch_overlap  = value
    value = eyes.stitch_overlap
    

Type: int

The width of the stitch overlap in pixels.

### viewport_size property
#### Syntax


    eyes.viewport_size  = value
    value = eyes.viewport_size
    

Type: [RectangleSize](./rectanglesize)


### abort method
#### Syntax


    eyes.abort()

#### Parameters

This method does not take any parameters.

#### Return value

Type: 

#### Remarks


If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored.

### abort_async method
#### Syntax


    eyes.abort_async()

#### Parameters

This method does not take any parameters.

#### Return value

Type: 

#### Remarks


If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored.

### abort_if_not_closed method
#### Syntax


    eyes.abort_if_not_closed()

#### Parameters

This method does not take any parameters.

#### Return value

Type: 

#### Remarks


If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored.

### add_property method
#### Syntax


    value = eyes.add_property(name, value)
    

#### Parameters

name

Type: Text

The name of the property.

value

Type: Text

The value associated with the name.

#### Return value

Type:  None

#### Remarks


*   Set multiple properties by calling [Eyes.add_property](#add_property-method) or [Configuration.add_property](./configuration#add_property-method) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run.
*   You can also associate properties with a batch using [BatchInfo.add_property](./batchinfo#add_property-method).

### check method
#### Syntax


    value = eyes.check(name, check_settings)
    
    value = eyes.check(check_settings)
    
    value = eyes.check(check_settings, name)
    
    

#### Parameters

name

Type: Text

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

check_settings

Type: [SeleniumCheckSettings](./checksettings)

The fluent API calls, starting with one of the [Target](./target) methods.

#### Return value

Type:  [MatchResult](./matchresult)

#### Remarks


For a detailed description of how to use this method see [The Eyes SDK check Fluent API](https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html).

### check_element method
#### Syntax


    value = eyes.check_element(element, tag, match_timeout)
    
    value = eyes.check_element(element, tag)
    
    value = eyes.check_element(element)
    

#### Parameters

element

Type: Union\[Text,List,Tuple,WebElement,EyesWebElement\]

An element whose position and bounding rectangle defines the region.

tag

Type: Text \[Optional : default = None \]

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

match_timeout

Type: int \[Optional : default = -1 \]

The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout.

#### Return value

Type:  [MatchResult](./matchresult)

### check_frame method
#### Syntax


    value = eyes.check_frame(frame_reference, tag, match_timeout)
    
    value = eyes.check_frame(frame_reference, tag)
    
    value = eyes.check_frame(frame_reference)
    

#### Parameters

frame_reference

Type: FrameReference

An object that references the frame.

#### Type definitions

FrameReference

The type FrameReference is defined as: Union\[FrameNameOrId,FrameIndex,AnyWebElement\].

tag

Type: Text \[Optional : default = None \]

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

match_timeout

Type: int \[Optional : default = -1 \]

The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout.

#### Return value

Type:  [MatchResult](./matchresult)

### check_region method
#### Syntax


    value = eyes.check_region(region, tag, match_timeout, stitch_content)
    
    value = eyes.check_region(region, tag, match_timeout)
    
    value = eyes.check_region(region, tag)
    
    value = eyes.check_region(region)
    

#### Parameters

region

Type: Union\[[Region](./region),Text,List,Tuple,WebElement,EyesWebElement\]

A non-empty region representing the screen region to check in screenshot pixel coordinates.

tag

Type: Text \[Optional : default = None \]

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

match_timeout

Type: int \[Optional : default = -1 \]

The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout.

stitch_content

Type: bool \[Optional : default = False \]

If the application window is larger than the viewport, and this parameter is True, then the entire page content is rendered. If this parameter is False, then only the viewport is rendered.

#### Return value

Type:  [MatchResult](./matchresult)

### check_window method
#### Syntax


    value = eyes.check_window(tag, match_timeout, fully)
    
    value = eyes.check_window(tag, match_timeout)
    
    value = eyes.check_window(tag)
    
    value = eyes.check_window()
    

#### Parameters

tag

Type: Text \[Optional : default = None \]

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

match_timeout

Type: int \[Optional : default = -1 \]

The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout.

fully

Type: bool \[Optional : default = None \]

Set to True to capture the full browser page and not just the viewport.

#### Return value

Type:  [MatchResult](./matchresult)

### clear_properties method
#### Syntax


    eyes.clear_properties()

#### Parameters

This method does not take any parameters.

#### Return value

Type: 

### close method
#### Syntax


    result = eyes.close(raise_ex)
    
    result = eyes.close()
    

#### Parameters

raise_ex

Type: bool \[Optional : default = True \]

If this parameter has a value of True, then if there are new, missing, or mismatched steps, an exception will be thrown. If the parameter is set to False, then an exception will not be thrown for the above cases. If the parameter is not passed, then it is as if a True value was passed.

#### Return value

Type:  [TestResults](./testresults)

The result of the test can be obtained from the object returned. See [TestResults class](./testresults) for a list of what information can be obtained from this object. See [TestResults class](./testresults) for a list of what information can be obtained from this object.

### close_async method
#### Syntax


    eyes.close_async()

#### Parameters

This method does not take any parameters.

#### Return value

Type: 

### get_configuration method
#### Syntax


    value = eyes.get_configuration()
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [Configuration](./configuration)

### get_viewport_size method
#### Syntax


    value = eyes.get_viewport_size(driver)
    eyes.viewport_size  = value
    value = eyes.viewport_size
    

Note: This method is a static method.

Note that this feature is available as both a method and a property.

#### Parameters

driver

Type: AnyWebDriver

The driver returned from the call to open.

#### Type definitions

AnyWebDriver

The type AnyWebDriver is defined as: Union\[EyesWebDriver,WebDriver\]. This object can be used in the same way as the Selenium driver object.

#### Return value

Type:  ViewPort

The viewport size in the form {'width': 800, 'height': 600}.

#### Type definitions

ViewPort

The type ViewPort is defined as: Union\[Dict\[Text,int\],[RectangleSize](./rectanglesize)\]

### locate method
#### Syntax


    names_a = ["locator_1a", "locator_1b", "locator_1c"]
    loc_regions_5 = eyes.locate(VisualLocator.names(names_a).first())  

#### Parameters

visual_locator_settings

Type: [VisualLocatorSettings](./visuallocatorsettings)

An object that defines the required visual locator names and how many instances of each locator should be found. This object is created using a series of calls on a [VisualLocator](./visuallocator) object in a fluent API style. See the example below for more details.

#### Return value

Type:  LOCATORS_TYPE

Returns a mapping between the locator names passed as a parameter [name](#name-method) or [names](#names-method) methods and the regions in the viewport where the graphic images defined by those locator names were detected.

If the image of a particular locator name is not found in the viewport, the locator is mapped to a zero length array. If a locator name is passed, and a locator of that name has not been defined on the Eyes server, the returned locator will be mapped to a value of None instead of an array.

and each value is an object that contains the text found and its bounding rectangle.

#### Type definitions

LOCATORS_TYPE

A mapping of each locator to the region identified for that locator.

#### Remarks


The article [Visual locators](https://applitools.com/docs/features/visual-locators.html) describes in detail how to associate locator names with graphic images and how to search for instances of the graphic in the browser viewport. The example below is a briefer description of how to search for instances of the locator graphics.

#### Example


The example below includes two calls to the method [Eyes.locate](#). These calls illustrate two ways to specify the visual locators and two ways to specify how many locators to return.

Two ways of specifying visual locators are:

*   Pass a locator string to the method [name](#name-method).
*   Pass a list of strings to the method [names](#names-method).

You can call these methods multiple times to specify multiple locators names or multiple lists of locator names.

To specify how many regions to return per locator, append one of the following methods:

*   To retrieve a maximum of one region for each locator append a call to [first](#first-method).
*   To retrieve all regions for all locators append a call to ([all](#all-method)).

Python

    # return a zero or one locator for each of the three locators defined as parameters to name()
    loc_regions_6 = eyes.locate(
        (VisualLocator.name("locator_a")
            .name("locator_b")
            .name("locator_c")
            .first()))
    # return all the locator found for the locators defined in the lists passed to names() or Strings passed to name()                   
    locator_list_1 = ["locator_1a", "locator_1b", "locator_1c"]
    locator_list_2 = ["locator_2a", "locator_2b", "locator_2c"]
    loc_regions_7 = eyes.locate(
        (VisualLocator.names(locator_list_1)
            .names(locator_list_1)
            .name("another locator")
            .all()))
    
    locators_regions = eyes.locate(VisualLocator.names(["locator_a", "locator_b", "locator_c"]).all())
    # Loop through all the locators and click on the center of their region
    for locator_info in locators_regions:
        for locator, region in locator_info:
            x = region.left + region.width/2
            y = region.top + region.height/2
            print("loc = ", locator, " x = ", x, " y = ", y)

//...

### open method
#### Syntax


    outdriver = eyes.open(driver, app_name, test_name, viewport_size)
    
    outdriver = eyes.open(driver, app_name, test_name)
    
    outdriver = eyes.open(driver, app_name)
    
    outdriver = eyes.open(driver)
    

#### Parameters

driver

Type: AnyWebDriver

The web driver.

#### Type definitions

AnyWebDriver

The type AnyWebDriver is defined as: Union\[EyesWebDriver,WebDriver\]. This object can be used in the same way as the Selenium driver object.

app_name

Type: Text \[Optional : default = None \]

The application name. This may be any string. You can set the application name for all tests using the [Configuration.set_app_name](./configuration#set_app_name-method) method or [Eyes.app_name](app_name-property) property. If you do so, then set this parameter to a value of None to indicate that the configuration default should be used.

test_name

Type: Text \[Optional : default = None \]

The name of the test. This name must be unique within the scope of the application name. It may be any string.

viewport_size

Type: ViewPort \[Optional : default = None \]

The size of the viewport

The size of the viewport passed as an object.

The size of the viewport passed as an object {'width':, 'height':}

Defines the viewport size of the browser that will be set before the start of the test. If this parameter is not provided then the viewport size will be based on the current browser window size. See [Using viewports in Eyes](https://applitools.com/docs/topics/general-concepts/using-viewports-in-eyes.html) for more details.

Passing a value of None specifies that the default viewport size should be used. If [Eyes.set_viewport_size](#set_viewport_size-method) is called before the call to this method, then the default is determined by the value set by that method. If it is not called, then the default viewport size is system and application dependent.

#### Type definitions

ViewPort

The type ViewPort is defined as: Union\[Dict\[Text,int\],[RectangleSize](./rectanglesize)\]

#### Return value

Type:  EyesWebDriver

The returned web driver is a clone of the driver passed as a parameter. It is recomended that you use the web driver object returned by this method in all further calls to the web driver. This allows Eyes to record these interactions and play them back in the Eyes Test Manager.

#### Remarks


After making a call to this method, you must eventually terminate the test by calling [Eyes.close_async](#close_async-method) (in case of a normal completion) or [Eyes.abort_async](#abort_async-method) (in case of an aborted test). If you want to run another test, then it is recomended to do this with a newly created Eyes instance to avoid side effects. However, in principle, it is legal to call [Eyes.Open](#open-method) again to start a new test on the same Eyes instance.

### set_configuration method
#### Syntax


    value = eyes.set_configuration(configuration)
    

#### Parameters

configuration

Type: [Configuration](./configuration)

A configuration object that has the various properties/methods set to the required values.

#### Return value

Type:  None

#### Remarks


The typical sequence for configuring a test is:

*   Create a [Configuration](./configuration) object.
*   Assign to the properties you want to set up, and call the various methods.
*   Create an [Eyes](./eyes) instance.
*   Call the [Eyes.set_configuration](#) method with the configuration object.
*   Call the [Eyes.open](#open-method) method to start the test session.

Once you've changed the configuration of an Eyes instance by calling [Eyes.set_configuration](#) or by setting a configuration directly on the Eyes instance, if you want to change the configuration, you must use the following sequence:

*   Get the current configuration using [Eyes.get_configuration](#get_configuration-method) to a local variable.
*   Make changes to the local configuration value.
*   Assign the local configuration object to the Eyes instance using [Eyes.set_configuration](#).

### set_viewport_size method
#### Syntax


    value = Eyes.set_viewport_size(driver, size)
    Eyes.viewport_size  = value
    python_sdk4: eyes.viewport_size Warning : void return value None on overload - ignored - assumed its a private setter.

Note: This method is a static method.

Note that this feature is available as both a method and a property.

#### Parameters

driver

Type: AnyWebDriver

The driver returned from the call to open.

#### Type definitions

AnyWebDriver

The type AnyWebDriver is defined as: Union\[EyesWebDriver,WebDriver\]. This object can be used in the same way as the Selenium driver object.

size

Type: ViewPort

The size of the viewport

The size of the viewport passed as an object.

The size of the viewport passed as an object {'width':, 'height':}

#### Type definitions

ViewPort

The type ViewPort is defined as: Union\[Dict\[Text,int\],[RectangleSize](./rectanglesize)\]

#### Return value

Type:  None

#### Remarks


*   Call this method before the call to [Eyes.open](#open-method). Then, when calling the open method, don't pass the viewportSize parameter. If the viewport size is set to be smaller than the actual content, then scrolling should typically be enabled by calling [set_force_full_page_screenshot](./configuration#set_force_full_page_screenshot-method) method so that the full page image is tested.

This method is a static method.

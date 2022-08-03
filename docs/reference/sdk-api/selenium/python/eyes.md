# Eyes class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Python</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

    from from applitools.selenium import Eyes, Target,from applitools.selenium.visual_grid import VisualGridRunner import Eyes
    	



### Eyes method
#### Syntax


    eyes = Eyes()
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [Eyes](./eyes)

Use the object returned to call the various methods provided by the Eyes class.


### driver property
#### Syntax


    value = eyes.driver
    

Type: EyesWebDriver

### is_open property
#### Syntax


    value = eyes.is_open
    

Type: bool

Return True if the [Eyes.open](#open-method) method has been called on an eyes instance, and [Eyes.close](#close-method) or [Eyes.abort_if_not_closed](#abort_if_not_closed-method) have not yet been called.

### agent_id property
#### Syntax


    eyes.agent_id  = value
    value = eyes.agent_id
    

Type: Text

The id of the agent in the format 'name/1.2.3'.

#### Remarks


To take effect, this property must be assigned before the call to [open](#open-method).

### api_key property
#### Syntax


    eyes.api_key  = value
    value = eyes.api_key
    

Type: Text

A string that is your API Key.

#### Remarks


Set this immediately after the Eyes object is created (before calling [open](#open-method)). If you have an environment variable called APPLITOOLS_API_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value.

### baseline_branch_name property
#### Syntax


    eyes.baseline_branch_name  = value
    value = eyes.baseline_branch_name
    

Type: Text

The name of the baseline branch to use.

### batch property
#### Syntax


    eyes.batch =  BatchInfo(name)

Type: [BatchInfo](./batchinfo)

An object of the class [BatchInfo](./batchinfo) that describes the batch.

#### Remarks


Set this property once before the calls to the [open](#open-method) method for all tests that are supposed to be part of this batch.

### branch_name property
#### Syntax


    eyes.branch_name  = value
    value = eyes.branch_name
    

Type: Text

The name of the branch from which the baseline will be taken and saved. This may be any string.

### fail_on_new_test property
#### Syntax


    eyes.fail_on_new_test  = value
    value = eyes.fail_on_new_test
    

Type: bool

Set to True treat new tests as failed tests.

### force_full_page_screenshot property
#### Syntax


    eyes.force_full_page_screenshot  = value
    value = eyes.force_full_page_screenshot
    

Type: bool

If this paramter has a value of True, then Eyes will do scrolling and stitching if necessary. If False, then the result is browser dependent.

### hide_scrollbars property
#### Syntax


    eyes.hide_scrollbars  = value
    value = eyes.hide_scrollbars
    

Type: bool

If set to True then hide the scrollbars. Otherwise, don't hide the scrollbars.

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

### is_disabled property
#### Syntax


    eyes.is_disabled  = value
    value = eyes.is_disabled
    

Type: bool

If this has a value of True then all method calls to the SDK are ignored. Otherwise, all methods work as usual.

### match_level property
#### Syntax


    eyes.match_level  = value
    value = eyes.match_level
    

Note: This method has both static and non static overloads.

Type: Text

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


You can overide the default timeout set by this property for a specific set checkpoint by passing a timeout to one of the check_XXXX methods that support a timeout parameter, e.g. [`check_window`](#check_window-method)You can also overide the timeout for a specific test using the check fluent [`checksettings.timeout (not yet available in selenium python)`](#)

### branch_name property
#### Syntax


    eyes.parent_branch_name  = value
    value = eyes.parent_branch_name
    

Type: Text

The branch name. This may be any string.

### save_new_tests property
#### Syntax


    eyes.save_new_tests  = value
    value = eyes.save_new_tests
    

Type: bool

If set to False, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to True, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior).

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

A value of True means that DOM information will be sent. A value of False means that DOM information will not be sent.

#### Remarks


Sending DOM information is enabed by default, so use this method only if you have to disable it.

### send_dom property
#### Syntax


    eyes.send_dom  = value
    value = eyes.send_dom
    

Type: bool

### server_url property
#### Syntax


    eyes.server_url  = 'https://myEyesServer' #setter
    value = eyes.server_url                   #getter

Type: Text

The URL of the Eyes server. Pass a value of None to use the default cloud server.

### stitch_mode property
#### Syntax


    eyes.stitch_mode  = value
    value = eyes.stitch_mode
    

Type: Text

The stitch mode to use.

### wait_before_screenshots property
#### Syntax


    eyes.wait_before_screenshots  = value
    value = eyes.wait_before_screenshots
    

Type: int

The time to wait in milliseconds. Passing a value of less than or equal to zero will cause the default value to be used.


### abort_if_not_closed method
#### Syntax


    value = eyes.abort_if_not_closed()
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  None

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


*   You should not assign a given value to a property more than once in a given test run.

### check_region method
#### Syntax


    value = eyes.check_region(region, tag, match_timeout, target, stitch_content)
    
    value = eyes.check_region(region, tag, match_timeout, target)
    
    value = eyes.check_region(region, tag, match_timeout)
    
    value = eyes.check_region(region, tag)
    
    value = eyes.check_region(region)
    

#### Parameters

region

Type: [Region](./region)

A non-empty region representing the screen region to check in screenshot pixel coordinates.

tag

Type: Text \[Optional : default = None \]

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

match_timeout

Type: int \[Optional : default = -1 \]

The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout.

target

Type: [Target](./target) \[Optional : default = None \]

An object that defines floating and ignores regions and other configuration options.

stitch_content

Type: bool \[Optional : default = False \]

If the application window is larger than the viewport, and this parameter is True, then the entire page content is rendered. If this parameter is False, then only the viewport is rendered.

#### Return value

Type:  None

### check_region_by_element method
#### Syntax


    value = eyes.check_region_by_element(element, tag, match_timeout, target, stitch_content)
    
    value = eyes.check_region_by_element(element, tag, match_timeout, target)
    
    value = eyes.check_region_by_element(element, tag, match_timeout)
    
    value = eyes.check_region_by_element(element, tag)
    
    value = eyes.check_region_by_element(element)
    

#### Parameters

element

Type: AnyWebElement

An element whose position and bounding rectangle defines the region.

tag

Type: Text \[Optional : default = None \]

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

match_timeout

Type: int \[Optional : default = -1 \]

The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout.

target

Type: [Target](./target) \[Optional : default = None \]

An object that defines floating and ignores regions and other configuration options.

stitch_content

Type: bool \[Optional : default = False \]

If the application window is larger than the viewport, and this parameter is True, then the entire page content is rendered. If this parameter is False, then only the viewport is rendered.

#### Return value

Type:  None

### check_region_in_frame_by_selector method
#### Syntax


    value = eyes.check_region_in_frame_by_selector(frame_reference, by, value, tag, match_timeout, target, stitch_content)
    
    value = eyes.check_region_in_frame_by_selector(frame_reference, by, value, tag, match_timeout, target)
    
    value = eyes.check_region_in_frame_by_selector(frame_reference, by, value, tag, match_timeout)
    
    value = eyes.check_region_in_frame_by_selector(frame_reference, by, value, tag)
    
    value = eyes.check_region_in_frame_by_selector(frame_reference, by, value)
    

#### Parameters

frame_reference

Type: FrameReference

A Selenium reference to the frame element. This can be anything acceptable by the Selenium switch_to.frame().

by

Type: Text

An element selector which is chosen using the Selenium By class.

value

Type: Text

The value identifying the element using the 'by' type.

tag

Type: Text \[Optional : default = None \]

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

match_timeout

Type: int \[Optional : default = -1 \]

The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout.

target

Type: [Target](./target) \[Optional : default = None \]

An object that defines floating and ignores regions and other configuration options.

stitch_content

Type: bool \[Optional : default = False \]

If the application window is larger than the viewport, and this parameter is True, then the entire page content is rendered. If this parameter is False, then only the viewport is rendered.

#### Return value

Type:  None

### check_window method
#### Syntax


    value = eyes.check_window(tag, match_timeout, target)
    
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

target

Type: [Target](./target) \[Optional : default = None \]

An object that defines floating and ignores regions and other configuration options.

#### Return value

Type:  None

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

### get_viewport_size method
#### Syntax


    value = eyes.get_viewport_size()
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  ViewPort

The viewport size in the form {'width': 800, 'height': 600}.

### open method
#### Syntax


    outdriver = eyes.open(driver, app_name, test_name, viewport_size)
    
    outdriver = eyes.open(driver, app_name, test_name)
    

#### Parameters

driver

Type: AnyWebDriver

The web driver.

app_name

Type: Text

The application name. This may be any string.

test_name

Type: Text

The name of the test. This name must be unique within the scope of the application name. It may be any string.

viewport_size

Type: ViewPort \[Optional : default = None \]

The size of the viewport

The size of the viewport passed as an object.

The size of the viewport passed as an object {'width':, 'height':}

Defines the viewport size of the browser that will be set before the start of the test. If this parameter is not provided then the viewport size will be based on the current browser window size. See [Using viewports in Eyes](https://applitools.com/docs/topics/general-concepts/using-viewports-in-eyes.html) for more details.

Passing a value of None specifies that the default viewport size should be used. If [Eyes.set_viewport_size](#set_viewport_size-method) is called before the call to this method, then the default is determined by the value set by that method. If it is not called, then the default viewport size is system and application dependent.

#### Return value

Type:  EyesWebDriver

The returned web driver is a clone of the driver passed as a parameter. It is recomended that you use the web driver object returned by this method in all further calls to the web driver. This allows Eyes to record these interactions and play them back in the Eyes Test Manager.

#### Remarks


After making a call to this method, you must eventually terminate the test by calling [Eyes.close](#close-method) (in case of a normal completion) or [Eyes.abort_if_not_closed](#abort_if_not_closed-method) (in case of an aborted test). If you want to run another test, then it is recomended to do this with a newly created Eyes instance to avoid side effects. However, in principle, it is legal to call [Eyes.Open](#open-method) again to start a new test on the same Eyes instance.

### set_viewport_size method
#### Syntax


    value = Eyes.set_viewport_size(size)
    

Note: This method is a static method.

#### Parameters

size

Type: AnyWebDriver \[Optional : default = None \]

The size of the viewport

The size of the viewport passed as an object.

The size of the viewport passed as an object {'width':, 'height':}

#### Return value

Type:  None

#### Remarks


*   Call this method before the call to [Eyes.open](#open-method). Then, when calling the open method, don't pass the viewportSize parameter. If the viewport size is set to be smaller than the actual content, then scrolling should typically be enabled by calling [force_full_page_screenshot](#force_full_page_screenshot-property) property so that the full page image is tested.

This method is a static method.

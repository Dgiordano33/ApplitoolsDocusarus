# Eyes class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
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

    from applitools.images import Eyes
    	



### Eyes method
#### Syntax


    eyes = Eyes()
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  None

Use the object returned to call the various methods provided by the Eyes class.


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

### is_open property
#### Syntax


    value = eyes.is_open
    

Type: bool

Return True if the [Eyes.open](#open-method) method has been called on an eyes instance, and [Eyes.close](#close-method), [Eyes.abort](#abort-method) or [Eyes.abort_if_not_closed](#abort_if_not_closed-method) have not yet been called.

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

### save_debug_screenshots property
#### Syntax


    eyes.save_debug_screenshots  = value
    value = eyes.save_debug_screenshots
    

Type: bool

If set to true, then checkpoint images is saved to a local directory.

### scale_ratio property
#### Syntax


    eyes.scale_ratio  = value
    value = eyes.scale_ratio
    

Type: float

The scale ratio to use.

### configure property
#### Syntax


    eyes.configure.set_match_level(MatchLevel.LAYOUT)

Type: [Configuration](./configuration)


### abort method
#### Syntax


    value = eyes.abort()
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [TestResults](./testresults)

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

Type: [ImagesCheckSettings](./checksettings)

The fluent API calls, starting with one of the [Target](./target) methods.

check_settings

Type: [ImagesCheckSettings](./checksettings)

The fluent API calls, starting with one of the [Target](./target) methods.

check_settings

Type: [ImagesCheckSettings](./checksettings)

The fluent API calls, starting with one of the [Target](./target) methods.

name

Type: Text \[Optional : default = None \]

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

#### Return value

Type:  bool

A return value of True indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of False depends on whether this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of False, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned False, all the following checkpoints will also return False. This does not mean that the checkpoint mismatched; it means that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [close](#close-method) method.

#### Remarks


For a detailed description of how to use this method see [The Eyes SDK check Fluent API](https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html).

### check_image method
#### Syntax


    value = eyes.check_image(image, tag, ignore_mismatch)
    
    value = eyes.check_image(image, tag)
    
    value = eyes.check_image(image)
    

#### Parameters

image

Type: Union\[Image,Text\]

An image stored in a buffer in PNG format.

tag

Type: Text \[Optional : default = None \]

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

ignore_mismatch

Type: bool \[Optional : default = False \]

This parameter is used to implement retry of a checkpoint. If you are not implementing retry, then don't pass this parameter or pass a value of False. To implement retry, on all retry attempts apart from the last, pass this parameter a value of True. When the method returns, check the return value. A returned value of True means that the checkpoint passed, and you can continue with the next checkpoint. A returned value of False means that that the checkpoint did not match. Since this parameter was passed as True, Eyes will not store the outcome of this checkpoint and will expect that the next image sent is for the current step (i.e. is being retried). On the last retry attempt, pass a value of False. This way, Eyes knows that there will be no more retries, and it will store the results of the last check as the result of the current step. The next checkpoint sent will be treated as the next step. Note that since Eyes allows for new or deleted steps, once there is a mismatch for one step, all subsequent steps will also return a mismatch, and Eyes determines the actual match/mismatch/new/missing status of all the steps when the test is closed.

#### Return value

Type:  bool

A return value of True indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of False depends on whether this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of False, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned False, all the following checkpoints will also return False. This does not mean that the checkpoint mismatched; it means that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [close](#close-method) method.

### check_region method
#### Syntax


    value = eyes.check_region(image, region, tag, ignore_mismatch)
    
    value = eyes.check_region(image, region, tag)
    
    value = eyes.check_region(image, region)
    

#### Parameters

image

Type: Image

Either a string that is a path to a file image, or an object of the Image class from the PIL Image module.

region

Type: [Region](./region)

A non-empty region representing the screen region to check in screenshot pixel coordinates.

tag

Type: Text \[Optional : default = None \]

The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does *not* use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

ignore_mismatch

Type: bool \[Optional : default = False \]

This parameter is used to implement retry of a checkpoint. If you are not implementing retry, then don't pass this parameter or pass a value of False. To implement retry, on all retry attempts apart from the last, pass this parameter a value of True. When the method returns, check the return value. A returned value of True means that the checkpoint passed, and you can continue with the next checkpoint. A returned value of False means that that the checkpoint did not match. Since this parameter was passed as True, Eyes will not store the outcome of this checkpoint and will expect that the next image sent is for the current step (i.e. is being retried). On the last retry attempt, pass a value of False. This way, Eyes knows that there will be no more retries, and it will store the results of the last check as the result of the current step. The next checkpoint sent will be treated as the next step. Note that since Eyes allows for new or deleted steps, once there is a mismatch for one step, all subsequent steps will also return a mismatch, and Eyes determines the actual match/mismatch/new/missing status of all the steps when the test is closed.

#### Return value

Type:  bool

A return value of True indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of False depends on whether this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of False, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned False, all the following checkpoints will also return False. This does not mean that the checkpoint mismatched; it means that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [close](#close-method) method.

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

### get_configuration method
#### Syntax


    value = eyes.get_configuration()
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [Configuration](./configuration)

### open method
#### Syntax


    outdriver = eyes.open(app_name, test_name, dimension)
    
    outdriver = eyes.open(app_name, test_name)
    

#### Parameters

app_name

Type: Text

The application name. This may be any string. You can set the application name for all tests using the [Configuration.set_app_name](./configuration#set_app_name-method) method. If you do so, then set this parameter to a value of None to indicate that the configuration default should be used.

test_name

Type: Text

The name of the test. This name must be unique within the scope of the application name. It may be any string.

dimension

Type: ViewPort \[Optional : default = None \]

If this parameter is not provided, and the viewport was not set using the [undefined](undefined), then the viewport size is taken from the dimensions of the image of the first checkpoint. For the image SDK this is used to identify the baseline and does not affect the way the checkpoint image is processed in any other way.

#### Type definitions

ViewPort

The type ViewPort is defined as: Union\[Dict\[Text,int\],[RectangleSize](./rectanglesize)\]

#### Return value

Type:  None

#### Remarks


After making a call to this method, you must eventually terminate the test by calling [Eyes.close](#close-method) (in case of a normal completion) or [Eyes.abort](#abort-method) (in case of an aborted test). If you want to run another test, then it is recomended to do this with a newly created Eyes instance to avoid side effects. However, in principle, it is legal to call [Eyes.Open](#open-method) again to start a new test on the same Eyes instance.

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

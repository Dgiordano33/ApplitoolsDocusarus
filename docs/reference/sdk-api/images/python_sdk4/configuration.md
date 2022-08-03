# Configuration class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
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

You can use this configuration object instead of using the various [Eyes](./eyes) methods and properties that set the same attributes. Typically you set up a Configuration object by calling its setXXXX methods chained with a '.' in a Fluent coding style.

Import statement

    from applitools.images import Configuration
    	



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

### ignore_caret property
#### Syntax


    configval = config.ignore_caret
    

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

### server_url property
#### Syntax


    config.server_url  = configval
    configval = config.server_url
    

Type: Text

The URL of the Eyes server. Pass a value of None to use the default cloud server.

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


*   Set multiple properties by calling [Eyes.add_property](./eyes#add_property-method) or [Configuration.add_property](#add_property-method) multiple times with the same property name and with different values.
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

Type:  Self

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

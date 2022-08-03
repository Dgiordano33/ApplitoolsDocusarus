# RenderBrowserInfo class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Python_sdk4</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/renderbrowserinfo'>Selenium Java</a>
<a href='../../selenium/python_sdk4/renderbrowserinfo'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/renderbrowserinfo'>Selenium Csharp</a>
<a href='../../appium/java/renderbrowserinfo'>Appium Java</a>
</div></div><br /><br /></div>




This class is used to provide information as to how a test was rendered using the Ultrafast Grid.

Import statement

    from applitools.common import RenderBrowserInfo
    	


### browser property
#### Syntax


    value = obj.browser
    

Type: Text

### height property
#### Syntax


    value = obj.height
    

Type: int

### platform property
#### Syntax


    value = obj.platform
    

Type: Text

### width property
#### Syntax


    value = obj.width
    

Type: int

### baseline_env_name property
#### Syntax


    obj.baseline_env_name  = value
    value = obj.baseline_env_name
    

Type: Text

### browser_type property
#### Syntax


    obj.browser_type  = value
    value = obj.browser_type
    

Type: [BrowserType](./browsertype)

### emulation_info property
#### Syntax


    obj.emulation_info  = value
    value = obj.emulation_info
    

Type: EmulationBaseInfo

#### Remarks


Cast this value to [ChromeEmulationInfo](./chromeemulationinfo), and then you can access the device name and screen orientation using the [device_name](./chromeemulationinfo#device_name-property) property and [screen_orientation](./chromeemulationinfo#screen_orientation-property) property.

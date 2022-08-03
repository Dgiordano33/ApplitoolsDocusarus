# RenderBrowserInfo class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Java</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/renderbrowserinfo'>Selenium Java</a>
<a href='../../selenium/python_sdk4/renderbrowserinfo'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/renderbrowserinfo'>Selenium Csharp</a>
<a href='../../appium/java/renderbrowserinfo'>Appium Java</a>
</div></div><br /><br /></div>




This class is used to provide information as to how a test was rendered using the Ultrafast Grid.

Import statement

    import com.applitools.eyes.visualgrid.model.RenderBrowserInfo;
    	


### getBaselineEnvName method
#### Syntax


    String value = obj.getBaselineEnvName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getBrowserType method
#### Syntax


    BrowserType value = obj.getBrowserType();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [BrowserType](./browsertype)

### getEmulationInfo method
#### Syntax


    EmulationBaseInfo value = obj.getEmulationInfo();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  EmulationBaseInfo

#### Remarks


Cast this value to [ChromeEmulationInfo](./chromeemulationinfo), and then you can access the device name and screen orientation using the [getDeviceName](./chromeemulationinfo#getdevicename-method) method and [getScreenOrientation](./chromeemulationinfo#getscreenorientation-method) method.

### getHeight method
#### Syntax


    int value = obj.getHeight();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  int

### getIosDeviceInfo method
#### Syntax


    IosDeviceInfo value = obj.getIosDeviceInfo();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [IosDeviceInfo](./iosdeviceinfo)

### getPlatform method
#### Syntax


    String value = obj.getPlatform();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getViewportSize method
#### Syntax


    RectangleSize value = obj.getViewportSize();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [RectangleSize](./rectanglesize)

### getWidth method
#### Syntax


    int value = obj.getWidth();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  int

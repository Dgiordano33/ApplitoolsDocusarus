# RenderBrowserInfo class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Csharp</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/renderbrowserinfo'>Selenium Java</a>
<a href='../../selenium/python_sdk4/renderbrowserinfo'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/renderbrowserinfo'>Selenium Csharp</a>
<a href='../../appium/java/renderbrowserinfo'>Appium Java</a>
</div></div><br /><br /></div>




This class is used to provide information as to how a test was rendered using the Ultrafast Grid.

Using statement

    using Applitools.VisualGrid;
    	


### BaselineEnvName property
#### Syntax


    string value = obj.BaselineEnvName;
    

Type: string

### BrowserType property
#### Syntax


    BrowserType value = obj.BrowserType;
    

Type: [BrowserType](./browsertype)

### DesktopBrowserInfo property
#### Syntax


    DesktopBrowserInfo value = obj.DesktopBrowserInfo;
    

Type: [DesktopBrowserInfo](./desktopbrowserinfo)

### EmulationInfo property
#### Syntax


    EmulationBaseInfo value = obj.EmulationInfo;
    

Type: EmulationBaseInfo

#### Remarks


Cast this value to [ChromeEmulationInfo](./chromeemulationinfo), and then you can access the device name and screen orientation using the [DeviceName](./chromeemulationinfo#devicename-property) property and [ScreenOrientation](./chromeemulationinfo#screenorientation-property) property.

### Height property
#### Syntax


    int value = obj.Height;
    

Type: int

### IosDeviceInfo property
#### Syntax


    IosDeviceInfo value = obj.IosDeviceInfo;
    

Type: [IosDeviceInfo](./iosdeviceinfo)

### Platform property
#### Syntax


    string value = obj.Platform;
    

Type: string

### Width property
#### Syntax


    int value = obj.Width;
    

Type: int

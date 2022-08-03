# IosDeviceInfo class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Python_sdk4</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/iosdeviceinfo'>Selenium Java</a>
<a href='../../selenium/python_sdk4/iosdeviceinfo'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/iosdeviceinfo'>Selenium Csharp</a>
<a href='../../puppeteer/javascript/iosdeviceinfo'>Puppeteer Javascript</a>
<a href='../../selenium4/javascript/iosdeviceinfo'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/iosdeviceinfo'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/iosdeviceinfo'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/iosdeviceinfo'>Nightwatch Javascript</a>
<a href='../../protractor/javascript/iosdeviceinfo'>Protractor Javascript</a>
<a href='../../appium/java/iosdeviceinfo'>Appium Java</a>
<a href='../../wdiogeneric/javascript/iosdeviceinfo'>Wdiogeneric Javascript</a>
</div></div><br /><br /></div>




Objects of this class are used to configure the Ultrafast Grid to render checkpoint images.

Import statement

    from applitools.selenium import IosDeviceInfo
    	



### IosDeviceInfo method
#### Syntax


    obj = IosDeviceInfo(device_name, screen_orientation, ios_version, baseline_env_name)
    
    obj = IosDeviceInfo(device_name, screen_orientation, ios_version)
    
    obj = IosDeviceInfo(device_name, screen_orientation)
    
    obj = IosDeviceInfo(device_name)
    

#### Parameters

device_name

Type: [IosDeviceName](./iosdevicename)

One of the devices from the enumerated type of this parameter

screen_orientation

Type: [ScreenOrientation](./screenorientation) \[Optional : default = ScreenOrientation.PORTRAIT \]

The orientation of the device (portait or landscape). If this parameter is not provided then the default is [ScreenOrientation.PORTRAIT](./screenorientation)

ios_version

Type: [IosVersion](./iosversion) \[Optional : default = None \]

The iOS version to use when rendering the checkpoint for this device.

baseline_env_name

Type: Text \[Optional : default = None \]

The name of the baseline environment.

#### Return value

Type:  [IosDeviceInfo](./iosdeviceinfo)


### ios_version property
#### Syntax


    obj.ios_version  = value
    value = obj.ios_version
    

Type: [IosVersion](./iosversion)

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

### viewport_size property
#### Syntax


    value = obj.viewport_size
    

Type: [RectangleSize](./rectanglesize)

### width property
#### Syntax


    value = obj.width
    

Type: int

### device_name property
#### Syntax


    obj.device_name  = value
    value = obj.device_name
    

Type: [DeviceName](./devicename)

### screen_orientation property
#### Syntax


    obj.screen_orientation  = value
    value = obj.screen_orientation
    

Type: [ScreenOrientation](./screenorientation)

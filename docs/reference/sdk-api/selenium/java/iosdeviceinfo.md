# IosDeviceInfo class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Java</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

    import com.applitools.eyes.visualgrid.model.IosDeviceInfo;
    	



### IosDeviceInfo method
#### Syntax


    IosDeviceInfo obj = new IosDeviceInfo(deviceName);
    
    IosDeviceInfo obj = new IosDeviceInfo(deviceName, screenOrientation);
    
    IosDeviceInfo obj = new IosDeviceInfo(deviceName, version);
    
    IosDeviceInfo obj = new IosDeviceInfo(deviceName, screenOrientation, version);
    

#### Parameters

deviceName

Type: [IosDeviceName](./iosdevicename)

One of the devices from the enumerated type of this parameter

screenOrientation

Type: [ScreenOrientation](./screenorientation)

The orientation of the device (portait or landscape).

version

Type: [IosVersion](./iosversion)

The iOS version to use when rendering the checkpoint for this device.

#### Return value

Type:  [IosDeviceInfo](./iosdeviceinfo)


### getDeviceName method
#### Syntax


    String value = obj.getDeviceName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getScreenOrientation method
#### Syntax


    ScreenOrientation value = obj.getScreenOrientation();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [ScreenOrientation](./screenorientation)

### getVersion method
#### Syntax


    IosVersion value = obj.getVersion();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [IosVersion](./iosversion)

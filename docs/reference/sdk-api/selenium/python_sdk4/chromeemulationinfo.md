# ChromeEmulationInfo class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Python_sdk4</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/chromeemulationinfo'>Selenium Java</a>
<a href='../../selenium/python_sdk4/chromeemulationinfo'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/chromeemulationinfo'>Selenium Csharp</a>
<a href='../../puppeteer/javascript/chromeemulationinfo'>Puppeteer Javascript</a>
<a href='../../selenium4/javascript/chromeemulationinfo'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/chromeemulationinfo'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/chromeemulationinfo'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/chromeemulationinfo'>Nightwatch Javascript</a>
<a href='../../protractor/javascript/chromeemulationinfo'>Protractor Javascript</a>
<a href='../../appium/java/chromeemulationinfo'>Appium Java</a>
<a href='../../wdiogeneric/javascript/chromeemulationinfo'>Wdiogeneric Javascript</a>
</div></div><br /><br /></div>




Objects of this class are used to configure the Ultrafast Grid to render checkpoints by emulating a device by using Chrome mobile emulation.

Import statement

    from applitools.selenium import ChromeEmulationInfo
    	



### ChromeEmulationInfo method
#### Syntax


    obj = ChromeEmulationInfo(device_name, screen_orientation, baseline_env_name)
    
    obj = ChromeEmulationInfo(device_name, screen_orientation)
    
    obj = ChromeEmulationInfo(device_name)
    

#### Parameters

device_name

Type: [DeviceName](./devicename)

The name of the device, a value from the set of devices defined by [DeviceName](./devicename).

screen_orientation

Type: [ScreenOrientation](./screenorientation) \[Optional : default = ScreenOrientation.PORTRAIT \]

If the device should be rendered in portrait (vertical) or landscape (horizontal) orientation.

baseline_env_name

Type: Text \[Optional : default = None \]

The name of the baseline environment. If provided, then the viewport, host app (browser), and OS that define the baseline are defined by the baseline environment name and not by the execution environment. The name should already be defined in the Test Manager. If it is not defined, then it will be created based on the execution environment of the first test that uses that name. For more information see [Running cross-environment tests](https://applitools.com/docs/topics/general-concepts/working-withcross-environment-tests.html).

#### Return value

Type:  None

#### Remarks


The viewport width and height used to identify the baseline, is defined implicitly by the screen characteristics of the device.


### device_name property
#### Syntax


    obj.device_name  = value
    value = obj.device_name
    

Type: [DeviceName](./devicename)

deviceName

### screen_orientation property
#### Syntax


    obj.screen_orientation  = value
    value = obj.screen_orientation
    

Type: [ScreenOrientation](./screenorientation)

screenOrientation

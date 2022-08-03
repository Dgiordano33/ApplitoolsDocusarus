# ChromeEmulationInfo class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Csharp</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

Using statement

    using Applitools.VisualGrid;
    	



### ChromeEmulationInfo method
#### Syntax


    ChromeEmulationInfo obj = new ChromeEmulationInfo(deviceName, screenOrientation);
    
    ChromeEmulationInfo obj = new ChromeEmulationInfo(deviceName);
    

#### Parameters

deviceName

Type: [DeviceName](./devicename)

The name of the device, a value from the set of devices defined by [DeviceName](./devicename).

screenOrientation

Type: [ScreenOrientation](./screenorientation) \[Optional : default = ScreenOrientation.Portrait \]

If the device should be rendered in portrait (vertical) or landscape (horizontal) orientation.

#### Return value

Type:  [ChromeEmulationInfo](./chromeemulationinfo)

#### Remarks


The viewport width and height used to identify the baseline, is defined implicitly by the screen characteristics of the device.


### DeviceName property
#### Syntax


    DeviceName value; // give relevant initial value
    obj.DeviceName  = value;
    value = obj.DeviceName

Type: [DeviceName](./devicename)

### ScreenOrientation property
#### Syntax


    ScreenOrientation value; // give relevant initial value
    obj.ScreenOrientation  = value;
    value = obj.ScreenOrientation

Type: [ScreenOrientation](./screenorientation)

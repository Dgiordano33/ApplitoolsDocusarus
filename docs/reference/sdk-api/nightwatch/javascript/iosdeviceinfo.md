# IOSDeviceInfo class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Nightwatch</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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




Objects of this type are used to configure the Ultrafast Grid to render checkpoint images.



### iosDeviceInfo property
#### Syntax


    obj = { iosDeviceInfo: value };
    

Type: 

    {
      deviceName:
        | IosDeviceName
        | "iPad (7th generation)"
        | "iPad Air (2nd generation)"
        | "iPad Pro (12.9-inch) (3rd generation)"
        | "iPhone 11"
        | "iPhone 11 Pro"
        | "iPhone 11 Pro Max"
        | "iPhone 7"
        | "iPhone 8"
        | "iPhone X"
        | "iPhone XR"
        | "iPhone Xs";
      iosVersion?: IosVersion | "latest" | "latest-1";
      screenOrientation?: ScreenOrientation | "landscape" | "portrait";
    };

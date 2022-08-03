# Target class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Python</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/python/target'>Selenium Python</a>
<a href='../../selenium/java/target'>Selenium Java</a>
<a href='../../selenium/python_sdk4/target'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/target'>Selenium Csharp</a>
<a href='../../selenium/javascript/target'>Selenium Javascript</a>
<a href='../../imagesappkit/objectivec/target'>Imagesappkit Objectivec</a>
<a href='../../puppeteer/javascript/target'>Puppeteer Javascript</a>
<a href='../../images/java/target'>Images Java</a>
<a href='../../images/python_sdk4/target'>Images Python_sdk4</a>
<a href='../../images/csharp/target'>Images Csharp</a>
<a href='../../images/javascript/target'>Images Javascript</a>
<a href='../../images/objectivec/target'>Images Objectivec</a>
<a href='../../selenium4/javascript/target'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/target'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/target'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/target'>Nightwatch Javascript</a>
<a href='../../xcui/objectivec/target'>Xcui Objectivec</a>
<a href='../../protractor/javascript/target'>Protractor Javascript</a>
<a href='../../appium/java/target'>Appium Java</a>
<a href='../../appium/csharp/target'>Appium Csharp</a>
<a href='../../wdiogeneric/javascript/target'>Wdiogeneric Javascript</a>
<a href='../../espresso/java/target'>Espresso Java</a>
</div></div><br /><br /></div>




This class provides methods that are used to define and configure the checkpoint target for methods such as [check_window](./eyes#check_window-method) and [check_region](./eyes#check_region-method).

Once you create a [Target](#) object using one of the factory methods defined by this class, you can configure the checkpoint by calling other methods from the [Target](#) class, chaining them one after the other using the '.' operator.

Import statement

    from from applitools.selenium import Eyes, Target,from applitools.selenium.visual_grid import VisualGridRunner import Target
    	


### floating method
#### Syntax


    eyes.check_window('tag',timeout,Target.floating(regions))

#### Parameters

regions

Type: Union\[[FloatingRegion](./floatingregion),[FloatingRegionByElement](./floatingregionbyelement),[FloatingRegionBySelector](./floatingregionbyselector)\]

One or more region definitions.

#### Return value

Type:  [Target](./target)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may call this method multiple times in a given chain; each call defines a different floating region. Floating regions may not overlap each other or other types of regions, such as ignore or match level regions.

### ignore method
#### Syntax


    eyes.check_window('tag',timeout,Target.ignore(regions))

#### Parameters

regions

Type: Union\[[Region](./region),[IgnoreRegionByElement](./ignoreregionbyelement),[IgnoreRegionBySelector](./ignoreregionbyselector)\]

One or more region definitions.

#### Return value

Type:  [Target](./target)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may call this method multiple times in a given chain.

Ignore regions should not overlap each other or other types of regions such as floating or match level regions.

### ignore_caret method
#### Syntax


    eyes.check_window('tag',timeout,Target.ignore_caret(ignore))
    eyes.check_window('tag',timeout,Target.ignore_caret())

#### Parameters

ignore

Type: bool \[Optional : default = True \]

If this parameter has a value of true, then Eyes will detect artifacts caused by a blinking cursor and will not report a mismatch for differences caused by these artifacts. If it has a value of , then Eyes will not try to detect artifacts caused by blinking cursors. If no parameter is passed then the default value is true - so the cursor artifacts will be ignored.

#### Return value

Type:  [Target](./target)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may only call this method once in a given chain.

### send_dom method
#### Syntax


    eyes.check_window('tag',timeout,Target.send_dom(use))
    eyes.check_window('tag',timeout,Target.send_dom())

#### Parameters

use

Type: tbdParamType \[Optional : default = True \]

A value of True means that DOM information will be sent. A value of False means that DOM information will not be sent.

#### Return value

Type: 

#### Remarks


Sending DOM information is enabed by default, so use this method only if you have to disable it.

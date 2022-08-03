# Target class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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




This class provides methods that are used to define and configure the target for the [check](#check-method) method.

Once you create a [Target](#) object using one of the factory methods defined by this class, you can configure the checkpoint by calling other methods from the [Target](#) class, chaining them one after the other using the '.' operator.

Require statement

    const {Target} = require('const EyesSDK = require('eyes.selenium'))');
    	


### floating method
#### Syntax


    eyes.check(Target.floating(floatingRegion));
    

#### Parameters

floatingRegion

Type: 

    FloatingRegion|FloatingElement

A comma-separated list of FloatingRegion objects or FloatingElement objects. A FloatingRegion is an object defined as follows:

    
    {left: number, top: number, width: number, height: number,
    maxLeftOffset: number, maxRightOffset: number, maxUpOffset: number, maxDownOffset: number}
    A FloatingElement is an object defined as follows:

    
    {element: webdriver.WebElement|EyesRemoteWebElement|webdriver.By,
    maxLeftOffset: number, maxRightOffset: number, maxUpOffset: number, maxDownOffset: number} 

#### Return value

Type:  [Target](./target)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may call this method multiple times in a given chain; each call defines a different floating region. Floating regions may not overlap each other or other types of regions, such as ignore or match level regions. Create regions using the GeometryUtils.js in eyes.utils.

### frame method
#### Syntax


    eyes.check(Target.frame(frame));
    

#### Parameters

frame

Type: 

    EyesRemoteWebElement|webdriver.WebElement|string

The element that contains the frame to be checked.

#### Return value

Type:  [Target](./target)

### fully method
#### Syntax


    eyes.check(Target.fully(stitchContent));
    

#### Parameters

stitchContent

Type: boolean

If this parameter has a value of true, then Eyes uses scrolling and stitching to capture the entire page. If it's false, then only the viewport will be captured. If the method is called without a parameter, then the default is true.

#### Return value

Type:  [Target](./target)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


This method overrides the global default or the most recent value set by the [Eyes.setForceFullPageScreenshot](./eyes#setforcefullpagescreenshot-method) method. If stitching is done, then the stitch mode used, [StitchMode.CSS](./stitchmode) or [StitchMode.Scroll](./stitchmode) is determined by the global default or the value set using, [Eyes.setStitchMode](./eyes#setstitchmode-method) You may only call this method once in a given target.

### ignore method
#### Syntax


    eyes.check(Target.ignore(ignoreRegion));
    

#### Parameters

ignoreRegion

Type: 

    Region|webdriver.WebElement|EyesRemoteWebElement|webdriver.By

A locator to the region.

#### Return value

Type:  [Target](./target)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may call this method multiple times in a given chain.

Ignore regions should not overlap each other or other types of regions such as floating or match level regions.

### ignoreCaret method
#### Syntax


    eyes.check(Target.ignoreCaret(ignoreCaret));
    

#### Parameters

ignoreCaret

Type: boolean

If this parameter has a value of true, then Eyes will detect artifacts caused by a blinking cursor and will not report a mismatch for differences caused by these artifacts. If it has a value of , then Eyes will not try to detect artifacts caused by blinking cursors. If no parameter is passed then the default value is true - so the cursor artifacts will be ignored.

#### Return value

Type:  [Target](./target)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may only call this method once in a given chain. This method overrides the global default setting or the setting chosen explicitly for the current target using [Eyes.setIgnoreCaret](./eyes#setignorecaret-method) method.

### matchLevel method
#### Syntax


    eyes.check(Target.matchLevel(matchLevel));
    

#### Parameters

matchLevel

Type: [MatchLevel](./matchlevel)

Available match level values are:

*   [None](./matchlevel)
*   [Strict](./matchlevel)
*   [Layout](./matchlevel)
*   [Content](./matchlevel)
*   [Exact](./matchlevel)

For a description of these match levels and the different ways to apply them to tests, checkpoints, and regions, see [Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

#### Return value

Type:  [Target](./target)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


The value provided here overrides the default match level, or the global value set for this target using [Eyes.setMatchLevel](./eyes#setmatchlevel-method).

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### region method
#### Syntax


    eyes.check(Target.region(region, frame));
    

#### Parameters

region

Type: 

    Region|webdriver.WebElement|EyesRemoteWebElement|webdriver.By

The region to be checked.

frame

Type: 

    webdriver.WebElement|EyesRemoteWebElement|string

A representation of the iframe that encloses the region. Pass null if the region is not in a frame.

#### Return value

Type:  [Target](./target)

### timeout method
#### Syntax


    eyes.check(Target.timeout(ms));
    

#### Parameters

ms

Type: number

The timeout to use in milliseconds.

#### Return value

Type:  [Target](./target)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may only call this method once in a given chain. The timeout value provided here overrides the default value or the value set by [setDefaultMatchTimeout](./eyes#match_timeout-property) for the current target. Passing this method a value of zero disables the timeout mechanism.

### window method
#### Syntax


    eyes.check(Target.window());
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [Target](./target)

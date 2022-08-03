# Target class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Csharp</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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




This class provides methods that are used to define the top level target (the entire window, region, element, frame, etc.) for the [Check](./eyes#check-method) method.

Once you create a [SeleniumCheckSettings](./checksettings) object using one of the factory methods defined by this class, you can configure the checkpoint by calling other methods from the [SeleniumCheckSettings](./checksettings) class, chaining them one after the other using the '.' operator.

Using statement

    using Applitools.Selenium;
    	


### Frame method
#### Syntax


    eyes.Check(Target.Frame(by))
    eyes.Check(Target.Frame(frameNameOrId))
    eyes.Check(Target.Frame(index))
    eyes.Check(Target.Frame(frameReference))

Note: This method is a static method.

#### Parameters

by

Type: By

An element selector which is chosen using the Selenium By class.

frameNameOrId

Type: string

The name or id of the frame element.

index

Type: int

The index of the iframe (as in Selenium By Index).

frameReference

Type: IWebElement

A reference to the frame element.

#### Return value

Type:  [SeleniumCheckSettings](./checksettings)

### Region method
#### Syntax


    eyes.Check(Target.Region(rect))
    eyes.Check(Target.Region(element))
    eyes.Check(Target.Region(by))

Note: This method is a static method.

#### Parameters

rect

Type: Rectangle

An object that defines a rectangular area in the window.

element

Type: IWebElement

An object which defines a region.

by

Type: By

An element selector which is chosen using the Selenium By class.

#### Return value

Type:  [SeleniumCheckSettings](./checksettings)

### Window method
#### Syntax


    eyes.Check(Target.Window())

Note: This method is a static method.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [SeleniumCheckSettings](./checksettings)

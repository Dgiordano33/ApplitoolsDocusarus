# Target class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Python_sdk4</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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




This class provides methods that are used to

Once you create a [SeleniumCheckSettings](./checksettings) object using one of the factory methods defined by this class, you can configure the checkpoint by calling other methods from the [SeleniumCheckSettings](./checksettings) class, chaining them one after the other using the '.' operator.

Import statement

    from applitools.selenium import Target
    	


### frame method
#### Syntax


    eyes.check(Target.frame(frame_name_or_id))
    eyes.check(Target.frame(frame_element))
    eyes.check(Target.frame(frame_index))
    eyes.check(Target.frame(frame_by_selector))

Note: This method is a static method.

#### Parameters

frame_name_or_id

Type: FrameNameOrId

The name or id of the frame element.

#### Type definitions

FrameNameOrId

The type FrameNameOrId is defined as: Text.

frame_element

Type: AnyWebElement

The element object of the frame.

#### Type definitions

AnyWebElement

The type AnyWebElement is defined as: Union\[EyesWebElement,WebElement\].

frame_index

Type: FrameIndex

A Selenium frame index.

#### Type definitions

FrameIndex

The type FrameIndex is defined as: int.

frame_by_selector

Type: BySelector

Any legal Selenium By request that refers to an iframe, passed as a dictionary, for example \[By.TAG_NAME, "p"\]

#### Type definitions

BySelector

The type BySelector is defined as: List\[SeleniumBy,Text\].

#### Return value

Type:  [SeleniumCheckSettings](./checksettings)

### region method
#### Syntax


    eyes.check(Target.region(region))
    eyes.check(Target.region(css_selector))
    eyes.check(Target.region(element))
    eyes.check(Target.region(by_selector))

Note: This method is a static method.

#### Parameters

region

Type: [Region](./region)

The region to be checked.

css_selector

Type: CssSelector

Any legal CSS selector, for example .myClass

#### Type definitions

CssSelector

The type CssSelector is defined as: Text.

element

Type: AnyWebElement

An object which defines a region.

#### Type definitions

AnyWebElement

The type AnyWebElement is defined as: Union\[EyesWebElement,WebElement\].

by_selector

Type: BySelector

Any legal Selenium By request passed as a dictionary, for example \[By.TAG_NAME, "p"\]

#### Type definitions

BySelector

The type BySelector is defined as: List\[SeleniumBy,Text\].

#### Return value

Type:  [SeleniumCheckSettings](./checksettings)

### window method
#### Syntax


    eyes.check(Target.window())

Note: This method is a static method.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [SeleniumCheckSettings](./checksettings)

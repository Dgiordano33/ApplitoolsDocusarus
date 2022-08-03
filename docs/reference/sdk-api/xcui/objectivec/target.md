# Target class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Xcui</b>
</div><div class='platform-bar-div'>Language: <b>Objectivec</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

Once you create a [XCUICheckSettings](./checksettings) object using one of the factory methods defined by this class, you can configure the checkpoint by calling other methods from the [XCUICheckSettings](./checksettings) class, chaining them one after the other using the '.' operator.

Import statement

    @import EyesXCUI
    	


### element method
#### Syntax
#### Call syntax

    [eyes checkWithTag:@'Check element' andSettings:[Target element:element]]

#### Declaration

    (XCUICheckSettings *)element:(XCUIElement *)element

#### Parameters

element

Type: XCUIElement\*

The element for which region should be visually checked.

#### Return value

Type:  [XCUICheckSettings](./checksettings)\*

### region method
#### Syntax
#### Call syntax

    XCUICheckSettings* target =  [ Target region  : region   ]
    ;
    

#### Declaration

    (XCUICheckSettings *)region:(Region *)region

#### Parameters

region

Type: [Region](./region)\*

The region to be checked.

#### Return value

Type:  [XCUICheckSettings](./checksettings)\*

### window method
#### Syntax
#### Call syntax

    XCUICheckSettings* target =  [ Target window    ]
    ;
    

#### Declaration

    (XCUICheckSettings *)window

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [XCUICheckSettings](./checksettings)\*

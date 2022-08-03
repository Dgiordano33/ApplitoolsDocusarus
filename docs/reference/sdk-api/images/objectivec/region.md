# Region class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
</div><div class='platform-bar-div'>Language: <b>Objectivec</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/python/region'>Selenium Python</a>
<a href='../../selenium/java/region'>Selenium Java</a>
<a href='../../selenium/python_sdk4/region'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/region'>Selenium Csharp</a>
<a href='../../imagesappkit/objectivec/region'>Imagesappkit Objectivec</a>
<a href='../../puppeteer/javascript/region'>Puppeteer Javascript</a>
<a href='../../images/java/region'>Images Java</a>
<a href='../../images/python_sdk4/region'>Images Python_sdk4</a>
<a href='../../images/csharp/region'>Images Csharp</a>
<a href='../../images/javascript/region'>Images Javascript</a>
<a href='../../images/objectivec/region'>Images Objectivec</a>
<a href='../../selenium4/javascript/region'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/region'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/region'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/region'>Nightwatch Javascript</a>
<a href='../../xcui/objectivec/region'>Xcui Objectivec</a>
<a href='../../protractor/javascript/region'>Protractor Javascript</a>
<a href='../../appium/java/region'>Appium Java</a>
<a href='../../appium/csharp/region'>Appium Csharp</a>
<a href='../../wdiogeneric/javascript/region'>Wdiogeneric Javascript</a>
<a href='../../espresso/java/region'>Espresso Java</a>
</div></div><br /><br /></div>




Provides an object that describes a rectangular area at a coordinate. An object of this type is required as a parameter in some methods.

Import statement

    @import EyesImages
    	



### region method
#### Syntax
#### Call syntax

    BOOL obj = [[Region alloc] region  : region isIntersectedWithRegion: anotherRegion   ];
    

#### Declaration

    (BOOL)region:(Region *)region isIntersectedWithRegion:(Region *)anotherRegion

#### Parameters

region

Type: [Region](./region)\*

The object provided as a parameter specifies both the top-left of the new region and its dimensions.

anotherRegion

Type: [Region](./region)\*

Another Region object to clone.

#### Return value

Type:  BOOL

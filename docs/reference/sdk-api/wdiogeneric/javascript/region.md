# Region class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Wdiogeneric</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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



### Region method
#### Syntax


    let obj = new Region(region);
    
    let obj = new Region(location, size);
    
    let obj = new Region(x, y, width, height);
    

#### Parameters

region

Type: RegionPlain

The object provided as a parameter specifies both the top-left of the new region and its dimensions.

#### Type definitions

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

location

Type: [LocationPlain](./locationplain)

The object passed as a parameter specifies the top-left of the new region. You can pass any object that has the following fields: `{x: number, y: number}`

size

Type: [RectangleSizePlain](./rectanglesizeplain)

The object provided as a parameter specifies dimensions of the region. You can pass any object that has the following fields: `{width: number, height: number}`

x

Type: number

The X coordinate of the left edge of the region in pixels.

y

Type: number

The Y coordinate of the top edge of the region in pixels.

width

Type: number

The width of the region in pixels.

height

Type: number

The height of the region in pixels.

#### Return value

Type:  [Region](./region)

# Location class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Puppeteer</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/location'>Selenium Java</a>
<a href='../../selenium/csharp/location'>Selenium Csharp</a>
<a href='../../puppeteer/javascript/location'>Puppeteer Javascript</a>
<a href='../../images/java/location'>Images Java</a>
<a href='../../images/csharp/location'>Images Csharp</a>
<a href='../../images/javascript/location'>Images Javascript</a>
<a href='../../selenium4/javascript/location'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/location'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/location'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/location'>Nightwatch Javascript</a>
<a href='../../protractor/javascript/location'>Protractor Javascript</a>
<a href='../../appium/java/location'>Appium Java</a>
<a href='../../appium/csharp/location'>Appium Csharp</a>
<a href='../../wdiogeneric/javascript/location'>Wdiogeneric Javascript</a>
<a href='../../espresso/java/location'>Espresso Java</a>
</div></div><br /><br /></div>




Provides an object that describes a coordinate. An object of this type is required as a parameter in some methods.



### Location method
#### Syntax


    let obj = new Location(location);
    
    let obj = new Location(x, y);
    

#### Parameters

location

Type: [LocationPlain](./locationplain)

Another location object whose coordinate value is cloned to create this object.

x

Type: number

The horizontal coordinate of the point in pixels (from the left of the image).

y

Type: number

The vertical coordinate of the point in pixels (from the top of image).

#### Return value

Type:  [Location](./location)


### x property
#### Syntax


    obj.x = value;
    value = obj.x;
    

Type: number

### y property
#### Syntax


    obj.y = value;
    value = obj.y;
    

Type: number

# Location class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
</div><div class='platform-bar-div'>Language: <b>Csharp</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

Using statement

    using Applitools.Utils.Geometry;
    	



### Location method
#### Syntax


    Location obj = new Location(x, y);
    
    Location obj = new Location(point);
    
    Location obj = new Location();
    

#### Parameters

x

Type: int

The horizontal coordinate of the point in pixels (from the left of the image).

y

Type: int

The vertical coordinate of the point in pixels (from the top of image).

point

Type: Point

The top-left corner.

#### Return value

Type:  [Location](./location)


### X property
#### Syntax


    int value; // give relevant initial value
    obj.X  = value;
    value = obj.X

Type: int

### Y property
#### Syntax


    int value; // give relevant initial value
    obj.Y  = value;
    value = obj.Y

Type: int

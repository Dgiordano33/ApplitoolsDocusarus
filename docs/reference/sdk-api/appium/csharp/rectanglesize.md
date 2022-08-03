# RectangleSize class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Appium</b>
</div><div class='platform-bar-div'>Language: <b>Csharp</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/rectanglesize'>Selenium Java</a>
<a href='../../selenium/python_sdk4/rectanglesize'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/rectanglesize'>Selenium Csharp</a>
<a href='../../imagesappkit/objectivec/rectanglesize'>Imagesappkit Objectivec</a>
<a href='../../puppeteer/javascript/rectanglesize'>Puppeteer Javascript</a>
<a href='../../images/java/rectanglesize'>Images Java</a>
<a href='../../images/python_sdk4/rectanglesize'>Images Python_sdk4</a>
<a href='../../images/csharp/rectanglesize'>Images Csharp</a>
<a href='../../images/javascript/rectanglesize'>Images Javascript</a>
<a href='../../images/objectivec/rectanglesize'>Images Objectivec</a>
<a href='../../selenium4/javascript/rectanglesize'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/rectanglesize'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/rectanglesize'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/rectanglesize'>Nightwatch Javascript</a>
<a href='../../xcui/objectivec/rectanglesize'>Xcui Objectivec</a>
<a href='../../protractor/javascript/rectanglesize'>Protractor Javascript</a>
<a href='../../appium/java/rectanglesize'>Appium Java</a>
<a href='../../appium/csharp/rectanglesize'>Appium Csharp</a>
<a href='../../wdiogeneric/javascript/rectanglesize'>Wdiogeneric Javascript</a>
<a href='../../espresso/java/rectanglesize'>Espresso Java</a>
</div></div><br /><br /></div>




Provides an object that describes a rectangle. An object of this type is required as a parameter in some methods.

Using statement

    using Applitools.Utils.Geometry;
    	



### RectangleSize method
#### Syntax


    RectangleSize obj = new RectangleSize();
    
    RectangleSize obj = new RectangleSize(width, height);
    
    RectangleSize obj = new RectangleSize(size);
    
    RectangleSize obj = new RectangleSize(rectangle);
    
    RectangleSize obj = new RectangleSize(region);
    
    

#### Parameters

width

Type: int

The width of the rectangle in pixels.

height

Type: int

The height of the rectangle in pixels.

size

Type: Size

The dimensions of the rectangle as a standard C# Size object.

rectangle

Type: Rectangle

The dimensions of the rectangle.

region

Type: IRegion

The dimensions of the rectangle.

size

Type: [RectangleSize](./rectanglesize)

The dimensions of the rectangle as a standard C# Rectangle object.

#### Return value

Type:  [RectangleSize](./rectanglesize)


### Height property
#### Syntax


    int value; // give relevant initial value
    obj.Height  = value;
    value = obj.Height

Type: int

### Width property
#### Syntax


    int value; // give relevant initial value
    obj.Width  = value;
    value = obj.Width

Type: int

# Target class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
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




This class provides methods that are used to define and configure the checkpoint target for the [check](#check-method) method.

Once you create a [ImagesCheckSettings](./checksettings) object using one of the factory methods defined by this class, you can configure the checkpoint by calling other methods from the [ImagesCheckSettings](./checksettings) class, chaining them one after the other using the '.' operator.

Import statement

    from applitools.images import Target
    	


### image method
#### Syntax


    eyes.Check(name,Target().image(image))
    eyes.Check(name,Target().image(path))

Note: This method is a static method.

#### Parameters

image

Type: Image

The checkpoint image as an object in PNG format.

path

Type: Text

A string with the file system path to the checkpoint image file. The image must be in PNG format.

#### Return value

Type:  [ImagesCheckSettings](./checksettings)

### region method
#### Syntax


    eyes.check(tag,Target().image(img).region(image, rect))
    eyes.check(tag,Target().image(img).region(path, rect))

Note: This method is a static method.

#### Parameters

image

Type: Image

The checkpoint image as an object in PNG format.

rect

Type: [Region](./region)

An object that defines a rectangular area in the window.

path

Type: Text

A string with the file system path to the checkpoint image file. The image must be in PNG format.

rect

Type: [Region](./region)

An object that defines a rectangular area in the window.

#### Return value

Type:  [ImagesCheckSettings](./checksettings)

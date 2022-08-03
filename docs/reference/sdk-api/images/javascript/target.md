# Target class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
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




This class provides methods that are used to define and configure the checkpoint target for the [check](#check-method) method.

Once you create a [ImagesCheckSettings](./checksettings) object using one of the factory methods defined by this class, you can configure the checkpoint by calling other methods from the [ImagesCheckSettings](./checksettings) class, chaining them one after the other using the '.' operator.

Require statement

    const {Target} = require('@applitools/eyes-images');
    	


### base64 method
#### Syntax


    eyes.check(Target.base64(imageBase64));
    

#### Parameters

imageBase64

Type: string

The checkpoint image in PNG format, encoded in base64.

#### Return value

Type:  [ImagesCheckSettings](./checksettings)

### buffer method
#### Syntax


    eyes.check(Target.buffer(imageBuffer));
    

#### Parameters

imageBuffer

Type: Buffer

The checkpoint image as an object in PNG format.

#### Return value

Type:  [ImagesCheckSettings](./checksettings)

### image method
#### Syntax


    eyes.check(Target.image(base64String));
    eyes.check(Target.image(url));
    eyes.check(Target.image(filePath));
    eyes.check(Target.image(imageBuffer));
    

#### Parameters

base64String

Type: string

The checkpoint image in PNG format, encoded in base64.

url

Type: string

A string with the URL of the checkpoint image. The image must be in PNG format.

filePath

Type: string

A string with the file system path to the checkpoint image file. The image must be in PNG format.

imageBuffer

Type: Buffer

The checkpoint image as an object in PNG format.

#### Return value

Type:  [ImagesCheckSettings](./checksettings)

### path method
#### Syntax


    eyes.check(Target.path(imagePath));
    

#### Parameters

imagePath

Type: string

A string with the file system path to the checkpoint image file. The image must be in PNG format.

#### Return value

Type:  [ImagesCheckSettings](./checksettings)

### region method
#### Syntax


    eyes.check(Target.region(base64String, rect));
    eyes.check(Target.region(url, rect));
    eyes.check(Target.region(filePath, rect));
    eyes.check(Target.region(imageBuffer, rect));
    

#### Parameters

base64String

Type: string

The checkpoint image in PNG format, encoded in base64.

rect

Type: 

    Region|RegionObject

An object that defines a rectangular area in the window.

#### Type definitions

RegionObject

The type RegionObject is defined as: {left:number,top:number,width:number,height:number,coordinatesType: CoordinatesType|undefined} The field coordinatesType is for internal use only and should not be set by users.

url

Type: string

A string with the URL of the checkpoint image. The image must be in PNG format.

filePath

Type: string

A string with the file system path to the checkpoint image file. The image must be in PNG format.

imageBuffer

Type: Buffer

The checkpoint image as an object in PNG format.

#### Return value

Type:  [ImagesCheckSettings](./checksettings)

### url method
#### Syntax


    eyes.check(Target.url(imageUrl, imageSize));
    eyes.check(Target.url(imageUrl));
    

#### Parameters

imageUrl

Type: string

A string with the URL of the checkpoint image. The image must be in PNG format.

imageSize

Type: [RectangleSize](./rectanglesize) \[Optional \]

The size of the image pointed to by the URL. If not provided via this parameter, then the size must be passed using the method [imageSize](./checksettings#imagesize-method)

#### Return value

Type:  [ImagesCheckSettings](./checksettings)

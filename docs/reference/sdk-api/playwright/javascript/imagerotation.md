# ImageRotation class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Playwright</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/imagerotation'>Selenium Java</a>
<a href='../../puppeteer/javascript/imagerotation'>Puppeteer Javascript</a>
<a href='../../selenium4/javascript/imagerotation'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/imagerotation'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/imagerotation'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/imagerotation'>Nightwatch Javascript</a>
<a href='../../protractor/javascript/imagerotation'>Protractor Javascript</a>
<a href='../../appium/java/imagerotation'>Appium Java</a>
<a href='../../wdiogeneric/javascript/imagerotation'>Wdiogeneric Javascript</a>
</div></div><br /><br /></div>




An object of this class represents the amount that an image should be rotated.



### ImageRotation method
#### Syntax


    let rotationObj = new ImageRotation(rotation);
    

#### Parameters

rotation

Type: ImageRotationPlain

The amount by which the image should be rotated in degrees. A positive value indicates a clockwise rotation.

#### Type definitions

ImageRotationPlain

The legal values that an image may be rotated by. This may have the following values: \-270|-180|-90|0|90|180|270

#### Return value

Type:  [ImageRotation](./imagerotation)


### getRotation method
#### Syntax


    let value = rotationObj.getRotation();
    rotationObj.rotation = value;
    value = rotationObj.rotation;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  ImageRotationPlain

The amount by which the image should be rotated in degrees. A positive value indicates a clockwise rotation.

#### Type definitions

ImageRotationPlain

The legal values that an image may be rotated by. This may have the following values: \-270|-180|-90|0|90|180|270

### setRotation method
#### Syntax


    rotationObj.setRotation(rotation);
    rotationObj.rotation = value;
    value = rotationObj.rotation;
    

Note that this feature is available as both a method and a property.

#### Parameters

rotation

Type: ImageRotationPlain

The amount by which the image should be rotated in degrees. A positive value indicates a clockwise rotation.

#### Type definitions

ImageRotationPlain

The legal values that an image may be rotated by. This may have the following values: \-270|-180|-90|0|90|180|270

#### Return value

Type:  void

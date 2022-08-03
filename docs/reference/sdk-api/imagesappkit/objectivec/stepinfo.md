# StepInfo class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Imagesappkit</b>
</div><div class='platform-bar-div'>Language: <b>Objectivec</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/stepinfo'>Selenium Java</a>
<a href='../../selenium/python_sdk4/stepinfo'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/stepinfo'>Selenium Csharp</a>
<a href='../../selenium/javascript/stepinfo'>Selenium Javascript</a>
<a href='../../imagesappkit/objectivec/stepinfo'>Imagesappkit Objectivec</a>
<a href='../../puppeteer/javascript/stepinfo'>Puppeteer Javascript</a>
<a href='../../images/java/stepinfo'>Images Java</a>
<a href='../../images/python_sdk4/stepinfo'>Images Python_sdk4</a>
<a href='../../images/csharp/stepinfo'>Images Csharp</a>
<a href='../../images/javascript/stepinfo'>Images Javascript</a>
<a href='../../images/objectivec/stepinfo'>Images Objectivec</a>
<a href='../../selenium4/javascript/stepinfo'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/stepinfo'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/stepinfo'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/stepinfo'>Nightwatch Javascript</a>
<a href='../../xcui/objectivec/stepinfo'>Xcui Objectivec</a>
<a href='../../protractor/javascript/stepinfo'>Protractor Javascript</a>
<a href='../../appium/java/stepinfo'>Appium Java</a>
<a href='../../appium/csharp/stepinfo'>Appium Csharp</a>
<a href='../../wdiogeneric/javascript/stepinfo'>Wdiogeneric Javascript</a>
</div></div><br /><br /></div>




When a test terminates, the [close](#close-method) method returns an object with methods/properties defined by the [TestResults](./testresults) class. Within the [TestResults](./testresults), there is an array of objects which have the properties defined by the class [StepInfo](#). Each element of this array describes information for one step in the test.The properties in this class are used to retrieve information for a given step in the test results.

You can access the array of objects with the step information using the [stepsInfo](./testresults#stepsinfo-property) property.

Import statement

    @import EyesImagesAppKit
    	


### apiUrls property
#### Syntax
#### Call syntax

    ApiUrls* value = stepinfo.apiUrls
    

#### Declaration

     (readonly, nonatomic) ApiUrls *apiUrls

Type: [ApiUrls](./apiurls)\*

See [ApiUrls](./apiurls) for a detailed description of this object.

### appUrls property
#### Syntax
#### Call syntax

    AppUrls* value = stepinfo.appUrls
    

#### Declaration

     (readonly, nonatomic) AppUrls *appUrls

Type: [AppUrls](./appurls)\*

See [AppUrls](./appurls) for a detailed description of this object.

### hasBaselineImage property
#### Syntax
#### Call syntax

    BOOL value = stepinfo.hasBaselineImage
    

#### Declaration

     (assign, readonly, nonatomic) BOOL hasBaselineImage

Type: BOOL

### isDifferent property
#### Syntax
#### Call syntax

    BOOL value = stepinfo.isDifferent
    

#### Declaration

     (assign, readonly, nonatomic) BOOL isDifferent

Type: BOOL

Returns true if a corresponding baseline image exists and the checkpoint image does not match that baseline image, Returns false if the checkpoint image matched the baseline image or if its a new checkpoint image (there is no baseline image yet).

### name property
#### Syntax
#### Call syntax

    NSString* value = stepinfo.name
    

#### Declaration

     (readonly, nonatomic) NSString *name

Type: NSString\*

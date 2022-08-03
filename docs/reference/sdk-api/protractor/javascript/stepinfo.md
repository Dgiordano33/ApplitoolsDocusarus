# StepInfo class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Protractor</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

You can access the array of objects with the step information using the [getStepsInfo](./testresults#getstepsinfo-method) method.


### getApiUrls method
#### Syntax


    let value = stepinfo.getApiUrls();
    value = stepinfo.apiUrls;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [ApiUrls](./apiurls)

See [ApiUrls](./apiurls) for a detailed description of this object.

### getAppUrls method
#### Syntax


    let value = stepinfo.getAppUrls();
    value = stepinfo.appUrls;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [AppUrls](./appurls)

See [AppUrls](./appurls) for a detailed description of this object.

### getHasBaselineImage method
#### Syntax


    let value = stepinfo.getHasBaselineImage();
    value = stepinfo.hasBaselineImage;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getIsDifferent method
#### Syntax


    let value = stepinfo.getIsDifferent();
    value = stepinfo.getIsDifferent;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

Returns true if a corresponding baseline image exists and the checkpoint image does not match that baseline image, Returns false if the checkpoint image matched the baseline image or if its a new checkpoint image (there is no baseline image yet).

### getName method
#### Syntax


    let value = stepinfo.getName();
    value = stepinfo.name;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

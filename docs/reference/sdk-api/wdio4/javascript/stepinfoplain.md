# StepInfoPlain class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Wdio4</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../puppeteer/javascript/stepinfoplain'>Puppeteer Javascript</a>
<a href='../../selenium4/javascript/stepinfoplain'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/stepinfoplain'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/stepinfoplain'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/stepinfoplain'>Nightwatch Javascript</a>
<a href='../../protractor/javascript/stepinfoplain'>Protractor Javascript</a>
<a href='../../wdiogeneric/javascript/stepinfoplain'>Wdiogeneric Javascript</a>
</div></div><br /><br /></div>




When a test terminates, the [close](#close-method) method returns an object with methods/properties defined by the [TestResults](./testresults) class. Within the [TestResults](./testresults), there is an array of objects which have the properties defined by the class [StepInfo](./stepinfo). Each element of this array describes information for one step in the test.The properties in this type are used to retrieve information for a given step in the test results.

You can access the array of objects with the step information using the [getStepsInfo](./testresults#getstepsinfo-method) method.


### apiUrls property
#### Syntax


    value = stepinfo.apiUrls;
    

Type: [ApiUrlsPlain](./apiurlsplain)

See [ApiUrls](./apiurls) for a detailed description of this object.

### appUrls property
#### Syntax


    value = stepinfo.appUrls;
    

Type: [AppUrlsPlain](./appurlsplain)

See [AppUrls](./appurls) for a detailed description of this object.

### hasBaselineImage property
#### Syntax


    value = stepinfo.hasBaselineImage;
    

Type: boolean

### isDifferent property
#### Syntax


    value = stepinfo.isDifferent;
    

Type: boolean

Returns true if a corresponding baseline image exists and the checkpoint image does not match that baseline image, Returns false if the checkpoint image matched the baseline image or if its a new checkpoint image (there is no baseline image yet).

### name property
#### Syntax


    value = stepinfo.name;
    

Type: string

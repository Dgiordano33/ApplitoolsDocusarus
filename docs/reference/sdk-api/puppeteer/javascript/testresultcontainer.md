# TestResultContainer class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Puppeteer</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/testresultcontainer'>Selenium Java</a>
<a href='../../selenium/python_sdk4/testresultcontainer'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/testresultcontainer'>Selenium Csharp</a>
<a href='../../puppeteer/javascript/testresultcontainer'>Puppeteer Javascript</a>
<a href='../../selenium4/javascript/testresultcontainer'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/testresultcontainer'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/testresultcontainer'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/testresultcontainer'>Nightwatch Javascript</a>
<a href='../../protractor/javascript/testresultcontainer'>Protractor Javascript</a>
<a href='../../appium/java/testresultcontainer'>Appium Java</a>
<a href='../../wdiogeneric/javascript/testresultcontainer'>Wdiogeneric Javascript</a>
<a href='../../espresso/java/testresultcontainer'>Espresso Java</a>
</div></div><br /><br /></div>




An object of this type represents the result of running a test. It bundles together the test results and an exception status.


### getException method
#### Syntax


    let value = obj.getException();
    value = obj.exception;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  EyesError

A value that is not null indicates that an exception occured when running the test.

### getTestResults method
#### Syntax


    let value = obj.getTestResults();
    value = obj.testResults;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [TestResults](./testresults)

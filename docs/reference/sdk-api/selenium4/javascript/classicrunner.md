# ClassicRunner class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium4</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/classicrunner'>Selenium Java</a>
<a href='../../selenium/python_sdk4/classicrunner'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/classicrunner'>Selenium Csharp</a>
<a href='../../puppeteer/javascript/classicrunner'>Puppeteer Javascript</a>
<a href='../../selenium4/javascript/classicrunner'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/classicrunner'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/classicrunner'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/classicrunner'>Nightwatch Javascript</a>
<a href='../../protractor/javascript/classicrunner'>Protractor Javascript</a>
<a href='../../appium/java/classicrunner'>Appium Java</a>
<a href='../../wdiogeneric/javascript/classicrunner'>Wdiogeneric Javascript</a>
<a href='../../espresso/java/classicrunner'>Espresso Java</a>
</div></div><br /><br /></div>




An object of this class is used to manage multiple Eyes sessions when working without the Ultrafast Grid.

To work with the Ultrafast Grid, use [VisualGridRunner](./visualgridrunner) instead of this class.


### getAllTestResults method
#### Syntax


    let result = await runner.getAllTestResults(throwErr);
    
    let result = await runner.getAllTestResults();
    

#### Parameters

throwErr

Type: boolean \[Optional \]

If a value of true is passed and any test did not pass, or there was a failure, then an exception is thrown. If a value of false is passed, then the object returned contains the test results and status of all the tests. The calling program should use the [TestResultContainer.getException](./testresultcontainer#getexception-method) method to examine the exception status and, if it is null, check the various methods in the [TestResults](./testresults) returned by the method [getTestResults](./testresultcontainer#gettestresults-method) to see if the tests passed or mismatched where found. If no parameter is passed, then the default value is true.

#### Return value

Type:  Promise<[TestResultsSummary](./testresultssummary)\>

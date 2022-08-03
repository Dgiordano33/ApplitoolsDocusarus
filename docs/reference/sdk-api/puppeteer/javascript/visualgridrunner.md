# VisualGridRunner class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Puppeteer</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/visualgridrunner'>Selenium Java</a>
<a href='../../selenium/python_sdk4/visualgridrunner'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/visualgridrunner'>Selenium Csharp</a>
<a href='../../puppeteer/javascript/visualgridrunner'>Puppeteer Javascript</a>
<a href='../../selenium4/javascript/visualgridrunner'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/visualgridrunner'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/visualgridrunner'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/visualgridrunner'>Nightwatch Javascript</a>
<a href='../../protractor/javascript/visualgridrunner'>Protractor Javascript</a>
<a href='../../wdiogeneric/javascript/visualgridrunner'>Wdiogeneric Javascript</a>
</div></div><br /><br /></div>




An object of this class is used to manage multiple Eyes sessions when working with the Ultrafast Grid.

To work without the Ultrafast Grid, use [ClassicRunner](./classicrunner) instead of this class.



### VisualGridRunner method
#### Syntax


    let runner = new VisualGridRunner(options);
    

#### Parameters

options

Type: [RunnerOptionsPlain](./runneroptionsplain) \[Optional \]

The maximum number of concurrent Eyes session.

#### Return value

Type:  [VisualGridRunner](./visualgridrunner)


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

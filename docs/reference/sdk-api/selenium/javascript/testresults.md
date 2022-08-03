# TestResults class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/python/testresults'>Selenium Python</a>
<a href='../../selenium/java/testresults'>Selenium Java</a>
<a href='../../selenium/python_sdk4/testresults'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/testresults'>Selenium Csharp</a>
<a href='../../selenium/javascript/testresults'>Selenium Javascript</a>
<a href='../../imagesappkit/objectivec/testresults'>Imagesappkit Objectivec</a>
<a href='../../puppeteer/javascript/testresults'>Puppeteer Javascript</a>
<a href='../../images/java/testresults'>Images Java</a>
<a href='../../images/python_sdk4/testresults'>Images Python_sdk4</a>
<a href='../../images/csharp/testresults'>Images Csharp</a>
<a href='../../images/javascript/testresults'>Images Javascript</a>
<a href='../../images/objectivec/testresults'>Images Objectivec</a>
<a href='../../selenium4/javascript/testresults'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/testresults'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/testresults'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/testresults'>Nightwatch Javascript</a>
<a href='../../xcui/objectivec/testresults'>Xcui Objectivec</a>
<a href='../../protractor/javascript/testresults'>Protractor Javascript</a>
<a href='../../appium/java/testresults'>Appium Java</a>
<a href='../../appium/csharp/testresults'>Appium Csharp</a>
<a href='../../wdiogeneric/javascript/testresults'>Wdiogeneric Javascript</a>
<a href='../../espresso/java/testresults'>Espresso Java</a>
</div></div><br /><br /></div>




Encapsulates the results of a visual test, including summary information and checkpoint-specific details. An object of this class is returned by the [close](#close-method) method upon test completion.

Require statement

    const {TestResults} = require('const EyesSDK = require('eyes.selenium'))');
    	


### appUrls property
#### Syntax


    value = result.appUrls;
    

Type: 

    { batch: session };
    

See [`sessionurls (not yet available in selenium javascript)`](#)

The returned object has two properties, both are strings in the form of a URL:

`batch`

If you paste this URL into a browser then the browser will open the Test manager, displaying the batch results and all of its tests.

`session`

If you paste this URL into a browser then the browser will open the Test manager, displaying the batch results, with the focus on the test of this test result.

### appname property
#### Syntax


    value = result.appname;
    

Type: string

The application name.

### batchId property
#### Syntax


    value = result.batchId;
    

Type: string

The batch ID.

### batchName property
#### Syntax


    value = result.batchName;
    

Type: string

The batch name.

### branchName property
#### Syntax


    value = result.branchName;
    

Type: string

The branch name.

### duration property
#### Syntax


    value = result.duration;
    

Type: number

The number of seconds the test ran for.

### hostApp property
#### Syntax


    value = result.hostApp;
    

Type: string

The name of the host application

### hostDisplaySize property
#### Syntax


    value = result.hostDisplaySize;
    

Type: 

    { width: number; height: number };
    

The host display size.

### hostOS property
#### Syntax


    value = result.hostOS;
    

Type: string

The Host OS.

### isAborted property
#### Syntax


    value = result.isAborted;
    

Type: boolean

Use this property to retrieve true if the test was aborted.

### isDifferent property
#### Syntax


    value = result.isDifferent;
    

Type: boolean

### isnew property
#### Syntax


    value = result.isnew;
    

Type: boolean

Use this property to retrieve true if this is a new test, false otherwise.

### matches property
#### Syntax


    value = result.matches;
    

Type: number

### matches property
#### Syntax


    value = result.mismatches;
    

Type: number

### missing property
#### Syntax


    value = result.missing;
    

Type: number

### name property
#### Syntax


    value = result.name;
    

Type: string

The name of the test.

### startedAt property
#### Syntax


    value = result.startedAt;
    

Type: string

In ISO 8601 format. For example, '2018-07-31T08:06:41.3932844+00:00'.

### status property
#### Syntax


    value = result.status;
    

Type: string

Use this property to retrieve one of the following string values:

*   EyesBase.TestResultsStatus.Passed
*   EyesBase.TestResultsStatus.Unresolved
*   EyesBase.TestResultsStatus.Failed

### steps property
#### Syntax


    value = result.steps;
    

Type: number

### stepsInfo property
#### Syntax


    value = result.stepsInfo;
    

Type: [StepInfo](./stepinfo)\[\]

This is an array of [StepInfo](./stepinfo) objects.

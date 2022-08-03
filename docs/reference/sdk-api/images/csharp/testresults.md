# TestResults class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
</div><div class='platform-bar-div'>Language: <b>Csharp</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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




Encapsulates the results of a visual test, including summary information and checkpoint-specific details. An object of this class is returned by the [Close](./eyes#close-method) method upon test completion.

Using statement

    using Applitools;
    	


### AccessibilityStatus property
#### Syntax


    SessionAccessibilityStatus value = result.AccessibilityStatus;
    

Type: [SessionAccessibilityStatus](./sessionaccessibilitystatus)

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### AppName property
#### Syntax


    string value = result.AppName;
    

Type: string

The application name.

### AppUrls property
#### Syntax


    SessionUrls value = result.AppUrls;
    

Type: [SessionUrls](./sessionurls)

See [`SessionUrls`](./sessionurls)

The returned object has two properties, both are strings in the form of a URL:

`batch`

If you paste this URL into a browser then the browser will open the Test manager, displaying the batch results and all of its tests.

`session`

If you paste this URL into a browser then the browser will open the Test manager, displaying the batch results, with the focus on the test of this test result.

### BatchId property
#### Syntax


    string value = result.BatchId;
    

Type: string

The batch ID.

### BatchName property
#### Syntax


    string value = result.BatchName;
    

Type: string

The batch name.

### BranchName property
#### Syntax


    string value = result.BranchName;
    

Type: string

The branch name.

### Duration property
#### Syntax


    long value = result.Duration;
    

Type: long

The number of seconds the test ran for.

### HostApp property
#### Syntax


    string value = result.HostApp;
    

Type: string

The name of the host application

### HostDisplaySize property
#### Syntax


    RectangleSize value = result.HostDisplaySize;
    

Type: [RectangleSize](./rectanglesize)

The host display size.

### HostOS property
#### Syntax


    string value = result.HostOS;
    

Type: string

The Host OS.

### Id property
#### Syntax


    string value = result.Id;
    

Type: string

### IsAborted property
#### Syntax


    bool value = result.IsAborted;
    

Type: bool

Use this property to retrieve true if the test was aborted.

### IsDifferent property
#### Syntax


    bool value = result.IsDifferent;
    

Type: bool

### IsNew property
#### Syntax


    bool value = result.IsNew;
    

Type: bool

Use this property to retrieve true if this is a new test, false otherwise.

### Matches property
#### Syntax


    int value = result.Matches;
    

Type: int

### Mismatches property
#### Syntax


    int value = result.Mismatches;
    

Type: int

### Missing property
#### Syntax


    int value = result.Missing;
    

Type: int

### Name property
#### Syntax


    string value = result.Name;
    

Type: string

The name of the test.

### StartedAt property
#### Syntax


    DateTime value = result.StartedAt;
    

Type: DateTime

In ISO 8601 format. For example, '2018-07-31T08:06:41.3932844+00:00'.

### Status property
#### Syntax


    TestResultsStatus value = result.Status;
    

Type: [TestResultsStatus](./testresultsstatus)

Use this property to retrieve one of the following enumerated values:

*   TestResultsStatus.Passed
*   TestResultsStatus.Unresolved
*   TestResultsStatus.Failed

See [TestResultsStatus](./testresultsstatus) for details.

### Steps property
#### Syntax


    int value = result.Steps;
    

Type: int

### StepsInfo property
#### Syntax


    StepInfo[] value = result.StepsInfo;
    

Type: [StepInfo](./stepinfo)\[\]

This is an array of [StepInfo](./stepinfo) objects.

### Url property
#### Syntax


    string value = result.Url;
    

Type: string


### Delete method
#### Syntax


    result.Delete();

#### Parameters

This method does not take any parameters.

#### Return value

Type:  void

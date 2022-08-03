# TestResults class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Wdiogeneric</b>
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


### delete method
#### Syntax


    await result.delete();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  Promise`<void>`

### getAccessibilityStatus method
#### Syntax


    let value = result.getAccessibilityStatus();
    value = result.accessibilityStatus;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [TestAccessibilityStatus](./sessionaccessibilitystatus)

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### getAppName method
#### Syntax


    let value = result.getAppName();
    value = result.appName;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

The application name.

### getAppUrls method
#### Syntax


    let value = result.getAppUrls();
    value = result.appUrls;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [SessionUrls](./sessionurls)

See [`SessionUrls`](./sessionurls)

The returned object has two properties, both are strings in the form of a URL:

`batch`

If you paste this URL into a browser then the browser will open the Test manager, displaying the batch results and all of its tests.

`session`

If you paste this URL into a browser then the browser will open the Test manager, displaying the batch results, with the focus on the test of this test result.

### getBatchId method
#### Syntax


    let value = result.getBatchId();
    value = result.batchId;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

The batch ID.

### getBatchName method
#### Syntax


    let value = result.getBatchName();
    value = result.batchName;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

The batch name.

### getBranchName method
#### Syntax


    let value = result.getBranchName();
    value = result.branchName;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

The branch name.

### getDuration method
#### Syntax


    let value = result.getDuration();
    value = result.duration;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  number

The number of seconds the test ran for.

### getHostApp method
#### Syntax


    let value = result.getHostApp();
    value = result.hostApp;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

The name of the host application

### getHostDisplaySize method
#### Syntax


    let value = result.getHostDisplaySize();
    value = result.hostDisplaySize;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [RectangleSize](./rectanglesize)

The host display size.

### getHostOS method
#### Syntax


    let value = result.getHostOS();
    value = result.hostOS;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

The Host OS.

### getId method
#### Syntax


    let value = result.getId();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getIsAborted method
#### Syntax


    let value = result.getIsAborted();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

Use this method to retrieve true if the test was aborted.

### getIsDifferent method
#### Syntax


    let value = result.getIsDifferent();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getIsNew method
#### Syntax


    let value = result.getIsNew();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

Use this method to retrieve true if this is a new test, false otherwise.

### getMatches method
#### Syntax


    let value = result.getMatches();
    value = result.matches;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  number

### getMismatches method
#### Syntax


    let value = result.getMismatches();
    value = result.mismatches;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  number

### getMissing method
#### Syntax


    let value = result.getMissing();
    value = result.missing;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  number

### getName method
#### Syntax


    let value = result.getName();
    value = result.name;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

The name of the test.

### getStartedAt method
#### Syntax


    let value = result.getStartedAt();
    value = result.startedAt;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  Date

In ISO 8601 format. For example, '2018-07-31T08:06:41.3932844+00:00'.

### getStatus method
#### Syntax


    let value = result.getStatus();
    value = result.status;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [TestResultsStatus](./testresultsstatus)

Use this method to retrieve one of the following enumerated values:

*   TestResultsStatus.Passed
*   TestResultsStatus.Unresolved
*   TestResultsStatus.Failed

See [TestResultsStatus](./testresultsstatus) for details.

### getSteps method
#### Syntax


    let value = result.getSteps();
    value = result.steps;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  number

### getStepsInfo method
#### Syntax


    let value = result.getStepsInfo();
    value = result.stepsInfo;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [StepInfo](./stepinfo)\[\]

This is an array of [StepInfo](./stepinfo) objects.

### getUrl method
#### Syntax


    let value = result.getUrl();
    value = result.url;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

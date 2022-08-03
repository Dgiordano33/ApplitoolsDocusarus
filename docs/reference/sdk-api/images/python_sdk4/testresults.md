# TestResults class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
</div><div class='platform-bar-div'>Language: <b>Python_sdk4</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

Import statement

    from applitools.images import TestResults
    	


### accessibility_status property
#### Syntax


    value = result.accessibility_status
    

Type: [SessionAccessibilityStatus](./sessionaccessibilitystatus)

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### app_name property
#### Syntax


    value = result.app_name
    

Type: Text

The application name.

### app_urls property
#### Syntax


    value = result.app_urls
    

Type: [SessionUrls](./sessionurls)

See [`SessionUrls`](./sessionurls)

The returned object has two properties, both are strings in the form of a URL:

`batch`

If you paste this URL into a browser then the browser will open the Test manager, displaying the batch results and all of its tests.

`session`

If you paste this URL into a browser then the browser will open the Test manager, displaying the batch results, with the focus on the test of this test result.

### batch_id property
#### Syntax


    value = result.batch_id
    

Type: Text

The batch ID.

### batch_name property
#### Syntax


    value = result.batch_name
    

Type: Text

The batch name.

### branch_name property
#### Syntax


    value = result.branch_name
    

Type: Text

The branch name.

### duration property
#### Syntax


    value = result.duration
    

Type: int

The number of seconds the test ran for.

### host_app property
#### Syntax


    value = result.host_app
    

Type: Text

The name of the host application

### host_display_size property
#### Syntax


    value = result.host_display_size
    

Type: [RectangleSize](./rectanglesize)

The host display size.

### host_os property
#### Syntax


    value = result.host_os
    

Type: Text

The Host OS.

### id property
#### Syntax


    value = result.id
    

Type: Text

### is_aborted property
#### Syntax


    value = result.is_aborted
    

Type: bool

Use this property to retrieve True if the test was aborted.

### is_different property
#### Syntax


    value = result.is_different
    

Type: bool

### is_new property
#### Syntax


    value = result.is_new
    

Type: bool

Use this property to retrieve true if this is a new test, false otherwise.

### matches property
#### Syntax


    value = result.matches
    

Type: int

### matches property
#### Syntax


    value = result.mismatches
    

Type: int

### missing property
#### Syntax


    value = result.missing
    

Type: int

### name property
#### Syntax


    value = result.name
    

Type: Text

The name of the test.

### started_at property
#### Syntax


    value = result.started_at
    

Type: Text

In ISO 8601 format. For example, '2018-07-31T08:06:41.3932844+00:00'.

### status property
#### Syntax


    value = result.status
    

Type: [TestResultsStatus](./testresultsstatus)

Use this property to retrieve one of the following enumerated values:

*   TestResultsStatus.Passed
*   TestResultsStatus.Unresolved
*   TestResultsStatus.Failed

See [TestResultsStatus](./testresultsstatus) for details.

### steps property
#### Syntax


    value = result.steps
    

Type: int

### steps_info property
#### Syntax


    value = result.steps_info
    

Type: List\[[StepInfo](./stepinfo)\]

This is an array of [StepInfo](./stepinfo) objects.

### url property
#### Syntax


    value = result.url
    

Type: Text


### delete method
#### Syntax


    value = result.delete()
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  None

# TestResultsPlain class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Playwright</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../puppeteer/javascript/testresultsplain'>Puppeteer Javascript</a>
<a href='../../selenium4/javascript/testresultsplain'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/testresultsplain'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/testresultsplain'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/testresultsplain'>Nightwatch Javascript</a>
<a href='../../protractor/javascript/testresultsplain'>Protractor Javascript</a>
<a href='../../wdiogeneric/javascript/testresultsplain'>Wdiogeneric Javascript</a>
</div></div><br /><br /></div>




Encapsulates the results of a visual test, including summary information and checkpoint-specific details. An object of this type is returned by the [close](#close-method) method upon test completion.


### accessibilityStatus property
#### Syntax


    value = result.accessibilityStatus;
    

Type: [TestAccessibilityStatus](./sessionaccessibilitystatus)

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### appName property
#### Syntax


    value = result.appName;
    

Type: string

The application name.

### appUrls property
#### Syntax


    value = result.appUrls;
    

Type: [SessionUrlsPlain](./sessionurlsplain)

See [`SessionUrls`](./sessionurls)

The returned object has two properties, both are strings in the form of a URL:

`batch`

If you paste this URL into a browser then the browser will open the Test manager, displaying the batch results and all of its tests.

`session`

If you paste this URL into a browser then the browser will open the Test manager, displaying the batch results, with the focus on the test of this test result.

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
    

Type: [RectangleSizePlain](./rectanglesizeplain)

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

### isNew property
#### Syntax


    value = result.isNew;
    

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
    

Type: 

    Date|string

In ISO 8601 format. For example, '2018-07-31T08:06:41.3932844+00:00'.

### status property
#### Syntax


    value = result.status;
    

Type: 

    TestResultsStatus|undefined

Use this property to retrieve one of the following enumerated values:

*   TestResultsStatus.Passed
*   TestResultsStatus.Unresolved
*   TestResultsStatus.Failed

See [TestResultsStatus](./testresultsstatus) for details.

### steps property
#### Syntax


    value = result.steps;
    

Type: number

### stepsInfo property
#### Syntax


    value = result.stepsInfo;
    

Type: [StepInfoPlain](./stepinfoplain)\[\]

This is an array of [StepInfo](./stepinfo) objects.

### url property
#### Syntax


    value = result.url;
    

Type: string

# TestResults class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
</div><div class='platform-bar-div'>Language: <b>Objectivec</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

    @import EyesImages
    	


### accessibilityStatus property
#### Syntax
#### Call syntax

    SessionAccessibilityStatus* value = result.accessibilityStatus
    

#### Declaration

     (readonly, nonatomic) SessionAccessibilityStatus *accessibilityStatus

Type: [SessionAccessibilityStatus](./sessionaccessibilitystatus)\*

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### appName property
#### Syntax
#### Call syntax

    NSString* value = result.appName
    

#### Declaration

     (readonly, nonatomic) NSString *appName

Type: NSString\*

The application name.

### appUrls property
#### Syntax
#### Call syntax

    SessionUrls* value = result.appUrls
    

#### Declaration

     (readonly, nonatomic) SessionUrls *appUrls

Type: [SessionUrls](./sessionurls)\*

See [`SessionUrls`](./sessionurls)

The returned object has two properties, both are strings in the form of a URL:

`batch`

If you paste this URL into a browser then the browser will open the Test manager, displaying the batch results and all of its tests.

`session`

If you paste this URL into a browser then the browser will open the Test manager, displaying the batch results, with the focus on the test of this test result.

### batchId property
#### Syntax
#### Call syntax

    NSString* value = result.batchId
    

#### Declaration

     (readonly, nonatomic) NSString *batchId

Type: NSString\*

The batch ID.

### batchName property
#### Syntax
#### Call syntax

    NSString* value = result.batchName
    

#### Declaration

     (readonly, nonatomic) NSString *batchName

Type: NSString\*

The batch name.

### branchName property
#### Syntax
#### Call syntax

    NSString* value = result.branchName
    

#### Declaration

     (readonly, nonatomic) NSString *branchName

Type: NSString\*

The branch name.

### duration property
#### Syntax
#### Call syntax

    NSInteger value = result.duration
    

#### Declaration

     (assign, readonly, nonatomic) NSInteger duration

Type: NSInteger

The number of seconds the test ran for.

### hostApp property
#### Syntax
#### Call syntax

    NSString* value = result.hostApp
    

#### Declaration

     (readonly, nonatomic) NSString *hostApp

Type: NSString\*

The name of the host application

### hostDisplaySize property
#### Syntax
#### Call syntax

    CGSize value = result.hostDisplaySize
    

#### Declaration

     (assign, readonly, nonatomic) CGSize hostDisplaySize

Type: CGSize

The host display size.

### hostOS property
#### Syntax
#### Call syntax

    NSString* value = result.hostOS
    

#### Declaration

     (readonly, nonatomic) NSString *hostOS

Type: NSString\*

The Host OS.

### isAborted property
#### Syntax
#### Call syntax

    BOOL value = result.isAborted
    

#### Declaration

     (assign, readonly, nonatomic) BOOL isAborted

Type: BOOL

Use this property to retrieve true if the test was aborted.

### isDifferent property
#### Syntax
#### Call syntax

    BOOL value = result.isDifferent
    

#### Declaration

     (assign, readonly, nonatomic) BOOL isDifferent

Type: BOOL

### isNew property
#### Syntax
#### Call syntax

    BOOL value = result.isNew
    

#### Declaration

     (assign, readonly, nonatomic) BOOL isNew

Type: BOOL

Use this property to retrieve true if this is a new test, false otherwise.

### matches property
#### Syntax
#### Call syntax

    NSInteger value = result.matches
    

#### Declaration

     (assign, readonly, nonatomic) NSInteger matches

Type: NSInteger

### matches property
#### Syntax
#### Call syntax

    NSInteger value = result.mismatches
    

#### Declaration

     (assign, readonly, nonatomic) NSInteger mismatches

Type: NSInteger

### missing property
#### Syntax
#### Call syntax

    NSInteger value = result.missing
    

#### Declaration

     (assign, readonly, nonatomic) NSInteger missing

Type: NSInteger

### name property
#### Syntax
#### Call syntax

    NSString* value = result.name
    

#### Declaration

     (readonly, nonatomic) NSString *name

Type: NSString\*

The name of the test.

### startedAt property
#### Syntax
#### Call syntax

    NSString* value = result.startedAt
    

#### Declaration

     (readonly, nonatomic) NSString *startedAt

Type: NSString\*

In ISO 8601 format. For example, '2018-07-31T08:06:41.3932844+00:00'.

### status property
#### Syntax
#### Call syntax

    TestResultStatus value = result.status
    

#### Declaration

     (assign, nonatomic) TestResultStatus status

Type: [TestResultStatus](./testresultsstatus)

Use this property to retrieve one of the following enumerated values:

*   TestResultsStatus.Passed
*   TestResultsStatus.Unresolved
*   TestResultsStatus.Failed

See [TestResultStatus](./testresultsstatus) for details.

### steps property
#### Syntax
#### Call syntax

    NSInteger value = result.steps
    

#### Declaration

     (assign, readonly, nonatomic) NSInteger steps

Type: NSInteger

### stepsInfo property
#### Syntax
#### Call syntax

    NSArray<StepInfo *>* value = result.stepsInfo
    

#### Declaration

     (readonly, copy, nonatomic) NSArray<StepInfo *> *stepsInfo

Type: NSArray<[StepInfo](./stepinfo) \*>\*

This is an array of [StepInfo](./stepinfo) objects.

### url property
#### Syntax
#### Call syntax

    NSString* value = result.url
    

#### Declaration

     (readonly, nonatomic) NSString *url

Type: NSString\*

# TestResults class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Espresso</b>
</div><div class='platform-bar-div'>Language: <b>Java</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

    import com.applitools.eyes.android.common.TestResults;
    	


### getAccessibilityStatus method
#### Syntax


    SessionAccessibilityStatus value = result.getAccessibilityStatus();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [SessionAccessibilityStatus](./sessionaccessibilitystatus)

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### getAppName method
#### Syntax


    String value = result.getAppName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

The application name.

### getMatches method
#### Syntax


    int value = result.getMatches();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  int

### getMismatches method
#### Syntax


    int value = result.getMismatches();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  int

### getMissing method
#### Syntax


    int value = result.getMissing();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  int

### getName method
#### Syntax


    String value = result.getName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

The name of the test.

### getStatus method
#### Syntax


    TestResultsStatus value = result.getStatus();
    

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


    int value = result.getSteps();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  int

### getUrl method
#### Syntax


    String value = result.getUrl();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### isAborted method
#### Syntax


    boolean value = result.isAborted();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

Use this method to retrieve true if the test was aborted.

### isDifferent method
#### Syntax


    boolean value = result.isDifferent();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### isNew method
#### Syntax


    boolean value = result.isNew();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

Use this method to retrieve true if this is a new test, false otherwise.

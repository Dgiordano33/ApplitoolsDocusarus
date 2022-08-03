# TestResultContainer class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Java</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

Import statement

    import com.applitools.eyes.TestResultContainer;
    	


### getBrowserInfo method
#### Syntax


    RenderBrowserInfo value = obj.getBrowserInfo();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [RenderBrowserInfo](./renderbrowserinfo)

If this test was run using the Ultrafast Grid, then an object is returned which has the browser configuration information. If the test was not run on the Ultrafast Grid, then a value of null is returned.

### getException method
#### Syntax


    Throwable value = obj.getException();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  Throwable

A value that is not null indicates that an exception occured when running the test.

### getTestResults method
#### Syntax


    TestResults value = obj.getTestResults();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [TestResults](./testresults)

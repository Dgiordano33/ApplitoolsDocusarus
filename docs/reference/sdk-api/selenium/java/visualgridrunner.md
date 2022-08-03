# VisualGridRunner class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Java</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

Import statement

    import com.applitools.eyes.visualgrid.services.VisualGridRunner;
    	



### VisualGridRunner method
#### Syntax


    VisualGridRunner runner = new VisualGridRunner(runnerOptions);
    

#### Parameters

runnerOptions

Type: [RunnerOptions](./runneroptions)

An object that defines options for the runner. Multiple options can be defined by appending multiple method calls in a fluent style.

#### Return value

Type:  [VisualGridRunner](./visualgridrunner)

#### Example


The example below demonstrates the creation of a [VisualGridRunner](./visualgridrunner) instance. It is initialized with a call to the constructor [RunnerOptions](./runneroptions). A call to [testConcurrency](./runneroptions#testconcurrency-method) is then appended with a parameter of 10. This runner instance is passed to the [Eyes](./eyes) instance when it is created. The end effect is that the runner manages the workflow and concurrency of all [Eyes](./eyes) instances that are initialized with that runner. Passing a parameter of 10 means that the runner limits the concurrency to a maximum of 10 active test executions.

Java

    private EyesRunner runner = null;
    runner = new VisualGridRunner(new RunnerOptions().testConcurrency(concurrentSessions)); 
    eyes = new Eyes(runner);


### getAllTestResults method
#### Syntax


    TestResultsSummary runner = runner.getAllTestResults();
    
    TestResultsSummary runner = runner.getAllTestResults(shouldThrowException);
    

#### Parameters

shouldThrowException

Type: boolean

If a value of true is passed and any test did not pass, or there was a failure, then an exception is thrown. If a value of false is passed, then the object returned contains the test results and status of all the tests. The calling program should use the [TestResultContainer.getException](./testresultcontainer#getexception-method) method to examine the exception status and, if it is null, check the various methods in the [TestResults](./testresults) returned by the method [getTestResults](./testresultcontainer#gettestresults-method) to see if the tests passed or mismatched where found. If no parameter is passed, then the default value is true.

#### Return value

Type:  [TestResultsSummary](./testresultssummary)

### setDontCloseBatches method
#### Syntax


    runner.setDontCloseBatches(dontCloseBatches);

#### Parameters

dontCloseBatches

Type: boolean

Pass a value of true to disable Auto batch closure.

#### Return value

Type:  void
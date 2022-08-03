# ClassicRunner class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Java</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/classicrunner'>Selenium Java</a>
<a href='../../selenium/python_sdk4/classicrunner'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/classicrunner'>Selenium Csharp</a>
<a href='../../puppeteer/javascript/classicrunner'>Puppeteer Javascript</a>
<a href='../../selenium4/javascript/classicrunner'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/classicrunner'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/classicrunner'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/classicrunner'>Nightwatch Javascript</a>
<a href='../../protractor/javascript/classicrunner'>Protractor Javascript</a>
<a href='../../appium/java/classicrunner'>Appium Java</a>
<a href='../../wdiogeneric/javascript/classicrunner'>Wdiogeneric Javascript</a>
<a href='../../espresso/java/classicrunner'>Espresso Java</a>
</div></div><br /><br /></div>




An object of this class is used to manage multiple Eyes sessions when working without the Ultrafast Grid.

To work with the Ultrafast Grid, use [VisualGridRunner](./visualgridrunner) instead of this class.

Import statement

    import com.applitools.eyes.selenium.ClassicRunner;
    	



### ClassicRunner method
#### Syntax


    ClassicRunner runner = new ClassicRunner();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [ClassicRunner](./classicrunner)


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
#### Introduction



    
#### Syntax


    runner.setDontCloseBatches(dontCloseBatches);

#### Parameters

dontCloseBatches

Type: boolean

Pass a value of true to disable Auto batch closure.

#### Return value

Type:  void

#### Example


The example below:

*   Illustrates how to prevent the runner from closing the batch, using [VisualGridRunner.setDontCloseBatches](./visualgridrunner#setdontclosebatches-method) or [ClassicRunner.setDontCloseBatches](#).
*   Illustrates how to manually close the batch when all tests on all runners have completed, using the method [BatchClose.close](#close-method).

Note that the batch ID of the batch being closed needs to be passed to the [BatchClose.setBatchId](./batchclose#setbatchid-method) method. In this example, we assume that a batch ID was set for all of the batches by assigning a unique ID to the APPLITOOLS_BATCH_ID environment variable. This is used as a default by the [Configuration.setBatch](./configuration#setbatch-method) method which is set up in the suite Configuration object and then assigned to each Eyes instance.

Java

    /*
     * After creating the runner, configure it so that won't close the batch
     */
    runner = new VisualGridRunner(new RunnerOptions().testConcurrency(concurrentSessions));
    runner.setDontCloseBatches(true);
    /*
     * Setup a common batch for all tests
     */
    BatchInfo batchInfo = new BatchInfo(batchName);
    batchInfo.setId(myGetUniqueBatchID()); // User defined
    suiteConfig = new Configuration() 
            .setBatch(batchInfo)
    /* ... other configurations */; 
    /*
     * Assign the configuration to all newly created Eyes instances
     */
    eyes = new Eyes(runner);
    eyes.setConfiguration(suiteConfig);
    /*
     * After all the tests have completed, in all the runners
     */
    List<String> batchIds = Arrays.asList(System.getenv("APPLITOOLS_BATCH_ID"));
    BatchClose batchClose = new BatchClose();
    batchClose.setBatchId(batchIds).close();

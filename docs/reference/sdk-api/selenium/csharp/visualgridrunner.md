# VisualGridRunner class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Csharp</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

Using statement

    using Applitools.VisualGrid;
    	



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


The example below demonstrates the creation of a [VisualGridRunner](./visualgridrunner) instance. It is initialized with a call to the constructor [RunnerOptions](./runneroptions). A call to [TestConcurrency](./runneroptions#testconcurrency-method) is then appended with a parameter of 10. This runner instance is passed to the [Eyes](./eyes) instance when it is created. The end effect is that the runner manages the workflow and concurrency of all [Eyes](./eyes) instances that are initialized with that runner. Passing a parameter of 10 means that the runner limits the concurrency to a maximum of 10 active test executions.

C#

    private EyesRunner runner = null;
    runner = new VisualGridRunner(new RunnerOptions().TestConcurrency(10)); 
    eyes = new Eyes(runner);


### DontCloseBatches property
#### Introduction



    

#### Syntax


    bool runner; // give relevant initial value
    runner.DontCloseBatches  = runner;
    runner = runner.DontCloseBatches

Type: bool

#### Example


The example below:

*   Illustrates how to prevent the runner from closing the batch, using [VisualGridRunner.DontCloseBatches](#) or [ClassicRunner.DontCloseBatches](./classicrunner#dontclosebatches-property).
*   Illustrates how to manually close the batch when all tests on all runners have completed, using the method [BatchClose.Close](./batchclose#close-method).

Note that the batch ID of the batch being closed needs to be passed to the [BatchClose.SetBatchId](../class_batchclose/method-batchclose-setbatchid-selenium-csharp.html) method. In this example, we assume that a batch ID was set for all of the batches by assigning a unique ID to the APPLITOOLS_BATCH_ID environment variable. This is used as a default by the [Configuration.SetBatch](./configuration#setbatch-method) method which is set up in the suite Configuration object and then assigned to each Eyes instance.

C#

    /*
     * After creating the runner, configure it so that won't close the batch
     */
    runner = new VisualGridRunner(new RunnerOptions().TestConcurrency(10));
    runner.DontCloseBatches = true;
    /*
     * Setup a common batch for all tests
     */
    BatchInfo batchInfo = new BatchInfo(batchName);
    batchInfo.Id = MyGetUniqueBatchID(); // User defined
    suiteConfig = (Configuration) new Configuration() 
        .SetBatch(batchInfo)
        /* ... other configurations */; 
    /* 
     * Assign the configuration to all newly created Eyes instances
     */
    eyes = new Eyes(runner);
    eyes.SetConfiguration(suiteConfig);
    /*
     * After all the tests have completed, in all the runners
     */
    List<String> batchIds = new List<string>() { Environment.GetEnvironmentVariable("APPLITOOLS_BATCH_ID") };
    BatchClose batchClose = new BatchClose();
    batchClose.SetBatchId(batchIds).Close();


### GetAllTestResults method
#### Syntax


    TestResultsSummary runner = runner.GetAllTestResults();
    
    TestResultsSummary runner = runner.GetAllTestResults(shouldThrowException);
    

#### Parameters

shouldThrowException

Type: bool

If a value of true is passed and any test did not pass, or there was a failure, then an exception is thrown. If a value of false is passed, then the object returned contains the test results and status of all the tests. The calling program should use the [TestResultContainer.Exception](./testresultcontainer#exception-property) property to examine the exception status and, if it is null, check the various methods in the [TestResults](./testresults) returned by the method [TestResults](./testresultcontainer#testresults-property) to see if the tests passed or mismatched where found. If no parameter is passed, then the default value is true.

#### Return value

Type:  [TestResultsSummary](./testresultssummary)

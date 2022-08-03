# VisualGridRunner class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Python_sdk4</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

    from applitools.selenium import VisualGridRunner
    	



### VisualGridRunner method
#### Syntax


    runner = VisualGridRunner(options_or_concurrency)
    

#### Parameters

options_or_concurrency

Type: Union\[[RunnerOptions](./runneroptions),int\] \[Optional : default = RunnerOptions() \]

Pass the concurrency to be used using a [RunnerOptions](./runneroptions) constructor and [test_concurrency](./runneroptions#test_concurrency-method) methods as shown in the example below. Passing the concurrency as an integer will eventually be deprecated and should not be used.

#### Return value

Type:  None

#### Example


The example below demonstrates the creation of a [VisualGridRunner](./visualgridrunner) instance. It is initialized with a call to the constructor [RunnerOptions](./runneroptions). A call to [test_concurrency](./runneroptions#test_concurrency-method) is then appended with a parameter of 10. This runner instance is passed to the [Eyes](./eyes) instance when it is created. The end effect is that the runner manages the workflow and concurrency of all [Eyes](./eyes) instances that are initialized with that runner. Passing a parameter of 10 means that the runner limits the concurrency to a maximum of 10 active test executions.

Python

    runner = VisualGridRunner(RunnerOptions().test_concurrency(concurrent_sessions))   
    eyes = Eyes(runner)


### get_all_test_results method
#### Syntax


    runner = runner.get_all_test_results(should_raise_exception)
    
    runner = runner.get_all_test_results()
    

#### Parameters

should_raise_exception

Type: bool \[Optional : default = True \]

If a value of True is passed and any test did not pass, or there was a failure, then an exception is thrown. If a value of False is passed, then the object returned contains the test results and status of all the tests. The calling program should use the [TestResultContainer.exception](#exception-property) property to examine the exception status and, if it is null, check the various methods in the [TestResults](./testresults) returned by the method [test_results](./testresultcontainer#test_results-property) to see if the tests passed or mismatched where found. If no parameter is passed, then the default value is True.

#### Return value

Type:  [TestResultsSummary](./testresultssummary)

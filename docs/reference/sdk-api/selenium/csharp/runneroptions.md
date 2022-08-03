# RunnerOptions class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Csharp</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/runneroptions'>Selenium Java</a>
<a href='../../selenium/python_sdk4/runneroptions'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/runneroptions'>Selenium Csharp</a>
<a href='../../appium/java/runneroptions'>Appium Java</a>
</div></div><br /><br /></div>




An object of this class is used to define options for [VisualGridRunner](./visualgridrunner) or [ClassicRunner](./classicrunner).

Using statement

    using Applitools.VisualGrid;
    	

#### Example


The example below demonstrates the creation of a [VisualGridRunner](./visualgridrunner) instance. It is initialized with a call to the constructor [RunnerOptions](#). A call to [TestConcurrency](./runneroptions#testconcurrency-method) is then appended with a parameter of 10. This runner instance is passed to the [Eyes](./eyes) instance when it is created. The end effect is that the runner manages the workflow and concurrency of all [Eyes](./eyes) instances that are initialized with that runner. Passing a parameter of 10 means that the runner limits the concurrency to a maximum of 10 active test executions.

C#

    private EyesRunner runner = null;
    runner = new VisualGridRunner(new RunnerOptions().TestConcurrency(10)); 
    eyes = new Eyes(runner);



### RunnerOptions method
#### Syntax


    runner = new VisualGridRunner(new RunnerOptions().TestConcurrency(10)); 

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [RunnerOptions](./runneroptions)



### TestConcurrency method
#### Syntax


    runner = new VisualGridRunner(new RunnerOptions().TestConcurrency(10)); 

#### Parameters

concurrency

Type: int

The maximum number of Eyes tests that can be executed concurrently by this runner.

#### Return value

Type:  [RunnerOptions](./runneroptions)
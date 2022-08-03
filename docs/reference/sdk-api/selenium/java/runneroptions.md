# RunnerOptions class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Java</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/runneroptions'>Selenium Java</a>
<a href='../../selenium/python_sdk4/runneroptions'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/runneroptions'>Selenium Csharp</a>
<a href='../../appium/java/runneroptions'>Appium Java</a>
</div></div><br /><br /></div>




An object of this class is used to define options for [VisualGridRunner](./visualgridrunner) or [ClassicRunner](./classicrunner).

Import statement

    import com.applitools.eyes.visualgrid.services.RunnerOptions;
    	

#### Example


The example below demonstrates the creation of a [VisualGridRunner](./visualgridrunner) instance. It is initialized with a call to the constructor [RunnerOptions](#). A call to [testConcurrency](./runneroptions#testconcurrency-method) is then appended with a parameter of 10. This runner instance is passed to the [Eyes](./eyes) instance when it is created. The end effect is that the runner manages the workflow and concurrency of all [Eyes](./eyes) instances that are initialized with that runner. Passing a parameter of 10 means that the runner limits the concurrency to a maximum of 10 active test executions.

Java

    private EyesRunner runner = null;
    runner = new VisualGridRunner(new RunnerOptions().testConcurrency(concurrentSessions)); 
    eyes = new Eyes(runner);


### apiKey method
#### Syntax


    RunnerOptions value = obj.apiKey(apiKey);
    

#### Parameters

apiKey

Type: String

A string that is your API Key.

#### Return value

Type:  [RunnerOptions](./runneroptions)

This method returns the object that called it so that it can be used to call other methods supported by this class in a fluent API style.

### autProxy method
#### Syntax


    RunnerOptions value = obj.autProxy(autProxy);
    

#### Parameters

autProxy

Type: AbstractProxySettings

An object that defines how to interact with the proxy server.

#### Return value

Type:  [RunnerOptions](./runneroptions)

This method returns the object that called it so that it can be used to call other methods supported by this class in a fluent API style.

### proxy method
#### Syntax


    RunnerOptions value = obj.proxy(proxySettings);
    

#### Parameters

proxySettings

Type: AbstractProxySettings

An object that defines how to interact with the proxy server.

#### Return value

Type:  [RunnerOptions](./runneroptions)

This method returns the object that called it so that it can be used to call other methods supported by this class in a fluent API style.

### serverUrl method
#### Syntax


    RunnerOptions value = obj.serverUrl(serverUrl);
    

#### Parameters

serverUrl

Type: String

The URI of your Eyes server in URI format. Pass a value of null to use the default cloud server.

#### Return value

Type:  [RunnerOptions](./runneroptions)

This method returns the object that called it so that it can be used to call other methods supported by this class in a fluent API style.

### testConcurrency method
#### Syntax


    runner = new VisualGridRunner(new RunnerOptions().testConcurrency(concurrentSessions)); 

#### Parameters

testConcurrency

Type: int

The maximum number of Eyes tests that can be executed concurrently by this runner.

#### Return value

Type:  [RunnerOptions](./runneroptions)
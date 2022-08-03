# BatchClose class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Appium</b>
</div><div class='platform-bar-div'>Language: <b>Csharp</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/batchclose'>Selenium Java</a>
<a href='../../selenium/python_sdk4/batchclose'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/batchclose'>Selenium Csharp</a>
<a href='../../puppeteer/javascript/batchclose'>Puppeteer Javascript</a>
<a href='../../images/java/batchclose'>Images Java</a>
<a href='../../images/python_sdk4/batchclose'>Images Python_sdk4</a>
<a href='../../images/csharp/batchclose'>Images Csharp</a>
<a href='../../selenium4/javascript/batchclose'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/batchclose'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/batchclose'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/batchclose'>Nightwatch Javascript</a>
<a href='../../protractor/javascript/batchclose'>Protractor Javascript</a>
<a href='../../appium/csharp/batchclose'>Appium Csharp</a>
<a href='../../wdiogeneric/javascript/batchclose'>Wdiogeneric Javascript</a>
</div></div><br /><br /></div>




Use an object of this class to close a batch explicitly.

#### Introduction


The Test Manager displays test results in batches. The article [Grouping tests into batches with the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) explains how tests are associated with batches based on a batch ID, and how you can use the SDK to control which tests will be part of a particular batch.

Here, we will focus on understanding the notions of an active batch and closing a batch.

A batch is created and becomes active when a test is started with a batch ID that does not match an existing active batch. As long as a batch is active, new tests that have a matching batch ID will be added to the batch.

The Eyes server closes an active batch if it has not been used for several hours, or if it has been in continuous use for more than a few days.

When a batch is closed, the Eyes server sends a batch completion notification, if this feature is enabled. New tests that start will be added to a new batch and not to the closed batch.

You can manage batch closure by manually closing the batch. This is recommended if the user wants to get a batch completion notification as soon as the tests complete and not when the batch is closed automatically by the server.

Using statement

    using Applitools;
    	

#### Example


The example below illustrates how to close a batch programmatically:

Note that the batch ID of the batch being closed needs to be passed to the [BatchClose.SetBatchId](../classes-gen/class_batchclose/method-batchclose-setbatchid-appium-csharp.html) method. In this example, we assume that a batch ID was set for all of the batches by assigning a unique ID to the environment variable APPLITOOLS_BATCH_ID. This is used as a default by the method [Configuration.SetBatch](./configuration#setbatch-method) which is set up in a suite Configuration object and assigned to each Eyes instance.

C#

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
    eyes = new Eyes();
    eyes.SetConfiguration(suiteConfig);
    /*
     * After all the tests have completed, in all the runners
     */
    List<String> batchIds = new List<string>() { Environment.GetEnvironmentVariable("APPLITOOLS_BATCH_ID") };
    BatchClose batchClose = new BatchClose();
    batchClose.SetBatchId(batchIds).Close();



### BatchClose method




To manually close a batch, instantiate an object of this class and then call [BatchClose.SetBatchId](method-batchclose-setbatchid-appium-csharp.html) followed by [BatchClose.Close](./batchclose#close-method) in a fluent method style - see the example below.

#### Syntax


    BatchClose obj = new BatchClose();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [BatchClose](./batchclose)




### ApiKey property
#### Syntax


    string value; // give relevant initial value
    obj.ApiKey  = value;
    value = obj.ApiKey

Type: string


### Close method
#### Syntax


    obj.Close();

#### Parameters

This method does not take any parameters.

#### Return value

Type:  void


### SetApiKey method
#### Syntax


    BatchClose value = obj.SetApiKey(apiKey);
    obj.ApiKey  = value;
     = obj.ApiKey;
    

Note that this feature is available as both a method and a property.

#### Parameters

apiKey

Type: string

A string that is your API Key.

#### Return value

Type:  [BatchClose](./batchclose)

The object that called this method. This allows other methods of this class to be appended in a Fluent style.



### SetProxy method
#### Syntax


    BatchClose value = obj.SetProxy(proxy);
    obj.Proxy  = value;
     = obj.Proxy;
    

Note that this feature is available as both a method and a property.

#### Parameters

proxy

Type: WebProxy

An object that defines how to interact with the proxy server.

#### Return value

Type:  [BatchClose](./batchclose)

### SetUrl method
#### Syntax


    BatchClose value = obj.SetUrl(url);
    
    

#### Parameters

url

Type: string

The URL of the Eyes server.

url

Type: Uri

The URI of the Eyes server.

#### Return value

Type:  [BatchClose](./batchclose)

The object that called this method. This allows other methods of this class to be appended in a Fluent style.

# BatchClose class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Python_sdk4</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

Batches are closed automatically in one of two ways. By default, runner-based SDKs implement the Auto batch closure feature. This feature closes the batches associated with the runner's test after the tests have completed. In addition, in order to prevent large batches that could cause performance issues, the Eyes server closes active batches that have not been used for several hours, or if they have been in continuous use for more than a few days.

When a batch is closed, the Eyes server can send the user a batch completion notification. This feature must be enabled explicitly, see [Batch completion notifications](https://applitools.com/docs/features/batch-completion-notifications.html) for details.

You can manage Auto batch closure by:

*   Disabling the Auto batch closure feature by calling [`runner.setdontclosebatches (not yet available in selenium python_sdk4)`](#). This is useful if you want to combine tests from multiple runners, or tests that run as separate executions, into a common batch.
    
*   Disabling the Auto batch closure by defining the environment variable `APPLITOOLS_DONT_CLOSE_BATCHES` (on supported SDKs). This is useful if you want to combine tests from multiple runners, or tests that run as separate executions, into a common batch.
    
*   Manually closing the batch after it has been disabled, after all the tests have run, by using the [`close`](#close-method).
    

#### Example


The example below:

*   Assumes that automatic closing of batches has been disabled by setting the environment variable APPLITOOLS_DONT_CLOSE_BATCHES to a true value.
*   Illustrates how to manually close the batch when all tests on all runners have completed, using the method [BatchClose.close](#close-method).

Note that the batch ID of the batch being closed needs to be passed to the [BatchClose.set_batch_ids](#set_batch_ids-method) method. In this example, we assume that a batch ID was set for all of the batches by assigning a unique ID to the APPLITOOLS_BATCH_ID environment variable. This is used as a default by the [Configuration.set_batch](#batch-property) method which is set up in the suite Configuration object and then assigned to each Eyes instance.

Python

    runner = VisualGridRunner()
    #
    # After creating the runner, configure it so that won't close the batch
    #
    runner = VisualGridRunner()
    runner.dont_close_batch(True)
    #
    # Setup a common batch for all tests
    #
    batch_info = BatchInfo(batch_name)
###     batch_info.id  my_get_uniue_id()  # User defined method
    suite_config = (Configuration()  
        .set_batch(BatchInfo(batch_name))
    #
    # Assign the configuration to all newly created Eyes instances
    #
    eyes = Eyes(runner)
    eyes.set_configuration(suite_config) 
    #
    # After all the tests have completed, in all the runners
    #
    batch_id = os.getenv("APPLITOOLS_BATCH_ID")
    batch_close = BatchClose()
    batch_close.setBatchId(batch_id).close()



### BatchClose method


To manually close a batch, instantiate an object of this class and then call [BatchClose.set_batch_ids](#set_batch_ids-method) followed by [BatchClose.close](#close-method) in a fluent method style - see the example below.

#### Syntax


    obj = BatchClose()
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  None



### api_key property
#### Syntax


    obj.api_key  = value
    value = obj.api_key
    

Type: Text

A string that is your API Key.


### close method
#### Syntax


    obj.close()

#### Parameters

This method does not take any parameters.

#### Return value

Type: 


### set_api_key method
#### Syntax


    value = obj.set_api_key(api_key)
    obj.api_key  = value
    value = obj.api_key
    

Note that this feature is available as both a method and a property.

#### Parameters

api_key

Type: Text

A string that is your API Key.

#### Return value

Type:  [BatchClose](./batchclose)

The object that called this method. This allows other methods of this class to be appended in a Fluent style.

### set_batch_ids method

When closing a batch manually, this call is typically followed by a call to the method [BatchClose.close](#close-method).

#### Syntax


    value = obj.set_batch_ids(ids)
    

#### Parameters

ids

Type: Union\[Text,List\[Text\]\]

One or more batches to be closed.

#### Return value

Type:  _EnabledBatchClose

The returned object is an instance of a class inherited from BatchClose. This is to ensure that you only call [BatchClose.close](#close-method) if you've set the batch ID by calling [set_batch_ids](#)



### set_proxy method
#### Syntax


    value = obj.set_proxy(proxy)
    obj.proxy  = value
    value = obj.proxy
    

Note that this feature is available as both a method and a property.

#### Parameters

proxy

Type: [ProxySettings](./proxysettings)

An object that defines how to interact with the proxy server.

#### Return value

Type:  [BatchClose](./batchclose)

### set_url method
#### Syntax


    value = obj.set_url(url)
    

#### Parameters

url

Type: Text

The URL of the Eyes server.

#### Return value

Type:  [BatchClose](./batchclose)

The object that called this method. This allows other methods of this class to be appended in a Fluent style.

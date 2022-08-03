# BatchInfo class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Python</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/python/batchinfo'>Selenium Python</a>
<a href='../../selenium/java/batchinfo'>Selenium Java</a>
<a href='../../selenium/python_sdk4/batchinfo'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/batchinfo'>Selenium Csharp</a>
<a href='../../imagesappkit/objectivec/batchinfo'>Imagesappkit Objectivec</a>
<a href='../../puppeteer/javascript/batchinfo'>Puppeteer Javascript</a>
<a href='../../images/java/batchinfo'>Images Java</a>
<a href='../../images/python_sdk4/batchinfo'>Images Python_sdk4</a>
<a href='../../images/csharp/batchinfo'>Images Csharp</a>
<a href='../../images/javascript/batchinfo'>Images Javascript</a>
<a href='../../images/objectivec/batchinfo'>Images Objectivec</a>
<a href='../../selenium4/javascript/batchinfo'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/batchinfo'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/batchinfo'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/batchinfo'>Nightwatch Javascript</a>
<a href='../../xcui/objectivec/batchinfo'>Xcui Objectivec</a>
<a href='../../protractor/javascript/batchinfo'>Protractor Javascript</a>
<a href='../../appium/java/batchinfo'>Appium Java</a>
<a href='../../appium/csharp/batchinfo'>Appium Csharp</a>
<a href='../../wdiogeneric/javascript/batchinfo'>Wdiogeneric Javascript</a>
<a href='../../espresso/java/batchinfo'>Espresso Java</a>
</div></div><br /><br /></div>




Call the [Eyes.batch](#batch-property) property with an object of this class to configure the batch for one or more tests.

See [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.

Import statement

    from from applitools.selenium import Eyes, Target,from applitools.selenium.visual_grid import VisualGridRunner import BatchInfo
    	



### BatchInfo method
#### Syntax


    batch_info = BatchInfo(name, started_at)
    
    batch_info = BatchInfo(name)
    
    batch_info = BatchInfo()
    

#### Parameters

name

Type: Text \[Optional : default = None \]

The name of the batch. If a `None` is passed then the name will be taken from the environment variable APPLITOOLS_BATCH_NAME. If the environment variable is not defined then the name of the first test is used as the batch name.

started_at

Type: datetime \[Optional : default = None \]

The date and time that will be displayed in the Test Manager as the batch start time.

#### Return value

Type:  [BatchInfo](./batchinfo)


### id property
#### Syntax


    batch_info.id  = value
    value = batch_info.id
    

Type: Text

The unique id of the batch. If not passed, or passed as None, and the environment variable APPLITOOLS_BATCH_ID is defined, then the value of the environment variable will be used as the id. If the environment variable is not defined then a unique internal id will be generated and used.

#### Remarks


If the id is not set, and the environment variable APPLITOOLS_BATCH_ID is defined, then its value will be used as the id. If the environment variable is not defined, then an internal unique id will be generated and used. Since this value is unique for each test run, if you don't set the id explicitly you can only batch tests that run in the current test run.

### name property
#### Syntax


    batch_info.name  = value
    value = batch_info.name
    

Type: Text

The name of the batch.

### started_at property
#### Syntax


    batch_info.started_at  = value
    value = batch_info.started_at
    

Type: datetime

The date and time that will be displayed in the Test Manager as the batch start time.

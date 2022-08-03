# BatchInfo class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Python_sdk4</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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




Call the [Configuration.set_batch](#batch-property) method or [Eyes.batch](#batch-property) property with an object of this class to configure the batch for one or more tests.

See [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.

Import statement

    from applitools.selenium import BatchInfo
    	



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

Type:  None


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

### notify_on_completion property
#### Syntax


    batch_info.notify_on_completion  = value
    value = batch_info.notify_on_completion
    

Type: bool

If this value is True then a notification will be sent.

### properties property
#### Syntax


    batch_info.properties  = value
    value = batch_info.properties
    

Type: List\[Dict\[Text,Text\]\]

Pass one or more name/valjue pairs.

#### Remarks


*   Call this method after creating the [BatchInfo](./batchinfo) object and before using the [Eyes.batch](#batch-property) or [Configuration.set_batch](#batch-property) method to associate the batch with the test (before the test is started).
*   Set multiple properties by calling [BatchInfo.add_property](#add_property-method) multiple times with the same property name and different values.
*   You should not assign a given value to a property more than once in a given batch run.
*   You can also associate properties with a specific test using [Configuration.add_property](./configuration#add_property-method) or [Configuration.properties](#properties-property).

### name property

#### Syntax


    //typical code sequence using sequence_name
    Batchinfo batchInfo = new BatchInfo()
    batchInfo.name = 'my batch name'
    batchInfo.sequence_name = 'My sequence name'
    eyes.batch = batchInfo

Type: Text

The name to be assigned to the batch sequence

#### Remarks


If you do not set this attribute and the environment variable APPLITOOLS_BATCH_SEQUENCE is defined, then the value of the environment variable will be used as the sequence name. If the environment variable is not defined, then the batch will not be associated with any sequence name.

### started_at property
#### Syntax


    batch_info.started_at  = value
    value = batch_info.started_at
    

Type: datetime

The date and time that will be displayed in the Test Manager as the batch start time.


### add_property method
#### Syntax


    value = batch_info.add_property(name, value)
    

#### Parameters

name

Type: Text

The name of the property.

value

Type: Text

The value to be associated with this property.

#### Return value

Type:  [BatchInfo](./batchinfo)

#### Remarks


*   Call this method after creating the [BatchInfo](./batchinfo) object and before using the [Eyes.batch](#batch-property) or [Configuration.set_batch](#batch-property) method to associate the batch with the test (before the test is started).
*   Set multiple properties by calling [BatchInfo.add_property](#) multiple times with the same property name and different values.
*   You should not assign a given value to a property more than once in a given batch run.
*   You can also associate properties with a specific test using [Configuration.add_property](./configuration#add_property-method) or [Configuration.properties](#properties-property).

### with_batch_id method
#### Syntax


    value = batch_info.with_batch_id(id)
    

#### Parameters

id

Type: Text

The unique id of the batch. If not passed, or passed as None, and the environment variable APPLITOOLS_BATCH_ID is defined, then the value of the environment variable will be used as the id. If the environment variable is not defined then a unique internal id will be generated and used.

#### Return value

Type:  [BatchInfo](./batchinfo)

#### Remarks


This command is intended for use instead of the [id](#id-property) property. It can be called as part of the constructor of the Batchinfo object as shown in the syntax section.

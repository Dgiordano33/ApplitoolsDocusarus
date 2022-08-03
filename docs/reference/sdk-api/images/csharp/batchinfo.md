# BatchInfo class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
</div><div class='platform-bar-div'>Language: <b>Csharp</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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




Call the [Configuration.SetBatch](./configuration#setbatch-method) method or [Eyes.Batch](./eyes#batch-property) property with an object of this class to configure the batch for one or more tests.

See [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.

Using statement

    using Applitools;
    	



### BatchInfo method
#### Syntax


    BatchInfo batchInfo = new BatchInfo(name, startedAt);
    
    BatchInfo batchInfo = new BatchInfo(name);
    
    BatchInfo batchInfo = new BatchInfo();
    

#### Parameters

name

Type: string

The name of the batch. If a `null` is passed then the name will be taken from the environment variable APPLITOOLS_BATCH_NAME. If the environment variable is not defined then the name of the first test is used as the batch name.

startedAt

Type: DateTimeOffset

The date and time that will be displayed in the Test Manager as the batch start time.

#### Return value

Type:  [BatchInfo](./batchinfo)


### Id property
#### Syntax


    string value; // give relevant initial value
    batchInfo.Id  = value;
    value = batchInfo.Id

Type: string

#### Remarks


If the id is not set, and the environment variable APPLITOOLS_BATCH_ID is defined, then its value will be used as the id. If the environment variable is not defined, then an internal unique id will be generated and used. Since this value is unique for each test run, if you don't set the id explicitly you can only batch tests that run in the current test run.

### Name property
#### Syntax


    string value; // give relevant initial value
    batchInfo.Name  = value;
    value = batchInfo.Name

Type: string

### NotifyOnCompletion property
#### Syntax


    bool value; // give relevant initial value
    batchInfo.NotifyOnCompletion  = value;
    value = batchInfo.NotifyOnCompletion

Type: bool

### Properties property
#### Syntax


    PropertiesCollection value; // give relevant initial value
    batchInfo.Properties  = value;
    value = batchInfo.Properties

Type: [PropertiesCollection](./propertiescollection)

#### Remarks


*   Call this method after creating the [BatchInfo](./batchinfo) object and before using the [Eyes.Batch](./eyes#batch-property) or [Configuration.SetBatch](./configuration#setbatch-method) method to associate the batch with the test (before the test is started).
*   Set multiple properties by calling [BatchInfo.AddProperty](./batchinfo#addproperty-method) multiple times with the same property name and different values.
*   You should not assign a given value to a property more than once in a given batch run.

### Name property

#### Syntax


    //typical code sequence using SequenceName
    Batchinfo batchInfo = new BatchInfo('my batch name')
    batchInfo.SequenceName = 'My sequence name';
    eyes.Batch = batchInfo

Type: string

#### Remarks


If you do not set this attribute and the environment variable APPLITOOLS_BATCH_SEQUENCE is defined, then the value of the environment variable will be used as the sequence name. If the environment variable is not defined, then the batch will not be associated with any sequence name.

### StartedAt property
#### Syntax


    DateTimeOffset value; // give relevant initial value
    batchInfo.StartedAt  = value;
    value = batchInfo.StartedAt

Type: DateTimeOffset


### AddProperty method
#### Syntax


    batchInfo.AddProperty(name, value);

#### Parameters

name

Type: string

The name of the property.

value

Type: string

The value to be associated with this property.

#### Return value

Type:  void

#### Remarks


*   Call this method after creating the [BatchInfo](./batchinfo) object and before using the [Eyes.Batch](./eyes#batch-property) or [Configuration.SetBatch](./configuration#setbatch-method) method to associate the batch with the test (before the test is started).
*   Set multiple properties by calling [BatchInfo.AddProperty](#) multiple times with the same property name and different values.
*   You should not assign a given value to a property more than once in a given batch run.

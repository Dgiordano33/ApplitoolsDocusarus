# BatchInfo class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Playwright</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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




Call the [Configuration.setBatch](./configuration#setbatch-method) method or [Eyes.setBatch](./eyes#setbatch-method) method with an object of this class to configure the batch for one or more tests.

See [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.



### BatchInfo method
#### Syntax


    //overloaded methods
    let batchinfo = new BatchInfo();
    let batchinfo = new BatchInfo(batch);
    let batchinfo = new BatchInfo(name);
    let batchinfo = new BatchInfo(name, startedat);
    let batchinfo = new BatchInfo(name, startedat, id);
    

#### Parameters

batch

Type: [BatchInfoPlain](./batchinfoplain) \[Optional \]

An object that describes te batch attributes.

name

Type: string \[Optional \]

The name of the batch. If a `null` is passed then the name will be taken from the environment variable APPLITOOLS_BATCH_NAME. If the environment variable is not defined then the name of the first test is used as the batch name.

startedAt

Type: 

    string|Date\[Optional \]

The date and time that will be displayed in the Test Manager as the batch start time.

id

Type: string \[Optional \]

The unique id of the batch. If not passed, or passed as null, and the environment variable APPLITOOLS_BATCH_ID is defined, then the value of the environment variable will be used as the id. If the environment variable is not defined then a unique internal id will be generated and used.

#### Return value

Type:  [BatchInfo](./batchinfo)


### addProperty method
#### Syntax


    let value = batchInfo.addProperty(property);
    

#### Parameters

### property

Type: [PropertyDataPlain](./propertydataplain)

The name of the property.

#### Return value

Type:  [BatchInfo](./batchinfo)

#### Remarks


*   Call this method after creating the [BatchInfo](./batchinfo) object and before using the [Eyes.setBatch](./eyes#setbatch-method) or [Configuration.setBatch](./configuration#setbatch-method) method to associate the batch with the test (before the test is started).
*   Set multiple properties by calling [BatchInfo.addProperty](#) multiple times with the same property name and different values.
*   You should not assign a given value to a property more than once in a given batch run.
*   You can also associate properties with a specific test using [Configuration.addProperty](./configuration#addproperty-method) or [Configuration.properties](#properties-property).

### getId method
#### Syntax


    let value = batchInfo.getId();
    batchInfo.id = value;
    value = batchInfo.id;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getName method
#### Syntax


    let value = batchInfo.getName();
    batchInfo.name = value;
    value = batchInfo.name;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getNotifyOnCompletion method
#### Syntax


    let value = batchInfo.getNotifyOnCompletion();
    batchInfo.notifyOnCompletion = value;
    value = batchInfo.notifyOnCompletion;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### getProperties method
#### Syntax


    let value = batchInfo.getProperties();
    batchInfo.properties = value;
    value = batchInfo.properties;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [PropertyData](./propertydata)\[\]

The returned list contains all of the name/value pairs defined for the batch. Each entry in the list is a single name/value pair.

### getSequenceName method
#### Syntax


    let value = batchInfo.getSequenceName();
    batchInfo.sequenceName = value;
    value = batchInfo.sequenceName;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  string

### getStartedAt method
#### Syntax


    let value = batchInfo.getStartedAt();
    batchInfo.startedAt = value;
    value = batchInfo.startedAt;
    

Note that this feature is available as both a method and a property.

#### Parameters

This method does not take any parameters.

#### Return value

Type: 

    Date|string

### setId method
#### Syntax


    let value = batchInfo.setId(id);
    batchInfo.id = value;
    value = batchInfo.id;
    

Note that this feature is available as both a method and a property.

#### Parameters

id

Type: string

The unique id of the batch. If not passed, or passed as null, and the environment variable APPLITOOLS_BATCH_ID is defined, then the value of the environment variable will be used as the id. If the environment variable is not defined then a unique internal id will be generated and used.

#### Return value

Type:  [BatchInfo](./batchinfo)

#### Remarks


If the id is not set, and the environment variable APPLITOOLS_BATCH_ID is defined, then its value will be used as the id. If the environment variable is not defined, then an internal unique id will be generated and used. Since this value is unique for each test run, if you don't set the id explicitly you can only batch tests that run in the current test run.

### setName method
#### Syntax


    let value = batchInfo.setName(name);
    batchInfo.name = value;
    value = batchInfo.name;
    

Note that this feature is available as both a method and a property.

#### Parameters

name

Type: string

The name of the batch.

#### Return value

Type:  [BatchInfo](./batchinfo)

### setNotifyOnCompletion method
#### Syntax


    let value = batchInfo.setNotifyOnCompletion(notifyOnCompletion);
    batchInfo.notifyOnCompletion = value;
    value = batchInfo.notifyOnCompletion;
    

Note that this feature is available as both a method and a property.

#### Parameters

notifyOnCompletion

Type: boolean

If this value is true then a notification will be sent.

#### Return value

Type:  [BatchInfo](./batchinfo)

### setProperties method
#### Syntax


    let value = batchInfo.setProperties(properties);
    batchInfo.properties = value;
    value = batchInfo.properties;
    

Note that this feature is available as both a method and a property.

#### Parameters

properties

Type: [PropertyDataPlain](./propertydataplain)\[\]

Pass one or more name/valjue pairs.

#### Return value

Type:  [BatchInfo](./batchinfo)

#### Remarks


*   Call this method after creating the [BatchInfo](./batchinfo) object and before using the [Eyes.setBatch](./eyes#setbatch-method) or [Configuration.setBatch](./configuration#setbatch-method) method to associate the batch with the test (before the test is started).
*   Set multiple properties by calling [BatchInfo.addProperty](./batchinfo#addproperty-method) multiple times with the same property name and different values.
*   You should not assign a given value to a property more than once in a given batch run.
*   You can also associate properties with a specific test using [Configuration.addProperty](./configuration#addproperty-method) or [Configuration.properties](#properties-property).

### setSequenceName method
#### Syntax


    //typical code sequence using setSequenceName
    let batchInfo = new BatchInfo("my batch name");
    let sequenceName = "My sequence name";
    batchInfo.setSequenceName(sequenceName);
    eyes.setBatch(batchInfo);
    //typical code sequence using setSequenceName
    let batchInfo = new BatchInfo("my batch name");
    let sequenceName = "My sequence name";
    batchInfo.setSequenceName;
    eyes.setBatch(batchInfo);
    //typical code sequence using setSequenceName
    let batchInfo = new BatchInfo("my batch name");
    let sequenceName = "My sequence name";
    batchInfo.setSequenceName;
    eyes.setBatch(batchInfo);
    

Note that this feature is available as both a method and a property.

#### Parameters

sequenceName

Type: string

The name to be assigned to the batch sequence

#### Return value

Type:  [BatchInfo](./batchinfo)

#### Remarks


If you do not set this attribute and the environment variable APPLITOOLS_BATCH_SEQUENCE is defined, then the value of the environment variable will be used as the sequence name. If the environment variable is not defined, then the batch will not be associated with any sequence name.


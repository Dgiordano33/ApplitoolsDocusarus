# BatchInfo class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
</div><div class='platform-bar-div'>Language: <b>Java</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

Import statement

    import com.applitools.eyes.BatchInfo;
    	



### BatchInfo method
#### Syntax


    BatchInfo batchInfo = new BatchInfo(name, startedAt);
    
    BatchInfo batchInfo = new BatchInfo();
    
    BatchInfo batchInfo = new BatchInfo(name);
    

#### Parameters

name

Type: String

The name of the batch. If a `null` is passed then the name will be taken from the environment variable APPLITOOLS_BATCH_NAME. If the environment variable is not defined then the name of the first test is used as the batch name.

startedAt

Type: Calendar

The date and time that will be displayed in the Test Manager as the batch start time.

#### Return value

Type:  [BatchInfo](./batchinfo)


### addProperty method
#### Syntax


    BatchInfo value = batchInfo.addProperty(name, value);
    

#### Parameters

name

Type: String

The name of the property.

value

Type: String

The value to be associated with this property.

#### Return value

Type:  [BatchInfo](./batchinfo)

#### Remarks


*   Call this method after creating the [BatchInfo](./batchinfo) object and before using the [Eyes.setBatch](./eyes#setbatch-method) or [Configuration.setBatch](./configuration#setbatch-method) method to associate the batch with the test (before the test is started).
*   Set multiple properties by calling [BatchInfo.addProperty](#) multiple times with the same property name and different values.
*   You should not assign a given value to a property more than once in a given batch run.

### getId method
#### Syntax


    String value = batchInfo.getId();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getName method
#### Syntax


    String value = batchInfo.getName();
    

Note: This method is a static method.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getProperties method
#### Syntax


    List<Map<String, String>> value = batchInfo.getProperties();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  List<Map<String, String>>

The returned list contains all of the name/value pairs defined for the batch. Each entry in the list is a single name/value pair.

### getSequenceName method
#### Syntax


    String value = batchInfo.getSequenceName();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  String

### getStartedAt method
#### Syntax


    Calendar value = batchInfo.getStartedAt();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  Calendar

### isNotifyOnCompletion method
#### Syntax


    boolean value = batchInfo.isNotifyOnCompletion();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  boolean

### setId method
#### Syntax


    batchInfo.setId(id);

#### Parameters

id

Type: String

The unique id of the batch. If not passed, or passed as null, and the environment variable APPLITOOLS_BATCH_ID is defined, then the value of the environment variable will be used as the id. If the environment variable is not defined then a unique internal id will be generated and used.

#### Return value

Type:  void

#### Remarks


If the id is not set, and the environment variable APPLITOOLS_BATCH_ID is defined, then its value will be used as the id. If the environment variable is not defined, then an internal unique id will be generated and used. Since this value is unique for each test run, if you don't set the id explicitly you can only batch tests that run in the current test run.

### setNotifyOnCompletion method
#### Syntax


    batchInfo.setNotifyOnCompletion(notifyOnCompletion);

#### Parameters

notifyOnCompletion

Type: boolean

If this value is true then a notification will be sent.

#### Return value

Type:  void

### setSequenceName method
#### Syntax


    //typical code sequence using setSequenceName
    Batchinfo batchInfo = new BatchInfo('my batch name');
    String sequenceName = 'My sequence name';
    batchInfo.setSequenceName(sequenceName);
    eyes.setBatch(batchInfo);

#### Parameters

sequenceName

Type: String

The name to be assigned to the batch sequence

#### Return value

Type:  void

#### Remarks


If you do not set this attribute and the environment variable APPLITOOLS_BATCH_SEQUENCE is defined, then the value of the environment variable will be used as the sequence name. If the environment variable is not defined, then the batch will not be associated with any sequence name.

### setStartedAt method
#### Syntax


    batchInfo.setStartedAt(startedAt);

#### Parameters

startedAt

Type: String

The date and time that will be displayed in the Test Manager as the batch start time.

#### Return value

Type:  void

### withBatchId method
#### Syntax


    eyes.setBatch(new BatchInfo(name).withBatchId('myId');

#### Parameters

id

Type: String

The unique id of the batch. If not passed, or passed as null, and the environment variable APPLITOOLS_BATCH_ID is defined, then the value of the environment variable will be used as the id. If the environment variable is not defined then a unique internal id will be generated and used.

#### Return value

Type:  [BatchInfo](./batchinfo)

#### Remarks


This command is intended for use instead of the [setId](./batchinfo#setid-method) method. It can be called as part of the constructor of the Batchinfo object as shown in the syntax section.

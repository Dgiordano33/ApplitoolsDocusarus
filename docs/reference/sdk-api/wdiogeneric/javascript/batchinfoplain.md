# BatchInfoPlain class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Wdiogeneric</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../puppeteer/javascript/batchinfoplain'>Puppeteer Javascript</a>
<a href='../../selenium4/javascript/batchinfoplain'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/batchinfoplain'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/batchinfoplain'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/batchinfoplain'>Nightwatch Javascript</a>
<a href='../../protractor/javascript/batchinfoplain'>Protractor Javascript</a>
<a href='../../wdiogeneric/javascript/batchinfoplain'>Wdiogeneric Javascript</a>
</div></div><br /><br /></div>




Call the [Configuration.setBatch](./configuration#setbatch-method) method or [Eyes.setBatch](./eyes#setbatch-method) method with an object of this type to configure the batch for one or more tests.

See [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.


### id property
#### Syntax


    batchInfo = { id: value_string };
    

Type: string

The unique id of the batch. If not passed, or passed as null, and the environment variable APPLITOOLS_BATCH_ID is defined, then the value of the environment variable will be used as the id. If the environment variable is not defined then a unique internal id will be generated and used.

#### Remarks


If the id is not set, and the environment variable APPLITOOLS_BATCH_ID is defined, then its value will be used as the id. If the environment variable is not defined, then an internal unique id will be generated and used. Since this value is unique for each test run, if you don't set the id explicitly you can only batch tests that run in the current test run.

### name property
#### Syntax


    batchInfo = { name: value_string };
    

Type: string

The name of the batch.

### notifyOnCompletion property
#### Syntax


    batchInfo = { notifyOnCompletion: value_boolean };
    

Type: boolean

If this value is true then a notification will be sent.

### properties property
#### Syntax


    batchInfo = {
      properties: [value1_PropertyDataPlain, value2_PropertyDataPlain],
    };
    

Type: [PropertyDataPlain](./propertydataplain)\[\]

Pass one or more name/valjue pairs.

#### Remarks


*   Call this method after creating the [BatchInfo](./batchinfo) object and before using the [Eyes.setBatch](./eyes#setbatch-method) or [Configuration.setBatch](./configuration#setbatch-method) method to associate the batch with the test (before the test is started).
*   Set multiple properties by calling [BatchInfo.addProperty](./batchinfo#addproperty-method) multiple times with the same property name and different values.
*   You should not assign a given value to a property more than once in a given batch run.
*   You can also associate properties with a specific test using [Configuration.addProperty](./configuration#addproperty-method) or [Configuration.properties](#properties-property).

### sequenceName property
#### Syntax


    //typical code sequence using sequenceName
    let batchInfo = { name: "myBatchName", sequenceName: "mySequenceName" };
    eyes.setBatch(batchInfo);
    

Type: string

The name to be assigned to the batch sequence

#### Remarks


If you do not set this attribute and the environment variable APPLITOOLS_BATCH_SEQUENCE is defined, then the value of the environment variable will be used as the sequence name. If the environment variable is not defined, then the batch will not be associated with any sequence name.

### startedAt property
#### Syntax


    batchInfo = { startedAt: value };
    

Type: 

    Date|string

The date and time that will be displayed in the Test Manager as the batch start time.

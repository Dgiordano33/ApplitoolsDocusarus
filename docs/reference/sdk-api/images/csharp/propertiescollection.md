# PropertiesCollection class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
</div><div class='platform-bar-div'>Language: <b>Csharp</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/csharp/propertiescollection'>Selenium Csharp</a>
<a href='../../images/csharp/propertiescollection'>Images Csharp</a>
<a href='../../appium/csharp/propertiescollection'>Appium Csharp</a>
</div></div><br /><br /></div>




A collection of key/value pairs.

Using statement

    using Applitools;
    	


### Add method
#### Syntax


    obj.Add(name, value);

#### Parameters

name

Type: string

The property key.

value

Type: string

The property value.

#### Return value

Type:  void

### Clear method
#### Syntax


    obj.Clear();

#### Parameters

This method does not take any parameters.

#### Return value

Type:  void

### GetEnumerator method
#### Syntax


    IEnumerator<PropertyData> value = obj.GetEnumerator();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  IEnumerator<[PropertyData](./propertydata)\>

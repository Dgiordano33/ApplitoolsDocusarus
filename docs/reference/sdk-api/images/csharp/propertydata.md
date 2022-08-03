# PropertyData class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
</div><div class='platform-bar-div'>Language: <b>Csharp</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/csharp/propertydata'>Selenium Csharp</a>
<a href='../../puppeteer/javascript/propertydata'>Puppeteer Javascript</a>
<a href='../../images/csharp/propertydata'>Images Csharp</a>
<a href='../../images/javascript/propertydata'>Images Javascript</a>
<a href='../../selenium4/javascript/propertydata'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/propertydata'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/propertydata'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/propertydata'>Nightwatch Javascript</a>
<a href='../../protractor/javascript/propertydata'>Protractor Javascript</a>
<a href='../../appium/java/propertydata'>Appium Java</a>
<a href='../../appium/csharp/propertydata'>Appium Csharp</a>
<a href='../../wdiogeneric/javascript/propertydata'>Wdiogeneric Javascript</a>
</div></div><br /><br /></div>




A test property is a user-defined name/value pair that you can associate with a test. You can [view](https://applitools.com/docs/topics/test-manager/viewers/tm-viewer-test-details.html) these properties as well as [filter](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-filter.html) and [group](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-grouping.html) by these properties in the Test Manager. You can set properties using the [Eyes.AddProperty](./eyes#addproperty-method) method.

Using statement

    using Applitools;
    	



### PropertyData method
#### Syntax


    PropertyData obj = new PropertyData(name, value);
    

#### Parameters

name

Type: string

The name of the property.

value

Type: string

The value of the property.

#### Return value

Type:  [PropertyData](./propertydata)


### Name property
#### Syntax


    string value; // give relevant initial value
    obj.Name  = value;
    value = obj.Name

Type: string

### Value property
#### Syntax


    string value; // give relevant initial value
    obj.Value  = value;
    value = obj.Value

Type: string

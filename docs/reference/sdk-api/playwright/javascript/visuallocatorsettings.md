# VisualLocatorSettings class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Playwright</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/visuallocatorsettings'>Selenium Java</a>
<a href='../../selenium/python_sdk4/visuallocatorsettings'>Selenium Python_sdk4</a>
<a href='../../puppeteer/javascript/visuallocatorsettings'>Puppeteer Javascript</a>
<a href='../../selenium4/javascript/visuallocatorsettings'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/visuallocatorsettings'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/visuallocatorsettings'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/visuallocatorsettings'>Nightwatch Javascript</a>
<a href='../../protractor/javascript/visuallocatorsettings'>Protractor Javascript</a>
<a href='../../appium/java/visuallocatorsettings'>Appium Java</a>
<a href='../../wdiogeneric/javascript/visuallocatorsettings'>Wdiogeneric Javascript</a>
</div></div><br /><br /></div>




Use the fields of this object to defined the locator names and whether all instances should be found or only the first.


### firstOnly property
#### Syntax


    let names_A = ["locator_1a", "locator_1b", "locator_1c"];
    let locRegions5 = await eyes.locate({
      settings: { locatorNames: names_A, firstOnly: true },
    });
    

Type: boolean

#### Example


JavaScript

    //return a zero or one locator for each of the three locators defined as parameters to name()
    let locRegions8 = await eyes.locate( {settings : {locatorNames:["locator_a","locator_b","locator_b"],firstOnly:true}});
      
    //return all the locator found for the locators defined in the lists passed to names() or Strings passed to name()                   
    let locRegions9 = await eyes.locate( {settings : {locatorNames:["locator_a","locator_b","locator_b"],firstOnly:false}});
    //loop through all the locators and click on the center of their region
    for (let locator in locRegions9) {
        let regionArray = locRegions9[locator];
        for (let region in regionArray) {
            click(region.x + region.width/2, region.y + region.height/2);
        }
    };

### locatorNames property
#### Syntax


    obj = { locatorNames: [value1_string, value2_string] };
    

Type: string\[\]

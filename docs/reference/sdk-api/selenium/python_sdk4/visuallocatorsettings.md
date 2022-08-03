# VisualLocatorSettings class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Python_sdk4</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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




Use the methods of this class to extend visual locators created using [VisualLocator](./visuallocator) by chaining them to each other using a fluent style API.

After you call one of the methods of [VisualLocator](./visuallocator) you can call methods in this class to add more locator names and to specify how many regions to return to [Eyes.locate](#locate-method).

Import statement

    from applitools.core import VisualLocatorSettings
    	


### all method
#### Syntax


    names_a = ["locator_1a", "locator_1b", "locator_1c"]
    loc_regions_4 = eyes.locate(VisualLocator.names(names_a).all())  

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [VisualLocatorSettings](./visuallocatorsettings)

The method returns an object of type [VisualLocatorSettings](./visuallocatorsettings). You can chain additional calls to methods of this class in a fluent style, including [name](#name-method) or [names](#names-method) to add more locator names, and [first](#first-method) or [all](#) to define if you want only the first instance of each locator or all the locators found.

#### Remarks


The article [Visual locators](https://applitools.com/docs/features/visual-locators.html) describes in detail how to associate locator names with graphic images and how to search for instances of the graphic in the browser viewport. The example below is a briefer description of how to search for instances of the locator graphics.

#### Example


The example below includes two calls to the method [Eyes.locate](#locate-method). These calls illustrate two ways to specify the visual locators and two ways to specify how many locators to return.

Two ways of specifying visual locators are:

*   Pass a locator string to the method [name](#name-method).
*   Pass a list of strings to the method [names](#names-method).

You can call these methods multiple times to specify multiple locators names or multiple lists of locator names.

To specify how many regions to return per locator, append one of the following methods:

*   To retrieve a maximum of one region for each locator append a call to [first](#first-method).
*   To retrieve all regions for all locators append a call to ([all](#)).

Python

    # return a zero or one locator for each of the three locators defined as parameters to name()
    loc_regions_6 = eyes.locate(
        (VisualLocator.name("locator_a")
            .name("locator_b")
            .name("locator_c")
            .first()))
    # return all the locator found for the locators defined in the lists passed to names() or Strings passed to name()                   
    locator_list_1 = ["locator_1a", "locator_1b", "locator_1c"]
    locator_list_2 = ["locator_2a", "locator_2b", "locator_2c"]
    loc_regions_7 = eyes.locate(
        (VisualLocator.names(locator_list_1)
            .names(locator_list_1)
            .name("another locator")
            .all()))
    
    locators_regions = eyes.locate(VisualLocator.names(["locator_a", "locator_b", "locator_c"]).all())
    # Loop through all the locators and click on the center of their region
    for locator_info in locators_regions:
        for locator, region in locator_info:
            x = region.left + region.width/2
            y = region.top + region.height/2
            print("loc = ", locator, " x = ", x, " y = ", y)

//...

### first method
#### Syntax


    names_a = ["locator_1a", "locator_1b", "locator_1c"]
    loc_regions_5 = eyes.locate(VisualLocator.names(names_a).first())  

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [VisualLocatorSettings](./visuallocatorsettings)

The method returns an object of type [VisualLocatorSettings](./visuallocatorsettings). You can chain additional calls to methods of this class in a fluent style, including [name](#name-method) or [names](#names-method) to add more locator names, and [first](#) or [all](#all-method) to define if you want only the first instance of each locator or all the locators found.

#### Remarks


The article [Visual locators](https://applitools.com/docs/features/visual-locators.html) describes in detail how to associate locator names with graphic images and how to search for instances of the graphic in the browser viewport. The example below is a briefer description of how to search for instances of the locator graphics.


### name method
#### Syntax


    loc_regions_7 = eyes.locate(VisualLocator.name("locator_b").name("locator_a"))  

#### Parameters

name

Type: Text

The name of the locator.

#### Return value

Type:  [VisualLocatorSettings](./visuallocatorsettings)

The method returns an object of type [VisualLocatorSettings](./visuallocatorsettings). You can chain additional calls to methods of this class in a fluent style, including [name](#) or [names](#names-method) to add more locator names, and [first](#first-method) or [all](#all-method) to define if you want only the first instance of each locator or all the locators found.

#### Remarks


The article [Visual locators](https://applitools.com/docs/features/visual-locators.html) describes in detail how to associate locator names with graphic images and how to search for instances of the graphic in the browser viewport. The example below is a briefer description of how to search for instances of the locator graphics.


### names method
#### Syntax


    names_a = ["locator_1a", "locator_1b", "locator_1c"]
    names_b = ["locator_2a", "locator_2b", "locator_2c"]
    loc_regions_6 = eyes.locate(VisualLocator.names(names_a).names(names_b))  

#### Parameters

names

Type: Union\[Text,List\[Text\]\]

A list of locator names.

#### Return value

Type:  [VisualLocatorSettings](./visuallocatorsettings)

The method returns an object of type [VisualLocatorSettings](./visuallocatorsettings). You can chain additional calls to methods of this class in a fluent style, including [name](#name-method) or [names](#) to add more locator names, and [first](#first-method) or [all](#all-method) to define if you want only the first instance of each locator or all the locators found.

#### Remarks


The article [Visual locators](https://applitools.com/docs/features/visual-locators.html) describes in detail how to associate locator names with graphic images and how to search for instances of the graphic in the browser viewport. The example below is a briefer description of how to search for instances of the locator graphics.
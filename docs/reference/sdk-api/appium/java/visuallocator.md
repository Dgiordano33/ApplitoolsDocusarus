# VisualLocator class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Appium</b>
</div><div class='platform-bar-div'>Language: <b>Java</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/visuallocator'>Selenium Java</a>
<a href='../../selenium/python_sdk4/visuallocator'>Selenium Python_sdk4</a>
<a href='../../appium/java/visuallocator'>Appium Java</a>
</div></div><br /><br /></div>




Use the methods of this class to create visual locators that can be passed to [Eyes.locate](#locate-method) to find regions in the viewport with the images defined by the visual locaters.

The return value of the methods of this class are objects of the class [VisualLocatorSettings](./visuallocatorsettings). You can call one or more [VisualLocatorSettings](./visuallocatorsettings) methods, chained in a fluent style to add more locator names and to define how many locators to return.

Import statement

    import com.applitools.eyes.locators.VisualLocator;
    	


### name method
#### Syntax


    Map<String, List<Region>> locRegions2 = eyes.locate(VisualLocator.name("locator_a")); 

Note: This method is a static method.

#### Parameters

name

Type: String

The name of the locator.

#### Return value

Type:  [VisualLocatorSettings](./visuallocatorsettings)

The method returns an object of type [VisualLocatorSettings](./visuallocatorsettings). You can chain additional calls to methods of this class in a fluent style, including [name](#name-method) or [names](#names-method) to add more locator names, and [first](#first-method) or [all](#all-method) to define if you want only the first instance of each locator or all the locators found.

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
*   To retrieve all regions for all locators append a call to ([all](#all-method)).

Java

    //return a zero or one locator for each of the three locators defined as parameters to name()
    Map<String, List<Region>> locRegions8 = eyes.locate(
        VisualLocator.name("locator_a")
                     .name("locator_b")
                     .name("locator_c")
                     .first()); 
           
    //return all the locator found for the locators defined in the lists passed to names() or Strings passed to name()                   
    List<String> locatorList1 = Arrays.asList(new String[]{"locator_1a", "locator_1b", "locator_1c"});
    List<String> locatorList2 = Arrays.asList(new String[]{"locator_2a", "locator_2b", "locator_2c"});
    Map<String, List<Region>> locRegions9 = eyes.locate(
        VisualLocator.names(locatorList1)
                     .names(locatorList2)
                     .name("another locator")
                     .all());
    //loop through all the locators and click on the center of their region
    locRegions7.forEach((locator,regions)-> {
        for (Region region : regions) {
            click(region.getLeft()+region.getWidth()/2, region.getTop()+region.getHeight()/2);
        }
    });

//...

### names method
#### Syntax


    List<String> names_A = Arrays.asList(new String[]{"locator_1a", "locator_1b", "locator_1c"});
    Map<String, List<Region>> locRegions3 = eyes.locate(VisualLocator.names(names_A)); 

Note: This method is a static method.

#### Parameters

names

Type: List`<String>`

A list of locator names.

#### Return value

Type:  [VisualLocatorSettings](./visuallocatorsettings)

The method returns an object of type [VisualLocatorSettings](./visuallocatorsettings). You can chain additional calls to methods of this class in a fluent style, including [name](#name-method) or [names](#names-method) to add more locator names, and [first](#first-method) or [all](#all-method) to define if you want only the first instance of each locator or all the locators found.

#### Remarks


The article [Visual locators](https://applitools.com/docs/features/visual-locators.html) describes in detail how to associate locator names with graphic images and how to search for instances of the graphic in the browser viewport. The example below is a briefer description of how to search for instances of the locator graphics.

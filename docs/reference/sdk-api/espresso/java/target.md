# Target class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Espresso</b>
</div><div class='platform-bar-div'>Language: <b>Java</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/python/target'>Selenium Python</a>
<a href='../../selenium/java/target'>Selenium Java</a>
<a href='../../selenium/python_sdk4/target'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/target'>Selenium Csharp</a>
<a href='../../selenium/javascript/target'>Selenium Javascript</a>
<a href='../../imagesappkit/objectivec/target'>Imagesappkit Objectivec</a>
<a href='../../puppeteer/javascript/target'>Puppeteer Javascript</a>
<a href='../../images/java/target'>Images Java</a>
<a href='../../images/python_sdk4/target'>Images Python_sdk4</a>
<a href='../../images/csharp/target'>Images Csharp</a>
<a href='../../images/javascript/target'>Images Javascript</a>
<a href='../../images/objectivec/target'>Images Objectivec</a>
<a href='../../selenium4/javascript/target'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/target'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/target'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/target'>Nightwatch Javascript</a>
<a href='../../xcui/objectivec/target'>Xcui Objectivec</a>
<a href='../../protractor/javascript/target'>Protractor Javascript</a>
<a href='../../appium/java/target'>Appium Java</a>
<a href='../../appium/csharp/target'>Appium Csharp</a>
<a href='../../wdiogeneric/javascript/target'>Wdiogeneric Javascript</a>
<a href='../../espresso/java/target'>Espresso Java</a>
</div></div><br /><br /></div>




This class provides methods that are used to define the top level target (the entire window, region, element, frame, etc.) for the [check](#check-method) method.

Once you create a [EspressoCheckSettings](./checksettings) object using one of the factory methods defined by this class, you can configure the checkpoint by calling other methods from the [EspressoCheckSettings](./checksettings) class, chaining them one after the other using the '.' operator.

Import statement

    import com.applitools.eyes.android.espresso.fluent.Target;
    	


### fragment method
#### Syntax


    eyes.check(Target.fragment())

Note: This method is a static method.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [EspressoCheckSettings](./checksettings)

#### Remarks


The id of the fragment should be provided by the Fluent method [id](#id-method)(), for example:

    eyes.check(Target.fragment().id(fragId));

### Handling popups and dialogs

If your checkpoints includes a popup or dialog then the way you create the checkpoint depends on which layers you want to capture as illustrated in the code below:

    
    eyes.check('viewport only', Target.window()); 
    eyes.check('dialog only',Target.window().dialog()); 
    eyes.check('popup only',Target.window().popup());
    eyes.check('viewport and popup or dialog',Target.window().includeAllLayers()); 
    

The example illustrate the behavior with a [Target.window](#window-method) target, but they apply to a [Target.region](#region-method), [Target.googleMap](./target#googlemap-method) or [Target.fragment](#) as well.

### googleMap method
#### Syntax


    eyes.check(Target.googleMap().id(mapId);

Note: This method is a static method.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [EspressoCheckSettings](./checksettings)

#### Remarks


The id of the googlemap should be provided by the Fluent method [id](#id-method)(), for example:

    eyes.check(Target.googleMap().id(mapId)If the googleMap is not of the type `SupportMapFragment` then you should also call [isNotSupportGoogleMap](./checksettings#isnotsupportgooglemap-method).

    eyes.check(Target.googleMap().id(mapId).isNotSupportGoogleMap();

### Handling popups and dialogs

If your checkpoints includes a popup or dialog then the way you create the checkpoint depends on which layers you want to capture as illustrated in the code below:

    
    eyes.check('viewport only', Target.window()); 
    eyes.check('dialog only',Target.window().dialog()); 
    eyes.check('popup only',Target.window().popup());
    eyes.check('viewport and popup or dialog',Target.window().includeAllLayers()); 
    

The example illustrate the behavior with a [Target.window](#window-method) target, but they apply to a [Target.region](#region-method), [Target.googleMap](#) or [Target.fragment](#fragment-method) as well.

### region method
#### Syntax


    eyes.check(Target.region(region))
    eyes.check(Target.region(matcher))
    eyes.check(Target.region(view))

Note: This method is a static method.

#### Parameters

region

Type: [Region](./region)

The region to be checked.

matcher

Type: Matcher

The Matcher types can be any of the following Hamcrest Matchers: ViewMatcher, RootMatcher, LayoutMatcher or PreferenceMatcher

view

Type: View

An instance of the Android view class

#### Return value

Type:  [EspressoCheckSettings](./checksettings)

#### Remarks


### Handling popups and dialogs

If your checkpoints includes a popup or dialog then the way you create the checkpoint depends on which layers you want to capture as illustrated in the code below:

    
    eyes.check('viewport only', Target.window()); 
    eyes.check('dialog only',Target.window().dialog()); 
    eyes.check('popup only',Target.window().popup());
    eyes.check('viewport and popup or dialog',Target.window().includeAllLayers()); 
    

The example illustrate the behavior with a [Target.window](#window-method) target, but they apply to a [Target.region](#), [Target.googleMap](./target#googlemap-method) or [Target.fragment](#fragment-method) as well.

### window method
#### Syntax


    eyes.check(Target.window())

Note: This method is a static method.

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [EspressoCheckSettings](./checksettings)

#### Remarks


### Handling popups and dialogs

If your checkpoints includes a popup or dialog then the way you create the checkpoint depends on which layers you want to capture as illustrated in the code below:

    
    eyes.check('viewport only', Target.window()); 
    eyes.check('dialog only',Target.window().dialog()); 
    eyes.check('popup only',Target.window().popup());
    eyes.check('viewport and popup or dialog',Target.window().includeAllLayers()); 
    

The example illustrate the behavior with a [Target.window](#) target, but they apply to a [Target.region](#region-method), [Target.googleMap](./target#googlemap-method) or [Target.fragment](#fragment-method) as well.

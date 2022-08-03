# EspressoCheckSettings class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Espresso</b>
</div><div class='platform-bar-div'>Language: <b>Java</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/checksettings'>Selenium Java</a>
<a href='../../selenium/python_sdk4/checksettings'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/checksettings'>Selenium Csharp</a>
<a href='../../imagesappkit/objectivec/checksettings'>Imagesappkit Objectivec</a>
<a href='../../puppeteer/javascript/checksettings'>Puppeteer Javascript</a>
<a href='../../images/java/checksettings'>Images Java</a>
<a href='../../images/python_sdk4/checksettings'>Images Python_sdk4</a>
<a href='../../images/csharp/checksettings'>Images Csharp</a>
<a href='../../images/javascript/checksettings'>Images Javascript</a>
<a href='../../images/objectivec/checksettings'>Images Objectivec</a>
<a href='../../selenium4/javascript/checksettings'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/checksettings'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/checksettings'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/checksettings'>Nightwatch Javascript</a>
<a href='../../xcui/objectivec/checksettings'>Xcui Objectivec</a>
<a href='../../protractor/javascript/checksettings'>Protractor Javascript</a>
<a href='../../appium/java/checksettings'>Appium Java</a>
<a href='../../appium/csharp/checksettings'>Appium Csharp</a>
<a href='../../wdiogeneric/javascript/checksettings'>Wdiogeneric Javascript</a>
<a href='../../espresso/java/checksettings'>Espresso Java</a>
</div></div><br /><br /></div>




The methods in this class are used as part of the [check](#check-method) Fluent API to configure and execute checkpoints.

To use these methods, first create a target object using a method from the [Target](./target) class, then call one or more of the methods in this class on the returned object, chaining them one after the other using the '.' operator.

Import statement

    import com.applitools.eyes.android.espresso.fluent.EspressoCheckSettings;
    	


### accessibility method
#### Syntax


    eyes.check(Target.window().accessibility(region, regionType))
    eyes.check(Target.window().accessibility(matcher, regionType))

#### Parameters

region

Type: [Region](./region)

An object that defines a rectangular area in the window.

regionType

Type: [AccessibilityRegionType](./accessibilityregiontype)

The accessibility type of the region.

matcher

Type: Matcher

A selector that specified one or more elements. The bounding rectangle of each element, defines an accessibility region to be analyzed.

#### Return value

Type:  ICheckSettings

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### content method
#### Syntax


    eyes.check(Target.window().content(region, regions))
    eyes.check(Target.window().content())
    eyes.check(Target.window().content(matchers))

#### Parameters

region

Type: [Region](./region)

An object that defines a rectangular area in the window.

regions

Type: [Region](./region)...

One or more region definitions.

matchers

Type: Matcher...

The Matcher types can be any of the following Hamcrest Matchers: ViewMatcher, RootMatcher, LayoutMatcher or PreferenceMatcher

#### Return value

Type:  ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You can call this method in two ways - with parameters and without parameters. The meaning of the method, and the way it can be used is different in each case. When the method is called without parameters it sets the default match level for this target. When called with one or more regions as parameters it defines the match level for that region. The sections below provide some more details regarding how to use this method in each of these modes.

### Called without parameters

If this method is called without parameters then it sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`setMatchLevel`](./eyes#setmatchlevel-method).

For a given target you may call only one of the following methods (without parameters) that set a target default match level:

*   [`matchLevel`](./checksettings#matchlevel-method)
*   [`strict`](#strict-method)
*   [`content`](#content-method)
*   [`layout`](#layout-method)
*   [`exact`](#exact-method)

### Called with parameters

When the method is called with one or more parameters that define one or more regions, then these set the match level for those regions, overiding the defaults set for the target (by calling these methods without a parameter), set by [`setMatchLevel`](./eyes#setmatchlevel-method) and the hardcoded default match level.

You may define multiple regions that have an explicit match level by calling this method multiple times in a chain, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`checksettings.strictregions (not yet available in espresso java)(regions)`](#), [`checksettings.layoutregions (not yet available in espresso java)(regions)`](#)., [`checksettings.contentregions (not yet available in espresso java)(regions)`](#) should not overlap each other or the regions defined using [`ignore(regions)`](#ignore-method). [`checksettings.ignoreregions (not yet available in espresso java)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### dialog method
#### Syntax


    eyes.check(Target.window().dialog())

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
    

The example illustrate the behavior with a [Target.window](#window-method) target, but they apply to a [Target.region](#region-method), [Target.googleMap](./target#googlemap-method) or [Target.fragment](#fragment-method) as well.

### exact method
#### Syntax


    eyes.check(Target.window().exact())

#### Parameters

This method does not take any parameters.

#### Return value

Type:  ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


This method sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`setMatchLevel`](./eyes#setmatchlevel-method).

For a given target you may call only one of the following methods that set a target default match level:

*   [`matchLevel`](./checksettings#matchlevel-method)
*   [`strict`](#strict-method)
*   [`content`](#content-method)
*   [`layout`](#layout-method)
*   [`exact`](#exact-method)

To set a match level for a one or more regions within a target use one of the following methods:

*   [`checksettings.strictregions (not yet available in espresso java)`](#)
*   [`checksettings.contentregions (not yet available in espresso java)`](#)
*   [`checksettings.layoutregions (not yet available in espresso java)`](#)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### floating method
#### Syntax


    eyes.check(Target.window().floating(maxOffset, regions))
    eyes.check(Target.window().floating(region, maxUpOffset, maxDownOffset, maxLeftOffset, maxRightOffset))

#### Parameters

maxOffset

Type: int

The maximum amount that the region can shift in any direction and still be considered matching.

regions

Type: [Region](./region)...

One or more region definitions.

region

Type: [Region](./region)

An object that defines the region.

maxUpOffset

Type: int

The maximum amount that the region can shift upwards and still be considered matching.

maxDownOffset

Type: int

The maximum amount that the region can shift downwards and still be considered matching.

maxLeftOffset

Type: int

The maximum amount that the region can shift to the left and still be considered matching.

maxRightOffset

Type: int

The maximum amount that the region can shift to the right and still be considered matching.

#### Return value

Type:  ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may call this method multiple times in a given chain; each call defines a different floating region. Floating regions may not overlap each other or other types of regions, such as ignore or match level regions.

### fully method
#### Syntax


    eyes.check(Target.window().fully())
    eyes.check(Target.window().fully(fully))

#### Parameters

fully

Type: boolean

If this parameter has a value of true, then Eyes uses scrolling and stitching to capture the entire page. If it's false, then only the viewport will be captured. If the method is called without a parameter, then the default is true.

#### Return value

Type:  [EspressoCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


This method overrides the global default or the most recent value set by the [Eyes.setForceFullPageScreenshot](./eyes#setforcefullpagescreenshot-method) method or [Configuration.setForceFullPageScreenshot](./configuration#setforcefullpagescreenshot-method) method. You may only call this method once in a given target.

### hideCaret method
#### Syntax


    eyes.check(Target.window().hideCaret())
    eyes.check(Target.window().hideCaret(hideCaret))

#### Parameters

hideCaret

Type: boolean

If this paramter has a value of true, then the cursor will be hidden before the image is captured.

#### Return value

Type:  ICheckSettings

### id method
#### Syntax


    eyes.check(Target.googleMap().id(mapId));

#### Parameters

id

Type: int

The id of the googleMap defined in the [Target.googleMap](./target#googlemap-method) or [Target.fragment](#fragment-method) methods.

#### Return value

Type:  [EspressoCheckSettings](./checksettings)

### ignore method
#### Syntax


    eyes.check(Target.window().ignore(region, regions))
    eyes.check(Target.window().ignore(matchers))

#### Parameters

region

Type: [Region](./region)

An object that defines a rectangular area in the window.

regions

Type: [Region](./region)...

One or more region definitions.

matchers

Type: Matcher...

The Matcher types can be any of the following Hamcrest Matchers: ViewMatcher, RootMatcher, LayoutMatcher or PreferenceMatcher

#### Return value

Type:  ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may call this method multiple times in a given chain.

Ignore regions should not overlap each other or other types of regions such as floating or match level regions.

### ignoreCaret method
#### Syntax


    eyes.check(Target.window().ignoreCaret(ignoreCaret))
    eyes.check(Target.window().ignoreCaret())

#### Parameters

ignoreCaret

Type: boolean

If this parameter has a value of true, then Eyes will detect artifacts caused by a blinking cursor and will not report a mismatch for differences caused by these artifacts. If it has a value of , then Eyes will not try to detect artifacts caused by blinking cursors. If no parameter is passed then the default value is true - so the cursor artifacts will be ignored.

#### Return value

Type:  ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may only call this method once in a given chain. This method overrides the global default setting or the setting chosen explicitly for the current target using [Eyes.setIgnoreCaret](./eyes#setignorecaret-method) method or [Configuration.setIgnoreCaret](./configuration#setignorecaret-method) method.

### ignoreDisplacements method
#### Syntax


    eyes.check(Target.window().ignoreDisplacements())
    eyes.check(Target.window().ignoreDisplacements(ignoreDisplacements))

#### Parameters

ignoreDisplacements

Type: boolean

If a value of true is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed.

#### Return value

Type:  ICheckSettings

#### Remarks


Ignore displacements is only active when using a Match level of [STRICT](./matchlevel) or [CONTENT](./matchlevel)

### includeAllLayers method
#### Syntax


    eyes.check(Target.window().includeAllLayers());

#### Parameters

This method does not take any parameters.

#### Return value

Type:  ICheckSettings

#### Remarks


### Handling popups and dialogs

If your checkpoints includes a popup or dialog then the way you create the checkpoint depends on which layers you want to capture as illustrated in the code below:

    
    eyes.check('viewport only', Target.window()); 
    eyes.check('dialog only',Target.window().dialog()); 
    eyes.check('popup only',Target.window().popup());
    eyes.check('viewport and popup or dialog',Target.window().includeAllLayers()); 
    

The example illustrate the behavior with a [Target.window](#window-method) target, but they apply to a [Target.region](#region-method), [Target.googleMap](./target#googlemap-method) or [Target.fragment](#fragment-method) as well.

### isNotSupportGoogleMap method
#### Syntax


    eyes.check(Target.googleMap().id(mapId).isNotSupportGoogleMap();

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [EspressoCheckSettings](./checksettings)

### layout method
#### Syntax


    eyes.check(Target.window().layout(region, regions))
    eyes.check(Target.window().layout())
    eyes.check(Target.window().layout(matchers))

#### Parameters

region

Type: [Region](./region)

An object that defines a rectangular area in the window.

regions

Type: [Region](./region)...

Zero or more additional rectangle objects separated by commas or passed as an array.

matchers

Type: Matcher...

The Matcher types can be any of the following Hamcrest Matchers: ViewMatcher, RootMatcher, LayoutMatcher or PreferenceMatcher

#### Return value

Type:  ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You can call this method in two ways - with parameters and without parameters. The meaning of the method, and the way it can be used is different in each case. When the method is called without parameters it sets the default match level for this target. When called with one or more regions as parameters it defines the match level for that region. The sections below provide some more details regarding how to use this method in each of these modes.

### Called without parameters

If this method is called without parameters then it sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`setMatchLevel`](./eyes#setmatchlevel-method).

For a given target you may call only one of the following methods (without parameters) that set a target default match level:

*   [`matchLevel`](./checksettings#matchlevel-method)
*   [`strict`](#strict-method)
*   [`content`](#content-method)
*   [`layout`](#layout-method)
*   [`exact`](#exact-method)

### Called with parameters

When the method is called with one or more parameters that define one or more regions, then these set the match level for those regions, overiding the defaults set for the target (by calling these methods without a parameter), set by [`setMatchLevel`](./eyes#setmatchlevel-method) and the hardcoded default match level.

You may define multiple regions that have an explicit match level by calling this method multiple times in a chain, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`checksettings.strictregions (not yet available in espresso java)(regions)`](#), [`checksettings.layoutregions (not yet available in espresso java)(regions)`](#)., [`checksettings.contentregions (not yet available in espresso java)(regions)`](#) should not overlap each other or the regions defined using [`ignore(regions)`](#ignore-method). [`checksettings.ignoreregions (not yet available in espresso java)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### matchLevel method
#### Syntax


    eyes.check(Target.window().matchLevel(matchLevel))

#### Parameters

matchLevel

Type: [MatchLevel](./matchlevel)

Available match level values are:

*   [NONE](./matchlevel)
*   [STRICT](./matchlevel)
*   [LAYOUT](./matchlevel)
*   [CONTENT](./matchlevel)
*   [EXACT](./matchlevel)

For a description of these match levels and the different ways to apply them to tests, checkpoints, and regions, see [Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

#### Return value

Type:  ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


The value provided here overrides the default match level, or the global value set for this target using [Eyes.setMatchLevel](./eyes#setmatchlevel-method) or [Configuration.setMatchLevel](./configuration#setmatchlevel-method). You may only call this method once in a given chain. If you call this method, then you can't call the other match level methods. [EspressoCheckSettings.strict](#strict-method)[EspressoCheckSettings.content](#content-method)[EspressoCheckSettings.layout](#layout-method)[EspressoCheckSettings.exact](#exact-method)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### popup method
#### Syntax


    eyes.check(Target.window().popup())

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
    

The example illustrate the behavior with a [Target.window](#window-method) target, but they apply to a [Target.region](#region-method), [Target.googleMap](./target#googlemap-method) or [Target.fragment](#fragment-method) as well.

### region method
#### Syntax


    eyes.check(Target.frame(frameSelector).region(region))
    eyes.check(Target.frame(frameSelector).region(matcher))

#### Parameters

region

Type: [Region](./region)

An object that defines the region.

matcher

Type: Matcher

The Matcher types can be any of the following Hamcrest Matchers: ViewMatcher, RootMatcher, LayoutMatcher or PreferenceMatcher

#### Return value

Type:  [EspressoCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


The parameter to the method specifies the region to be matched. You may only call this method once in a given chain.

### strict method
#### Syntax


    eyes.check(Target.window().strict(region, regions))
    eyes.check(Target.window().strict())
    eyes.check(Target.window().strict(matchers))

#### Parameters

region

Type: [Region](./region)

An object that defines a rectangular area in the window.

regions

Type: [Region](./region)...

One or more region definitions.

matchers

Type: Matcher...

The Matcher types can be any of the following Hamcrest Matchers: ViewMatcher, RootMatcher, LayoutMatcher or PreferenceMatcher

#### Return value

Type:  ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You can call this method in two ways - with parameters and without parameters. The meaning of the method, and the way it can be used is different in each case. When the method is called without parameters it sets the default match level for this target. When called with one or more regions as parameters it defines the match level for that region. The sections below provide some more details regarding how to use this method in each of these modes.

### Called without parameters

If this method is called without parameters then it sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`setMatchLevel`](./eyes#setmatchlevel-method).

For a given target you may call only one of the following methods (without parameters) that set a target default match level:

*   [`matchLevel`](./checksettings#matchlevel-method)
*   [`strict`](#strict-method)
*   [`content`](#content-method)
*   [`layout`](#layout-method)
*   [`exact`](#exact-method)

### Called with parameters

When the method is called with one or more parameters that define one or more regions, then these set the match level for those regions, overiding the defaults set for the target (by calling these methods without a parameter), set by [`setMatchLevel`](./eyes#setmatchlevel-method) and the hardcoded default match level.

You may define multiple regions that have an explicit match level by calling this method multiple times in a chain, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`checksettings.strictregions (not yet available in espresso java)(regions)`](#), [`checksettings.layoutregions (not yet available in espresso java)(regions)`](#)., [`checksettings.contentregions (not yet available in espresso java)(regions)`](#) should not overlap each other or the regions defined using [`ignore(regions)`](#ignore-method). [`checksettings.ignoreregions (not yet available in espresso java)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### timeout method
#### Syntax


    eyes.check(Target.window().timeout(timeoutMilliseconds))

#### Parameters

timeoutMilliseconds

Type: int

The timeout to use in milliseconds.

#### Return value

Type:  ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may only call this method once in a given chain. The timeout value provided here overrides the default value or the value set by [setMatchTimeout](./eyes#setmatchtimeout-method) for the current target. Passing this method a value of zero disables the timeout mechanism.

### withName method
#### Syntax


    eyes.check(Target.window().withName(name))

#### Parameters

name

Type: String

The name to be given to this check point.

#### Return value

Type:  ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may only call this method once in a given chain.

# CheckSettings class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Appium</b>
</div><div class='platform-bar-div'>Language: <b>Csharp</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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




The methods in this class are used as part of the [Check](./eyes#check-method) Fluent API to configure and execute checkpoints.

To use these methods, first create a target object using a method from the [Target](./target) class, then call one or more of the methods in this class on the returned object, chaining them one after the other using the '.' operator.

Using statement

    using Applitools;
    	


### Accessibility method
#### Syntax


    eyes.Check(Target.Window().Accessibility(region))
    eyes.Check(Target.Window().Accessibility(region, regionType))

#### Parameters

region

Type: AccessibilityRegionByRectangle

An object of this class.

region

Type: Rectangle

The position and size of the region.

regionType

Type: [AccessibilityRegionType](./accessibilityregiontype)

The accessibility type of the region.

#### Return value

Type:  ICheckSettings

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### BeforeRenderScreenshotHook method
#### Syntax


    eyes.Check(Target.Window().BeforeRenderScreenshotHook(hook))

#### Parameters

hook

Type: string

A string with legal JavaScript code.

#### Return value

Type:  ICheckSettings

### Content method
#### Syntax


    eyes.Check(Target.Window().Content())
    eyes.Check(Target.Window().Content(region, regions))
    eyes.Check(Target.Window().Content(regions))

#### Parameters

region

Type: Rectangle

An object that defines a rectangular area in the window.

regions

Type: Rectangle\[\]

An array of rectangle objects, each of which defines a region.

regions

Type: IEnumerable`<Rectangle>`

An array of rectangle objects, each of which defines a region.

#### Return value

Type:  ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You can call this method in two ways - with parameters and without parameters. The meaning of the method, and the way it can be used is different in each case. When the method is called without parameters it sets the default match level for this target. When called with one or more regions as parameters it defines the match level for that region. The sections below provide some more details regarding how to use this method in each of these modes.

### Called without parameters

If this method is called without parameters then it sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`MatchLevel`](./eyes#matchlevel-property).

For a given target you may call only one of the following methods (without parameters) that set a target default match level:

*   [`MatchLevel`](./checksettings#matchlevel-method)
*   [`Strict`](./checksettings#strict-method)
*   [`Content`](./checksettings#content-method)
*   [`Layout`](./checksettings#layout-method)
*   [`Exact`](./checksettings#exact-method)

### Called with parameters

When the method is called with one or more parameters that define one or more regions, then these set the match level for those regions, overiding the defaults set for the target (by calling these methods without a parameter), set by [`MatchLevel`](./eyes#matchlevel-property) and the hardcoded default match level.

You may define multiple regions that have an explicit match level by calling this method multiple times in a chain, or by passing the method multiple regions.

The region matchlevel methods [`Strict(regions)`](./checksettings#strict-method), [`Layout(regions)`](./checksettings#layout-method)., [`Content(regions)`](./checksettings#content-method). [`checksettings.strictregions (not yet available in appium csharp)(regions)`](#), [`checksettings.layoutregions (not yet available in appium csharp)(regions)`](#)., [`checksettings.contentregions (not yet available in appium csharp)(regions)`](#) should not overlap each other or the regions defined using [`Ignore(regions)`](./checksettings#ignore-method). [`checksettings.ignoreregions (not yet available in appium csharp)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### Exact method
#### Syntax


    eyes.Check(Target.Window().Exact())

#### Parameters

This method does not take any parameters.

#### Return value

Type:  ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


This method sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`MatchLevel`](./eyes#matchlevel-property).

For a given target you may call only one of the following methods that set a target default match level:

*   [`MatchLevel`](./checksettings#matchlevel-method)
*   [`Strict`](./checksettings#strict-method)
*   [`Content`](./checksettings#content-method)
*   [`Layout`](./checksettings#layout-method)
*   [`Exact`](./checksettings#exact-method)

To set a match level for a one or more regions within a target use one of the following methods:

*   [`checksettings.strictregions (not yet available in appium csharp)`](#)
*   [`checksettings.contentregions (not yet available in appium csharp)`](#)
*   [`checksettings.layoutregions (not yet available in appium csharp)`](#)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### Floating method
#### Syntax


    eyes.Check(Target.Window().Floating(maxOffset, regions))
    eyes.Check(Target.Window().Floating(region, maxUpOffset, maxDownOffset, maxLeftOffset, maxRightOffset))

#### Parameters

maxOffset

Type: int

The maximum amount that the region can shift in any direction and still be considered matching.

regions

Type: Rectangle\[\]

One or more region definitions.

region

Type: Rectangle

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

### Fully method
#### Syntax


    eyes.Check(Target.Window().Fully())
    eyes.Check(Target.Window().Fully(fully))

#### Parameters

fully

Type: bool

If this parameter has a value of true, then Eyes uses scrolling and stitching to capture the entire page. If it's false, then only the viewport will be captured. If the method is called without a parameter, then the default is true.

#### Return value

Type:  ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may only call this method once in a given target.

### Ignore method
#### Syntax


    eyes.Check(Target.Window().Ignore(region, regions))
    eyes.Check(Target.Window().Ignore(regions))

#### Parameters

region

Type: Rectangle

An object that defines a rectangular area in the window.

regions

Type: Rectangle\[\]

An array of rectangle objects, each of which defines a region.

regions

Type: IEnumerable`<Rectangle>`

An array of rectangle objects, each of which defines a region.

#### Return value

Type:  ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may call this method multiple times in a given chain.

Ignore regions should not overlap each other or other types of regions such as floating or match level regions.

### IgnoreCaret method
#### Syntax


    eyes.Check(Target.Window().IgnoreCaret(ignoreCaret))
    eyes.Check(Target.Window().IgnoreCaret())

#### Parameters

ignoreCaret

Type: bool \[Optional : default = true \]

If this parameter has a value of true, then Eyes will detect artifacts caused by a blinking cursor and will not report a mismatch for differences caused by these artifacts. If it has a value of , then Eyes will not try to detect artifacts caused by blinking cursors. If no parameter is passed then the default value is true - so the cursor artifacts will be ignored.

#### Return value

Type:  ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may only call this method once in a given chain. This method overrides the global default setting or the setting chosen explicitly for the current target using [Eyes.IgnoreCaret](./eyes#ignorecaret-property) property or [Configuration.SetIgnoreCaret](./configuration#setignorecaret-method) method.

### IgnoreDisplacements method
#### Syntax


    eyes.Check(Target.Window().IgnoreDisplacements(ignoreDisplacements))
    eyes.Check(Target.Window().IgnoreDisplacements())

#### Parameters

ignoreDisplacements

Type: bool \[Optional : default = true \]

If a value of true is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed.

#### Return value

Type:  ICheckSettings

#### Remarks


Ignore displacements is only active when using a Match level of [Strict](./matchlevel) or [Content](./matchlevel)

### Layout method
#### Syntax


    eyes.Check(Target.Window().Layout())
    eyes.Check(Target.Window().Layout(region, regions))
    eyes.Check(Target.Window().Layout(regions))

#### Parameters

region

Type: Rectangle

An object that defines a rectangular area in the window.

regions

Type: Rectangle\[\]

An array of rectangle objects, each of which defines a region.

regions

Type: IEnumerable`<Rectangle>`

An array of rectangle objects, each of which defines a region.

#### Return value

Type:  ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You can call this method in two ways - with parameters and without parameters. The meaning of the method, and the way it can be used is different in each case. When the method is called without parameters it sets the default match level for this target. When called with one or more regions as parameters it defines the match level for that region. The sections below provide some more details regarding how to use this method in each of these modes.

### Called without parameters

If this method is called without parameters then it sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`MatchLevel`](./eyes#matchlevel-property).

For a given target you may call only one of the following methods (without parameters) that set a target default match level:

*   [`MatchLevel`](./checksettings#matchlevel-method)
*   [`Strict`](./checksettings#strict-method)
*   [`Content`](./checksettings#content-method)
*   [`Layout`](./checksettings#layout-method)
*   [`Exact`](./checksettings#exact-method)

### Called with parameters

When the method is called with one or more parameters that define one or more regions, then these set the match level for those regions, overiding the defaults set for the target (by calling these methods without a parameter), set by [`MatchLevel`](./eyes#matchlevel-property) and the hardcoded default match level.

You may define multiple regions that have an explicit match level by calling this method multiple times in a chain, or by passing the method multiple regions.

The region matchlevel methods [`Strict(regions)`](./checksettings#strict-method), [`Layout(regions)`](./checksettings#layout-method)., [`Content(regions)`](./checksettings#content-method). [`checksettings.strictregions (not yet available in appium csharp)(regions)`](#), [`checksettings.layoutregions (not yet available in appium csharp)(regions)`](#)., [`checksettings.contentregions (not yet available in appium csharp)(regions)`](#) should not overlap each other or the regions defined using [`Ignore(regions)`](./checksettings#ignore-method). [`checksettings.ignoreregions (not yet available in appium csharp)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### MatchLevel method
#### Syntax


    eyes.Check(Target.Window().MatchLevel(matchLevel))

#### Parameters

matchLevel

Type: [MatchLevel](./matchlevel)

Available match level values are:

*   [None](./matchlevel)
*   [Strict](./matchlevel)
*   [Layout](./matchlevel)
*   [Content](./matchlevel)
*   [Exact](./matchlevel)

For a description of these match levels and the different ways to apply them to tests, checkpoints, and regions, see [Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

#### Return value

Type:  ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


The value provided here overrides the default match level, or the global value set for this target using [Eyes.MatchLevel](./eyes#matchlevel-property) or [Configuration.SetMatchLevel](./configuration#setmatchlevel-method). You may only call this method once in a given chain. If you call this method, then you can't call the other match level methods. [CheckSettings.Strict](./checksettings#strict-method)[CheckSettings.Content](./checksettings#content-method)[CheckSettings.Layout](./checksettings#layout-method)[CheckSettings.Exact](./checksettings#exact-method)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### SendDom method
#### Syntax


    eyes.Check(Target.Window().SendDom(sendDom))
    eyes.Check(Target.Window().SendDom())

#### Parameters

sendDom

Type: bool \[Optional : default = true \]

If a vlaue of true is passed then send DOM information for this checkpoint even if sending DOM is disabled globally.

#### Return value

Type:  ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

### Strict method
#### Syntax


    eyes.Check(Target.Window().Strict())
    eyes.Check(Target.Window().Strict(region, regions))
    eyes.Check(Target.Window().Strict(regions))

#### Parameters

region

Type: Rectangle

An object that defines a rectangular area in the window.

regions

Type: Rectangle\[\]

An array of rectangle objects, each of which defines a region.

regions

Type: IEnumerable`<Rectangle>`

An array of rectangle objects, each of which defines a region.

#### Return value

Type:  ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You can call this method in two ways - with parameters and without parameters. The meaning of the method, and the way it can be used is different in each case. When the method is called without parameters it sets the default match level for this target. When called with one or more regions as parameters it defines the match level for that region. The sections below provide some more details regarding how to use this method in each of these modes.

### Called without parameters

If this method is called without parameters then it sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`MatchLevel`](./eyes#matchlevel-property).

For a given target you may call only one of the following methods (without parameters) that set a target default match level:

*   [`MatchLevel`](./checksettings#matchlevel-method)
*   [`Strict`](./checksettings#strict-method)
*   [`Content`](./checksettings#content-method)
*   [`Layout`](./checksettings#layout-method)
*   [`Exact`](./checksettings#exact-method)

### Called with parameters

When the method is called with one or more parameters that define one or more regions, then these set the match level for those regions, overiding the defaults set for the target (by calling these methods without a parameter), set by [`MatchLevel`](./eyes#matchlevel-property) and the hardcoded default match level.

You may define multiple regions that have an explicit match level by calling this method multiple times in a chain, or by passing the method multiple regions.

The region matchlevel methods [`Strict(regions)`](./checksettings#strict-method), [`Layout(regions)`](./checksettings#layout-method)., [`Content(regions)`](./checksettings#content-method). [`checksettings.strictregions (not yet available in appium csharp)(regions)`](#), [`checksettings.layoutregions (not yet available in appium csharp)(regions)`](#)., [`checksettings.contentregions (not yet available in appium csharp)(regions)`](#) should not overlap each other or the regions defined using [`Ignore(regions)`](./checksettings#ignore-method). [`checksettings.ignoreregions (not yet available in appium csharp)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### Timeout method
#### Syntax


    eyes.Check(Target.Window().Timeout(timeout))

#### Parameters

timeout

Type: TimeSpan

The timeout to use in TimeSpan units.

#### Return value

Type:  ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may only call this method once in a given chain. The timeout value provided here overrides the default value or the value set by [MatchTimeout](./eyes#matchtimeout-property) for the current target. Passing this method a value of zero disables the timeout mechanism.

### VariationGroupId method
#### Syntax


    eyes.Check(Target.Window().VariationGroupId(variationGroupId))

#### Parameters

variationGroupId

Type: string

The value of the variation group ID to be set.

#### Return value

Type:  ICheckSettings

### WithName method
#### Syntax


    eyes.Check(Target.Window().WithName(name))

#### Parameters

name

Type: string

The name to be given to this check point.

#### Return value

Type:  ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may only call this method once in a given chain.

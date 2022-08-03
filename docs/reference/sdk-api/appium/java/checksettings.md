# AppiumCheckSettings class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Appium</b>
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

    import com.applitools.eyes.appium.AppiumCheckSettings;
    	


### accessibility method
#### Syntax


    eyes.check(Target.window().accessibility(region, regionType))
    eyes.check(Target.window().accessibility(regionSelector, regionType))
    eyes.check(Target.window().accessibility(element, regionType))
    eyes.check(Target.window().accessibility(regionType, elementsToIgnore))

#### Parameters

region

Type: [Region](./region)

An object that defines a rectangular area in the window.

regionType

Type: [AccessibilityRegionType](./accessibilityregiontype)

The accessibility type of the region.

regionSelector

Type: By

A selector that specified one or more elements. The bounding rectangle of each element, defines an accessibility region to be analyzed.

element

Type: WebElement

An element bounding rectangle that defines an accessibility region to be analyzed.

elementsToIgnore

Type: WebElement\[\]

A list of elements for which areas should not be tested for accessibility.

#### Return value

Type:  ICheckSettings

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### beforeRenderScreenshotHook method
#### Syntax


    eyes.check(Target.window().beforeRenderScreenshotHook(hook))

#### Parameters

hook

Type: String

A string with legal JavaScript code.

#### Return value

Type:  ICheckSettings

### content method
#### Syntax


    eyes.check(Target.window().content(region, regions))
    eyes.check(Target.window().content(regions))
    eyes.check(Target.window().content())
    eyes.check(Target.window().content(element, elements))
    eyes.check(Target.window().content(elements))

#### Parameters

region

Type: [Region](./region)

An object that defines a rectangular area in the window.

regions

Type: [Region](./region)...

An array of Region objects that defines rectangular areas in the checked image.

regions

Type: [Region](./region)\[\]

An array of Region objects that defines rectangular areas in the checked image.

element

Type: WebElement

An element whose position and bounding rectangle defines the region.

elements

Type: WebElement...

One or more elements, each of whose bounding rectangle defines a region.

elements

Type: WebElement\[\]

One or more elements, each of whose bounding rectangle defines a region.

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

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`checksettings.strictregions (not yet available in appium java)(regions)`](#), [`checksettings.layoutregions (not yet available in appium java)(regions)`](#)., [`checksettings.contentregions (not yet available in appium java)(regions)`](#) should not overlap each other or the regions defined using [`ignore(regions)`](#ignore-method). [`checksettings.ignoreregions (not yet available in appium java)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### cut method
#### Syntax


    eyes.check(Target.window().cut(type, selector))

#### Parameters

type

Type: [ElementType](./elementtype)

Always pass a value of ElementType.Footer

selector

Type: By

A selector to the elment to exclude

#### Return value

Type:  [AppiumCheckSettings](./checksettings)

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

*   [`checksettings.strictregions (not yet available in appium java)`](#)
*   [`checksettings.contentregions (not yet available in appium java)`](#)
*   [`checksettings.layoutregions (not yet available in appium java)`](#)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### floating method
#### Syntax


    eyes.check(Target.window().floating(maxOffset, regions))
    eyes.check(Target.window().floating(region, maxUpOffset, maxDownOffset, maxLeftOffset, maxRightOffset))
    eyes.check(Target.window().floating(element, maxUpOffset, maxDownOffset, maxLeftOffset, maxRightOffset))

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

element

Type: WebElement

An element whose position and bounding rectangle defines the region.

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

Type: Boolean

If this parameter has a value of true, then Eyes uses scrolling and stitching to capture the entire page. If it's false, then only the viewport will be captured. If the method is called without a parameter, then the default is true.

#### Return value

Type:  [AppiumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


This method overrides the global default or the most recent value set by the [Eyes.setForceFullPageScreenshot](./eyes#setforcefullpagescreenshot-method) method or [Configuration.setForceFullPageScreenshot](./configuration#setforcefullpagescreenshot-method) method. You can use the [AppiumCheckSettings.scrollRootElement](./checksettings#scrollrootelement-method) method to specify which element should be scrolled to render all of the content of the page. You may only specify one such element per checkpoint. You may only call this method once in a given target.

### ignore method
#### Syntax


    eyes.check(Target.window().ignore(region, regions))
    eyes.check(Target.window().ignore(regions))

#### Parameters

region

Type: [Region](./region)

An object that defines a rectangular area in the window.

regions

Type: [Region](./region)...

An array of Region objects that defines rectangular areas in the checked image.

regions

Type: [Region](./region)\[\]

An array of Region objects that defines rectangular areas in the checked image.

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


    eyes.check(Target.window().ignoreDisplacements(ignoreDisplacements))
    eyes.check(Target.window().ignoreDisplacements())

#### Parameters

ignoreDisplacements

Type: boolean

If a value of true is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed.

#### Return value

Type:  ICheckSettings

#### Remarks


Ignore displacements is only active when using a Match level of [STRICT](./matchlevel) or [CONTENT](./matchlevel)

### layout method
#### Syntax


    eyes.check(Target.window().layout(region, regions))
    eyes.check(Target.window().layout(regions))
    eyes.check(Target.window().layout())
    eyes.check(Target.window().layout(elements))
    eyes.check(Target.window().layout(element, elements))

#### Parameters

region

Type: [Region](./region)

An object that defines a rectangular area in the window.

regions

Type: [Region](./region)...

Zero or more additional rectangle objects separated by commas or passed as an array.

regions

Type: [Region](./region)\[\]

An array of Region objects that defines rectangular areas in the checked image.

elements

Type: WebElement\[\]

One or more elements, each of whose bounding rectangle defines a region.

element

Type: WebElement

An element whose position and bounding rectangle defines the region.

elements

Type: WebElement...

One or more elements, each of whose bounding rectangle defines a region.

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

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`checksettings.strictregions (not yet available in appium java)(regions)`](#), [`checksettings.layoutregions (not yet available in appium java)(regions)`](#)., [`checksettings.contentregions (not yet available in appium java)(regions)`](#) should not overlap each other or the regions defined using [`ignore(regions)`](#ignore-method). [`checksettings.ignoreregions (not yet available in appium java)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

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


The value provided here overrides the default match level, or the global value set for this target using [Eyes.setMatchLevel](./eyes#setmatchlevel-method) or [Configuration.setMatchLevel](./configuration#setmatchlevel-method). You may only call this method once in a given chain. If you call this method, then you can't call the other match level methods. [AppiumCheckSettings.strict](#strict-method)[AppiumCheckSettings.content](#content-method)[AppiumCheckSettings.layout](#layout-method)[AppiumCheckSettings.exact](#exact-method)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### scrollRootElement method
#### Syntax


    eyes.check(Target.window().scrollRootElement(elementId))
    eyes.check(Target.window().scrollRootElement(selector))
    eyes.check(Target.window().scrollRootElement(element))

#### Parameters

elementId

Type: String

The ID of the element that should be scrolled.

selector

Type: By

A By selector to the element that should be scrolled.

element

Type: WebElement

The element that should be scrolled.

#### Return value

Type:  [AppiumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

### statusBarExists method
#### Syntax


    eyes.check(Target.window().statusBarExists())
    eyes.check(Target.window().statusBarExists(statusBarExists))

#### Parameters

statusBarExists

Type: boolean

Set to true if there is a status bar on the screen.

#### Return value

Type:  [AppiumCheckSettings](./checksettings)

### strict method
#### Syntax


    eyes.check(Target.window().strict(region, regions))
    eyes.check(Target.window().strict(regions))
    eyes.check(Target.window().strict())
    eyes.check(Target.window().strict(element, elements))
    eyes.check(Target.window().strict(elements))

#### Parameters

region

Type: [Region](./region)

An object that defines a rectangular area in the window.

regions

Type: [Region](./region)...

An array of Region objects that defines rectangular areas in the checked image.

regions

Type: [Region](./region)\[\]

An array of Region objects that defines rectangular areas in the checked image.

element

Type: WebElement

An element whose position and bounding rectangle defines the region.

elements

Type: WebElement...

One or more elements, each of whose bounding rectangle defines a region.

elements

Type: WebElement\[\]

One or more elements, each of whose bounding rectangle defines a region.

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

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`checksettings.strictregions (not yet available in appium java)(regions)`](#), [`checksettings.layoutregions (not yet available in appium java)(regions)`](#)., [`checksettings.contentregions (not yet available in appium java)(regions)`](#) should not overlap each other or the regions defined using [`ignore(regions)`](#ignore-method). [`checksettings.ignoreregions (not yet available in appium java)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

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

### variationGroupId method
#### Syntax


    eyes.check(Target.window().variationGroupId(variationGroupId))

#### Parameters

variationGroupId

Type: String

The value of the variation group ID to be set.

#### Return value

Type:  ICheckSettings

### visualGridOptions method
#### Syntax


    eyes.check(Target.window().visualGridOptions(options))

#### Parameters

options

Type: [VisualGridOption](./visualgridoption)...

One or more options for configuring the Ultrafast Grid.

#### Return value

Type:  ICheckSettings

#### Remarks


The following configuration key/value pairs are currently supported:

'chromeHeadless'

Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of false to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

'polyfillAdoptedStyleSheets'

Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option polyfillAdoptedStyleSheets to a value of true or false:

*   Setting a value of true instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
*   Setting a value of false instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.setVisualGridOptions](./configuration#setvisualgridoptions-method)

You can override the global value for a given checkpoint using the method [AppiumCheckSettings.visualGridOptions](#).

#### Example


Java

    eyes.check(
            Target.window()
                    .visualGridOptions(new VisualGridOption("polyfillAdoptedStyleSheets", true)));

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

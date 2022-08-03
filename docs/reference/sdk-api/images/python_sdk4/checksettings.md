# ImagesCheckSettings class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
</div><div class='platform-bar-div'>Language: <b>Python_sdk4</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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


### accessibility method
#### Syntax


    eyes.Check(Target.window().accessibility(region))
    eyes.Check(Target.window().accessibility(region, type))

#### Parameters

region

Type: [Region](./region)

An object that defines a rectangular area in the window.

region

Type: [Region](./region)

An object that defines a rectangular area in the window.

type

Type: [AccessibilityRegionType](./accessibilityregiontype)

The accessibility type of the region.

#### Return value

Type:  Self

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### content method
#### Syntax


    eyes.Check(Target.window().content(regions))

#### Parameters

regions

Type: [Region](./region)

One or more region definitions.

#### Return value

Type:  Self

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You can call this method in two ways - with parameters and without parameters. The meaning of the method, and the way it can be used is different in each case. When the method is called without parameters it sets the default match level for this target. When called with one or more regions as parameters it defines the match level for that region. The sections below provide some more details regarding how to use this method in each of these modes.

### Called without parameters

If this method is called without parameters then it sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`match_level`](./eyes#match_level-property).

For a given target you may call only one of the following methods (without parameters) that set a target default match level:

*   [`match_level`](#match_level-method)
*   [`strict`](#strict-method)
*   [`content`](#content-method)
*   [`layout`](#layout-method)
*   [`exact`](#exact-method)

### Called with parameters

When the method is called with one or more parameters that define one or more regions, then these set the match level for those regions, overiding the defaults set for the target (by calling these methods without a parameter), set by [`match_level`](./eyes#match_level-property) and the hardcoded default match level.

You may define multiple regions that have an explicit match level by calling this method multiple times in a chain, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`checksettings.strictregions (not yet available in images python_sdk4)(regions)`](#), [`checksettings.layoutregions (not yet available in images python_sdk4)(regions)`](#)., [`checksettings.contentregions (not yet available in images python_sdk4)(regions)`](#) should not overlap each other or the regions defined using [`ignore(regions)`](#ignore-method). [`checksettings.ignoreregions (not yet available in images python_sdk4)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### exact method
#### Syntax


    eyes.Check(Target.window().exact())

#### Parameters

This method does not take any parameters.

#### Return value

Type: 

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


This method sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`eyes$setmatchlevel`](#).

For a given target you may call only one of the following methods that set a target default match level:

*   [`checksettings$matchlevel`](#)
*   [`checksettings$strict`](#)
*   [`checksettings$content`](#)
*   [`checksettings$layout`](#)
*   [`checksettings$exact`](#)

To set a match level for a one or more regions within a target use one of the following methods:

*   [`checksettings$strictRegions`](#)
*   [`checksettings$contentRegions`](#)
*   [`checksettings$layoutRegions`](#)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### floating method
#### Syntax


    eyes.check(name,Target().image(img).floating(max_offset, region))
    eyes.check(name,Target().image(img).floating(region, max_up_offset, max_down_offset, max_left_offset, max_right_offset))

#### Parameters

max_offset

Type: int

The maximum amount that the region can shift in any direction and still be considered matching.

region

Type: [Region](./region)

An object that defines the region.

region

Type: [Region](./region)

An object that defines the region.

max_up_offset

Type: int

The maximum amount that the region can shift upwards and still be considered matching.

max_down_offset

Type: int

The maximum amount that the region can shift downwards and still be considered matching.

max_left_offset

Type: int

The maximum amount that the region can shift to the left and still be considered matching.

max_right_offset

Type: int

The maximum amount that the region can shift to the right and still be considered matching.

#### Return value

Type:  Self

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may call this method multiple times in a given chain; each call defines a different floating region. Floating regions may not overlap each other or other types of regions, such as ignore or match level regions.

### ignore method
#### Syntax


    eyes.check(name, Target().image(img).ignore(regions))

#### Parameters

regions

Type: [Region](./region)

One or more region definitions.

#### Return value

Type:  Self

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may call this method multiple times in a given chain.

Ignore regions should not overlap each other or other types of regions such as floating or match level regions.

### ignore_caret method
#### Syntax


    eyes.Check(Target.window().ignore_caret(ignore))
    eyes.Check(Target.window().ignore_caret())

#### Parameters

ignore

Type: bool \[Optional : default = True \]

If this parameter has a value of true, then Eyes will detect artifacts caused by a blinking cursor and will not report a mismatch for differences caused by these artifacts. If it has a value of , then Eyes will not try to detect artifacts caused by blinking cursors. If no parameter is passed then the default value is true - so the cursor artifacts will be ignored.

#### Return value

Type:  Self

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may only call this method once in a given chain. This method overrides the global default setting or the setting chosen explicitly for the current target using [Configuration.set_ignore_caret](./configuration#set_ignore_caret-method) method.

### ignore_displacements method
#### Syntax


    eyes.Check(Target.window().ignore_displacements(should_ignore))
    eyes.Check(Target.window().ignore_displacements())

#### Parameters

should_ignore

Type: bool \[Optional : default = True \]

If a value of True is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed.

#### Return value

Type:  Self

#### Remarks


Ignore displacements is only active when using a Match level of [STRICT](./matchlevel) or [CONTENT](./matchlevel)

### layout method
#### Syntax


    eyes.Check(Target.window().layout(regions))

#### Parameters

regions

Type: [Region](./region)

Zero or more additional rectangle objects separated by commas or passed as an array.

#### Return value

Type:  Self

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You can call this method in two ways - with parameters and without parameters. The meaning of the method, and the way it can be used is different in each case. When the method is called without parameters it sets the default match level for this target. When called with one or more regions as parameters it defines the match level for that region. The sections below provide some more details regarding how to use this method in each of these modes.

### Called without parameters

If this method is called without parameters then it sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`match_level`](./eyes#match_level-property).

For a given target you may call only one of the following methods (without parameters) that set a target default match level:

*   [`match_level`](#match_level-method)
*   [`strict`](#strict-method)
*   [`content`](#content-method)
*   [`layout`](#layout-method)
*   [`exact`](#exact-method)

### Called with parameters

When the method is called with one or more parameters that define one or more regions, then these set the match level for those regions, overiding the defaults set for the target (by calling these methods without a parameter), set by [`match_level`](./eyes#match_level-property) and the hardcoded default match level.

You may define multiple regions that have an explicit match level by calling this method multiple times in a chain, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`checksettings.strictregions (not yet available in images python_sdk4)(regions)`](#), [`checksettings.layoutregions (not yet available in images python_sdk4)(regions)`](#)., [`checksettings.contentregions (not yet available in images python_sdk4)(regions)`](#) should not overlap each other or the regions defined using [`ignore(regions)`](#ignore-method). [`checksettings.ignoreregions (not yet available in images python_sdk4)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### match_level method
#### Syntax


    eyes.Check(Target.window().match_level(match_level))

#### Parameters

match_level

Type: [MatchLevel](./matchlevel)

Available match level values are:

*   [NONE](./matchlevel)
*   [STRICT](./matchlevel)
*   [LAYOUT](./matchlevel)
*   [CONTENT](./matchlevel)
*   [EXACT](./matchlevel)

For a description of these match levels and the different ways to apply them to tests, checkpoints, and regions, see [Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

#### Return value

Type:  Self

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


The value provided here overrides the default match level, or the global value set for this target using [Eyes.match_level](./eyes#match_level-property) or [Configuration.set_match_level](./configuration#set_match_level-method). You may only call this method once in a given chain. If you call this method, then you can't call the other match level methods. [ImagesCheckSettings.strict](#strict-method)[ImagesCheckSettings.content](#content-method)[ImagesCheckSettings.layout](#layout-method)[ImagesCheckSettings.exact](#exact-method)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### strict method
#### Syntax


    eyes.Check(Target.window().strict(regions))

#### Parameters

regions

Type: [Region](./region)

One or more region definitions.

#### Return value

Type:  Self

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You can call this method in two ways - with parameters and without parameters. The meaning of the method, and the way it can be used is different in each case. When the method is called without parameters it sets the default match level for this target. When called with one or more regions as parameters it defines the match level for that region. The sections below provide some more details regarding how to use this method in each of these modes.

### Called without parameters

If this method is called without parameters then it sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`match_level`](./eyes#match_level-property).

For a given target you may call only one of the following methods (without parameters) that set a target default match level:

*   [`match_level`](#match_level-method)
*   [`strict`](#strict-method)
*   [`content`](#content-method)
*   [`layout`](#layout-method)
*   [`exact`](#exact-method)

### Called with parameters

When the method is called with one or more parameters that define one or more regions, then these set the match level for those regions, overiding the defaults set for the target (by calling these methods without a parameter), set by [`match_level`](./eyes#match_level-property) and the hardcoded default match level.

You may define multiple regions that have an explicit match level by calling this method multiple times in a chain, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`checksettings.strictregions (not yet available in images python_sdk4)(regions)`](#), [`checksettings.layoutregions (not yet available in images python_sdk4)(regions)`](#)., [`checksettings.contentregions (not yet available in images python_sdk4)(regions)`](#) should not overlap each other or the regions defined using [`ignore(regions)`](#ignore-method). [`checksettings.ignoreregions (not yet available in images python_sdk4)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### variation_group_id method
#### Syntax


    eyes.Check(Target.window().variation_group_id(variation_group_id))

#### Parameters

variation_group_id

Type: Text

The value of the variation group ID to be set.

#### Return value

Type:  Self

### with_name method
#### Syntax


    eyes.Check(Target.window().with_name(name))

#### Parameters

name

Type: Text

The name to be given to this check point.

#### Return value

Type:  Self

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may only call this method once in a given chain.

# ImagesCheckSettings class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Imagesappkit</b>
</div><div class='platform-bar-div'>Language: <b>Objectivec</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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




The methods in this class are used as part of the [checkWithTag](./eyes#checkImage-method) Fluent API to configure and execute checkpoints.

To use these methods, first create a target object using a method from the [Target](./target) class, then call one or more of the methods in this class on the returned object, using a series of nested calls.

Import statement

    @import EyesImagesAppKit
    	


### accessibility method
#### Syntax
#### Call syntax

    id<CheckSettingsProtocol> target =  [ obj accessibility  : region Type:  type   ]
    ;
    

#### Declaration

    (id<CheckSettingsProtocol>)accessibility:(Region *)region Type: (AccessibilityRegionType)type

#### Parameters

region

Type: [Region](./region)\*

An object that defines a rectangular area in the window.

type

Type: [AccessibilityRegionType](./accessibilityregiontype)

The accessibility type of the region.

#### Return value

Type:  id`<CheckSettingsProtocol>`

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### content method
#### Syntax
#### Call syntax

    id<CheckSettingsProtocol> target =  [ obj content  : regions   ]
    ;
    
    id<CheckSettingsProtocol> target =  [ obj content    ]
    ;
    

#### Declaration

    (id<CheckSettingsProtocol>)content

#### Parameters

regions

Type: NSArray<[Region](./region) \*>\*

One or more region definitions.

#### Return value

Type:  id`<CheckSettingsProtocol>`

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You can call this method in two ways - with parameters and without parameters. The meaning of the method, and the way it can be used is different in each case. When the method is called without parameters it sets the default match level for this target. When called with one or more regions as parameters it defines the match level for that region. The sections below provide some more details regarding how to use this method in each of these modes.

### Called without parameters

If this method is called without parameters then it sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`matchLevel`](./eyes#matchlevel-property).

For a given target you may call only one of the following methods (without parameters) that set a target default match level:

*   [`matchLevel`](./checksettings#matchlevel-method)
*   [`strict`](#strict-method)
*   [`content`](#content-method)
*   [`layout`](#layout-method)
*   [`exact`](#exact-method)

### Called with parameters

When the method is called with one or more parameters that define one or more regions, then these set the match level for those regions, overiding the defaults set for the target (by calling these methods without a parameter), set by [`matchLevel`](./eyes#matchlevel-property) and the hardcoded default match level.

You may define multiple regions that have an explicit match level by calling this method multiple times in a chain, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`checksettings.strictregions (not yet available in imagesappkit objectivec)(regions)`](#), [`checksettings.layoutregions (not yet available in imagesappkit objectivec)(regions)`](#)., [`checksettings.contentregions (not yet available in imagesappkit objectivec)(regions)`](#) should not overlap each other or the regions defined using [`ignore(regions)`](#ignore-method). [`checksettings.ignoreregions (not yet available in imagesappkit objectivec)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### exact method
#### Syntax
#### Call syntax

    id<CheckSettingsProtocol> target =  [ obj exact    ]
    ;
    

#### Declaration

    (id<CheckSettingsProtocol>)exact

#### Parameters

This method does not take any parameters.

#### Return value

Type:  id`<CheckSettingsProtocol>`

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


This method sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`matchLevel`](./eyes#matchlevel-property).

For a given target you may call only one of the following methods that set a target default match level:

*   [`matchLevel`](./checksettings#matchlevel-method)
*   [`strict`](#strict-method)
*   [`content`](#content-method)
*   [`layout`](#layout-method)
*   [`exact`](#exact-method)

To set a match level for a one or more regions within a target use one of the following methods:

*   [`checksettings.strictregions (not yet available in imagesappkit objectivec)`](#)
*   [`checksettings.contentregions (not yet available in imagesappkit objectivec)`](#)
*   [`checksettings.layoutregions (not yet available in imagesappkit objectivec)`](#)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### floating method
#### Syntax
#### Call syntax

    id<CheckSettingsProtocol> target =  [ obj floating  : regions maxOffset: maxOffset   ]
    ;
    
    id<CheckSettingsProtocol> target =  [ obj floating  : region maxUpOffset: maxUpOffset maxDownOffset: maxDownOffset maxRightOffset: maxRightOffset maxLeftOffset: maxLeftOffset   ]
    ;
    

#### Declaration

    (id<CheckSettingsProtocol>)floating:(Region *)region maxUpOffset:(NSInteger)maxUpOffset maxDownOffset:(NSInteger)maxDownOffset maxRightOffset:(NSInteger)maxRightOffset maxLeftOffset:(NSInteger)maxLeftOffset

#### Parameters

regions

Type: NSArray<[Region](./region) \*>\*

One or more region definitions.

maxOffset

Type: NSInteger

The maximum amount that the region can shift in any direction and still be considered matching.

region

Type: [Region](./region)\*

An object that defines the region.

maxUpOffset

Type: NSInteger

The maximum amount that the region can shift upwards and still be considered matching.

maxDownOffset

Type: NSInteger

The maximum amount that the region can shift downwards and still be considered matching.

maxRightOffset

Type: NSInteger

The maximum amount that the region can shift to the right and still be considered matching.

maxLeftOffset

Type: NSInteger

The maximum amount that the region can shift to the left and still be considered matching.

#### Return value

Type:  id`<CheckSettingsProtocol>`

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may call this method multiple times in a given chain; each call defines a different floating region. Floating regions may not overlap each other or other types of regions, such as ignore or match level regions.

### fully method
#### Syntax
#### Call syntax

    id<CheckSettingsProtocol> target =  [ obj fully    ]
    ;
    

#### Declaration

    (id<CheckSettingsProtocol>)fully

#### Parameters

This method does not take any parameters.

#### Return value

Type:  id`<CheckSettingsProtocol>`

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may only call this method once in a given target.

### ignore method
#### Syntax
#### Call syntax

    id<CheckSettingsProtocol> target =  [ obj ignore  : regions   ]
    ;
    

#### Declaration

    (id<CheckSettingsProtocol>)ignore:(NSArray<Region *> *)regions

#### Parameters

regions

Type: NSArray<[Region](./region) \*>\*

One or more region definitions.

#### Return value

Type:  id`<CheckSettingsProtocol>`

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may call this method multiple times in a given chain.

Ignore regions should not overlap each other or other types of regions such as floating or match level regions.

### ignoreCaret method
#### Syntax
#### Call syntax

    id<CheckSettingsProtocol> target =  [ obj ignoreCaret  : ignoreCaret   ]
    ;
    
    id<CheckSettingsProtocol> target =  [ obj ignoreCaret    ]
    ;
    

#### Declaration

    (id<CheckSettingsProtocol>)ignoreCaret

#### Parameters

ignoreCaret

Type: BOOL

If this parameter has a value of true, then Eyes will detect artifacts caused by a blinking cursor and will not report a mismatch for differences caused by these artifacts. If it has a value of , then Eyes will not try to detect artifacts caused by blinking cursors. If no parameter is passed then the default value is true - so the cursor artifacts will be ignored.

#### Return value

Type:  id`<CheckSettingsProtocol>`

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may only call this method once in a given chain. This method overrides the global default setting or the setting chosen explicitly for the current target using [\[Eyes ignoreCaret\]](./eyes#ignorecaret-property) property or [\[Configuration ignoreCaret\]](./configuration#ignorecaret-property) property.

### ignoreDisplacements method
#### Syntax
#### Call syntax

    id<CheckSettingsProtocol> target =  [ obj ignoreDisplacements    ]
    ;
    
    id<CheckSettingsProtocol> target =  [ obj ignoreDisplacements  : ignoreDisplacements   ]
    ;
    

#### Declaration

    (id<CheckSettingsProtocol>)ignoreDisplacements:(BOOL)ignoreDisplacements

#### Parameters

ignoreDisplacements

Type: BOOL

If a value of true is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed.

#### Return value

Type:  id`<CheckSettingsProtocol>`

#### Remarks


Ignore displacements is only active when using a Match level of [MatchLevelStrict](./matchlevel) or [MatchLevelContent](./matchlevel)

### layout method
#### Syntax
#### Call syntax

    id<CheckSettingsProtocol> target =  [ obj layout  : regions   ]
    ;
    
    id<CheckSettingsProtocol> target =  [ obj layout    ]
    ;
    

#### Declaration

    (id<CheckSettingsProtocol>)layout

#### Parameters

regions

Type: NSArray<[Region](./region) \*>\*

An array of Region objects that defines rectangular areas in the checked image.

#### Return value

Type:  id`<CheckSettingsProtocol>`

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You can call this method in two ways - with parameters and without parameters. The meaning of the method, and the way it can be used is different in each case. When the method is called without parameters it sets the default match level for this target. When called with one or more regions as parameters it defines the match level for that region. The sections below provide some more details regarding how to use this method in each of these modes.

### Called without parameters

If this method is called without parameters then it sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`matchLevel`](./eyes#matchlevel-property).

For a given target you may call only one of the following methods (without parameters) that set a target default match level:

*   [`matchLevel`](./checksettings#matchlevel-method)
*   [`strict`](#strict-method)
*   [`content`](#content-method)
*   [`layout`](#layout-method)
*   [`exact`](#exact-method)

### Called with parameters

When the method is called with one or more parameters that define one or more regions, then these set the match level for those regions, overiding the defaults set for the target (by calling these methods without a parameter), set by [`matchLevel`](./eyes#matchlevel-property) and the hardcoded default match level.

You may define multiple regions that have an explicit match level by calling this method multiple times in a chain, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`checksettings.strictregions (not yet available in imagesappkit objectivec)(regions)`](#), [`checksettings.layoutregions (not yet available in imagesappkit objectivec)(regions)`](#)., [`checksettings.contentregions (not yet available in imagesappkit objectivec)(regions)`](#) should not overlap each other or the regions defined using [`ignore(regions)`](#ignore-method). [`checksettings.ignoreregions (not yet available in imagesappkit objectivec)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### matchLevel method
#### Syntax
#### Call syntax

    id<CheckSettingsProtocol> target =  [ obj matchLevel  : matchLevel   ]
    ;
    

#### Declaration

    (id<CheckSettingsProtocol>)matchLevel:(MatchLevel)matchLevel

#### Parameters

matchLevel

Type: [MatchLevel](./matchlevel)

Available match level values are:

*   [MatchLevelNone](./matchlevel)
*   [MatchLevelStrict](./matchlevel)
*   [MatchLevelLayout](./matchlevel)
*   [MatchLevelContent](./matchlevel)
*   [MatchLevelExact](./matchlevel)

For a description of these match levels and the different ways to apply them to tests, checkpoints, and regions, see [Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

#### Return value

Type:  id`<CheckSettingsProtocol>`

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


The value provided here overrides the default match level, or the global value set for this target using [\[Eyes matchLevel\]](./eyes#matchlevel-property) or [\[Configuration matchLevel\]](./configuration#matchlevel-property). You may only call this method once in a given chain. If you call this method, then you can't call the other match level methods. [\[ImagesCheckSettings strict\]](#strict-method)[\[ImagesCheckSettings content\]](#content-method)[\[ImagesCheckSettings layout\]](#layout-method)[\[ImagesCheckSettings exact\]](#exact-method)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### region method
#### Syntax
#### Call syntax

    instancetype target =  [ obj region  : region   ]
    ;
    

#### Declaration

    (instancetype)region:(Region *)region

#### Parameters

region

Type: [Region](./region)\*

An object that defines a rectangular area in the window.

An object that defines the region.

#### Return value

Type:  instancetype

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


The parameter to the method specifies the region to be matched. You may only call this method once in a given chain.

### strict method
#### Syntax
#### Call syntax

    id<CheckSettingsProtocol> target =  [ obj strict  : regions   ]
    ;
    
    id<CheckSettingsProtocol> target =  [ obj strict    ]
    ;
    

#### Declaration

    (id<CheckSettingsProtocol>)strict

#### Parameters

regions

Type: NSArray<[Region](./region) \*>\*

One or more region definitions.

#### Return value

Type:  id`<CheckSettingsProtocol>`

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You can call this method in two ways - with parameters and without parameters. The meaning of the method, and the way it can be used is different in each case. When the method is called without parameters it sets the default match level for this target. When called with one or more regions as parameters it defines the match level for that region. The sections below provide some more details regarding how to use this method in each of these modes.

### Called without parameters

If this method is called without parameters then it sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`matchLevel`](./eyes#matchlevel-property).

For a given target you may call only one of the following methods (without parameters) that set a target default match level:

*   [`matchLevel`](./checksettings#matchlevel-method)
*   [`strict`](#strict-method)
*   [`content`](#content-method)
*   [`layout`](#layout-method)
*   [`exact`](#exact-method)

### Called with parameters

When the method is called with one or more parameters that define one or more regions, then these set the match level for those regions, overiding the defaults set for the target (by calling these methods without a parameter), set by [`matchLevel`](./eyes#matchlevel-property) and the hardcoded default match level.

You may define multiple regions that have an explicit match level by calling this method multiple times in a chain, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`checksettings.strictregions (not yet available in imagesappkit objectivec)(regions)`](#), [`checksettings.layoutregions (not yet available in imagesappkit objectivec)(regions)`](#)., [`checksettings.contentregions (not yet available in imagesappkit objectivec)(regions)`](#) should not overlap each other or the regions defined using [`ignore(regions)`](#ignore-method). [`checksettings.ignoreregions (not yet available in imagesappkit objectivec)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### timeoutInSeconds method
#### Syntax
#### Call syntax

    id<CheckSettingsProtocol> target =  [ obj timeoutInSeconds  : timeoutInSeconds   ]
    ;
    

#### Declaration

    (id<CheckSettingsProtocol>)timeoutInSeconds:(NSUInteger)timeoutInSeconds

#### Parameters

timeoutInSeconds

Type: NSUInteger

The timeout to use in second units.

#### Return value

Type:  id`<CheckSettingsProtocol>`

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may only call this method once in a given chain. The timeout value provided here overrides the default value or the value set by [matchTimeout](./eyes#matchtimeout-property) for the current target. Passing this method a value of zero disables the timeout mechanism.

### withStatusBar method
#### Syntax
#### Call syntax

    id<CheckSettingsProtocol> target =  [ obj withStatusBar    ]
    ;
    

#### Declaration

    (id<CheckSettingsProtocol>)withStatusBar

#### Parameters

This method does not take any parameters.

#### Return value

Type:  id`<CheckSettingsProtocol>`

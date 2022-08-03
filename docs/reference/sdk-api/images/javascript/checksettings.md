# ImagesCheckSettings class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

Require statement

    const {ImagesCheckSettings} = require('@applitools/eyes-images');
    	


### accessibilityRegion method
#### Syntax


    eyes.check(Target.window().accessibilityRegion(region, regionType));
    

#### Parameters

region

Type: 

    GetAccessibilityRegion|Region|AccessibilityMatchSettings

An object that defines a rectangular area in the window.

regionType

Type: [AccessibilityRegionType](./accessibilityregiontype)

The accessibility type of the region.

#### Return value

Type:  [ImagesCheckSettings](./checksettings)

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### content method
#### Syntax


    eyes.check(Target.window().content());
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [ImagesCheckSettings](./checksettings)

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

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`strictRegions(regions)`](./checksettings#strictregions-method), [`layoutRegions(regions)`](./checksettings#layoutregions-method)., [`contentRegions(regions)`](./checksettings#contentregions-method) should not overlap each other or the regions defined using [`ignore(regions)`](#ignore-method). [`ignoreRegions(regions)`](./checksettings#ignoreregions-method). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### contentRegions method
#### Syntax


    eyes.check(Target.window().contentRegions(regions));
    

#### Parameters

regions

Type: 

    GetRegion|Region

One or more region descriptors or selectors in one of the defined types.

#### Return value

Type:  [ImagesCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may define multiple regions that have an explicit match level by calling this method multiple times, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`strictRegions(regions)`](./checksettings#strictregions-method), [`layoutRegions(regions)`](./checksettings#layoutregions-method)., [`contentRegions(regions)`](./checksettings#contentregions-method) should not overlap each other or the regions defined using [`ignore(regions)`](#ignore-method). [`ignoreRegions(regions)`](./checksettings#ignoreregions-method). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### exact method
#### Syntax


    eyes.check(Target.window().exact());
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [ImagesCheckSettings](./checksettings)

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

*   [`strictRegions`](./checksettings#strictregions-method)
*   [`contentRegions`](./checksettings#contentregions-method)
*   [`layoutRegions`](./checksettings#layoutregions-method)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### floatingRegion method
#### Syntax


    eyes.check(
      Target.window().floatingRegion(
        region,
        maxUpOffset,
        maxDownOffset,
        maxLeftOffset,
        maxRightOffset
      )
    );
    
    eyes.check(
      Target.window().floatingRegion(
        region,
        maxUpOffset,
        maxDownOffset,
        maxLeftOffset
      )
    );
    
    eyes.check(Target.window().floatingRegion(region, maxUpOffset, maxDownOffset));
    
    eyes.check(Target.window().floatingRegion(region, maxUpOffset));
    
    eyes.check(Target.window().floatingRegion(region));
    

#### Parameters

region

Type: 

    GetFloatingRegion|Region|FloatingMatchSettings

An object that defines the region.

maxUpOffset

Type: number \[Optional \]

The maximum amount that the region can shift upwards and still be considered matching.

maxDownOffset

Type: number \[Optional \]

The maximum amount that the region can shift downwards and still be considered matching.

maxLeftOffset

Type: number \[Optional \]

The maximum amount that the region can shift to the left and still be considered matching.

maxRightOffset

Type: number \[Optional \]

The maximum amount that the region can shift to the right and still be considered matching.

#### Return value

Type:  [ImagesCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may call this method multiple times in a given chain; each call defines a different floating region. Floating regions may not overlap each other or other types of regions, such as ignore or match level regions.

### floatingRegions method
#### Syntax


    eyes.check(Target.window().floatingRegions(maxOffset));
    

#### Parameters

maxOffset

Type: number

The maximum amount that the region can shift in any direction and still be considered matching.

#### Return value

Type:  [ImagesCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

### ignore method
#### Syntax


    eyes.check(Target.window().ignore(region));
    

#### Parameters

region

Type: 

    GetRegion|Region|By|String|EyesWebElement|Object

An object that defines a rectangular area in the window.

#### Return value

Type:  CheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may call this method multiple times in a given chain.

Ignore regions should not overlap each other or other types of regions such as floating or match level regions.

### ignoreCaret method
#### Syntax


    eyes.check(Target.window().ignoreCaret(ignoreCaret));
    
    eyes.check(Target.window().ignoreCaret());
    

#### Parameters

ignoreCaret

Type: boolean \[Optional : default = true \]

If this parameter has a value of true, then Eyes will detect artifacts caused by a blinking cursor and will not report a mismatch for differences caused by these artifacts. If it has a value of , then Eyes will not try to detect artifacts caused by blinking cursors. If no parameter is passed then the default value is true - so the cursor artifacts will be ignored.

#### Return value

Type:  [ImagesCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may only call this method once in a given chain. This method overrides the global default setting or the setting chosen explicitly for the current target using [Eyes.setIgnoreCaret](./eyes#setignorecaret-method) method or [Configuration.setIgnoreCaret](./configuration#setignorecaret-method) method.

### ignoreDisplacements method
#### Syntax


    eyes.check(Target.window().ignoreDisplacements(ignoreDisplacements));
    
    eyes.check(Target.window().ignoreDisplacements());
    

#### Parameters

ignoreDisplacements

Type: boolean \[Optional : default = true \]

If a value of true is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed.

#### Return value

Type:  [ImagesCheckSettings](./checksettings)

#### Remarks


Ignore displacements is only active when using a Match level of [Strict](./matchlevel) or [Content](./matchlevel)

### ignoreRegions method
#### Syntax


    eyes.check(Target.window().ignoreRegions(regions));
    

#### Parameters

regions

Type: 

    GetRegion|Region

A region defined by one of the possible types.

#### Return value

Type:  [ImagesCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may call this method multiple times in a given chain. Ignore regions should not overlap each other or other types of regions (i.e. floating or match level regions).

### imageSize method
#### Syntax


    eyes.check(Target.window().imageSize(imageSize));
    

#### Parameters

imageSize

Type: [RectangleSize](./rectanglesize)

A rectangular area that represents the size of the image.

#### Return value

Type:  [ImagesCheckSettings](./checksettings)

### layout method
#### Syntax


    eyes.check(Target.window().layout());
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [ImagesCheckSettings](./checksettings)

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

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`strictRegions(regions)`](./checksettings#strictregions-method), [`layoutRegions(regions)`](./checksettings#layoutregions-method)., [`contentRegions(regions)`](./checksettings#contentregions-method) should not overlap each other or the regions defined using [`ignore(regions)`](#ignore-method). [`ignoreRegions(regions)`](./checksettings#ignoreregions-method). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### layoutRegions method
#### Syntax


    eyes.check(Target.window().layoutRegions(regions));
    

#### Parameters

regions

Type: 

    GetRegion|Region

One or more region descriptors or selectors in one of the defined types.

#### Return value

Type:  [ImagesCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may define multiple regions that have an explicit match level by calling this method multiple times, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`strictRegions(regions)`](./checksettings#strictregions-method), [`layoutRegions(regions)`](./checksettings#layoutregions-method)., [`contentRegions(regions)`](./checksettings#contentregions-method) should not overlap each other or the regions defined using [`ignore(regions)`](#ignore-method). [`ignoreRegions(regions)`](./checksettings#ignoreregions-method). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### matchLevel method
#### Syntax


    eyes.check(Target.window().matchLevel(matchLevel));
    

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

Type:  [ImagesCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


The value provided here overrides the default match level, or the global value set for this target using [Eyes.setMatchLevel](./eyes#setmatchlevel-method) or [Configuration.setMatchLevel](./configuration#setmatchlevel-method). You may only call this method once in a given chain. If you call this method, then you can't call the other match level methods. [ImagesCheckSettings.strict](#strict-method)[ImagesCheckSettings.content](#content-method)[ImagesCheckSettings.layout](#layout-method)[ImagesCheckSettings.exact](#exact-method)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### region method
#### Syntax


    eyes.check(Target.window().region(region));
    

#### Parameters

region

Type: 

    Region|RegionObject

An object that defines the region.

#### Type definitions

RegionObject

The type RegionObject is defined as: {left:number,top:number,width:number,height:number,coordinatesType: CoordinatesType|undefined} The field coordinatesType is for internal use only and should not be set by users.

#### Return value

Type:  [ImagesCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


The parameter to the method specifies the region to be matched. You may only call this method once in a given chain.

### strict method
#### Syntax


    eyes.check(Target.window().strict());
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [ImagesCheckSettings](./checksettings)

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

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`strictRegions(regions)`](./checksettings#strictregions-method), [`layoutRegions(regions)`](./checksettings#layoutregions-method)., [`contentRegions(regions)`](./checksettings#contentregions-method) should not overlap each other or the regions defined using [`ignore(regions)`](#ignore-method). [`ignoreRegions(regions)`](./checksettings#ignoreregions-method). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### strictRegions method
#### Syntax


    eyes.check(Target.window().strictRegions(regions));
    

#### Parameters

regions

Type: 

    GetRegion|Region

One or more region descriptors or selectors in one of the defined types.

#### Return value

Type:  [ImagesCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may define multiple regions that have an explicit match level by calling this method multiple times, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`strictRegions(regions)`](./checksettings#strictregions-method), [`layoutRegions(regions)`](./checksettings#layoutregions-method)., [`contentRegions(regions)`](./checksettings#contentregions-method) should not overlap each other or the regions defined using [`ignore(regions)`](#ignore-method). [`ignoreRegions(regions)`](./checksettings#ignoreregions-method). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### withName method
#### Syntax


    eyes.check(Target.window().withName(name));
    

#### Parameters

name

Type: string

The name to be given to this check point.

#### Return value

Type:  [ImagesCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may only call this method once in a given chain.

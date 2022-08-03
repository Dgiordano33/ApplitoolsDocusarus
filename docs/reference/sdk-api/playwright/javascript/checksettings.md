# CheckSettings class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Playwright</b>
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


### accessibilityRegion method
#### Syntax


    eyes.check(Target.window().accessibilityRegion(region_obj1));
    
    eyes.check(Target.window().accessibilityRegion(region_obj2, type));
    
    eyes.check(Target.window().accessibilityRegion(region_obj2));
    
    eyes.check(Target.window().accessibilityRegion(region_ele, type));
    
    eyes.check(Target.window().accessibilityRegion(region_ele));
    
    eyes.check(Target.window().accessibilityRegion(region_sel, type));
    
    eyes.check(Target.window().accessibilityRegion(region_sel));
    

#### Parameters

region_obj1

Type: {
      region: RegionPlain | ElementHandle | Selector;
      type?: AccessibilityRegionType | undefined;
    }; 

An object that defines a rectangular area in the window.

#### Type definitions

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

region_obj2

Type: RegionPlain

An object that defines a rectangular area in the window.

#### Type definitions

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

type

Type: [AccessibilityRegionType](./accessibilityregiontype) \[Optional \]

The accessibility type of the region.

region_ele

Type: ElementHandle

An element whose position and bounding rectangle defines the region.

region_sel

Type: Selector

A selector to an element whose position and bounding rectangle defines the region.

#### Type definitions

Selector

Used to identify an HTML element defined as string|{selector:string;Type: string}.

#### Return value

Type:  [CheckSettings](./checksettings)

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### accessibilityRegions method
#### Syntax


    eyes.check(Target.window().accessibilityRegions(regions_arr1));
    
    eyes.check(Target.window().accessibilityRegions(type, regions_arr2));
    

#### Parameters

regions_arr1

Type: (
      | {
          region: RegionPlain | ElementHandle | Selector;
          type?: AccessibilityRegionType | undefined;
        }
      | RegionPlain
      | ElementHandle
      | Selector
    )[]; 

An array of literal objects that specify the accessibility regionions to be analyzed, and their accessibility types.

#### Type definitions

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

type

Type: [AccessibilityRegionType](./accessibilityregiontype)

The accessibility type of the region to apply to all of the regions.

regions_arr2

Type: 

    (RegionPlain|ElementHandle|Selector)[]

One or more objects that define accessibility regions to be analyzed. The regions can be defined in various ways depending on the type passed.

#### Type definitions

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

#### Return value

Type:  [CheckSettings](./checksettings)

### beforeRenderScreenshotHook method
#### Syntax


    eyes.check(Target.window().beforeRenderScreenshotHook(script));
    

#### Parameters

script

Type: string

A string with legal JavaScript code.

#### Return value

Type:  [CheckSettings](./checksettings)

### content method
#### Syntax


    eyes.check(Target.window().content());
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [CheckSettings](./checksettings)

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

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`strictRegions(regions)`](./checksettings#strictregions-method), [`layoutRegions(regions)`](./checksettings#layoutregions-method)., [`contentRegions(regions)`](./checksettings#contentregions-method) should not overlap each other or the regions defined using [`checksettings.ignore (not yet available in playwright javascript)(regions)`](#). [`ignoreRegions(regions)`](./checksettings#ignoreregions-method). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### contentRegions method
#### Syntax


    eyes.check(Target.window().contentRegions(regions));
    

#### Parameters

regions

Type: 

    (RegionPlain|ElementHandle|Selector)[]

One or more region descriptors or selectors in one of the defined types.

#### Type definitions

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

#### Return value

Type:  [CheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may define multiple regions that have an explicit match level by calling this method multiple times, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`strictRegions(regions)`](./checksettings#strictregions-method), [`layoutRegions(regions)`](./checksettings#layoutregions-method)., [`contentRegions(regions)`](./checksettings#contentregions-method) should not overlap each other or the regions defined using [`checksettings.ignore (not yet available in playwright javascript)(regions)`](#). [`ignoreRegions(regions)`](./checksettings#ignoreregions-method). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### exact method
#### Syntax


    eyes.check(Target.window().exact());
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [CheckSettings](./checksettings)

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


    eyes.check(Target.window().floatingRegion(region_obj1));
    
    eyes.check(
      Target.window().floatingRegion(
        region_obj2,
        maxUpOffset,
        maxDownOffset,
        maxLeftOffset,
        maxRightOffset
      )
    );
    
    eyes.check(
      Target.window().floatingRegion(
        region_obj2,
        maxUpOffset,
        maxDownOffset,
        maxLeftOffset
      )
    );
    
    eyes.check(
      Target.window().floatingRegion(region_obj2, maxUpOffset, maxDownOffset)
    );
    
    eyes.check(Target.window().floatingRegion(region_obj2, maxUpOffset));
    
    eyes.check(Target.window().floatingRegion(region_obj2));
    
    eyes.check(
      Target.window().floatingRegion(
        region_ele,
        maxUpOffset,
        maxDownOffset,
        maxLeftOffset,
        maxRightOffset
      )
    );
    
    eyes.check(
      Target.window().floatingRegion(
        region_ele,
        maxUpOffset,
        maxDownOffset,
        maxLeftOffset
      )
    );
    
    eyes.check(
      Target.window().floatingRegion(region_ele, maxUpOffset, maxDownOffset)
    );
    
    eyes.check(Target.window().floatingRegion(region_ele, maxUpOffset));
    
    eyes.check(Target.window().floatingRegion(region_ele));
    
    eyes.check(
      Target.window().floatingRegion(
        region_sel,
        maxUpOffset,
        maxDownOffset,
        maxLeftOffset,
        maxRightOffset
      )
    );
    
    eyes.check(
      Target.window().floatingRegion(
        region_sel,
        maxUpOffset,
        maxDownOffset,
        maxLeftOffset
      )
    );
    
    eyes.check(
      Target.window().floatingRegion(region_sel, maxUpOffset, maxDownOffset)
    );
    
    eyes.check(Target.window().floatingRegion(region_sel, maxUpOffset));
    
    eyes.check(Target.window().floatingRegion(region_sel));
    

#### Parameters

region_obj1

Type: {
      region: RegionPlain | ElementHandle | Selector;
      maxUpOffset?: number;
      maxDownOffset?: number;
      maxLeftOffset?: number;
      maxRightOffset?: number;
    }; 

{
      region: RegionPlain | ElementHandle | Selector;
      maxUpOffset?: number;
      maxDownOffset?: number;
      maxLeftOffset?: number;
      maxRightOffset?: number;
    }; 

#### Type definitions

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

region_obj2

Type: RegionPlain

RegionPlain

#### Type definitions

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

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

region_ele

Type: ElementHandle

An element whose position and bounding rectangle defines the region.

region_sel

Type: Selector

A selector to an element whose position and bounding rectangle defines the region.

#### Type definitions

Selector

Used to identify an HTML element defined as string|{selector:string;Type: string}.

#### Return value

Type:  [CheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may call this method multiple times in a given chain; each call defines a different floating region. Floating regions may not overlap each other or other types of regions, such as ignore or match level regions.

### floatingRegions method
#### Syntax


    eyes.check(Target.window().floatingRegions(regions_arr1));
    
    eyes.check(Target.window().floatingRegions(maxOffset, regions_arr2));
    

#### Parameters

regions_arr1

Type: (
      | {
          region: RegionPlain | ElementHandle | Selector;
          maxUpOffset?: number;
          maxDownOffset?: number;
          maxLeftOffset?: number;
          maxRightOffset?: number;
        }
      | RegionPlain
      | ElementHandle
      | Selector
    )[]; 

One or more regions, selectors or elements that describe the floating region.

An array of objects, each of which defines a region and the offsets to allow.

#### Type definitions

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

maxOffset

Type: number

The maximum amount that the region can shift in any direction and still be considered matching.

regions_arr2

Type: 

    (RegionPlain|ElementHandle|Selector)[]

One or more regions, selectors or elements that describe the floating region.

An array of objects that define regions.

#### Type definitions

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

#### Return value

Type:  [CheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

### frame method
#### Syntax


    eyes.check(Target.frame(frame).frame(context));
    eyes.check(Target.frame(frame).frame(frame_ele, scrollRootElement_ele));
    eyes.check(Target.frame(frame).frame(frame_ele));
    eyes.check(Target.frame(frame).frame(frame_ele, scrollRootElement_sel));
    
    eyes.check(Target.frame(frame).frame(frame_sel, scrollRootElement_ele));
    eyes.check(Target.frame(frame).frame(frame_sel));
    eyes.check(Target.frame(frame).frame(frame_sel, scrollRootElement_sel));
    
    eyes.check(Target.frame(frame).frame(frame_str, scrollRootElement_ele));
    eyes.check(Target.frame(frame).frame(frame_str));
    eyes.check(Target.frame(frame).frame(frame_str, scrollRootElement_sel));
    
    eyes.check(Target.frame(frame).frame(frame_num, scrollRootElement_ele));
    eyes.check(Target.frame(frame).frame(frame_num));
    eyes.check(Target.frame(frame).frame(frame_num, scrollRootElement_sel));
    

#### Parameters

context

Type: {
      frame: ElementHandle | Selector | string | number;
      scrollRootElement?: ElementHandle | Selector;
    }; 

{
      frame: ElementHandle | Selector | string | number;
      scrollRootElement?: ElementHandle | Selector;
    }; 

frame_ele

Type: ElementHandle

A descriptor for the frame.

An element the contains the frame.

scrollRootElement_ele

Type: ElementHandle \[Optional \]

The element or a selector that should be scrolled to access the frame.

An element that should be scrolled to access the frame. The element or a selector that should be scrolled to access the frame.

scrollRootElement_sel

Type: Selector \[Optional \]

The element or a selector that should be scrolled to access the frame.

A selector to an element that should be scrolled to access the frame. The element or a selector that should be scrolled to access the frame.

#### Type definitions

Selector

Used to identify an HTML element defined as string|{selector:string;Type: string}.

frame_sel

Type: Selector

A descriptor for the frame.

A selector the selects the frame.

#### Type definitions

Selector

Used to identify an HTML element defined as string|{selector:string;Type: string}.

frame_str

Type: string

A descriptor for the frame.

The name attribute of the frame.

frame_num

Type: number

A descriptor for the frame.

The index of the frame element as defined by Selenium.

#### Return value

Type:  [CheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may only use this method in the chain if the first method in the chain is [frame](#frame-method). You may not call it if the first method in the chain is [window](#window-method) or [region](#region-method). Call this method multiple times to descend a hierarchy of embedded frames.

### fully method
#### Syntax


    eyes.check(Target.window().fully(fully));
    
    eyes.check(Target.window().fully());
    

#### Parameters

fully

Type: boolean \[Optional \]

If this parameter has a value of true, then Eyes uses scrolling and stitching to capture the entire page. If it's false, then only the viewport will be captured. If the method is called without a parameter, then the default is true.

#### Return value

Type:  [CheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


This method overrides the global default or the most recent value set by the [Eyes.setForceFullPageScreenshot](./eyes#setforcefullpagescreenshot-method) method or [Configuration.setForceFullPageScreenshot](./configuration#setforcefullpagescreenshot-method) method. If stitching is done, then the stitch mode used, [StitchMode.CSS](./stitchmode) or [StitchMode.SCROLL](./stitchmode) is determined by the global default or the value set using, [Eyes.setStitchMode](./eyes#setstitchmode-method) or [Configuration.setStitchMode](./configuration#setstitchmode-method) You can use the [CheckSettings.scrollRootElement](./checksettings#scrollrootelement-method) method to specify which element should be scrolled to render all of the content of the page. You may only specify one such element per checkpoint. You may only call this method once in a given target.

### ignoreCaret method
#### Syntax


    eyes.check(Target.window().ignoreCaret(ignoreCaret));
    
    eyes.check(Target.window().ignoreCaret());
    

#### Parameters

ignoreCaret

Type: boolean \[Optional \]

If this parameter has a value of true, then Eyes will detect artifacts caused by a blinking cursor and will not report a mismatch for differences caused by these artifacts. If it has a value of , then Eyes will not try to detect artifacts caused by blinking cursors. If no parameter is passed then the default value is true - so the cursor artifacts will be ignored.

#### Return value

Type:  [CheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may only call this method once in a given chain. This method overrides the global default setting or the setting chosen explicitly for the current target using [Eyes.setIgnoreCaret](./eyes#setignorecaret-method) method or [Configuration.setIgnoreCaret](./configuration#setignorecaret-method) method.

### ignoreDisplacements method
#### Syntax


    eyes.check(Target.window().ignoreDisplacements(ignoreDisplacements));
    
    eyes.check(Target.window().ignoreDisplacements());
    

#### Parameters

ignoreDisplacements

Type: boolean \[Optional \]

If a value of true is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed.

#### Return value

Type:  [CheckSettings](./checksettings)

#### Remarks


Ignore displacements is only active when using a Match level of [Strict](./matchlevel) or [Content](./matchlevel)

### ignoreRegions method
#### Syntax


    eyes.check(Target.window().ignoreRegions(ignoreRegions));
    

#### Parameters

ignoreRegions

Type: 

    (RegionPlain|ElementHandle|Selector)[]

A region defined by one of the possible types.

#### Type definitions

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

#### Return value

Type:  [CheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may call this method multiple times in a given chain. Ignore regions should not overlap each other or other types of regions (i.e. floating or match level regions).

### layout method
#### Syntax


    eyes.check(Target.window().layout());
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [CheckSettings](./checksettings)

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

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`strictRegions(regions)`](./checksettings#strictregions-method), [`layoutRegions(regions)`](./checksettings#layoutregions-method)., [`contentRegions(regions)`](./checksettings#contentregions-method) should not overlap each other or the regions defined using [`checksettings.ignore (not yet available in playwright javascript)(regions)`](#). [`ignoreRegions(regions)`](./checksettings#ignoreregions-method). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### layoutBreakpoints method
#### Syntax


    eyes.check(Target.window().layoutBreakpoints(layoutBreakpoints_bool));
    
    eyes.check(Target.window().layoutBreakpoints());
    
    eyes.check(Target.window().layoutBreakpoints(layoutBreakpoints_arr));
    

#### Parameters

layoutBreakpoints_bool

Type: boolean \[Optional \]

You can either pass a boolean value or a number. Pass a value of true to enable this feature. Pass one or more viewport widths explicitly, and the JavaScript is executed and the DOM is extracted for each viewport width. For each target, the Ultrafast Grid uses the DOM extracted with the widest viewport that is smaller than the viewport width. For example, if the values 640, 768 and 1024 are passed, then targets with a width between 640 and 767 (inclusive) use the DOM extracted at 640. Similarly, targets between 768 and 1023 use the DOM extracted at 768. Targets that have a width smaller than the smallest defined width use a DOM extracted at one less than the smallest DOM width (639 in this example). Targets that have a width larger than the largest width defined (1024 in this example) use the DOM extracted at the largest width. If no width is specified, then a separate DOM is extracted for each distinct execution environment viewport width.

layoutBreakpoints_arr

Type: number\[\] \[Optional \]

You can either pass a boolean value or a number. Pass a value of true to enable this feature. Pass one or more viewport widths explicitly, and the JavaScript is executed and the DOM is extracted for each viewport width. For each target, the Ultrafast Grid uses the DOM extracted with the widest viewport that is smaller than the viewport width. For example, if the values 640, 768 and 1024 are passed, then targets with a width between 640 and 767 (inclusive) use the DOM extracted at 640. Similarly, targets between 768 and 1023 use the DOM extracted at 768. Targets that have a width smaller than the smallest defined width use a DOM extracted at one less than the smallest DOM width (639 in this example). Targets that have a width larger than the largest width defined (1024 in this example) use the DOM extracted at the largest width. If no width is specified, then a separate DOM is extracted for each distinct execution environment viewport width.

#### Return value

Type:  [CheckSettings](./checksettings)

#### Remarks


This method enables and sets breakpoints for the current checkpoint. It overrides the default values when the test is configured with a previous use of undefined.

### layoutRegions method
#### Syntax


    eyes.check(Target.window().layoutRegions(layoutRegions));
    

#### Parameters

layoutRegions

Type: 

    (RegionPlain|ElementHandle|Selector)[]

One or more region descriptors or selectors in one of the defined types.

#### Type definitions

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

#### Return value

Type:  [CheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may define multiple regions that have an explicit match level by calling this method multiple times, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`strictRegions(regions)`](./checksettings#strictregions-method), [`layoutRegions(regions)`](./checksettings#layoutregions-method)., [`contentRegions(regions)`](./checksettings#contentregions-method) should not overlap each other or the regions defined using [`checksettings.ignore (not yet available in playwright javascript)(regions)`](#). [`ignoreRegions(regions)`](./checksettings#ignoreregions-method). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

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

Type:  [CheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


The value provided here overrides the default match level, or the global value set for this target using [Eyes.setMatchLevel](./eyes#setmatchlevel-method) or [Configuration.setMatchLevel](./configuration#setmatchlevel-method). You may only call this method once in a given chain. If you call this method, then you can't call the other match level methods. [CheckSettings.strict](#strict-method)[CheckSettings.content](#content-method)[CheckSettings.layout](#layout-method)[CheckSettings.exact](#exact-method)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### region method
#### Syntax


    eyes.check(Target.window().region(region_obj));
    
    eyes.check(Target.window().region(region_ele));
    
    eyes.check(Target.window().region(region_sel));
    

#### Parameters

region_obj

Type: RegionPlain

An object that defines a rectangular area in the window.

RegionPlain

#### Type definitions

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

region_ele

Type: ElementHandle

An object that defines a rectangular area in the window.

An element whose position and bounding rectangle defines the region.

region_sel

Type: Selector

An object that defines a rectangular area in the window.

A selector to an element whose position and bounding rectangle defines the region.

#### Type definitions

Selector

Used to identify an HTML element defined as string|{selector:string;Type: string}.

#### Return value

Type:  [CheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


The parameter to the method specifies the region to be matched. The enclosing frame(s) are selected by the previous calls in the chain to [Target.frame](#frame-method). You may only use this method in the chain if the first method in the chain is [Target.frame](#frame-method). You may not call it if the first method in the chain is [Target.window](#window-method) or [Target.region](#region-method). To match a region within a window, use the method [Target.region](#region-method) as the first method in the Target chain. You may only call this method once in a given chain.

### scrollRootElement method
#### Syntax


    eyes.check(Target.window().scrollRootElement(scrollRootElement_ele));
    
    eyes.check(Target.window().scrollRootElement(scrollRootElement_sel));
    

#### Parameters

scrollRootElement_ele

Type: ElementHandle

This object is the element to be scrolled.

scrollRootElement_sel

Type: Selector

This object is a selector to the element to be scrolled.

#### Type definitions

Selector

Used to identify an HTML element defined as string|{selector:string;Type: string}.

#### Return value

Type:  [CheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

### sendDom method
#### Syntax


    eyes.check(Target.window().sendDom(sendDom));
    
    eyes.check(Target.window().sendDom());
    

#### Parameters

sendDom

Type: boolean \[Optional \]

If a vlaue of true is passed then send DOM information for this checkpoint even if sending DOM is disabled globally.

#### Return value

Type:  [CheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

### strict method
#### Syntax


    eyes.check(Target.window().strict());
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [CheckSettings](./checksettings)

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

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`strictRegions(regions)`](./checksettings#strictregions-method), [`layoutRegions(regions)`](./checksettings#layoutregions-method)., [`contentRegions(regions)`](./checksettings#contentregions-method) should not overlap each other or the regions defined using [`checksettings.ignore (not yet available in playwright javascript)(regions)`](#). [`ignoreRegions(regions)`](./checksettings#ignoreregions-method). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### strictRegions method
#### Syntax


    eyes.check(Target.window().strictRegions(regions));
    

#### Parameters

regions

Type: 

    (RegionPlain|ElementHandle|Selector)[]

One or more region descriptors or selectors in one of the defined types.

#### Type definitions

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

#### Return value

Type:  [CheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may define multiple regions that have an explicit match level by calling this method multiple times, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`strictRegions(regions)`](./checksettings#strictregions-method), [`layoutRegions(regions)`](./checksettings#layoutregions-method)., [`contentRegions(regions)`](./checksettings#contentregions-method) should not overlap each other or the regions defined using [`checksettings.ignore (not yet available in playwright javascript)(regions)`](#). [`ignoreRegions(regions)`](./checksettings#ignoreregions-method). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### timeout method
#### Syntax


    eyes.check(Target.window().timeout(timeout));
    

#### Parameters

timeout

Type: number

The timeout to use in milliseconds.

#### Return value

Type:  [CheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may only call this method once in a given chain. The timeout value provided here overrides the default value or the value set by [setMatchTimeout](./eyes#setmatchtimeout-method) for the current target. Passing this method a value of zero disables the timeout mechanism.

### variationGroupId method
#### Syntax


    eyes.check(Target.window().variationGroupId(variationGroupId));
    

#### Parameters

variationGroupId

Type: string

The value of the variation group ID to be set.

#### Return value

Type:  [CheckSettings](./checksettings)

### visualGridOption method
#### Syntax


    eyes.check(Target.window().visualGridOption());
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [CheckSettings](./checksettings)

#### Remarks


The following configuration key/value pairs are currently supported:

'chromeHeadless'

Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of false to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

'polyfillAdoptedStyleSheets'

Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option polyfillAdoptedStyleSheets to a value of true or false:

*   Setting a value of true instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
*   Setting a value of false instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.setVisualGridOption](./configuration#visualgridoptions-property)

You can override the global value for a given checkpoint using the method [CheckSettings.visualGridOption](#).

#### Example


JavaScript

    eyes.check(
            Target.window()
                    .visualGridOptions(new VisualGridOption("polyfillAdoptedStyleSheets", true)));

### withName method
#### Syntax


    eyes.check(Target.window().withName(name));
    

#### Parameters

name

Type: string

The name to be given to this check point.

#### Return value

Type:  [CheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may only call this method once in a given chain.

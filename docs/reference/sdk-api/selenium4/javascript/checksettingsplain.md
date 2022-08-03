# CheckSettingsPlain class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium4</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../puppeteer/javascript/checksettingsplain'>Puppeteer Javascript</a>
<a href='../../selenium4/javascript/checksettingsplain'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/checksettingsplain'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/checksettingsplain'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/checksettingsplain'>Nightwatch Javascript</a>
<a href='../../protractor/javascript/checksettingsplain'>Protractor Javascript</a>
<a href='../../wdiogeneric/javascript/checksettingsplain'>Wdiogeneric Javascript</a>
</div></div><br /><br /></div>




The methods in this type are used as part of the [check](#check-method) Fluent API to configure and execute checkpoints.

To use these methods, first create a target object using a method from the [Target](./target) class, then call one or more of the methods in this type on the returned object, chaining them one after the other using the '.' operator.


### accessibilityRegions property
#### Syntax


    eyes.check({ accessibilityRegions: value });
    

Type: 

    (
      | {
          region: RegionPlain | WebElement | Selector;
          type?: AccessibilityRegionTypePlain;
        }
      | RegionPlain
      | WebElement
      | Selector
    )[];
    

#### Type definitions

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

Selector

Used to identify an HTML element defined as |import('selenium-webdriver').Locator|{using:string;value:string}|string|{selector:string;Type: string}.

AccessibilityRegionTypePlain

This type allows passing strings instead of enumerated values, for the list of enum values see [AccessibilityRegionType](./accessibilityregiontype).

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

Selector

Used to identify an HTML element defined as |import('selenium-webdriver').Locator|{using:string;value:string}|string|{selector:string;Type: string}.

### contentRegions property
#### Syntax


    eyes.check({ contentRegions: value });
    

Type: 

    (RegionPlain|WebElement|Selector)[]

#### Type definitions

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

Selector

Used to identify an HTML element defined as |import('selenium-webdriver').Locator|{using:string;value:string}|string|{selector:string;Type: string}.

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may define multiple regions that have an explicit match level by calling this method multiple times, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`strictRegions(regions)`](./checksettings#strictregions-method), [`layoutRegions(regions)`](./checksettings#layoutregions-method)., [`contentRegions(regions)`](./checksettings#contentregions-method) should not overlap each other or the regions defined using [`checksettings.ignore (not yet available in selenium4 javascript)(regions)`](#). [`ignoreRegions(regions)`](./checksettings#ignoreregions-method). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### floatingRegions property
#### Syntax


    eyes.check({ floatingRegions: value });
    

Type: 

    (
      | {
          region: RegionPlain | WebElement | Selector;
          maxUpOffset?: number;
          maxDownOffset?: number;
          maxLeftOffset?: number;
          maxRightOffset?: number;
        }
      | RegionPlain
      | WebElement
      | Selector
    )[];
    

#### Type definitions

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

Selector

Used to identify an HTML element defined as |import('selenium-webdriver').Locator|{using:string;value:string}|string|{selector:string;Type: string}.

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

Selector

Used to identify an HTML element defined as |import('selenium-webdriver').Locator|{using:string;value:string}|string|{selector:string;Type: string}.

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

### frames property
#### Syntax


    eyes.check({ frames: value });
    

Type: 

    (
      | {
          frame: WebElement | Selector | string | number;
          scrollRootElement?: WebElement | Selector;
        }
      | WebElement
      | Selector
      | string
      | number
    )[];
    

#### Type definitions

Selector

Used to identify an HTML element defined as |import('selenium-webdriver').Locator|{using:string;value:string}|string|{selector:string;Type: string}.

Selector

Used to identify an HTML element defined as |import('selenium-webdriver').Locator|{using:string;value:string}|string|{selector:string;Type: string}.

Selector

Used to identify an HTML element defined as |import('selenium-webdriver').Locator|{using:string;value:string}|string|{selector:string;Type: string}.

An array of frame elements or frame selectors, as defined by the type, that represent the top to bottom hierarchy of frames to the frame that encloses the region or element to be checked.

### fully property
#### Syntax


    eyes.check({ fully: value });
    

Type: boolean

If this parameter has a value of true, then Eyes uses scrolling and stitching to capture the entire page. If it's false, then only the viewport will be captured. If the method is called without a parameter, then the default is true.

#### Remarks


This method overrides the global default or the most recent value set by the [Eyes.setForceFullPageScreenshot](./eyes#setforcefullpagescreenshot-method) method or [Configuration.setForceFullPageScreenshot](./configuration#setforcefullpagescreenshot-method) method. If stitching is done, then the stitch mode used, [StitchMode.CSS](./stitchmode) or [StitchMode.SCROLL](./stitchmode) is determined by the global default or the value set using, [Eyes.setStitchMode](./eyes#setstitchmode-method) or [Configuration.setStitchMode](./configuration#setstitchmode-method) You can use the [CheckSettings.scrollRootElement](./checksettings#scrollrootelement-method) method to specify which element should be scrolled to render all of the content of the page. You may only specify one such element per checkpoint. You may only call this method once in a given target.

### ignoreCaret property
#### Syntax


    eyes.check({ ignoreCaret: value });
    

Type: boolean

If this parameter has a value of true, then Eyes will detect artifacts caused by a blinking cursor and will not report a mismatch for differences caused by these artifacts. If it has a value of , then Eyes will not try to detect artifacts caused by blinking cursors. If no parameter is passed then the default value is true - so the cursor artifacts will be ignored.

#### Remarks


You may only call this method once in a given chain. This method overrides the global default setting or the setting chosen explicitly for the current target using [Eyes.setIgnoreCaret](./eyes#setignorecaret-method) method or [Configuration.setIgnoreCaret](./configuration#setignorecaret-method) method.

### ignoreDisplacements property
#### Syntax


    eyes.check({ ignoreDisplacements: value });
    

Type: boolean

If a value of true is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed.

#### Remarks


Ignore displacements is only active when using a Match level of [Strict](./matchlevel) or [Content](./matchlevel)

### ignoreRegions property
#### Syntax


    eyes.check({ ignoreRegions: value });
    

Type: 

    (RegionPlain|WebElement|Selector)[]

#### Type definitions

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

A region defined by one of the possible types.

#### Remarks


You may call this method multiple times in a given chain. Ignore regions should not overlap each other or other types of regions (i.e. floating or match level regions).

### layoutBreakpoints property
#### Syntax


    eyes.check({ layoutBreakpoints: value });
    

Type: 

    boolean|number[]

You can either pass a boolean value or a number. Pass a value of true to enable this feature. Pass one or more viewport widths explicitly, and the JavaScript is executed and the DOM is extracted for each viewport width. For each target, the Ultrafast Grid uses the DOM extracted with the widest viewport that is smaller than the viewport width. For example, if the values 640, 768 and 1024 are passed, then targets with a width between 640 and 767 (inclusive) use the DOM extracted at 640. Similarly, targets between 768 and 1023 use the DOM extracted at 768. Targets that have a width smaller than the smallest defined width use a DOM extracted at one less than the smallest DOM width (639 in this example). Targets that have a width larger than the largest width defined (1024 in this example) use the DOM extracted at the largest width. If no width is specified, then a separate DOM is extracted for each distinct execution environment viewport width.

#### Remarks


This method enables and sets breakpoints for the current checkpoint. It overrides the default values when the test is configured with a previous use of undefined.

### layoutRegions property
#### Syntax


    eyes.check({ layoutRegions: value });
    

Type: 

    (RegionPlain|WebElement|Selector)[]

#### Type definitions

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

One or more region descriptors or selectors in one of the defined types.

#### Remarks


You may define multiple regions that have an explicit match level by calling this method multiple times, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`strictRegions(regions)`](./checksettings#strictregions-method), [`layoutRegions(regions)`](./checksettings#layoutregions-method)., [`contentRegions(regions)`](./checksettings#contentregions-method) should not overlap each other or the regions defined using [`checksettings.ignore (not yet available in selenium4 javascript)(regions)`](#). [`ignoreRegions(regions)`](./checksettings#ignoreregions-method). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### matchLevel property
#### Syntax


    eyes.check({ matchLevel: value });
    

Type: MatchLevelPlain

#### Type definitions

MatchLevelPlain

This type allows passing strings instead of enumerated values, for the list of enum values see [MatchLevel](./matchlevel).

Available match level values are:

*   [None](./matchlevel)
*   [Strict](./matchlevel)
*   [Layout](./matchlevel)
*   [Content](./matchlevel)
*   [Exact](./matchlevel)

For a description of these match levels and the different ways to apply them to tests, checkpoints, and regions, see [Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

#### Remarks


The value provided here overrides the default match level, or the global value set for this target using [Eyes.setMatchLevel](./eyes#setmatchlevel-method) or [Configuration.setMatchLevel](./configuration#setmatchlevel-method). You may only call this method once in a given chain. If you call this method, then you can't call the other match level methods. [CheckSettings.strict](#strict-method)[CheckSettings.content](#content-method)[CheckSettings.layout](#layout-method)[CheckSettings.exact](#exact-method)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### name property
#### Syntax


    eyes.check({ name: value });
    

Type: string

The name to be given to this check point.

#### Remarks


You may only call this method once in a given chain.

### region property
#### Syntax


    eyes.check(Target.frame(frameSelector).region);
    

Type: 

    RegionPlain|WebElement|Selector

#### Type definitions

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

An object that defines a rectangular area in the window.

An object that defines the region.

#### Remarks


The parameter to the method specifies the region to be matched. The enclosing frame(s) are selected by the previous calls in the chain to [Target.frame](#frame-method). You may only use this method in the chain if the first method in the chain is [Target.frame](#frame-method). You may not call it if the first method in the chain is [Target.window](#window-method) or [Target.region](#region-method). To match a region within a window, use the method [Target.region](#region-method) as the first method in the Target chain. You may only call this method once in a given chain.

### scrollRootElement property
#### Syntax


    eyes.check({ scrollRootElement: value });
    

Type: 

    WebElement|Selector

#### Type definitions

Selector

Used to identify an HTML element defined as |import('selenium-webdriver').Locator|{using:string;value:string}|string|{selector:string;Type: string}.

This object defines the element to be scrolled.

### sendDom property
#### Syntax


    eyes.check({ sendDom: value });
    

Type: boolean

If a vlaue of true is passed then send DOM information for this checkpoint even if sending DOM is disabled globally.

### strictRegions property
#### Syntax


    eyes.check({ strictRegions: value });
    

Type: 

    (RegionPlain|WebElement|Selector)[]

#### Type definitions

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

Selector

Used to identify an HTML element defined as |import('selenium-webdriver').Locator|{using:string;value:string}|string|{selector:string;Type: string}.

The value returned is the object that called the method. You can use it to call other methods supported by the object class.

#### Remarks


You may define multiple regions that have an explicit match level by calling this method multiple times, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions)`](#strict-method), [`layout(regions)`](#layout-method)., [`content(regions)`](#content-method). [`strictRegions(regions)`](./checksettings#strictregions-method), [`layoutRegions(regions)`](./checksettings#layoutregions-method)., [`contentRegions(regions)`](./checksettings#contentregions-method) should not overlap each other or the regions defined using [`checksettings.ignore (not yet available in selenium4 javascript)(regions)`](#). [`ignoreRegions(regions)`](./checksettings#ignoreregions-method). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

### timeout property
#### Syntax


    eyes.check({ timeout: value });
    

Type: number

The timeout to use in milliseconds.

#### Remarks


You may only call this method once in a given chain. The timeout value provided here overrides the default value or the value set by [setMatchTimeout](./eyes#setmatchtimeout-method) for the current target. Passing this method a value of zero disables the timeout mechanism.

### variationGroupId property
#### Syntax


    eyes.check({ variationGroupId: value });
    

Type: string

The value of the variation group ID to be set.

### visualGridOptions property
#### Syntax


    eyes.check({ visualGridOptions: value });
    

Type: 

    { [key: string]: any };
    

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

You can override the global value for a given checkpoint using the method [CheckSettings.visualGridOption](./checksettings#visualGridOption-method).

#### Example


JavaScript

    eyes.check(
            Target.window()
                    .visualGridOptions(new VisualGridOption("polyfillAdoptedStyleSheets", true)));

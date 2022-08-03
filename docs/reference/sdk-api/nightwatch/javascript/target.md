# Target class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Nightwatch</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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




This class provides methods that are used to

Once you create a [CheckSettings](./checksettings) object using one of the factory methods defined by this class, you can configure the checkpoint by calling other methods from the [CheckSettings](./checksettings) class, chaining them one after the other using the '.' operator.


### frame method
#### Syntax


    eyes.check(Target.frame(context));
    eyes.check(Target.frame(frame_ele, scrollRootElement_ele));
    eyes.check(Target.frame(frame_ele));
    eyes.check(Target.frame(frame_ele, scrollRootElement_sel));
    
    eyes.check(Target.frame(frame_sel, scrollRootElement_ele));
    eyes.check(Target.frame(frame_sel));
    eyes.check(Target.frame(frame_sel, scrollRootElement_sel));
    
    eyes.check(Target.frame(frame_str, scrollRootElement_ele));
    eyes.check(Target.frame(frame_str));
    eyes.check(Target.frame(frame_str, scrollRootElement_sel));
    
    eyes.check(Target.frame(frame_num, scrollRootElement_ele));
    eyes.check(Target.frame(frame_num));
    eyes.check(Target.frame(frame_num, scrollRootElement_sel));
    

#### Parameters

context

Type: {
      frame: Element | Selector | string | number;
      scrollRootElement?: Element | Selector;
    }; 

A literal object that defines parameters for this call:

#### Type definitions

Element

Used to identify an HTML element defined as |{ELEMENT:string}|{'element-6066-11e4-a52e-4f735466cecf':string}|import('nightwatch').NightwatchTypedCallbackResult.

Selector

Used to identify an HTML element defined as |{locateStrategy:import('nightwatch').LocateStrategy;selector:'string'}|string|{selector:string;Type: string}.

frame_ele

Type: Element

The element that contains the frame to be checked.

An element object whose bounding rectangle defines the frame to check.

#### Type definitions

Element

Used to identify an HTML element defined as |{ELEMENT:string}|{'element-6066-11e4-a52e-4f735466cecf':string}|import('nightwatch').NightwatchTypedCallbackResult.

scrollRootElement_ele

Type: Element \[Optional \]

Normally, Eyes will select the most appropriate element to scroll to execute the [fully](#fully-method) method. You can use the [scrollRootElement](./checksettings#scrollrootelement-method) method to specify the element to scroll explicitly.

An element that should be scrolled to access the frame to be checked.

#### Type definitions

Element

Used to identify an HTML element defined as |{ELEMENT:string}|{'element-6066-11e4-a52e-4f735466cecf':string}|import('nightwatch').NightwatchTypedCallbackResult.

scrollRootElement_sel

Type: Selector \[Optional \]

Normally, Eyes will select the most appropriate element to scroll to execute the [fully](#fully-method) method. You can use the [scrollRootElement](./checksettings#scrollrootelement-method) method to specify the element to scroll explicitly.

A selector to an element that should be scrolled to access the frame to be checked.

#### Type definitions

Selector

Used to identify an HTML element defined as |{locateStrategy:import('nightwatch').LocateStrategy;selector:'string'}|string|{selector:string;Type: string}.

frame_sel

Type: Selector

The element that contains the frame to be checked.

A selector to an element object whose bounding rectangle defines the frame to check.

#### Type definitions

Selector

Used to identify an HTML element defined as |{locateStrategy:import('nightwatch').LocateStrategy;selector:'string'}|string|{selector:string;Type: string}.

frame_str

Type: string

The element that contains the frame to be checked.

The name or id of the required frame.

frame_num

Type: number

The element that contains the frame to be checked.

The frame index of the required frame.

#### Return value

Type:  [CheckSettings](./checksettings)

### region method
#### Syntax


    eyes.check(Target.region(region_obj));
    eyes.check(Target.region(region_ele));
    eyes.check(Target.region(region_sel));
    

#### Parameters

region_obj

Type: RegionPlain

The region to be checked.

The region is defined by the literal object RegionPlain.

#### Type definitions

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

region_ele

Type: Element

The region to be checked.

An element object whose bounding rectangle defines the area to check.

#### Type definitions

Element

Used to identify an HTML element defined as |{ELEMENT:string}|{'element-6066-11e4-a52e-4f735466cecf':string}|import('nightwatch').NightwatchTypedCallbackResult.

region_sel

Type: Selector

The region to be checked.

A selector to an element object whose bounding rectangle defines the area to check.

#### Type definitions

Selector

Used to identify an HTML element defined as |{locateStrategy:import('nightwatch').LocateStrategy;selector:'string'}|string|{selector:string;Type: string}.

#### Return value

Type:  [CheckSettings](./checksettings)

### window method
#### Syntax


    eyes.check(Target.window());
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [CheckSettings](./checksettings)

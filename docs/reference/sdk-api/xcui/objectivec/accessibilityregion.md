# AccessibilityRegionByRectangle class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Xcui</b>
</div><div class='platform-bar-div'>Language: <b>Objectivec</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/python_sdk4/accessibilityregion'>Selenium Python_sdk4</a>
<a href='../../imagesappkit/objectivec/accessibilityregion'>Imagesappkit Objectivec</a>
<a href='../../images/python_sdk4/accessibilityregion'>Images Python_sdk4</a>
<a href='../../images/objectivec/accessibilityregion'>Images Objectivec</a>
<a href='../../xcui/objectivec/accessibilityregion'>Xcui Objectivec</a>
</div></div><br /><br /></div>




An object that stores information about an accesibility region.

Import statement

    @import EyesXCUI
    	



### initWithLeft method
#### Syntax
#### Call syntax

    AccessibilityRegionByRectangle* obj = [[AccessibilityRegionByRectangle alloc] initWithLeft  : left top: top width: width height: height regionType:  type   ];
    

#### Declaration

    (instancetype)initWithLeft:(NSInteger)left
                             top:(NSInteger)top
                           width:(NSInteger)width
                          height:(NSInteger)height
                      regionType: (AccessibilityRegionType)type

#### Parameters

left

Type: NSInteger

The coordinate of the left edge of a rectangular area whose accessibility is being defined.

top

Type: NSInteger

The coordinate of the top edge of a rectangular area whose accessibility is being defined.

width

Type: NSInteger

The width of the rectangular area whose accessibility is being defined.

height

Type: NSInteger

The height of the rectangular area whose accessibility is being defined.

type

Type: [AccessibilityRegionType](./accessibilityregiontype)

The type of accessibility region defined by the rectanglar area.

#### Return value

Type:  [AccessibilityRegionByRectangle](./accessibilityregion)\*

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).


### height property
#### Syntax
#### Call syntax

    NSInteger value = obj.height
    

#### Declaration

     (readonly, assign, nonatomic) NSInteger height

Type: NSInteger

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### left property
#### Syntax
#### Call syntax

    NSInteger value = obj.left
    

#### Declaration

     (readonly, assign, nonatomic) NSInteger left

Type: NSInteger

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### region property
#### Syntax
#### Call syntax

    Region* value = obj.region
    

#### Declaration

     (readonly, nonatomic) Region *region

Type: [Region](./region)\*

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### top property
#### Syntax
#### Call syntax

    NSInteger value = obj.top
    

#### Declaration

     (readonly, assign, nonatomic) NSInteger top

Type: NSInteger

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### type property
#### Syntax
#### Call syntax

    AccessibilityRegionType value = obj.type
    

#### Declaration

     (readonly, assign, nonatomic) AccessibilityRegionType type

Type: [AccessibilityRegionType](./accessibilityregiontype)

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

### width property
#### Syntax
#### Call syntax

    NSInteger value = obj.width
    

#### Declaration

     (readonly, assign, nonatomic) NSInteger width

Type: NSInteger

#### Remarks


For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

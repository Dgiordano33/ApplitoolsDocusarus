# FloatingRegionByElement class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Python</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/python/floatingregionbyelement'>Selenium Python</a>
</div></div><br /><br /></div>




Used to create a region based on a webelement, to be passed to the method [floating](#floating-method).

Import statement

    from from applitools.selenium import Eyes, Target,from applitools.selenium.visual_grid import VisualGridRunner import FloatingRegionByElement
    	



### FloatingRegionByElement method
#### Syntax


    region = FloatingRegionByElement(element, bounds)
    

#### Parameters

element

Type: AnyWebElement

A WebElement whose position and size is used to define the inner region area.

bounds

Type: [FloatingBounds](./floatingbounds)

The amount the floating region can move in any direction See [FloatingBounds](./floatingbounds).

#### Return value

Type:  [FloatingRegionByElement](./floatingregionbyelement)

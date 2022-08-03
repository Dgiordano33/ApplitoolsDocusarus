# FloatingRegion class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Python</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/python/floatingregion'>Selenium Python</a>
</div></div><br /><br /></div>




Used to create a region based on pixel coordinates, to be passed to the method [floating](#floating-method).

Import statement

    from from applitools.selenium import Eyes, Target,from applitools.selenium.visual_grid import VisualGridRunner import FloatingRegion
    	



### FloatingRegion method
#### Syntax


    region = FloatingRegion(region, bounds)
    

#### Parameters

region

Type: [Region](./region)

An object that defines the region position and size.

bounds

Type: [FloatingBounds](./floatingbounds)

The amount the floating region can move in any direction. See [FloatingBounds](./floatingbounds).

#### Return value

Type:  [FloatingRegion](./floatingregion)

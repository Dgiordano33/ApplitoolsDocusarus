# IgnoreRegionBySelector class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Python</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/python/ignoreregionbyselector'>Selenium Python</a>
</div></div><br /><br /></div>




Used to create a region based on a selector, to be passed to the method [floating](#floating-method).

Import statement

    from from applitools.selenium import Eyes, Target,from applitools.selenium.visual_grid import VisualGridRunner import IgnoreRegionBySelector
    	



### IgnoreRegionBySelector method
#### Syntax


    region = IgnoreRegionBySelector(by, value)
    

#### Parameters

by

Type: str

The 'by' part of a Selenium selector for an element which represents the inner region.

value

Type: str

The 'value' part of a Selenium selector for an element which represents the inner region.

#### Return value

Type:  [IgnoreRegionBySelector](./ignoreregionbyselector)

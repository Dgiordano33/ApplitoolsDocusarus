# FloatingBounds class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Python</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/python/floatingbounds'>Selenium Python</a>
</div></div><br /><br /></div>




Used when defining floating regions, to define the distance a region can move without causing a mismatch.

Import statement

    from from applitools.selenium import Eyes, Target,from applitools.selenium.visual_grid import VisualGridRunner import FloatingBounds
    	



### FloatingBounds method
#### Syntax


    region = FloatingBounds(max_left_offset, max_up_offset, max_right_offset, max_down_offset)
    
    region = FloatingBounds(max_left_offset, max_up_offset, max_right_offset)
    
    region = FloatingBounds(max_left_offset, max_up_offset)
    
    region = FloatingBounds(max_left_offset)
    
    region = FloatingBounds()
    

#### Parameters

max_left_offset

Type: int \[Optional : default = 0 \]

The amount the floating region may move to the left.

max_up_offset

Type: int \[Optional : default = 0 \]

The amount the floating region may move upwards.

max_right_offset

Type: int \[Optional : default = 0 \]

The amount the floating region may move to the right.

max_down_offset

Type: int \[Optional : default = 0 \]

The amount the floating region may move downwards.

#### Return value

Type:  [FloatingBounds](./floatingbounds)

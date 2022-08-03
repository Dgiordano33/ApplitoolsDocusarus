# AccessibilitySettings class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
</div><div class='platform-bar-div'>Language: <b>Python_sdk4</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/accessibilitysettings'>Selenium Java</a>
<a href='../../selenium/python_sdk4/accessibilitysettings'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/accessibilitysettings'>Selenium Csharp</a>
<a href='../../imagesappkit/objectivec/accessibilitysettings'>Imagesappkit Objectivec</a>
<a href='../../puppeteer/javascript/accessibilitysettings'>Puppeteer Javascript</a>
<a href='../../images/java/accessibilitysettings'>Images Java</a>
<a href='../../images/python_sdk4/accessibilitysettings'>Images Python_sdk4</a>
<a href='../../images/csharp/accessibilitysettings'>Images Csharp</a>
<a href='../../images/objectivec/accessibilitysettings'>Images Objectivec</a>
<a href='../../selenium4/javascript/accessibilitysettings'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/accessibilitysettings'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/accessibilitysettings'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/accessibilitysettings'>Nightwatch Javascript</a>
<a href='../../xcui/objectivec/accessibilitysettings'>Xcui Objectivec</a>
<a href='../../protractor/javascript/accessibilitysettings'>Protractor Javascript</a>
<a href='../../appium/java/accessibilitysettings'>Appium Java</a>
<a href='../../appium/csharp/accessibilitysettings'>Appium Csharp</a>
<a href='../../wdiogeneric/javascript/accessibilitysettings'>Wdiogeneric Javascript</a>
<a href='../../espresso/java/accessibilitysettings'>Espresso Java</a>
</div></div><br /><br /></div>




A class that is used to set up accessibility validation.

Import statement

    from applitools.images import AccessibilitySettings
    	



### AccessibilitySettings method
#### Syntax


    obj = AccessibilitySettings(level, guidelines_version)
    

#### Parameters

level

Type: [AccessibilityLevel](./accessibilitylevel)

The required accessibility level.

guidelines_version

Type: [AccessibilityGuidelinesVersion](./accessibilityguidelinesversion)

The required accessibility guide version.

#### Return value

Type:  None

#### Example


Python

    # test suite setup  
        suite_config = (Configuration()  
         .set_accessibility_validation(
            AccessibilitySettings(AccessibilityLevel.AAA, AccessibilityGuidelinesVersion.WCAG_2_1))
            # ... other configurations    
         )  
        #
        # Assign the configuration to all newly created Eyes instances
        #
        eyes = Eyes(runner)
        eyes.set_configuration(suite_config)


### guidelines_version property
#### Syntax


    obj.guidelines_version  = value
    value = obj.guidelines_version
    

Type: [AccessibilityGuidelinesVersion](./accessibilityguidelinesversion)

The accessibility guide version.

### level property
#### Syntax


    obj.level  = value
    value = obj.level
    

Type: [AccessibilityLevel](./accessibilitylevel)

The accessibility level.

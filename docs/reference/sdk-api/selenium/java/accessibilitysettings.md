# AccessibilitySettings class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Java</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

    import com.applitools.eyes.AccessibilitySettings;
    	



### AccessibilitySettings method
#### Syntax


    AccessibilitySettings obj = new AccessibilitySettings(level, guidelinesVersion);
    

#### Parameters

level

Type: [AccessibilityLevel](./accessibilitylevel)

The required accessibility level.

guidelinesVersion

Type: [AccessibilityGuidelinesVersion](./accessibilityguidelinesversion)

The required accessibility guide version.

#### Return value

Type:  [AccessibilitySettings](./accessibilitysettings)

#### Example


Java

    /* test suite setup */  
        suiteConfig = new Configuration() 
                .setAccessibilityValidation(
                        new AccessibilitySettings(
                            AccessibilityLevel.AA,
                            AccessibilityGuidelinesVersion.WCAG_2_1)
                )
    /* ... other configurations */  ; 
        /*
         * Assign the configuration to all newly created Eyes instances
         */
        eyes = new Eyes(runner);
        eyes.setConfiguration(suiteConfig);


### getGuidelinesVersion method
#### Syntax


    AccessibilityGuidelinesVersion value = obj.getGuidelinesVersion();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [AccessibilityGuidelinesVersion](./accessibilityguidelinesversion)

### getLevel method
#### Syntax


    AccessibilityLevel value = obj.getLevel();
    

#### Parameters

This method does not take any parameters.

#### Return value

Type:  [AccessibilityLevel](./accessibilitylevel)

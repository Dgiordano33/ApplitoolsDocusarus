# Feature enum
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Espresso</b>
</div><div class='platform-bar-div'>Language: <b>Java</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/feature'>Selenium Java</a>
<a href='../../selenium/python_sdk4/feature'>Selenium Python_sdk4</a>
<a href='../../images/java/feature'>Images Java</a>
<a href='../../images/python_sdk4/feature'>Images Python_sdk4</a>
<a href='../../xcui/objectivec/feature'>Xcui Objectivec</a>
<a href='../../appium/java/feature'>Appium Java</a>
<a href='../../espresso/java/feature'>Espresso Java</a>
</div></div><br /><br /></div>

Enable optional Eyes features by passing values defined by this Enum to [Configuration.setFeatures](./configuration#setfeatures-method). 
###### - PIXEL_COPY_SCREENSHOT 
 Enable this feature if you want the SDK to use the Android's PixelCopy method to capture screenshots. Using PixelCopy to capture screenshots can help solve rendering issues such as missing shadow layers. PixelCopy is available from Android API version 26. Example use is:

Java

    /* test suite setup */  
        suiteConfig = new Configuration() 
            .setFeatures(Feature.PIXEL_COPY_SCREENSHOT)
    /* ... other configurations */  ; 
        /*
         * Assign the configuration to all newly created Eyes instances
         */
        eyes = new Eyes(runner);
        eyes.setConfiguration(suiteConfig); 
     /* test suite setup */  
        suiteConfig = new Configuration() 
            .setFeatures(Feature.PIXEL_COPY_SCREENSHOT)
    /* ... other configurations */  ; 
        /*
         * Assign the configuration to all newly created Eyes instances
         */
        eyes = new Eyes(runner);
        eyes.setConfiguration(suiteConfig); 

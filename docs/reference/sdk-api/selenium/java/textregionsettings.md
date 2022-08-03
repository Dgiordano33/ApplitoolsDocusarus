# TextRegionSettings class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Java</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/textregionsettings'>Selenium Java</a>
<a href='../../selenium/python_sdk4/textregionsettings'>Selenium Python_sdk4</a>
<a href='../../puppeteer/javascript/textregionsettings'>Puppeteer Javascript</a>
<a href='../../images/java/textregionsettings'>Images Java</a>
<a href='../../images/python_sdk4/textregionsettings'>Images Python_sdk4</a>
<a href='../../selenium4/javascript/textregionsettings'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/textregionsettings'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/textregionsettings'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/textregionsettings'>Nightwatch Javascript</a>
<a href='../../protractor/javascript/textregionsettings'>Protractor Javascript</a>
<a href='../../appium/java/textregionsettings'>Appium Java</a>
<a href='../../wdiogeneric/javascript/textregionsettings'>Wdiogeneric Javascript</a>
</div></div><br /><br /></div>




An object of this type is used to pass options to [Eyes.extractTextRegions](../classes-gen/class_eyes/method-eyes-extracttextregions-selenium-java.html).

This feature is experimental. Please note that the functionality and/or API may change.

Typically you call the class constructor, and then call the methods of this class chained in a Fluent API style to set the required options.

For more information see [Eyes OCR support](https://applitools.com/docs/features/ocr.html) .

Import statement

    import com.applitools.eyes.locators.TextRegionSettings;
    	

#### Example


Java

    String[] patternList = {};
    Map<String, List<TextRegion>> resultRegions = eyes.extractTextRegions(
            new TextRegionSettings(
                    ".+",
                    "Click",
                    "\\S+: \\d+",
                    "\\S+: .+").ignoreCase(true));
    for (Map.Entry<String, List<TextRegion>> entry : resultRegions.entrySet()) {
        System.out.printf("for pattern '%s' found:\n", entry.getKey());
        for (TextRegion info : entry.getValue()) {
            System.out.printf("x: %d, y: %d, width: %d, heigth: %d, text: '%s'\n",
                    info.getX(), info.getY(), info.getWidth(), info.getHeight(), info.getText());
        }

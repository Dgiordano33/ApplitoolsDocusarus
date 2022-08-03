# OCRSettings class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium4</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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




An object of this type is used to pass options to [Eyes.extractTextRegions](../classes-gen/class_eyes/method-eyes-extracttextregions-selenium4-javascript.html).

This feature is experimental. Please note that the functionality and/or API may change.

Typically you call the class constructor, and then call the methods of this class chained in a Fluent API style to set the required options.

For more information see [Eyes OCR support](https://applitools.com/docs/features/ocr.html) .

#### Example


JavaScript

    let patternList = ['.+','Click','\\S+: \\d+','\\S+: .+'];
    const resultRegions = await eyes.extractTextRegions({
      patterns: patternList,
      ignoreCase: true,
    })
    for (let region in resultRegions) {
      let infoList = resultRegions[region];
      console.log(`for pattern '${region}' found:`);
      for (info of infoList) {
          console.log(`x: ${info.x}, y: ${info.y}, width: ${info.width}, height: ${info.height}, text: '${info.text}'`);
      }

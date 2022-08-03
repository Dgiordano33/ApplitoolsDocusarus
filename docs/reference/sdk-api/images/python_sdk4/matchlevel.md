# MatchLevel enum
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
</div><div class='platform-bar-div'>Language: <b>Python_sdk4</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/python/matchlevel'>Selenium Python</a>
<a href='../../selenium/java/matchlevel'>Selenium Java</a>
<a href='../../selenium/python_sdk4/matchlevel'>Selenium Python_sdk4</a>
<a href='../../selenium/csharp/matchlevel'>Selenium Csharp</a>
<a href='../../selenium/javascript/matchlevel'>Selenium Javascript</a>
<a href='../../imagesappkit/objectivec/matchlevel'>Imagesappkit Objectivec</a>
<a href='../../puppeteer/javascript/matchlevel'>Puppeteer Javascript</a>
<a href='../../images/java/matchlevel'>Images Java</a>
<a href='../../images/python_sdk4/matchlevel'>Images Python_sdk4</a>
<a href='../../images/csharp/matchlevel'>Images Csharp</a>
<a href='../../images/javascript/matchlevel'>Images Javascript</a>
<a href='../../images/objectivec/matchlevel'>Images Objectivec</a>
<a href='../../selenium4/javascript/matchlevel'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/matchlevel'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/matchlevel'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/matchlevel'>Nightwatch Javascript</a>
<a href='../../xcui/objectivec/matchlevel'>Xcui Objectivec</a>
<a href='../../protractor/javascript/matchlevel'>Protractor Javascript</a>
<a href='../../appium/java/matchlevel'>Appium Java</a>
<a href='../../appium/csharp/matchlevel'>Appium Csharp</a>
<a href='../../wdiogeneric/javascript/matchlevel'>Wdiogeneric Javascript</a>
<a href='../../espresso/java/matchlevel'>Espresso Java</a>
</div></div><br /><br /></div>

Values that define different types of Image matching. These are used in various commands that set the match level. See [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html) for details. 
###### - NONE 
 With this level Eyes won't do any matching at all, whatever the content is, will be considered to be matched. 
 ###### - LAYOUT 
 This level is useful for validating that the page layout is consistent. With this level Eyes identifies the various page elements in the checkpoint image, and the baseline image- text, images, buttons, columns and so on. It then validates that the relative positions of these elements are consistent. It can detect elements that have moved as well as elements that have disappeared. With this match level, the Eyes matching engine ignores differences in the actual content text and graphics, color and other style changes. This match level is most effective when used to validate pages with dynamic content, language localization, responsive design, and _cross-environment testing_ which means using a single baseline for a variety of execution environment - multiple operating systems, browsers, devices and viewport form factors and orientation. 
 ###### - CONTENT 
 This match level is similar to the strict match level but ignores differences in color. It is effective when your content is static, but the color can vary. 
 ###### - STRICT 
 This is the recommended level when you want to validate the precise content of the page. With this level, Eyes detects changes in text, font, color, graphics, and position of elements. It aims to detect differences that are visible to the human eye while ignoring differences in pixel values that are platform dependent due to the rendering software and hardware. Strict match level is most effective when used for regression tests on a particular browser/OS with static content. 
 ###### - EXACT 
 This match level is not recommended for ordinary validation purposes. With this match level, Eyes does a pixel to pixel comparison of the two images. This means that it is sensitive to differences that are not visible to the human eye, for example, because of rendering anomalies. 
 

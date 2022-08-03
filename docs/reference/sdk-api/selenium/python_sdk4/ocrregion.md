# OCRRegion class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Selenium</b>
</div><div class='platform-bar-div'>Language: <b>Python_sdk4</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../selenium/java/ocrregion'>Selenium Java</a>
<a href='../../selenium/python_sdk4/ocrregion'>Selenium Python_sdk4</a>
<a href='../../puppeteer/javascript/ocrregion'>Puppeteer Javascript</a>
<a href='../../images/java/ocrregion'>Images Java</a>
<a href='../../images/python_sdk4/ocrregion'>Images Python_sdk4</a>
<a href='../../selenium4/javascript/ocrregion'>Selenium4 Javascript</a>
<a href='../../appium/java/ocrregion'>Appium Java</a>
<a href='../../wdiogeneric/javascript/ocrregion'>Wdiogeneric Javascript</a>
</div></div><br /><br /></div>




An object of this type is used to define where OCR text extraction should be done.

This feature is experimental. Please note that the functionality and/or API may change.

You can extract text from an application window using OCR by passing one or more [OCRRegion](#) objects to the method [Eyes.extract_text](../classes-gen/class_eyes/method-eyes-extracttext-selenium-python_sdk4.html). Each such object defines a region in the application window. In addition, use the [hint](../classes-gen/class_ocrregion/method-ocrregion-hint-selenium-python_sdk4.html) method to specify literal text or a regular expression-like pattern that should match the text found. The pattern passed as a hint helps overcome ambiguities that arise when using OCR. It can be used, for example, to disinguish between the digit 0 (zero) and the letter O.

For more information see [Eyes OCR support](https://applitools.com/docs/features/ocr.html) .

Import statement

    from applitools.selenium import OCRRegion
    	

#### Example


Python

    element = driver.find_element_by_id("btn_click_txt")
    texts_found = eyes.extract_text(
        OCRRegion(element),
        OCRRegion(Region(5, 8, 76, 30)),
        OCRRegion("#btn_click_txt").hint("click me"),
        OCRRegion("h2"),
        OCRRegion("#allpage")
    )
    for i, text in enumerate(texts_found):
        print("{}) found '{}'".format(i, text))

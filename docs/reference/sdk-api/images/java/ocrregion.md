# OcrRegion class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
</div><div class='platform-bar-div'>Language: <b>Java</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
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

You can extract text from an image using OCR by passing one or more [OcrRegion](#) objects to the method [Eyes.extractText](../classes-gen/class_eyes/method-eyes-extracttext-images-java.html). Each such object provides an image . In addition, use the [hint](../classes-gen/class_ocrregion/method-ocrregion-hint-images-java.html) method to specify literal text or a regular expression-like pattern that should match the text found. The pattern passed as a hint helps overcome ambiguities that arise when using OCR. It can be used, for example, to disinguish between the digit 0 (zero) and the letter O.

For more information see [Eyes OCR support](https://applitools.com/docs/features/ocr.html) .

Import statement

    import com.applitools.eyes.images.OcrRegion;
    	

#### Example


Example not yet available.

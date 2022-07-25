---
sidebar_position: 1
title: LeanFT JavaScript
---

The Applitools Eyes LeanFT Javascript SDK allows you to easily add visual checkpoints to your Javascript LeanFT tests. It takes care of getting screenshots of your application from the underlying LeanFT, sending them to the Eyes server for validation and failing the test in case differences are found.

## Install the SDK

```bash
npm install eyes.leanft --save-dev
```


## Run your first test
Applitools Eyes reports differences by comparing screenshots of your application with baseline images that define the expected appearance of the application at each step of the test. By default, the Eyes SDK detects the environment in which the application is running (namely, the operating system, the type of browser and its viewport size) and compares the screenshots against baseline images that are specific to that environment. The first time you run a test in a given environment, its screenshots will be automatically saved as its baseline. Starting from the second run onward, you always have a baseline to compare against.

The test below is a simple program that visually validates the Hello World web-page at [https://applitools.com/helloworld](https://applitools.com/helloworld). It consists of two visual checkpoints, each validating the entire application window. The first time you run this test a new baseline will be created, and subsequent test runs will be compared to this baseline. If any screenshot mismatch its baseline image in a perceptible way, `$eyes.close()` will throw a `DiffsFoundException` which includes a URL that points to a detailed report where you can see the detected differences and take appropriate actions such as reporting bugs, updating the baseline and more.

Before running the test, make sure to set the API key that identifies your account in the environment variable `APPLITOOLS_API_KEY` or directly assign it to the `eyes.api_key` property. You can find your API key under the user menu located at the right hand side of the test manager toolbar. If you don't yet have an account [create it now](https://applitools.com/sign-up) to obtain your key.

```js
const LFT = require('leanft');
const Web = require('leanft').Web;
const Eyes = require('../index').Eyes;
const ConsoleLogHandler = require('../index').ConsoleLogHandler;

LFT.init();

// Initialize the eyes SDK and set your private API key.
var eyes = new Eyes();
eyes.setApiKey("YOUR_API_KEY");
eyes.setLogHandler(new ConsoleLogHandler(true));
eyes.setForceFullPageScreenshot(true);

// Define the OS.
eyes.setHostOS("Windows 10");

Web.Browser.launch(Web.BrowserType.Chrome)
    .then(function(launched_browser){
        eyes.open(launched_browser, "Javascript LeanFT test!", "some test", {width: 800, height:600})
            .then(function(localEyes){
                var browser = localEyes.getRemoteWebBrowser();
                browser.navigate("https://www.applitools.com/helloworld");
                browser.sync();

                eyes.checkWindow("Hello!");

                var button = browser.$(Web.Element({tagName: "button"}));
                button.click();

                eyes.checkWindow("Click!");

                // End visual UI testing. Validate visual correctness.
                return eyes.close(false);
            });
    })
    .catch() // make sure the next 'then' success callback always get called.
    .then(function() {
        eyes.abortIfNotClosed();
        LFT.cleanup();
    });
```


## Analyze your test results
Congratulations! You've successfully run your first visual UI test with Applitools Eyes! A detailed report is ready for your inspection at the Applitools Eyes test manager. Watch this 5 minute video to get acquainted with the test manager and to learn the basics of baseline maintenance.

[Login to Applitools](https://applitools.com/users/login) and analyze the results.
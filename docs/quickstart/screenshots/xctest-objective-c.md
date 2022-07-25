---
sidebar_position: 8
title: Screenshot XCTest Objective-C
---

The Applitools Eyes Screenshot Objective-C SDK allows you to easily add visual checkpoints to your XCTest and XCUI based unit tests. It takes care of images given by the user, sending them to the Eyes server for validation and failing the test in case differences are found.

## Install the SDK

#### Add `EyesXCUI` to your podfile
```bash
target ‘YOUR_APPLICATION_TARGET_NAME’ do
	target ‘YOUR_UNIT_TESTING_TARGET_NAME’ do
		pod 'EyesImages'
	end
end
```


## Run your first test
Applitools Eyes reports differences by comparing screenshots of your application with baseline images that define the expected appearance of the application at each step of the test. The user should specify the environment (OS and application under test), and the Eyes SDK will automatically set the viewport size based of the size of the image being tested. It will then compare the screenshots against baseline images that are specific to that environment. The first time you run a test in a given environment, its screenshots will be automatically saved as its baseline. Starting from the second run onward, you always have a baseline to compare against.

The test below is a simple Objective-C program that visually validates an image from Applitools' homepage. It consists of a single visual checkpoint, The first time you run this test a new baseline will be created, and subsequent test runs will be compared to this baseline. If any screenshot mismatch its baseline image in a perceptible way, `[eyes close]` will throw a `DiffsFoundException` which includes a URL that points to a detailed report where you can see the detected differences and take appropriate actions such as reporting bugs, updating the baseline and more.

Before running the test, make sure to set the API key that identifies your account in the environment variable `APPLITOOLS_API_KEY` or directly assign it to the `eyes.api_key` property. You can find your API key under the user menu located at the right hand side of the test manager toolbar. If you don't yet have an account [create it now](https://applitools.com/sign-up) to obtain your key.

```ObjectiveC
- (void)testExample {
    Eyes *eyes = [Eyes new];

    // Initialize the eyes SDK and set your private API key.
    eyes.apiKey = @"YOUR_API_KEY";

    @try {
        // Start the test
        [eyes openWithApplicationName:@"Applitools site" testName:@"iOS Screenshot test!" viewportSize:CGSizeZero];

        // Load page image and validate.
        NSData *imageData = [NSData dataWithContentsOfURL:[NSURL URLWithString:@"https://applitools.com/blog/wp-content/uploads/2013/11/app-is-live-nov-2013.png"]];
        UIImage *image = [UIImage imageWithData:imageData];

        // Visual validation.
        [self.eyes checkWithTag:@"Applitools!" andSettings:[Target image:self.image]];

        // End visual UI testing.
        [eyes close];
    } @catch (NSException *exception) {
        [eyes abortIfNotClosed];
    }
}

```

## Analyze your test results
Congratulations! You've successfully run your first visual UI test with Applitools Eyes! A detailed report is ready for your inspection at the Applitools Eyes test manager. Watch this 5 minute video to get acquainted with the test manager and to learn the basics of baseline maintenance.

[Login to Applitools](https://applitools.com/users/login) and analyze the results.
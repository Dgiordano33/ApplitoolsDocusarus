---
sidebar_position: 3
---
# Applitools Ultrafast Grid

In real world testing, you'll need to test your app on multiple browsers, viewports and mobile devices. So you'll need to run and re-run ALL the tests in different browsers and multiple viewports to ensure things are fine - which could take hours and hours to complete. You may also encounter browsers not opening properly, or hanging and what not.

What if you could run in just one browser, just once, and still do cross-browser tests across various browsers, viewports and multiple mobile emulators? That's where [Ultrafast Grid](https://applitools.com/ultrafast-grid) comes in.

:::tip TL;DR
When you execute this tutorial, it'll run the test locally in Chrome browser but will show results in the following 5 combinations:

1. Chrome browser (800 X 600 viewport)
2. Chrome browser (700 X 500 viewport)
3. Firefox browser  (1200 X 800 viewport)
4. Firefox browser  (1600 X 1200 viewport)
5. An iPhone4 emulator

... all in ~30 seconds!⏰🚀
:::

## What Is The Ultrafast Grid?

The [Ultrafast Grid](https://applitools.com/ultrafast-grid) provides an elegant and an ultra fast way to render pages in different browsers, viewports, and mobile simulators and emulators. It then takes screenshots and sends those screenshots to the Applitools AI server. With Ultrafast Grid you just need to run your test in a single browser but perform end-to-end and cross-browser tests in various browsers such as Chrome, Firefox, Safari, IE, and also numerous combinations of viewports and in mobile simulators and emulators -- all in under a minute. Without Ultrafast Grid, you'll be wasting a lot of time and money running those tests in multiple browsers which could take hours and are error-prone.

And since Ultrafast Grid is integrated with our Eyes AI, you'll actually find a lot more functional and visual bugs than you'd normally find.

Further, you can use our [Root-Cause-Analysis (RCA)](https://applitools.com/root-cause-analysis) feature to figure out exactly which DOM element or CSS caused each difference! So you can go backwards, from the screenshot to the code!

**Best part**: All you need to do is to simply make `eyes.check` calls in your **existing Selenium tests** after adding our SDK and instantiating Ultrafast Grid. And that's all there is to it!

## How it works

Once you add and instantiate the Applitools SDK, simply add `eyes.check` calls wherever you want to check if the state of the page looks OK. Then run the Selenium test as usual. And while running the tests, anytime it encounters `eyes.check` (or similar methods), Applitools SDK uploads the DOM resource of that page to our [Ultrafast Grid](https://applitools.com/ultrafast-grid) behind the scenes and in batches. The Ultrafast Grid then renders every page in different browsers and mobile emulators (in parallel) and takes screenshots as per the configuration you set. Finally, it sends those screenshots to our AI Server.

When you first run the test,  our AI server simply stores those 1st set of screenshots as **Baseline images**. When you run the same test again, the AI server will compare the new set of screenshots, aka **Checkpoint images**, with the corresponding **Baseline images** and highlight bugs.

# RunnerOptionsPlain class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Protractor</b>
</div><div class='platform-bar-div'>Language: <b>Javascript</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../puppeteer/javascript/runneroptionsplain'>Puppeteer Javascript</a>
<a href='../../selenium4/javascript/runneroptionsplain'>Selenium4 Javascript</a>
<a href='../../wdio4/javascript/runneroptionsplain'>Wdio4 Javascript</a>
<a href='../../playwright/javascript/runneroptionsplain'>Playwright Javascript</a>
<a href='../../nightwatch/javascript/runneroptionsplain'>Nightwatch Javascript</a>
<a href='../../protractor/javascript/runneroptionsplain'>Protractor Javascript</a>
<a href='../../wdiogeneric/javascript/runneroptionsplain'>Wdiogeneric Javascript</a>
</div></div><br /><br /></div>




An object of this type is used to define options for [VisualGridRunner](./visualgridrunner) or [ClassicRunner](./classicrunner).


### testConcurrency property
#### Syntax


    runner = new VisualGridRunner({ testConcurrency: concurrentSessions });
    

Type: number

The maximum number of Eyes tests that can be executed concurrently by this runner.

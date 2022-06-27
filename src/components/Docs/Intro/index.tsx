
import React from 'react'
import cypressdata from '@site/src/data/frameworks/webframeworks.json'


export type CypressData ={
  name: string,
  href: URL,
  frameworkType : string,
  language : string,
  packageManager : string,
  automation : string,
  browser: string,
  exampleRepo : URL
}

export default function Cypress () { 
  return(
    <div>
      <div className="row is-multiline">
        {cypressdata.map((cypressdata) => (
          <div key={cypressdata.name} className="{cypressdata.name}">
        <>
        <p> This tutorial will show you how to automate visual tests using the Applitools Ultrafast Grid with {cypressdata.name}. [Applitools Ultrafast Grid](https://applitools.com/platform/) can help you catch functional and visual problems at scale across all browsers and devices in seconds. The Applitools Eyes SDK for {cypressdata.name} does *not* support the Classic runner, it supports only the Ultrafast Grid.
        </p>
        <p>
        In this tutorial, you will:
        </p>
        <ol>
            <li>Set up your local machine for testing.</li>
            <li>Clone the example project repository.</li>
            <li>Learn how to automate visual testing with Applitools Eyes.</li>
            <li>Run the visual tests and review results in the Applitools dashboard.</li>
        </ol>
        <p>
            After setting up your machine, this tutorial should take **about 15 minutes** to complete. 
            If you get stuck along the way, please [reach out to us for help](https://help.applitools.com/hc/en-us/requests/new)!    
        </p>    
        <p>
            :::tip Quickstart

            If you prefer a quickstart instead of a full tutorial,
            clone the [example repository]({cypressdata.exampleRepo})

            and follow the [README]({cypressdata.exampleRepo}/blob/README.md) instructions!
            :::   
        </p>

        <h2>Recognizing project structure</h2>
        <p> The example project uses:</p>
        <ul>
            <li>{cypressdata.language} as the programming language</li>
            <li>{cypressdata.automation} for browser automation</li>
            <li>{cypressdata.browser} as the local browser for testing</li>
            <li>{cypressdata.packageManager} for dependency management</li>
            <li>[Applitools Eyes](https://applitools.com/platform/eyes/) for visual testing</li>
            <li>[Applitools Ultrafast Grid](https://applitools.com/platform/ultrafast-grid/) for cross-browser execution</li>
        </ul>

        <h2>Setting up your machine</h2>
        <p>You'll need a few things to run this tutorial:</p>
        <ol>
            <li>An [Applitools account](https://auth.applitools.com/users/register),
                which you can register for free.</li>
            <li>[Node.js](https://nodejs.org/en/download/), version 12 or higher.
</li>
            <li>A good text editor or IDE like [Visual Studio Code](https://code.visualstudio.com/docs/languages/javascript).</li>
            <li>Up-to-date versions of the following browsers:
                <ul>
                    <li>[Google Chrome](https://www.google.com/chrome/)</li>
                    <li>[Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)</li>
                    <li>[Microsoft Edge](https://www.microsoft.com/en-us/edge)</li>
                </ul>
            </li>
        </ol>
        <h2>Downloading the example project</h2>
        <p>The example project is located at [{cypressdata.exampleRepo}]({cypressdata.exampleRepo}). Clone this repository to your local machine:</p>

                ```
                $ git clone https://github.com/applitools/example-cypress-javascript-ufg.git
                $ cd example-cypress-javascript-ufg
                ```

                *Note: If you don't have Git installed,
                then instead of running `git clone`,
                you can [download the project as a ZIP file](https://github.com/applitools/example-cypress-javascript-ufg/archive/refs/heads/master.zip)
                and extract it.*


                ## Understanding the dependencies

                The example project uses [npm](https://www.npmjs.com/) for package management.
                It contains the following dependencies for the 
                [Applitools Eyes SDK for Cypress](https://www.npmjs.com/package/@applitools/eyes-cypress)
                as well as Cypress itself:
        </>
                
            </div>
        ))}
      </div>
    </div>
  )
}

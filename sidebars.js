/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Platform Overview',
          items: [
            'platform/applitools-eyes/index',
            'platform/applitools-ufg',
            'platform/applitools-nmg',
          ],
        },
        'getting-started/adding-applitools',
        'getting-started/retrieving-api-key',
        'getting-started/analyzing-differences',
        'getting-started/match-level',
        'getting-started/root-cause-analysis',
      ],
    },
    {
      type: 'category',
      label: 'Quickstarts',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Web SDKs',
          items: [
            'quickstart/web/cypress',
            {
              type: 'category',
              label: 'Selenium',
              items: ['quickstart/web/selenium/java', 'quickstart/web/selenium/javascript', 'quickstart/web/selenium/python','quickstart/web/selenium/c-sharp', 'quickstart/web/selenium/ruby', 'quickstart/web/selenium/php']
            },
            {
              type: 'category',
              label: 'WebdriverIO',
              items: ['quickstart/web/webdriver/webdriverio-4','quickstart/web/webdriver/webdriverio-5','quickstart/web/webdriver/webdriverio-6',]
            },
            'quickstart/web/puppeteer',
            'quickstart/web/playwright',
            'quickstart/web/protractor',
            'quickstart/web/testcafe',
            'quickstart/web/watir',
            'quickstart/web/capybara',
            {
              type: 'category',
              label: 'LeanFT',
              items: ['quickstart/web/leanft/leanft-c', 'quickstart/web/leanft/leanft-javascript',]
            },
          ],
        },
        {
          type: 'category',
          label: 'Mobile SDKs',
          items: [
            {
              type: 'category',
              label: 'Appium',
              items: ['quickstart/mobile/appium/appium-native-csharp','quickstart/mobile/appium/appium-native-java', 'quickstart/mobile/appium/appium-native-javascript','quickstart/mobile/appium/appium-native-python','quickstart/mobile/appium/appium-native-ruby','quickstart/mobile/appium/appium-native-php',]
            },
            'quickstart/mobile/espresso',
            {
              type: 'category',
              label: 'XCUI',
              items: ['quickstart/web/leanft/leanft-c', 'quickstart/web/leanft/leanft-javascript',]
            },
            {
              type: 'category',
              label: 'Calabash',
              items: ['quickstart/web/leanft/leanft-c', 'quickstart/web/leanft/leanft-javascript',]
            },
          ],
        },
        {
          type: 'category',
          label: 'Desktop SDKs',
          items: ['quickstart/desktop/windows-uft', 'quickstart/desktop/windows-coded-UI',],
        },
        {
          type: 'category',
          label: 'Codeless',
          items: ['quickstart/codeless/selenium-ide', 'quickstart/codeless/pdfs', 'quickstart/codeless/uft'],
        },
        {
          type: 'category',
          label: 'Screenshots',
          items: ['quickstart/screenshots/cli', 'quickstart/screenshots/c-sharp', 'quickstart/screenshots/java', 'quickstart/screenshots/javascript', 'quickstart/screenshots/python', 'quickstart/screenshots/ruby', 'quickstart/screenshots/php', 'quickstart/screenshots/xctest-swift', 'quickstart/screenshots/xctest-objective-c'],
        },
      ],
    },
    
    {
      type: 'category',
      label: 'References',
      collapsed: true,
      items: [
        'reference/sdk-api/index',
        'reference/server-api/index',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Continous Integration',
          items: ['guides/ci/gitlab', 'guides/ci/github', 'guides/ci/jenkins', 'guides/ci/circleci'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: true,
      items: [
        'concepts/what-is-visual-ai',
        'concepts/comparing-applitools',
        'getting-started/accessibility',
      ],
    },
  ],
};

module.exports = sidebars;

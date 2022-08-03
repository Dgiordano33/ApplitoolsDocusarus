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
      label: 'Platform',
      collapsible: false,
      items: [
        'platform/applitools-eyes/index',
        'platform/applitools-ufg',
        'platform/applitools-nmg',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: false,
      items: [
        'getting-started/adding-applitools',
        'getting-started/retrieving-api-key',
      ],
    },
    {
      type: 'category',
      label: 'Quickstart',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Web SDKs',
          items: ['quickstart/web/cypress'],
        },
        {
          type: 'category',
          label: 'Mobile SDKs',
          items: ['quickstart/mobile/espresso'],
        },
        {
          type: 'category',
          label: 'Desktop SDKs',
          items: ['quickstart/desktop/windows-uft'],
        },
        {
          type: 'category',
          label: 'Codeless',
          items: ['quickstart/codeless/selenium-ide'],
        },
        {
          type: 'category',
          label: 'Screenshots',
          items: ['quickstart/screenshots/cli'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsible: false,
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
      label: 'References',
      collapsible: false,
      items: [
        'reference/sdk-api/index',
        'reference/server-api/index',
      ],
    },
  ],
};

module.exports = sidebars;

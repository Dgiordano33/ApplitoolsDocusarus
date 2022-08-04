// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Applitools Docs',
  tagline: 'Get started visual testing today ',
  url: 'https://applitools-docusarus.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Serve the docs at the site's root
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Documentation',
        logo: {
          alt: 'My Site Logo',
          src: 'https://applitools.com/wp-content/uploads/2022/08/Applitools-Logo-Set-V2_Applitools_1c_Green_Applitools_fullcolor_tagline-1.svg',
        },
        items: [
          {
            href: 'https://applitools.com/platform',
            label: 'Products',
            position: 'left',
          },
          {
            href: 'https://applitools.com/pricing',
            label: 'Pricing',
            position: 'left',
          },
          {
            href: 'https://applitools.com/company',
            label: 'Company',
            position: 'left',
          },
          {
            href: 'https://github.com/applitools',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'Platform',
                href: '/docs/intro',
              },
              {
                label: 'Eyes',
                href: '/docs/intro',
              },
              {
                label: 'Ultrafast Grid',
                href: '/docs/intro',
              },
              {
                label: 'Native Mobile Grid',
                href: '/docs/intro',
              },
              {
                label: 'Integrations',
                href: '/docs/intro',
              },
              {
                label: 'Pricing',
                href: '/docs/intro',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Test Automation University',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Blog',
                href: '/blog',
              },
              {
                label: 'Resource Library',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Future of Testing',
                href: 'https://twitter.com/docusaurus',
              },
              {
                label: 'Insights and Reports',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'Reach Out',
            items: [
              {
                label: 'Start a Trial',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Request a Demo',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Contact Sales',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Enter Support Ticket',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
      
    }),

};

module.exports = config;

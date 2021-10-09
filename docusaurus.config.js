const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

// Constants
const SITE_NAME = 'Evaluation Metrics';
const SITE_TAGLINE = 'Dinosaurs are cool';

const GH_REPO_OWNER = 'PrasoonPratham';
const GH_REPO_NAME = 'evaluation-metrics';
const BASE_GITHUB_URL = `https://github.com/${GH_REPO_OWNER}/${GH_REPO_NAME}`;

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  // Site name and tagline
  title: SITE_NAME,
  tagline: SITE_TAGLINE,

  // Site URL config
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',

  // Site broken links configuration
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Site meta
  favicon: 'img/favicon.ico',
  organizationName: GH_REPO_OWNER,
  projectName: GH_REPO_NAME,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: `${BASE_GITHUB_URL}/edit/main/website/`
        },
        blog: {
          showReadingTime: true,
          editUrl: `${BASE_GITHUB_URL}/edit/main/website/blog/`
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  // Site presets
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          remarkPlugins: [math],
          rehypePlugins: [katex]
        }
      }
    ]
  ],

  // Site stylesheets
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous'
    }
  ],

  // Site theme
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: SITE_NAME,
        logo: {
          alt: `${SITE_NAME} logo`,
          src: 'img/logo.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'Metrics/F1',
            position: 'left',
            label: 'Tutorial'
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: BASE_GITHUB_URL,
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus'
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog'
              },
              {
                label: 'GitHub',
                href: BASE_GITHUB_URL
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Evaluation Metrics. Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

// Constants
const SITE_NAME = 'Evaluation Metrics';
const SITE_TAGLINE = 'All about Machine learning evaluation metrics!';

const GH_REPO_OWNER = 'PrasoonPratham';
const GH_REPO_NAME = 'evaluation-metrics-rewrite';
const BASE_GITHUB_URL = `https://github.com/${GH_REPO_OWNER}/${GH_REPO_NAME}`;

// Module exports
module.exports = {
  // Site name and tagline
  title: SITE_NAME,
  tagline: SITE_TAGLINE,

  // Site URL config
  url: 'https://evaluation-metrics-rewrite.vercel.app',
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
      {
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
      }
    ]
  ],

  // Site presets
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
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
  themeConfig: {
    navbar: {
      title: SITE_NAME,
      logo: {
        alt: `${SITE_NAME} logo`,
        src: 'img/logo.svg'
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs'
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
  }
};

const path = require('path');

const pkg = require('./package.json');

module.exports = {
  siteMetadata: {
    title: 'United Nations World Data Forum',
    description:
      'The third United Nations World Data Forum will be hosted by the Swiss Confederation, with substantive support from the Swiss Federal Statistical Office, from 18–21 October 2020 in Bern, Switzerland.',
    keywords: [
      'United Nations World Data Forum',
      '2030 Agenda',
      'Sustainable Development Goals',
    ],
    siteTwitterUsername: 'UNDataForum',
    siteUrl: pkg.homepage,
  },
  plugins: [
    // Micro frontend for /2020.
    'gatsby-theme-2020',
    // Micro frontend for /profiles.
    'gatsby-theme-profiles',
    {
      resolve: '@undataforum/gatsby-theme-blog',
      options: {
        basePath: '/blog',
        // contentPath: 'content/posts',
        assetPath: 'content/assets/posts',
        profiles: 'profiles',
      },
    },
    {
      resolve: '@undataforum/gatsby-theme-events',
      options: {
        basePath: '/webinars',
        // contentPath: 'content/events',
        assetPath: 'content/assets/events',
        profiles: 'profiles',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
  ],
};

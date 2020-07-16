module.exports = {
  siteTitle: 'gatby-starter-morning-de',
  siteDescription: 'A Gatsby theme/starter to build lightning-fast websites',
  authorName: 'Shahazad',
  twitterUsername: 'md_shanudjn',
  authorAvatar: 'ripu.jpg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  From the time he was born, Ripunjoy Buragohain has been a fan of Hera Pheri. He is currently focused on tranferring his intelligence to mere mortals through this blog. He is also an occasional motivational speaker and a mentor.
  
  `,
  siteUrl: 'https://maxpou.github.io/',
  disqusSiteUrl: 'https://www.maxpou.fr/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: 'cover.jpg', // file in content/images
  googleAnalyticsId: 'UA-67868977-2',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/batman2.png',
  postsPerPage: 6,
  disqusShortname: 'maxpou',
  headerTitle: 'International Brat',
  headerLinksIcon: 'batman2.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    // {
    //   label: 'About',
    //   url: '/about-gatsby-starter-morning-dew',
    // },

  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'About',
          url: '/about-gatsby-starter-morning-dew',
        },
        {
          label: 'Installation',
          url: '/how-to-install',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/',
        },
        {
          label: 'Instagram',
          url: 'https://www.instagram.com/__shahazad__/',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/md_shanudjn',
        },
      ],
    },
  ],
}

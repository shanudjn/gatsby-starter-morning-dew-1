module.exports = {
  siteTitle: 'International Brat Speaks',
  siteDescription: 'Just shut the f*uck up and listen to me!',
  authorName: 'Shahazad',
  twitterUsername: '',
  authorAvatar: 'ripu.jpg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  From the time he was born, Ripunjoy Buragohain has been a fan of Hera Pheri. 
  He is currently focused on tranferring his intelligence to mere mortals through this blog. 
  He is also an occasional motivational speaker and a mentor.`,
  siteUrl: 'http://shanudjn.pythonanywhere.com/',
  disqusSiteUrl: '',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: 'cover.jpg', // file in content/images
  googleAnalyticsId: 'UA-67868977-2',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/batman2.png',
  postsPerPage: 6,
  disqusShortname: '',
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
        // {
        //   label: 'About',
        //   url: '',
        // },
        // {
        //   label: 'Installation',
        //   url: '/how-to-install',
        // },
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
          url: 'https://www.instagram.com/',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/',
        },
      ],
    },
  ],
}

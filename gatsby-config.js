module.exports = {
  siteMetadata: {
    title: 'Gatsby Bulma Quickstart',
    author: 'Aman Mittal',
    imageUrl: 'https://i.imgur.com/Vz81GEl.png',
    description: 'A Project to bootstrap your next Gatsby + Bulma site.',
    keywords: `Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter`,
    twitter: 'https://twitter.com/PSG_Solutions',
    linkedin: 'https://www.linkedin.com/company/4847749/',
    facebook: 'https://www.facebook.com/PSG-Solutions-395695613940022/',
    github: `https://github.com/amandeepmittal`,
    medium: 'https://medium.com/@amanhimself',
    gatsby: 'https://www.gatsbyjs.org/',
    bulma: 'https://bulma.io/',
    siteUrl: `https://www.example.com`,
    // export bitbucket pipelines info.
    bitbucketBuildNumber: process.env.BITBUCKET_BUILD_NUMBER || '',
    bitbucketHash: process.env.BITBUCKET_COMMIT || '',
    bitbucketBranch: process.env.BITBUCKET_BRANCH || '',
    bitbucketTag: process.env.BITBUCKET_TAG || ''
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['./src']
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static'
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Makefolio',
        short_name: 'Makefolio',
        start_url: '/',
        background_color: '#2980b9',
        theme_color: '#2980b9',
        display: 'standalone',
        icon: 'src/img/gatsby-icon.png',
        orientation: 'portrait'
      }
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'UA-XXXXXXXX-X',
    //     // Setting this parameter is optional (requried for some countries such as Germany)
    //     anonymize: true
    //   }
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'] // applies purging only on the bulma css file
      }
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
};

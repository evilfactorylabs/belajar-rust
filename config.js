const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://handbook.evilfactory.id',
    gaTrackingId: 'UA-156058188-3'
  },
  header: {
    logo: '',
    logoLink: 'https://handbook.evilfactory.id',
    title: 'evilfactorylabs Handbook',
    githubUrl: 'https://github.com/evilfactorylabs/handbook',
    helpUrl: '',
    tweetText: '',
    links: [{ text: 'Twitter', link: 'https://twitter.com/evilfactorylabs' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY
    }
  },
  sidebar: {
    forcedNavOrder: ['/introduksi', '/evangelist', '/rnd'],
    collapsedNav: [],
    links: [
      { text: 'evilfactorylabs.org', link: 'https://evilfactorylabs.org' },
      {
        text: 'Perkumpulan',
        link: 'https://evilfactorylabs.org'
      },
      { text: 'Blog by evilfactorylabs', link: 'https://evilfactorylabs.org' },
      { text: 'Brief by evilfactorylabs', link: 'https://evilfactorylabs.org' }
    ],
    frontline: false,
    ignoreIndex: true
  },
  siteMetadata: {
    title: 'evilfactorylabs Handbook',
    description: 'yes',
    ogImage: null,
    docsLocation:
      'https://github.com/evilfactorylabs/handbook/tree/master/content',
    favicon: 'https://evilfactorylabs.org/evilfactory.png'
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'evilfactorylabs Handbook',
      short_name: 'evilfactorylabs Handbook',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`
        }
      ]
    }
  }
}

module.exports = config

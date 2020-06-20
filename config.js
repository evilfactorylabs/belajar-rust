const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://rust.evilfactory.id',
    gaTrackingId: ''
  },
  header: {
    logo: '',
    logoLink: 'https://rust.evilfactory.id',
    title: 'Belajar Rust',
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
    forcedNavOrder: ['/chapter-1', '/chapter-2', '/chapter-3'],
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
    title: 'Belajar Rust',
    description: 'yes',
    ogImage: null,
    docsLocation:
      'https://github.com/evilfactorylabs/handbook/tree/master/content',
    favicon: 'https://evilfactorylabs.org/evilfactory.png'
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Belajar Rust',
      short_name: 'Belajar Rust',
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

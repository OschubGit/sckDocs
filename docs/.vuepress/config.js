module.exports = {
  title: '',
  description: 'Documentación proyecto Watch',
  themeConfig: {
    logo: '/img/logoDoc.png',
    smoothScroll: true,
    search: true,
    searchMaxSuggestions: 10,
    searchPlaceholder: 'Buscar...',
    // displayAllHeaders: true, // Default: false
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Guia', link: '/guia/',
        text: 'watch scenikus', link: 'http://watch.scenikus.com',
      },
      { text: 'External', link: 'https://material-ui.com' },
    ],
    sidebar: {
      '/guia/': [
        'scenikus-guia',
        '',
        /* 'manual-estilos', */
      ]
    },
    lastUpdated: 'Last Updated', // string | boolean
  }
}
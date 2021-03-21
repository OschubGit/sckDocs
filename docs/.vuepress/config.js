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
        { text: 'Guia', link: '/guia/', 
        items: [
          { text: 'Más info', link: '/' },
          { text: 'watch scenikus', link: 'http://watch.scenikus.com' },
          { text: 'Ayuda', link: '/' }
        ]
        },
        { text: 'External', link: 'https://google.com' },
      ],
      sidebar:{
        '/guia/':[
          '',
          'scenikus-guia',
          'manual-estilos',
          {
            title: 'Group 1',   // required
            path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
            collapsable: true, // optional, defaults to true
            sidebarDepth: 1,    // optional, defaults to 1
            children: [
              '/'
            ]
          },
          {
            title: 'Group 2',
            children: [ '/' ],
            initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
          },
        ]
      },
      lastUpdated: 'Last Updated', // string | boolean
    }
  }
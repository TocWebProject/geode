export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Deployment Target: Static Hosting
  target: 'static', 

  // Fallback to the generated 404.html when in SPA mode instead of Netlify's 404 page.
  generate: {
    fallback: true
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Évaluez l’ouverture d’un environnement éducatif',
    titleTemplate: 'GÉODE | %s',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description',
        name: 'description',
        content: 'GÉODE : Grille d’Évaluation de l’Ouverture D’un Environnement éducatif, un instrument au service de l\'ingénierie et de la recherche dont l\'auteur est Annie Jezegou. Outil développé par la Fabrique des Formations - Université de Lille' 
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'GÉODE | Évaluez l’ouverture d’un environnement éducatif'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'GÉODE : Grille d’Évaluation de l’Ouverture D’un Environnement éducatif, un instrument au service de l\'ingénierie et de la recherche dont l\'auteur est Annie Jezegou. Outil développé par la Fabrique des Formations - Université de Lille'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://geodepreview01.netlify.app/geode-social-share.png'
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Illustration de personnes jouant avec des graphiques'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'GÉODE | Évaluez l’ouverture d’un environnement éducatif'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'GÉODE : Grille d’Évaluation de l’Ouverture D’un Environnement éducatif, un instrument au service de l\'ingénierie et de la recherche dont l\'auteur est Annie Jezegou. Outil développé par la Fabrique des Formations - Université de Lille'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://geodepreview01.netlify.app/geode-social-share.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://geodepreview01.netlify.app/geode-social-share.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Illustration de personnes jouant avec des graphiques'
      } 
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { hid: 'canonical', rel:'canonical', href: 'https://geodepreview01.netlify.app/' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
  ],

  // Loading Indicator
  loadingIndicator: {
    name: 'folding-cube',
    color: '#ad2472',
    background: '#9ca3af'
  },

  // Tailwind Just-In-Time
  tailwindcss: {
    jit: true
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'vue-scrollto/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

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
      //Opengraph
      { property: "og:site_name", content: "GÉODE" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://geodepreview01.netlify.app/",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "GÉODE | Évaluez l’ouverture d’un environnement éducatif",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "GÉODE : Grille d’Évaluation de l’Ouverture D’un Environnement éducatif, un instrument au service de l\'ingénierie et de la recherche dont l\'auteur est Annie Jezegou. Outil développé par la Fabrique des Formations - Université de Lille",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://geodepreview01.netlify.app/geode-social-share.png",
      },
      { property: "og:image:width", content: "740" },
      { property: "og:image:height", content: "300" },
      //Twitter Card
      { name: "twitter:site", content: "GÉODE" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://geodepreview01.netlify.app/",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "GÉODE | Évaluez l’ouverture d’un environnement éducatif",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "GÉODE : Grille d’Évaluation de l’Ouverture D’un Environnement éducatif, un instrument au service de l\'ingénierie et de la recherche dont l\'auteur est Annie Jezegou. Outil développé par la Fabrique des Formations - Université de Lille",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://geodepreview01.netlify.app/geode-social-share.png",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { hid: 'canonical', rel:'canonical', href: 'https://geodepreview01.netlify.app/' }
    ]
  },

   // PWA
   pwa: {
    manifest: {
      name: 'GÉODE',
      short_name:'GÉODE',
      lang: 'fr',
      description: 'GÉODE : Grille d’Évaluation de l’Ouverture D’un Environnement éducatif, un instrument au service de l\'ingénierie et de la recherche dont l\'auteur est Annie Jezegou. Outil développé par la Fabrique des Formations - Université de Lille',
      background_color: '#661543',

    },
    meta: {
      name:'GÉODE',
      author: 'La fabrique des formations',
      lang: 'fr',
      description: 'GÉODE : Grille d’Évaluation de l’Ouverture D’un Environnement éducatif, un instrument au service de l\'ingénierie et de la recherche dont l\'auteur est Annie Jezegou. Outil développé par la Fabrique des Formations - Université de Lille',
      theme_color: '#661543',
    }
  },

  // Environnement
  env: {
    // Google Analytics
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID
  },

  // Sitemap
  sitemap: {
    // NEED TO BE CHANGE FOR PRODUCTION !!!!!!!!!!!!!!!!!
    hostname: 'https://example.com',
    gzip: true,
    exclude: [
      '/mentionslegales',
    ]
  },

  // Tailwind CSS
  tailwindcss: {
    mode: 'jit'
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

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-ellipse-progress.js',
    {
      src: './plugins/GoogleAnalytics.js',
      mode: 'client'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'vue-scrollto/nuxt',
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  
  }
}

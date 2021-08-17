import strapiEntities from './config/strapiEntities';

const strapiBaseUri = process.env.API_URL || 'http://localhost:1337';

export default {
  target: 'static',
  env: {
    strapiBaseUri,
  },

  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat',
      },
      {
        rel: 'icon',
        type: 'image/x-icon', href: '/favicon.png',
      }
    ],
  },

  /*
   ** Global CSS
   */
  css: [
    '@assets/styles/index.scss',
  ],

  /*
   ** Global CSS
   */
  styleResources: {
    scss: [
      '@assets/styles/variables.scss',
      '@assets/styles/mixins/media.scss',
    ]
  },

  plugins: [
    // { src: '~/plugins/test.js', ssr: false },
  ],

  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/strapi',
    '@nuxtjs/style-resources',
  ],
  strapi: {
    url: strapiBaseUri,
    entities: strapiEntities,
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    html: true,
  },

  router: {
    middleware: 'redirects',
  },

};

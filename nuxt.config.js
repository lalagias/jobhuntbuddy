import path from 'path'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'JobHuntBuddy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'Manage your job search by tracking leads and staying on top of the hunt.' },
      { hid: 'msAppTileColor', name: 'msapplication-TileColor', content: '#434190' },
      { hid: 'themeColor', name: 'theme-color', content: '#434190' },
      { hid: 'ogtitle', property: 'og:title', content: 'It\'s how you find a job!' },
      { hid: 'ogdescription', property: 'og:description', content: 'Manage your job search by tracking leads and staying on top of the hunt.' },
      { hid: 'ogimage', property: 'og:image', content: 'https://jobhuntbuddy.co/images/screenshot_leads_list.png' },
      { hid: 'ogsite_name', property: 'og:site_name', content: 'JobHuntBuddy' },
      { hid: 'ogurl', property: 'og:url', content: 'https://jobhuntbuddy.co' },
      { hid: 'ogtype', property: 'og:type', content: 'website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/png', href: '/apple-touch-icon.png', sizes: '180x180' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#434190' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['~/assets/scss/tailwind.scss', '~/assets/scss/main.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    './plugins/mixins/user',
    './plugins/Uuid',
    './plugins/Vuelidate',
    './plugins/firebase'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/moment',
    'nuxt-purgecss',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        // import 2 icons from set
        // please note this is PRO set in this example,
        // you must have it in your node_modules to actually import
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faHeart', 'faSignOutAlt', 'faChevronRight', 'faChevronDown']
        }
      ]
    }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      }
    },
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  purgeCSS: {
    mode: 'postcss'
  }
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-shop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      // Web reference to bulma (comment out if using static css file)
      // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.1/css/bulma.min.css' },
      { rel: 'stylesheet', href: '/bulma.css' },
      { rel: 'stylesheet', href: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    cockpit: {
      apiUrl: 'http://localhost:8080/api',
      // apiToken: <YOUR API KEY>
      baseUrl: 'http://localhost:8080'
    }
  }
}

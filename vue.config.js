module.exports = {
  pluginOptions: {
    quasar: {
      theme: 'mat'
    }
  },
  transpileDependencies: [
    /[\\\/]node_modules[\\\/]quasar-framework[\\\/]/
  ],
  publicPath: process.env.NODE_ENV === 'production'
  ? ''
  : '/'
}

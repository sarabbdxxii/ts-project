
module.exports = {
  publicPath: '/web/ts-project/',
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'font-size-base' : '12px'
        },
        javascriptEnabled: true
      }
    }
  }
}
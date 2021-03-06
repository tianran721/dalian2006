module.exports = {
  // lintOnSave: false, //关闭eslint
  devServer: {
    overlay: {
      //忽略遮罩层
      warnings: false,
      errors: false
    },
    proxy: {
      '/v2': {
        target: 'https://m.wowdsgn.com',
        changeOrigin: true
      },
      '/pages': {
        target: 'https://m.wowdsgn.com',
        changeOrigin: true
      }
    }
  }
}

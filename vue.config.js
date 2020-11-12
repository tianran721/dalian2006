module.exports = {

  lintOnSave: false, //关闭eslint
  devServer: {
    proxy: {
      v2: {
        target: 'https://m.wowdsgn.com',
        changeOrigin: true
      }
    }
  }
}

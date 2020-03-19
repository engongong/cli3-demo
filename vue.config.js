var pageConf = require('./config/pageConf.js')
const path = require('path');

module.exports = {
  pages: pageConf.pages,
  outputDir: pageConf.outputDir,
  chainWebpack: config => {
    // 路径别名
    config.resolve.alias
      .set('api', path.join(__dirname, 'src/api'))
      .set('images', path.join(__dirname, 'src/assets/images'))
      .set('components', path.join(__dirname, 'src/components'))
      .set('style', path.join(__dirname, 'src/style'))
      .end()
      .symlinks(true); // 修复HMR
  },
  css: {
    loaderOptions: {
      // 定义sass全局变量
      sass: {
        prependData: `@import "~style/theme.scss"`
      },
      scss: {
        prependData: `@import "~style/theme.scss";`
    },
    }
  },
  devServer: {
    port: 8080,
    host: "0.0.0.0",
    open: true,
    proxy: {
      '/app': {
        target: "https://xtxy.pt-ts.my-campus.cn",
        // target: "https://zhxy.xpc.edu.cn",
        changeOrigin: true,
      },
      '/pcapi': {
        target: "http://xtxy.pt-ts.my-campus.cn",
        changeOrigin: true,
      },
    },
  }
}

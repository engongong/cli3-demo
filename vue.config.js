var pageConf = require('./config/pageConf.js')


module.exports = {
  pages: pageConf.pages,
  outputDir: pageConf.outputDir,
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

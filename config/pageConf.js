const path = require('path');

const argv = JSON.parse(process.env.npm_config_argv);
console.log(argv.cooked[2]);
const BUILD_PAGE = argv.cooked[2].substring(2);
const outputDir = path.resolve('dist', BUILD_PAGE);

const BUILD_PATH = path.resolve('src/pages', BUILD_PAGE);
let pages = {};
pages[BUILD_PAGE] = {
  entry: path.join(BUILD_PATH, 'index.js'),
  template: path.join('public', 'index.html'),
  // 在 dist/index.html 的输出
  filename: 'index.html',
}

module.exports = {
    outputDir,
    pages
  };

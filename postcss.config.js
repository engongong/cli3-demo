module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      "rootValue": 100, // 设置根元素大小，1rem=100px
      "propList": ["*"], // 被转换的属性列表
      "selectorBlackList": [ // 对css选择器进行过滤
        ".van-"
      ],
    }
  }
}

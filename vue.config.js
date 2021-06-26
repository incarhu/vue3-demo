// const fs = require('fs')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-project/'
    : '/',

  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,

  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/webpack.md
  chainWebpack: config => {
    config.module
      .rule('images')
        .use('url-loader')
          .loader('url-loader')
          .tap(options => Object.assign(options, { limit: 10240, esModule: false }))
  },

  // CSS 相关选项
  css: {
    // 是否开启 CSS source map？
    sourceMap: false,
    
    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {
      postcss: {
        // options here will be passed to postcss-loader
        // plugins: [require('postcss-px2rem')({
        //   remUnit: 75
        // })]
        // postcssOptions: ()=> {
        //   return {
        //     plugins: [require('postcss-adaptive')({
        //       remUnit: 75
        //     })],
        //   }
        // }

      },
      sass: {
        additionalData: `@import "@/assets/scss/public.scss";`
        // data: fs.readFileSync('./src/assets/scss/public.scss', 'utf-8')
      }
    },
  },

  lintOnSave: false, //是否开启eslint


  // 配置 webpack-dev-server 行为。
  devServer: {
  },

  // 三方插件的选项
  pluginOptions: {
    
  }
}
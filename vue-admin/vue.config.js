const path = require("path");
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./", // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devdist", // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
  assetsDir: "static", //放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
  lintOnSave: false, // 是否开启eslint保存检测
  productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
  chainWebpack: (config) => {},
  css: {
    // loaderOptions: {
    //   sass: {
    //       data: '@import "./src/styles/main.scss";'
    //   }
    //}
  },
  devServer: {
    /* 本地ip地址 */
    host: "0.0.0.0",
    port: "8080",
    hot: true,
    /* 自动打开浏览器 */
    open: false,
    /* 跨域代理 */
    proxy: {
      "/api": {
        /* 目标代理服务器地址 */
        target: "http://localhost:8880 ", //
        /* 允许跨域 */
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      }, //,
      // '/foo': {
      //   target: '<other_url>'
      // }
    },
    // pluginOptions: {// 第三方插件配置
    //
    // }
  },
};

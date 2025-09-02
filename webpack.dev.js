const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    hot: true,
    open: true,
    port: 8080,
    watchFiles: ["./src/index.html", "./src/**/*.js", "./src/**/*.css"],
    static: {
      directory: "./public",
      watch: true,
    },
  },
  output: {
    filename: "index.js",
  },
  optimization: {
    runtimeChunk: "single",
  },
});

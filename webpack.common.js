const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "assets/[name][ext][query]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

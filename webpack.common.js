const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["babel-polyfill", "./src/app.js"],
  output: {
    path: path.join(__dirname, "public", "dist"),
    filename: "bundle.js",
  },
  module: {
    noParse: function (content) {
      return /express/.test(content);
    },
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: { loader: "url-loader?limit=100000" },
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: true, url: false } },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "Mail Spaghetti",
      cache: false,
      publicPath: "/dist",
      filename: "../index.html",
      template: "./template.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
      chunkFilename: "[name].css",
    }),
  ],
};

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["env", "react"],
        },
      },
      {
        test: /\.css$/,
        loader:
          "style-loader!css-loader?modules&localIdentName=[local]--[hash:base64:5]",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
};

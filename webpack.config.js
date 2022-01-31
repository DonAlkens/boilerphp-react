const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const configurations = require("./appsettings.json").webpack;

module.exports = {
    mode: configurations.mode,
    entry: configurations.entry,
    output: {
        filename: configurations.output.filename,
        path: path.resolve(__dirname, configurations.output.path),
        publicPath: '/public/app/'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: configurations.cache ? "css/[name].css" : "css/[name].[hash].css"
        }),

    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "../../app/Views/index.fish.html",
      inject: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: false,
            cacheCompression: false,
            envName: "development",
          },
        },
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader, //'style-loader',
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpg|png|gif|bmp)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "static/media/[name].[ext]",
          },
        },
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: {
          loader: require.resolve("file-loader"),
          options: {
            limit: 8192,
            name: "static/media/[name].[ext]",
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss"],
  },
  externals: {
    // jquery: 'jQuery',
    React: "react",
  },
};

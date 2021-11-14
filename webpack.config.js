const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.jsx",
    output: {
        filename: "js/main.js",
        path: path.resolve(__dirname, "public")
    },
    plugins: [
        
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        }),

        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
            filename: "../app/Views/index.fish.html",
            inject: true
        })
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
                        envName: "development"
                    }
                },
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, //'style-loader', 
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|bmp)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        name: "static/media/[name].[ext]"
                    }
                }
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2)$/,
                use: {
                    loader: require.resolve("file-loader"),
                    options: {
                        limit: 8192,
                        name: "static/media/[name].[ext]"
                    }
                }
            },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".css", ".scss"]
    },
    externals: {
        jquery: 'jQuery',
        React: 'react'
    }
};
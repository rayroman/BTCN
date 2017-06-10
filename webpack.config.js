/**
 * Created by rroman681 on 6/9/17.
 * webpack configuration
 */
const path = require("path");

module.exports = {
    entry: "./app",
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/",
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 3000,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader?cacheDirectory=true",
                options: {
                    presets: ["env", "react"]
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "sass-loader"}
                ]
            }
        ]
    }
};
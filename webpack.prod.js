const path = require('path')
const common = require("./webpack.common");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[name].[hash][ext][query]'
    },
    plugins: [
        new CleanWebpackPlugin(), 
        new MiniCssExtractPlugin({filename: 'css/[name].[contenthash].css'}),
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            minify: {
                collapseWhitespace: true,
                keepClosingSlash: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        })
    ],
    optimization: {
        minimizer: [
            `...`,
            new CssMinimizerPlugin(),
        ],
    },
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
            }
        ]
    }
})
const path = require('path')
const common = require("./webpack.common");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[name].[hash][ext][query]'
    },
    plugins: [new CleanWebpackPlugin()],
})
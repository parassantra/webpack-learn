const path = require('path')
const common = require("./webpack.common");
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader', 'sass-loader']
            }
        ]
    }
})
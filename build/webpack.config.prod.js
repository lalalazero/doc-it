const baseConfig = require('./webpack.config.base')
const webpackMerge = require('webpack-merge')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const prodConfig = {
    mode: 'production',
    output: {
        path: path.join(__dirname, "..", 'dist'),
        filename: '[name]-[chunkhash:8].js'
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
}
module.exports = webpackMerge(baseConfig, prodConfig)

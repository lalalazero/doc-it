const baseConfig = require('./webpack.config.base')
const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

const devConfig = {
    mode: 'development',
    output: {
        path: path.join(__dirname, "..", 'dist'),
        filename: '[name]-[hash:8].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: '../dist',
        hot: true
    },
    devtool: 'source-map'
}
module.exports = webpackMerge(baseConfig, devConfig)

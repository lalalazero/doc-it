const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let templateFilePath = path.resolve(__dirname, "..", "public", "index.html")
let indexPath = path.resolve(__dirname, '..', 'example', 'index.tsx')

module.exports = {
    entry: {
        index: indexPath
    },
    mode: 'none',
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/env",
                            "@babel/typescript",
                            "@babel/react"
                        ],
                        "plugins": [
                            "@babel/proposal-class-properties",
                            "@babel/proposal-object-rest-spread",
                            // [
                            //     "import", {
                            //         "libraryName": "antd",
                            //         "libraryDirectory": "lib",   // default: lib
                            //         "style": true
                            //     }
                            // ]
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: templateFilePath,
            chunks: ['vendors', "index"],
            inject: true
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /(react|react-dom)/,
                    name: 'vendors',
                    chunks: "all"
                }
            }
        }
    }
}
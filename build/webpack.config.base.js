const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: './src/index.tsx'
    },
    mode: 'none',
    resolve: {
        extensions: [".js",".jsx",".ts",".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                loader: 'babel-loader', 
                exclude: /node_modules/,
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
            template: path.resolve(__dirname, "..", "src", "public", "index.html"),
            chunks: ['vendors',"index"],
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
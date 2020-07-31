#! /usr/bin/env node

const fs = require('fs')
const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const program = require('commander')

const defaultDevConfig = require('../../build/webpack.config.dev')
const defaultProdConfig = require('../../build/webpack.config.prod')

program.command('dev')
    .description('启动 webpack-dev-server 生成文档')
    .option('-c, --config','specify config file location, default to .docitrc.js', '.docitrc.js')
    .option('-d, --dist', 'specify output directory, default to docit', 'docit')
    .action(function(cmd, env) {
        console.log('dev, dev, dev')
        doDev()
    })

program.command('build')
    .description('启动 webpack 打包生成文档')
    .option('-c, --config','specify config file location, default to .docitrc.js', '.docitrc.js')
    .option('-d, --dist', 'specify output directory, default to docit', 'docit')
    .action(function(cmd, env) {
        console.log('build build build')
        doBuild()
    })
    
program.parse(process.argv)


function doDev() {
    const compiler = webpack(defaultDevConfig)
    const devServerOptions = defaultDevConfig.devServer
    const devServer = new webpackDevServer(compiler, devServerOptions)
    devServer.listen(3007, 'localhost', () => {
        console.log('[DOC-IT CLI] start server on http://localhost:3007')
    })
}

function doBuild() {
    webpack(defaultProdConfig, function(err, stats) {
        if (err) {
            throw err
        }
        if (stats.hasErrors()) {
            console.log('[DOC-IT CLI]', stats.toString())
        }
        process.stdout.write(stats.toString() + '\n\n')
    })
    
}

// let template = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>React in TypeScript</title>
// </head>
// <body>
//     <div id="root"></div>
// </body>
// </html>`
// const data = new Uint8Array(Buffer.from(template));
// fs.writeFile('output.html', data, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

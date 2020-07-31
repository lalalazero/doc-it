#! /usr/bin/env node

const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const program = require('commander')
const webpackMerge = require('webpack-merge')

const defaultDevConfig = getDefaultDevConfig()

program.command('dev')
    .description('启动 webpack-dev-server 生成文档')
    .option('-c, --config','specify config file location, default to .docitrc.js', '.docitrc.js')
    .option('-d, --dist', 'specify output directory, default to docit', 'docit')
    .action(function(cmd, env) {
        console.log('dev, dev, dev')
        doDev(cmd, env)
    })

program.command('build')
    .description('启动 webpack 打包生成文档')
    .option('-c, --config','specify config file location, default to .docitrc.js', '.docitrc.js')
    .option('-d, --dist', 'specify output directory, default to docit', 'docit')
    .action(function(cmd, env) {
        console.log('build build build')
        doBuild(cmd, env)
    })
    
program.parse(process.argv)


function doDev(cmd, env) {
    let p = path.parse(process.env.PWD)
    let configFilePath = path.resolve(p.dir, p.base, '.docitrc.js')
    let configs = require(configFilePath)
    let outputPath = path.resolve(p.dir, p.base, configs.outputDir)
    defaultDevConfig.output.path = outputPath
    defaultDevConfig.devServer.contentBase = outputPath
    defaultDevConfig.entry = path.resolve(__dirname, '..', '..', 'example/index.tsx')
    console.log(JSON.stringify(defaultDevConfig,null,2))
    
    const compiler = webpack(defaultDevConfig)
    const devServerOptions = defaultDevConfig.devServer
    const devServer = new webpackDevServer(compiler, devServerOptions)
    devServer.listen(3007, 'localhost', () => {
        console.log('[DOC-IT CLI] start server on http://localhost:3007')
    })
}

function getDefaultDevConfig() {
    const baseConfig = require('../../build/webpack.config.base')
    const devConfig = require('../../build/webpack.config.dev')
    return webpackMerge(baseConfig, devConfig) 
}

function doBuild(cmd, env) {
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

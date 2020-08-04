#! /usr/bin/env node

const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const program = require('commander')

const defaultDevConfig = require('../../build/webpack.config.dev')
const defaultProdConfig = require('../../build/webpack.config.prod')

program.command('dev')
    .description('启动 webpack-dev-server 生成文档')
    .option('-c, --config', 'specify config file location, default to .docitrc.js', '.docitrc.js')
    .option('-d, --dist', 'specify output directory, default to docit', 'docit')
    .action(function (cmd, env) {
        console.log('doc-it cli starts: dev, dev, dev')
        doDev(cmd, env)
    })

program.command('build')
    .description('启动 webpack 打包生成文档')
    .option('-c, --config', 'specify config file location, default to .docitrc.js', '.docitrc.js')
    .option('-d, --dist', 'specify output directory, default to docit', 'docit')
    .action(function (cmd, env) {
        console.log('doc-it cli starts: build build build')
        doBuild(cmd, env)
    })

program.parse(process.argv)


function doDev(cmd, env) {
    let p = path.parse(process.env.PWD)
    fs.access(path.join(p.dir, p.base, '.docitrc.js'), function (err) {
        if (!err) {
            let configFilePath = path.resolve(p.dir, p.base, '.docitrc.js')
            let configs = require(configFilePath)
            setupDevConfig(configs)
            const compiler = webpack(defaultDevConfig)
            const devServerOptions = defaultDevConfig.devServer
            const devServer = new webpackDevServer(compiler, devServerOptions)
            devServer.listen(3007, 'localhost', () => {
                console.log('[DOC-IT CLI] start server on http://localhost:3007')
            })
        }
    })

}

function doBuild(cmd, env) {
    let p = path.parse(process.env.PWD)
    fs.access(path.join(p.dir, p.base, '.docitrc.js'), function (err) {
        if (!err) {
            let configFilePath = path.resolve(p.dir, p.base, '.docitrc.js')
            let configs = require(configFilePath)
            setupProdConfig(configs)
            webpack(defaultProdConfig, function (err, stats) {
                if (err) {
                    throw err
                }
                if (stats.hasErrors()) {
                    console.log('[DOC-IT CLI]', stats.toString())
                }
                process.stdout.write(stats.toString() + '\n\n')
            })
        }
    })


}
function setupProdConfig(configs) {
    let p = path.parse(process.env.PWD)
    if (configs.outputDir) {
        let outputPath = path.resolve(p.dir, p.base, configs.outputDir)
        defaultProdConfig.output.path = outputPath
    }

    if (configs.publicPath) {
        defaultProdConfig.output.publicPath = configs.publicPath
    }
    makeEntryFile(configs)
}
function setupDevConfig(configs) {
    let p = path.parse(process.env.PWD)
    if (configs.outputDir) {
        let outputPath = path.resolve(p.dir, p.base, configs.outputDir)
        defaultDevConfig.output.path = outputPath
        defaultDevConfig.devServer.contentBase = outputPath
    }

    if (configs.publicPath) {
        defaultDevConfig.output.publicPath = configs.publicPath
        defaultDevConfig.devServer.publicPath = configs.publicPath
        defaultDevConfig.devServer.contentBasePublicPath = configs.publicPath
    }
    makeEntryFile(configs)
}

function makeEntryFile(configs) {
    let demoDir = configs.demoDir || 'components'
    let p = path.parse(process.env.PWD)
    let resolveDemoDir = path.resolve(p.dir, p.base, demoDir).replace(/\\/g, '/')
    let PLACE_HOLDER_1 = ''
    let PLACE_HOLDER_2 = ''
    if (configs.routes) {
        let importComponentPlaceholderList = []
        let configsStr = 'let configs = [\n'
        configs.routes.map(route => {
            const { demo, code, title, desc, path } = route
            importComponentPlaceholderList.push(`import ${demo} from '${resolveDemoDir}/${demo}'`)
            configsStr += `  { demo: ${demo}, code: '${code}', title: '${title}', desc: '${desc}', path: '${path}' },\n`
        })
        configsStr += ']\ndocItConfigs.configs = configs\n'
        PLACE_HOLDER_1 = importComponentPlaceholderList.join('\n')
        PLACE_HOLDER_2 = configsStr
    }
    if(configs.customHeader) {
        let headerPath = path.resolve(p.dir, p.base, configs.customHeader).replace(/\\/g, '/')
        PLACE_HOLDER_1 += `\nimport CustomHeader from '${headerPath}'`
        PLACE_HOLDER_2 += '\ndocItConfigs.Header = CustomHeader'
    }
    if(configs.customFooter) {
        let footerPath = path.resolve(p.dir, p.base, configs.customFooter).replace(/\\/g, '/')
        PLACE_HOLDER_1 += `\nimport CustomFooter from '${footerPath}'`
        PLACE_HOLDER_2 += '\ndocItConfigs.Footer = CustomFooter'
    }
    let templateFilePath = path.resolve(__dirname, '..', '..', 'example/index.tpl')
    let indexFilePath = path.resolve(__dirname, '..', '..', 'example/index.tsx')
    let template = fs.readFileSync(templateFilePath, 'utf-8')
    let index = template.replace('PLACE_HOLDER_1', PLACE_HOLDER_1).replace('PLACE_HOLDER_2', PLACE_HOLDER_2)
    fs.writeFileSync(indexFilePath, index)
}

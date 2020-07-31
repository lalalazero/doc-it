#! /usr/bin/env node

const fs = require('fs')
const webpack = require('webpack')
const program = require('commander')

program.command('dev')
    .description('启动 webpack-dev-server 生成文档')
    .option('-c, --config','specify config file location, default to .docitrc.js', '.docitrc.js')
    .option('-d, --dist', 'specify output directory, default to docit', 'docit')
    .action(function(cmd, env) {
        console.log('cmd')
        console.log(cmd)
        console.log('env')
        console.log(env)
        console.log('dev dev dev')
    })

program.command('build')
    .description('启动 webpack 打包生成文档')
    .option('-c, --config','specify config file location, default to .docitrc.js', '.docitrc.js')
    .option('-d, --dist', 'specify output directory, default to docit', 'docit')
    .action(function(cmd, env) {
        console.log('build build build')
    })
    
program.parse(process.argv)

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

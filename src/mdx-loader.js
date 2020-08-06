const md = require('markdown-it')()
const fs = require('fs')
function jsxFence(tokens, idx, options, env, self) {
    let token = tokens[idx]
    if (token.info === 'jsx') {
        return `<codeToken> ${token.content} </codeToken>`
    } else if(token.info === 'css') {
        return `<cssToken> ${token.content} </cssToken>`
    }
};

md.renderer.rules['fence'] = jsxFence


function render(resource) {
    let content = md.render(resource)

    fs.writeFileSync('render.txt', content)

    let componentsArr = []

    let apiContent = ''

    let H2_START = '<h2>'
    let LEN_START = H2_START.length
    let H2_END = '</h2>'
    

    // 处理 frontmatter
    let startPos = content.indexOf(H2_START) + LEN_START
    let endPos = content.indexOf(H2_END)

    let frontMatter = content.substring(startPos, endPos)
    let arr = frontMatter.split('\n')
    
    arr = arr.map(i => ({ demo: i.split(':')[0].trim(), demoPath: i.split(':')[1].trim() }))

    let count = 0
    endPos = endPos + H2_END.length

    while(endPos > 0) {
        content = content.substr(endPos)
        startPos = content.indexOf(H2_START) + LEN_START
        endPos = content.indexOf(H2_END)

        let componentConfig = {}

        // title
        let title = content.substring(startPos, endPos)
        if(title === 'API') {
            apiContent = content.substring(endPos + '</h2>'.length)
            break
        }
        componentConfig.title = title
        

        // desc
        startPos = content.indexOf('<p>')
        endPos = content.indexOf('<p>&lt;')
        let desc = content.substring(startPos, endPos)
        componentConfig.desc = '`' + desc + '`'
        

        // demo
        startPos = content.indexOf('<p>&lt;') + '<p>&lt;'.length
        endPos = content.indexOf('/&gt;</p>')
        let demo = content.substring(startPos, endPos).trim()
        if(demo.indexOf('span') > 0){
            let span = demo.match(/span={(\d+)}/)[1]
            componentConfig.span = span
            demo = demo.replace(/span={(\d+)}/,'').trim()
            
        }
        componentConfig.demo = demo 
        componentConfig.demoPath = arr.find(i => i.demo === demo).demoPath
        componentConfig.demoAlias = demo + 'Custom' + `${new Date().getTime()}`

        // code 
        startPos = content.indexOf('<codeToken>') + '<codeToken>'.length 
        endPos = content.indexOf('</codeToken>')
        let code = content.substring(startPos, endPos)
        componentConfig.code = '`' + code + '`'
        endPos = endPos + '</codeToken>'.length

        componentsArr.push(componentConfig)
        
        count += 1

    }


    return {
        mdxComponents: componentsArr,
        apiContent
    }
    
}

module.exports = render
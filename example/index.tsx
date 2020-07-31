import React from 'react'
import docIt from '../src/index'

import IconDemo from 'C:/Users/wb-zll546111/Desktop/fe/doc-it-example/src/demos/IconDemo'
import ButtonDemo from 'C:/Users/wb-zll546111/Desktop/fe/doc-it-example/src/demos/ButtonDemo'

const CustomHeader = <h2>doc-it-example</h2>
const CustomFooter = <a href="https://github.com/lalalazero/doc-it">lalalazero/doc-it</a>

let docItConfigs = {
    configs: [],
    Header: CustomHeader,
    Footer: CustomFooter
}

let configs = [
  { demo: IconDemo, code: 'iconCode', title: 'icon', desc: 'icon的描述', path: '/icon' },
  { demo: ButtonDemo, code: 'buttonCode', title: 'button', desc: 'button的描述', path: '/button' },
]
docItConfigs.configs = configs


docIt(docItConfigs)
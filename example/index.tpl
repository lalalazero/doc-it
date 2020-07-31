import React from 'react'
import docIt from '../src/index'

PLACE_HOLDER_1

const CustomHeader = <h2>doc-it-example</h2>
const CustomFooter = <a href="https://github.com/lalalazero/doc-it">lalalazero/doc-it</a>

let docItConfigs = {
    configs: [],
    Header: CustomHeader,
    Footer: CustomFooter
}

PLACE_HOLDER_2

docIt(docItConfigs)
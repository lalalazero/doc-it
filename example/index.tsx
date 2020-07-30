import React from 'react'
import { Button, Icon } from 'zero-ui-react'
import 'zero-ui-react/dist/components/index.css'
import docIt from '../src/index'

let ButtonDemo = <Button type="primary" onClick={() => alert('click')}>primary button</Button>
let config1 = {
    demo: ButtonDemo,
    code: 'buttonCode',
    title: 'button',
    desc: 'button的描述',
    path: '/button'
}

let IconDemo = <div>
    <p><Icon name="left"></Icon><Icon name="right"></Icon></p>
</div>
let config2 = {
    demo: IconDemo,
    code: 'iconCode',
    title: 'icon',
    desc: 'icon的描述',
    path: '/icon'
}

const CustomHeader = <h2>doc-it-example</h2>
const CustomFooter = <a href="https://github.com/lalalazero/doc-it">lalalazero/doc-it</a>

let docItConfigs = {
    configs: [config1, config2],
    Header: CustomHeader,
    Footer: CustomFooter
}

docIt(docItConfigs)
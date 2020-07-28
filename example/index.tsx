import React from 'react'
import { Button, Icon } from 'zero-ui-react'
import 'zero-ui-react/dist/components/index.css'


import { render } from '../src/index'

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

render([config1, config2])
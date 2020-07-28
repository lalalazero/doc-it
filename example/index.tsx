import React from 'react'
import ReactDOM from 'react-dom'


import { DocHeader, DocSider, DocContent } from '../src/index'

const App = () => (<div>
    <DocHeader />
    <DocSider />
    <DocContent />
</div>)

ReactDOM.render(<App />, document.querySelector('#root'))
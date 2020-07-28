import React, { FC, createElement } from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'zero-ui-react'
import DemoCard from './DemoCard'

const HeaderLayout: FC = ({ children }) => <div>
    {children}
</div>
const SiderLayout: FC = ({ children }) => <div>
    {children}
</div>
const ContentLayout: FC = ({ children }) => <div>
    {children}
</div>

const ButtonDemo = <Button icon="download">button demo</Button>

let renderNode = createElement(DemoCard, {
    code: 'xxxx',
    title: '这是一个实验',
    desc: '这里是 desc'
}, ButtonDemo)
const App = () => (<div>

    <HeaderLayout>header</HeaderLayout>
    <SiderLayout>sider</SiderLayout>
    <ContentLayout>
        <Button type="primary">button</Button>
        {renderNode}
    </ContentLayout>
</div>)



const render = () => {
    ReactDOM.render(<App />, document.querySelector('#root'))
}

export {
    render
}

export {
    HeaderLayout,
    SiderLayout,
    ContentLayout
}

export { default as DemoCard } from './DemoCard'

import React, { FC, createElement } from 'react'
import ReactDOM from 'react-dom'
import { Button, Icon } from 'zero-ui-react'
import DemoCard from './DemoCard'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

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
let path1 = '/button'
let renderNode1 = createElement(DemoCard, {
    code: 'code of button',
    title: 'button',
    desc: 'button的描述'
}, ButtonDemo)

const IconDemo = <div><Icon name="left"></Icon><Icon name="right"></Icon></div>
let path2 = '/icon'
let renderNode2 = createElement(DemoCard, {
    code: 'code of icon',
    title: 'icon',
    desc: 'icon 的描述'
}, IconDemo)

const App = () => (<div>
    <HeaderLayout>header</HeaderLayout>
    <Router>
        <SiderLayout>
            sider
            <ul>
                <li>
                    <Link to={path1}>button</Link>
                </li>
                <li>
                    <Link to={path2}>icon</Link>
                </li>
            </ul>
        </SiderLayout>
        <Switch>
            <Route path={path1}>
                <ContentLayout>
                    content
                    {renderNode1}
                </ContentLayout>
            </Route>
            <Route path={path2}>
                <ContentLayout>
                    content
                    {renderNode2}
                </ContentLayout>
            </Route>
        </Switch>
    </Router>
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

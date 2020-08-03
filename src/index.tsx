import React, { FC, createElement } from 'react'
import ReactDOM from 'react-dom'
import DemoCard from './DemoCard'
import { Layout, Header, Sider, Content, Footer } from 'zero-ui-react'
import 'zero-ui-react/dist/components/index.css'

import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom'
import './index.scss'

export type Config = {
    code: string,
    title: string,
    demo: JSX.Element,
    path: string,
    desc: string,
}

export type DocItConfigs = {
    configs: Config[],
    Header?: JSX.Element,
    Footer?: JSX.Element
}

const App: FC<DocItConfigs> = (props) => {
    const { configs, Header: userHeader, Footer: userFooter } = props
    const links = []
    const routes = []
    configs && configs.map(config => {
        links.push(
            <Link to={config.path}>{config.title}</Link>
        )
        routes.push(
            <Route path={config.path} exact key={Math.random()}>
                <Content>
                    {
                        createElement(DemoCard, {
                            code: config.code,
                            title: config.title,
                            desc: config.desc
                        },
                            config.demo)
                    }
                </Content>
            </Route>
        )
    })
    return <Router>
        <Layout className='example-layout'>
            <Header className='example-header'>
                {/* <span className='logo'></span> */}
                {userHeader}
            </Header>
            <Layout className='example-main'>
                <Sider className='example-sider'>
                    <ul>
                        {
                            links.map(link => <li key={Math.random()}>{link}</li>)
                        }
                    </ul>
                </Sider>
                <Content className='example-content-wrapper'>
                    <Switch>
                        {
                            routes.map(route => route)
                        }
                    </Switch>
                </Content>
            </Layout>
            <Footer className='example-footer'>
                {userFooter}
            </Footer>
        </Layout>
    </Router>

}

const docIt = (props: DocItConfigs) => {
    ReactDOM.render(<App {...props} />, document.querySelector('#root'))
}

export default docIt


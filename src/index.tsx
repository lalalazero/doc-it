import React, { FC, createElement } from 'react'
import ReactDOM from 'react-dom'
import DemoCard from './DemoCard'
import { Layout, Header, Sider, Content, Footer, Row } from 'zero-ui-react'
import 'zero-ui-react/dist/components/index.css'

import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom'
import './index.scss'

export type RouteConfig = {
    path: string,
    menu: string,
    apiContent?: string,
    components: ComponentConfig[]
}

export type ComponentConfig = {
    code: string,
    title: string,
    demo: JSX.Element,
    desc: string,
    span?: number
}

export type DocItConfigs = {
    routes: RouteConfig[],
    Header?: JSX.Element,
    Footer?: JSX.Element
}

const App: FC<DocItConfigs> = (props) => {
    const { routes, Header: userHeader, Footer: userFooter } = props
    const links = []
    const menus = []
    routes && routes.map((routeItem, index) => {
        const { path, menu, components, apiContent } = routeItem
        links.push(
            <Link to={path}>{menu}</Link>
        )
        menus.push(
            <Route path={path} exact key={index}>
                <Content className='example-content'>
                    <Row>
                        {
                            components.map((component, idx) => (
                                createElement(DemoCard, {
                                    code: component.code,
                                    title: component.title,
                                    desc: component.desc,
                                    key: idx,
                                    span: component.span,
                                },
                                    component.demo)
                            ))

                        }
                    </Row>
                    {
                        apiContent && <div>

                            <div className='api-container'>
                                <h2>API</h2>
                                <div dangerouslySetInnerHTML={{ __html: apiContent }}></div>
                            </div>
                        </div>
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
                            links.map((link, idx) => <li key={idx}>{link}</li>)
                        }
                    </ul>
                </Sider>
                <Content className='example-content-wrapper'>
                    <Switch>
                        {
                            menus.map(menu => menu)
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


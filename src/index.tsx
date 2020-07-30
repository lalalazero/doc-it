import React, { FC, createElement } from 'react'
import ReactDOM from 'react-dom'
import DemoCard from './DemoCard'
import { Layout, Header, Sider, Content, Footer } from 'zero-ui-react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom'
import './index.scss'



const App: FC<{ configs: Config[] }> = (props) => {
    const { configs } = props
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
                <span className='logo'></span>
                header
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
                footer
            </Footer>
        </Layout>
    </Router>

}




type Config = {
    code: string,
    title: string,
    demo: JSX.Element,
    path: string,
    desc: string,
}

const render = (configs: Config[]) => {
    ReactDOM.render(<App configs={configs} />, document.querySelector('#root'))
}

export {
    render
}


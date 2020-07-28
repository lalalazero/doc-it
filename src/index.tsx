import React, { FC, createElement } from 'react'
import ReactDOM from 'react-dom'
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



const App: FC<{ configs: Config[] }> = (props) => {
    const { configs } = props
    const links = []
    const routes = []
    configs && configs.map(config => {
        links.push(
            <Link to={config.path}>{config.title}</Link>
        )
        routes.push(
            <Route path={config.path} key={Math.random()}>
                <ContentLayout>
                    {
                        createElement(DemoCard, {
                            code: config.code,
                            title: config.title,
                            desc: config.desc
                        },
                            config.demo)
                    }
                </ContentLayout>
            </Route>
        )
    })
    return (
        <Router>
            <div>
                <HeaderLayout>header</HeaderLayout>

                <SiderLayout>
                    <p>sider</p>
                    <ul>
                        {
                            links.map(link => <li key={Math.random()}>{link}</li>)
                        }
                    </ul>
                </SiderLayout>
                <Switch>
                    {
                        routes.map(route => route)
                    }
                </Switch>
            </div>
        </Router>

    )
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

export {
    HeaderLayout,
    SiderLayout,
    ContentLayout
}

export { default as DemoCard } from './DemoCard'

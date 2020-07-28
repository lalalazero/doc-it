import React, { useState, ReactNode } from 'react'
import HighLightCode from './HighLightCode'
import { Icon, Tooltip } from 'zero-ui-react'
import './DemoCard.scss'
import { Language } from 'prism-react-renderer'

export interface DemoCardProps {
    code: string,
    title: string,
    desc: string,
    demo?: string,
    css?: string,
}


const DemoCard: React.FunctionComponent<DemoCardProps> = props => {
    const { code, title, desc, css, children } = props
    const [codeVisible, setVisible] = useState(false)
    const toggleCode = () => {
        setVisible(!codeVisible)
        setCodeIcon(codeVisible ? <Icon name='code-open'></Icon> : <Icon name='code-close'></Icon>)
    }
    const [codeIcon, setCodeIcon] = useState<ReactNode>(<Icon name='code-open'></Icon>)
    const renderCode = (code: string, lang = 'jsx') => <HighLightCode code={code} lang={lang as Language}></HighLightCode>
    return (
        <div className="demo-card">
            <div className='demo-live'>
                {
                    children
                }
            </div>
            <p className='demo-subject'><span>{title}<Icon name="edit"></Icon></span></p>
            <p className='demo-desc' dangerouslySetInnerHTML={{ __html: desc }}></p>
            <div className={codeVisible ? 'demo-action code-visible' : 'demo-action'}
                onClick={toggleCode}>
                <Tooltip title="复制代码" style={{ fontSize: '12px' }}>
                    <span><Icon name="copy"></Icon></span>
                </Tooltip>
                <Tooltip title={!codeVisible ? '查看代码' : '收起代码'} style={{ fontSize: '12px' }}><span>{codeIcon}</span></Tooltip>
            </div>
            <div className='demo-code'>
                {
                    codeVisible ? renderCode(code) : ''
                }
                {
                    codeVisible && css && renderCode(css, 'css')
                }
            </div>
        </div>
    )
}

export default DemoCard
import React from 'react'
import { Button } from 'antd'

interface Greeting {
    name: string,
    firstName?: string,
    lastName?: string
}

const Hello: React.FC<Greeting> = (props) => {
    return <div>
        <Button>Hello {props.name}</Button>
        {props.children}
    </div>
}

Hello.defaultProps = {
    firstName: '',
    lastName: ''
}

export default Hello;
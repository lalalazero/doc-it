import React, { Component, useState, useEffect } from 'react'
import { Button } from 'antd'

interface Greeting {
    name: string,
    firstName?: string,
    lastName?: string
}

const HelloHooks: React.FC<Greeting> = props => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState<string | null>(null)
    useEffect(() => {
        if (count > 5) {
            setText('休息一下')
        }
    }, [count])
    return (

        <div>Hello hooks
            <p>count : ${count} {text}</p>
            <Button onClick={() => setCount(count + 1)}>+1</Button>
        </div>
    )
}

HelloHooks.defaultProps = {
    firstName: '',
    lastName: ''
}

export default HelloHooks




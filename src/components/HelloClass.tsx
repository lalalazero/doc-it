import React, { Component } from 'react'
import { Button } from 'antd'

interface Greeting {
    name: string,
    firstName?: string,
    lastName?: string
}

interface State {
    count: number
}
export default class extends Component<Greeting, State> {
    constructor(props: Greeting) {
        super(props)
    }
    state: State = {
        count: 0
    }
    static defaultProps = {
        firstName: '',
        lastName: ''
    }
    onClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return <div>
            <p>HelloClass</p>
            <Button onClick={this.onClick}>hello {this.props.name} + 1</Button>
            <p>count : {this.state.count}</p>
        </div>
    }
}
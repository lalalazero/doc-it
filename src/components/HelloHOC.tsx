import React, { Component } from 'react'
import HelloClass from './HelloClass'

interface Loading {
    loading: boolean
}

function HelloHOC<P>(WrappedComponent: React.Component<P>) {
    return class extends Component<P & Loading> {
        render() {
            const { loading, ...props } = this.props
            return loading ? <div>loading...</div> : <WrappedComponent {...props as P}/>
        }
    }
}

export default HelloHOC(HelloClass)
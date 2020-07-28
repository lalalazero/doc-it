import React from 'react'
import Hello from './Hello'
import HelloClass from './HelloClass'
import HelloHOC from './HelloHOC'
import HelloHooks from './HelloHooks'

export default function () {
    return (
        <div style={{ padding: 10 }}>
            <p style={{ color: 'red' }}>Hello</p>
            <Hello name="anne"></Hello>
            <p style={{ color: 'red' }}>HelloClass</p>
            <HelloClass name="anne-class"></HelloClass>
            <p style={{ color: 'red' }}>HelloHOC</p>
            <HelloHOC loading={false}></HelloHOC>
            <p style={{ color: 'red' }}>HelloHooks</p>
            <HelloHooks name='hook'></HelloHooks>
        </div>
    )
}
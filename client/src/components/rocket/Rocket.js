import React, { Component } from 'react'
import rocketModel from './assets/rocket.png'
export default class Rocket extends Component {
    render() {
        return (
            <div>
                <img src={rocketModel}/>
            </div>
        )
    }
}

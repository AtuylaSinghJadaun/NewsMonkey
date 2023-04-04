import { Component } from 'react';
import './BigImage.css'

export default class BigImage extends Component{
    render() {
        return (
            <img className="bigImage" src={this.props.src} ></img>
        )
    }
}
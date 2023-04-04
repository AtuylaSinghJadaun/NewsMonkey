import './Loading.css';
import { Component } from 'react';
import LoadingImage from './Images/Loading.gif'


export default class Loading extends Component{
    render() {
        return (
            <img className="loadingGifImg" src={LoadingImage} alt="loading..."></img>
        )
    }
}
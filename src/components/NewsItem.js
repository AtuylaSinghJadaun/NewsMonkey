import React, { Component } from 'react';
import './newsItem.css'

export default class NewsItem extends Component{
    maximizePicture = (event) => {
        this.props.setbigImage(true, event.target.src);
        document.querySelector('.background').classList.add('blackBackground');
    }
    minimizePicture = () => {
        this.props.setbigImage(false, null);
        document.querySelector('.background').classList.remove('blackBackground');

    }
    render(){
        const { title, discription, imageUrl, newsUrl,date, source} = this.props;
        return (
            <>
                <div onClick={this.minimizePicture} className="background">
                    
                </div>
                <div className="card bg-dark" style={ { height: '500px', color: 'white'}}>
                    <img onClick={this.maximizePicture} src={`${imageUrl===null?'http://store-images.microsoft.com/image/apps.52293.9007199266275245.a9ef703c-b140-4bd9-a8cd-514f2cfa983c.69f0cdb9-5097-4f80-8d1b-2657db90b723':imageUrl}`} className="card-img-top newsImage newsImageBig" alt="loading..."  />
                    <div className="card-body">
                        <span style={ { color: 'grey' } }>{ new Date(date).toGMTString().substring(0, 22)}
                            <h6><span className="badge bg-secondary">{ source === null ? 'Unknown Source' : source }</span></h6></span>
                        <h5 className="card-title">{`${title===null?'Title not Available..':title.slice(0, 69)}`}...</h5>
                        <p className="card-text">{`${discription===null?'Discription not Available..':discription.slice(0, 157)}`}...</p>          
                        <a href={ newsUrl } target="_blank" rel="noreferrer" className="btn btn-primary" style={ { position: 'absolute', bottom: '10px', background: 'black', border: 'none'}}>Read More</a>
                    </div>
                </div>
            </>
        )
    }
}
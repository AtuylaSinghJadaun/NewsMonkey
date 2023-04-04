import React, { Component } from 'react';
import NewsItem from './NewsItem.js'
import './News.css'
import Loading from './Loading'
import BigImage from './BigImage.js'

export default class News extends Component{

    

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4dc699d25fce466c91e089dcce6e87fc&page=1&pageSize=${this.props.pageSize}${this.props.search!==''?'&q='+this.props.search:''}`
        this.props.changeStateData(this.props.category, this.props.search, this.props.articles, this.props.page, true, this.props.totalResults)
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(url);
        this.props.changeStateData(this.props.category, this.props.search, parsedData.articles, 1, false, parsedData.totalResults)
        if (Math.ceil(parsedData.totalResults / this.props.pageSize) <= 1) { 
            document.querySelector('.nextButton').style.background = 'grey';
        } else {
            document.querySelector('.nextButton').style.background = '#212529';
        }
    }

    handlePrevClick = async (event) => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4dc699d25fce466c91e089dcce6e87fc&page=${this.props.page - 1}&pageSize=${this.props.pageSize}${this.props.search !== '' ? '&q=' + this.props.search : ''}`
        this.props.changeStateData(this.props.category, this.props.search, this.props.articles, this.props.page, true, this.props.totalResults)
        event.target.nextElementSibling.style.background = '#212529';
        let data = await fetch(url);
        let parsedData = await data.json();
        this.props.changeStateData(this.props.category, this.props.search, parsedData.articles, this.props.page-1, false, parsedData.totalResults)
    }

    handleNextPage = async (event) => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4dc699d25fce466c91e089dcce6e87fc&page=${this.props.page}&pageSize=${this.props.pageSize}${this.props.search!==''?'&q='+this.props.search:''}`
        let data = await fetch(url);
        let initialParsedData = await data.json();
        if (Math.ceil(initialParsedData.totalResults / this.props.pageSize) === this.props.page) {
            
        }
        else {
            if (Math.ceil(initialParsedData.totalResults / this.props.pageSize) - 1 === this.props.page) { 
                event.target.style.background = 'grey';
            } else {
                event.target.style.background = '#212529';
            }
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4dc699d25fce466c91e089dcce6e87fc&page=${this.props.page + 1}&pageSize=${this.props.pageSize}${this.props.search!==''?'&q='+this.props.search:''}`
            this.props.changeStateData(this.props.category, this.props.search, this.props.articles, this.props.page, true, this.props.totalResults)
            let data = await fetch(url);
            let parsedData = await data.json();
            this.props.changeStateData(this.props.category, this.props.search, parsedData.articles, this.props.page + 1, false, parsedData.totalResults);
            
        }
    }

    render() {
        return (
            <div className="container">
                { this.props.bigImage.show && <BigImage src={this.props.bigImage.src} /> }
                {!this.props.loading && <div className="totalResults" style={{color: 'grey', marginTop: 'this.props.pageSizepx'}}>Total Results: {this.props.totalResults}</div>}
                { this.props.loading && <Loading /> }
                <div className="row">
                    {!this.props.loading &&
                        this.props.articles.map(elm => {
                            return <div key={ elm.url } className="col-md-4 my-3">
                                <NewsItem setbigImage={this.props.setbigImage} bigImage={this.props.bigImage} title={ elm.title } discription={ elm.description } imageUrl={ elm.urlToImage } newsUrl={ elm.url } date={ elm.publishedAt } source={elm.source.name}  />
                            </div>
                        })
                    }
                    <button onClick={this.handlePrevClick} disabled={ this.props.page <= 1 } style={{background: `${this.props.page<=1?'grey':'#212529'}`}} className="previousButton material-symbols-outlined">arrow_back_ios</button>
                    <button onClick={this.handleNextPage} className="nextButton material-symbols-outlined">arrow_forward_ios</button>
                </div>
            </div>
        )
    }
}
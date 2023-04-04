import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export class App extends Component {
  pageSize = 12
  country = "in"
  constructor() {
    super();
    this.state = {
      category: '',
      search: '',
      articles: [],
      page: 1,
      loading: false,
      totalResults: 0,
      bigImage: {show: false, src: null}
    }
  }
  componentDidMount() {
    document.body.style.background = 'black'
  }

  changeStateData = (category, search, articles, page, loading, totalResults) => {
    this.setState({
      category:category,
      search:search,
      articles:articles,
      page:page,
      loading:loading,
      totalResults: totalResults,
    });
  }

  changeCategory = (category) => {
    this.setState({category: category})
  }

  changeSearch = async (searchValue) => {
    this.setState({ search: searchValue });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.state.category}&apiKey=4dc699d25fce466c91e089dcce6e87fc&page=1&pageSize=${this.pageSize}${searchValue !== '' ? '&q=' + searchValue : ''}`
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      if (Math.ceil(parsedData.totalResults / this.pageSize) === this.state.page) { 
        document.querySelector('.nextButton').style.background = 'grey';
      } else {
        document.querySelector('.nextButton').style.background = '#212529';
      }
      this.setState({ articles: parsedData.articles, page: 1, loading: false, totalResults: parsedData.totalResults });
  }
  
  changeSearchForInput = async (searchValue) => {
    if(searchValue===''){
      this.setState({ search: searchValue });
      let url = `https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.state.category}&apiKey=4dc699d25fce466c91e089dcce6e87fc&page=1&pageSize=${this.pageSize}${searchValue !== '' ? '&q=' + searchValue : ''}`
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      if (Math.ceil(parsedData.totalResults / this.pageSize) === this.state.page) { 
        document.querySelector('.nextButton').style.background = 'grey';
      } else {
        document.querySelector('.nextButton').style.background = '#212529';
      }
      this.setState({ articles: parsedData.articles, page: 1, loading: false, totalResults: parsedData.totalResults });
    }
  }

  setbigImage = (show, src) => {
    this.setState({ bigImage: {show: show, src: src} });
  }
  render() {
    return (
      <Router>
        <Navbar category={this.state.category} changeSearch={ this.changeSearch } changeSearchForInput={this.changeSearchForInput} />
        <Routes>
          <Route path="/" element={
            <News key="general" 
            pageSize={this.pageSize } 
            country={ this.country } category={ 'general' } 
            search={ this.state.search } 
            articles={ this.state.articles } 
            page={ this.state.page } 
            loading={ this.state.loading } 
            totalResults = { this.state.totalResults } 
            changeStateData = {this.changeStateData}
            bigImage = {this.state.bigImage}
            setbigImage = {this.setbigImage}
            />
          } />
          <Route path="/business" element={
            <News key="business" 
            pageSize={this.pageSize} 
            country={this.country} category={ 'business' } 
            search={this.state.search} 
            articles = {this.state.articles} 
            page = {this.state.page} 
            loading = {this.state.loading} 
            totalResults = {this.state.totalResults}
            changeStateData = {this.changeStateData}
            bigImage = {this.state.bigImage}
            setbigImage = {this.setbigImage}
            />
          }/>
          <Route path="/entertainment" element={
            <News key="entertainment" 
            pageSize={this.pageSize} 
            country={this.country} category={ 'entertainment' } 
            search={this.state.search} 
            articles = {this.state.articles} 
            page = {this.state.page} 
            loading = {this.state.loading} 
            totalResults = {this.state.totalResults}
            changeStateData = {this.changeStateData}
            bigImage = {this.state.bigImage}
            setbigImage = {this.setbigImage}
            />
          }/>
          <Route path="/health" element={
            <News key="health" 
            pageSize={this.pageSize} 
            country={this.country} category={ 'health' } 
            search={this.state.search} 
            articles = {this.state.articles} 
            page = {this.state.page} 
            loading = {this.state.loading} 
            totalResults = {this.state.totalResults}
            changeStateData = {this.changeStateData}
            bigImage = {this.state.bigImage}
            setbigImage = {this.setbigImage}
            />
          }/>
          <Route path="/science" element={
            <News key="science" 
            pageSize={this.pageSize} 
            country={this.country} category={ 'science' } 
            search={this.state.search} 
            articles = {this.state.articles} 
            page = {this.state.page} 
            loading = {this.state.loading} 
            totalResults = {this.state.totalResults}
            changeStateData = {this.changeStateData}
            bigImage = {this.state.bigImage}
            setbigImage = {this.setbigImage}
            />
          }/>
          <Route path="/sports" element={
            <News key="sports" 
            pageSize={this.pageSize} 
            country={this.country} category={ 'sports' } 
            search={this.state.search} 
            articles = {this.state.articles} 
            page = {this.state.page} 
            loading = {this.state.loading} 
            totalResults = {this.state.totalResults}
            changeStateData = {this.changeStateData}
            bigImage = {this.state.bigImage}
            setbigImage = {this.setbigImage}
            />
          }/>
          <Route path="/technology" element={
            <News key="technology" 
            pageSize={this.pageSize} 
            country={this.country} category={ 'technology' } 
            search={this.state.search} 
            articles = {this.state.articles} 
            page = {this.state.page} 
            loading = {this.state.loading} 
            totalResults = {this.state.totalResults}
            changeStateData = {this.changeStateData}
            bigImage = {this.state.bigImage}
            setbigImage = {this.setbigImage}
            />
          } />
          <Route path="/about" element={<About changeCategory={this.changeCategory} />} />
        </Routes>
      </Router>
    )
  }
}

export default App

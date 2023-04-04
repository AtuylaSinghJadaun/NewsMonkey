import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
    }
  }
  onInputHandler = (event) => {
    this.setState({ searchValue: event.target.value })
    this.props.changeSearchForInput(event.target.value);
  }

  focusNavigateHandeler = (event) => {
    // this.setState({focusNo: Number(event.target.classList[0])});
    // console.log(this.state.focusNo);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark" style={ { height: '60px'}}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/" style={{height: '60px', width: '180px',display: 'flex', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'flex-start', color: 'white', marginLeft: '5px'}}>
              <img src="http://store-images.microsoft.com/image/apps.52293.9007199266275245.a9ef703c-b140-4bd9-a8cd-514f2cfa983c.69f0cdb9-5097-4f80-8d1b-2657db90b723" style={{display: 'block', height: '90px', width: '90px', transform: 'translateX(-30px)'}} alt="Loading..." />
              <span style={{transform: 'translateX(-40px)'}}>NewsMonkey</span>
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li onClick={this.focusNavigateHandeler} className={`nav-item ${this.props.category==='general'?'focus':''}`}>
                  <Link style={{color: 'white', marginLeft: '5px'}} className="1 nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li onClick={this.focusNavigateHandeler} className={`nav-item ${this.props.category==='business'?'focus':''}`}>
                  <Link style={{color: 'white', marginLeft: '5px'}} className="2 nav-link active" aria-current="page" to="/business">Business</Link>
                </li>
                <li onClick={this.focusNavigateHandeler} className={`nav-item ${this.props.category==='entertainment'?'focus':''}`}>
                  <Link style={{color: 'white', marginLeft: '5px'}} className="3 nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
                </li>
                <li onClick={this.focusNavigateHandeler} className={`nav-item ${this.props.category==='health'?'focus':''}`}>
                  <Link style={{color: 'white', marginLeft: '5px'}} className="4 nav-link active" aria-current="page" to="/health">Health</Link>
                </li>
                <li onClick={this.focusNavigateHandeler} className={`nav-item ${this.props.category==='science'?'focus':''}`}>
                  <Link style={{color: 'white', marginLeft: '5px'}} className="5 nav-link active" aria-current="page" to="/science">Science</Link>
                </li>
                <li onClick={this.focusNavigateHandeler} className={`nav-item ${this.props.category==='sports'?'focus':''}`}>
                  <Link style={{color: 'white', marginLeft: '5px'}} className="6 nav-link active" aria-current="page" to="/sports">Sports</Link>
                </li>
                <li onClick={this.focusNavigateHandeler} className={`nav-item ${this.props.category==='technology'?'focus':''}`}>
                  <Link style={{color: 'white', marginLeft: '5px'}} className="7 nav-link active" aria-current="page" to="/technology">Technology</Link>
                </li>
                <li onClick={this.focusNavigateHandeler} className={`nav-item ${this.props.category==='about'?'focus':''}`}>
                  <Link style={{color: 'white', marginLeft: '5px'}} className="8 nav-link active" aria-current="page" to="/about">About</Link>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input onInput={this.onInputHandler} value={this.state.searchValue} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button onClick={ () => { this.props.changeSearch(this.state.searchValue) } } className="btn btn-outline-secondary" type="button">Search</button>
            </form>
            </div>
        </div>
        </nav>
      </div>
    )
  }
}

export default Navbar

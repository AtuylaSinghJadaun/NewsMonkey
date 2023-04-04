import { Component } from "react";
import './About.css'

export default class About extends Component{
    componentDidMount() {
        this.props.changeCategory('about');
    }
    render() {
        return (
            <div className="container">
                <h1 className="aboutPageHeading" >About Us</h1>
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div style={{background: '#212529', color: 'white', border: 'none'}} class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button style={{background: '#212529', color: 'white', border: 'none'}} class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Creator
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body">
                                Hello, I am <strong>Atulya Singh Jadaun</strong>, and I am the creator of this webaite, I was born in 2008, I have a expierence of 8 years in Coding, with languages such as <strong>HTML, CSS, Js, NextJs, ReactJs, ExpressJs, and Socket.io</strong>
                        </div>
                        </div>
                    </div>
                    <div style={{background: '#212529', color: 'white', border: 'none'}} class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                        <button style={{background: '#212529', color: 'white', border: 'none'}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Use of the Website
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div class="accordion-body">
                            This is a News App,  this website uses the JSON data provided by the <strong>News Api</strong>, and shows it into a arranged format. It provides <strong>Business News, Entertainment News, Health News, Science News, Sports News, Technology News etc...</strong>, It gives ou functionalty to <strong>specificaly choose the type of news</strong> you want and can also <strong>search for a particular term</strong>, It gives you the latest news, and also tells the publishing date of the report and also its source
                        </div>
                        </div>
                    </div>
                    <div style={{background: '#212529', color: 'white', border: 'none'}} class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                        <button style={{background: '#212529', color: 'white', border: 'none'}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Backcend
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div class="accordion-body">
                            The languges used in this webstie are <strong>HTML, CSS, Js, JSX, JSON, and ReactJs</strong>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
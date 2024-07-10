import React from 'react';
import './ProjectStyle.css';
import N1 from "../../Assets/n-main.JPG";
import N2 from "../../Assets/n-top.JPG";
import N3 from "../../Assets/n-load.JPG";
import Github from "../../Assets/githubonly.png";

export default function NewsAPIProject() {

    function errorMessage() {
        window.alert("Due to restriction from NewsAPI.org, it only allows localhost to fetch data")
    }

    return(
        <div className="project">
            <a href="https://github.com/ChanminLee05/api_news_page.git" target="_blank" rel="noopener noreferrer"><img src={Github} alt="git" className="git-img"/></a>
            <h1 className="project-title">NewsAPI Project</h1>
            <div className="intro1">
                <p className="intro1-txt">
                    This is my first project utilizing React and API technologies.
                    User can discover the latest news effortlessly with this web site, leveraging the comprehensive features of NewsAPI.
                    Select from diverse categories like technology, business, Apple, Tesla, and insights from the Wall Street Journal, and dive into news articles with just a click.
                </p>
            </div>
    <div className="project-intro row">
        <div className="intro2 col-3">
            <h4 className="intro-title">Features</h4>
            <ul>
                <li className="intro2-list">Category Selection</li>
                <li className="intro2-list">Stay up-to-date with the latest headlines using API</li>
            </ul>
        </div>
        <div className="intro3 col-3">
            <h4 className="intro-title">Technologies Used</h4>
            <p className="intro3-txt">React.js, Bootstrap, JSX, CSS</p>
        </div>
        <div className="intro4 col-5">
            <h4 className="intro-title">Challenges and Solutions</h4>
            <p className="intro4-txt">Initially, integrating the News API smoothly posed a challenge, requiring optimizations for efficient data retrieval and rendering.
                This was addressed through meticulous code refinement and the implementation of streamlined data fetching processes.</p>
        </div>
    </div>
    <div className="progress-container">
        <h1 className="progress-title">Project Development Timeline</h1>
        <div className="progress-item">
            <h3 className="item1">Week 1: Setup and API Integration</h3>
            <p className="item-txt">Set up the project environment, including React components and dependencies.
                Integrated News API endpoints to fetch news articles based on selected categories.
                Designed and implemented the basic UI for displaying news headlines.</p>
        </div>
        <div className="progress-item">
            <h3 className="item2">Week 2: Refinement, Testing, and Deployment</h3>
            <p className="item-txt">Refined the user interface and added features such as pagination or infinite scrolling.
                Conducted testing to ensure proper functionality across different browsers and devices.
                Addressed any bugs or issues identified during testing.
                Prepared the project for deployment. However, due to new restrictions from NewsAPI that prevent data fetching from browsers and only allow localhost access,
                the project could not be fully deployed as intended.
            </p>
        </div>
    </div>
    <div className="desc-container">
        <h1 className="desc-title">Description</h1>
        <div id="carouselExampleDark" className="carousel carousel-dark slide w-slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <h5 className="w-title">Select Your Preferred Category on Navigation Bar</h5>
                    <img src={N1} className="d-block w-100 w-img" alt="..."/>
                </div>
                <div className="carousel-item">
                    <h5 className="w-title">Access Latest News with a Single Click</h5>
                    <img src={N2} className="d-block w-100 w-img" alt="..."/>
                </div>
                <div className="carousel-item">
                    <h5 className="w-title">Explore More News: Simply Click to Load</h5>
                    <div className="w3-img-container">
                        <img src={N3} className="d-block w-100 w3-img" alt="..."/>
                    </div>
                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>

    <button className="btn btn-dark d-grid learn-btn">
        <a href="https://main--nexushub-news.netlify.app/" className="link-to-news" onClick={errorMessage}>
            Learn More
        </a>
    </button>

</div>
    );
}
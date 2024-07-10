import React from 'react';
import './ProjectStyle.css';
import Github from "../../Assets/githubonly.png";
import Guide1 from "../../Assets/react-guide.PNG";
import Guide2 from "../../Assets/guide2.PNG";
import Guide3 from "../../Assets/guide3.PNG";
import Guide4 from "../../Assets/guide4.PNG";

export default function ReactGuideProject() {
    return(
        <div className="project">
            <a href="https://github.com/ChanminLee05/React-guide.git" target="_blank" rel="noopener noreferrer"><img src={Github} alt="git" className="git-img"/></a>
            <h1 className="project-title">React Guide Project</h1>
            <div className="intro1">
                <p className="intro1-txt">
                    The React Guide Project is an educational platform designed to provide beginners with a comprehensive introduction to React.js.
                    Developed with a focus on accessibility and intuitive learning, this project employs interactive features such as a brainstorm map to help users grasp React's fundamental concepts effectively.
                    Through clear explanations and practical examples, the React Guide Project aims to empower aspiring developers to build solid foundations in React.js development.
                </p>
            </div>
            <div className="project-intro row">
                <div className="intro2 col-3">
                    <h4 className="intro-title">Features</h4>
                    <ul>
                        <li className="intro2-list">Brainstorm Map</li>
                        <li className="intro2-list">YouTube Learning Videos</li>
                        <li className="intro2-list">User-Friendly Interface</li>
                    </ul>
                </div>
                <div className="intro3 col-3">
                    <h4 className="intro-title">Technologies Used</h4>
                    <p className="intro3-txt">React.js, TypeScript, Bootstrap, JSX, CSS</p>
                </div>
                <div className="intro4 col-5">
                    <h4 className="intro-title">Challenges and Solutions</h4>
                    <p className="intro4-txt">
                        Designing the brainstorm map and ensuring smooth appearance and disappearance of connecting lines were difficult.
                        Writing dynamic JavaScript to position elements added complexity.
                        Adopted an iterative design approach with regular feedback to refine the map.
                        Used advanced JavaScript techniques and libraries to manage dynamic elements effectively.
                    </p>
                </div>
            </div>
            <div className="progress-container">
                <h1 className="progress-title">Project Development Timeline</h1>
                <div className="progress-item">
                    <h3 className="item1">Week 1: Research and Design</h3>
                    <p className="item-txt">
                        Focused on gathering project requirements, exploring UI design concepts, and planning project architecture.
                        Tasks included defining scope, researching brainstorm map implementation, and outlining project structure.
                        Established a detailed design plan for guiding development.
                    </p>
                </div>
                <div className="progress-item">
                    <h3 className="item2">Week 2: Refinement, Testing, and Deployment</h3>
                    <p className="item-txt">Focused on refining the positioning of lines in the brainstorm map and adding CSS effects to enhance the user interface.
                        Successfully deployed the project using Netlify, ensuring accessibility and performance optimizations were in place.
                        Conducted testing to ensure proper functionality across different browsers and devices.
                        Addressed any bugs or issues identified during testing.
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
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <h5 className="w-title">Welcome to the React Beginner's Guide</h5>
                            <img src={Guide1} className="d-block w-100 w-img" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <h5 className="w-title">Learn React Through YouTube Tutorials</h5>
                            <img src={Guide2} className="d-block w-100 w-img" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <h5 className="w-title">Explore React by Keywords: Click Topics for Detailed Knowledge</h5>
                            <div className="w3-img-container">
                                <img src={Guide3} className="d-block w-100 w3-img" alt="..."/>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <h5 className="w-title">Learn React with Explanations and Examples</h5>
                            <div className="w3-img-container">
                                <img src={Guide4} className="d-block w-100 w3-img" alt="..."/>
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
                <a href="https://main--react-guide-platform.netlify.app/" className="link-to-news">
                    Learn More
                </a>
            </button>

        </div>
    );
}
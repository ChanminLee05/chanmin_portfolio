import React from 'react';
import './ProjectStyle.css';
import W1 from '../../Assets/w-main.JPG';
import W2 from '../../Assets/w-roulette.JPG';
import W3 from '../../Assets/w-filter.JPG';
import W4 from '../../Assets/w-filter2.JPG';
import W5 from '../../Assets/w-recipe.JPG';
import W6 from '../../Assets/w-community.JPG';
import W7 from '../../Assets/w-community2.JPG';
import Github from '../../Assets/githubonly.png';
import {Link} from "react-router-dom";

export default function WhatToEatProject() {
    return(
      <div className="project">
          <a href="https://github.com/ChanminLee05/roulette_project.git" target="_blank" rel="noopener noreferrer"><img src={Github} alt="git" className="git-img"/></a>
          <h1 className="project-title">WhatToEat Project</h1>
          <div className="intro1">
              <p className="intro1-txt">
                  The "What to Eat Project" is a user-friendly web site that helps individuals decide what to eat by allowing them to select food categories and spin a roulette for a random meal choice.
                  Additionally, users can explore recipes related to the selected food item and engage with online food communities for culinary inspiration and advice.
              </p>
          </div>
          <div className="project-intro row">
              <div className="intro2 col-4">
                  <h4 className="intro-title">Features</h4>
                  <ul>
                      <li className="intro2-list">Meal suggestions based on various categories</li>
                      <li className="intro2-list">Random meal selection using a roulette feature</li>
                      <li className="intro2-list">Additional information and recipes for selected food items</li>
                  </ul>
              </div>
              <div className="intro3 col-3">
                  <h4 className="intro-title">Technologies Used</h4>
                  <p className="intro3-txt">React.js, Bootstrap, JSX, CSS</p>
              </div>
              <div className="intro4 col-4">
                  <h4 className="intro-title">Challenges and Solutions</h4>
                  <p className="intro4-txt">During development, optimizing the roulette feature for smooth performance was a challenge. This was addressed by implementing efficient algorithms and optimizing code execution.</p>
              </div>
          </div>
          <div className="progress-container">
              <h1 className="progress-title">Project Development Timeline</h1>
              <div className="progress-item">
                  <h3 className="item1">Week 1: Planning and Use Case</h3>
                  <p className="item-txt">Identified user needs and requirements. Defined use cases based on personal preferences.</p>
              </div>
              <div className="progress-item">
                  <h3 className="item2">Week 2: Development</h3>
                  <p className="item-txt">Implemented core functionalities such as meal selection, category filtering, and recipe integration.</p>
              </div>
              <div className="progress-item">
                  <h3 className="item3">Week 3: Design, Testing, and Deployment</h3>
                  <p className="item-txt">Worked on UI/UX design aspects to enhance user experience.
                      Conducted rigorous testing to ensure functionality across different devices and browsers.
                      Successfully deployed the web service on Netlify, ensuring accessibility and reliability for users.
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
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                  </div>
                  <div className="carousel-inner">
                      <div className="carousel-item active">
                          <h5 className="w-title">Select Your Favorite Foods</h5>
                          <img src={W1} className="d-block w-100 w-img" alt="..."/>
                      </div>
                      <div className="carousel-item">
                          <h5 className="w-title">Discover Your Meal with a Spin!</h5>
                          <img src={W2} className="d-block w-100 w-img" alt="..."/>
                      </div>
                      <div className="carousel-item">
                          <h5 className="w-title">Explore Recipes with Filters</h5>
                          <div className="w3-img-container">
                              <img src={W3} className="d-block w-100 w3-img" alt="..."/>
                              <img src={W4} className="d-block w-100 w4-img" alt="..."/>
                          </div>
                      </div>
                      <div className="carousel-item">
                          <h5 className="w-title">Prepare, Cook, and Enjoy Your Meal with the Ingredients and Instructions Provided</h5>
                          <img src={W5} className="d-block w-100 w-img" alt="..."/>
                      </div>
                      <div className="carousel-item">
                          <h5 className="w-title">Discover More Recipes or Engage with Food Communities Using the Provided Links</h5>
                          <div className="w3-img-container">
                              <img src={W6} className="d-block w-100 w3-img" alt="..."/>
                              <img src={W7} className="d-block w-100 w7-img" alt="..."/>
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
              <Link to="https://what-to-eat-roulette.netlify.app/" className="what-to-eat-link">
                  Learn More
              </Link>
          </button>

      </div>
    );
}
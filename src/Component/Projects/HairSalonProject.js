import React from 'react';
import Github from "../../Assets/githubonly.png";
import Main from "../../Assets/hair-salon-main.png";
import Service from "../../Assets/S-service.png";
import Price from "../../Assets/S-price.PNG";
import Booking from "../../Assets/S-booking.PNG";
import Footer from "../../Assets/S-footer.PNG";

const HairSalonProject = () => {
    return (
        <div className="project">
            <a href="https://github.com/ChanminLee05/HairSalonSite.git" target="_blank" rel="noopener noreferrer"><img src={Github} alt="git" className="git-img"/></a>
            <h1 className="project-title">Hair Salon Project</h1>
            <div className="intro1">
                <p className="intro1-txt">
                    This is a Salon Website, built using React, TypeScript, HTML, CSS, and Bootstrap.
                    This is a demo version, and we plan to enhance the design and functionality after consulting with the hairstylist who wants her own website.
                    Users can effortlessly find information about the services offered, their prices, and salon contact details.
                    Additionally, users can view galleries through an Instagram link and submit a booking request form to make an appointment with the hairstylist.
                </p>
            </div>
            <div className="project-intro row">
                <div className="intro2 col-3">
                    <h4 className="intro-title">Features</h4>
                    <ul>
                        <li className="intro2-list">Quick Link in Nav Bar</li>
                        <li className="intro2-list">Send a Booking Request Form to Make an Appointment Easily</li>
                    </ul>
                </div>
                <div className="intro3 col-3">
                    <h4 className="intro-title">Technologies Used</h4>
                    <p className="intro3-txt">React, TypeScript, Bootstrap, JSX, CSS</p>
                </div>
                <div className="intro4 col-5">
                    <h4 className="intro-title">Challenges and Solutions</h4>
                    <p className="intro4-txt">Creating a responsive website for both desktop and mobile versions was a significant challenge,
                        especially since it was my first time developing for mobile.
                        Ensuring a seamless user experience across different devices required careful planning and testing.
                    </p>
                    <p className="intro4-txt">To overcome these challenges, I used responsive design principles and tools like Bootstrap,
                        which facilitated the adaptation of the website for various screen sizes.
                        While the current version is functional, I acknowledge that there is room for improvement.
                        I am committed to continuously refining and maintaining the website to enhance its performance and user experience.
                    </p>
                </div>
            </div>
            <div className="progress-container">
                <h1 className="progress-title">Project Development Timeline</h1>
                <div className="progress-item">
                    <h3 className="item1">Week 1: Research and Conceptualization Phase</h3>
                    <p className="item-txt">I researched how to integrate TypeScript with React and investigated the essential features needed for a hair salon website.
                        Additionally, I explored various design ideas that would be suitable for a hair salon.</p>
                </div>
                <div className="progress-item">
                    <h3 className="item2">Week 2: Development and Deployment</h3>
                    <p className="item-txt">I started developing the website, ensuring it was compatible with both desktop and mobile versions.
                        By the end of the week, I deployed the initial version of the website on Netlify.
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
                            <h5 className="w-title">Navigate Our Salon Website: Quick Links in the Menu Guide You to What You Need</h5>
                            <img src={Main} className="d-block w-100 w-img" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <h5 className="w-title">Discover comprehensive details about our services</h5>
                            <img src={Service} className="d-block w-100 w-img" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <h5 className="w-title">See our pricing and connect with our hairstylists for more information</h5>
                            <div className="w3-img-container">
                                <img src={Price} className="d-block w-100 w3-img" alt="..."/>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <h5 className="w-title">Submit a booking request and it will send your request to hairstylist via email</h5>
                            <div className="w3-img-container">
                                <img src={Booking} className="d-block w-100 w3-img" alt="..."/>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <h5 className="w-title">Find Salon Details Fast: Hours, Contact Info, and Maps</h5>
                            <div className="w3-img-container">
                                <img src={Footer} className="d-block w-100 w3-img" alt="..."/>
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

            <button className="btn btn-dark d-grid">
                <a href="https://main--shine-hair-salon.netlify.app//" className="link-to-news">
                    Learn More
                </a>
            </button>

        </div>
    );
};

export default HairSalonProject;

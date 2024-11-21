import React from 'react';
import Github from "../../Assets/githubonly.png";
import Main from "../../Assets/banner.PNG";
import Service from "../../Assets/service.PNG";
import Price from "../../Assets/gallery.PNG";
import Booking from "../../Assets/price-list.PNG";
import Footer from "../../Assets/footer.PNG";

const HairSalonProject = () => {
    return (
        <div className="project">
            <div className="project-container">
                <a href="https://github.com/ChanminLee05/Judy-Hair-Salon.git" target="_blank" rel="noopener noreferrer"><img src={Github} alt="git" className="git-img"/></a>
                <h1 className="project-title">Hair Salon Project</h1>
                <div className="intro1">
                    <p className="intro1-txt">
                        This salon website was built using modern web technologies, including React, TypeScript, HTML, CSS, and Bootstrap, to ensure a seamless and visually appealing user experience.
                        The website is designed to showcase the salon's offerings effectively and provide users with all the information they need in an accessible and engaging manner.
                    </p>
                </div>
                <div className="project-intro">
                    <div className="intro2">
                        <h4 className="intro-title">Features</h4>
                        <ul>
                            <li className="intro2-list">Comprehensive Service Information</li>
                            <li className="intro2-list">User-Friendly Design</li>
                            <li className="intro2-list">Integrated Social Media Gallery</li>
                            <li className="intro2-list">Translation button to Korean</li>
                            <li className="intro2-list">Online Appointment Booking</li>
                            <li className="intro2-list">Modern Visual Aesthetics</li>
                            <li className="intro2-list">Contact and Location Details</li>
                        </ul>
                    </div>
                    <div className="intro3">
                        <h4 className="intro-title">Technologies Used</h4>
                        <p className="intro3-txt">React, TypeScript, Bootstrap, JSX, CSS</p>
                    </div>
                    <div className="intro4">
                        <h4 className="intro-title">Challenges and Solutions</h4>
                        <p className="intro4-txt">
                            This project marked the first time I received a request from a customer to create a professional website.
                            Additionally, collaborating with a graphic designer added complexity to the process. Initially, the customer did not have specific requirements or a clear vision for the website.
                            This left the designer and me to start from scratch, creating a design that would align with the customer's expectations.
                        </p>
                        <p className="intro4-txt">
                            To address these challenges, the graphic designer and I held regular discussions to brainstorm ideas and develop an initial design concept.
                            We maintained consistent communication, refining the design iteratively to ensure it met both the customer's needs and professional standards.
                            Once we had a polished sample, we arranged a follow-up meeting with the customer to present the final design and gather feedback.
                            This collaborative and iterative approach ensured the project's success, despite the initial ambiguity.
                        </p>
                    </div>
                </div>
                <div className="progress-container">
                    <h1 className="progress-title">Project Development Timeline</h1>
                    <div className="progress-item">
                        <h3 className="item1">Week 1: Requirements Gathering</h3>
                        <p className="item-txt">
                            Conducted a meeting with the customer alongside the designer to gather and document all initial requirements.
                        </p>
                    </div>
                    <div className="progress-item">
                        <h3 className="item2">Week 2: Framework & Design Integration</h3>
                        <p className="item-txt">
                            Developed the website’s framework for rapid implementation and refined the layout based on the designer's input.
                        </p>
                    </div>
                    <div className="progress-item">
                        <h3 className="item1">Week 3: Content Implementation</h3>
                        <p className="item-txt">
                            Received additional details from the customer, including service and price lists, and incorporated these into a dedicated price list page.
                        </p>
                    </div>
                    <div className="progress-item">
                        <h3 className="item2">Week 4: Final Review and Deployment</h3>
                        <p className="item-txt">
                            Conducted a final meeting to confirm all requirements were met and deployed the website using Netlify.
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
                                <h5 className="w-title">Explore stunning hair transformations in gallery</h5>
                                    <img src={Price} className="d-block w-100 w-img" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <h5 className="w-title">View pricing and connect with stylists for details</h5>
                                    <img src={Booking} className="d-block w-100 w-img" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <h5 className="w-title">Find Salon Details: Hours, Contact Info, and Maps</h5>
                                    <img src={Footer} className="d-block w-100 w-img" alt="..."/>
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
                    <a href="https://judy-hairsalon-test.netlify.app/" className="link-to-news">
                        Learn More
                    </a>
                </button>
            </div>

        </div>
    );
};

export default HairSalonProject;

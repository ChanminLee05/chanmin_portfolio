import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './WorkPage.css';
import Roulette from '../Assets/w-main.JPG';
import Chatbot from '../Assets/OnlineShop.JPG';
import News from '../Assets/n-main.JPG';
import Solitaire from '../Assets/soli1.PNG';
import Pizza from '../Assets/pizza.png';
import Robot from '../Assets/robot.png';
import NewsImg from '../Assets/news.png';
import Cards from '../Assets/cards.png';

export default function WorkPage() {

    useEffect(() => {
        const handleMouseMove = (event) => {
            const x = event.pageX - event.currentTarget.offsetLeft;
            const y = event.pageY - event.currentTarget.offsetTop;
            const img = event.currentTarget.querySelector('.custom-img');
            img.style.left = `${x}px`;
            img.style.top = `${y}px`;
        };

        return () => {
            document.querySelectorAll('.card').forEach(card => {
                card.addEventListener('mousemove', handleMouseMove);
            });
        };
    }, []);

    return(
        <div className="work-page" data-bs-spy="scroll" data-bs-target="#navbar-example2">
            <h2 className="work-title" id="project">Project</h2>
            <div className="line-break"></div>
            <div className="work-space">
                <div className="card card1">
                    <Link to="/WhatToEat" target="_blank" className="card-link"><img src={Roulette} className="card-img-top project-img" alt="roulette"/>
                        <div className="card-body">
                            <h3 className="card-title">What To Eat</h3>
                            <div className="skill-used">
                                <h5 className="skill-title">Skills</h5>
                                <p className="skill-txt">HTML, CSS, React.js, HTML, Bootstrap</p>
                            </div>
                            <div className="duration">
                                <h5 className="duration-title">Duration</h5>
                                <p className="duration-txt">3 weeks</p>
                            </div>
                            <div className="project-type">
                                <h5 className="project-type-title">Project Type</h5>
                                <p className="project-type-txt">Individual</p>
                            </div>
                            <img src={Pizza} alt="pizza" className="custom-img pizza-img"></img>
                        </div>
                    </Link>
                </div>
                <div className="card card2">
                    <Link to="/ChatBot" target="_blank" className="card-link"><img src={Chatbot} className="card-img-top project-img" alt="roulette"/>
                        <div className="card-body">
                            <h3 className="card-title">Chat Bot Project</h3>
                            <div className="skill-used">
                                <h5 className="skill-title">Skills</h5>
                                <p className="skill-txt">HTML, CSS, Java, MySQL, Apache Tomcat</p>
                            </div>
                            <div className="duration">
                                <h5 className="duration-title">Duration</h5>
                                <p className="duration-txt">1 month</p>
                            </div>
                            <div className="project-type">
                                <h5 className="project-type-title">Project Type</h5>
                                <p className="project-type-txt">Individual</p>
                            </div>
                            <img src={Robot} alt="robot" className="custom-img robot-img"></img>
                            {/*<p className="card-text">The "Chat Bot Project" is an innovative online shopping website featuring a responsive chatbot functionality built with HTML, CSS, JavaScript, and Java.*/}
                            {/*    Users can seamlessly interact with the chatbot for inquiries, enjoy secure login/logout functionalities, and conveniently manage their shopping carts, ensuring a seamless and secure online shopping experience.</p>*/}
                        </div>
                    </Link>
                </div>
                <div className="card card3">
                    <Link to="/NewsAPI" target="_blank" className="card-link"><img src={News} className="card-img-top project-img" alt="roulette"/>
                        <div className="card-body">
                            <h3 className="card-title">News API Project</h3>
                            <div className="skill-used">
                                <h5 className="skill-title">Skills</h5>
                                <p className="skill-txt">HTML, CSS, React.js, HTML, Bootstrap</p>
                            </div>
                            <div className="duration">
                                <h5 className="duration-title">Duration</h5>
                                <p className="duration-txt">2 weeks</p>
                            </div>
                            <div className="project-type">
                                <h5 className="project-type-title">Project Type</h5>
                                <p className="project-type-txt">Individual</p>
                            </div>
                            <img src={NewsImg} alt="news" className="custom-img news-img"></img>
                            {/*<p className="card-text">The "News API Project" provides users with easy access to the latest news articles across diverse categories including Apple, Tesla, Business, Technology, and the Wall Street Journal.*/}
                            {/*    With seamless API integration, users can effortlessly stay informed with regularly updated news content, ensuring a simple and convenient browsing experience.</p>*/}
                        </div>
                    </Link>
                </div>
                <div className="card card4">
                    <Link to="/Solitaire" target="_blank" className="card-link"><img src={Solitaire} className="card-img-top project-img" alt="solitaire"/>
                        <div className="card-body">
                            <h3 className="card-title">Solitaire Game Project</h3>
                            <div className="skill-used">
                                <h5 className="skill-title">Skills</h5>
                                <p className="skill-txt">Java</p>
                            </div>
                            <div className="duration">
                                <h5 className="duration-title">Duration</h5>
                                <p className="duration-txt">4 months</p>
                            </div>
                            <div className="project-type">
                                <h5 className="project-type-title">Project Type</h5>
                                <p className="project-type-txt">Group</p>
                            </div>
                            <img src={Cards} alt="cards" className="custom-img cards-img"></img>
                            {/*<p className="card-text">The "Solitaire Game Project" is an engaging Java-based endeavor, offering users the opportunity to enjoy classic solitaire gameplay with a modern twist.*/}
                            {/*    With the ability to select between Klondike or Vegas Rule variants, users can immerse themselves in a challenging and entertaining solitaire experience, providing hours of fun and entertainment for players.</p>*/}
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}
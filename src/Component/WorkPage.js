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
import HairMain from '../Assets/hair-salon-main.png';
import HairSalon from '../Assets/hair-salon.png';
import ReactGuide from '../Assets/react-guide.PNG';
import ReactImg from '../Assets/react.png';
import Conversion from '../Assets/conversion-page.PNG';
import Calculator from '../Assets/calculator.png';
export default function WorkPage() {

    useEffect(() => {
        const handleMouseMove = (event) => {
            const card = event.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const img = card.querySelector('.custom-img');
            img.style.left = `${x}px`;
            img.style.top = `${y}px`;
        };

        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('mousemove', handleMouseMove);
        });

        return () => {
            cards.forEach(card => {
                card.removeEventListener('mousemove', handleMouseMove);
            });
        };
    }, []);

    return(
        <div className="work-page" data-bs-spy="scroll" data-bs-target="#navbar-example2">
            <h2 className="work-title" id="project">Project</h2>
            <div className="line-break"></div>
            <div className="work-space">
                <div className="card card1">
                    <Link to="/WhatToEat" className="card-link">
                        <img src={Roulette} className="card-img-top project-img" alt="roulette"/>
                        <div className="card-body">
                            <h3 className="card-title">What To Eat</h3>
                            <div className="skill-used">
                                <h5 className="skill-title">Skills</h5>
                                <p className="skill-txt">React, Bootstrap, JSX, CSS</p>
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
                    <Link to="/ChatBot" className="card-link">
                        <img src={Chatbot} className="card-img-top project-img" alt="roulette"/>
                        <div className="card-body">
                            <h3 className="card-title">E-commerce Website Project</h3>
                            <div className="skill-used">
                                <h5 className="skill-title">Skills</h5>
                                <p className="skill-txt">Java, React, JSX, CSS, MySQL, Springboot JPA</p>
                            </div>
                            <div className="duration">
                                <h5 className="duration-title">Duration</h5>
                                <p className="duration-txt">3 months</p>
                            </div>
                            <div className="project-type">
                                <h5 className="project-type-title">Project Type</h5>
                                <p className="project-type-txt">Individual</p>
                            </div>
                            <img src={Robot} alt="robot" className="custom-img robot-img"></img>
                        </div>
                    </Link>
                </div>
                <div className="card card3">
                    <Link to="/ReactGuide" className="card-link">
                        <img src={ReactGuide} className="card-img-top project-img" alt="reactguide"/>
                        <div className="card-body">
                            <h3 className="card-title">React Guide Project</h3>
                            <div className="skill-used">
                                <h5 className="skill-title">Skills</h5>
                                <p className="skill-txt">React, TypeScript, Bootstrap, JSX, CSS </p>
                            </div>
                            <div className="duration">
                                <h5 className="duration-title">Duration</h5>
                                <p className="duration-txt">1 week</p>
                            </div>
                            <div className="project-type">
                                <h5 className="project-type-title">Project Type</h5>
                                <p className="project-type-txt">Individual</p>
                            </div>
                            <img src={ReactImg} alt="news" className="custom-img news-img"></img>
                        </div>
                    </Link>
                </div>
                <div className="card card4">
                    <Link to="/Solitaire" className="card-link">
                        <img src={Solitaire} className="card-img-top project-img" alt="solitaire"/>
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
                        </div>
                    </Link>
                </div>
                <div className="card card5">
                    <Link to="/HairSalon" className="card-link">
                        <img src={HairMain} className="card-img-top project-img" alt="hair salon"/>
                        <div className="card-body">
                            <h3 className="card-title">Hair Salon Project</h3>
                            <div className="skill-used">
                                <h5 className="skill-title">Skills</h5>
                                <p className="skill-txt">React, TypeScript, BootStrap, JSX, CSS</p>
                            </div>
                            <div className="duration">
                                <h5 className="duration-title">Duration</h5>
                                <p className="duration-txt">2 weeks</p>
                            </div>
                            <div className="project-type">
                                <h5 className="project-type-title">Project Type</h5>
                                <p className="project-type-txt">Individual</p>
                            </div>
                            <img src={HairSalon} alt="cards" className="custom-img cards-img"></img>
                        </div>
                    </Link>
                </div>
                <div className="card card6">
                    <Link to="/NewsAPI" className="card-link">
                        <img src={News} className="card-img-top project-img" alt="roulette"/>
                        <div className="card-body">
                            <h3 className="card-title">News API Project</h3>
                            <div className="skill-used">
                                <h5 className="skill-title">Skills</h5>
                                <p className="skill-txt">React, Bootstrap, JSX, CSS </p>
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
                        </div>
                    </Link>
                </div>
                <div className="card card7">
                    <Link to="/ConversionCalculator" className="card-link">
                        <img src={Conversion} className="card-img-top project-img" alt="roulette"/>
                        <div className="card-body">
                            <h3 className="card-title">Conversion Calculator Project</h3>
                            <div className="skill-used">
                                <h5 className="skill-title">Skills</h5>
                                <p className="skill-txt">React, Typescript, JSX, CSS</p>
                            </div>
                            <div className="duration">
                                <h5 className="duration-title">Duration</h5>
                                <p className="duration-txt">1 day</p>
                            </div>
                            <div className="project-type">
                                <h5 className="project-type-title">Project Type</h5>
                                <p className="project-type-txt">Individual</p>
                            </div>
                            <img src={Calculator} alt="news" className="custom-img news-img"></img>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
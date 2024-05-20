import React, {useState} from 'react';
import Github from "../../Assets/githubonly.png";
import S1 from "../../Assets/soli1.PNG";
import Score from "../../Assets/s-score.PNG";
import S4 from "../../Assets/soli5.JPG";
import Klondike from "../../Assets/s-klondike.JPG";
import Vegas from "../../Assets/s-vegas.JPG";
import Draw1 from "../../Assets/s-draw1.PNG";
import Draw3 from "../../Assets/s-draw3.PNG";
import Time1 from "../../Assets/s-time1.PNG";
import Time2 from "../../Assets/s-time2.PNG";
import Undo1 from "../../Assets/s-undo1.PNG";
import Undo2 from "../../Assets/s-undo2.PNG";
import Finish from "../../Assets/s-finish.PNG";

export default function SolitaireGameProject() {
    const [showChallenge, setShowChallenge] = useState(true);

    function toggleShowChallenge() {
        setShowChallenge(!showChallenge);
    }

    return(
        <div className="project">
            <a href="https://github.com/ChanminLee05/Solitaire_Game.git" target="_blank" rel="noopener noreferrer"><img src={Github} alt="git" className="git-img"/></a>
            <h1 className="project-title">Solitaire Game Project</h1>
            <div className="intro1">
                <p className="intro1-txt">
                    This is a collaborative endeavor developed in Java during our school days.
                    With a focus on recreating the familiar Solitaire gameplay, our team aimed to deliver an authentic gaming experience.
                </p>
            </div>
            <div className="project-intro row">
                <div className="intro2 col-6">
                    <h4 className="intro-title">Features</h4>
                    <ul>
                        <li className="intro2-list">Move cards between stacks seamlessly to strategize game</li>
                        <li className="intro2-list">Keep track of progress with a built-in scoring system</li>
                        <li className="intro2-list">Reset the game at any time with the restart function</li>
                        <li className="intro2-list">Choose between Klondike Game style or Vegas Rule Game style for varied gameplay experiences</li>
                        <li className="intro2-list">Time system where the score decreases as time passes</li>
                        <li className="intro2-list">Revert move using undo button</li>
                    </ul>
                </div>
                <div className="intro3 col-3">
                    <h4 className="intro-title">Technologies Used</h4>
                    <p className="intro3-txt">Java</p>
                </div>
            </div>
            <div className="cs-container">
                <div className={`flip-card ${showChallenge ? '' : 'flipped'}`} onClick={toggleShowChallenge}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front challenge">
                            <h1 className="cs-title">Challenge</h1>
                            <ul>
                                <li className="c-list"><i className="bi bi-caret-right-fill"></i>Conceptualizing the Initial Game Design</li>
                                <li className="c-list"><i className="bi bi-caret-right-fill"></i>Dynamic Gameplay Features: Implementing Card Movement, Scoring, and Undo Functionality</li>
                                <li className="c-list"><i className="bi bi-caret-right-fill"></i>Managing feature implementation within the project deadline</li>
                                <li className="c-list"><i className="bi bi-caret-right-fill"></i>Refining and Polishing: Bug Fixing</li>
                            </ul>
                        </div>
                        <div className="flip-card-back solution">
                            <h1 className="cs-title">Solution</h1>
                            <ul>
                                <li className="s-list"><i className="bi bi-caret-right-fill"></i>Gathered requirements and objectives, brainstormed layout and mechanics, sketched user interface, and defined initial features</li>
                                <li className="s-list"><i className="bi bi-caret-right-fill"></i>Conducted frequent team meetings through Microsoft Teams and Jira to refine the game design iteratively</li>
                                <li className="s-list"><i className="bi bi-caret-right-fill"></i>Prioritized essential functionalities and utilized project management tools like Jira for efficient task allocation and progress tracking</li>
                                <li className="s-list"><i className="bi bi-caret-right-fill"></i>Assigned team members specific bug-fixing tasks and conducted regular testing sessions to identify and resolve issues promptly</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="progress-container">
                <h1 className="progress-title">Project Development Key Activities</h1>
                <div className="progress-item">
                    <h3 className="item1">1. Designing Class Structure</h3>
                    <p className="item-txt">We strategized the architecture, outlining essential classes like Card, CardStack, and Interfaces.</p>
                </div>
                <div className="progress-item">
                    <h3 className="item2">2. Implementing Features</h3>
                    <p className="item-txt">We focused on building the core features of the Solitaire game, like dealing cards, moving them between stacks, and enforcing game rules.
                        Our goal was to create a playable game experience.</p>
                </div>
                <div className="progress-item">
                    <h3 className="item1">3. Bug Fixing</h3>
                    <p className="item-txt">We spent time debugging and fixing issues that cropped up during development.
                        This ensured that the game ran smoothly and without any major issues.</p>
                </div>
                <div className="progress-item">
                    <h3 className="item2">4. Demo Presentation</h3>
                    <p className="item-txt">We showcased the game at various stages of development to gather feedback and keep stakeholders updated.
                        This helped us refine the game and make improvements based on user input.</p>
                </div>
                <div className="progress-item">
                    <h3 className="item1">5. Testing</h3>
                    <p className="item-txt">We extensively tested the game to ensure it met quality standards before release.
                        This included playing the game ourselves and writing test cases to verify all features functioned correctly. </p>
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
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <h5 className="w-title">Select Your Preferred Game Mode: Klondike or Vegas Rules</h5>
                            <img src={S1} className="d-block w-100 w-img" alt="..."/>
                            <img src={Klondike} className="version-img1" alt="..."/>
                            <img src={Vegas} className="version-img2" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <h5 className="w-title">Strategize and Score: Moving Cards Between Decks</h5>
                            <img src={Score} className="d-block w-100 w-img" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <h5 className="w-title">Time Penalty: Decreasing Score Over Time</h5>
                            <div className="w3-img-container">
                                <img src={Time1} className="time-img1" alt="..."/>
                                <i className="bi bi-arrow-right"></i>
                                <img src={Time2} className="time-img2" alt="..."/>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <h5 className="w-title">Hardcore Challenge: Drawing Three Cards at a Time</h5>
                            <div className="w4-img-container">
                                <img src={Draw1} className="draw-img1" alt="..."/>
                                <img src={Draw3} className="draw-img2" alt="..."/>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <h5 className="w-title">Undo Feature: Correct Your Mistakes by Reverting Moves</h5>
                            <div className="w3-img-container">
                                <img src={Undo1} className="time-img1" alt="..."/>
                                <i className="bi bi-arrow-right"></i>
                                <img src={Undo2} className="time-img2" alt="..."/>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <h5 className="w-title">Take on the Challenge: Play, Enjoy, and Have Fun!</h5>
                            <img src={Finish} className="d-block w-100 w-img" alt="..."/>
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

            <button className="btn btn-dark d-grid"><a src="#">Learn More</a></button>

        </div>
    );
}
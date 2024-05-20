import React from 'react';
import HeaderNav from "./HeaderNav";
import './FirstPage.css';
import Github from '../Assets/githubonly.png';
import LinkedIn from '../Assets/linkedin.png';
import Mail from '../Assets/mail.png'

export default function FirstPage() {
    const letters = ['R','e','a','c','t','\u00A0','a','n','d','\u00A0','J','a','v','a','\u00A0','D','e','v','e','l','o','p','e','r'];

    return(
        <>
            <HeaderNav/>
            <div className="greeting">
                <h1 className="greeting-txt">Hello</h1>
                <h1 className="greeting-txt">I'm Chanmin Lee</h1>
                <h2 className="animate-letters">
                    {letters.map((letter, index) => (
                    <div key={index} className="letter" style={{animationDelay: index * 0.1 + 's'}}>
                        {letter}
                    </div>
                    ))}
                </h2>
                <h2 className="greeting-txt2">Based in Edmonton, AB</h2>
            </div>
            <div className="profile-container">
                <button type="button" className="btn"><img className="profile-img" src={Github} alt="github"/></button>
                <button type="button" className="btn"><img className="profile-img" src={LinkedIn} alt="linkedin"/></button>
                <button type="button" className="btn"><img className="profile-img" src={Mail} alt="mail"/></button>
            </div>
            <a href="#" className="btn goback-btn"><i className="bi bi-arrow-up-circle"></i></a>
        </>
    )
}
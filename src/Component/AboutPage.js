import React from 'react';
import './AboutPage.css';
import Profile from '../Assets/example-portrait.jpg';
import java from "../Assets/java.webp";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import js from "../Assets/js.webp";
import mysql from "../Assets/mysql.png";
import php from "../Assets/php.png";
import linux from "../Assets/linux.png";
import mongoDB from "../Assets/mongoDB.png"
import github from "../Assets/github.png"
import jira from "../Assets/jira.JPG"
import bootstrap from "../Assets/bootstrap.JPG"
import docker from "../Assets/docker.png"
import react from "../Assets/react.png"
import rest from "../Assets/rest-api.png"
import spring from "../Assets/spring-boot.JPG"
import jpa from "../Assets/jpa.webp"

export default function AboutPage() {
    return(
        <div className="about-page" data-bs-spy="scroll" data-bs-target="#navbar-example2">
            <h2 className="about-title" id="about">About</h2>
            <div className="line-break"></div>
            <div className="info-container row">
                <div className="info1 col-6">
                    <img className="myImg" src={Profile} alt="profile"/>
                </div>
                <div className="info2 col-6">
                    <h4>About me</h4>
                        <p className="info2-about"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse explicabo nam necessitatibus, perspiciatis reprehenderit similique velit.
                            Architecto asperiores cum eius fuga maxime obcaecati omnis quo voluptates! Atque cupiditate eveniet fugiat.</p>
                    <h4>Education</h4>
                        <div className="ed-container">
                            <p className="info2-ed">Computer Programming, Diploma</p>
                            <p className="info2-sub">Algonquin College, Ontario</p>
                        </div>
                        <div className="ed-container">
                            <p className="info2-ed">Environmental Technology, Advanced Diploma</p>
                            <p className="info2-sub">Fanshawe College, Ontario</p>
                        </div>
                    <h4>Skills</h4>
                    <div className="skill-container">
                        <img className="skill-img" src={html} alt={html}/>
                        <img className="skill-img" src={css} alt={css}/>
                        <img className="skill-img" src={js} alt={js}/>
                        <img className="skill-img" src={react} alt={react}/>
                        <img className="skill-img" src={bootstrap} alt={bootstrap}/>
                        <img className="skill-img" src={java} alt={java}/>
                        <img className="skill-img" src={php} alt={php}/>
                        <img className="skill-img" src={mysql} alt={mysql}/>
                        <img className="skill-img" src={mongoDB} alt={mongoDB}/>
                        <img className="skill-img" src={github} alt={github}/>
                        <img className="skill-img" src={jira} alt={jira}/>
                        <img className="skill-img" src={docker} alt={docker}/>
                        <img className="skill-img" src={rest} alt={rest}/>
                        <img className="skill-img" src={spring} alt={spring}/>
                        <img className="skill-img" src={jpa} alt={jpa}/>
                        <img className="skill-img" src={linux} alt={linux}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
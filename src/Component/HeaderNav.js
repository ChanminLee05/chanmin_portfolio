import React from 'react';
import './HeadNav.css';
import Resume from '../Assets/Chanmin Lee - Resume.pdf';
export default function HeaderNav() {
    return(
        <ul className="nav nav-underline nav-bar justify-content-end head-nav">
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#project">Project</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="mailto:lee.chanmin1@gamil.com">Contact</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href={Resume} download="Resume-ChanminLee">Resume</a>
            </li>
        </ul>
    )
}
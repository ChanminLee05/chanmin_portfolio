import React from 'react';
import FirstPage from "./FirstPage";
import WorkPage from "./WorkPage";
import AboutPage from "./AboutPage";

export default function MainPage() {
    return(
        <div className="main">
            <FirstPage/>
            <WorkPage/>
            <AboutPage/>
        </div>
    )
}
import React from 'react';
import '../App.css';
import {CustomNavbar} from "../IHateNamingThings/CustomNavbar";

function AboutUs() {
    return (
        <div className="App">
            <header className="App-header">
                <title>404 NOT FOUND</title>
                <link href="https://fonts.cdnfonts.com/css/lemonmilk" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"></link>
                <CustomNavbar />

                <ul>
                    <li><h1><a href="mailto:jay.ramananda11@gmail.com?Subject=About%20Your%20Elements%20Submission">jay.ramananda11@gmail.com</a></h1></li>
                    <li><h1><a href="mailto:satyamedh9@gmail.com?Subject=About%20Your%20Elements%20Submission">satyamedh9@gmail.com</a></h1></li>
                </ul>
            </header>

        </div>
    );
}


export default AboutUs;

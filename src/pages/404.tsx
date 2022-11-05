import React from 'react';
import '../App.css';
import {CustomNavbar} from "../IHateNamingThings/CustomNavbar";
import workinprogress from "../media/workinprogress.png";

function L404() {
    return (
        <div className="App">
            <header className="App-header">
                <title></title> {/* TODO insert title */}
                <link href="https://fonts.cdnfonts.com/css/lemonmilk" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"></link>
                <CustomNavbar />

                <img src={workinprogress} alt=""/>
                <h1>Uh oh! Website ends here!!</h1>
            </header>

        </div>
    );
}


export default L404;

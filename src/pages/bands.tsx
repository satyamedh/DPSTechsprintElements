import React from 'react';
import '../App.css';
import {CustomNavbar} from "../IHateNamingThings/CustomNavbar";

function Bands() {
    return (
            <div className="App">
                <header className="App-header">
                    <title></title> {/* TODO insert title */}
                    <link href="https://fonts.cdnfonts.com/css/lemonmilk" rel="stylesheet"></link>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"></link>
                    <CustomNavbar />
                    <div className="bg-blue-600 text-white text-center text-3xl w-80 h-32 rounded">

                    </div>
                </header>
            </div>
    );
}


export default Bands;

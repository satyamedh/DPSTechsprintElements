import React from 'react';
import '../App.css';
import {CustomNavbar} from "../IHateNamingThings/CustomNavbar";
import Banner from "../media/banner.mp4";

function Home() {
    return (
            <div className="App">
                <header className="App-header">
                    <title></title> {/* TODO insert title */}
                    <link href="https://fonts.cdnfonts.com/css/lemonmilk" rel="stylesheet"></link>
                    <CustomNavbar />
                    <div className="topples">
                        <video autoPlay loop muted className="w-screen object-cover p-2">
                            <source src={Banner} type="video/mp4" />
                        </video>
                    </div>
                </header>
            </div>
    );
}


export default Home;

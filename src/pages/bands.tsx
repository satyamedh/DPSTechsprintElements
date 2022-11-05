import React from 'react';
import '../App.css';
import {CustomNavbar} from "../IHateNamingThings/CustomNavbar";
import jcole from "../media/jcole.png";
import travis_scott from "../media/travis_scott.jpg";
import eminem from "../media/eminem.jpg";
import CustomBand from "../IHateNamingThings/CustomBand";

function Bands() {
    return (
            <div className="App">
                <header className="App-header">
                    <title></title> {/* TODO insert title */}
                    <link href="https://fonts.cdnfonts.com/css/lemonmilk" rel="stylesheet"></link>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"></link>

                    <CustomNavbar />
                    <CustomBand title="J. cole" img1={jcole} spotify="https://open.spotify.com/embed/track/68Dni7IE4VyPkTOH9mRWHr?utm_source=generator&theme=0" classes="bg-blue-500" insta="https://www.instagram.com/jcolevillle/" yt="https://www.youtube.com/channel/UCnc6db-y3IU7CkT_yeVXdVg"/>
                    <CustomBand title="Eminem" img1={eminem} spotify="https://open.spotify.com/embed/track/6or1bKJiZ06IlK0vFvY75k?utm_source=generator" classes="eminem" insta="https://www.instagram.com/eminem/" yt="https://www.youtube.com/channel/UCfM3zsQsOnfWNUppiycmBuw"/>
                    <CustomBand title="Travis Scott" img1={travis_scott} spotify="https://open.spotify.com/embed/track/2xLMifQCjDGFmkHkpNLD9h?utm_source=generator&theme=0" classes="travis" insta="https://www.instagram.com/travisscott/" yt="https://www.youtube.com/channel/UCtxdfwb9wfkoGocVUAJ-Bmg"/>

                </header>
            </div>
    );
}


export default Bands;

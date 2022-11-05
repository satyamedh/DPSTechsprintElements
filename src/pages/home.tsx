import React, {useEffect, useRef, useState} from 'react';
import '../App.css';
import {CustomNavbar} from "../IHateNamingThings/CustomNavbar";
import Banner from "../media/banner.mp4";

const timestamp = 1672504200;

function Home() {

    const Ref = useRef(null);

    const [timer, setTimer] = useState("00:00:00:00")

    const getTimeRemaining = () => {
        // @ts-ignore
        const total = timestamp - (Date.parse(new Date()) / 1000)
        const seconds = Math.floor(total % 60)
        const minutes = Math.floor((total / 60) % 60)
        const hours = Math.floor((total / 60 / 60) % 24)
        const days = Math.floor((total / 60 / 60 / 24) % 30)
        console.log(total, seconds, minutes, hours, days)
        return {
            total, days, hours, minutes, seconds
        }


    }
    const startCountdown = () => {
        let {total, days, hours, minutes, seconds} = getTimeRemaining();
        console.log(getTimeRemaining())
        if (total >= 1){
            setTimer(
                `${days > 9 ? days : '0' + days} Days, ${hours > 9 ? hours : '0' + hours} Hours, ${minutes > 9 ? minutes : '0' + minutes} Minutes and ${seconds > 9 ? seconds : '0' + seconds} seconds to go!`
            )
        } else {
            // @ts-ignore
            document.getElementById("deletethisshit").className = ""
            // @ts-ignore
            document.getElementById("InlineImage").className = ""
            // @ts-ignore
            document.getElementById("InlineImage2").className = ""
        }
    }

    const clearTimer = () => {
        setTimer('00:00:00:00');
        if (Ref.current) clearInterval(Ref.current);
        // @ts-ignore
        Ref.current = setInterval(() => {
            startCountdown();
        }, 1000);
    }

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds());
        return deadline;
    }

    useEffect(() => {
        clearTimer();
    }, []);

    return (
            <div className="App">
                <header className="App-header">
                    <title>The Silmaril Music Fest</title>
                    <link href="https://fonts.cdnfonts.com/css/lemonmilk" rel="stylesheet"></link>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"></link>
                    <CustomNavbar />
                    <div className="topples">
                        <video autoPlay loop muted className="w-screen object-cover p-2">
                            <source src={Banner} type="video/mp4" />
                        </video>
                    </div>
                    <div className="text-white text-center text-3xl w-auto rounded m-5 align-middle content-center poppins">
                        <h1 className="p-4">
                           <b>Join us for a New Year's Fest on December 31st 2022!</b>
                        </h1>
                        <h2 className="text-m">
                            Hard rock cafe, 10:00PM 31st December 2022!
                        </h2>
                        <div className="bg-gray-700 rounded">
                            <h1 className="p-2 m-8 text-4xl"><b>{timer}</b></h1>
                        </div>
                    </div>
                </header>
            </div>
    );
}


export default Home;

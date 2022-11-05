import React from 'react';
import '../App.css';
import {CustomNavbar} from "../IHateNamingThings/CustomNavbar";
import CustomPaymentOptions from "../IHateNamingThings/CustomPaymentOptions";

function Tickets() {
    return (
        <div className="App">
            <header className="App-header">
                <title></title> {/* TODO insert title */}
                <link href="https://fonts.cdnfonts.com/css/lemonmilk" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"></link>
                <CustomNavbar />
                <span className="inline-block">
                    <CustomPaymentOptions title="Basic ticket" classes="bg-cyan-600 h-100 border-4 border-cyan-600 transition duration-150 border-8 border-transparent hover:border-cyan-400 float-left" p1="Rows 5-10" p2="No chairs" price="₹1000"/>
                    <CustomPaymentOptions title="Gallery Ticket" classes="bg-yellow-500 h-100 border-4 border-yellow-500 transition duration-150 border-8 border-transparent hover:border-yellow-200 float-left" p1="Personal food and drinks" p2="Free resources" p3="Backstage pass" price="₹2000"/>
                    <CustomPaymentOptions title="Front ticket" classes="bg-cyan-600 h-100 border-4 border-cyan-600 transition duration-150 border-8 border-transparent hover:border-cyan-400 float-right" p1="Rows 1-4" p2="Leather Chairs provided" price="₹1500"/>

                </span>
            </header>

        </div>
    );
}


export default Tickets;

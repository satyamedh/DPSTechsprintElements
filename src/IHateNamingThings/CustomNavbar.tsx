import React, { Component } from 'react';
import CustomNavbarElement from "./CustomNavbarElement";

export class CustomNavbar extends Component {
        render() {
                return (
                    <ul className="bg-black top-0 absolute w-screen flex rightples nav-links">
                            <CustomNavbarElement text="Music Fest" alignn="leftples" class="left-full" />
                            <CustomNavbarElement text="Bands" class="absolute "/>
                            <CustomNavbarElement text="Venue" class="absolute"/>
                            <CustomNavbarElement text="Timings" class="absolute"/>
                            <CustomNavbarElement text="Tickets" class="absolute"/>
                    </ul>
                )
        }
}
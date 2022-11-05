import React, { Component } from 'react';
import CustomNavbarElement from "./CustomNavbarElement";

export class CustomNavbar extends Component {
        render() {
                return (
                    <ul className="bg-black top-0 absolute w-screen flex rightples nav-links">

                        <CustomNavbarElement text="Music Fest" alignn="leftples " class="left-full" link="/" classes="text-2xl"/>
                        <CustomNavbarElement text="Bands" class="absolute" link="/bands"/>
                        <CustomNavbarElement text="Venue" class="absolute" link="/"/>
                        <CustomNavbarElement text="Tickets" class="absolute" link="/"/>
                    </ul>
                )
        }
}
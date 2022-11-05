import React, { Component } from 'react';
import CustomNavbarElement from "./CustomNavbarElement";

export class CustomNavbar extends Component {
        render() {
                return (
                    <ul className="bg-black top-0 absolute w-screen flex rightples nav-links">

                        <CustomNavbarElement text="Music Fest" alignn="leftples " class="left-full" link="/" classes="text-3xl"/>
                        <CustomNavbarElement text="Performers" class="absolute" link="/bands"/>
                        <CustomNavbarElement text="Venue" class="absolute" link="https://goo.gl/maps/urT5orhhTBVXvqYE9"/>
                        <CustomNavbarElement text="Tickets" class="absolute" link="/tickets"/>
                    </ul>
                )
        }
}
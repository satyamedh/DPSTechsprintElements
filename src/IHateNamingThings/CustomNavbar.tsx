import React, { Component } from 'react';
import CustomNavbarElement from "./CustomNavbarElement";
import CustomNavbarImageElement from "./CustomNavbarImageElement";
import logo from "../media/logo.png";

export class CustomNavbar extends Component {
        render() {
                return (
                    <ul className="bg-black top-0 absolute w-screen flex rightples nav-links">

                        <CustomNavbarImageElement srcc={logo} alignn="leftples " class="left-full" link="/DPSTechsprintElements/" classes="text-3xl"/>
                        <CustomNavbarElement text="Performers" class="absolute" link="/DPSTechsprintElements/bands"/>
                        <CustomNavbarElement text="Venue" class="absolute" link="https://goo.gl/maps/urT5orhhTBVXvqYE9"/>
                        <CustomNavbarElement text="Tickets" class="absolute" link="/DPSTechsprintElements/tickets"/>
                        <CustomNavbarElement text="Contact us" class="absolute" link="/DPSTechsprintElements/aboutus"/>

                    </ul>
                )
        }
}
import React from 'react';

export default function CustomNavbarElement(props: any){

    var classes = "lemonmilk text-white text-sm capitalize m-5 transition duration-75 border-b-2 border-transparent hover:border-cyan-400 mx-10".concat(" ").concat(props.classes);

    return(
        <div className={props.alignn}>
            <li className={classes}>
                <a href={props.link}>{props.text}</a>
            </li>
        </div>
    )


}
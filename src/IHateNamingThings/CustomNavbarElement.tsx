import React from 'react';

export default function CustomNavbarElement(props: any){

    return(
        <div className={props.alignn}>
            <li className="lemonmilk text-white text-sm capitalize m-5 transition duration-75 border-b-2 border-transparent hover:border-cyan-400">
                <a>{props.text}</a>
            </li>
        </div>
    )


}
import React from 'react';

export default function CustomNavbarImageElement(props: any){

    var classes = "lemonmilk text-white text-sm capitalize m-5 align-middle".concat(" ").concat(props.classes);

    return(
        <div className={props.alignn}>
            <li className={classes}>
                <a href={props.link}><img className="widthsmol" src={props.srcc}/></a>
            </li>
        </div>
    )


}
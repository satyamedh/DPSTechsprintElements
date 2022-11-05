import React from 'react';

export default function CustomPaymentOptions(props: any){

    var classes = "flex flex-col justify-center items-center text-white rounded-2xl p-8 m-8".concat(" ").concat(props.classes);

    function offigotonowhere(){
        window.location.href = "/book";
    }

    return(
        <div className={classes}>
            <h1 className="m-10 text-4xl"><b>{props.title}</b></h1>
            <ol>
                <li className="text-xl-center">{props.p1}</li>
                <br></br>
                <li className="text-xl-center">{props.p2}</li>
                <br></br>
                <li className="text-xl-center">{props.p3}</li>
                <br></br>
            </ol>
            <button className="bg-green-400 text-white text-sm rounded w-32 h-10 transition duration-150 hover:text-xl" onClick={offigotonowhere}><b>{props.price}</b></button>
        </div>
    )


}
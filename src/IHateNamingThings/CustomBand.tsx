import React from 'react';
import insta from "../media/insta.png";
import yt from "../media/yt.png";

export default function CustomBand(props: any){

    var classes = "flex flex-col justify-center items-center text-white rounded-2xl p-8 m-8 rounded lemonmilk".concat(" ").concat(props.classes);


    return(
        <div className={classes}>
            <h1 className="text-4xl p-4"><b>{props.title}</b></h1>
            <div className="inline-block flex">
                <img src={props.img1} className="spotpic float-left rounded-2xl"></img>
                <iframe className="rounded m-4"
                        src={props.spotify}
                        width="100%" height="152" frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"></iframe>
                <div>
                    <a href={props.insta} target="_blank"><img src={insta} className="spotpic mb-8"></img></a>
                    <a href={props.yt} target="_blank"><img src={yt} className="spotpic"></img></a>
                </div>
            </div>
        </div>
)


}
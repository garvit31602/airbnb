import React from "react";
import { ReactDOM } from "react";
import star from './images/Star 1.png'

function Card(prop){
    let badgeText;
    if(prop.openSpots==0)
        badgeText="SOLD OUT"
    else if(prop.country=="Online")
        badgeText="ONLINE"
    return(
        <div id="card">
            <div id="badgeText"> {badgeText} </div>
            <img  id= 'cardphoto' width={100}  height={150} src={process.env.PUBLIC_URL + `/${prop.img}`}></img>
            <div id="bottom">
            <img width={7} src={star}></img>
            <span>{prop.rating}</span>
            <span id="grey"> ({prop.reviewcount}) • {prop.country}
            </span>
            <p>{prop.title}</p>
            <p><span id="bold">From ${prop.price} </span>/ person</p>
            </div>
        </div>
    )
}

export default Card;
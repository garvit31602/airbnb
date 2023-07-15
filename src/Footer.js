import React from "react";
import { ReactDOM } from "react";
import twitter from "./images/Twitter Icon.svg";
import facebook from "./images/Facebook Icon.svg";
import insta from "./images/Instagram Icon.svg";
import git from "./images/GitHub Icon.svg";

function Footer(){
    return(
        <div id="footer">
            <img src={twitter}></img>
            <img src={facebook}></img>
            <img src={insta}></img>
            <img src={git}></img>
        </div>
    )
}
 export default Footer;
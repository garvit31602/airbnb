import React from 'react';
import ReactDOM from 'react-dom/client';
import airbnb from "./images/airbnb 1.svg";

function Navbar(){
    return(
        <div id="nav">
            <img src={airbnb}></img>
        </div>
    )
}

export default Navbar;

import React from "react";
import './Games.css';


function Game(props) {
    return (

        <marquee className="ma">
            <h1>{props.name}</h1>
        </marquee>
    );
}
export default Game
import React from "react";
import './CrazyCalc.css';


function CrazyCal() {
    return (
        <>
            <h1 className="head">The Crazy Calculator</h1>
        </>
    );
}

function Skeleton() {
    return (
        <div className="container"> 
            <input  className="screen" type='number' readonly></input>
            <br></br>
            <br></br>
            <div>
            <button className="butn">1</button>
            <button className="butn">2</button>
            <button className="butn">3</button>
            <button className="butn">+</button>
            </div>

            <div>
            <button className="butn">4</button>
            <button className="butn">5</button>
            <button className="butn">6</button>
            <button className="butn">-</button>
            </div>

            <div>
            <button className="butn">7</button>
            <button className="butn">8</button>
            <button className="butn">9</button>
            <button className="butn">*</button>
            </div>

            <div>
            <button className="butn">/</button>
            <button className="butn">0</button>
            <button className="ebutn">=</button>
            <button className="butn">C</button>
            </div>


           
        </div>
    );

}


function Calc() {
    return (
        <>
            <CrazyCal />
            <Skeleton />
        </>
    );

}
export default Calc
import React from "react";
import './nav.css';
import Read from "./Read";
import ReadBaki from "./Books/Baki";
import ReadBlueLock from "./Books/BlueLock";
import ReadBoruto from "./Books/Boruto";
import ReadDk from "./Books/Dk";
import ReadDn from "./Books/Dn";
import ReadDs from "./Books/Ds";
import ReadJjk from "./Books/Jjk";
import ReadOne from "./Books/OnePiece";
import ReadSlime from "./Books/Slime";
import ReadNaruto from "./Books/Naruto";

function NavShow() {
    return (

        <div class="navbar">
            <a href="#home">Home</a>
           
            <div class="dropdown">
                <button class="dropbtn">Books You Can Read
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    
                    <a onclick={<Read name ={<ReadNaruto/>}/>}>Naruto</a>
                    <a href="#">One Piece</a>
                    <a href="#">Demon Slayer</a>
                    <a href="#">Jujutsu Kaisen</a>
                    <a href="#">That Time I got Reincarnated As A Slime</a>
                    <a href="#">Misfit :Demon King Academy</a>
                    <a href="#">Boruto :Naruto Next Generations</a>
                    <a href="#">Baki : Son Of The Ogre</a>
                    <a href="#">Death Note</a>
                    <a href="#">Spy X Family</a>
                    <a href="#">Vinland Saga</a>
                    
                    
                </div>
            </div>
            <a href="#Magic">Magic 8 Ball</a>
            <a href="#news">Play TicTacToe</a>
            <a href="#news">About Us</a>
        </div>

    );
}
export default NavShow
import React from "react";
import './Books.css';
import baki from './BookImg/baki.jpeg';
import block from './BookImg/block.jpeg';
import boruto from './BookImg/boruto.jpeg';
import demon from './BookImg/demon.jpeg';
import dn from './BookImg/dn.jpeg';
import jjk from './BookImg/jjk.jpeg';
import misfit from './BookImg/misfit.jpeg';
import naruto from './BookImg/naruto.jpeg';
import onep from './BookImg/onep.jpeg';
import ttime from './BookImg/ttime.jpeg';
import vin from './BookImg/vin.jpeg';
import spy from './BookImg/spy.jpeg';
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
import ReadVin from "./Books/Vinland";
import ReadSpy from "./Books/Spyfam";
import Game from "./Games";

function BookShow() {

    return (


        <>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src={boruto} alt="Avatar" />
                        <div class="container">
                        <Read name ={<ReadBoruto/>}/>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={naruto} alt="Avatar" />
                        <div class="container">
                            <Read name ={<ReadNaruto/>}/>

                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={block} alt="Avatar" />
                        <div class="container">
                        <Read name ={<ReadBlueLock/>}/>

                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={baki} alt="Avatar" />
                        <div class="container">
                        <Read name ={<ReadBaki/>}/>

                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <Game/>
            <br></br>
            
            <div class="row>">
                <div class="column">
                    <div class="card">
                        <img src={misfit} alt="Avatar" />
                        <div class="container">
                        <Read name ={<ReadDk/>}/>

                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img class="image" src={jjk} alt="Avatar" />
                        <div class="container">
                        <Read name ={<ReadJjk/>}/>

                        </div>
                    </div>
                </div>

                <div className="column">
                    <div class="card">
                        <img src={demon} alt="Avatar" />
                        <div class="container">
                        <Read name ={<ReadDs/>}/>

                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={dn} alt="Avatar" />
                        <div class="container">
                        <Read name ={<ReadDn/>}/>

                        </div>
                    </div>
                </div>
            </div>

            
            <br></br>
            <Game/>
            <br></br>

            
            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src={ttime} alt="Avatar" />
                        <div class="container">
                        <Read name ={<ReadSlime/>}/>

                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={onep} alt="Avatar" />
                        <div class="container">
                        <Read name ={<ReadOne/>}/>

                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={vin} alt="Avatar" />
                        <div class="container">
                        <Read name ={<ReadVin/>}/>

                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={spy} alt="Avatar" />
                        <div class="container">
                        <Read name ={<ReadSpy/>}/>

                        </div>
                    </div>
                </div>
            </div>

            
            




        </>

    );
}
export default BookShow
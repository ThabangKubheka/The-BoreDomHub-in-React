import './App.css';
import NavShow from './Nav';
import ShowHeader from './Header';
import BookShow from './Books.js';
import Ad from './Trending';
import Magic from './Magic'
import Game from './Games';
import Play from './tictactoe.js';
import Calc from './CrazyCalc';
import Read from './Read.js';
import ReadBaki from './Books/Baki';
import Handler from './handler';
import Login from './login';


function App() {
  return (
    <>
    
    <header>
    <ShowHeader/>
    <Handler/>
    </header>
    <br/>
    <Ad/>
    <br/>
    <BookShow/>
    <br/>
    <br/>
    <Game name="Featured Games"/>
    <br/>
    <Magic/>
    <br/>
    <br/>
    <Game name/>
    <Play/>
    <br/>
    <br/>
    <Game/>
    <br/>
    <br/>
  
    </>

    
  );
}

export default App;

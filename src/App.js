import './App.css';
import ShowHeader from './Header';
import BookShow from './BookShow.js';
import Ad from './Trending';
import Magic from './Magic'
import Game from './Games';
import Play from './tictactoe.js';
import Handler from './handler';


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

import React, { Component } from 'react';
import './App.css';
import PokeCards from './PokeCards';
import './PokeCard.css';
import './PokeCards.css';
import Game from './Game';
import Random from './Random';
import Clicker from './clicker/Clicker';

function App() {



  return (
    <div className="App">
    <PokeCards/>    
    <Game/>
    <Random maxNum={100} />
   <Clicker/>
    </div>
  );
}

export default App;

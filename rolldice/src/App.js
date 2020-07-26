import React from 'react';
import './App.css';
import Rolldice from './RollDice';
import CountNumbers from './CountNumbers';
import Ball from './lottery/Ball';
import CoinContainer from './coinflipper/CoinContainer'
import Lottery from './lottery/Lottery';
import Box from './ColorBOX/BoxContainer'
import BG from './backgroundcolor/BG'
import NumberList from './DataFlow/NumberList'
import Form2 from './form/Form'
import DM from './LifeCycle/DidMount'
import VendingMachine from './VendingMachine/VendingMachine'
import {Route} from 'react-router-dom'
import Toggler from './CounterHooks/Toggler'
import Form from './form(Hook)/Form'
function App() {
//   <Rolldice />
//   <CountNumbers/>
// <Lottery/>
// <CoinContainer/>
// <Box/>
// <BG/>
// <Form/>
// <DM/>
// <NumberList/>
// <Route path='/' component={VendingMachine}/>
  return (
    <div className="App">
  <Toggler></Toggler>
  <Form/>
     </div>
  );
}

export default App;

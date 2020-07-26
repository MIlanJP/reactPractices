import React, { Component } from 'react'
import {choose} from './Utility' 
import Coin from './Coin'
class CoinContainer extends Component{
static defaultProps={
coins:[
    {side:'heads',img:"Assets/heads.jpg"},
    {side:'tails',img:"Assets/tailss.jpg"}
]
}
constructor(props){
super(props)
this.state={
    currCoinFace:null,
    noOfFlips:0,
    headsCount:0,
    tailsCount:0
}
this.handleCLick=this.handleCLick.bind(this);
}

flipCOin(){
    const coinface=choose(this.props.coins)
    this.setState(oldState=>{
    let newState={
        ...oldState,
        currCoinFace:coinface,
        noOfFlips:oldState.noOfFlips+1
    }
    if(coinface.side==='heads'){
        newState.headsCount+=1;
    }else{
        newState.tailsCount+=1;
    }
return newState;

}
)
}

handleCLick(){
    this.flipCOin();
}

render(){
    return (
<div>
<h1>Flip the coin</h1>
<Coin side={this.state.currCoinFace}  />
<button onClick={this.handleCLick} >Flip The Coin</button>
<p>No OF flips {this.state.noOfFlips} and heads: {this.state.headsCount} tailss: {this.state.tailsCount}</p>
</div>
        )
}

}
export default CoinContainer;



